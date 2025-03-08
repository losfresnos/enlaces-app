import { turso } from '../turso'
import logger from '../configuration/logger';
import type {CardPropsDto, Category, Enviroment, Tag, Link, LinkTag }  from '../model/AppModel'
import { home } from '../data/site';
import { capitalize, setBoolean } from '../utils/util'
import { Base64 } from 'js-base64';      
import { dbInit } from '../data/drizzle'
import type { Client } from '@libsql/client';


export async function getEnviromentsByCategory(categoryId:string):Promise<Enviroment[]>{
    const { rows } = await turso.execute({
        sql: `SELECT Enviroment.id AS id, Enviroment.label AS label,Enviroment.enviroment AS enviroment,Enviroment.checked AS checked 
              FROM Category_Enviroment JOIN Category ON Category_Enviroment.idCategory = Category.id 
              JOIN Enviroment ON Category_Enviroment.idEnviroment = Enviroment.id
              WHERE Category_Enviroment.idCategory = ?`,
        args: [categoryId],
    });  
    logger.info("getEnviromentsByCategory database:"+JSON.stringify(rows));
    let enviroments = [] as Enviroment[];
    if(rows.length){
        rows.forEach((enviroment) => {
            logger.info("enviroment database:"+JSON.stringify(enviroment));
            let env = { 
                id: enviroment.id,
                label: enviroment.label,
                enviroment: enviroment.enviroment,
                checked: setBoolean(enviroment.checked) } as Enviroment;
            enviroments.push(env);
        });
    }

    return enviroments;
}

export async function getTags(linkId:string):Promise<Tag[]>{
    let tags = [] as Tag[];
    const { rows } = await turso.execute({
        sql: `SELECT Tag.tag AS tag,Enviroment.enviroment AS enviroment 
            FROM Link_Tag_Env 
            JOIN Link ON Link_Tag_Env.linkId = Link.id 
            JOIN Tag ON Link_Tag_Env.tagid = Tag.id
            JOIN Enviroment ON Link_Tag_Env.enviromentid = Enviroment.id
            WHERE Link_Tag_Env.linkId = ?`,
        args: [linkId],
    }); 
    logger.info("getTags database:"+JSON.stringify(rows));       
    if(rows.length){
        rows.forEach((datos) => {              
            let tagData = { 
                enviroment: datos.enviroment,
                tag: datos.tag,
            } as Tag;   

            tags.push(tagData);
        });
    }
   
    
    return tags;
}

export async function getLinks(categoryId:string){
    let links = await getLinksByCategory(categoryId);
    logger.info("getLinks links:"+JSON.stringify(links));
 
    return Promise.all(links.map(async link => ({
        link: link,
        tags: await getTags(link.id)
    })))
}


export async function getLinksByCategory(categoryId:string) {
    const { rows } = await turso.execute({
        sql: "SELECT * FROM Link WHERE categoryId = ?",
        args: [categoryId],
    });  
    logger.info("getLinksByCategory database:"+JSON.stringify(rows));
 
    let links = [] as Link[];
    if(rows.length){
        rows.forEach((datos) => {
            logger.info("link database:"+JSON.stringify(datos));
            let link = {
                id: datos.id,
                name:Base64.decode(datos.name? datos.name : ""),
                url:Base64.decode(datos.url? datos.url : ""),
                target:datos.target,
                isDinamic:setBoolean(datos.isDinamic? datos.isDinamic : false),
                categoryId:datos.categoryId,
                tmplUrl:Base64.decode(datos.tmplUrl? datos.tmplUrl : ""),
            } as Link;
            links.push(link); 
        });
    }  
    return links;
}

export async function getCategory(categoryId:string):Promise<Category>{
    const { rows } = await turso.execute({
        sql: "SELECT * FROM Category WHERE id = ?",
        args: [categoryId],
    });
    logger.info("getCategory category turso database:"+JSON.stringify(rows));
    let category = {} as Category
    if(rows.length){
        logger.info("getCategoryByName category turso database:"+JSON.stringify(rows));
        const categoryData = rows[0] as any;
        category.id = categoryData.id;
        category.name = Base64.decode(categoryData.name);
        category.path = categoryData.path;
        category.target = categoryData.target;
        category.color = categoryData.color;
        category.icon = categoryData.icon;
        category.subTitle = categoryData.subtitle;
    }

    return category; 
}

export async function getCategoryByName(name:string):Promise<Category>{
    const { rows } = await turso.execute({
        sql: "SELECT * FROM Category WHERE name = ?",
        args: [Base64.encode(name)],
      });
    logger.info("getCategoryByName category turso database:"+JSON.stringify(rows));
    let category = {} as Category
    if(rows.length){
        logger.info("getCategoryByName category turso database:"+JSON.stringify(rows));
        const categoryData = rows[0] as any;
        category.id = categoryData.id;
        category.name = Base64.decode(categoryData.name);
        category.path = categoryData.path;
        category.target = categoryData.target;
        category.color = categoryData.color;
        category.icon = categoryData.icon;
        category.subTitle = categoryData.subtitle;
    }

    return category; 
}

export async function getCategories(env :Env):Promise<Category[]> {
    const { rows } = await turso.execute('SELECT * FROM Category')    
    let categories: Category[] = [];
    logger.info("getCardCategories database:"+JSON.stringify(rows));
    rows.forEach((category) => {
        logger.info("category database:"+JSON.stringify(category));       
        let categoryData = {
            id: category.id,
            name: Base64.decode(category.name),          
            displayName: Base64.decode(category.name),
            path: category.path,
            color: category.color,
            target: category.target,
            icon : category.icon,   
            subTitle : category.subtitle,
            description: Base64.decode(category.subtitle),
        } as Category;

        categories.push(categoryData);
    });      
    
    return categories;
}