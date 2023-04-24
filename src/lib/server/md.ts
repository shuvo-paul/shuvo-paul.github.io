import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked';
const __dirname = path.resolve(path.dirname(''));
const mdDir = path.join(__dirname, 'src', 'lib', 'md')

export const getDataFromMdFile = (filePath: string): Object => {
    const mdWithMeta = fs.readFileSync(path.join(mdDir, filePath));
    const { data, content } = matter(mdWithMeta);

    const renderer = new marked.Renderer();
    renderer.heading = function (text, level) {
        return `<h${level}>${text}</h${level}>`;
    };
    return {
        ...data,
        content: marked(content, { renderer })
    }
}

export const getDataFromMdDir = (folderName: string): Object[] => {
    const files = fs.readdirSync(path.join(__dirname, 'src', 'lib', 'md', folderName));

    const list: Object[] = files.map(filename => {
        const filePath = path.join(folderName, filename);
        const [slug, ] = filename.split('.');
        return {
            ...getDataFromMdFile(filePath),
            slug
        }
    })

    return list.reverse();
}