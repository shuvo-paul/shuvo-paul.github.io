<script lang="ts">
    import {formatedDate} from '$lib/utils';
    
    export let data: {
        posts: {
            slug: string,
            title: string,
            date: string,
        }[]
    };
    const {posts} = data;
</script>
<div class="container">
    <div class="max-w-4xl mx-auto mt-24 md:mt-28 border-b pb-14 md:pb-24">
        <h1 class="mb-14 lg:mb-24 text-2xl md:text-3xl border-b pb-2 md:pb-4">Stories</h1>
        
        {#each posts as post }
            <a class="my-4 block" href={`stories/${post.slug}`}>
                <div class="flex flex-row flex-wrap items-center">
                    <div class="mr-2">➪</div>
                    <h2>{post.title}</h2>
                    <div class="text-sm text-gray-600 ml-2">({formatedDate(post.date)})</div>
                </div>
            </a>
        {/each}
    </div>
</div>