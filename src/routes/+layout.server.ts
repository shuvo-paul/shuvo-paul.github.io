export const prerender = true;

export function load(context: {url: {origin: string}}) {
    
    return {
        origin: context.url.origin
    }
} 