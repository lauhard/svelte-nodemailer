export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d5f01b40.js","app":"_app/immutable/entry/app.b28d20f3.js","imports":["_app/immutable/entry/start.d5f01b40.js","_app/immutable/chunks/index.fa6fede3.js","_app/immutable/chunks/singletons.fd9e61a0.js","_app/immutable/entry/app.b28d20f3.js","_app/immutable/chunks/index.fa6fede3.js"],"stylesheets":[],"fonts":[]},
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
