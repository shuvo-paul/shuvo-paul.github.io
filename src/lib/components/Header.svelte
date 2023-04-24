<script>
	import { offcanvas } from '$lib/store'
	import MainNav from './MainNav.svelte';
</script>
<header class="py-8 relative z-10">
	<div class="container">
		<div class="flex flex-wrap flex-row items-center">
			<div class="flex-shrink">
				<a href="/" class="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide leading-none">{`{{Shuvo Paul}}`}</a>
			</div>
			<div class="flex-grow">
				<div class="flex lg:hidden justify-end pt-[6px]">
					<button class="hamburger hamburger--spin js-hamburger" class:is-active={$offcanvas} on:click={() => offcanvas.update(n=> !n)}>
						<div class="hamburger-box">
							<div class="hamburger-inner"></div>
						</div>
					</button>
				</div>

				<div class="hidden flex-wrap flex-row justify-end lg:flex">
					<MainNav />
				</div>
			</div>
		</div>
	</div>
</header>

<style lang="postcss">
	a {
		@apply font-serif;
	}

	.hamburger {
		font: inherit;
		display: inline-block;
		overflow: visible;
		margin: 0;
		cursor: pointer;
		transition-timing-function: linear;
		transition-duration: .15s;
		transition-property: opacity,filter;
		text-transform: none;
		color: inherit;
		border: 0;
		background-color: transparent;
	}

	.hamburger-box {
		position: relative;
		display: inline-block;
		width: 28px;
		height: 24px;
	}

	.hamburger-inner {
		top: 50%;
		display: block;
		margin-top: -2px;
	}

	.hamburger--spin .hamburger-inner {
		transition-timing-function: cubic-bezier(.55,.055,.675,.19);
		transition-duration: .22s;
	}

	.hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
		position: absolute;
		width: 100%;
		height: 3px;
		transition-timing-function: ease;
		transition-duration: .15s;
		transition-property: transform;
		border-radius: 4px;
		@apply bg-primary;
	}

	.hamburger--spin .hamburger-inner:before {
		transition: top .1s ease-in .25s,opacity .1s ease-in;
	}

	.hamburger--spin .hamburger-inner:after {
		transition: bottom .1s ease-in .25s,transform .22s cubic-bezier(.55,.055,.675,.19);
	}

	.hamburger-inner:before {
		top: -8px;
	}

	.hamburger-inner:after {
		bottom: -8px;
	}

	.hamburger-inner:after, .hamburger-inner:before {
		display: block;
		content: "";
	}

	.hamburger--spin.is-active .hamburger-inner {
		transition-delay: .12s;
		transition-timing-function: cubic-bezier(.215,.61,.355,1);
		transform: rotate(225deg);
	}

	.hamburger--spin.is-active .hamburger-inner:before {
		top: 0;
		transition: top .1s ease-out,opacity .1s ease-out .12s;
		opacity: 0;
	}

	.hamburger--spin.is-active .hamburger-inner:after {
		bottom: 0;
		transition: bottom .1s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s;
		transform: rotate(-90deg);
	}
</style>