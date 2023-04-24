<script>
	import "../app.css";
	import { offcanvas } from '$lib/store'
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MainNav from "$lib/components/MainNav.svelte";
</script>

<svelte:head>
	<meta property="og:image" content="" />
</svelte:head>

<div class="page-wrap" class:offcanvas-open={$offcanvas}>
	<div class="offcanvas-nav">
		<MainNav />
	</div>

	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

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

	button,
	a {
		outline: 0;
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

	.page-wrap {
		@apply transition-all;
	}

	.page-wrap.offcanvas-open {
		@apply translate-x-[-228px];
	}

	.offcanvas-nav {
		@apply fixed top-0 left-full z-10 w-[228px] px-8 pt-8 bg-slate-100 h-screen;
	}
</style>