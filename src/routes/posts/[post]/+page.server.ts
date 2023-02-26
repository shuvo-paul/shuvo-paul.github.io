import { getDataFromMdFile } from '$lib/server/md';

export function load({params}) {
    const file = `posts/${params.post}.md` as string;

    return {
        ...getDataFromMdFile(file)
    }
}