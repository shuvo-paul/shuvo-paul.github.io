<script>
	import {base} from '$app/paths'
</script>
<header class="py-8 relative z-10">
	<div class="container">
		<div class="flex flex-wrap flex-row items-center">
			<div class="flex-shrink">
				<a href="/" class="text-4xl font-medium tracking-wide leading-none">{`{{Shuvo Paul}}`}</a>
			</div>
			<div class="flex-grow">
				<ul class="hidden flex-wrap flex-row justify-end -mx-4 lg:flex">
					<li class="mx-4">
						<a href="{base}/stories" class="tracking-widest text-lg font-light hover:text-primary-500 transition-colors" >Stories</a>
					</li>
					<li class="mx-4">
						<a href="{base}/#experience" class="tracking-widest text-lg font-light hover:text-primary-500 transition-colors" >Experiences</a>
					</li>
					<li class="mx-4">
						<a href="{base}/#projects" class="tracking-widest text-lg font-light hover:text-primary-500 transition-colors" >Projects</a>
					</li>
					<li class="mx-4">
						<a href="{base}/#contact" class="tracking-widest text-lg font-light hover:text-primary-500 transition-colors">Contact</a>
					</li>
					<li class="mx-4">
						<a href="/favicon.png" class="tracking-widest font-light border border-primary py-2 px-4 rounded-sm hover:bg-primary-100 transition-all hover:bg-opacity-20" >Resume</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</header>

<style lang="postcss">
	a {
		@apply font-serif;
	}
</style>