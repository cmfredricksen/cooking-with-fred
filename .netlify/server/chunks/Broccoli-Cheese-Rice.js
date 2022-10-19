import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Broccoli Cheese Rice",
  "date": "2022-04-06T00:00:00.000Z",
  "time": "3:52 pm",
  "tags": ["vegetable(s)", "broccoli", "rice", "recipe"],
  "type": "recipe"
};
const Broccoli_Cheese_Rice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Makes about 3-4 servings</p>
<h3>Ingredients:</h3>
<ul><li>2-3 cups of cooked rice</li>
<li>1-2 cups of cooked broccoli</li></ul>
<p><strong>Cheese Sauce</strong></p>
<ul><li>1 TBSP Butter</li>
<li>1 TBSP Flour</li>
<li>1 CUP Milk</li>
<li>1 1/2 CUPS Shredded Cheddar</li></ul>
<h3>Directions:</h3>
<ol><li>Melt butter in pan</li>
<li>Add Flour and mix together well</li>
<li>Cook for 2 minutes, stirring continuously</li>
<li>Add Milk, 1/4 CUP at a time and mix well</li>
<li>Cook over medium-low heat for 20 minutes, stirring often</li>
<li>Add cheese, mix well</li>
<li>Add rice and broccoli, mix together</li></ol>`;
});
export {
  Broccoli_Cheese_Rice as default,
  metadata
};
