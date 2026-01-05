<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: oklch(29.3% 0.066 243.157);
		color: oklch(70.4% 0.04 256.788);
		font-family: 'JetBrains Mono', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		overflow: hidden;
	}

	:global(body)::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		background: repeating-linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.02),
			rgba(255, 255, 255, 0.02) 1px,
			transparent 1px,
			transparent 3px
		);
		z-index: 1;
	}

	:global(body)::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		background: rgba(0, 0, 0, 0.2);
		mix-blend-mode: multiply;
		z-index: 2;
	}

	:global(*) {
		position: relative;
		z-index: 3;
	}
</style>
