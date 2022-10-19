export async function load({ params }) {
	const recipe = await import(`../recipeFiles/${params.slug}.md`);
	// const recipe = await import(`../${params.slug}.md`);
	const { title, date, tags } = recipe.metadata;
	const Content = recipe.default;

	return {
		title,
		date,
		tags,
		Content
	};
}
