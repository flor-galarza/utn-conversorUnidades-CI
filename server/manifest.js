const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CFshVQlS.js",app:"_app/immutable/entry/app.Bhvk8WwO.js",imports:["_app/immutable/entry/start.CFshVQlS.js","_app/immutable/chunks/BS_q_DCq.js","_app/immutable/chunks/BOERJucq.js","_app/immutable/chunks/CCn0bfBr.js","_app/immutable/entry/app.Bhvk8WwO.js","_app/immutable/chunks/BOERJucq.js","_app/immutable/chunks/Cnpe7b-P.js","_app/immutable/chunks/gPO-l3xF.js","_app/immutable/chunks/DtP4zE-2.js","_app/immutable/chunks/CCn0bfBr.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-lINtJEaS.js')),
			__memo(() => import('./chunks/1-BUutm_GK.js')),
			__memo(() => import('./chunks/2-gl4oko-4.js'))
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
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
