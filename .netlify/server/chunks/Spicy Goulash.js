import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Spicy Goulash",
  "date": "2022-04-16T00:00:00.000Z",
  "subject": "recipe",
  "classification": "class",
  "type": "recipe",
  "tags": ["beef", "pasta", "recipe"]
};
const Spicyu20Goulash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Ingredients</h2>
<h3>Sauce</h3>
<ul><li><p>1 pound ground beef</p></li>
<li><p>1/2 cup diced onion</p></li>
<li><p>1/2 cup bell pepper</p></li>
<li><p>1/2 cup sliced mushrooms (optional)</p></li>
<li><p>2 cloves garlic</p></li>
<li><p>1 can diced tomatoes</p></li>
<li><p>1 can tomato paste</p></li>
<li><p>water to achieve desired thickness</p></li>
<li><p>salt</p></li>
<li><p>pepper</p></li>
<li><p>oregano</p></li>
<li><p>basil</p></li>
<li><p>red pepper flakes</p></li></ul>
<h3>Pasta</h3>
<ul><li><p>Cook pasta in the sauce</p>
<ul><li>Add 1.5 cups of dry pasta to sauce</li>
<li>Add water to just cover pasta</li>
<li>Mix pasta and sauce together</li>
<li>Cover and cook on low for 20 minutes</li>
<li>Turn off heat, let sit covered for ten minutes (optional: add cheese)</li>
<li>Serve</li></ul></li>
<li><p>Cook pasta separately</p>
<ul><li>Cook pasta according to package directions</li>
<li>Drain &amp; Rinse</li>
<li>Add to finished sauce, stir together</li>
<li>Serve</li></ul></li></ul>
<h3>Directions</h3>
<ol><li>In a deep skillet brown meat, <strong>Medium Heat</strong></li>
<li>Add onions, garlic, bell pepper, mushrooms</li>
<li>Cook for about 5 minutes, stirring frequently</li>
<li>Add tomatoes and tomato paste</li>
<li>Add water until desired consistency, 1/2 cup at a time</li>
<li>Add seasonings</li>
<li>Mix Sauce together well</li>
<li>Add Pasta</li>
<li>Finish according to directions above</li></ol>`;
});
export {
  Spicyu20Goulash as default,
  metadata
};
