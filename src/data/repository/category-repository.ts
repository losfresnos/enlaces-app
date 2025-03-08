import logger from '../../configuration/logger';
import type { Category } from '../../model/AppModel';
import { Base64 } from 'js-base64';   

export function mapperCategories(resultsTurso):Category[] {
    
    let elements: Category[] = [];
    
    if (resultsTurso.length) {
        resultsTurso.forEach((result) => {
            let element = {
                id: result.id,
                name: Base64.decode(result.name),          
                displayName: Base64.decode(result.name),
                path: result.path,
                color: result.color,
                target: result.target,
                icon : result.icon,   
                subTitle : result.subTitle,
                description: Base64.decode(result.subTitle? result.subTitle:''),
            } as Category;

            elements.push(element);
        });
    }
    logger.info("getCardCategories Categories:"+JSON.stringify(elements));
    logger.info("getCardCategories.FIN");
    return elements;
}
