import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Chicken Drumsticks",
  "date": "2022-04-06T00:00:00.000Z",
  "time": "4:00 pm",
  "tags": ["chicken", "recipe", "drumsticks", "easy"],
  "type": "recipe"
};
const Chickenu20Drumsticks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p><strong>Oven: 400\xB0</strong></p>
<h2>Ingredients:</h2>
<ul><li>6 Chicken Drumsticks</li>
<li>2 TBSP Olive Oil</li>
<li>1 TSP Sea Salt</li>
<li>1/2 TSP Pepper</li>
<li>1 TSP Garlic Powder</li>
<li>1 TSP Onion Powder</li>
<li>1 TSP Paprika</li>
<li>1/4 TSP Cayenne Pepper</li></ul>
<h2>Directions:</h2>
<ol><li>In a small bowl, combine olive oil, salt, pepper, garlic powder, onion powder, paprika &amp; cayenne.</li>
<li>Brush drumsticks with mixture, covering well</li>
<li>Bake at 400\xB0 for 40 minutes or until chicken is done</li>
<li>Serve</li></ol>
<h3>Variation</h3>
<ol><li>In a small bowl, combine olive oil, salt, pepper and paprika</li>
<li>Brush drumsticks with mixture, covering well</li>
<li>Bake at 400\xB0 for 40 minutes</li>
<li>Remove from oven and brush with Buffalo Sauce</li>
<li>Serve</li></ol>`;
});
export {
  Chickenu20Drumsticks as default,
  metadata
};
