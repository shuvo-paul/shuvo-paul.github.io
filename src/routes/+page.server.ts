import { getDataFromMdFile, getDataFromMdDir } from '$lib/server/md';

export function load() {
    const experiencesList = getDataFromMdDir('experiences');
    const projectsList = getDataFromMdDir('projects');
    const hero = getDataFromMdFile('hero.md');
    
    return {
        hero,
        experiencesList,
        projectsList
    }
}