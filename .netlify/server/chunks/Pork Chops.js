import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Pork Chops",
  "date": "2022-04-15T00:00:00.000Z",
  "tags": ["recipe", "pork", "easy"],
  "type": "recipe"
};
const Porku20Chops = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Ingredients</h3>
<ul><li>Pork Chops</li>
<li>salt</li>
<li>pepper</li>
<li>paprika</li>
<li>oregano</li>
<li>red pepper flakes</li></ul>
<ol><li>Season Pork Chops</li>
<li>Bake at 400 degrees 20 minutes</li>
<li>Flip chops bake 20-30 mins</li>
<li>Remove and let sit for 10-20 mins</li></ol>`;
});
export {
  Porku20Chops as default,
  metadata
};
