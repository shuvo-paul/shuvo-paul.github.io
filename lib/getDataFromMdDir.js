import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function getDataFromMdDir(folderName) {
    const files = fs.readdirSync(path.join('markdowns', folderName));

    const list = files.map(filename=>{
        const mdWithMeta = fs.readFileSync(path.join('markdowns/'+folderName, filename));
        const {data, content} = matter(mdWithMeta);
        return {
            ...data,
            content
        }
    })

    return list;
}