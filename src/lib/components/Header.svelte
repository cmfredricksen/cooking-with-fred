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
		padding: 1rem 1rem;
		border-bottom: 1px solid var(--clr-medium);
		margin-bottom: 2rem;
	}

	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;
		font-size: 2rem;
		color: var(--clr-medium);
	}

	@media screen and (max-width: 768px) {
		header {
			flex-direction: column;
			align-items: center;
		}

		span {
			padding: 2rem 0;
		}

		.material-symbols-outlined {
			font-size: 3rem;
		}
	}
</style>
