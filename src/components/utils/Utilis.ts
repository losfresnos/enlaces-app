import type {CardPropsDto, Tag}  from '../../model/AppModel'
import type { Framework } from '../.
import { home } from '../../data/site';
import logger from '../../configuration/logger';


function capitalize(str: string){
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function isEmptyObject(obj: object): boolean {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

export {capitalize,isEmptyObject};
  