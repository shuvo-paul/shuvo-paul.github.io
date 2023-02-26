<script>
    export let data;
    console.log(data);
    /**
	 * @type {string HTML}
	 */
     export let content;
    const {title, techs} = data;
</script>

<section class="hero py-8 mt-8">
    <div class="grid grid-cols-5 gap-x-8">
        <div class="col-span-full md:col-span-3">
            <div class="max-w-[512px]">
                <div class="text-white text-opacity-70 font-bold text-6xl mb-6">
                    Hello,
                </div>
                <h1 class="mb-4">
                    {title}
                </h1>
                <div class="hero__content text-white text-opacity-70 mb-4" >
                    {@html content}
                </div>

                <div class="text-white text-opacity-70">Here are few techs I love to work with:</div>

                <ul class="tech-list text-white text-opacity-70 grid grid-cols-2 gap-2 mt-6">
                    {#each techs as item}
                        <li class="before:content-➪ before:text-primary-500 before:mr-2 font-light">{item}</li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="col-span-full md:col-span-2">
            <div class="flex justify-center">
                <div class="leading-[0] shadow rounded-lg overflow-hidden mt-16">
                    <img src="images/me.jpeg" alt="Shuvo Paul"> 
                </div>
            </div>
        </div>
    </div>
</section>
