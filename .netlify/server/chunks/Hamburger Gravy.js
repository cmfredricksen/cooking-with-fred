import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Hamburger Gravy",
  "date": "2022-02-24T00:00:00.000Z",
  "time": "3:43 pm",
  "tags": ["recipe", "one-dish", "stick-to-your-ribs", "beef"],
  "type": "recipe"
};
const Hamburgeru20Gravy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Ingredients</h3>
<ul><li>1 pound ground beef</li>
<li>1/2 chopped onion</li>
<li>3 cups milk</li>
<li>2-3 tbsp flour</li>
<li>2 cubes chicken bouillon</li>
<li>1 tsp sage</li>
<li>salt &amp; pepper</li></ul>
<h3>How to make Hamburger Gravy</h3>
<ol><li>In a large skillet or Dutch oven on medium heat, brown ground beef.</li>
<li>When beef is done, add onion and bouillon cubes and cook 5 more minutes.</li>
<li>Add 2 cups of milk, mix together. Bring to a slow simmer.</li>
<li>Add Sage</li>
<li>Mix Flour into remaining cup of cold milk, then add to gravy.</li>
<li>Bring to a slow simmer, stirring until desired thickness.</li>
<li>Salt and pepper to taste.</li></ol>
<p>You can serve over potatoes, bread or pasta.</p>
<h3>Make it a one pan dinner !!</h3>
<ol><li>Once the gravy has thickened, add 2 cups dry pasta to the pan.</li>
<li>Mix pasta into the gravy.</li>
<li>Add water, just enough to make the gravy cover the pasta. Stir again.</li>
<li>Bring to a slow simmer, stirring occasionally.</li>
<li>Once the gravy is simmering, turn the heat to low and cover with a tight lid.</li>
<li>Cook on low for 20 minutes.</li>
<li>Turn off heat, keep the lid on and let sit for 10 minutes.</li>
<li>Stir and enjoy!</li></ol>`;
});
export {
  Hamburgeru20Gravy as default,
  metadata
};
