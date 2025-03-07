import type {CardPropsDto, Tag}  from '../../model/AppModel'
import type { Framework } from '../../data/navigation';
import { home } from '../../data/site';
import logger from '../../configuration/logger';


function capitalize(str: string){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function addFrameworkCard(cards : CardPropsDto[],framework:Framework) {
    logger.info("ArrayUtils.addFrameworkCard.INI");    
    let tarjeta = { 
        id: framework.id,
        href: framework.path+'/'+ framework.name,
        target: framework.target,
        bgcolor: framework.color,
        icon: framework.name,
        colorIcon :framework.color,
        title: capitalize(framework.name),                           
        subTitle : framework.subtitle, 
        linkType: home.categoryLink,       
        showIcon: true } as CardPropsDto;
        logger.info("ArrayUtils.addFrameworkCard add card:"+JSON.stringify(tarjeta));   
    cards.push(tarjeta);

    logger.info("ArrayUtils.addFrameworkCard.FIN");    
}

function createCardsLinks (link,id){
    logger.info("ArrayUtils.createCardsLinks.INI");  
    let cards: CardPropsDto[] = [];

    link.data.links.forEach((link) => {
        logger.info("ArrayUtils.createCardsLinks -> CATEGORY LINK:"+JSON.stringify(link));    
        let tarjeta = { 
            id: id,
            href: link.url,
            target: link.target, 
            titleSize : 'sg',    
            title: capitalize(link.name),                           
            subTitle :'Select to open', 
            linkType: home.aplicationLink,
            isDinamic:link.isDinamic,
            tags : createTagsLink(link),   
            tmplUrl : link.tmplUrl,

            showIcon: false } as CardPropsDto;
            logger.info("ArrayUtils.createCardsLinks add card:"+JSON.stringify(tarjeta));
            cards.push(tarjeta);  
    });

    logger.info("ArrayUtils.createCardsLinks.FIN");  
    return cards;
}

function createTagsLink(link){
    logger.info("ArrayUtils.createTagsLink.INI");  
    logger.info("ArrayUtils.createTagsLink create tag for link:"+link.id); 
    let tags : Tag[]=[];

    if (link.tags===undefined){
        return tags;
    }

    link.tags.forEach((tg) => {
        let tag = {
            enviroment:tg.enviroment,
            tag : tg.tag,
        } as Tag;
        logger.info("ArrayUtils.createTagsLink add tag:"+JSON.stringify(tag));  
        tags.push(tag);
    });

    logger.info("ArrayUtils.createTagsLink tags:"+JSON.stringify(tags));  
    logger.info("ArrayUtils.createTagsLink.FIN"); 
    return tags

}

function isEmptyObject(obj: object): boolean {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

export {createCardsLinks,addFrameworkCard,isEmptyObject};
  