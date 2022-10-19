<script>
	export let data;
</script>

<svelte:head>
	<title>Cooking with Fred &hearts; Recipes</title>
</svelte:head>

<div class="recipe-list">
	{#each data.recipes as recipe}
		<div class="recipe-link">
			<a href={recipe.path.replace('.md', '')}>{recipe.meta.title}</a>
			<div class="tag-box">
				{#each recipe.meta.tags as tag}
					<a href="/recipes/tag/{tag}">#{tag}</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
