<script lang="ts">
    type Post = {
        title: string,
        content: string,
        date: string
    }
    export let data: Post;
    const {title, content, date} = data;
</script>
<div class="container">
    <div class="max-w-4xl mx-auto mt-24 md:mt-28 border-b pb-14 md:pb-24">
        <h1 class="mb-14 lg:mb-24 text-2xl md:text-3xl border-b pb-2 md:pb-4">{title}</h1>
        <div class="content">
            {@html content}
        </div>
        <div class="text-sm text-gray-600 mt-12">Last Update: {date}</div>
    </div>
</div>

<style lang="postcss">
    .content :global(h2) {
        @apply text-xl md:text-2xl mb-4;
    }

    .content :global(ul) :global(li) {
        @apply my-1 list-disc list-inside;
    }

    .content :global(p),
    .content :global(pre) {
        @apply mb-4;
    }

    .content :global(pre) {
        @apply overflow-x-auto;
    }

    .content :global(code) {
        @apply bg-gray-200 p-2 rounded inline-block;
    }

    .content :global(hr) {
        @apply border-gray-200 my-4;
    }
</style>