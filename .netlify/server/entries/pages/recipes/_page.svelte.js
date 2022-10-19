import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"recipe-list"}">${each(data.recipes, (recipe) => {
    return `<div class="${"recipe-link"}"><a${add_attribute("href", recipe.path.replace(".md", ""), 0)}>${escape(recipe.meta.title)}</a>
			<div class="${"tag-box"}">${each(recipe.meta.tags, (tag) => {
      return `<a href="${"/recipes/tag/" + escape(tag, true)}">#${escape(tag)}</a>`;
    })}</div>
		</div>`;
  })}</div>`;
});
export {
  Page as default
};
