export interface Framework {
    name: string;
    displayName: string;
    path: string;
    color: string;
    target: string;
}

export const frameworks: Framework[] = [
    { name: 'platform', displayName: 'Platform BBVA', path: '/links', color: '#FF5D01',target: '_self' },
    { name: 'athenea', displayName: 'Athenea', path: '/links', color: '#2C4F7C' ,target: '_self'},
    { name: 'bitbucket', displayName: 'Bitbucket Repositories', path: '/bitbucket', color: '#61DAFB' ,target: '_self'},
    { name: 'jira', displayName: 'Vue', path: '/links', color: '#4FC08D',target: '_self' },
    { name: 'jenkins', displayName: 'Svelte', path: '/links', color: '#FF3E00' ,target: '_self'},
    { name: 'star', displayName: 'Solid', path: '/links', color: '#2C4F7C',target: '_self' },
];
