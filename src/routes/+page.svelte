<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Experiences from "$lib/components/Experiences.svelte";
    import Projects from "$lib/components/Projects.svelte";
    export let data: {
        hero: {
            title: string,
            content: string,
            techs: string[],
        },
        experiencesList: [{
            title: string,
            company: string,
            year: string,
            content: string,
            companyLink: string
        }],
        projectsList: {
            title: string,
        }
    };
    const {hero, experiencesList, projectsList} = data;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="container">
	<div class="max-w-6xl sm:px-4 mx-auto">
		<Hero {...hero} />
        <Experiences list={experiencesList} />
        <Projects list={projectsList} />
	</div>
</main>