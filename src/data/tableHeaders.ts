export interface Header {
    titulo: string;
    estilo: string;  
    icono:string
}

export const headers: Header[] = [
    { titulo: 'Descripcion', estilo: 'py-3.5 px-3 text-left text-sm whitespace-nowrap font-medium text-white',icono:''},
    { titulo: 'Url', estilo: 'py-3.5 px-3 text-left text-sm whitespace-nowrap font-medium text-white',icono:''},
    { titulo: 'Acciones', estilo: 'py-3.5 px-3 text-left text-sm whitespace-nowrap font-medium text-white',icono:''},
]