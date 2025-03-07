export function isEmptyObject(obj: object): boolean {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}


export function capitalize(str: string){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function setBoolean(value:string):Boolean{
    let valor = false;

    if(value === 'true'){
        valor = true;
    }

    return valor;
}