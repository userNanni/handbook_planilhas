//#region node_modules/fumadocs-core/dist/remove-undefined-CTqT55E9.js
function removeUndefined(value, deep = false) {
	const obj = value;
	for (const key in obj) {
		if (obj[key] === void 0) delete obj[key];
		if (!deep) continue;
		const entry = obj[key];
		if (typeof entry === "object" && entry !== null) {
			removeUndefined(entry, deep);
			continue;
		}
		if (Array.isArray(entry)) for (const item of entry) removeUndefined(item, deep);
	}
	return value;
}
//#endregion
export { removeUndefined as t };
