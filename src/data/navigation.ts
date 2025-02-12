export interface Framework {
    name: string;
    displayName: string;
    path: string;
    color: string;
}

export const frameworks: Framework[] = [
    { name: 'platform', displayName: 'Platform BBVA', path: '/links', color: '#FF5D01' },
    { name: 'athenea', displayName: 'Athenea', path: '/links', color: '#2C4F7C' },
    { name: 'bitbucket', displayName: 'Bitbucket Repositories', path: '/bitbucket', color: '#61DAFB' },
    { name: 'jira', displayName: 'Vue', path: '/links', color: '#4FC08D' },
    { name: 'jenkins', displayName: 'Svelte', path: '/links', color: '#FF3E00' },
    { name: 'star', displayName: 'Solid', path: '/links', color: '#2C4F7C' },
];
