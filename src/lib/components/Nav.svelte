<script>
	const links = [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'Recipes',
			path: '/recipes'
		},
		{
			title: 'Api',
			path: '/api/recipes'
		}
	];
</script>

<nav>
	{#each links as { title, path }}
		<a href={path}>{title}</a>
	{/each}
</nav>

<style>
	a {
		margin: 1rem;
	}
</style>
