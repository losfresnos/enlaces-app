
export interface CardPropsDto {
    id: number;
    name: string;
    href: string;
    target: string;
    bgcolor: string;
    icon: string;
    colorIcon : string;
    title: string;
    subTitle :string;
    showIcon: boolean;
    titleClass: string;
    titleSize : string;
    linkType:string;
    tmplUrl: string;
    isDinamic:boolean;
    tags: Tag[];
}

export interface Tag {
    tag: string;
    enviroment: string;
}

export interface Category {
    id: number;
    name: string;
    displayName: string;
    path: string;
    color: string;
    target: string;
    icon : string;    
    subTitle :string;
    description:string;
}

export interface Enviroment {
    id:number;
    label : string;
    enviroment : string;
    checked : boolean;
}


export interface Link {
    id:number;
    name:string;
    url:string;
    target:string;
    isDinamic:boolean;
    categoryId:string;
    tmplUrl:string;
}

export interface LinkTag {
    link:Link;
    tags:Tag[];
}

export interface Tag {
    enviroment:string
    tag : string;    
}