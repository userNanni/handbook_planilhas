import { o as __toESM } from "./chunk-D3zDcpJC.js";
import { n as require_react } from "./react-dom-CwY-XDXW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region node_modules/fumadocs-core/dist/framework/index.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var notImplemented = () => {
	throw new Error("You need to wrap your application inside `FrameworkProvider`.");
};
var FrameworkContext = (0, import_react.createContext)({
	useParams: notImplemented,
	useRouter: notImplemented,
	usePathname: notImplemented
});
function FrameworkProvider({ Link, useRouter, useParams, usePathname, Image, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrameworkContext, {
		value: (0, import_react.useMemo)(() => ({
			usePathname,
			useRouter,
			Link,
			Image,
			useParams
		}), [
			Link,
			usePathname,
			useRouter,
			useParams,
			Image
		]),
		children
	});
}
function usePathname() {
	return (0, import_react.use)(FrameworkContext).usePathname();
}
function useRouter() {
	return (0, import_react.use)(FrameworkContext).useRouter();
}
function Image(props) {
	const { Image } = (0, import_react.use)(FrameworkContext);
	if (!Image) {
		const { src, alt, priority, ...rest } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			alt,
			src,
			fetchPriority: priority ? "high" : "auto",
			...rest
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { ...props });
}
function Link(props) {
	const { Link } = (0, import_react.use)(FrameworkContext);
	if (!Link) {
		const { href, prefetch: _, ...rest } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			...rest
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { ...props });
}
//#endregion
//#region node_modules/fumadocs-ui/dist/contexts/i18n.js
var defaultTranslations = {
	search: "Search",
	searchNoResult: "No results found",
	toc: "On this page",
	tocNoHeadings: "No Headings",
	lastUpdate: "Last updated on",
	chooseLanguage: "Choose a language",
	nextPage: "Next Page",
	previousPage: "Previous Page",
	chooseTheme: "Theme",
	editOnGithub: "Edit on GitHub"
};
var I18nContext = (0, import_react.createContext)({ text: { ...defaultTranslations } });
function I18nLabel(props) {
	return useI18n().text[props.label];
}
function useI18n() {
	return (0, import_react.useContext)(I18nContext);
}
function I18nProvider({ locales = [], locale, onLocaleChange, children, translations }) {
	const router = useRouter();
	const pathname = usePathname();
	const onChange = (value) => {
		if (onLocaleChange) return onLocaleChange(value);
		const segments = pathname.split("/").filter((v) => v.length > 0);
		if (segments[0] !== locale) segments.unshift(value);
		else segments[0] = value;
		router.push(`/${segments.join("/")}`);
	};
	const onChangeRef = (0, import_react.useRef)(onChange);
	onChangeRef.current = onChange;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext, {
		value: (0, import_react.useMemo)(() => ({
			locale,
			locales,
			text: {
				...defaultTranslations,
				...translations
			},
			onChange: (v) => onChangeRef.current(v)
		}), [
			locale,
			locales,
			translations
		]),
		children
	});
}
//#endregion
export { Image as a, useRouter as c, FrameworkProvider as i, I18nProvider as n, Link as o, useI18n as r, usePathname as s, I18nLabel as t };
