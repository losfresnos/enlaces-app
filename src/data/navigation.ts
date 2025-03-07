export interface Framework {
    id: string;
    name: string;
    displayName: string;
    path: string;
    color: string;
    target: string;
    subtitle : string;
}

export const frameworks: Framework[] = [
    { id: 'platform',name: 'platform', displayName: 'Platform BBVA', path: '/links', color: '#FF5D01',target: '_self' , subtitle: 'Select to View links collection'},
    { id: 'monitoring',name: 'monitoring', displayName: 'Monitoring', path: '/links', color: '#2C4F7C' ,target: '_self', subtitle: 'Select to View links collection'},
    { id: 'bitbucket',name: 'bitbucket', displayName: 'Bitbucket Repositories', path: '/links', color: '#61DAFB' ,target: '_self', subtitle: 'Select to View links collection'},
    { id: 'aplications',name: 'aplications', displayName: 'Aplications(Escenia,EMAP,...)', path: '/links', color: '#4FC08D',target: '_self' , subtitle: 'Select to View links collection'},
    { id: 'jira',name: 'jira', displayName: 'JIRA Request', path: '/links', color: '#4FC08D',target: '_self' , subtitle: 'Select to View links collection'},
    { id: 'jenkins',name: 'jenkins', displayName: 'Jenkins Works', path: '/links', color: '#FF3E00' ,target: '_self', subtitle: 'Select to View links collection'}   
];

export interface Entorno {
    label: string;
    opcion: string; 
}
export const entornos: Entorno[] = [
    { label: 'Desarrollo', opcion: 'dev'}, 
    { label: 'Integrado', opcion: 'int'}, 
    { label: 'Aceptacion', opcion: 'aus'}, 
    { label: 'Octa', opcion: 'oct'}, 
    { label: 'Produccion', opcion: 'pr'}
];