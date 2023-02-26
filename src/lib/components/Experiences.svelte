<script>
    /**
	 * @type {[{title: string, companyLink: string, company: string, year: string, content: string}]}
	 */
     export let list;
</script>
<section id="experience" class="mt-12">
    <h2 class="text-white text-opacity-90 text-2xl mb-9">{`What I've experienced ...`} </h2>
    {#each list as item }
        <div class="mb-8">
            <div class="border-l-primary-500 border-l-2 text-white text-opacity-80 text-xl pl-8">
                {item.title}
                    <a class="text-primary-500 text-lg" target="_blank" href={`//${item.companyLink}`} rel="noreferrer"> @{item.company}</a> 
                <span class="text-white text-opacity-70 text-sm"> ({item.year})</span>
            </div>
            
            <div class="mt-2 pl-8 text-white text-opacity-70">
                {item.content}
            </div>
        </div>
    {/each}
</section>