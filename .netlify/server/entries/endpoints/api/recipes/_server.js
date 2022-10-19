import { j as json } from "../../../../chunks/index2.js";
const fetchRecipes = async () => {
  const allRecipes = /* @__PURE__ */ Object.assign({ "/src/routes/recipes/recipeFiles/Black Beans & Rice.md": () => import("../../../../chunks/Black Beans _ Rice.js"), "/src/routes/recipes/recipeFiles/Broccoli-Cheese-Rice.md": () => import("../../../../chunks/Broccoli-Cheese-Rice.js"), "/src/routes/recipes/recipeFiles/Cheese Sauce.md": () => import("../../../../chunks/Cheese Sauce.js"), "/src/routes/recipes/recipeFiles/Chicken Drumsticks.md": () => import("../../../../chunks/Chicken Drumsticks.js"), "/src/routes/recipes/recipeFiles/Chicken and Dumplings.md": () => import("../../../../chunks/Chicken and Dumplings.js"), "/src/routes/recipes/recipeFiles/Chili.md": () => import("../../../../chunks/Chili.js"), "/src/routes/recipes/recipeFiles/Dirty Rice.md": () => import("../../../../chunks/Dirty Rice.js"), "/src/routes/recipes/recipeFiles/Dumplings.md": () => import("../../../../chunks/Dumplings.js"), "/src/routes/recipes/recipeFiles/Hamburger Gravy.md": () => import("../../../../chunks/Hamburger Gravy.js"), "/src/routes/recipes/recipeFiles/Lemon Pie.md": () => import("../../../../chunks/Lemon Pie.js"), "/src/routes/recipes/recipeFiles/Pork Chops.md": () => import("../../../../chunks/Pork Chops.js"), "/src/routes/recipes/recipeFiles/Spicy Goulash.md": () => import("../../../../chunks/Spicy Goulash.js"), "/src/routes/recipes/recipeFiles/Taco Fries.md": () => import("../../../../chunks/Taco Fries.js"), "/src/routes/recipes/recipeFiles/Taco Seasoning.md": () => import("../../../../chunks/Taco Seasoning.js") });
  const iterableRecipes = Object.entries(allRecipes);
  const recipes = await Promise.all(
    iterableRecipes.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const recipePath = path.replace("/src/routes/recipes/recipeFiles", "/recipes");
      return {
        meta: metadata,
        path: recipePath
      };
    })
  );
  return recipes;
};
const GET = async () => {
  const recipes = await fetchRecipes();
  return json(recipes);
};
export {
  GET
};
