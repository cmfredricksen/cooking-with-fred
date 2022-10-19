import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-c117737d.js","imports":["_app/immutable/start-c117737d.js","_app/immutable/chunks/index-435d9ecb.js","_app/immutable/chunks/singletons-b741b828.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "recipes",
				pattern: /^\/recipes\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "api/recipes",
				pattern: /^\/api\/recipes\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/recipes/_server.js')
			},
			{
				id: "recipes/tag/[tag]",
				pattern: /^\/recipes\/tag\/([^/]+?)\/?$/,
				names: ["tag"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "recipes/[slug]",
				pattern: /^\/recipes\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
