import { c as create_ssr_component, d as escape, e as each, b as add_attribute } from "../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { recipes, meta } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(data.tag)}</h1>

${each(recipes, (recipe) => {
    return `<ul><li><a${add_attribute("href", recipe.path.replace(".md", ""), 0)}>${escape(recipe.meta.title)}
			</a></li>
	</ul>`;
  })}`;
});
export {
  Page as default
};
