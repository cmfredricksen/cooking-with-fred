import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Chili",
  "date": "2022-02-22T00:00:00.000Z",
  "time": "2:39 pm",
  "tags": ["recipe", "spicy", "one-dish", "soup"],
  "type": "recipe"
};
const Chili = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Ingredients</h3>
<ul><li>1 pound ground beef</li>
<li>1/2 cup chopped onion</li>
<li>1/2 cup chopped bell pepper</li>
<li>1 can black beans, drained and rinsed</li>
<li>1 can diced tomatoes</li>
<li>1 can tomato sauce (or you can use tomato paste and water)</li>
<li>Water as desired</li></ul>
<p>You can decide how thick you want your chili to be. I would add a minimum of 1 cup of water, but whatever you want is fine as long as it is liquid.</p>
<h3>Seasonings</h3>
<ul><li>1/2 tsp cayenne pepper</li>
<li>1/2 tsp onion powder</li>
<li>1tsp red pepper flakes</li>
<li>1/2 tsp garlic powder</li>
<li>1/2 tsp oregano</li>
<li>1/2 tsp dried basil</li>
<li>1/4 tsp black pepper</li>
<li>1/2 tsp salt</li></ul>
<p>You can adjust seasonings to your taste. The above will give you a medium amount of heat for someone used to spicy foods. My oregano and garlic powder are usually heaping 1/2 teaspoonfuls. It\u2019s just a matter of preference.</p>
<h3>How to Make Chili</h3>
<p>Before starting, I like to measure out my seasonings and put them in a small bowl. I also gather my ingredients so they are handy. These are both <strong>optional</strong> of course, but it makes cooking less stressful and more fun!</p>
<ol><li>Brown ground beef on <strong>medium</strong> in a deep skillet or a Dutch oven. I like to add a nice pinch of sea salt to the meat as it is cooking.</li>
<li>Chop up onion and pepper, add to meat when it is almost done cooking. <strong>cook for additional 5 minutes, stirring occasionally</strong></li>
<li>While the veggies are cooking in the meat, I open my cans and drain the beans. I also rinse the beans well. (draining the beans is optional)</li>
<li>Add the beans, tomatoes and tomato sauce, mix together.</li>
<li>Add seasonings and stir in.</li>
<li>Bring mixture to a slow boil.</li>
<li>Reduce heat to <strong>Low</strong> and <strong>cover</strong></li>
<li>Cook for 20 minutes or more, turn off heat and let sit covered for 10 minutes.</li>
<li>Stir and <strong>Serve</strong> with crackers or garlic bread</li></ol>
<h3>Serving Suggestions</h3>
<p>You can add condiments to your chili like sour cream or shredded cheese.</p>`;
});
export {
  Chili as default,
  metadata
};
