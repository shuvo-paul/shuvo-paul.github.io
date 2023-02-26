<script>
    export let data;
    const {posts} = data;
</script>
<div class=" max-w-sm mx-auto">

    <h1 class="mb-8">Blog</h1>
    
    {#each posts as post }
        <a class="text-white hover:text-primary-500 my-4 block" href={`posts/${post.slug}`}>
            <h2>{post.title}</h2>
            {post.date}
        </a>
    {/each}
</div>