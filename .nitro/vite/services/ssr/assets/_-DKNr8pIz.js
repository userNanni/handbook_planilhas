import { o as __toESM, r as __exportAll$1 } from "./chunk-D3zDcpJC.js";
import { n as require_react } from "./react-dom-CwY-XDXW.js";
import { n as useDirection } from "./dist-BmAKauDC.js";
import { t as Route } from "./_-B2l2oD8S.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
import { a as Image, r as useI18n, s as usePathname, t as I18nLabel } from "./i18n-VvDVzDfZ.js";
import { C as twMerge, S as cva, _ as useComposedRefs, b as createLucideIcon, c as useCallbackRef, d as useControllableState, f as useId, h as createContextScope, i as Presence, l as Primitive, p as useLayoutEffect2, v as composeEventHandlers, x as buttonVariants } from "./es2015-LeHT4uEA.js";
import { _ as ChevronDown, a as isLayoutTabActive, c as LinkItem, d as SearchTrigger, f as Popover, g as Languages, h as isActive, i as getLayoutTabs, l as baseSlots, m as PopoverTrigger, n as baseOptions, o as isLinkItemActive, p as PopoverContent, r as useIsScrollTop, s as useLinkItems, t as createCollection, u as Link$1 } from "./dist-bniMLlGl.js";
import { i as ChevronRight, n as useOnChange, r as isEqualShallow, t as e } from "./dist-BPA1bsFg.js";
import { t as normalizeUrl } from "./normalize-url-J3kqKlu4-CvqSPuSS.js";
import { a as visit, i as findPath } from "./shared-BfER6AJN.js";
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
var ChevronsUpDown = createLucideIcon("chevrons-up-down", [["path", {
	d: "m7 15 5 5 5-5",
	key: "1hf1tw"
}], ["path", {
	d: "m7 9 5-5 5 5",
	key: "sgt6xg"
}]]);
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
var CircleX = createLucideIcon("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
var Clipboard = createLucideIcon("clipboard", [["rect", {
	width: "8",
	height: "4",
	x: "8",
	y: "2",
	rx: "1",
	ry: "1",
	key: "tgr4d6"
}], ["path", {
	d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
	key: "116196"
}]]);
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
var Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]);
var Lightbulb = createLucideIcon("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]);
var Link = createLucideIcon("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]);
var PanelLeft = createLucideIcon("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]);
var TextAlignStart = createLucideIcon("text-align-start", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M17 19H3",
		key: "z6ezky"
	}]
]);
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
//#endregion
//#region node_modules/fumadocs-core/dist/breadcrumb.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function getBreadcrumbItemsFromPath(tree, path, options) {
	const { includePage = false, includeSeparator = false, includeRoot = false } = options;
	let items = [];
	for (let i = 0; i < path.length; i++) {
		const item = path[i];
		switch (item.type) {
			case "page":
				if (includePage) items.push({
					name: item.name,
					url: item.url
				});
				break;
			case "folder":
				if (item.root) {
					items = [];
					if (includeRoot) items.push({
						name: tree.name,
						url: typeof includeRoot === "object" ? includeRoot.url : item.index?.url
					});
					break;
				}
				if (i === path.length - 1 || item.index !== path[i + 1]) items.push({
					name: item.name,
					url: item.index?.url
				});
				break;
			case "separator":
				if (item.name && includeSeparator) items.push({ name: item.name });
				break;
		}
	}
	return items;
}
/**
* Search the path of a node in the tree by a specified url
*
* - When the page doesn't exist, return null
*
* @returns The path to the target node from root
* @internal Don't use this on your own
*/
function searchPath(nodes, url) {
	const normalizedUrl = normalizeUrl(url);
	return findPath(nodes, (node) => node.type === "page" && node.url === normalizedUrl);
}
//#endregion
//#region node_modules/fumadocs-ui/dist/contexts/tree.js
var TreeContext = (0, import_react.createContext)(null);
var PathContext = (0, import_react.createContext)([]);
function TreeContextProvider({ tree: rawTree, children }) {
	const nextIdRef = (0, import_react.useRef)(0);
	const pathname = usePathname();
	const tree = (0, import_react.useMemo)(() => rawTree, [rawTree.$id ?? rawTree]);
	const path = (0, import_react.useMemo)(() => {
		return searchPath(tree.children, pathname) ?? (tree.fallback ? searchPath(tree.fallback.children, pathname) : null) ?? [];
	}, [tree, pathname]);
	const root = path.findLast((item) => item.type === "folder" && item.root) ?? tree;
	root.$id ??= String(nextIdRef.current++);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeContext, {
		value: (0, import_react.useMemo)(() => ({
			root,
			full: tree
		}), [root, tree]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathContext, {
			value: path,
			children
		})
	});
}
function useTreePath() {
	return (0, import_react.use)(PathContext);
}
function useTreeContext() {
	const ctx = (0, import_react.use)(TreeContext);
	if (!ctx) throw new Error("You must wrap this component under <DocsLayout />");
	return ctx;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/utils/merge-refs.js
function mergeRefs$1(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref) ref.current = value;
		});
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/_virtual/_rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@radix-ui/react-collapsible/dist/index.mjs
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleProvider, {
		scope: __scopeCollapsible,
		disabled,
		contentId: useId(),
		open,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(open),
			"data-disabled": disabled ? "" : void 0,
			...collapsibleProps,
			ref: forwardedRef
		})
	});
});
Collapsible$1.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, ...triggerProps } = props;
	const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-controls": context.contentId,
		"aria-expanded": context.open || false,
		"data-state": getState(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		disabled: context.disabled,
		...triggerProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
});
CollapsibleTrigger$1.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, {
			...contentProps,
			ref: forwardedRef,
			present
		})
	});
});
CollapsibleContent$1.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, present, children, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
	const [isPresent, setIsPresent] = import_react.useState(present);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const heightRef = import_react.useRef(0);
	const height = heightRef.current;
	const widthRef = import_react.useRef(0);
	const width = widthRef.current;
	const isOpen = context.open || isPresent;
	const isMountAnimationPreventedRef = import_react.useRef(isOpen);
	const originalStylesRef = import_react.useRef(void 0);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	useLayoutEffect2(() => {
		const node = ref.current;
		if (node) {
			originalStylesRef.current = originalStylesRef.current || {
				transitionDuration: node.style.transitionDuration,
				animationName: node.style.animationName
			};
			node.style.transitionDuration = "0s";
			node.style.animationName = "none";
			const rect = node.getBoundingClientRect();
			heightRef.current = rect.height;
			widthRef.current = rect.width;
			if (!isMountAnimationPreventedRef.current) {
				node.style.transitionDuration = originalStylesRef.current.transitionDuration;
				node.style.animationName = originalStylesRef.current.animationName;
			}
			setIsPresent(present);
		}
	}, [context.open, present]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getState(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		id: context.contentId,
		hidden: !isOpen,
		...contentProps,
		ref: composedRefs,
		style: {
			[`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
			[`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
			...props.style
		},
		children: isOpen && children
	});
});
function getState(open) {
	return open ? "open" : "closed";
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/collapsible.js
var Collapsible = Collapsible$1;
var CollapsibleTrigger = CollapsibleTrigger$1;
function CollapsibleContent({ children, ...props }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent$1, {
		...props,
		className: twMerge("overflow-hidden", mounted && "data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down", props.className),
		children
	});
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
function clamp$1(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
//#endregion
//#region node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
	const [scrollArea, setScrollArea] = import_react.useState(null);
	const [viewport, setViewport] = import_react.useState(null);
	const [content, setContent] = import_react.useState(null);
	const [scrollbarX, setScrollbarX] = import_react.useState(null);
	const [scrollbarY, setScrollbarY] = import_react.useState(null);
	const [cornerWidth, setCornerWidth] = import_react.useState(0);
	const [cornerHeight, setCornerHeight] = import_react.useState(0);
	const [scrollbarXEnabled, setScrollbarXEnabled] = import_react.useState(false);
	const [scrollbarYEnabled, setScrollbarYEnabled] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
	const direction = useDirection(dir);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaProvider, {
		scope: __scopeScrollArea,
		type,
		dir: direction,
		scrollHideDelay,
		scrollArea,
		viewport,
		onViewportChange: setViewport,
		content,
		onContentChange: setContent,
		scrollbarX,
		onScrollbarXChange: setScrollbarX,
		scrollbarXEnabled,
		onScrollbarXEnabledChange: setScrollbarXEnabled,
		scrollbarY,
		onScrollbarYChange: setScrollbarY,
		scrollbarYEnabled,
		onScrollbarYEnabledChange: setScrollbarYEnabled,
		onCornerWidthChange: setCornerWidth,
		onCornerHeightChange: setCornerHeight,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			...scrollAreaProps,
			ref: composedRefs,
			style: {
				position: "relative",
				["--radix-scroll-area-corner-width"]: cornerWidth + "px",
				["--radix-scroll-area-corner-height"]: cornerHeight + "px",
				...props.style
			}
		})
	});
});
ScrollArea$1.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
	const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
	const composedRefs = useComposedRefs(forwardedRef, import_react.useRef(null), context.onViewportChange);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
		dangerouslySetInnerHTML: { __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}` },
		nonce
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-radix-scroll-area-viewport": "",
		...viewportProps,
		ref: composedRefs,
		style: {
			overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
			...props.style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: context.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children
		})
	})] });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
	const isHorizontal = props.orientation === "horizontal";
	import_react.useEffect(() => {
		isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
		return () => {
			isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
		};
	}, [
		isHorizontal,
		onScrollbarXEnabledChange,
		onScrollbarYEnabledChange
	]);
	return context.type === "hover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarHover, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === "scroll" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarScroll, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === "auto" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === "always" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
		...scrollbarProps,
		ref: forwardedRef
	}) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [visible, setVisible] = import_react.useState(false);
	import_react.useEffect(() => {
		const scrollArea = context.scrollArea;
		let hideTimer = 0;
		if (scrollArea) {
			const handlePointerEnter = () => {
				window.clearTimeout(hideTimer);
				setVisible(true);
			};
			const handlePointerLeave = () => {
				hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
			};
			scrollArea.addEventListener("pointerenter", handlePointerEnter);
			scrollArea.addEventListener("pointerleave", handlePointerLeave);
			return () => {
				window.clearTimeout(hideTimer);
				scrollArea.removeEventListener("pointerenter", handlePointerEnter);
				scrollArea.removeEventListener("pointerleave", handlePointerLeave);
			};
		}
	}, [context.scrollArea, context.scrollHideDelay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || visible,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
			"data-state": visible ? "visible" : "hidden",
			...scrollbarProps,
			ref: forwardedRef
		})
	});
});
var ScrollAreaScrollbarScroll = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const isHorizontal = props.orientation === "horizontal";
	const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
	const [state, send] = useStateMachine("hidden", {
		hidden: { SCROLL: "scrolling" },
		scrolling: {
			SCROLL_END: "idle",
			POINTER_ENTER: "interacting"
		},
		interacting: {
			SCROLL: "interacting",
			POINTER_LEAVE: "idle"
		},
		idle: {
			HIDE: "hidden",
			SCROLL: "scrolling",
			POINTER_ENTER: "interacting"
		}
	});
	import_react.useEffect(() => {
		if (state === "idle") {
			const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
			return () => window.clearTimeout(hideTimer);
		}
	}, [
		state,
		context.scrollHideDelay,
		send
	]);
	import_react.useEffect(() => {
		const viewport = context.viewport;
		const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
		if (viewport) {
			let prevScrollPos = viewport[scrollDirection];
			const handleScroll = () => {
				const scrollPos = viewport[scrollDirection];
				if (prevScrollPos !== scrollPos) {
					send("SCROLL");
					debounceScrollEnd();
				}
				prevScrollPos = scrollPos;
			};
			viewport.addEventListener("scroll", handleScroll);
			return () => viewport.removeEventListener("scroll", handleScroll);
		}
	}, [
		context.viewport,
		isHorizontal,
		send,
		debounceScrollEnd
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || state !== "hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": state === "hidden" ? "hidden" : "visible",
			...scrollbarProps,
			ref: forwardedRef,
			onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
		})
	});
});
var ScrollAreaScrollbarAuto = import_react.forwardRef((props, forwardedRef) => {
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const { forceMount, ...scrollbarProps } = props;
	const [visible, setVisible] = import_react.useState(false);
	const isHorizontal = props.orientation === "horizontal";
	const handleResize = useDebounceCallback(() => {
		if (context.viewport) {
			const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
			const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
			setVisible(isHorizontal ? isOverflowX : isOverflowY);
		}
	}, 10);
	useResizeObserver(context.viewport, handleResize);
	useResizeObserver(context.content, handleResize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || visible,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": visible ? "visible" : "hidden",
			...scrollbarProps,
			ref: forwardedRef
		})
	});
});
var ScrollAreaScrollbarVisible = import_react.forwardRef((props, forwardedRef) => {
	const { orientation = "vertical", ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const thumbRef = import_react.useRef(null);
	const pointerOffsetRef = import_react.useRef(0);
	const [sizes, setSizes] = import_react.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	});
	const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
	const commonProps = {
		...scrollbarProps,
		sizes,
		onSizesChange: setSizes,
		hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
		onThumbChange: (thumb) => thumbRef.current = thumb,
		onThumbPointerUp: () => pointerOffsetRef.current = 0,
		onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
	};
	function getScrollPosition(pointerPos, dir) {
		return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
	}
	if (orientation === "horizontal") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarX, {
		...commonProps,
		ref: forwardedRef,
		onThumbPositionChange: () => {
			if (context.viewport && thumbRef.current) {
				const scrollPos = context.viewport.scrollLeft;
				const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
				thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
			}
		},
		onWheelScroll: (scrollPos) => {
			if (context.viewport) context.viewport.scrollLeft = scrollPos;
		},
		onDragScroll: (pointerPos) => {
			if (context.viewport) context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
		}
	});
	if (orientation === "vertical") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarY, {
		...commonProps,
		ref: forwardedRef,
		onThumbPositionChange: () => {
			if (context.viewport && thumbRef.current) {
				const scrollPos = context.viewport.scrollTop;
				const offset = getThumbOffsetFromScroll(scrollPos, sizes);
				thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
			}
		},
		onWheelScroll: (scrollPos) => {
			if (context.viewport) context.viewport.scrollTop = scrollPos;
		},
		onDragScroll: (pointerPos) => {
			if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
		}
	});
	return null;
});
var ScrollAreaScrollbarX = import_react.forwardRef((props, forwardedRef) => {
	const { sizes, onSizesChange, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [computedStyle, setComputedStyle] = import_react.useState();
	const ref = import_react.useRef(null);
	const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
	import_react.useEffect(() => {
		if (ref.current) setComputedStyle(getComputedStyle(ref.current));
	}, [ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "horizontal",
		...scrollbarProps,
		ref: composeRefs,
		sizes,
		style: {
			bottom: 0,
			left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
			...props.style
		},
		onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
		onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
		onWheelScroll: (event, maxScrollPos) => {
			if (context.viewport) {
				const scrollPos = context.viewport.scrollLeft + event.deltaX;
				props.onWheelScroll(scrollPos);
				if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
			}
		},
		onResize: () => {
			if (ref.current && context.viewport && computedStyle) onSizesChange({
				content: context.viewport.scrollWidth,
				viewport: context.viewport.offsetWidth,
				scrollbar: {
					size: ref.current.clientWidth,
					paddingStart: toInt(computedStyle.paddingLeft),
					paddingEnd: toInt(computedStyle.paddingRight)
				}
			});
		}
	});
});
var ScrollAreaScrollbarY = import_react.forwardRef((props, forwardedRef) => {
	const { sizes, onSizesChange, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [computedStyle, setComputedStyle] = import_react.useState();
	const ref = import_react.useRef(null);
	const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
	import_react.useEffect(() => {
		if (ref.current) setComputedStyle(getComputedStyle(ref.current));
	}, [ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "vertical",
		...scrollbarProps,
		ref: composeRefs,
		sizes,
		style: {
			top: 0,
			right: context.dir === "ltr" ? 0 : void 0,
			left: context.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
			...props.style
		},
		onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
		onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
		onWheelScroll: (event, maxScrollPos) => {
			if (context.viewport) {
				const scrollPos = context.viewport.scrollTop + event.deltaY;
				props.onWheelScroll(scrollPos);
				if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
			}
		},
		onResize: () => {
			if (ref.current && context.viewport && computedStyle) onSizesChange({
				content: context.viewport.scrollHeight,
				viewport: context.viewport.offsetHeight,
				scrollbar: {
					size: ref.current.clientHeight,
					paddingStart: toInt(computedStyle.paddingTop),
					paddingEnd: toInt(computedStyle.paddingBottom)
				}
			});
		}
	});
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
	const [scrollbar, setScrollbar] = import_react.useState(null);
	const composeRefs = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
	const rectRef = import_react.useRef(null);
	const prevWebkitUserSelectRef = import_react.useRef("");
	const viewport = context.viewport;
	const maxScrollPos = sizes.content - sizes.viewport;
	const handleWheelScroll = useCallbackRef(onWheelScroll);
	const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
	const handleResize = useDebounceCallback(onResize, 10);
	function handleDragScroll(event) {
		if (rectRef.current) onDragScroll({
			x: event.clientX - rectRef.current.left,
			y: event.clientY - rectRef.current.top
		});
	}
	import_react.useEffect(() => {
		const handleWheel = (event) => {
			const element = event.target;
			if (scrollbar?.contains(element)) handleWheelScroll(event, maxScrollPos);
		};
		document.addEventListener("wheel", handleWheel, { passive: false });
		return () => document.removeEventListener("wheel", handleWheel, { passive: false });
	}, [
		viewport,
		scrollbar,
		maxScrollPos,
		handleWheelScroll
	]);
	import_react.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
	useResizeObserver(scrollbar, handleResize);
	useResizeObserver(context.content, handleResize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollbarProvider, {
		scope: __scopeScrollArea,
		scrollbar,
		hasThumb,
		onThumbChange: useCallbackRef(onThumbChange),
		onThumbPointerUp: useCallbackRef(onThumbPointerUp),
		onThumbPositionChange: handleThumbPositionChange,
		onThumbPointerDown: useCallbackRef(onThumbPointerDown),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...scrollbarProps,
			ref: composeRefs,
			style: {
				position: "absolute",
				...scrollbarProps.style
			},
			onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
				if (event.button === 0) {
					event.target.setPointerCapture(event.pointerId);
					rectRef.current = scrollbar.getBoundingClientRect();
					prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
					document.body.style.webkitUserSelect = "none";
					if (context.viewport) context.viewport.style.scrollBehavior = "auto";
					handleDragScroll(event);
				}
			}),
			onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
			onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
				const element = event.target;
				if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
				document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
				if (context.viewport) context.viewport.style.scrollBehavior = "";
				rectRef.current = null;
			})
		})
	});
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...thumbProps } = props;
	const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || scrollbarContext.hasThumb,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumbImpl, {
			ref: forwardedRef,
			...thumbProps
		})
	});
});
var ScrollAreaThumbImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, style, ...thumbProps } = props;
	const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
	const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
	const { onThumbPositionChange } = scrollbarContext;
	const composedRef = useComposedRefs(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
	const removeUnlinkedScrollListenerRef = import_react.useRef(void 0);
	const debounceScrollEnd = useDebounceCallback(() => {
		if (removeUnlinkedScrollListenerRef.current) {
			removeUnlinkedScrollListenerRef.current();
			removeUnlinkedScrollListenerRef.current = void 0;
		}
	}, 100);
	import_react.useEffect(() => {
		const viewport = scrollAreaContext.viewport;
		if (viewport) {
			const handleScroll = () => {
				debounceScrollEnd();
				if (!removeUnlinkedScrollListenerRef.current) {
					removeUnlinkedScrollListenerRef.current = addUnlinkedScrollListener(viewport, onThumbPositionChange);
					onThumbPositionChange();
				}
			};
			onThumbPositionChange();
			viewport.addEventListener("scroll", handleScroll);
			return () => viewport.removeEventListener("scroll", handleScroll);
		}
	}, [
		scrollAreaContext.viewport,
		debounceScrollEnd,
		onThumbPositionChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
		...thumbProps,
		ref: composedRef,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...style
		},
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
			const thumbRect = event.target.getBoundingClientRect();
			const x = event.clientX - thumbRect.left;
			const y = event.clientY - thumbRect.top;
			scrollbarContext.onThumbPointerDown({
				x,
				y
			});
		}),
		onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
	});
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = import_react.forwardRef((props, forwardedRef) => {
	const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
	const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
	return context.type !== "scroll" && hasBothScrollbarsVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaCornerImpl, {
		...props,
		ref: forwardedRef
	}) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, ...cornerProps } = props;
	const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
	const [width, setWidth] = import_react.useState(0);
	const [height, setHeight] = import_react.useState(0);
	const hasSize = Boolean(width && height);
	useResizeObserver(context.scrollbarX, () => {
		const height2 = context.scrollbarX?.offsetHeight || 0;
		context.onCornerHeightChange(height2);
		setHeight(height2);
	});
	useResizeObserver(context.scrollbarY, () => {
		const width2 = context.scrollbarY?.offsetWidth || 0;
		context.onCornerWidthChange(width2);
		setWidth(width2);
	});
	return hasSize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...cornerProps,
		ref: forwardedRef,
		style: {
			width,
			height,
			position: "absolute",
			right: context.dir === "ltr" ? 0 : void 0,
			left: context.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...props.style
		}
	}) : null;
});
function toInt(value) {
	return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
	const ratio = viewportSize / contentSize;
	return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
	const ratio = getThumbRatio(sizes.viewport, sizes.content);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
	return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const thumbCenter = thumbSizePx / 2;
	const offset = pointerOffset || thumbCenter;
	const thumbOffsetFromEnd = thumbSizePx - offset;
	const minPointerPos = sizes.scrollbar.paddingStart + offset;
	const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
	const maxScrollPos = sizes.content - sizes.viewport;
	const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
	return linearScale([minPointerPos, maxPointerPos], scrollRange)(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const scrollbar = sizes.scrollbar.size - scrollbarPadding;
	const maxScrollPos = sizes.content - sizes.viewport;
	const maxThumbPos = scrollbar - thumbSizePx;
	const scrollWithoutMomentum = clamp$1(scrollPos, dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0]);
	return linearScale([0, maxScrollPos], [0, maxThumbPos])(scrollWithoutMomentum);
}
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
	return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {}) => {
	let prevPosition = {
		left: node.scrollLeft,
		top: node.scrollTop
	};
	let rAF = 0;
	(function loop() {
		const position = {
			left: node.scrollLeft,
			top: node.scrollTop
		};
		const isHorizontalScroll = prevPosition.left !== position.left;
		const isVerticalScroll = prevPosition.top !== position.top;
		if (isHorizontalScroll || isVerticalScroll) handler();
		prevPosition = position;
		rAF = window.requestAnimationFrame(loop);
	})();
	return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
	const handleCallback = useCallbackRef(callback);
	const debounceTimerRef = import_react.useRef(0);
	import_react.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
	return import_react.useCallback(() => {
		window.clearTimeout(debounceTimerRef.current);
		debounceTimerRef.current = window.setTimeout(handleCallback, delay);
	}, [handleCallback, delay]);
}
function useResizeObserver(element, onResize) {
	const handleResize = useCallbackRef(onResize);
	useLayoutEffect2(() => {
		let rAF = 0;
		if (element) {
			const resizeObserver = new ResizeObserver(() => {
				cancelAnimationFrame(rAF);
				rAF = window.requestAnimationFrame(handleResize);
			});
			resizeObserver.observe(element);
			return () => {
				window.cancelAnimationFrame(rAF);
				resizeObserver.unobserve(element);
			};
		}
	}, [element, handleResize]);
}
var Root$1 = ScrollArea$1;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Corner = ScrollAreaCorner;
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/scroll-area.js
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$1, {
		type: "scroll",
		className: twMerge("overflow-hidden", className),
		...props,
		children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, { orientation: "vertical" })
		]
	});
}
function ScrollViewport({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
		className: twMerge("size-full rounded-[inherit]", className),
		...props,
		children
	});
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
		orientation,
		className: twMerge("flex select-none data-[state=hidden]:animate-fd-fade-out", orientation === "vertical" && "h-full w-1.5", orientation === "horizontal" && "h-1.5 flex-col", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" })
	});
}
//#endregion
//#region node_modules/fumadocs-core/dist/utils/use-media-query.js
function useMediaQuery(query, disabled = false) {
	const [isMatch, setMatch] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (disabled) return;
		const mediaQueryList = window.matchMedia(query);
		const handleChange = () => {
			setMatch(mediaQueryList.matches);
		};
		handleChange();
		mediaQueryList.addEventListener("change", handleChange);
		return () => {
			mediaQueryList.removeEventListener("change", handleChange);
		};
	}, [disabled, query]);
	return isMatch;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/sidebar/base.js
var base_exports = /* @__PURE__ */ __exportAll({
	SidebarCollapseTrigger: () => SidebarCollapseTrigger$1,
	SidebarContent: () => SidebarContent$1,
	SidebarDrawerContent: () => SidebarDrawerContent,
	SidebarDrawerOverlay: () => SidebarDrawerOverlay,
	SidebarFolder: () => SidebarFolder$1,
	SidebarFolderContent: () => SidebarFolderContent$1,
	SidebarFolderLink: () => SidebarFolderLink$1,
	SidebarFolderTrigger: () => SidebarFolderTrigger$1,
	SidebarItem: () => SidebarItem$1,
	SidebarProvider: () => SidebarProvider$1,
	SidebarSeparator: () => SidebarSeparator$1,
	SidebarTrigger: () => SidebarTrigger$1,
	SidebarViewport: () => SidebarViewport,
	useAutoScroll: () => useAutoScroll,
	useFolder: () => useFolder,
	useFolderDepth: () => useFolderDepth,
	useSidebar: () => useSidebar$1
});
var SidebarContext = (0, import_react.createContext)(null);
var FolderContext = (0, import_react.createContext)(null);
function SidebarProvider$1({ defaultOpenLevel = 0, prefetch, children }) {
	const closeOnRedirect = (0, import_react.useRef)(true);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const pathname = usePathname();
	const mode = useMediaQuery("(width < 768px)") ? "drawer" : "full";
	useOnChange(pathname, () => {
		if (closeOnRedirect.current) setOpen(false);
		closeOnRedirect.current = true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContext, {
		value: (0, import_react.useMemo)(() => ({
			open,
			setOpen,
			collapsed,
			setCollapsed,
			closeOnRedirect,
			defaultOpenLevel,
			prefetch,
			mode
		}), [
			open,
			collapsed,
			defaultOpenLevel,
			prefetch,
			mode
		]),
		children
	});
}
function useSidebar$1() {
	const ctx = (0, import_react.use)(SidebarContext);
	if (!ctx) throw new Error("Missing SidebarContext, make sure you have wrapped the component in <DocsLayout /> and the context is available.");
	return ctx;
}
function useFolder() {
	return (0, import_react.use)(FolderContext);
}
function useFolderDepth() {
	return (0, import_react.use)(FolderContext)?.depth ?? 0;
}
function SidebarContent$1({ mode: allowedMode = "full", children }) {
	const { collapsed, mode } = useSidebar$1();
	const [hover, setHover] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const timerRef = (0, import_react.useRef)(0);
	useOnChange(collapsed, () => {
		if (collapsed) setHover(false);
	});
	if (allowedMode !== true && allowedMode !== mode) return;
	function shouldIgnoreHover(e) {
		const element = ref.current;
		if (!element) return true;
		return !collapsed || e.pointerType === "touch" || element.getAnimations().length > 0;
	}
	return children({
		ref,
		collapsed,
		hovered: hover,
		onPointerEnter(e) {
			if (shouldIgnoreHover(e)) return;
			window.clearTimeout(timerRef.current);
			setHover(true);
		},
		onPointerLeave(e) {
			if (shouldIgnoreHover(e)) return;
			window.clearTimeout(timerRef.current);
			timerRef.current = window.setTimeout(() => setHover(false), Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500);
		}
	});
}
function SidebarViewport({ area, viewport, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
		...area,
		className: twMerge("min-h-0 flex-1", area?.className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollViewport, {
			...viewport,
			className: twMerge("*:flex! *:flex-col! *:gap-0.5! p-4 overscroll-contain mask-[linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-12px),transparent)]", viewport?.className),
			children
		})
	});
}
function SidebarDrawerOverlay(props) {
	const { open, setOpen, mode } = useSidebar$1();
	if (mode !== "drawer") return;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-state": open ? "open" : "closed",
			onClick: () => setOpen(false),
			...props
		})
	});
}
function SidebarDrawerContent({ className, children, ...props }) {
	const { open, mode } = useSidebar$1();
	const state = open ? "open" : "closed";
	if (mode !== "drawer") return;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			id: "nd-sidebar-mobile",
			"data-state": state,
			className: twMerge(!present && "invisible", className),
			...props,
			children
		})
	});
}
function SidebarSeparator$1(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { ...props });
}
function SidebarItem$1({ icon, active = false, children, ...props }) {
	const ref = (0, import_react.useRef)(null);
	const { prefetch } = useSidebar$1();
	useAutoScroll(active, ref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
		ref,
		"data-active": active,
		prefetch,
		...props,
		children: [icon ?? (props.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}) : null), children]
	});
}
function SidebarFolder$1({ defaultOpen: defaultOpenProp, collapsible = true, active = false, children, ...props }) {
	const { defaultOpenLevel } = useSidebar$1();
	const depth = useFolderDepth() + 1;
	const defaultOpen = collapsible === false || active || (defaultOpenProp ?? defaultOpenLevel >= depth);
	const [open, setOpen] = (0, import_react.useState)(defaultOpen);
	useOnChange(defaultOpen, (v) => {
		if (v) setOpen(v);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible, {
		open,
		onOpenChange: setOpen,
		disabled: !collapsible,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderContext, {
			value: (0, import_react.useMemo)(() => ({
				open,
				setOpen,
				depth,
				collapsible
			}), [
				collapsible,
				depth,
				open
			]),
			children
		})
	});
}
function SidebarFolderTrigger$1({ children, ...props }) {
	const { open, collapsible } = (0, import_react.use)(FolderContext);
	if (collapsible) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleTrigger, {
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			"data-icon": true,
			className: twMerge("ms-auto transition-transform", !open && "-rotate-90 rtl:rotate-90")
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		children
	});
}
function SidebarFolderLink$1({ children, active = false, ...props }) {
	const ref = (0, import_react.useRef)(null);
	const { open, setOpen, collapsible } = (0, import_react.use)(FolderContext);
	const { prefetch } = useSidebar$1();
	useAutoScroll(active, ref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
		ref,
		"data-active": active,
		onClick: (e) => {
			if (!collapsible) return;
			if (e.target instanceof Element && e.target.matches("[data-icon], [data-icon] *")) {
				setOpen(!open);
				e.preventDefault();
			} else setOpen(active ? !open : true);
		},
		prefetch,
		...props,
		children: [children, collapsible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			"data-icon": true,
			className: twMerge("ms-auto transition-transform", !open && "-rotate-90 rtl:rotate-90")
		})]
	});
}
function SidebarFolderContent$1(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
		...props,
		children: props.children
	});
}
function SidebarTrigger$1({ children, ...props }) {
	const { setOpen } = useSidebar$1();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		"aria-label": "Open Sidebar",
		onClick: () => setOpen((prev) => !prev),
		...props,
		children
	});
}
function SidebarCollapseTrigger$1(props) {
	const { collapsed, setCollapsed } = useSidebar$1();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": "Collapse Sidebar",
		"data-collapsed": collapsed,
		onClick: () => {
			setCollapsed((prev) => !prev);
		},
		...props,
		children: props.children
	});
}
/**
* scroll to the element if `active` is true
*/
function useAutoScroll(active, ref) {
	const { mode } = useSidebar$1();
	(0, import_react.useEffect)(() => {
		if (active && ref.current) e(ref.current, {
			boundary: document.getElementById(mode === "drawer" ? "nd-sidebar-mobile" : "nd-sidebar"),
			scrollMode: "if-needed"
		});
	}, [
		active,
		mode,
		ref
	]);
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/sidebar/page-tree.js
var RendererContext = (0, import_react.createContext)(null);
function createPageTreeRenderer({ SidebarFolder, SidebarFolderContent, SidebarFolderLink, SidebarFolderTrigger, SidebarSeparator, SidebarItem }) {
	function renderList(nodes) {
		return nodes.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTreeNode, { node }, i));
	}
	function PageTreeNode({ node }) {
		const { Separator, Item, Folder, pathname } = (0, import_react.use)(RendererContext);
		if (node.type === "separator") {
			if (Separator) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { item: node });
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarSeparator, { children: [node.icon, node.name] });
		}
		if (node.type === "folder") {
			const path = useTreePath();
			if (Folder) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
				item: node,
				children: renderList(node.children)
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolder, {
				collapsible: node.collapsible,
				active: path.includes(node),
				defaultOpen: node.defaultOpen,
				children: [node.index ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolderLink, {
					href: node.index.url,
					active: isActive(node.index.url, pathname),
					external: node.index.external,
					children: [node.icon, node.name]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolderTrigger, { children: [node.icon, node.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderContent, { children: renderList(node.children) })]
			});
		}
		if (Item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { item: node });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarItem, {
			href: node.url,
			external: node.external,
			active: isActive(node.url, pathname),
			icon: node.icon,
			children: node.name
		});
	}
	/**
	* Render sidebar items from page tree
	*/
	return function SidebarPageTree(components) {
		const { Folder, Item, Separator } = components;
		const { root } = useTreeContext();
		const pathname = usePathname();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RendererContext, {
			value: (0, import_react.useMemo)(() => ({
				Folder,
				Item,
				Separator,
				pathname
			}), [
				Folder,
				Item,
				Separator,
				pathname
			]),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: renderList(root.children) }, root.$id)
		});
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/sidebar/link-item.js
function createLinkItemRenderer({ SidebarFolder, SidebarFolderContent, SidebarFolderLink, SidebarFolderTrigger, SidebarItem }) {
	/**
	* Render sidebar items from page tree
	*/
	return function SidebarLinkItem({ item, ...props }) {
		const active = isLinkItemActive(item, usePathname());
		if (item.type === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			...props,
			children: item.children
		});
		if (item.type === "menu") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolder, {
			...props,
			children: [item.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolderLink, {
				href: item.url,
				active,
				external: item.external,
				children: [item.icon, item.text]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolderTrigger, { children: [item.icon, item.text] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderContent, { children: item.items.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarLinkItem, { item: child }, i)) })]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarItem, {
			href: item.url,
			icon: item.icon,
			external: item.external,
			active,
			...props,
			children: item.text
		});
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/slots/sidebar.js
var itemVariants = cva("relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-fd-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0", { variants: {
	variant: {
		link: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary data-[active=true]:hover:transition-colors",
		button: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
	},
	highlight: { true: "data-[active=true]:before:content-[''] data-[active=true]:before:bg-fd-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:inset-s-2.5" }
} });
var { useSidebar } = base_exports;
function SidebarProvider(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarProvider$1, { ...props });
}
function Sidebar({ footer, banner, collapsible = true, components, ...rest }) {
	const { menuItems, slots, props: { tabs, nav, tabMode } } = useDocsLayout();
	const iconLinks = menuItems.filter((item) => item.type === "icon");
	const viewport = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarViewport, { children: [menuItems.filter((v) => v.type !== "icon").map((item, i, list) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarLinkItem, {
		item,
		className: twMerge(i === list.length - 1 && "mb-4")
	}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarPageTree, { ...components })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarContent, {
		...rest,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 p-4 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex",
						children: [
							slots.navTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.navTitle, { className: "inline-flex text-[0.9375rem] items-center gap-2.5 font-medium me-auto" }),
							nav?.children,
							collapsible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarCollapseTrigger, {
								className: twMerge(buttonVariants({
									color: "ghost",
									size: "icon-sm",
									className: "mb-auto text-fd-muted-foreground"
								})),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {})
							})
						]
					}),
					slots.searchTrigger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.searchTrigger.full, { hideIfDisabled: true }),
					tabs.length > 0 && tabMode === "auto" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTabsDropdown, { tabs }),
					banner
				]
			}),
			viewport,
			(slots.languageSelect || iconLinks.length > 0 || slots.themeSwitch || footer) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col p-4 pt-2",
				children: [
					slots.languageSelect && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(slots.languageSelect.root, {
						variant: "secondary",
						className: "text-fd-muted-foreground text-start justify-start bg-fd-secondary/50 mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-4.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.languageSelect.text, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "ms-auto size-3.5" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex text-fd-muted-foreground items-center border bg-fd-secondary/50 p-0.5 pe-0 rounded-lg empty:hidden",
						children: [iconLinks.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkItem, {
							item,
							className: twMerge(buttonVariants({
								size: "icon-sm",
								color: "ghost"
							})),
							"aria-label": item.label,
							children: item.icon
						}, i)), slots.themeSwitch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.themeSwitch, { className: "px-1 py-0 border-y-0 border-e-0 rounded-none ms-auto *:rounded-md" })]
					}),
					footer
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarDrawer, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 p-4 pb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex text-fd-muted-foreground items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-1",
							children: iconLinks.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkItem, {
								item,
								className: twMerge(buttonVariants({
									size: "icon-sm",
									color: "ghost",
									className: "p-2"
								})),
								"aria-label": item.label,
								children: item.icon
							}, i))
						}),
						slots.languageSelect && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(slots.languageSelect.root, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-4.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.languageSelect.text, {})] }),
						slots.themeSwitch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.themeSwitch, { className: "p-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTrigger, {
							className: twMerge(buttonVariants({
								color: "ghost",
								size: "icon-sm",
								className: "p-2"
							})),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {})
						})
					]
				}),
				tabs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTabsDropdown, { tabs }),
				banner
			]
		}),
		viewport,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col border-t p-4 pt-2 empty:hidden",
			children: footer
		})
	] })] });
}
function SidebarFolder(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolder$1, { ...props });
}
function SidebarCollapseTrigger(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarCollapseTrigger$1, { ...props });
}
function SidebarTrigger(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTrigger$1, { ...props });
}
function SidebarContent({ ref: refProp, className, children, ...props }) {
	const ref = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent$1, { children: ({ collapsed, hovered, ref: asideRef, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-sidebar-placeholder": "",
		className: "sticky top-(--fd-docs-row-1) z-20 [grid-area:sidebar] pointer-events-none *:pointer-events-auto h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] md:layout:[--fd-sidebar-width:268px] max-md:hidden",
		children: [collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-s-0 inset-y-0 w-4",
			...rest
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			id: "nd-sidebar",
			ref: mergeRefs$1(ref, refProp, asideRef),
			"data-collapsed": collapsed,
			"data-hovered": collapsed && hovered,
			className: twMerge("absolute flex flex-col w-full inset-s-0 inset-y-0 items-end bg-fd-card text-sm border-e duration-250 *:w-(--fd-sidebar-width)", collapsed && ["inset-y-2 rounded-xl transition-transform border w-(--fd-sidebar-width)", hovered ? "shadow-lg translate-x-2 rtl:-translate-x-2" : "-translate-x-(--fd-sidebar-width) rtl:translate-x-full"], ref.current && ref.current.getAttribute("data-collapsed") === "true" !== collapsed && "transition-[width,inset-block,translate,background-color]", className),
			...props,
			...rest,
			children
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-sidebar-panel": "",
		className: twMerge("fixed flex top-[calc(--spacing(4)+var(--fd-docs-row-3))] inset-s-4 shadow-lg transition-opacity rounded-xl p-0.5 border bg-fd-muted text-fd-muted-foreground z-10", (!collapsed || hovered) && "pointer-events-none opacity-0"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarCollapseTrigger$1, {
			className: twMerge(buttonVariants({
				color: "ghost",
				size: "icon-sm",
				className: "rounded-lg"
			})),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchTrigger, {
			className: "rounded-lg",
			hideIfDisabled: true
		})]
	})] }) });
}
function SidebarDrawer({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarDrawerOverlay, { className: "fixed z-40 inset-0 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarDrawerContent, {
		className: twMerge("fixed text-[0.9375rem] flex flex-col shadow-lg border-s inset-e-0 inset-y-0 w-[85%] max-w-[380px] z-40 bg-fd-background data-[state=open]:animate-fd-sidebar-in data-[state=closed]:animate-fd-sidebar-out", className),
		...props,
		children
	})] });
}
function SidebarSeparator({ className, style, children, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarSeparator$1, {
		className: twMerge("inline-flex items-center gap-2 mb-1 px-2 mt-6 empty:mb-0 [&_svg]:size-4 [&_svg]:shrink-0", depth === 0 && "first:mt-0", className),
		style: {
			paddingInlineStart: getItemOffset$1(depth),
			...style
		},
		...props,
		children
	});
}
function SidebarItem({ className, style, children, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarItem$1, {
		className: twMerge(itemVariants({
			variant: "link",
			highlight: depth >= 1
		}), className),
		style: {
			paddingInlineStart: getItemOffset$1(depth),
			...style
		},
		...props,
		children
	});
}
function SidebarFolderTrigger({ className, style, ...props }) {
	const { depth, collapsible } = useFolder();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderTrigger$1, {
		className: twMerge(itemVariants({ variant: collapsible ? "button" : null }), "w-full", className),
		style: {
			paddingInlineStart: getItemOffset$1(depth - 1),
			...style
		},
		...props,
		children: props.children
	});
}
function SidebarFolderLink({ className, style, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderLink$1, {
		className: twMerge(itemVariants({
			variant: "link",
			highlight: depth > 1
		}), "w-full", className),
		style: {
			paddingInlineStart: getItemOffset$1(depth - 1),
			...style
		},
		...props,
		children: props.children
	});
}
function SidebarFolderContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderContent$1, {
		className: twMerge("relative", useFolderDepth() === 1 && "before:content-[''] before:absolute before:w-px before:inset-y-1 before:bg-fd-border before:inset-s-2.5", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-0.5 pt-0.5",
			children
		})
	});
}
function SidebarTabsDropdown({ tabs, placeholder, ...props }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { closeOnRedirect } = useSidebar();
	const pathname = usePathname();
	const selected = (0, import_react.useMemo)(() => {
		return tabs.findLast((item) => isLayoutTabActive(item, pathname));
	}, [tabs, pathname]);
	const onClick = () => {
		closeOnRedirect.current = false;
		setOpen(false);
	};
	const item = selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "size-9 shrink-0 empty:hidden md:size-5",
		children: selected.icon
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-medium",
		children: selected.title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-fd-muted-foreground empty:hidden md:hidden",
		children: selected.description
	})] })] }) : placeholder;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open,
		onOpenChange: setOpen,
		children: [item && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverTrigger, {
			...props,
			className: twMerge("flex items-center gap-2 rounded-lg p-2 border bg-fd-secondary/50 text-start text-fd-secondary-foreground transition-colors hover:bg-fd-accent data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground", props.className),
			children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "shrink-0 ms-auto size-4 text-fd-muted-foreground" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
			className: "flex flex-col gap-1 w-(--radix-popover-trigger-width) p-1 fd-scroll-container",
			children: tabs.map((item) => {
				const isActive = selected && item.url === selected.url;
				if (!isActive && item.unlisted) return;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					href: item.url,
					onClick,
					...item.props,
					className: twMerge("flex items-center gap-2 rounded-lg p-1.5 hover:bg-fd-accent hover:text-fd-accent-foreground", item.props?.className),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 size-9 md:mb-auto md:size-5 empty:hidden",
							children: item.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium leading-none",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.8125rem] text-fd-muted-foreground mt-1 empty:hidden",
							children: item.description
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: twMerge("shrink-0 ms-auto size-3.5 text-fd-primary", !isActive && "invisible") })
					]
				}, item.url);
			})
		})]
	});
}
function getItemOffset$1(depth) {
	return `calc(${2 + 3 * depth} * var(--spacing))`;
}
var SidebarPageTree = createPageTreeRenderer({
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem,
	SidebarSeparator
});
var SidebarLinkItem = createLinkItemRenderer({
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem
});
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/slots/header.js
function Header(props) {
	const { isNavTransparent, slots, props: { nav } } = useDocsLayout();
	if (nav?.component) return nav.component;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		id: "nd-subnav",
		"data-transparent": isNavTransparent,
		...props,
		className: twMerge("[grid-area:header] sticky top-(--fd-docs-row-1) z-30 flex items-center ps-4 pe-2.5 border-b transition-colors backdrop-blur-sm h-(--fd-header-height) md:hidden max-md:layout:[--fd-header-height:--spacing(14)] data-[transparent=false]:bg-fd-background/80", props.className),
		children: [
			slots.navTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.navTitle, { className: "inline-flex items-center gap-2.5 font-semibold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children: nav?.children
			}),
			slots.searchTrigger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.searchTrigger.sm, {
				hideIfDisabled: true,
				className: "p-2"
			}),
			slots.sidebar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.sidebar.trigger, {
				className: twMerge(buttonVariants({
					color: "ghost",
					size: "icon-sm",
					className: "p-2"
				})),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {})
			})
		]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/slots/container.js
function Container$1(props) {
	const { slots } = useDocsLayout();
	const { collapsed } = slots.sidebar.useSidebar();
	const [previousCollapsed, setPreviousCollapsed] = (0, import_react.useState)(collapsed);
	const isCollapseChanged = previousCollapsed !== collapsed;
	(0, import_react.useEffect)(() => {
		if (isCollapseChanged) setPreviousCollapsed(collapsed);
	}, [collapsed, isCollapseChanged]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "nd-docs-layout",
		"data-sidebar-collapsed": collapsed,
		"data-column-changed": isCollapseChanged,
		...props,
		style: {
			gridTemplate: `"sidebar sidebar header toc toc"
"sidebar sidebar toc-popover toc toc"
"sidebar sidebar main toc toc" 1fr / minmax(min-content, 1fr) var(--fd-sidebar-col) minmax(0, calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-width) - var(--fd-toc-width))) var(--fd-toc-width) minmax(min-content, 1fr)`,
			"--fd-docs-row-1": "var(--fd-banner-height, 0px)",
			"--fd-docs-row-2": "calc(var(--fd-docs-row-1) + var(--fd-header-height))",
			"--fd-docs-row-3": "calc(var(--fd-docs-row-2) + var(--fd-toc-popover-height))",
			"--fd-sidebar-col": collapsed ? "0px" : "var(--fd-sidebar-width)",
			...props.style
		},
		className: twMerge("grid overflow-x-clip min-h-(--fd-docs-height) [--fd-docs-height:100dvh] [--fd-header-height:0px] [--fd-toc-popover-height:0px] [--fd-sidebar-width:0px] [--fd-toc-width:0px] data-[column-changed=true]:transition-[grid-template-columns]", props.className),
		children: props.children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/client.js
var { useProvider } = baseSlots({ useProps() {
	return useDocsLayout().props;
} });
var LayoutContext = (0, import_react.createContext)(null);
function useDocsLayout() {
	const context = (0, import_react.use)(LayoutContext);
	if (!context) throw new Error("Please use <DocsPage /> (`fumadocs-ui/layouts/docs/page`) under <DocsLayout /> (`fumadocs-ui/layouts/docs`).");
	return context;
}
function LayoutBody(props) {
	const { nav: { enabled: navEnabled = true, transparentMode: navTransparentMode = "none" } = {}, sidebar: { enabled: sidebarEnabled = true, defaultOpenLevel, prefetch, ...sidebarProps } = {}, slots: defaultSlots, tabs, tabMode = "auto", tree, containerProps, children } = props;
	const isTop = useIsScrollTop({ enabled: navTransparentMode === "top" }) ?? true;
	const isNavTransparent = navTransparentMode === "top" ? isTop : navTransparentMode === "always";
	const { baseSlots, baseProps } = useProvider(props);
	const linkItems = useLinkItems(props);
	const slots = {
		...baseSlots,
		header: defaultSlots?.header ?? Header,
		container: defaultSlots?.container ?? Container$1,
		sidebar: defaultSlots?.sidebar ?? {
			provider: SidebarProvider,
			root: Sidebar,
			trigger: SidebarTrigger,
			useSidebar
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeContextProvider, {
		tree,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutContext, {
			value: {
				props: {
					tabMode,
					tabs,
					...baseProps
				},
				isNavTransparent,
				slots,
				...linkItems
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.sidebar.provider, {
				defaultOpenLevel,
				prefetch,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(slots.container, {
					...containerProps,
					children: [
						navEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.header, {}),
						sidebarEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.sidebar.root, { ...sidebarProps }),
						tabMode === "top" && tabs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutTabs, {
							tabs,
							className: "z-10 bg-fd-background border-b px-6 pt-3 xl:px-8 max-md:hidden"
						}),
						children
					]
				})
			})
		})
	});
}
function LayoutTabs({ tabs, ...props }) {
	const pathname = usePathname();
	const selected = (0, import_react.useMemo)(() => {
		return tabs.findLast((option) => isLayoutTabActive(option, pathname));
	}, [tabs, pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("flex flex-row items-end gap-6 overflow-auto [grid-area:main]", props.className),
		children: tabs.map((tab, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
			href: tab.url,
			className: twMerge("inline-flex border-b-2 border-transparent transition-colors items-center pb-1.5 font-medium gap-2 text-fd-muted-foreground text-sm text-nowrap hover:text-fd-accent-foreground", tab.unlisted && selected !== tab && "hidden", selected === tab && "border-fd-primary text-fd-primary"),
			children: tab.title
		}, i))
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/index.js
function DocsLayout({ tree, sidebar: { tabs: _tabs, tabMode: _tabMode, ...sidebarProps } = {}, tabs: layoutTabs = _tabs, tabMode = _tabMode, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutBody, {
		tree,
		tabs: (0, import_react.useMemo)(() => {
			if (Array.isArray(layoutTabs)) return layoutTabs;
			if (typeof layoutTabs === "object") return getLayoutTabs(tree, layoutTabs);
			if (layoutTabs !== false) return getLayoutTabs(tree);
			return [];
		}, [tree, layoutTabs]),
		tabMode,
		sidebar: sidebarProps,
		...props,
		children
	});
}
//#endregion
//#region node_modules/fumadocs-mdx/dist/runtime/browser.js
function browser() {
	return { doc(_name, glob) {
		return {
			raw: glob,
			createClientLoader({ id = _name, ...options }) {
				return createClientLoader(this.raw, {
					id,
					...options
				});
			}
		};
	} };
}
var loaderStore = /* @__PURE__ */ new Map();
function createClientLoader(globEntries, options) {
	const { id = "", component: useRenderer } = options;
	const renderers = {};
	const loaders = /* @__PURE__ */ new Map();
	const store = loaderStore.get(id) ?? { preloaded: /* @__PURE__ */ new Map() };
	loaderStore.set(id, store);
	for (const k in globEntries) loaders.set(k.startsWith("./") ? k.slice(2) : k, globEntries[k]);
	function getLoader(path) {
		const loader = loaders.get(path);
		if (!loader) throw new Error(`[createClientLoader] ${path} does not exist in available entries`);
		return loader;
	}
	function getRenderer(path) {
		if (path in renderers) return renderers[path];
		let promise;
		function Renderer(props) {
			let doc = store.preloaded.get(path);
			doc ??= (0, import_react.use)(promise ??= getLoader(path)());
			return useRenderer(doc, props);
		}
		return renderers[path] = Renderer;
	}
	return {
		async preload(path) {
			const loaded = await getLoader(path)();
			store.preloaded.set(path, loaded);
			return loaded;
		},
		getComponent(path) {
			return getRenderer(path);
		},
		useContent(path, props) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(getRenderer(path), { ...props });
		}
	};
}
//#endregion
//#region .source/browser.ts
var browserCollections = { docs: browser().doc("docs", /* @__PURE__ */ Object.assign({
	"./casos-de-estudo/estudo.md": () => import("./estudo-BmI4u1XN.js"),
	"./casos-de-estudo/problema-dificil.mdx": () => import("./problema-dificil-BDkly6R7.js"),
	"./db-concepts.mdx": () => import("./db-concepts-CesMJ8wm.js"),
	"./funcoes/arrayformula.mdx": () => import("./arrayformula-DtdsffIW.js"),
	"./funcoes/googlefinance.mdx": () => import("./googlefinance-DgHk1fiU.js"),
	"./funcoes/index.mdx": () => import("./funcoes-C7WwdY4G.js"),
	"./funcoes/map.mdx": () => import("./map-IeLxdtlg.js"),
	"./funcoes/query/base-structure.mdx": () => import("./base-structure-BSQ2FwIA.js"),
	"./funcoes/query/clausulas/select.md": () => import("./select-B3mym6LI.js"),
	"./funcoes/query/clausulas/where.md": () => import("./where-DqHTcECM.js"),
	"./funcoes/query/data-manipulation.mdx": () => import("./data-manipulation-oVLFFrWG.js"),
	"./funcoes/query/index.mdx": () => import("./query-BGUejDNz.js"),
	"./funcoes/query/mixed-structure.mdx": () => import("./mixed-structure-DAHCeR3U.js"),
	"./funcoes/xlookup.mdx": () => import("./xlookup-DxHpesZN.js"),
	"./index.mdx": () => import("./docs-IGKj-bMU.js"),
	"./intro.mdx": () => import("./intro-DycLHmm0.js"),
	"./nege2c.mdx": () => import("./nege2c-AMZh7SOd.js"),
	"./praticas/query.mdx": () => import("./query-D38upMm8.js"),
	"./prologo.mdx": () => import("./prologo-rvhsSYBb.js")
})) };
//#endregion
//#region node_modules/fumadocs-core/dist/toc.js
var toc_exports = /* @__PURE__ */ __exportAll$1({
	AnchorProvider: () => AnchorProvider,
	ScrollProvider: () => ScrollProvider,
	TOCItem: () => TOCItem$2,
	useActiveAnchor: () => useActiveAnchor$1,
	useActiveAnchors: () => useActiveAnchors$1,
	useItems: () => useItems$1,
	useTOC: () => useTOC,
	useTOCListener: () => useTOCListener,
	useTOCSelector: () => useTOCSelector
});
function mergeRefs(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref != null) ref.current = value;
		});
	};
}
var ObserverContext = (0, import_react.createContext)(null);
var ScrollContext = (0, import_react.createContext)(null);
/** Optional: add auto-scroll to TOC items. */
function ScrollProvider({ containerRef, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollContext, {
		value: containerRef,
		children
	});
}
function AnchorProvider({ toc, single = false, children }) {
	const observer = (0, import_react.useMemo)(() => new Observer(), []);
	observer.single = single;
	(0, import_react.useEffect)(() => {
		observer.setItems(toc);
	}, [observer, toc]);
	(0, import_react.useEffect)(() => {
		observer.watch({ threshold: .9 });
		return () => observer.unwatch();
	}, [observer]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObserverContext, {
		value: observer,
		children
	});
}
function TOCItem$2({ ref, onActiveChange = () => null, ...props }) {
	const id = props.href ? getItemId(props.href) : null;
	const containerRef = (0, import_react.use)(ScrollContext);
	const anchorRef = (0, import_react.useRef)(null);
	const observer = useObserver();
	const [active, setActive] = (0, import_react.useState)(() => observer.items.some((item) => item.id === id && item.active));
	function autoScroll(items, instant = false) {
		const anchor = anchorRef.current;
		const container = containerRef?.current;
		if (!id || !anchor || !container) return;
		let lastActive;
		for (const item of items) {
			if (!item.active) continue;
			if (!lastActive || lastActive.t < item.t) lastActive = item;
		}
		if (lastActive?.id === id) e(anchor, {
			behavior: instant ? "instant" : "smooth",
			block: "center",
			inline: "center",
			scrollMode: "always",
			boundary: container
		});
	}
	useTOCListener((items) => {
		const itemData = id ? items.find((item) => item.id === id) : null;
		if (itemData && itemData.active !== active) {
			setActive(itemData.active);
			onActiveChange(itemData.active);
			autoScroll(items);
		}
	});
	(0, import_react.useEffect)(() => {
		autoScroll(observer.items, true);
	}, [observer]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		ref: mergeRefs(anchorRef, ref),
		"data-active": active,
		...props
	});
}
function useObserver() {
	const observer = (0, import_react.use)(ObserverContext);
	if (!observer) throw new Error(`Component must be used under the <AnchorProvider /> component.`);
	return observer;
}
/** @returns static info object, useful for custom rendering logic */
function useTOC() {
	const observer = useObserver();
	return (0, import_react.useMemo)(() => ({
		get() {
			return observer.items;
		},
		listen: observer.listen.bind(observer),
		unlisten: observer.unlisten.bind(observer)
	}), [observer]);
}
function useTOCListener(listener) {
	const observer = useObserver();
	const callback = (0, import_react.useEffectEvent)(listener);
	(0, import_react.useEffect)(() => {
		observer.listen(callback);
		return () => observer.unlisten(callback);
	}, [observer]);
}
function useTOCSelector(select, isEqual = isEqualShallow) {
	const observer = useObserver();
	const [value, setValue] = (0, import_react.useState)(() => select(observer.items));
	useTOCListener((items) => {
		const next = select(items);
		if (!isEqual(value, next)) setValue(next);
	});
	return value;
}
/**
* The estimated active heading ID
*/
function useActiveAnchor$1() {
	return useTOCSelector((items) => {
		let out;
		for (const item of items) {
			if (!item.active) continue;
			if (!out || item.t > out.t) out = item;
		}
		return out?.id;
	});
}
/**
* The id of visible anchors
*/
function useActiveAnchors$1() {
	return useTOCSelector((items) => {
		const out = [];
		for (const item of items) if (item.active) out.push(item.id);
		return out;
	});
}
function useItems$1() {
	return useTOCSelector((items) => items);
}
function getItemId(url) {
	if (url.startsWith("#")) return url.slice(1);
	return null;
}
var Observer = class {
	constructor() {
		this.items = [];
		this.single = false;
		this.observer = null;
		this.listeners = /* @__PURE__ */ new Set();
	}
	listen(listener) {
		this.listeners.add(listener);
	}
	unlisten(listener) {
		this.listeners.delete(listener);
	}
	setItems(newItems) {
		const observer = this.observer;
		if (observer) for (const item of this.items) {
			const element = document.getElementById(item.id);
			if (!element) continue;
			observer.unobserve(element);
		}
		const next = [];
		for (const item of newItems) {
			const id = getItemId(item.url);
			if (!id) continue;
			next.push({
				id,
				active: false,
				fallback: false,
				t: 0,
				original: item
			});
		}
		this.update(next);
		this.observeItems();
	}
	watch(options) {
		if (this.observer) return;
		this.observer = new IntersectionObserver(this.callback.bind(this), options);
		this.observeItems();
	}
	unwatch() {
		this.observer?.disconnect();
		this.observer = null;
	}
	callback(entries) {
		if (entries.length === 0) return;
		let hasActive = false;
		const updated = this.items.map((item) => {
			const entry = entries.find((entry) => entry.target.id === item.id);
			let active = entry ? entry.isIntersecting : item.active && !item.fallback;
			if (this.single && hasActive) active = false;
			if (item.active !== active) item = {
				...item,
				t: Date.now(),
				active,
				fallback: false
			};
			if (active) hasActive = true;
			return item;
		});
		if (!hasActive && entries[0].rootBounds) {
			const viewTop = entries[0].rootBounds.top;
			let min = Number.MAX_VALUE;
			let fallbackIdx = -1;
			for (let i = 0; i < updated.length; i++) {
				const element = document.getElementById(updated[i].id);
				if (!element) continue;
				const d = Math.abs(viewTop - element.getBoundingClientRect().top);
				if (d < min) {
					fallbackIdx = i;
					min = d;
				}
			}
			if (fallbackIdx !== -1) updated[fallbackIdx] = {
				...updated[fallbackIdx],
				active: true,
				fallback: true,
				t: Date.now()
			};
		}
		this.update(updated);
	}
	observeItems() {
		if (!this.observer) return;
		for (const item of this.items) {
			const element = document.getElementById(item.id);
			if (!element) continue;
			this.observer.observe(element);
		}
	}
	update(next) {
		this.items = next;
		for (const listener of this.listeners) listener(next);
	}
};
//#endregion
//#region node_modules/fumadocs-ui/dist/components/toc/index.js
var TOCContext = (0, import_react.createContext)([]);
function useTOCItems() {
	return (0, import_react.use)(TOCContext);
}
var { useActiveAnchor, useActiveAnchors, useItems } = toc_exports;
function TOCProvider$1({ toc, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCContext, {
		value: toc,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorProvider, {
			toc,
			...props,
			children
		})
	});
}
function TOCScrollArea({ ref, className, ...props }) {
	const viewRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mergeRefs$1(viewRef, ref),
		className: twMerge("relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] mask-[linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProvider, {
			containerRef: viewRef,
			children: props.children
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/toc/default.js
var default_exports = /* @__PURE__ */ __exportAll({
	TOCEmpty: () => TOCEmpty$1,
	TOCItem: () => TOCItem$1,
	TOCItems: () => TOCItems$1
});
function TOCItems$1({ ref, className, ...props }) {
	const containerRef = (0, import_react.useRef)(null);
	const items = useTOCItems();
	const [computed, setComputed] = (0, import_react.useState)(null);
	const onCompute = (0, import_react.useCallback)(() => {
		const container = containerRef.current;
		if (!container) return;
		if (items.length === 0) {
			setComputed(null);
			return;
		}
		const positions = [];
		for (const item of items) {
			const element = container.querySelector(`a[href="${item.url}"]`);
			if (!element) continue;
			const styles = getComputedStyle(element);
			positions.push([element.offsetTop + parseFloat(styles.paddingTop), element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom)]);
		}
		setComputed({ positions });
	}, [items]);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		const observer = new ResizeObserver(onCompute);
		observer.observe(container);
		onCompute();
		return () => {
			observer.disconnect();
		};
	}, [onCompute]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [computed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocThumb, { computed }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: mergeRefs$1(ref, containerRef),
			className: twMerge("flex flex-col border-s border-fd-foreground/10", className),
			...props
		})]
	});
}
function TocThumb({ computed }) {
	const ref = (0, import_react.useRef)(null);
	const tocInfo = useTOC();
	const onUpdate = (0, import_react.useCallback)((items) => {
		const element = ref.current;
		if (!element) return;
		const startIdx = items.findIndex((item) => item.active);
		if (startIdx === -1) return;
		const endIdx = items.findLastIndex((item) => item.active);
		element.style.setProperty("--track-top", `${computed.positions[startIdx][0]}px`);
		element.style.setProperty("--track-bottom", `${computed.positions[endIdx][1]}px`);
	}, [computed]);
	useTOCListener(onUpdate);
	(0, import_react.useEffect)(() => {
		onUpdate(tocInfo.get());
	}, [onUpdate, tocInfo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "absolute inset-y-0 inset-s-0 bg-fd-primary w-px transition-[clip-path]",
		style: { clipPath: `polygon(0 var(--track-top,0), 100% var(--track-top,0), 100% var(--track-bottom,0), 0 var(--track-bottom,0))` }
	});
}
function TOCEmpty$1() {
	const { text } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
		children: text.tocNoHeadings
	});
}
function TOCItem$1({ item, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItem$2, {
		href: item.url,
		...props,
		className: twMerge("prose py-1.5 text-sm text-fd-muted-foreground scroll-m-4 transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary hover:text-fd-accent-foreground", item.depth <= 2 && "ps-3", item.depth === 3 && "ps-6", item.depth >= 4 && "ps-8", props.className),
		children: item.title
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/toc/clerk.js
var clerk_exports = /* @__PURE__ */ __exportAll({
	TOCEmpty: () => TOCEmpty,
	TOCItem: () => TOCItem,
	TOCItems: () => TOCItems
});
function TOCItems({ ref, className, thumbBox = true, ...props }) {
	const containerRef = (0, import_react.useRef)(null);
	const items = useTOCItems();
	const [svg, setSvg] = (0, import_react.useState)(null);
	const onPrint = (0, import_react.useCallback)(() => {
		const container = containerRef.current;
		if (!container || container.clientHeight === 0) return;
		if (items.length === 0) {
			setSvg(null);
			return;
		}
		let w = 0;
		let h = 0;
		let d = "";
		const positions = [];
		const output = [];
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			const element = container.querySelector(`a[href="${item.url}"]`);
			if (!element) continue;
			const styles = getComputedStyle(element);
			const x = getLineOffset(item.depth) + .5;
			const top = element.offsetTop + parseFloat(styles.paddingTop);
			const bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
			w = Math.max(x + 8, w);
			h = Math.max(h, bottom);
			if (i === 0) d += ` M${x} ${top} L${x} ${bottom}`;
			else {
				const [, upperBottom, upperX] = i > 0 ? positions[i - 1] : [
					0,
					0,
					0
				];
				d += ` C ${upperX} ${top - 4} ${x} ${upperBottom + 4} ${x} ${top} L${x} ${bottom}`;
			}
			if (item._step !== void 0) output.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: (top + bottom) / 2,
				r: "8",
				className: "fill-fd-primary"
			}, `${i}-circle`), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x,
				y: (top + bottom) / 2,
				textAnchor: "middle",
				alignmentBaseline: "central",
				dominantBaseline: "middle",
				className: "fill-fd-primary-foreground font-medium text-xs leading-none font-mono",
				children: item._step
			}, `${i}-text`));
			positions.push([
				top,
				bottom,
				x
			]);
		}
		output.unshift(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d,
			className: "stroke-fd-primary",
			strokeWidth: "1",
			fill: "none"
		}, "path"));
		const itemLineLengths = [];
		if (thumbBox) {
			const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
			path.setAttribute("d", d);
			let l = 0;
			for (const [top, bottom] of positions) {
				while (path.getPointAtLength(l).y < top) l++;
				const topL = l;
				while (path.getPointAtLength(l).y < bottom) l++;
				itemLineLengths.push([topL, l]);
			}
		}
		setSvg({
			content: output,
			width: w,
			height: h,
			d,
			itemLineLengths,
			positions
		});
	}, [items, thumbBox]);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		const observer = new ResizeObserver(onPrint);
		observer.observe(container);
		onPrint();
		return () => {
			observer.unobserve(container);
		};
	}, [onPrint]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [svg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbTrack, {
		computed: svg,
		thumbBox
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mergeRefs$1(containerRef, ref),
		className: twMerge("flex flex-col", className),
		...props
	})] });
}
function TOCEmpty() {
	const { text } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
		children: text.tocNoHeadings
	});
}
function ThumbTrack({ computed, thumbBox }) {
	const svgRef = (0, import_react.useRef)(null);
	const boxRef = (0, import_react.useRef)(null);
	const previousRef = (0, import_react.useRef)(null);
	const tocInfo = useTOC();
	const onUpdate = (0, import_react.useCallback)((items) => {
		const svg = svgRef.current;
		if (!svg) return;
		const startIdx = items.findIndex((item) => item.active);
		if (startIdx === -1) return;
		const endIdx = items.findLastIndex((item) => item.active);
		svg.style.setProperty("--track-top", `${computed.positions[startIdx][0]}px`);
		svg.style.setProperty("--track-bottom", `${computed.positions[endIdx][1]}px`);
		const box = boxRef.current;
		if (box) {
			let isUp = false;
			if (previousRef.current) {
				const prev = previousRef.current;
				isUp = prev.startIdx > startIdx || prev.endIdx > endIdx || prev.startIdx === startIdx && prev.endIdx === endIdx && prev.isUp;
			}
			previousRef.current = {
				startIdx,
				endIdx,
				isUp
			};
			box.style.setProperty("--offset-distance", isUp ? `${computed.itemLineLengths[startIdx][0]}px` : `${computed.itemLineLengths[endIdx][1]}px`);
			box.style.setProperty("--opacity", items[isUp ? startIdx : endIdx].original._step !== void 0 ? "0" : "1");
		}
	}, [computed]);
	useTOCListener(onUpdate);
	(0, import_react.useEffect)(() => {
		onUpdate(tocInfo.get());
	}, [onUpdate, tocInfo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute top-0 inset-s-0",
		style: {
			width: computed.width,
			height: computed.height
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			ref: svgRef,
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: `0 0 ${computed.width} ${computed.height}`,
			className: "absolute transition-[clip-path]",
			style: {
				width: computed.width,
				height: computed.height,
				clipPath: `polygon(0 var(--track-top,0), 100% var(--track-top,0), 100% var(--track-bottom,0), 0 var(--track-bottom,0))`
			},
			children: computed.content
		}), thumbBox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: boxRef,
			className: "absolute size-1 bg-fd-primary rounded-full [offset-distance:var(--offset-distance,0)] opacity-(--opacity,0) transition-[opacity,offset-distance]",
			style: { offsetPath: `path("${computed.d}")` }
		})]
	});
}
var a = 8;
function getItemOffset(depth) {
	if (depth <= 2) return 12 + a;
	if (depth === 3) return 24 + a;
	return 36 + a;
}
function getLineOffset(depth) {
	if (depth <= 2) return a;
	if (depth === 3) return 8 + a;
	return 16 + a;
}
function TOCItem({ item, ...props }) {
	const items = useTOCItems();
	const { lowerOffset, offset, upperOffset } = (0, import_react.useMemo)(() => {
		const index = items.indexOf(item);
		const offset = getLineOffset(item.depth);
		return {
			offset,
			upperOffset: index > 0 ? getLineOffset(items[index - 1].depth) : offset,
			lowerOffset: index + 1 < items.length ? getLineOffset(items[index + 1].depth) : offset
		};
	}, [items, item]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TOCItem$2, {
		href: item.url,
		...props,
		className: twMerge("group prose relative py-1.5 text-sm scroll-m-4 text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", props.className),
		style: {
			paddingInlineStart: getItemOffset(item.depth),
			...props.style
		},
		children: [
			offset !== upperOffset && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: `${Math.min(offset, upperOffset)} 0 ${Math.abs(upperOffset - offset)} 12`,
				className: "absolute -top-1.5 -z-1",
				style: {
					width: Math.abs(upperOffset - offset) + 1,
					height: 12,
					insetInlineStart: Math.min(offset, upperOffset)
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M ${upperOffset} 0 C ${upperOffset} 8 ${offset} 4 ${offset} 12`,
					stroke: "black",
					strokeWidth: "1",
					fill: "none",
					className: "stroke-fd-foreground/10"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: twMerge("absolute inset-y-0 w-px bg-fd-foreground/10 -z-1", offset !== upperOffset && "top-1.5", offset !== lowerOffset && "bottom-1.5"),
				style: { insetInlineStart: offset }
			}),
			item._step !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute flex items-center justify-center -translate-1/2 -z-1 top-[calc(50%-var(--t,0px)+var(--b,0px))] size-4 font-mono font-medium text-xs bg-fd-muted text-fd-muted-foreground rounded-full leading-none group-first:[--t:--spacing(0.75)] group-last:[--b:--spacing(0.75)]",
				style: { insetInlineStart: offset },
				children: item._step
			}),
			item.title
		]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/slots/toc.js
function TOCProvider(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCProvider$1, { ...props });
}
function TOC({ container, header, footer, style = "normal", list }) {
	const items = useTOCItems();
	const { TOCItems, TOCEmpty, TOCItem } = style === "clerk" ? clerk_exports : default_exports;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "nd-toc",
		...container,
		className: twMerge("sticky top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] flex flex-col [grid-area:toc] w-(--fd-toc-width) pt-12 pe-4 pb-2 max-xl:hidden", container?.className),
		children: [
			header,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				id: "toc-title",
				className: "inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAlignStart, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nLabel, { label: "toc" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCScrollArea, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TOCItems, {
				...list,
				children: [items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCEmpty, {}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItem, { item }, item.url))]
			}) }),
			footer
		]
	});
}
var TocPopoverContext = (0, import_react.createContext)(null);
function TOCPopover({ container, trigger, content, header, footer, style = "normal", list }) {
	const items = useTOCItems();
	const ref = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { isNavTransparent } = useDocsLayout();
	const { TOCItems, TOCItem, TOCEmpty } = style === "clerk" ? clerk_exports : default_exports;
	const onClickOutside = (0, import_react.useEffectEvent)((e) => {
		if (!open || !(e.target instanceof HTMLElement)) return;
		if (ref.current && !ref.current.contains(e.target)) setOpen(false);
	});
	const onClickItem = () => {
		setOpen(false);
	};
	(0, import_react.useEffect)(() => {
		window.addEventListener("click", onClickOutside);
		return () => {
			window.removeEventListener("click", onClickOutside);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocPopoverContext, {
		value: (0, import_react.useMemo)(() => ({
			open,
			setOpen
		}), [setOpen, open]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible, {
			open,
			onOpenChange: setOpen,
			"data-toc-popover": "",
			...container,
			className: twMerge("sticky top-(--fd-docs-row-2) z-10 [grid-area:toc-popover] h-(--fd-toc-popover-height) xl:hidden max-xl:layout:[--fd-toc-popover-height:--spacing(10)]", container?.className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				ref,
				className: twMerge("border-b backdrop-blur-sm transition-colors", (!isNavTransparent || open) && "bg-fd-background/80", open && "shadow-lg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTOCPopoverTrigger, { ...trigger }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTOCPopoverContent, {
					...content,
					children: [
						header,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCScrollArea, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TOCItems, {
							...list,
							children: [items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCEmpty, {}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItem, {
								item,
								onClick: onClickItem
							}, item.url))]
						}) }),
						footer
					]
				})]
			})
		})
	});
}
function PageTOCPopoverTrigger({ className, ...props }) {
	const { text } = useI18n();
	const { open } = (0, import_react.use)(TocPopoverContext);
	const items = useItems();
	const selectedIdx = items.findIndex((item) => item.active);
	const path = useTreePath().at(-1);
	const showItem = selectedIdx !== -1 && !open;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleTrigger, {
		className: twMerge("flex w-full h-10 items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6", className),
		"data-toc-popover-trigger": "",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCircle, {
				value: (selectedIdx + 1) / Math.max(1, items.length),
				max: 1,
				className: twMerge("shrink-0", open && "text-fd-primary")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: twMerge("truncate transition-[opacity,translate,color]", open && "text-fd-foreground", showItem && "opacity-0 -translate-y-full pointer-events-none"),
					children: path?.name ?? text.toc
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: twMerge("truncate transition-[opacity,translate]", !showItem && "opacity-0 translate-y-full pointer-events-none"),
					children: items[selectedIdx]?.original.title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: twMerge("shrink-0 transition-transform mx-0.5", open && "rotate-180") })
		]
	});
}
function clamp(input, min, max) {
	if (input < min) return min;
	if (input > max) return max;
	return input;
}
function ProgressCircle({ value, strokeWidth = 2, size = 24, min = 0, max = 100, ...restSvgProps }) {
	const normalizedValue = clamp(value, min, max);
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const progress = normalizedValue / max * circumference;
	const circleProps = {
		cx: size / 2,
		cy: size / 2,
		r: radius,
		fill: "none",
		strokeWidth
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		role: "progressbar",
		viewBox: `0 0 ${size} ${size}`,
		"aria-valuenow": normalizedValue,
		"aria-valuemin": min,
		"aria-valuemax": max,
		...restSvgProps,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			...circleProps,
			className: "stroke-current/25"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			...circleProps,
			stroke: "currentColor",
			strokeDasharray: circumference,
			strokeDashoffset: circumference - progress,
			strokeLinecap: "round",
			transform: `rotate(-90 ${size / 2} ${size / 2})`,
			className: "transition-all"
		})]
	});
}
function PageTOCPopoverContent(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
		"data-toc-popover-content": "",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col px-4 max-h-[50vh] md:px-6",
			children: props.children
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/utils/use-footer-items.js
var footerCache = /* @__PURE__ */ new WeakMap();
/**
* @returns a list of page tree items (linear), that you can obtain footer items
*/
function useFooterItems() {
	const { root } = useTreeContext();
	const cached = footerCache.get(root);
	if (cached) return cached;
	const list = [];
	function onNode(node) {
		if (node.type === "folder") {
			if (node.index) onNode(node.index);
			for (const child of node.children) onNode(child);
		} else if (node.type === "page" && !node.external) list.push(node);
	}
	for (const child of root.children) onNode(child);
	footerCache.set(root, list);
	return list;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/slots/footer.js
function Footer({ items, children, className, ...props }) {
	const footerList = useFooterItems();
	const pathname = usePathname();
	const { previous, next } = (0, import_react.useMemo)(() => {
		if (items) return items;
		const idx = footerList.findIndex((item) => isActive(item.url, pathname));
		if (idx === -1) return {};
		return {
			previous: footerList[idx - 1],
			next: footerList[idx + 1]
		};
	}, [
		footerList,
		items,
		pathname
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: twMerge("@container grid gap-4", previous && next ? "grid-cols-2" : "grid-cols-1", className),
		...props,
		children: [previous && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterItem, {
			item: previous,
			index: 0
		}), next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterItem, {
			item: next,
			index: 1
		})]
	}), children] });
}
function FooterItem({ item, index }) {
	const { text } = useI18n();
	const Icon = index === 0 ? ChevronLeft : ChevronRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
		href: item.url,
		className: twMerge("flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full", index === 1 && "text-end"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: twMerge("inline-flex items-center gap-1.5 font-medium", index === 1 && "flex-row-reverse"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.name })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-fd-muted-foreground truncate",
			children: item.description ?? (index === 0 ? text.previousPage : text.nextPage)
		})]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/slots/breadcrumb.js
function Breadcrumb({ includeRoot, includeSeparator, includePage, ...props }) {
	const path = useTreePath();
	const { root } = useTreeContext();
	const items = (0, import_react.useMemo)(() => {
		return getBreadcrumbItemsFromPath(root, path, {
			includePage,
			includeSeparator,
			includeRoot
		});
	}, [
		includePage,
		includeRoot,
		includeSeparator,
		path,
		root
	]);
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className),
		children: items.map((item, i) => {
			const className = twMerge("truncate", i === items.length - 1 && "text-fd-primary font-medium");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [i !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5 shrink-0" }), item.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
				href: item.url,
				className: twMerge(className, "transition-opacity hover:opacity-80"),
				children: item.name
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className,
				children: item.name
			})] }, i);
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/slots/container.js
function Container(props) {
	const { props: { full } } = useDocsPage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		id: "nd-page",
		"data-full": full,
		...props,
		className: twMerge("flex flex-col w-full max-w-[900px] mx-auto [grid-area:main] px-4 py-6 gap-4 md:px-6 md:pt-8 xl:px-8 xl:pt-14", full ? "max-w-[1168px]" : "xl:layout:[--fd-toc-width:268px]", props.className),
		children: props.children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/utils/use-copy-button.js
function useCopyButton(onCopy) {
	const [checked, setChecked] = (0, import_react.useState)(false);
	const callbackRef = (0, import_react.useRef)(onCopy);
	const timeoutRef = (0, import_react.useRef)(null);
	callbackRef.current = onCopy;
	const onClick = (0, import_react.useCallback)(() => {
		if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		Promise.resolve(callbackRef.current()).then(() => {
			setChecked(true);
			timeoutRef.current = window.setTimeout(() => {
				setChecked(false);
			}, 1500);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		};
	}, []);
	return [checked, onClick];
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/index.js
var PageContext = (0, import_react.createContext)(null);
function useDocsPage() {
	const context = (0, import_react.use)(PageContext);
	if (!context) throw new Error("Please use page components under <DocsPage /> (`fumadocs-ui/layouts/docs/page`).");
	return context;
}
function DocsPage({ tableOfContent: { enabled: tocEnabled, single, ...tocProps } = {}, tableOfContentPopover: { enabled: tocPopoverEnabled, ...tocPopoverProps } = {}, breadcrumb: { enabled: breadcrumbEnabled = true, ...breadcrumb } = {}, footer: { enabled: footerEnabled = true, ...footer } = {}, full = false, toc = [], slots: defaultSlots = {}, children, ...containerProps }) {
	tocEnabled ??= Boolean(!full && (toc.length > 0 || tocProps.footer || tocProps.header));
	tocPopoverEnabled ??= Boolean(toc.length > 0 || tocPopoverProps.header || tocPopoverProps.footer);
	const slots = {
		breadcrumb: defaultSlots.breadcrumb ?? Breadcrumb,
		footer: defaultSlots.footer ?? Footer,
		toc: defaultSlots.toc ?? {
			provider: TOCProvider,
			main: TOC,
			popover: TOCPopover
		},
		container: defaultSlots.container ?? Container
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContext, {
		value: {
			props: { full },
			slots
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(slots.toc.provider, {
			single,
			toc: tocEnabled || tocPopoverEnabled ? toc : [],
			children: [
				tocPopoverEnabled && (tocPopoverProps.component ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.toc.popover, { ...tocPopoverProps })),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(slots.container, {
					...containerProps,
					children: [
						breadcrumbEnabled && (breadcrumb.component ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.breadcrumb, { ...breadcrumb })),
						children,
						footerEnabled && (footer.component ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.footer, { ...footer }))
					]
				}),
				tocEnabled && (tocProps.component ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.toc.main, { ...tocProps }))
			]
		})
	});
}
/**
* Add typography styles
*/
function DocsBody({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("prose flex-1", className),
		children
	});
}
function DocsDescription({ children, className, ...props }) {
	if (children === void 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		...props,
		className: twMerge("mb-8 text-lg text-fd-muted-foreground", className),
		children
	});
}
function DocsTitle({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		...props,
		className: twMerge("text-[1.75em] font-semibold", className),
		children
	});
}
//#endregion
//#region node_modules/fumadocs-core/dist/source/client/index.js
function deserializePageTree(serialized) {
	const root = serialized.data;
	visit(root, (item) => {
		if ("icon" in item && typeof item.icon === "string") item.icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { dangerouslySetInnerHTML: { __html: item.icon } });
		if (typeof item.name === "string") item.name = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "fd-page-tree-item-name",
			dangerouslySetInnerHTML: { __html: item.name }
		});
	});
	return root;
}
/**
* Deserialize loader data that is serialized by the server-side Fumadocs `loader()`, supported:
* - Page Tree
*
* other unrelated properties are kept in the output.
*/
function useFumadocsLoader(serialized) {
	return (0, import_react.useMemo)(() => {
		const out = {};
		for (const k in serialized) {
			const v = serialized[k];
			if (isSerializedPageTree(v)) out[k] = deserializePageTree(v);
			else out[k] = v;
		}
		return out;
	}, [serialized]);
}
function isSerializedPageTree(v) {
	return typeof v === "object" && v !== null && "$fumadocs_loader" in v && v.$fumadocs_loader === "page-tree";
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/card.js
function Cards(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("grid grid-cols-2 gap-3 @container", props.className),
		children: props.children
	});
}
function Card({ icon, title, description, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(props.href ? Link$1 : "div", {
		...props,
		"data-card": true,
		className: twMerge("block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full", props.href && "hover:bg-fd-accent/80", props.className),
		children: [
			icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "not-prose mb-2 w-fit shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4",
				children: icon
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "not-prose mb-1 text-sm font-medium",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "my-0! text-sm text-fd-muted-foreground",
				children: description
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-fd-muted-foreground prose-no-margin empty:hidden",
				children: props.children
			})
		]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/callout.js
var iconClass = "size-5 -me-0.5 fill-(--callout-color) text-fd-card";
function Callout({ children, title, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalloutContainer, {
		...props,
		children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalloutTitle, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalloutDescription, { children })]
	});
}
function resolveAlias(type) {
	if (type === "warn") return "warning";
	if (type === "tip") return "info";
	return type;
}
function CalloutContainer({ type: inputType = "info", icon, children, className, style, ...props }) {
	const type = resolveAlias(inputType);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: twMerge("flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md", className),
		style: {
			"--callout-color": `var(--color-fd-${type}, var(--color-fd-muted))`,
			...style
		},
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "none",
				className: "w-0.5 bg-(--callout-color)/50 rounded-sm"
			}),
			icon ?? {
				info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: iconClass }),
				warning: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: iconClass }),
				error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: iconClass }),
				success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: iconClass }),
				idea: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-5 -me-0.5 fill-(--callout-color) text-(--callout-color)" })
			}[type],
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2 min-w-0 flex-1",
				children
			})
		]
	});
}
function CalloutTitle({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: twMerge("font-medium my-0!", className),
		...props,
		children
	});
}
function CalloutDescription({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: twMerge("text-fd-muted-foreground prose-no-margin empty:hidden", className),
		...props,
		children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/heading.js
function Heading({ as, className, ...props }) {
	const As = as ?? "h1";
	if (!props.id) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		className,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(As, {
		className: twMerge("flex scroll-m-28 flex-row items-center gap-2", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			"data-card": "",
			href: `#${props.id}`,
			className: "peer",
			children: props.children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			"aria-hidden": true,
			className: "size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
		})]
	});
}
//#endregion
//#region node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME, [createCollectionScope]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = import_react.forwardRef((props, forwardedRef) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
		scope: props.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
			scope: props.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupImpl, {
				...props,
				ref: forwardedRef
			})
		})
	});
});
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const direction = useDirection(dir);
	const [currentTabStopId, setCurrentTabStopId] = useControllableState({
		prop: currentTabStopIdProp,
		defaultProp: defaultCurrentTabStopId ?? null,
		onChange: onCurrentTabStopIdChange,
		caller: GROUP_NAME
	});
	const [isTabbingBackOut, setIsTabbingBackOut] = import_react.useState(false);
	const handleEntryFocus = useCallbackRef(onEntryFocus);
	const getItems = useCollection(__scopeRovingFocusGroup);
	const isClickFocusRef = import_react.useRef(false);
	const [focusableItemsCount, setFocusableItemsCount] = import_react.useState(0);
	import_react.useEffect(() => {
		const node = ref.current;
		if (node) {
			node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
			return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
		}
	}, [handleEntryFocus]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusProvider, {
		scope: __scopeRovingFocusGroup,
		orientation,
		dir: direction,
		loop,
		currentTabStopId,
		onItemFocus: import_react.useCallback((tabStopId) => setCurrentTabStopId(tabStopId), [setCurrentTabStopId]),
		onItemShiftTab: import_react.useCallback(() => setIsTabbingBackOut(true), []),
		onFocusableItemAdd: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount + 1), []),
		onFocusableItemRemove: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount - 1), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
			"data-orientation": orientation,
			...groupProps,
			ref: composedRefs,
			style: {
				outline: "none",
				...props.style
			},
			onMouseDown: composeEventHandlers(props.onMouseDown, () => {
				isClickFocusRef.current = true;
			}),
			onFocus: composeEventHandlers(props.onFocus, (event) => {
				const isKeyboardFocus = !isClickFocusRef.current;
				if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
					const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					event.currentTarget.dispatchEvent(entryFocusEvent);
					if (!entryFocusEvent.defaultPrevented) {
						const items = getItems().filter((item) => item.focusable);
						focusFirst([
							items.find((item) => item.active),
							items.find((item) => item.id === currentTabStopId),
							...items
						].filter(Boolean).map((item) => item.ref.current), preventScrollOnEntryFocus);
					}
				}
				isClickFocusRef.current = false;
			}),
			onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
		})
	});
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
	const autoId = useId();
	const id = tabStopId || autoId;
	const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
	const isCurrentTabStop = context.currentTabStopId === id;
	const getItems = useCollection(__scopeRovingFocusGroup);
	const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
	import_react.useEffect(() => {
		if (focusable) {
			onFocusableItemAdd();
			return () => onFocusableItemRemove();
		}
	}, [
		focusable,
		onFocusableItemAdd,
		onFocusableItemRemove
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
		scope: __scopeRovingFocusGroup,
		id,
		focusable,
		active,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			tabIndex: isCurrentTabStop ? 0 : -1,
			"data-orientation": context.orientation,
			...itemProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!focusable) event.preventDefault();
				else context.onItemFocus(id);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (event.key === "Tab" && event.shiftKey) {
					context.onItemShiftTab();
					return;
				}
				if (event.target !== event.currentTarget) return;
				const focusIntent = getFocusIntent(event, context.orientation, context.dir);
				if (focusIntent !== void 0) {
					if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
					event.preventDefault();
					let candidateNodes = getItems().filter((item) => item.focusable).map((item) => item.ref.current);
					if (focusIntent === "last") candidateNodes.reverse();
					else if (focusIntent === "prev" || focusIntent === "next") {
						if (focusIntent === "prev") candidateNodes.reverse();
						const currentIndex = candidateNodes.indexOf(event.currentTarget);
						candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
					}
					setTimeout(() => focusFirst(candidateNodes));
				}
			}),
			children: typeof children === "function" ? children({
				isCurrentTabStop,
				hasTabStop: currentTabStopId != null
			}) : children
		})
	});
});
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function getDirectionAwareKey(key, dir) {
	if (dir !== "rtl") return key;
	return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
	const key = getDirectionAwareKey(event.key, dir);
	if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
	if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
	return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
	const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus({ preventScroll });
		if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
//#endregion
//#region node_modules/@radix-ui/react-tabs/dist/index.mjs
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [createRovingFocusGroupScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		onChange: onValueChange,
		defaultProp: defaultValue ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsProvider, {
		scope: __scopeTabs,
		baseId: useId(),
		value,
		onValueChange: setValue,
		orientation,
		dir: direction,
		activationMode,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			"data-orientation": orientation,
			...tabsProps,
			ref: forwardedRef
		})
	});
});
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, loop = true, ...listProps } = props;
	const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		asChild: true,
		...rovingFocusGroupScope,
		orientation: context.orientation,
		dir: context.dir,
		loop,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "tablist",
			"aria-orientation": context.orientation,
			...listProps,
			ref: forwardedRef
		})
	});
});
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
	const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: isSelected,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": isSelected,
			"aria-controls": contentId,
			"data-state": isSelected ? "active" : "inactive",
			"data-disabled": disabled ? "" : void 0,
			disabled,
			id: triggerId,
			...triggerProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!disabled && event.button === 0 && event.ctrlKey === false) context.onValueChange(value);
				else event.preventDefault();
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				const isAutomaticActivation = context.activationMode !== "manual";
				if (!isSelected && !disabled && isAutomaticActivation) context.onValueChange(value);
			})
		})
	});
});
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
	const context = useTabsContext(CONTENT_NAME, __scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	const isMountAnimationPreventedRef = import_react.useRef(isSelected);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isSelected,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": isSelected ? "active" : "inactive",
			"data-orientation": context.orientation,
			role: "tabpanel",
			"aria-labelledby": triggerId,
			hidden: !present,
			id: contentId,
			tabIndex: 0,
			...contentProps,
			ref: forwardedRef,
			style: {
				...props.style,
				animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
			},
			children: present && children
		})
	});
});
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/tabs.js
var listeners = /* @__PURE__ */ new Map();
var TabsContext$1 = (0, import_react.createContext)(null);
function useTabContext() {
	const ctx = (0, import_react.use)(TabsContext$1);
	if (!ctx) throw new Error("You must wrap your component in <Tabs>");
	return ctx;
}
var TabsList = TabsList$1;
var TabsTrigger = TabsTrigger$1;
function Tabs({ ref, groupId, persist = false, updateAnchor = false, defaultValue, value: _value, onValueChange: _onValueChange, ...props }) {
	const tabsRef = (0, import_react.useRef)(null);
	const valueToIdMap = (0, import_react.useMemo)(() => /* @__PURE__ */ new Map(), []);
	const [value, setValue] = _value === void 0 ? (0, import_react.useState)(defaultValue) : [_value, (0, import_react.useEffectEvent)((v) => _onValueChange?.(v))];
	(0, import_react.useLayoutEffect)(() => {
		if (!groupId) return;
		let previous = sessionStorage.getItem(groupId);
		if (persist) previous ??= localStorage.getItem(groupId);
		if (previous) setValue(previous);
		const groupListeners = listeners.get(groupId) ?? /* @__PURE__ */ new Set();
		groupListeners.add(setValue);
		listeners.set(groupId, groupListeners);
		return () => {
			groupListeners.delete(setValue);
		};
	}, [
		groupId,
		persist,
		setValue
	]);
	(0, import_react.useLayoutEffect)(() => {
		const hash = window.location.hash.slice(1);
		if (!hash) return;
		for (const [value, id] of valueToIdMap.entries()) if (id === hash) {
			setValue(value);
			tabsRef.current?.scrollIntoView();
			break;
		}
	}, [setValue, valueToIdMap]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs$1, {
		ref: mergeRefs$1(ref, tabsRef),
		value,
		onValueChange: (v) => {
			if (updateAnchor) {
				const id = valueToIdMap.get(v);
				if (id) window.history.replaceState(null, "", `#${id}`);
			}
			if (groupId) {
				const groupListeners = listeners.get(groupId);
				if (groupListeners) for (const listener of groupListeners) listener(v);
				sessionStorage.setItem(groupId, v);
				if (persist) localStorage.setItem(groupId, v);
			} else setValue(v);
		},
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContext$1, {
			value: (0, import_react.useMemo)(() => ({ valueToIdMap }), [valueToIdMap]),
			children: props.children
		})
	});
}
function TabsContent({ value, ...props }) {
	const { valueToIdMap } = useTabContext();
	if (props.id) valueToIdMap.set(value, props.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent$1, {
		value,
		...props,
		children: props.children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/codeblock.js
var TabsContext = (0, import_react.createContext)(null);
function Pre(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		...props,
		className: twMerge("min-w-full w-max *:flex *:flex-col", props.className),
		children: props.children
	});
}
function CodeBlock({ ref, title, allowCopy = true, keepBackground = false, icon, viewportProps = {}, children, Actions = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	...props,
	className: twMerge("empty:hidden", props.className)
}), ...props }) {
	const inTab = (0, import_react.use)(TabsContext) !== null;
	const areaRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		ref,
		dir: "ltr",
		...props,
		tabIndex: -1,
		className: twMerge(inTab ? "bg-fd-secondary -mx-px -mb-px last:rounded-b-xl" : "my-4 bg-fd-card rounded-xl", keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)", "shiki relative border shadow-sm not-prose overflow-hidden text-sm", props.className),
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4",
			children: [
				typeof icon === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "[&_svg]:size-3.5",
					dangerouslySetInnerHTML: { __html: icon }
				}) : icon,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "flex-1 truncate",
					children: title
				}),
				Actions({
					className: "-me-2",
					children: allowCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { containerRef: areaRef })
				})
			]
		}) : Actions({
			className: "absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground",
			children: allowCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { containerRef: areaRef })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: areaRef,
			...viewportProps,
			role: "region",
			tabIndex: 0,
			className: twMerge("text-[0.8125rem] py-3.5 overflow-auto max-h-[600px] fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring", viewportProps.className),
			style: {
				"--padding-right": !title ? "calc(var(--spacing) * 8)" : void 0,
				counterSet: props["data-line-numbers"] ? `line ${Number(props["data-line-numbers-start"] ?? 1) - 1}` : void 0,
				...viewportProps.style
			},
			children
		})]
	});
}
function CopyButton({ className, containerRef, ...props }) {
	const [checked, onClick] = useCopyButton(() => {
		const pre = containerRef.current?.getElementsByTagName("pre").item(0);
		if (!pre) return;
		const clone = pre.cloneNode(true);
		clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
			node.replaceWith("\n");
		});
		navigator.clipboard.writeText(clone.textContent ?? "");
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"data-checked": checked || void 0,
		className: twMerge(buttonVariants({
			className: "hover:text-fd-accent-foreground data-checked:text-fd-accent-foreground",
			size: "icon-xs"
		}), className),
		"aria-label": checked ? "Copied Text" : "Copy Text",
		onClick,
		...props,
		children: checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, {})
	});
}
function CodeBlockTabs({ ref, ...props }) {
	const containerRef = (0, import_react.useRef)(null);
	const nested = (0, import_react.use)(TabsContext) !== null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
		ref: mergeRefs$1(containerRef, ref),
		...props,
		className: twMerge("bg-fd-card rounded-xl border", !nested && "my-4", props.className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContext, {
			value: (0, import_react.useMemo)(() => ({
				containerRef,
				nested
			}), [nested]),
			children: props.children
		})
	});
}
function CodeBlockTabsList(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
		...props,
		className: twMerge("flex flex-row px-2 overflow-x-auto text-fd-muted-foreground", props.className),
		children: props.children
	});
}
function CodeBlockTabsTrigger({ children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
		...props,
		className: twMerge("relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5", props.className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary" }), children]
	});
}
function CodeBlockTab(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, { ...props });
}
//#endregion
//#region node_modules/fumadocs-ui/dist/mdx.js
function Image$1(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
		sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px",
		...props,
		className: twMerge("rounded-lg", props.className)
	});
}
function Table(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-auto prose-no-margin my-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { ...props })
	});
}
var defaultMdxComponents = {
	CodeBlockTab,
	CodeBlockTabs,
	CodeBlockTabsList,
	CodeBlockTabsTrigger,
	pre: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pre, { children: props.children })
	}),
	Card,
	Cards,
	a: Link$1,
	img: Image$1,
	h1: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h1",
		...props
	}),
	h2: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h2",
		...props
	}),
	h3: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h3",
		...props
	}),
	h4: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h4",
		...props
	}),
	h5: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h5",
		...props
	}),
	h6: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h6",
		...props
	}),
	table: Table,
	Callout,
	CalloutContainer,
	CalloutTitle,
	CalloutDescription
};
//#endregion
//#region src/components/mdx.tsx
function getMDXComponents(components) {
	return {
		...defaultMdxComponents,
		...components
	};
}
var useMDXComponents = getMDXComponents;
//#endregion
//#region src/components/page-actions.tsx
function PageActions({ slug, title }) {
	const [epubLoading, setEpubLoading] = (0, import_react.useState)(false);
	const [epubError, setEpubError] = (0, import_react.useState)(false);
	const handlePrint = (0, import_react.useCallback)(() => {
		window.print();
	}, []);
	const handleEpub = (0, import_react.useCallback)(async () => {
		setEpubLoading(true);
		setEpubError(false);
		try {
			const res = await fetch(`/api/export/epub?slug=${encodeURIComponent(slug)}`);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const blob = await res.blob();
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `${slug.split("/").at(-1) ?? "handbook"}.epub`;
			a.click();
			URL.revokeObjectURL(url);
		} catch {
			setEpubError(true);
			setTimeout(() => setEpubError(false), 3e3);
		} finally {
			setEpubLoading(false);
		}
	}, [slug]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1 px-2 py-3 border-t border-fd-border",
		"aria-label": `Exportar: ${title}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-medium tracking-[0.08em] uppercase text-fd-muted-foreground px-2 pb-1",
				children: "Exportar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: handlePrint,
				className: "flex items-center gap-2.5 px-2 py-1.5 text-sm text-fd-foreground hover:bg-fd-accent transition-colors cursor-pointer text-left w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "14",
					height: "14",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					"aria-hidden": "true",
					className: "shrink-0 text-fd-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "6 9 6 2 18 2 18 9" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "12",
							height: "8",
							x: "6",
							y: "14"
						})
					]
				}), "Salvar como PDF"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: handleEpub,
				disabled: epubLoading,
				className: "flex items-center gap-2.5 px-2 py-1.5 text-sm text-fd-foreground hover:bg-fd-accent transition-colors cursor-pointer text-left w-full disabled:opacity-50 disabled:cursor-wait",
				children: [epubLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "14",
					height: "14",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					"aria-hidden": "true",
					className: "shrink-0 text-fd-muted-foreground animate-spin",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "14",
					height: "14",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					"aria-hidden": "true",
					className: "shrink-0 text-fd-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })]
				}), epubError ? "Erro — tente novamente" : epubLoading ? "Gerando…" : "Baixar ePub"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyLinkButton, {})
		]
	});
}
function CopyLinkButton() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: (0, import_react.useCallback)(async () => {
			try {
				await navigator.clipboard.writeText(window.location.href);
				setCopied(true);
				setTimeout(() => setCopied(false), 2e3);
			} catch {}
		}, []),
		className: "flex items-center gap-2.5 px-2 py-1.5 text-sm text-fd-foreground hover:bg-fd-accent transition-colors cursor-pointer text-left w-full",
		children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "14",
			height: "14",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			className: "shrink-0 text-fd-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "20 6 9 17 4 12" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "14",
			height: "14",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			className: "shrink-0 text-fd-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })]
		}), copied ? "Link copiado!" : "Copiar link"]
	});
}
//#endregion
//#region src/routes/docs/$.tsx?tsr-split=component
var clientLoader = browserCollections.docs.createClientLoader({ component({ toc, frontmatter, default: MDX }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DocsPage, {
		toc,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsTitle, { children: frontmatter.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsDescription, { children: frontmatter.description }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsBody, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MDX, { components: useMDXComponents() }) })
		]
	});
} });
function Page() {
	const { path, pageTree, slug, title } = useFumadocsLoader(Route.useLoaderData());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsLayout, {
		...baseOptions(),
		tree: pageTree,
		sidebar: { footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageActions, {
			slug,
			title
		}) },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, { children: clientLoader.useContent(path, void 0) })
	});
}
//#endregion
export { Page as component };
