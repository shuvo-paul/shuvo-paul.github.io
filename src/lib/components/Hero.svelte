<script lang="ts">
    import {base} from '$app/paths'
    import { onMount } from 'svelte';

    // @ts-ignore
	let LottiePlayer: typeof import('@lottiefiles/svelte-lottie-player');

	onMount(async () => {
        // @ts-ignore
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});

    export let title: string;

    export let techs: string[];
    export let content: string;
</script>

<section class="hero py-8 mt-8">
    <div class="grid grid-cols-12 gap-x-8">
        <div class="col-span-full md:col-span-6">
            <div class="max-w-[512px]">
                <div class="font-bold text-6xl mb-6">
                    Hello,
                </div>
                <h1 class="mb-4 unstyled text-4xl font-normal">
                    {title}
                </h1>
                <div class="hero__content text-opacity-70 mb-4" >
                    {@html content}
                </div>

                <div class="">Here are few techs I love to work with:</div>

                <ul class="tech-list grid grid-cols-2 gap-2 mt-6">
                    {#each techs as item}
                        <li class="before:content-['➪'] before:text-primary-500 before:mr-2 font-light">{item}</li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="col-span-full md:col-span-6 hidden md:block">
            <div class="flex justify-center">
                <div class="leading-[0] mt-16">
                    {#if LottiePlayer}
                        <LottiePlayer
                        src="{base}/lottie.json"
                        autoplay="{true}"
                        loop="{true}"
                        controls="{false}"
                        renderer="svg"
                        background="transparent"
                        />
                    {/if}
                    
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="postcss" global>
    
    .lottie-player {
        @apply scale-[1.2];
    }
</style>