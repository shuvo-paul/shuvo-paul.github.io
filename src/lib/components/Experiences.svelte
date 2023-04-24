<script>
    /**
	 * @type {[{title: string, companyLink: string, company: string, year: string, type: string, content: string}]}
	 */
     export let list;
</script>
<section id="experience" class="mt-24 md:mt-28 lg:mt-32 relative z-10">
    <h2 class="text-2xl mb-9 font-heading-token">{`What I've experienced ...`} </h2>
    {#each list as item }
        <div class="mb-8 max-w-xl">
            <div class="text-xl pl-8 relative before:w-[2px] before:h-[22px] before:bg-primary/60 before:absolute before:left-0 before:top-0 before:mt-1">
                {item.title}
                <div class="flex items-end">
                    <a class="text-base underline block" target="_blank" href={`//${item.companyLink}`} rel="noreferrer"> @{item.company}</a>
                    {#if item.type}
                        <div class="text-sm before:content-['-'] before:mx-1">
                            {item.type}
                        </div>
                    {/if}
                    <div class="text-sm before:content-['-'] before:mx-1">
                        ({item.year})
                    </div>
                </div>
            </div>
            
            <div class="mt-2 pl-8 content">
                {@html item.content}
            </div>
        </div>
    {/each}
</section>

<style lang="postcss" >

    .content > :global(ul) > :global(li) {
        @apply relative pl-6 before:content-['➪'] before:text-primary before:absolute before:left-0 before:top-0 font-light mb-1;
    }
</style>