<script>
    // @ts-ignore
    import Github from '$lib/icons/github.svg?component';
    // @ts-ignore
    import ExternalLink from '$lib/icons/external-link.svg?component';
    /**
	 * @type {any}
	 */
     export let list;
    const title = "Some things I've built ...";
</script>
<div class="mt-24 md:mt-28 lg:mt-32" id="projects">
    <h2 class=" text-2xl mb-9">{title}</h2>
    
    {#each list as item, i }
        <div class="grid grid-cols-12 gap-x-8 gap-y-4 items-center mb-20">
            <div class={`col-span-full md:row-span-full ${(i+1)%2? 'md:col-start-1 md:col-span-7' : 'md:col-span-7 md:col-end-13' }`}>
                <div class="relative after:transition-all after:bg-primary/10 after:absolute after:top-0 after:left-0 after:w-full after:h-full rounded overflow-hidden hover:after:bg-transparent">
                    <img src="{item.img}" alt="" class="w-full h-auto" />
                </div>
            </div>

            <div class={`col-span-full md:row-span-full ${(i+1)%2? 'md:col-span-7 md:col-end-13 md:text-right' : 'md:col-start-1 md:col-span-7' } z-10`}>
                {#if item.title}
                    <h3 class="text-primary text-xl mb-4 mx-3">{item.title}</h3>
                {/if}

                {#if item.content}
                    <div class="bg-slate-100 bg-opacity-95 shadow p-6 rounded">
                        {@html item.content}
                    </div>
                {/if}

                <ul class={`flex list-none mt-2 font-light ${(i+1)%2? 'md:justify-end' : '' }`}>
                    {#each item.techs as tech}
                        <li class="mx-3">{tech}</li>
                    {/each}
                </ul>
                
                <ul class={`mt-4 flex list-none ${(i+1)%2? 'md:justify-end' : '' }`}>
                    {#if item.gitURL}
                        <li class="mx-3">
                            <a class=" hover:text-primary" target="_blank" href={"//"+item.gitURL} rel="noreferrer">
                                <Github class="icon" />
                            </a>
                        </li>
                    {/if}
                    
                    {#if item.externalURL }
                        <li class="mx-3">
                            <a class=" hover:text-primary" target="_blank" href={"//"+item.externalURL} rel="noreferrer">
                                <ExternalLink class="icon" />
                            </a>
                        </li>
                    {/if}
                </ul>
            </div>
        </div>
    {/each}
</div>