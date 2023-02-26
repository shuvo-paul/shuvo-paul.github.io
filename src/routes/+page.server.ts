import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function load() {
    const __dirname = path.resolve(path.dirname(''));
    const heroMdWithMeta = fs.readFileSync(path.join(__dirname, 'src', 'lib', 'md', 'hero.md'));
    const hero = JSON.stringify(matter(heroMdWithMeta));
    
    return {
        hero
    }
}