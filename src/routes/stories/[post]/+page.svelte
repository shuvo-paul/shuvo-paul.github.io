<script lang="ts">
    type Post = {
        title: string,
        content: string,
        date: string
    }
    export let data: Post;
    const {title, content, date} = data;
</script>
<div class="text-white mx-auto max-w-md">
    <h1>{title}</h1>
    {content}
    <div>{date}</div>
</div>