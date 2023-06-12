export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.fbebdcfd.js","app":"_app/immutable/entry/app.46b93f70.js","imports":["_app/immutable/entry/start.fbebdcfd.js","_app/immutable/chunks/index.fa6fede3.js","_app/immutable/chunks/singletons.874e3718.js","_app/immutable/entry/app.46b93f70.js","_app/immutable/chunks/index.fa6fede3.js"],"stylesheets":[],"fonts":[]},
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
