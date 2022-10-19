import { c as create_ssr_component } from "./index.js";
const Taco_Fries_md_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1ngu6rs{color:#6363cc}a.svelte-1ngu6rs:hover{color:#ff4500}",
  map: null
};
const metadata = {
  "title": "Taco Fries",
  "date": "2022-05-30T00:00:00.000Z",
  "tags": ["note", "recipe"]
};
const Tacou20Fries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<ul><li>Make taco meat using <a data-sveltekit-reload href="${"/recipes/Taco%20Seasoning"}" class="${"svelte-1ngu6rs"}">Taco Seasoning</a></li>
<li>Make <a data-sveltekit-reload href="${"/recipes/Cheese%20Sauce"}" class="${"svelte-1ngu6rs"}">Cheese Sauce</a></li></ul>
<ol><li>Cook French Fries according to package directions.</li>
<li>Season Fries with Taco Seasoning, after cooking.</li>
<li>Make a bottom layer of French Fries</li>
<li>Cover with Taco Meat</li>
<li>Cover with Cheese Sauce</li>
<li>Dig in and <strong>Enjoy</strong></li></ol>`;
});
export {
  Tacou20Fries as default,
  metadata
};
