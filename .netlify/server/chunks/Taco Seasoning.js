import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Taco Seasoning",
  "date": "2022-04-05T00:00:00.000Z",
  "time": "3:19 pm",
  "tags": ["recipe", "seasonings", "spices", "spicy", "easy"],
  "type": "recipe"
};
const Tacou20Seasoning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Per 1 pound ground beef</h3>
<ul><li>1 TBSP chili powder</li>
<li>1/4 TSP garlic powder</li>
<li>1/4 TSP onion powder</li>
<li>1/4 TSP red pepper flakes</li>
<li>1/4 TSP oregano</li>
<li>1/2 TSP paprika</li>
<li>1 1/2 TSP cumin</li>
<li>1 TSP salt</li></ul>
<p>Optional: 1/4 TSP cayenne pepper</p>
<h3>Directions:</h3>
<ol><li>Cook ground beef over medium heat until it is browned</li>
<li><strong>Optional:</strong> Add 1/2 cup diced onion, 1/4 cup diced bell pepper, sliced jalapenos (add at end of meat browning, cook about 5 minutes)</li>
<li>Once the meat is browned, add seasonings and about 1/3 cup of water (adjust as needed to blend the spices)</li>
<li>Cover and simmer on low heat for 20 minutes</li>
<li>Let sit ten minutes, stir and serve</li></ol>`;
});
export {
  Tacou20Seasoning as default,
  metadata
};
