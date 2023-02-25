<script>
    import Hero from "$lib/components/Hero.svelte";
    import Experiences from "$lib/components/Experiences.svelte";
    import Projects from "$lib/components/Projects.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="container">
	<div class="max-w-6xl mx-auto">
		<Hero/>
        <Experiences/>
        <Projects/>
	</div>
</main>