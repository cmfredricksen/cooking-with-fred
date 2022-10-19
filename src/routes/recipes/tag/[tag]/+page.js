export const load = async ({ fetch, params }) => {
	const { tag } = params;
	const res = await fetch('/api/recipes');
	const allRecipes = await res.json();

	const recipes = allRecipes.filter((recipe) => recipe.meta.tags.includes(tag));

	return {
		tag,
		recipes
	};
};
