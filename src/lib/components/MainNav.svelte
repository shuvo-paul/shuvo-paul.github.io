<script>
    import {base} from '$app/paths'
</script>

<ul class="flex-wrap flex-col lg:flex-row lg:-mx-4 flex">
    <li>
        <a href="{base}/stories" >Stories</a>
    </li>
    <li>
        <a href="{base}/#experience" >Experiences</a>
    </li>
    <li>
        <a href="{base}/#projects" >Projects</a>
    </li>
    <li>
        <a href="{base}/#contact" >Contact</a>
    </li>
    <li>
        <a href="/Resume.pdf" target="_blank" class="resume-btn" >Resume</a>
    </li>
</ul>

<style lang="postcss">
    a {
		@apply font-serif tracking-widest text-lg font-light transition-colors;
	}

    .resume-btn {
        @apply tracking-widest font-light border-b lg:border border-primary py-2 lg:px-4 rounded-sm transition-all hover:bg-opacity-20
    }

    ul li {
        @apply my-2 lg:my-0 lg:mx-4;
    }
</style>