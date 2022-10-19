<script>
	export let data;
</script>

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

<h1>Hello</h1>
