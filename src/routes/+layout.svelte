<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from "$lib/footer/footer.svelte";
</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
	<link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Chivo:wght@300;400;700&display=swap" rel="stylesheet" />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style global windi:global windi:preflights:global windi:safelist:global>
	@layer base {
		html {
			@apply scroll-smooth;
		}

		body {
			@apply font-body bg-secondary-500;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			@apply font-display;
		}

		h1 {
			@apply text-opacity-90 text-white text-4xl;
		}

		h2 {
			@apply text-white text-opacity-90 text-2xl;
		}

		svg.icon {
			stroke: rgba(255, 255, 255, 0.6);
		}

		a:hover svg.icon {
			@apply stroke-primary-500;
		}
	}
</style>