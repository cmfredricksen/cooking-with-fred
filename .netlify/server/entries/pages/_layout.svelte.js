import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/index.js";
const global = "";
const Nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "a.svelte-1t6g1eo{margin:1rem}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Recipes", path: "/recipes" },
    { title: "Api", path: "/api/recipes" }
  ];
  $$result.css.add(css$3);
  return `<nav>${each(links, ({ title, path }) => {
    return `<a${add_attribute("href", path, 0)} class="${"svelte-1t6g1eo"}">${escape(title)}</a>`;
  })}
</nav>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-c1zli2{display:flex;justify-content:space-between;align-items:baseline;padding:1rem 1rem;border-bottom:1px solid var(--clr-medium);margin-bottom:2rem}.material-symbols-outlined.svelte-c1zli2{font-variation-settings:'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;font-size:2rem;color:var(--clr-medium)}@media screen and (max-width: 768px){header.svelte-c1zli2{flex-direction:column;align-items:center}span.svelte-c1zli2{padding:2rem 0}.material-symbols-outlined.svelte-c1zli2{font-size:3rem}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="${"svelte-c1zli2"}"><h1>Cooking with Fred</h1>
	<span class="${"material-symbols-outlined svelte-c1zli2"}">soup_kitchen </span>
	${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-146j8p0{padding:2rem 0;display:flex;align-items:center;justify-content:center}.material-symbols-outlined.svelte-146j8p0{font-variation-settings:'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;font-size:1.5rem;color:var(--clr-medium)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-146j8p0"}"><p>\xA9 2022 Fred | All Rights Reserved<span class="${"material-symbols-outlined svelte-146j8p0"}">soup_kitchen
		</span></p>
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1r78k1l{width:60%;margin:0 auto}@media screen and (max-width: 768px){.wrapper.svelte-1r78k1l{width:90%}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}">

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${"wrapper svelte-1r78k1l"}">${slots.default ? slots.default({}) : ``}</div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
