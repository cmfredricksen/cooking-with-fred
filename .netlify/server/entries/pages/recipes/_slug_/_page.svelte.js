import { c as create_ssr_component, d as escape, e as each, v as validate_component } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, tags, Content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(title)}</h1>
<div class="${"tag-box"}">${each(tags, (tag) => {
    return `<a href="${"/recipes/tag/" + escape(tag, true)}">#${escape(tag)}</a>`;
  })}</div>

<div class="${"content-wrapper"}">${validate_component(Content, "Content").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
