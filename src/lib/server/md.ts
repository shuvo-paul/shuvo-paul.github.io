import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const __dirname = path.resolve(path.dirname(''));
const mdDir = path.join(__dirname, 'src', 'lib', 'md')

export const getDataFromMdFile = (filePath: string): Object => {
    const mdWithMeta = fs.readFileSync(path.join(mdDir, filePath));
    const { data, content } = matter(mdWithMeta);
    return {
        ...data,
        content
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

    return list;
}