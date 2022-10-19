<script>
	export let data;
	const { recipes, meta } = data;
</script>

<svelte:head>
	<title>Cooking with Fred &hearts; #{data.tag}</title>
</svelte:head>
<h1>{data.tag}</h1>

{#each recipes as recipe}
	<ul>
		<li>
			<a href={recipe.path.replace('.md', '')}>
				{recipe.meta.title}
			</a>
		</li>
	</ul>
{/each}
