import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const __dirname = path.resolve(path.dirname(''));
export function load() {
    const heroMdWithMeta = fs.readFileSync(path.join(__dirname, 'src', 'lib', 'md', 'hero.md'));
    const hero = JSON.stringify(matter(heroMdWithMeta));
    const experiencesList = getDataFromMdDir('experiences');
    const projectsList = getDataFromMdDir('projects');
    
    return {
        hero,
        experiencesList,
        projectsList
    }
}

const getDataFromMdDir = (folderName: string): Object[] => {
    const files = fs.readdirSync(path.join(__dirname, 'src', 'lib', 'md', folderName));

    const list: Object[] = files.map(filename => {
        const mdWithMeta = fs.readFileSync(path.join(__dirname, 'src', 'lib', 'md', folderName, filename));
        const { data, content } = matter(mdWithMeta);
        return {
            ...data,
            content
        }
    })

    return list;
}