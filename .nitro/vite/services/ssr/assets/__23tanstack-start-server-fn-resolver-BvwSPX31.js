import { o as __toESM } from "./chunk-D3zDcpJC.js";
import { n as require_react } from "./react-dom-CwY-XDXW.js";
//#region node_modules/@tanstack/router-core/dist/esm/root.js
/** Stable identifier used for the root route in a route tree. */
var rootRouteId = "__root__";
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/matchContext.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var matchContext = import_react.createContext(void 0);
var dummyMatchContext = import_react.createContext(void 0);
//#endregion
//#region \0%23tanstack-start-server-fn-resolver
var manifest = { "3754d170b07e5384cb393a7ce01e3317e54e102cb5b75ed0780e1a678ae2d91a": {
	functionName: "serverLoader_createServerFn_handler",
	importer: () => import("./_-ioFtbYTe.js")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { rootRouteId as i, dummyMatchContext as n, matchContext as r, getServerFnById as t };
