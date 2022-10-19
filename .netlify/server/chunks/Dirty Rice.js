import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Dirty Rice",
  "date": "2022-03-18T00:00:00.000Z",
  "tags": ["recipe", "one-dish", "spicy", "beef", "rice", "easy"],
  "type": "recipe"
};
const Dirtyu20Rice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Ingredients</h3>
<ul><li>1 pound Ground Beef</li>
<li>1/2 cup Diced Onion</li>
<li>1 1/2 cups Dry Jasmine Rice (can use long grain rice or any rice)</li>
<li>3 cups water</li></ul>
<h3><em>Seasonings</em></h3>
<ul><li>1/2 tsp onion powder (optional)</li>
<li>1/2 tsp garlic powder (optional)</li>
<li>1/2 tsp oregano (optional)</li>
<li>1-2 chicken broth cubes</li>
<li>1tsp red pepper flakes</li>
<li>1/4 tsp cayenne pepper</li>
<li>1/2 tsp sea salt (can use normal salt)</li>
<li>1/2 tsp black pepper</li></ul>
<h3>How to Prepare</h3>
<ol><li>In a deep skillet brown one pound ground beef, add chicken broth cube(s) and allow them to soften in the grease</li>
<li>Chop up onion, add to browned beef and let cook for 5 minutes</li>
<li>Get spices measured out</li>
<li>Add spices, rice and 3 cups of water. Mix together and bring to a slow boil (on medium heat)</li>
<li>Once it begins to boil, reduce heat to low and cover. Cook for 20 minutes.</li>
<li>After 20 minutes, turn off the heat and leave cover on pan. Let the rice finish cooking for 10 minutes.</li>
<li>Fluff, mix and serve!</li></ol>`;
});
export {
  Dirtyu20Rice as default,
  metadata
};
