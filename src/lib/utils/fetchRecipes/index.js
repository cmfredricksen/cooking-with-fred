export const fetchRecipes = async () => {
	const allRecipes = import.meta.glob('/src/routes/recipes/recipeFiles/*.md');
	const iterableRecipes = Object.entries(allRecipes);

	const recipes = await Promise.all(
		iterableRecipes.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const recipePath = path.replace('/src/routes/recipes/recipeFiles', '/recipes');
			// const recipePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: recipePath
			};
		})
	);
	return recipes;
};
