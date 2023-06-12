export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.cdc7accd.js","app":"_app/immutable/entry/app.82530454.js","imports":["_app/immutable/entry/start.cdc7accd.js","_app/immutable/chunks/index.fa6fede3.js","_app/immutable/chunks/singletons.bfdd7c61.js","_app/immutable/entry/app.82530454.js","_app/immutable/chunks/index.fa6fede3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
