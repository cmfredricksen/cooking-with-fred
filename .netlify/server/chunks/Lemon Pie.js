import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Lemon Pie",
  "date": "2022-04-15T00:00:00.000Z",
  "subject": "subject",
  "classification": "Dessert",
  "type": "recipe",
  "tags": ["recipe", "dessert", "tart", "easy"]
};
const Lemonu20Pie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Ingredients</h3>
<ul><li>3 egg yolks</li>
<li>1 can sweetened condensed milk (14oz)</li>
<li>1/2 cup Lemon Juice</li>
<li>2 or 3 drops of food coloring (optional)</li>
<li>1 (8 or 9 inch) graham cracker pie crust</li>
<li>whipped cream or cream topping</li></ul>
<h3>Instructions</h3>
<ol><li>Preheat oven to 325\xB0</li>
<li>Beat egg yolks in a medium sized bowl (using beater or fork)</li>
<li>Gradually stir in condensed milk, lemon juice and food coloring</li>
<li>Pour into pie shell</li>
<li>Bake at 325\xB0 for 30-35 minutes or until set</li>
<li>Remove from oven</li>
<li>Cool 1 hour</li>
<li>Refrigerate at least 3 hours</li>
<li>Before serving spread whipped cream on top</li>
<li>Refrigerate leftovers</li></ol>`;
});
export {
  Lemonu20Pie as default,
  metadata
};
