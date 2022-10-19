import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Dumplings for Stew",
  "date": "2022-02-28T00:00:00.000Z",
  "time": "2:21 pm",
  "tags": ["recipe", "soup"],
  "type": "recipe"
};
const Dumplings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Ingredients</h3>
<ul><li>2/3 cup all purpose flour</li>
<li>1 TBSP snipped parsley (optional)</li>
<li>1 TSP baking powder</li>
<li>1/8 TSP dried basil (optional)</li>
<li>1/4 cup milk</li>
<li>2 TBSP cooking oil</li></ul>
<h3>How to Make Dumplings</h3>
<ol><li>In a bowl mix:<ul><li>flour</li>
<li>parsley</li>
<li>baking powder</li>
<li>herb</li>
<li>1/8 TSP salt</li></ul></li>
<li>Mix Milk and Oil, Pour into flour mixture</li>
<li>Stir with a fork until combined</li>
<li>Drop Mixture by a Tablespoon to form 4-6 mounds on top of bubbling stew</li>
<li>Cover and let simmer for 10-12 minutes or until a toothpick comes out clean</li></ol>`;
});
export {
  Dumplings as default,
  metadata
};
