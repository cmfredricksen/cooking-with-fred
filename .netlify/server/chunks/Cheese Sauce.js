import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Cheese Sauce",
  "date": "2022-05-30T00:00:00.000Z",
  "tags": ["sauce", "cheese"]
};
const Cheeseu20Sauce = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Ingredients</h2>
<ul><li>1 can evaporated milk</li>
<li>2 cups shredded cheese (Cheddar or Colby)</li>
<li>2 TBSP cornstarch</li>
<li><strong>Optional: 1/4 cup jalapenos</strong></li></ul>
<h2>Directions</h2>
<ol><li>Add 1 can of evaporated milk to sauce pan.</li>
<li>Coat the shredded cheese in cornstarch.</li>
<li><em>Once the sauce is melted, stir in the jalapenos.</em></li>
<li>Heat over med-low heat until done, stirring frequently.</li></ol>`;
});
export {
  Cheeseu20Sauce as default,
  metadata
};
