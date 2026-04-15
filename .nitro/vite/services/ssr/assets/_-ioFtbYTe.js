import { d as TSS_SERVER_FUNCTION, t as createServerFn, y as notFound } from "./createServerFn-DF8WhJ_n.js";
import { t as source } from "./source-D80zMK0f.js";
//#region node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/routes/docs/$.tsx?tss-serverfn-split
var serverLoader_createServerFn_handler = createServerRpc({
	id: "3754d170b07e5384cb393a7ce01e3317e54e102cb5b75ed0780e1a678ae2d91a",
	name: "serverLoader",
	filename: "src/routes/docs/$.tsx"
}, (opts) => serverLoader.__executeServer(opts));
var serverLoader = createServerFn({ method: "GET" }).inputValidator((slugs) => slugs).handler(serverLoader_createServerFn_handler, async ({ data: slugs }) => {
	const page = source.getPage(slugs);
	if (!page) throw notFound();
	return {
		path: page.path,
		slug: slugs.join("/"),
		title: page.data.title ?? "",
		pageTree: await source.serializePageTree(source.getPageTree())
	};
});
//#endregion
export { serverLoader_createServerFn_handler };
