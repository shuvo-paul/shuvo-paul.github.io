<script>
	import "../app.css";
	import Header from '$lib/components/Header.svelte';
	import Footer from "$lib/components/Footer.svelte";

	export let data;
</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
	<link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Chivo:wght@300;400;700&display=swap" rel="stylesheet" />
</svelte:head>

<Header origin={data.origin}/>

<main>
	<slot />
</main>

<Footer />