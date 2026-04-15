import { o as __toESM } from "./chunk-D3zDcpJC.js";
import { n as estudo_exports } from "./estudo-l153fbuJ.js";
import { r as problema_dificil_exports } from "./problema-dificil-DfHLLLaG.js";
import { n as db_concepts_exports } from "./db-concepts-DXGYaAao.js";
import { n as arrayformula_exports } from "./arrayformula-BmEEmuW5.js";
import { r as googlefinance_exports } from "./googlefinance-abPFC4tc.js";
import { r as funcoes_exports } from "./funcoes-DnpxbfJg.js";
import { r as map_exports } from "./map-CO5sSdWe.js";
import { n as base_structure_exports } from "./base-structure-DOsSsSjT.js";
import { r as select_exports } from "./select-VlOqhtoB.js";
import { a as where_exports } from "./where-DDCfOZsr.js";
import { n as data_manipulation_exports } from "./data-manipulation-18DNjDL_.js";
import { r as query_exports } from "./query-Dy_43NP2.js";
import { r as mixed_structure_exports } from "./mixed-structure-I21CnHdv.js";
import { a as xlookup_exports } from "./xlookup-CfkMLU4R.js";
import { n as docs_exports } from "./docs-C7sSbLrQ.js";
import { r as intro_exports } from "./intro-DJvZf4nw.js";
import { r as nege2c_exports } from "./nege2c-BiFQc6ME.js";
import { r as query_exports$1 } from "./query-BbrtrkTr.js";
import { r as prologo_exports } from "./prologo-Z2glUnE7.js";
import { t as normalizeUrl } from "./normalize-url-J3kqKlu4-CvqSPuSS.js";
import { a as visit, n as docsRoute } from "./shared-BfER6AJN.js";
import * as path$1 from "node:path";
import path from "node:path";
//#region node_modules/fumadocs-core/dist/path-v4s3P8pA.js
function basename(path, ext) {
	const idx = path.lastIndexOf("/");
	return path.substring(idx === -1 ? 0 : idx + 1, ext ? path.length - ext.length : path.length);
}
function extname(path) {
	const dotIdx = path.lastIndexOf(".");
	if (dotIdx !== -1) return path.substring(dotIdx);
	return "";
}
function dirname(path) {
	return path.split("/").slice(0, -1).join("/");
}
/**
* Split path into segments, trailing/leading slashes are removed
*/
function splitPath(path) {
	return path.split("/").filter((p) => p.length > 0);
}
/**
* Resolve paths, slashes within the path will be ignored
* @param paths - Paths to join
* @example
* ```
* ['a','b'] // 'a/b'
* ['/a'] // 'a'
* ['a', '/b'] // 'a/b'
* ['a', '../b/c'] // 'b/c'
* ```
*/
function joinPath(...paths) {
	const out = [];
	const parsed = paths.flatMap(splitPath);
	for (const seg of parsed) switch (seg) {
		case "..":
			out.pop();
			break;
		case ".": break;
		default: out.push(seg);
	}
	return out.join("/");
}
function slash(path) {
	if (path.startsWith("\\\\?\\")) return path;
	return path.replaceAll("\\", "/");
}
//#endregion
//#region node_modules/fumadocs-core/dist/source/plugins/slugs.js
/**
* Generate slugs for pages if missing
*/
function slugsPlugin(slugFn) {
	function isIndex(file) {
		return basename(file, extname(file)) === "index";
	}
	return {
		name: "fumadocs:slugs",
		transformStorage({ storage }) {
			const indexFiles = [];
			const taken = /* @__PURE__ */ new Set();
			for (const path of storage.getFiles()) {
				const file = storage.read(path);
				if (!file || file.format !== "page" || file.slugs) continue;
				const customSlugs = slugFn?.(file);
				if (customSlugs === void 0 && isIndex(path)) {
					indexFiles.push(path);
					continue;
				}
				file.slugs = customSlugs ?? getSlugs(path);
				const key = file.slugs.join("/");
				if (taken.has(key)) throw new Error(`Duplicated slugs: ${key}`);
				taken.add(key);
			}
			for (const path of indexFiles) {
				const file = storage.read(path);
				if (file?.format !== "page") continue;
				file.slugs = getSlugs(path);
				if (taken.has(file.slugs.join("/"))) file.slugs.push("index");
			}
		}
	};
}
var GroupRegex = /^\(.+\)$/;
/**
* Convert file path into slugs, also encode non-ASCII characters, so they can work in pathname
*/
function getSlugs(file) {
	const dir = dirname(file);
	const name = basename(file, extname(file));
	const slugs = [];
	for (const seg of dir.split("/")) if (seg.length > 0 && !GroupRegex.test(seg)) slugs.push(encodeURI(seg));
	if (GroupRegex.test(name)) throw new Error(`Cannot use folder group in file names: ${file}`);
	if (name !== "index") slugs.push(encodeURI(name));
	return slugs;
}
//#endregion
//#region node_modules/fumadocs-core/dist/icon-CboA1P8m.js
function iconPlugin(resolveIcon) {
	function replaceIcon(node) {
		if (node.icon === void 0 || typeof node.icon === "string") node.icon = resolveIcon(node.icon);
		return node;
	}
	return {
		name: "fumadocs:icon",
		transformPageTree: {
			file: replaceIcon,
			folder: replaceIcon,
			separator: replaceIcon
		}
	};
}
//#endregion
//#region node_modules/fumadocs-core/dist/source/index.js
/**
* In memory file system.
*/
var FileSystem = class {
	constructor(inherit) {
		this.files = /* @__PURE__ */ new Map();
		this.folders = /* @__PURE__ */ new Map();
		if (inherit) {
			for (const [k, v] of inherit.folders) this.folders.set(k, v);
			for (const [k, v] of inherit.files) this.files.set(k, v);
		} else this.folders.set("", []);
	}
	read(path) {
		return this.files.get(path);
	}
	/**
	* get the direct children of folder (in virtual file path)
	*/
	readDir(path) {
		return this.folders.get(path);
	}
	write(path, file) {
		if (!this.files.has(path)) {
			const dir = dirname(path);
			this.makeDir(dir);
			this.readDir(dir)?.push(path);
		}
		this.files.set(path, file);
	}
	/**
	* Delete files at specified path.
	*
	* @param path - the target path.
	* @param [recursive=false] - if set to `true`, it will also delete directories.
	*/
	delete(path, recursive = false) {
		if (this.files.delete(path)) return true;
		if (recursive) {
			const folder = this.folders.get(path);
			if (!folder) return false;
			this.folders.delete(path);
			for (const child of folder) this.delete(child);
			return true;
		}
		return false;
	}
	getFiles() {
		return Array.from(this.files.keys());
	}
	makeDir(path) {
		const cur = [];
		for (const seg of splitPath(path)) {
			cur.push(seg);
			const curPath = cur.join("/");
			if (this.folders.has(curPath)) continue;
			this.folders.set(curPath, []);
			this.folders.get(dirname(curPath)).push(curPath);
		}
	}
};
function isLocaleValid(locale) {
	return locale.length > 0 && !/\d+/.test(locale);
}
var parsers = {
	dir(path) {
		const [locale, ...segs] = path.split("/");
		if (locale && segs.length > 0 && isLocaleValid(locale)) return [segs.join("/"), locale];
		return [path];
	},
	dot(path) {
		const dir = dirname(path);
		const parts = basename(path).split(".");
		if (parts.length < 3) return [path];
		const [locale] = parts.splice(parts.length - 2, 1);
		if (!isLocaleValid(locale)) return [path];
		return [joinPath(dir, parts.join(".")), locale];
	},
	none(path) {
		return [path];
	}
};
var EmptyLang = Symbol();
/**
* convert input files into virtual file system.
*
* in the storage, locale codes are removed from file paths, hence the same file will have same file paths in every storage.
*/
function createContentStorageBuilder(loaderConfig) {
	const { source, plugins, i18n } = loaderConfig;
	const parser = i18n ? parsers[i18n.parser ?? "dot"] : parsers.none;
	const normalized = /* @__PURE__ */ new Map();
	for (const inputFile of source.files) {
		let file;
		if (inputFile.type === "page") file = {
			format: "page",
			path: normalizePath(inputFile.path),
			slugs: inputFile.slugs,
			data: inputFile.data,
			absolutePath: inputFile.absolutePath
		};
		else file = {
			format: "meta",
			path: normalizePath(inputFile.path),
			absolutePath: inputFile.absolutePath,
			data: inputFile.data
		};
		const [pathWithoutLocale, locale = i18n ? i18n.defaultLanguage : EmptyLang] = parser(file.path);
		let list = normalized.get(locale);
		if (!list) {
			list = [];
			normalized.set(locale, list);
		}
		list.push({
			pathWithoutLocale,
			file
		});
	}
	function makeStorage(locale, inherit) {
		const storage = new FileSystem(inherit);
		for (const { pathWithoutLocale, file } of normalized.get(locale) ?? []) storage.write(pathWithoutLocale, file);
		const context = { storage };
		for (const plugin of plugins) plugin.transformStorage?.(context);
		return storage;
	}
	return {
		i18n() {
			const storages = {};
			if (!i18n) return storages;
			const fallbackLang = i18n.fallbackLanguage !== null ? i18n.fallbackLanguage ?? i18n.defaultLanguage : null;
			function scan(lang) {
				if (storages[lang]) return storages[lang];
				return storages[lang] = makeStorage(lang, fallbackLang && fallbackLang !== lang ? scan(fallbackLang) : void 0);
			}
			for (const lang of i18n.languages) scan(lang);
			return storages;
		},
		single() {
			return makeStorage(EmptyLang);
		}
	};
}
/**
* @param path - Relative path
* @returns Normalized path, with no trailing/leading slashes
* @throws Throws error if path starts with `./` or `../`
*/
function normalizePath(path) {
	const segments = splitPath(slash(path));
	if (segments[0] === "." || segments[0] === "..") throw new Error("It must not start with './' or '../'");
	return segments.join("/");
}
function transformerFallback() {
	const addedFiles = /* @__PURE__ */ new Set();
	function shouldIgnore(context) {
		return context.custom?._fallback === true;
	}
	return {
		root(root) {
			if (shouldIgnore(this)) return root;
			const isolatedStorage = new FileSystem();
			if (addedFiles.size === this.storage.files.size) return root;
			for (const file of this.storage.getFiles()) {
				if (addedFiles.has(file)) continue;
				isolatedStorage.write(file, this.storage.read(file));
			}
			root.fallback = new PageTreeBuilder(isolatedStorage, {
				idPrefix: this.idPrefix ? `fallback:${this.idPrefix}` : "fallback",
				url: this.getUrl,
				noRef: this.noRef,
				transformers: this.transformers,
				generateFallback: false,
				context: {
					...this.custom,
					_fallback: true
				}
			}).root();
			addedFiles.clear();
			return root;
		},
		file(node, file) {
			if (shouldIgnore(this)) return node;
			if (file) addedFiles.add(file);
			return node;
		},
		folder(node, _dir, metaPath) {
			if (shouldIgnore(this)) return node;
			if (metaPath) addedFiles.add(metaPath);
			return node;
		}
	};
}
var group = /^\((?<name>.+)\)$/;
var link = /^(?<external>external:)?(?:\[(?<icon>[^\]]+)])?\[(?<name>[^\]]+)]\((?<url>[^)]+)\)$/;
var separator = /^---(?:\[(?<icon>[^\]]+)])?(?<name>.+)---|^---$/;
var rest = "...";
var restReversed = "z...a";
var extractPrefix = "...";
var excludePrefix = "!";
var PageTreeBuilder = class {
	constructor(input, options) {
		this.flattenPathToFullPath = /* @__PURE__ */ new Map();
		this.transformers = [];
		this.pathToNode = /* @__PURE__ */ new Map();
		this.unfinished = /* @__PURE__ */ new WeakSet();
		this.ownerMap = /* @__PURE__ */ new Map();
		this._nextId = 0;
		const { transformers, url, context, generateFallback = true, idPrefix = "", noRef = false } = options;
		if (transformers) this.transformers.push(...transformers);
		if (generateFallback) this.transformers.push(transformerFallback());
		this.ctx = {
			builder: this,
			idPrefix,
			getUrl: url,
			storage: void 0,
			noRef,
			transformers: this.transformers,
			custom: context
		};
		if (Array.isArray(input)) {
			const [locale, storages] = input;
			this.ctx.storage = this.storage = storages[locale];
			this.ctx.locale = locale;
			this.ctx.storages = storages;
		} else this.ctx.storage = this.storage = input;
		for (const file of this.storage.getFiles()) {
			const content = this.storage.read(file);
			const flattenPath = file.substring(0, file.length - extname(file).length);
			this.flattenPathToFullPath.set(flattenPath + "." + content.format, file);
		}
	}
	resolveFlattenPath(name, format) {
		return this.flattenPathToFullPath.get(name + "." + format) ?? name;
	}
	/**
	* try to register as the owner of `node`.
	*
	* when a node is referenced by multiple folders, this determines which folder they should belong to.
	*
	* @returns whether the owner owns the node.
	*/
	own(ownerPath, node, priority) {
		if (this.unfinished.has(node)) return false;
		const existing = this.ownerMap.get(node);
		if (!existing) {
			this.ownerMap.set(node, {
				owner: ownerPath,
				priority
			});
			return true;
		}
		if (existing.owner === ownerPath) {
			existing.priority = Math.max(existing.priority, priority);
			return true;
		}
		if (existing.priority >= priority) return false;
		const folder = this.pathToNode.get(existing.owner);
		if (folder && folder.type === "folder") if (folder.index === node) delete folder.index;
		else {
			const idx = folder.children.indexOf(node);
			if (idx !== -1) folder.children.splice(idx, 1);
		}
		existing.owner = ownerPath;
		existing.priority = priority;
		return true;
	}
	transferOwner(ownerPath, node) {
		const existing = this.ownerMap.get(node);
		if (existing) existing.owner = ownerPath;
	}
	generateId(localId = `_${this._nextId++}`) {
		let id = localId;
		if (this.ctx.locale) id = `${this.ctx.locale}:${id}`;
		if (this.ctx.idPrefix) id = `${this.ctx.idPrefix}:${id}`;
		return id;
	}
	buildPaths(paths, filter, reversed = false) {
		const items = [];
		const folders = [];
		const sortedPaths = paths.sort((a, b) => reversed ? b.localeCompare(a) : a.localeCompare(b));
		for (const path of sortedPaths) {
			if (filter && !filter(path)) continue;
			const fileNode = this.file(path);
			if (fileNode) {
				if (basename(path, extname(path)) === "index") items.unshift(fileNode);
				else items.push(fileNode);
				continue;
			}
			const dirNode = this.folder(path);
			if (dirNode) folders.push(dirNode);
		}
		items.push(...folders);
		return items;
	}
	resolveFolderItem(folderPath, item, outputArray, excludedPaths) {
		if (item === rest || item === restReversed) {
			outputArray.push(item);
			return;
		}
		let match = separator.exec(item);
		if (match?.groups) {
			let node = {
				$id: this.generateId(),
				type: "separator",
				icon: match.groups.icon,
				name: match.groups.name
			};
			for (const transformer of this.transformers) {
				if (!transformer.separator) continue;
				node = transformer.separator.call(this.ctx, node);
			}
			outputArray.push(node);
			return;
		}
		match = link.exec(item);
		if (match?.groups) {
			const { icon, url, name, external } = match.groups;
			let node = {
				$id: this.generateId(),
				type: "page",
				icon,
				name,
				url
			};
			if (external) node.external = true;
			for (const transformer of this.transformers) {
				if (!transformer.file) continue;
				node = transformer.file.call(this.ctx, node);
			}
			outputArray.push(node);
			return;
		}
		if (item.startsWith(excludePrefix)) {
			const path = joinPath(folderPath, item.slice(1));
			excludedPaths.add(path);
			excludedPaths.add(this.resolveFlattenPath(path, "page"));
			return;
		}
		if (item.startsWith(extractPrefix)) {
			const path = joinPath(folderPath, item.slice(3));
			const node = this.folder(path);
			if (!node) return;
			const children = node.index ? [node.index, ...node.children] : node.children;
			if (this.own(folderPath, node, 2)) {
				for (const child of children) {
					this.transferOwner(folderPath, child);
					outputArray.push(child);
				}
				excludedPaths.add(path);
			} else for (const child of children) if (this.own(folderPath, child, 2)) outputArray.push(child);
			return;
		}
		let path = joinPath(folderPath, item);
		let node = this.folder(path);
		if (!node) {
			path = this.resolveFlattenPath(path, "page");
			node = this.file(path);
		}
		if (!node || !this.own(folderPath, node, 2)) return;
		outputArray.push(node);
		excludedPaths.add(path);
	}
	folder(folderPath) {
		const cached = this.pathToNode.get(folderPath);
		if (cached) return cached;
		const files = this.storage.readDir(folderPath);
		if (!files) return;
		const isGlobalRoot = folderPath === "";
		const metaPath = this.resolveFlattenPath(joinPath(folderPath, "meta"), "meta");
		const indexPath = this.resolveFlattenPath(joinPath(folderPath, "index"), "page");
		let meta = this.storage.read(metaPath);
		if (meta && meta.format !== "meta") meta = void 0;
		const metadata = meta?.data ?? {};
		let node = {
			type: "folder",
			name: null,
			root: metadata.root,
			defaultOpen: metadata.defaultOpen,
			description: metadata.description,
			collapsible: metadata.collapsible,
			children: [],
			$id: this.generateId(folderPath),
			$ref: !this.ctx.noRef && meta ? metaPath : void 0
		};
		this.pathToNode.set(folderPath, node);
		this.unfinished.add(node);
		if (!(metadata.root ?? isGlobalRoot)) {
			const file = this.file(indexPath);
			if (file && this.own(folderPath, file, 0)) node.index = file;
		}
		if (metadata.pages) {
			const outputArray = [];
			const excludedPaths = /* @__PURE__ */ new Set();
			for (const item of metadata.pages) this.resolveFolderItem(folderPath, item, outputArray, excludedPaths);
			if (excludedPaths.has(indexPath)) delete node.index;
			else if (node.index) excludedPaths.add(indexPath);
			for (const item of outputArray) {
				if (item !== rest && item !== restReversed) {
					node.children.push(item);
					continue;
				}
				const resolvedItem = this.buildPaths(files, (file) => !excludedPaths.has(file), item === restReversed);
				for (const child of resolvedItem) if (this.own(folderPath, child, 0)) node.children.push(child);
			}
		} else for (const item of this.buildPaths(files, node.index ? (file) => file !== indexPath : void 0)) if (this.own(folderPath, item, 0)) node.children.push(item);
		node.icon = metadata.icon ?? node.index?.icon;
		node.name = metadata.title ?? node.index?.name;
		this.unfinished.delete(node);
		if (!node.name) {
			const folderName = basename(folderPath);
			node.name = pathToName(group.exec(folderName)?.[1] ?? folderName);
		}
		for (const transformer of this.transformers) {
			if (!transformer.folder) continue;
			node = transformer.folder.call(this.ctx, node, folderPath, meta ? metaPath : void 0);
		}
		this.pathToNode.set(folderPath, node);
		return node;
	}
	file(path) {
		const cached = this.pathToNode.get(path);
		if (cached) return cached;
		const page = this.storage.read(path);
		if (!page || page.format !== "page") return;
		const { title, description, icon } = page.data;
		let item = {
			$id: this.generateId(path),
			type: "page",
			name: title ?? pathToName(basename(path, extname(path))),
			description,
			icon,
			url: this.ctx.getUrl(page.slugs, this.ctx.locale),
			$ref: !this.ctx.noRef ? path : void 0
		};
		for (const transformer of this.transformers) {
			if (!transformer.file) continue;
			item = transformer.file.call(this.ctx, item, path);
		}
		this.pathToNode.set(path, item);
		return item;
	}
	root(id = "root", path = "") {
		const folder = this.folder(path);
		let root = {
			type: "root",
			$ref: folder?.$ref,
			$id: this.generateId(id),
			name: folder?.name || "Docs",
			description: folder?.description,
			children: folder ? folder.children : []
		};
		for (const transformer of this.transformers) {
			if (!transformer.root) continue;
			root = transformer.root.call(this.ctx, root);
		}
		return root;
	}
};
/**
* Get item name from file name
*
* @param name - file name
*/
function pathToName(name) {
	const result = [];
	for (const c of name) if (result.length === 0) result.push(c.toLocaleUpperCase());
	else if (c === "-") result.push(" ");
	else result.push(c);
	return result.join("");
}
function createPageIndexer({ url }) {
	const pages = /* @__PURE__ */ new Map();
	const pathToMeta = /* @__PURE__ */ new Map();
	const pathToPage = /* @__PURE__ */ new Map();
	return {
		scan(storage, lang) {
			for (const filePath of storage.getFiles()) {
				const item = storage.read(filePath);
				const prefix = lang ? `${lang}.` : ".";
				const path = prefix + filePath;
				if (item.format === "meta") {
					pathToMeta.set(path, {
						path: item.path,
						absolutePath: item.absolutePath,
						data: item.data
					});
					continue;
				}
				const page = {
					absolutePath: item.absolutePath,
					path: item.path,
					url: url(item.slugs, lang),
					slugs: item.slugs,
					data: item.data,
					locale: lang
				};
				pathToPage.set(path, page);
				pages.set(prefix + page.slugs.join("/"), page);
			}
		},
		getPage(path, lang = "") {
			return pathToPage.get(`${lang}.${path}`);
		},
		getMeta(path, lang = "") {
			return pathToMeta.get(`${lang}.${path}`);
		},
		getPageBySlugs(slugs, lang = "") {
			let page = pages.get(`${lang}.${slugs.join("/")}`);
			if (page) return page;
			page = pages.get(`${lang}.${slugs.map(decodeURI).join("/")}`);
			if (page) return page;
		},
		getPages(lang) {
			const out = [];
			for (const [key, value] of pages.entries()) if (lang === void 0 || key.startsWith(`${lang}.`)) out.push(value);
			return out;
		}
	};
}
function createGetUrl(baseUrl, i18n) {
	const baseSlugs = baseUrl.split("/");
	return (slugs, locale) => {
		const hideLocale = i18n?.hideLocale ?? "never";
		let urlLocale;
		if (hideLocale === "never") urlLocale = locale;
		else if (hideLocale === "default-locale" && locale !== i18n?.defaultLanguage) urlLocale = locale;
		const paths = [...baseSlugs, ...slugs];
		if (urlLocale) paths.unshift(urlLocale);
		return `/${paths.filter((v) => v.length > 0).join("/")}`;
	};
}
function loader(...args) {
	const loaderConfig = args.length === 2 ? resolveConfig(args[0], args[1]) : resolveConfig(args[0].source, args[0]);
	const { i18n } = loaderConfig;
	const storage = i18n ? createContentStorageBuilder(loaderConfig).i18n() : createContentStorageBuilder(loaderConfig).single();
	const indexer = createPageIndexer(loaderConfig);
	if (storage instanceof FileSystem) indexer.scan(storage);
	else for (const locale in storage) indexer.scan(storage[locale], locale);
	let pageTrees;
	function getPageTrees() {
		if (pageTrees) return pageTrees;
		const { plugins, url, pageTree: pageTreeConfig } = loaderConfig;
		const transformers = [];
		if (pageTreeConfig?.transformers) transformers.push(...pageTreeConfig.transformers);
		for (const plugin of plugins) if (plugin.transformPageTree) transformers.push(plugin.transformPageTree);
		const options = {
			url,
			...pageTreeConfig,
			transformers
		};
		if (storage instanceof FileSystem) return pageTrees = new PageTreeBuilder(storage, options).root();
		else {
			const out = {};
			for (const locale in storage) out[locale] = new PageTreeBuilder([locale, storage], options).root();
			return pageTrees = out;
		}
	}
	return {
		_i18n: i18n,
		get pageTree() {
			return getPageTrees();
		},
		set pageTree(v) {
			pageTrees = v;
		},
		getPageByHref(href, { dir = "", language = i18n?.defaultLanguage } = {}) {
			const [value, hash] = href.split("#", 2);
			let target;
			if (value.startsWith("./") || value.startsWith("../")) {
				const path = joinPath(dir, value);
				target = indexer.getPage(path, language);
			} else target = this.getPages(language).find((item) => item.url === value);
			if (target) return {
				page: target,
				hash
			};
		},
		resolveHref(href, parent) {
			if (href.startsWith("./") || href.startsWith("../")) {
				const target = this.getPageByHref(href, {
					dir: path.dirname(parent.path),
					language: parent.locale
				});
				if (target) return target.hash ? `${target.page.url}#${target.hash}` : target.page.url;
			}
			return href;
		},
		getPages(language) {
			return indexer.getPages(language);
		},
		getLanguages() {
			const list = [];
			if (!i18n) return list;
			for (const language of i18n.languages) list.push({
				language,
				pages: this.getPages(language)
			});
			return list;
		},
		getPage(slugs = [], language = i18n?.defaultLanguage) {
			return indexer.getPageBySlugs(slugs, language);
		},
		getNodeMeta(node, language = i18n?.defaultLanguage) {
			const ref = node.$ref;
			if (!ref) return;
			return indexer.getMeta(ref, language);
		},
		getNodePage(node, language = i18n?.defaultLanguage) {
			const ref = node.$ref;
			if (!ref) return;
			return indexer.getPage(ref, language);
		},
		getPageTree(locale) {
			if (i18n) {
				const trees = getPageTrees();
				if (locale && trees[locale]) return trees[locale];
				return trees[i18n.defaultLanguage];
			}
			return getPageTrees();
		},
		generateParams(slug, lang) {
			if (i18n) return this.getLanguages().flatMap((entry) => entry.pages.map((page) => ({
				[slug ?? "slug"]: page.slugs,
				[lang ?? "lang"]: entry.language
			})));
			return this.getPages().map((page) => ({ [slug ?? "slug"]: page.slugs }));
		},
		async serializePageTree(tree) {
			const { renderToString } = await import("./server.edge-DAe0-KnY.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
			return {
				$fumadocs_loader: "page-tree",
				data: visit(tree, (node) => {
					node = { ...node };
					if ("icon" in node && node.icon) node.icon = renderToString(node.icon);
					if (node.name) node.name = renderToString(node.name);
					if ("children" in node) node.children = [...node.children];
					return node;
				})
			};
		}
	};
}
function resolveConfig(source, { slugs, icon, plugins = [], baseUrl, url, ...base }) {
	let config = {
		...base,
		url: url ? (...args) => normalizeUrl(url(...args)) : createGetUrl(baseUrl, base.i18n),
		source,
		plugins: buildPlugins([
			icon && iconPlugin(icon),
			...typeof plugins === "function" ? plugins({ typedPlugin: (plugin) => plugin }) : plugins,
			slugsPlugin(slugs)
		])
	};
	for (const plugin of config.plugins) {
		const result = plugin.config?.(config);
		if (result) config = result;
	}
	return config;
}
var priorityMap = {
	pre: 1,
	default: 0,
	post: -1
};
function buildPlugins(plugins, sort = true) {
	const flatten = [];
	for (const plugin of plugins) if (Array.isArray(plugin)) flatten.push(...buildPlugins(plugin, false));
	else if (plugin) flatten.push(plugin);
	if (sort) return flatten.sort((a, b) => priorityMap[b.enforce ?? "default"] - priorityMap[a.enforce ?? "default"]);
	return flatten;
}
var meta_default$5 = {
	title: "Casos de Estudo",
	pages: ["estudo", "problema-dificil"],
	description: "Casos para aprimorar suas habilidades."
};
var meta_default$4 = {
	title: "Funções",
	pages: [
		"index",
		"query",
		"xlookup",
		"map",
		"arrayformula",
		"googlefinance"
	],
	description: "Funções do Google Sheets com exemplos práticos."
};
var meta_default$3 = {
	title: "Cláusulas",
	pages: ["select", "where"],
	description: "Cláusulas da função QUERY."
};
var meta_default$2 = {
	title: "QUERY",
	pages: [
		"index",
		"base-structure",
		"mixed-structure",
		"data-manipulation",
		"clausulas"
	],
	description: "A função mais importante do Google Sheets."
};
var meta_default$1 = {
	title: "Handbook de Planilhas",
	pages: [
		"index",
		"intro",
		"prologo",
		"nege2c",
		"db-concepts",
		"funcoes",
		"casos-de-estudo",
		"praticas"
	]
};
var meta_default = {
	title: "Práticas",
	pages: ["query"],
	description: "Exercícios para aplicar o conhecimento adquirido."
};
//#endregion
//#region node_modules/fumadocs-mdx/dist/runtime/server.js
function server(options = {}) {
	const { doc: { passthroughs: docPassthroughs = [] } = {} } = options;
	function fileInfo(file, base) {
		if (file.startsWith("./")) file = file.slice(2);
		return {
			path: file,
			fullPath: path$1.join(base, file)
		};
	}
	function mapDocData(entry) {
		const data = {
			body: entry.default,
			toc: entry.toc,
			structuredData: entry.structuredData,
			_exports: entry
		};
		for (const key of docPassthroughs) data[key] = entry[key];
		return data;
	}
	return {
		async doc(_name, base, glob) {
			return await Promise.all(Object.entries(glob).map(async ([k, v]) => {
				const data = typeof v === "function" ? await v() : v;
				return {
					...mapDocData(data),
					...data.frontmatter,
					...createDocMethods(fileInfo(k, base), () => data)
				};
			}));
		},
		async docLazy(_name, base, head, body) {
			return await Promise.all(Object.entries(head).map(async ([k, v]) => {
				const data = typeof v === "function" ? await v() : v;
				const content = body[k];
				return {
					...data,
					...createDocMethods(fileInfo(k, base), content),
					async load() {
						return mapDocData(await content());
					}
				};
			}));
		},
		async meta(_name, base, glob) {
			return await Promise.all(Object.entries(glob).map(async ([k, v]) => {
				const data = typeof v === "function" ? await v() : v;
				return {
					info: fileInfo(k, base),
					...data
				};
			}));
		},
		async docs(name, base, metaGlob, docGlob) {
			return {
				docs: await this.doc(name, base, docGlob),
				meta: await this.meta(name, base, metaGlob),
				toFumadocsSource() {
					return toFumadocsSource(this.docs, this.meta);
				}
			};
		},
		async docsLazy(name, base, metaGlob, docHeadGlob, docBodyGlob) {
			return {
				docs: await this.docLazy(name, base, docHeadGlob, docBodyGlob),
				meta: await this.meta(name, base, metaGlob),
				toFumadocsSource() {
					return toFumadocsSource(this.docs, this.meta);
				}
			};
		}
	};
}
function toFumadocsSource(pages, metas) {
	const files = [];
	for (const entry of pages) files.push({
		type: "page",
		path: entry.info.path,
		absolutePath: entry.info.fullPath,
		data: entry
	});
	for (const entry of metas) files.push({
		type: "meta",
		path: entry.info.path,
		absolutePath: entry.info.fullPath,
		data: entry
	});
	return { files };
}
function createDocMethods(info, load) {
	return {
		info,
		async getText(type) {
			if (type === "raw") return await (await import("node:fs/promises")).readFile(info.fullPath, "utf-8");
			const data = await load();
			if (typeof data._markdown !== "string") throw new Error("getText('processed') requires `includeProcessedMarkdown` to be enabled in your collection config.");
			return data._markdown;
		},
		async getMDAST() {
			const data = await load();
			if (!data._mdast) throw new Error("getMDAST() requires `includeMDAST` to be enabled in your collection config.");
			return JSON.parse(data._mdast);
		}
	};
}
//#endregion
//#region src/lib/source.ts
var source = loader({
	source: (await server({ "doc": { "passthroughs": ["extractedReferences"] } }).docs("docs", "content/docs", /* @__PURE__ */ Object.assign({
		"./casos-de-estudo/meta.json": meta_default$5,
		"./funcoes/meta.json": meta_default$4,
		"./funcoes/query/clausulas/meta.json": meta_default$3,
		"./funcoes/query/meta.json": meta_default$2,
		"./meta.json": meta_default$1,
		"./praticas/meta.json": meta_default
	}), /* @__PURE__ */ Object.assign({
		"./casos-de-estudo/estudo.md": estudo_exports,
		"./casos-de-estudo/problema-dificil.mdx": problema_dificil_exports,
		"./db-concepts.mdx": db_concepts_exports,
		"./funcoes/arrayformula.mdx": arrayformula_exports,
		"./funcoes/googlefinance.mdx": googlefinance_exports,
		"./funcoes/index.mdx": funcoes_exports,
		"./funcoes/map.mdx": map_exports,
		"./funcoes/query/base-structure.mdx": base_structure_exports,
		"./funcoes/query/clausulas/select.md": select_exports,
		"./funcoes/query/clausulas/where.md": where_exports,
		"./funcoes/query/data-manipulation.mdx": data_manipulation_exports,
		"./funcoes/query/index.mdx": query_exports,
		"./funcoes/query/mixed-structure.mdx": mixed_structure_exports,
		"./funcoes/xlookup.mdx": xlookup_exports,
		"./index.mdx": docs_exports,
		"./intro.mdx": intro_exports,
		"./nege2c.mdx": nege2c_exports,
		"./praticas/query.mdx": query_exports$1,
		"./prologo.mdx": prologo_exports
	}))).toFumadocsSource(),
	baseUrl: docsRoute
});
//#endregion
export { basename as n, extname as r, source as t };
