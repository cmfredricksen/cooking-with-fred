<script>
	import Nav from './Nav.svelte';
</script>

<header>
	<h1>Cooking with Fred</h1>
	<span class="material-symbols-outlined"> soup_kitchen </span>
	<Nav />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 1rem;
	}

	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;
		font-size: 2rem;
	}
</style>
