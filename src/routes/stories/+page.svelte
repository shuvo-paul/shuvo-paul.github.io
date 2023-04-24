<script lang="ts">
    export let data: {
        posts: {
            slug: string,
            title: string,
            date: string,
        }[]
    };
    const {posts} = data;
</script>
<div class=" max-w-sm mx-auto">

    <h1 class="mb-8">Blog</h1>
    
    {#each posts as post }
        <a class="my-4 block" href={`stories/${post.slug}`}>
            <h2>{post.title}</h2>
            {post.date}
        </a>
    {/each}
</div>