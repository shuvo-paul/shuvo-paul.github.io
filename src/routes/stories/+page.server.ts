import { getDataFromMdDir } from "$lib/server/md";

export function load() {
    const posts = getDataFromMdDir('stories');

    return {posts}
}