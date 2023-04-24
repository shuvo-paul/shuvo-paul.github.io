<script>
	import "../app.css";
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<meta property="og:image" content="" />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="postcss" global>
	::-webkit-scrollbar {
		width: 0.5rem;               /* width of the entire scrollbar */
	}

	::-webkit-scrollbar-track {
		@apply px-[1px] bg-slate-600;
	}

	::-webkit-scrollbar-thumb {
		@apply bg-slate-800 rounded;
	}

	body {
		@apply bg-slate-50/60 text-primary;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply font-serif;
	}

	.app {
		@apply overflow-hidden;
	}
</style>