import { getDataFromMdDir } from "$lib/server/md";
import type {post} from "$lib/types";
import { parseDate } from "$lib/utils";

export function load() {
    const posts = getDataFromMdDir('stories') as post[];
    const sorted = posts.sort((a, b) => parseDate(b.date).getTime()  - parseDate(a.date).getTime());
    return {posts}
}