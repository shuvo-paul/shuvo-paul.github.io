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

<section class="hero mt-16 md:mt-24 lg:mt-32 relative">
    <div class="grid grid-cols-12 gap-x-8">
        <div class="col-span-full md:col-span-8 lg:col-span-6">
            <div class="max-w-[512px] relative z-10">
                <div class="font-bold text-6xl mb-6">
                    Hiya<i>!</i>
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
    </div>
    <div class="hero-lottie">
        {#if LottiePlayer}
            <LottiePlayer
            src="{base}/lottie.json"
            autoplay="{true}"
            loop="{true}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            speed="0.1"
            />
        {/if}
    </div>
</section>

<style lang="postcss">
    .hero-lottie {
        @apply 
            leading-[0]
            w-full max-w-[960px] 
            absolute top-0 right-0
            opacity-60
            translate-y-[0%] md:translate-y-[-10%] lg:translate-y-[-16%]
            translate-x-[56%] md:translate-x-[42%] lg:translate-x-[24%] xl:translate-x-[20%]
            scale-[1.7] md:scale-[1.2] lg:scale-[1] xl:scale-[1];
    }
</style>