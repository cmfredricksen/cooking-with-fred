<script>
	export let data;
	const { title, tags, Content } = data;
</script>

<svelte:head>
	<title>Cooking with Fred &hearts; {title}</title>
</svelte:head>

<h1>{title}</h1>
<div class="tag-box">
	{#each tags as tag}
		<a href="/recipes/tag/{tag}">#{tag}</a>
	{/each}
</div>

<div class="content-wrapper">
	<Content />
</div>
