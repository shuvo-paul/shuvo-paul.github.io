<script>
    export let data;
    const {title, content, date} = data;
</script>
<div class="text-white mx-auto max-w-md">
    <h1>{title}</h1>
    {content}
    <div>{date}</div>
</div>