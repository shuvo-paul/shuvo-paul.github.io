<script>
    // @ts-ignore
    import Github from '$lib/icons/github.svg?component';
    import ExternalLink from '$lib/icons/external-link.svg?component';
    export let list;
    const title = "Some things I've built ...";
</script>
<div class="pt-8 mt-32" id="projects">
    <h2 class="mb-9">{title}</h2>
    
    {#each list as item, i }
        <div class="grid grid-cols-12 gap-x-8 gap-y-4 items-center mb-20">
            <div class={`col-span-full md:row-span-full ${(i+1)%2? 'md:col-start-1 md:col-span-7' : 'md:col-span-7 md:col-end-13' }`}>
                <img src="http://placehold.jp/580x364.png" alt="" width={580} height={364} />
            </div>

            <div class={`col-span-full md:row-span-full ${(i+1)%2? 'md:col-span-7 md:col-end-13 md:text-right' : 'md:col-start-1 md:col-span-7' } z-10`}>
                {#if item.title}
                    <h3 class="text-primary-500 text-xl mb-4 mx-3">{item.title}</h3>
                {/if}

                {#if item.content}
                    <div class="bg-secondary-600 shadow text-white text-opacity-70 p-6 rounded">
                        {item.content}
                    </div>
                {/if}

                <ul class={`flex list-none text-white text-opacity-70 mt-2 font-light ${(i+1)%2? 'md:justify-end' : '' }`}>
                    {#each item.techs as tech}
                        <li class="mx-3">{tech}</li>
                    {/each}
                </ul>
                
                <ul class={`mt-4 flex list-none ${(i+1)%2? 'md:justify-end' : '' }`}>
                    {#if item.gitURL}
                        <li class="mx-3">
                            <a target="_blank" href={"//"+item.gitURL} rel="noreferrer">
                                <Github class="icon" />
                            </a>
                        </li>
                    {/if}
                    
                    {#if item.externalURL }
                        <li class="mx-3">
                            <a target="_blank" href={"//"+item.externalURL} rel="noreferrer">
                                <ExternalLink class="icon" />
                            </a>
                        </li>
                    {/if}
                </ul>
            </div>
        </div>
    {/each}
</div>