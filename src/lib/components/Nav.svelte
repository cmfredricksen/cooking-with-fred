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
			title: 'Webfolio',
			path: 'https://webfolio-cmfredricksen.netlify.app/'
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
