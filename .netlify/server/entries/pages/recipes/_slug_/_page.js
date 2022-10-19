const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const recipe = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../recipeFiles/Black Beans & Rice.md": () => import("../../../../chunks/Black Beans _ Rice.js"), "../recipeFiles/Broccoli-Cheese-Rice.md": () => import("../../../../chunks/Broccoli-Cheese-Rice.js"), "../recipeFiles/Cheese Sauce.md": () => import("../../../../chunks/Cheese Sauce.js"), "../recipeFiles/Chicken Drumsticks.md": () => import("../../../../chunks/Chicken Drumsticks.js"), "../recipeFiles/Chicken and Dumplings.md": () => import("../../../../chunks/Chicken and Dumplings.js"), "../recipeFiles/Chili.md": () => import("../../../../chunks/Chili.js"), "../recipeFiles/Dirty Rice.md": () => import("../../../../chunks/Dirty Rice.js"), "../recipeFiles/Dumplings.md": () => import("../../../../chunks/Dumplings.js"), "../recipeFiles/Hamburger Gravy.md": () => import("../../../../chunks/Hamburger Gravy.js"), "../recipeFiles/Lemon Pie.md": () => import("../../../../chunks/Lemon Pie.js"), "../recipeFiles/Pork Chops.md": () => import("../../../../chunks/Pork Chops.js"), "../recipeFiles/Spicy Goulash.md": () => import("../../../../chunks/Spicy Goulash.js"), "../recipeFiles/Taco Fries.md": () => import("../../../../chunks/Taco Fries.js"), "../recipeFiles/Taco Seasoning.md": () => import("../../../../chunks/Taco Seasoning.js") }), `../recipeFiles/${params.slug}.md`);
  const { title, date, tags } = recipe.metadata;
  const Content = recipe.default;
  return {
    title,
    date,
    tags,
    Content
  };
}
export {
  load
};
