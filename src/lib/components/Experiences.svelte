<script>
    /**
	 * @type {[{title: string, companyLink: string, company: string, year: string, content: string}]}
	 */
     export let list;
</script>
<section id="experience" class="mt-24 md:mt-28 lg:mt-32 relative z-10">
    <h2 class="text-2xl mb-9 font-heading-token">{`What I've experienced ...`} </h2>
    {#each list as item }
        <div class="mb-8">
            <div class="text-xl pl-8 relative before:w-[2px] before:h-full before:bg-primary/60 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                {item.title}
                    <a class="text-lg underline" target="_blank" href={`//${item.companyLink}`} rel="noreferrer"> @{item.company}</a> 
                <div class=" text-sm"> ({item.year})</div>
            </div>
            
            <div class="mt-2 pl-8 ">
                {@html item.content}
            </div>
        </div>
    {/each}
</section>