import { a as __toCommonJS, n as __esmMin, o as __toESM, r as __exportAll, t as __commonJSMin } from "./chunk-D3zDcpJC.js";
import { n as require_react } from "./react-dom-CwY-XDXW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
import { i as VFileMessage, n as remark, r as VFile, s as visitParents, t as visit$1, u as zwitch } from "./lib-Bc_DZAbK.js";
import { _ as remarkRehype, a as getTagID, b as pointStart, c as fromParse5, d as html$2, f as svg$2, g as stringify, h as whitespace, i as TokenizerMode, l as webNamespaces, m as hastToReact, o as TokenType, p as find$1, r as Parser, s as htmlVoidElements, u as stringify$1, v as esm_default$1, y as pointEnd } from "./dist-DTP-glN2.js";
import { c as useRouter, r as useI18n, t as I18nLabel } from "./i18n-VvDVzDfZ.js";
import { C as twMerge, S as cva, _ as useComposedRefs, a as Portal, b as createLucideIcon, d as useControllableState, f as useId, g as composeRefs, h as createContextScope, i as Presence, l as Primitive, m as createContext2, n as ReactRemoveScroll, o as FocusScope, r as useFocusGuards, s as DismissableLayer, t as hideOthers, v as composeEventHandlers, x as buttonVariants, y as Search } from "./es2015-LeHT4uEA.js";
import { i as ChevronRight, n as useOnChange, t as e } from "./dist-BPA1bsFg.js";
var Hash = createLucideIcon("hash", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "9",
		y2: "9",
		key: "4lhtct"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "15",
		y2: "15",
		key: "vyu0kd"
	}],
	["line", {
		x1: "10",
		x2: "8",
		y1: "3",
		y2: "21",
		key: "1ggp8o"
	}],
	["line", {
		x1: "16",
		x2: "14",
		y1: "3",
		y2: "21",
		key: "weycgp"
	}]
]);
//#endregion
//#region node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
/* @__NO_SIDE_EFFECTS__ */
function createSlot(ownerName) {
	const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		const { children, ...slotProps } = props;
		const childrenArray = import_react.Children.toArray(children);
		const slottable = childrenArray.find(isSlottable);
		if (slottable) {
			const newElement = slottable.props.children;
			const newChildren = childrenArray.map((child) => {
				if (child === slottable) {
					if (import_react.Children.count(newElement) > 1) return import_react.Children.only(null);
					return import_react.isValidElement(newElement) ? newElement.props.children : null;
				} else return child;
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, {
				...slotProps,
				ref: forwardedRef,
				children: import_react.isValidElement(newElement) ? import_react.cloneElement(newElement, void 0, newChildren) : null
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotClone, {
			...slotProps,
			ref: forwardedRef,
			children
		});
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(ownerName) {
	const SlotClone = import_react.forwardRef((props, forwardedRef) => {
		const { children, ...slotProps } = props;
		if (import_react.isValidElement(children)) {
			const childrenRef = getElementRef(children);
			const props2 = mergeProps(slotProps, children.props);
			if (children.type !== import_react.Fragment) props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
			return import_react.cloneElement(children, props2);
		}
		return import_react.Children.count(children) > 1 ? import_react.Children.only(null) : null;
	});
	SlotClone.displayName = `${ownerName}.SlotClone`;
	return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
//#endregion
//#region node_modules/@radix-ui/react-dialog/dist/index.mjs
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...triggerProps } = props;
	const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
	const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": context.open,
		"aria-controls": context.contentId,
		"data-state": getState(context.open),
		...triggerProps,
		ref: composedTriggerRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 });
var DialogPortal = (props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = import_react.forwardRef((props, forwardedRef) => {
	const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(context.open),
			...overlayProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
});
var CONTENT_NAME = "DialogContent";
var DialogContent = import_react.forwardRef((props, forwardedRef) => {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = import_react.forwardRef((props, forwardedRef) => {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: true,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
});
var DialogContentNonModal = import_react.forwardRef((props, forwardedRef) => {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
});
var DialogContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, __scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionId,
			"aria-labelledby": context.titleId,
			"data-state": getState(context.open),
			...contentProps,
			ref: composedRefs,
			onDismiss: () => context.onOpenChange(false)
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleWarning, { titleId: context.titleId }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning, {
		contentRef,
		descriptionId: context.descriptionId
	})] })] });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext(TITLE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
	return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME,
	titleName: TITLE_NAME,
	docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
	const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
	const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
	import_react.useEffect(() => {
		if (titleId) {
			if (!document.getElementById(titleId)) console.error(MESSAGE);
		}
	}, [MESSAGE, titleId]);
	return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
	const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	import_react.useEffect(() => {
		const describedById = contentRef.current?.getAttribute("aria-describedby");
		if (descriptionId && describedById) {
			if (!document.getElementById(descriptionId)) console.warn(MESSAGE);
		}
	}, [
		MESSAGE,
		contentRef,
		descriptionId
	]);
	return null;
};
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
var nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
/** @type {Options} */
var emptyOptions$1 = {};
/**
* Checks if the given value is a valid identifier name.
*
* @param {string} name
*   Identifier to check.
* @param {Options | null | undefined} [options]
*   Configuration (optional).
* @returns {boolean}
*   Whether `name` can be an identifier.
*/
function name(name, options) {
	return ((options || emptyOptions$1).jsx ? nameReJsx : nameRe).test(name);
}
//#endregion
//#region node_modules/inline-style-parser/index.js
var require_inline_style_parser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
	var NEWLINE_REGEX = /\n/g;
	var WHITESPACE_REGEX = /^\s*/;
	var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
	var COLON_REGEX = /^:\s*/;
	var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
	var SEMICOLON_REGEX = /^[;\s]*/;
	var TRIM_REGEX = /^\s+|\s+$/g;
	var NEWLINE = "\n";
	var FORWARD_SLASH = "/";
	var ASTERISK = "*";
	var EMPTY_STRING = "";
	var TYPE_COMMENT = "comment";
	var TYPE_DECLARATION = "declaration";
	/**
	* @param {String} style
	* @param {Object} [options]
	* @return {Object[]}
	* @throws {TypeError}
	* @throws {Error}
	*/
	module.exports = function(style, options) {
		if (typeof style !== "string") throw new TypeError("First argument must be a string");
		if (!style) return [];
		options = options || {};
		/**
		* Positional.
		*/
		var lineno = 1;
		var column = 1;
		/**
		* Update lineno and column based on `str`.
		*
		* @param {String} str
		*/
		function updatePosition(str) {
			var lines = str.match(NEWLINE_REGEX);
			if (lines) lineno += lines.length;
			var i = str.lastIndexOf(NEWLINE);
			column = ~i ? str.length - i : column + str.length;
		}
		/**
		* Mark position and patch `node.position`.
		*
		* @return {Function}
		*/
		function position() {
			var start = {
				line: lineno,
				column
			};
			return function(node) {
				node.position = new Position(start);
				whitespace();
				return node;
			};
		}
		/**
		* Store position information for a node.
		*
		* @constructor
		* @property {Object} start
		* @property {Object} end
		* @property {undefined|String} source
		*/
		function Position(start) {
			this.start = start;
			this.end = {
				line: lineno,
				column
			};
			this.source = options.source;
		}
		/**
		* Non-enumerable source string.
		*/
		Position.prototype.content = style;
		var errorsList = [];
		/**
		* Error `msg`.
		*
		* @param {String} msg
		* @throws {Error}
		*/
		function error(msg) {
			var err = /* @__PURE__ */ new Error(options.source + ":" + lineno + ":" + column + ": " + msg);
			err.reason = msg;
			err.filename = options.source;
			err.line = lineno;
			err.column = column;
			err.source = style;
			if (options.silent) errorsList.push(err);
			else throw err;
		}
		/**
		* Match `re` and return captures.
		*
		* @param {RegExp} re
		* @return {undefined|Array}
		*/
		function match(re) {
			var m = re.exec(style);
			if (!m) return;
			var str = m[0];
			updatePosition(str);
			style = style.slice(str.length);
			return m;
		}
		/**
		* Parse whitespace.
		*/
		function whitespace() {
			match(WHITESPACE_REGEX);
		}
		/**
		* Parse comments.
		*
		* @param {Object[]} [rules]
		* @return {Object[]}
		*/
		function comments(rules) {
			var c;
			rules = rules || [];
			while (c = comment()) if (c !== false) rules.push(c);
			return rules;
		}
		/**
		* Parse comment.
		*
		* @return {Object}
		* @throws {Error}
		*/
		function comment() {
			var pos = position();
			if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
			var i = 2;
			while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) ++i;
			i += 2;
			if (EMPTY_STRING === style.charAt(i - 1)) return error("End of comment missing");
			var str = style.slice(2, i - 2);
			column += 2;
			updatePosition(str);
			style = style.slice(i);
			column += 2;
			return pos({
				type: TYPE_COMMENT,
				comment: str
			});
		}
		/**
		* Parse declaration.
		*
		* @return {Object}
		* @throws {Error}
		*/
		function declaration() {
			var pos = position();
			var prop = match(PROPERTY_REGEX);
			if (!prop) return;
			comment();
			if (!match(COLON_REGEX)) return error("property missing ':'");
			var val = match(VALUE_REGEX);
			var ret = pos({
				type: TYPE_DECLARATION,
				property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
				value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
			});
			match(SEMICOLON_REGEX);
			return ret;
		}
		/**
		* Parse declarations.
		*
		* @return {Object[]}
		*/
		function declarations() {
			var decls = [];
			comments(decls);
			var decl;
			while (decl = declaration()) if (decl !== false) {
				decls.push(decl);
				comments(decls);
			}
			return decls;
		}
		whitespace();
		return declarations();
	};
	/**
	* Trim `str`.
	*
	* @param {String} str
	* @return {String}
	*/
	function trim(str) {
		return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
	}
}));
//#endregion
//#region node_modules/style-to-object/cjs/index.js
var require_cjs$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StyleToObject;
	var inline_style_parser_1 = __importDefault(require_inline_style_parser());
	/**
	* Parses inline style to object.
	*
	* @param style - Inline style.
	* @param iterator - Iterator.
	* @returns - Style object or null.
	*
	* @example Parsing inline style to object:
	*
	* ```js
	* import parse from 'style-to-object';
	* parse('line-height: 42;'); // { 'line-height': '42' }
	* ```
	*/
	function StyleToObject(style, iterator) {
		var styleObject = null;
		if (!style || typeof style !== "string") return styleObject;
		var declarations = (0, inline_style_parser_1.default)(style);
		var hasIterator = typeof iterator === "function";
		declarations.forEach(function(declaration) {
			if (declaration.type !== "declaration") return;
			var property = declaration.property, value = declaration.value;
			if (hasIterator) iterator(property, value, declaration);
			else if (value) {
				styleObject = styleObject || {};
				styleObject[property] = value;
			}
		});
		return styleObject;
	}
}));
//#endregion
//#region node_modules/style-to-object/esm/index.mjs
var esm_exports = /* @__PURE__ */ __exportAll({ default: () => esm_default });
var import_cjs$1, esm_default;
var init_esm = __esmMin((() => {
	import_cjs$1 = /* @__PURE__ */ __toESM(require_cjs$1(), 1);
	esm_default = import_cjs$1.default.default || import_cjs$1.default;
}));
//#endregion
//#region node_modules/style-to-js/cjs/utilities.js
var require_utilities = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.camelCase = void 0;
	var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
	var HYPHEN_REGEX = /-([a-z])/g;
	var NO_HYPHEN_REGEX = /^[^-]+$/;
	var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
	var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
	/**
	* Checks whether to skip camelCase.
	*/
	var skipCamelCase = function(property) {
		return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
	};
	/**
	* Replacer that capitalizes first character.
	*/
	var capitalize = function(match, character) {
		return character.toUpperCase();
	};
	/**
	* Replacer that removes beginning hyphen of vendor prefix property.
	*/
	var trimHyphen = function(match, prefix) {
		return "".concat(prefix, "-");
	};
	/**
	* CamelCases a CSS property.
	*/
	var camelCase = function(property, options) {
		if (options === void 0) options = {};
		if (skipCamelCase(property)) return property;
		property = property.toLowerCase();
		if (options.reactCompat) property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
		else property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
		return property.replace(HYPHEN_REGEX, capitalize);
	};
	exports.camelCase = camelCase;
}));
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
/**
* @import {Identifier, Literal, MemberExpression} from 'estree'
* @import {Jsx, JsxDev, Options, Props} from 'hast-util-to-jsx-runtime'
* @import {Element, Nodes, Parents, Root, Text} from 'hast'
* @import {MdxFlowExpressionHast, MdxTextExpressionHast} from 'mdast-util-mdx-expression'
* @import {MdxJsxFlowElementHast, MdxJsxTextElementHast} from 'mdast-util-mdx-jsx'
* @import {MdxjsEsmHast} from 'mdast-util-mdxjs-esm'
* @import {Position} from 'unist'
* @import {Child, Create, Field, JsxElement, State, Style} from './types.js'
*/
var import_cjs = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var style_to_object_1 = (exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	})((init_esm(), __toCommonJS(esm_exports)));
	var utilities_1 = require_utilities();
	/**
	* Parses CSS inline style to JavaScript object (camelCased).
	*/
	function StyleToJS(style, options) {
		var output = {};
		if (!style || typeof style !== "string") return output;
		(0, style_to_object_1.default)(style, function(property, value) {
			if (property && value) output[(0, utilities_1.camelCase)(property, options)] = value;
		});
		return output;
	}
	StyleToJS.default = StyleToJS;
	module.exports = StyleToJS;
})))(), 1);
var own$2 = {}.hasOwnProperty;
/** @type {Map<string, number>} */
var emptyMap = /* @__PURE__ */ new Map();
var cap$1 = /[A-Z]/g;
var tableElements = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]);
var tableCellElement = new Set(["td", "th"]);
var docs = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
/**
* Transform a hast tree to preact, react, solid, svelte, vue, etc.,
* with an automatic JSX runtime.
*
* @param {Nodes} tree
*   Tree to transform.
* @param {Options} options
*   Configuration (required).
* @returns {JsxElement}
*   JSX element.
*/
function toJsxRuntime(tree, options) {
	if (!options || options.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
	const filePath = options.filePath || void 0;
	/** @type {Create} */
	let create;
	if (options.development) {
		if (typeof options.jsxDEV !== "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
		create = developmentCreate(filePath, options.jsxDEV);
	} else {
		if (typeof options.jsx !== "function") throw new TypeError("Expected `jsx` in production options");
		if (typeof options.jsxs !== "function") throw new TypeError("Expected `jsxs` in production options");
		create = productionCreate(filePath, options.jsx, options.jsxs);
	}
	/** @type {State} */
	const state = {
		Fragment: options.Fragment,
		ancestors: [],
		components: options.components || {},
		create,
		elementAttributeNameCase: options.elementAttributeNameCase || "react",
		evaluater: options.createEvaluater ? options.createEvaluater() : void 0,
		filePath,
		ignoreInvalidStyle: options.ignoreInvalidStyle || false,
		passKeys: options.passKeys !== false,
		passNode: options.passNode || false,
		schema: options.space === "svg" ? svg$2 : html$2,
		stylePropertyNameCase: options.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: options.tableCellAlignToStyle !== false
	};
	const result = one$1(state, tree, void 0);
	if (result && typeof result !== "string") return result;
	return state.create(tree, state.Fragment, { children: result || void 0 }, void 0);
}
/**
* Transform a node.
*
* @param {State} state
*   Info passed around.
* @param {Nodes} node
*   Current node.
* @param {string | undefined} key
*   Key.
* @returns {Child | undefined}
*   Child, optional.
*/
function one$1(state, node, key) {
	if (node.type === "element") return element$2(state, node, key);
	if (node.type === "mdxFlowExpression" || node.type === "mdxTextExpression") return mdxExpression(state, node);
	if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") return mdxJsxElement(state, node, key);
	if (node.type === "mdxjsEsm") return mdxEsm(state, node);
	if (node.type === "root") return root$2(state, node, key);
	if (node.type === "text") return text$2(state, node);
}
/**
* Handle element.
*
* @param {State} state
*   Info passed around.
* @param {Element} node
*   Current node.
* @param {string | undefined} key
*   Key.
* @returns {Child | undefined}
*   Child, optional.
*/
function element$2(state, node, key) {
	const parentSchema = state.schema;
	let schema = parentSchema;
	if (node.tagName.toLowerCase() === "svg" && parentSchema.space === "html") {
		schema = svg$2;
		state.schema = schema;
	}
	state.ancestors.push(node);
	const type = findComponentFromName(state, node.tagName, false);
	const props = createElementProps(state, node);
	let children = createChildren(state, node);
	if (tableElements.has(node.tagName)) children = children.filter(function(child) {
		return typeof child === "string" ? !whitespace(child) : true;
	});
	addNode(state, props, type, node);
	addChildren(props, children);
	state.ancestors.pop();
	state.schema = parentSchema;
	return state.create(node, type, props, key);
}
/**
* Handle MDX expression.
*
* @param {State} state
*   Info passed around.
* @param {MdxFlowExpressionHast | MdxTextExpressionHast} node
*   Current node.
* @returns {Child | undefined}
*   Child, optional.
*/
function mdxExpression(state, node) {
	if (node.data && node.data.estree && state.evaluater) {
		const expression = node.data.estree.body[0];
		expression.type;
		return state.evaluater.evaluateExpression(expression.expression);
	}
	crashEstree(state, node.position);
}
/**
* Handle MDX ESM.
*
* @param {State} state
*   Info passed around.
* @param {MdxjsEsmHast} node
*   Current node.
* @returns {Child | undefined}
*   Child, optional.
*/
function mdxEsm(state, node) {
	if (node.data && node.data.estree && state.evaluater) return state.evaluater.evaluateProgram(node.data.estree);
	crashEstree(state, node.position);
}
/**
* Handle MDX JSX.
*
* @param {State} state
*   Info passed around.
* @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
*   Current node.
* @param {string | undefined} key
*   Key.
* @returns {Child | undefined}
*   Child, optional.
*/
function mdxJsxElement(state, node, key) {
	const parentSchema = state.schema;
	let schema = parentSchema;
	if (node.name === "svg" && parentSchema.space === "html") {
		schema = svg$2;
		state.schema = schema;
	}
	state.ancestors.push(node);
	const type = node.name === null ? state.Fragment : findComponentFromName(state, node.name, true);
	const props = createJsxElementProps(state, node);
	const children = createChildren(state, node);
	addNode(state, props, type, node);
	addChildren(props, children);
	state.ancestors.pop();
	state.schema = parentSchema;
	return state.create(node, type, props, key);
}
/**
* Handle root.
*
* @param {State} state
*   Info passed around.
* @param {Root} node
*   Current node.
* @param {string | undefined} key
*   Key.
* @returns {Child | undefined}
*   Child, optional.
*/
function root$2(state, node, key) {
	/** @type {Props} */
	const props = {};
	addChildren(props, createChildren(state, node));
	return state.create(node, state.Fragment, props, key);
}
/**
* Handle text.
*
* @param {State} _
*   Info passed around.
* @param {Text} node
*   Current node.
* @returns {Child | undefined}
*   Child, optional.
*/
function text$2(_, node) {
	return node.value;
}
/**
* Add `node` to props.
*
* @param {State} state
*   Info passed around.
* @param {Props} props
*   Props.
* @param {unknown} type
*   Type.
* @param {Element | MdxJsxFlowElementHast | MdxJsxTextElementHast} node
*   Node.
* @returns {undefined}
*   Nothing.
*/
function addNode(state, props, type, node) {
	if (typeof type !== "string" && type !== state.Fragment && state.passNode) props.node = node;
}
/**
* Add children to props.
*
* @param {Props} props
*   Props.
* @param {Array<Child>} children
*   Children.
* @returns {undefined}
*   Nothing.
*/
function addChildren(props, children) {
	if (children.length > 0) {
		const value = children.length > 1 ? children : children[0];
		if (value) props.children = value;
	}
}
/**
* @param {string | undefined} _
*   Path to file.
* @param {Jsx} jsx
*   Dynamic.
* @param {Jsx} jsxs
*   Static.
* @returns {Create}
*   Create a production element.
*/
function productionCreate(_, jsx, jsxs) {
	return create;
	/** @type {Create} */
	function create(_, type, props, key) {
		const fn = Array.isArray(props.children) ? jsxs : jsx;
		return key ? fn(type, props, key) : fn(type, props);
	}
}
/**
* @param {string | undefined} filePath
*   Path to file.
* @param {JsxDev} jsxDEV
*   Development.
* @returns {Create}
*   Create a development element.
*/
function developmentCreate(filePath, jsxDEV) {
	return create;
	/** @type {Create} */
	function create(node, type, props, key) {
		const isStaticChildren = Array.isArray(props.children);
		const point = pointStart(node);
		return jsxDEV(type, props, key, isStaticChildren, {
			columnNumber: point ? point.column - 1 : void 0,
			fileName: filePath,
			lineNumber: point ? point.line : void 0
		}, void 0);
	}
}
/**
* Create props from an element.
*
* @param {State} state
*   Info passed around.
* @param {Element} node
*   Current element.
* @returns {Props}
*   Props.
*/
function createElementProps(state, node) {
	/** @type {Props} */
	const props = {};
	/** @type {string | undefined} */
	let alignValue;
	/** @type {string} */
	let prop;
	for (prop in node.properties) if (prop !== "children" && own$2.call(node.properties, prop)) {
		const result = createProperty$1(state, prop, node.properties[prop]);
		if (result) {
			const [key, value] = result;
			if (state.tableCellAlignToStyle && key === "align" && typeof value === "string" && tableCellElement.has(node.tagName)) alignValue = value;
			else props[key] = value;
		}
	}
	if (alignValue) {
		const style = props.style || (props.style = {});
		style[state.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = alignValue;
	}
	return props;
}
/**
* Create props from a JSX element.
*
* @param {State} state
*   Info passed around.
* @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
*   Current JSX element.
* @returns {Props}
*   Props.
*/
function createJsxElementProps(state, node) {
	/** @type {Props} */
	const props = {};
	for (const attribute of node.attributes) if (attribute.type === "mdxJsxExpressionAttribute") if (attribute.data && attribute.data.estree && state.evaluater) {
		const expression = attribute.data.estree.body[0];
		expression.type;
		const objectExpression = expression.expression;
		objectExpression.type;
		const property = objectExpression.properties[0];
		property.type;
		Object.assign(props, state.evaluater.evaluateExpression(property.argument));
	} else crashEstree(state, node.position);
	else {
		const name = attribute.name;
		/** @type {unknown} */
		let value;
		if (attribute.value && typeof attribute.value === "object") if (attribute.value.data && attribute.value.data.estree && state.evaluater) {
			const expression = attribute.value.data.estree.body[0];
			expression.type;
			value = state.evaluater.evaluateExpression(expression.expression);
		} else crashEstree(state, node.position);
		else value = attribute.value === null ? true : attribute.value;
		props[name] = value;
	}
	return props;
}
/**
* Create children.
*
* @param {State} state
*   Info passed around.
* @param {Parents} node
*   Current element.
* @returns {Array<Child>}
*   Children.
*/
function createChildren(state, node) {
	/** @type {Array<Child>} */
	const children = [];
	let index = -1;
	/** @type {Map<string, number>} */
	/* c8 ignore next */
	const countsByName = state.passKeys ? /* @__PURE__ */ new Map() : emptyMap;
	while (++index < node.children.length) {
		const child = node.children[index];
		/** @type {string | undefined} */
		let key;
		if (state.passKeys) {
			const name = child.type === "element" ? child.tagName : child.type === "mdxJsxFlowElement" || child.type === "mdxJsxTextElement" ? child.name : void 0;
			if (name) {
				const count = countsByName.get(name) || 0;
				key = name + "-" + count;
				countsByName.set(name, count + 1);
			}
		}
		const result = one$1(state, child, key);
		if (result !== void 0) children.push(result);
	}
	return children;
}
/**
* Handle a property.
*
* @param {State} state
*   Info passed around.
* @param {string} prop
*   Key.
* @param {Array<number | string> | boolean | number | string | null | undefined} value
*   hast property value.
* @returns {Field | undefined}
*   Field for runtime, optional.
*/
function createProperty$1(state, prop, value) {
	const info = find$1(state.schema, prop);
	if (value === null || value === void 0 || typeof value === "number" && Number.isNaN(value)) return;
	if (Array.isArray(value)) value = info.commaSeparated ? stringify(value) : stringify$1(value);
	if (info.property === "style") {
		let styleObject = typeof value === "object" ? value : parseStyle(state, String(value));
		if (state.stylePropertyNameCase === "css") styleObject = transformStylesToCssCasing(styleObject);
		return ["style", styleObject];
	}
	return [state.elementAttributeNameCase === "react" && info.space ? hastToReact[info.property] || info.property : info.attribute, value];
}
/**
* Parse a CSS declaration to an object.
*
* @param {State} state
*   Info passed around.
* @param {string} value
*   CSS declarations.
* @returns {Style}
*   Properties.
* @throws
*   Throws `VFileMessage` when CSS cannot be parsed.
*/
function parseStyle(state, value) {
	try {
		return (0, import_cjs.default)(value, { reactCompat: true });
	} catch (error) {
		if (state.ignoreInvalidStyle) return {};
		const cause = error;
		const message = new VFileMessage("Cannot parse `style` attribute", {
			ancestors: state.ancestors,
			cause,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		message.file = state.filePath || void 0;
		message.url = docs + "#cannot-parse-style-attribute";
		throw message;
	}
}
/**
* Create a JSX name from a string.
*
* @param {State} state
*   To do.
* @param {string} name
*   Name.
* @param {boolean} allowExpression
*   Allow member expressions and identifiers.
* @returns {unknown}
*   To do.
*/
function findComponentFromName(state, name$1, allowExpression) {
	/** @type {Identifier | Literal | MemberExpression} */
	let result;
	if (!allowExpression) result = {
		type: "Literal",
		value: name$1
	};
	else if (name$1.includes(".")) {
		const identifiers = name$1.split(".");
		let index = -1;
		/** @type {Identifier | Literal | MemberExpression | undefined} */
		let node;
		while (++index < identifiers.length) {
			/** @type {Identifier | Literal} */
			const prop = name(identifiers[index]) ? {
				type: "Identifier",
				name: identifiers[index]
			} : {
				type: "Literal",
				value: identifiers[index]
			};
			node = node ? {
				type: "MemberExpression",
				object: node,
				property: prop,
				computed: Boolean(index && prop.type === "Literal"),
				optional: false
			} : prop;
		}
		result = node;
	} else result = name(name$1) && !/^[a-z]/.test(name$1) ? {
		type: "Identifier",
		name: name$1
	} : {
		type: "Literal",
		value: name$1
	};
	if (result.type === "Literal") {
		const name = result.value;
		return own$2.call(state.components, name) ? state.components[name] : name;
	}
	if (state.evaluater) return state.evaluater.evaluateExpression(result);
	crashEstree(state);
}
/**
* @param {State} state
* @param {Position | undefined} [place]
* @returns {never}
*/
function crashEstree(state, place) {
	const message = new VFileMessage("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: state.ancestors,
		place,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	message.file = state.filePath || void 0;
	message.url = docs + "#cannot-handle-mdx-estrees-without-createevaluater";
	throw message;
}
/**
* Transform a DOM casing style object to a CSS casing style object.
*
* @param {Style} domCasing
* @returns {Style}
*/
function transformStylesToCssCasing(domCasing) {
	/** @type {Style} */
	const cssCasing = {};
	/** @type {string} */
	let from;
	for (from in domCasing) if (own$2.call(domCasing, from)) cssCasing[transformStyleToCssCasing(from)] = domCasing[from];
	return cssCasing;
}
/**
* Transform a DOM casing style field to a CSS casing style field.
*
* @param {string} from
* @returns {string}
*/
function transformStyleToCssCasing(from) {
	let to = from.replace(cap$1, toDash);
	if (to.slice(0, 3) === "ms-") to = "-" + to;
	return to;
}
/**
* Make `$0` dash cased.
*
* @param {string} $0
*   Capitalized ASCII leter.
* @returns {string}
*   Dash and lower letter.
*/
function toDash($0) {
	return "-" + $0.toLowerCase();
}
//#endregion
//#region node_modules/fumadocs-core/dist/content/md.js
function createMarkdownRenderer({ rehypePlugins = [], remarkPlugins = [], remarkRehypeOptions } = {}) {
	const processor = remark().use(remarkPlugins).use(remarkRehype, remarkRehypeOptions).use(rehypePlugins);
	const cache = {};
	const promises = {};
	function render(tree, file, props) {
		return toJsxRuntime(tree, {
			development: false,
			filePath: file.path,
			components: props.components,
			...import_jsx_runtime
		});
	}
	function parse(file, _props) {
		return processor.parse(file);
	}
	return {
		Markdown(props) {
			const { async = false, children } = props;
			const file = new VFile(children);
			const key = String(file.value);
			if (async) {
				promises[key] ??= processor.run(parse(file, props), file);
				return render((0, import_react.use)(promises[key]), file, props);
			}
			cache[key] ??= processor.runSync(parse(file, props), file);
			return render(cache[key], file, props);
		},
		async MarkdownServer(props) {
			const file = new VFile(props.children);
			return render(await processor.run(parse(file, props), file), file, props);
		}
	};
}
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/util/schema.js
/**
* @typedef {import('./info.js').Info} Info
* @typedef {Record<string, Info>} Properties
* @typedef {Record<string, string>} Normal
*/
var Schema = class {
	/**
	* @constructor
	* @param {Properties} property
	* @param {Normal} normal
	* @param {string} [space]
	*/
	constructor(property, normal, space) {
		this.property = property;
		this.normal = normal;
		if (space) this.space = space;
	}
};
/** @type {Properties} */
Schema.prototype.property = {};
/** @type {Normal} */
Schema.prototype.normal = {};
/** @type {string|null} */
Schema.prototype.space = null;
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/util/merge.js
/**
* @typedef {import('./schema.js').Properties} Properties
* @typedef {import('./schema.js').Normal} Normal
*/
/**
* @param {Schema[]} definitions
* @param {string} [space]
* @returns {Schema}
*/
function merge(definitions, space) {
	/** @type {Properties} */
	const property = {};
	/** @type {Normal} */
	const normal = {};
	let index = -1;
	while (++index < definitions.length) {
		Object.assign(property, definitions[index].property);
		Object.assign(normal, definitions[index].normal);
	}
	return new Schema(property, normal, space);
}
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/normalize.js
/**
* @param {string} value
* @returns {string}
*/
function normalize(value) {
	return value.toLowerCase();
}
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/util/info.js
var Info = class {
	/**
	* @constructor
	* @param {string} property
	* @param {string} attribute
	*/
	constructor(property, attribute) {
		/** @type {string} */
		this.property = property;
		/** @type {string} */
		this.attribute = attribute;
	}
};
/** @type {string|null} */
Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/util/types.js
var types_exports = /* @__PURE__ */ __exportAll({
	boolean: () => boolean,
	booleanish: () => booleanish,
	commaOrSpaceSeparated: () => commaOrSpaceSeparated,
	commaSeparated: () => commaSeparated,
	number: () => number,
	overloadedBoolean: () => overloadedBoolean,
	spaceSeparated: () => spaceSeparated
});
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
	return 2 ** ++powers;
}
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/util/defined-info.js
/** @type {Array<keyof types>} */
var checks = Object.keys(types_exports);
var DefinedInfo = class extends Info {
	/**
	* @constructor
	* @param {string} property
	* @param {string} attribute
	* @param {number|null} [mask]
	* @param {string} [space]
	*/
	constructor(property, attribute, mask, space) {
		let index = -1;
		super(property, attribute);
		mark(this, "space", space);
		if (typeof mask === "number") while (++index < checks.length) {
			const check = checks[index];
			mark(this, checks[index], (mask & types_exports[check]) === types_exports[check]);
		}
	}
};
DefinedInfo.prototype.defined = true;
/**
* @param {DefinedInfo} values
* @param {string} key
* @param {unknown} value
*/
function mark(values, key, value) {
	if (value) values[key] = value;
}
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/util/create.js
/**
* @typedef {import('./schema.js').Properties} Properties
* @typedef {import('./schema.js').Normal} Normal
*
* @typedef {Record<string, string>} Attributes
*
* @typedef {Object} Definition
* @property {Record<string, number|null>} properties
* @property {(attributes: Attributes, property: string) => string} transform
* @property {string} [space]
* @property {Attributes} [attributes]
* @property {Array<string>} [mustUseProperty]
*/
var own$1 = {}.hasOwnProperty;
/**
* @param {Definition} definition
* @returns {Schema}
*/
function create(definition) {
	/** @type {Properties} */
	const property = {};
	/** @type {Normal} */
	const normal = {};
	/** @type {string} */
	let prop;
	for (prop in definition.properties) if (own$1.call(definition.properties, prop)) {
		const value = definition.properties[prop];
		const info = new DefinedInfo(prop, definition.transform(definition.attributes || {}, prop), value, definition.space);
		if (definition.mustUseProperty && definition.mustUseProperty.includes(prop)) info.mustUseProperty = true;
		property[prop] = info;
		normal[normalize(prop)] = prop;
		normal[normalize(info.attribute)] = prop;
	}
	return new Schema(property, normal, definition.space);
}
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/xlink.js
var xlink = create({
	space: "xlink",
	transform(_, prop) {
		return "xlink:" + prop.slice(5).toLowerCase();
	},
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	}
});
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/xml.js
var xml = create({
	space: "xml",
	transform(_, prop) {
		return "xml:" + prop.slice(3).toLowerCase();
	},
	properties: {
		xmlLang: null,
		xmlBase: null,
		xmlSpace: null
	}
});
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/util/case-sensitive-transform.js
/**
* @param {Record<string, string>} attributes
* @param {string} attribute
* @returns {string}
*/
function caseSensitiveTransform(attributes, attribute) {
	return attribute in attributes ? attributes[attribute] : attribute;
}
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/util/case-insensitive-transform.js
/**
* @param {Record<string, string>} attributes
* @param {string} property
* @returns {string}
*/
function caseInsensitiveTransform(attributes, property) {
	return caseSensitiveTransform(attributes, property.toLowerCase());
}
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/xmlns.js
var xmlns = create({
	space: "xmlns",
	attributes: { xmlnsxlink: "xmlns:xlink" },
	transform: caseInsensitiveTransform,
	properties: {
		xmlns: null,
		xmlnsXLink: null
	}
});
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/aria.js
var aria = create({
	transform(_, prop) {
		return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
	},
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: booleanish,
		ariaAutoComplete: null,
		ariaBusy: booleanish,
		ariaChecked: booleanish,
		ariaColCount: number,
		ariaColIndex: number,
		ariaColSpan: number,
		ariaControls: spaceSeparated,
		ariaCurrent: null,
		ariaDescribedBy: spaceSeparated,
		ariaDetails: null,
		ariaDisabled: booleanish,
		ariaDropEffect: spaceSeparated,
		ariaErrorMessage: null,
		ariaExpanded: booleanish,
		ariaFlowTo: spaceSeparated,
		ariaGrabbed: booleanish,
		ariaHasPopup: null,
		ariaHidden: booleanish,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: spaceSeparated,
		ariaLevel: number,
		ariaLive: null,
		ariaModal: booleanish,
		ariaMultiLine: booleanish,
		ariaMultiSelectable: booleanish,
		ariaOrientation: null,
		ariaOwns: spaceSeparated,
		ariaPlaceholder: null,
		ariaPosInSet: number,
		ariaPressed: booleanish,
		ariaReadOnly: booleanish,
		ariaRelevant: null,
		ariaRequired: booleanish,
		ariaRoleDescription: spaceSeparated,
		ariaRowCount: number,
		ariaRowIndex: number,
		ariaRowSpan: number,
		ariaSelected: booleanish,
		ariaSetSize: number,
		ariaSort: null,
		ariaValueMax: number,
		ariaValueMin: number,
		ariaValueNow: number,
		ariaValueText: null,
		role: null
	}
});
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/html.js
var html$1 = create({
	space: "html",
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	transform: caseInsensitiveTransform,
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: commaSeparated,
		acceptCharset: spaceSeparated,
		accessKey: spaceSeparated,
		action: null,
		allow: null,
		allowFullScreen: boolean,
		allowPaymentRequest: boolean,
		allowUserMedia: boolean,
		alt: null,
		as: null,
		async: boolean,
		autoCapitalize: null,
		autoComplete: spaceSeparated,
		autoFocus: boolean,
		autoPlay: boolean,
		blocking: spaceSeparated,
		capture: null,
		charSet: null,
		checked: boolean,
		cite: null,
		className: spaceSeparated,
		cols: number,
		colSpan: null,
		content: null,
		contentEditable: booleanish,
		controls: boolean,
		controlsList: spaceSeparated,
		coords: number | commaSeparated,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: boolean,
		defer: boolean,
		dir: null,
		dirName: null,
		disabled: boolean,
		download: overloadedBoolean,
		draggable: booleanish,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: boolean,
		formTarget: null,
		headers: spaceSeparated,
		height: number,
		hidden: boolean,
		high: number,
		href: null,
		hrefLang: null,
		htmlFor: spaceSeparated,
		httpEquiv: spaceSeparated,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: boolean,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: boolean,
		itemId: null,
		itemProp: spaceSeparated,
		itemRef: spaceSeparated,
		itemScope: boolean,
		itemType: spaceSeparated,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: boolean,
		low: number,
		manifest: null,
		max: null,
		maxLength: number,
		media: null,
		method: null,
		min: null,
		minLength: number,
		multiple: boolean,
		muted: boolean,
		name: null,
		nonce: null,
		noModule: boolean,
		noValidate: boolean,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: boolean,
		optimum: number,
		pattern: null,
		ping: spaceSeparated,
		placeholder: null,
		playsInline: boolean,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: boolean,
		referrerPolicy: null,
		rel: spaceSeparated,
		required: boolean,
		reversed: boolean,
		rows: number,
		rowSpan: number,
		sandbox: spaceSeparated,
		scope: null,
		scoped: boolean,
		seamless: boolean,
		selected: boolean,
		shadowRootClonable: boolean,
		shadowRootDelegatesFocus: boolean,
		shadowRootMode: null,
		shape: null,
		size: number,
		sizes: null,
		slot: null,
		span: number,
		spellCheck: booleanish,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: number,
		step: null,
		style: null,
		tabIndex: number,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: boolean,
		useMap: null,
		value: booleanish,
		width: number,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: spaceSeparated,
		axis: null,
		background: null,
		bgColor: null,
		border: number,
		borderColor: null,
		bottomMargin: number,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: boolean,
		declare: boolean,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: number,
		leftMargin: number,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: number,
		marginWidth: number,
		noResize: boolean,
		noHref: boolean,
		noShade: boolean,
		noWrap: boolean,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: number,
		rules: null,
		scheme: null,
		scrolling: booleanish,
		standby: null,
		summary: null,
		text: null,
		topMargin: number,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: number,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: boolean,
		disableRemotePlayback: boolean,
		prefix: null,
		property: null,
		results: number,
		security: null,
		unselectable: null
	}
});
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/svg.js
var svg$1 = create({
	space: "svg",
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	transform: caseSensitiveTransform,
	properties: {
		about: commaOrSpaceSeparated,
		accentHeight: number,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: number,
		amplitude: number,
		arabicForm: null,
		ascent: number,
		attributeName: null,
		attributeType: null,
		azimuth: number,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: number,
		by: null,
		calcMode: null,
		capHeight: number,
		className: spaceSeparated,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: number,
		diffuseConstant: number,
		direction: null,
		display: null,
		dur: null,
		divisor: number,
		dominantBaseline: null,
		download: boolean,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: number,
		enableBackground: null,
		end: null,
		event: null,
		exponent: number,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: number,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: commaSeparated,
		g2: commaSeparated,
		glyphName: commaSeparated,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: number,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: number,
		horizOriginX: number,
		horizOriginY: number,
		id: null,
		ideographic: number,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: number,
		k: number,
		k1: number,
		k2: number,
		k3: number,
		k4: number,
		kernelMatrix: commaOrSpaceSeparated,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: number,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: number,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: number,
		overlineThickness: number,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: number,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: spaceSeparated,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: number,
		pointsAtY: number,
		pointsAtZ: number,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: commaOrSpaceSeparated,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: commaOrSpaceSeparated,
		rev: commaOrSpaceSeparated,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: commaOrSpaceSeparated,
		requiredFeatures: commaOrSpaceSeparated,
		requiredFonts: commaOrSpaceSeparated,
		requiredFormats: commaOrSpaceSeparated,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: number,
		specularExponent: number,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: number,
		strikethroughThickness: number,
		string: null,
		stroke: null,
		strokeDashArray: commaOrSpaceSeparated,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: number,
		strokeOpacity: number,
		strokeWidth: null,
		style: null,
		surfaceScale: number,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: commaOrSpaceSeparated,
		tabIndex: number,
		tableValues: null,
		target: null,
		targetX: number,
		targetY: number,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: commaOrSpaceSeparated,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: number,
		underlineThickness: number,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: number,
		values: null,
		vAlphabetic: number,
		vMathematical: number,
		vectorEffect: null,
		vHanging: number,
		vIdeographic: number,
		version: null,
		vertAdvY: number,
		vertOriginX: number,
		vertOriginY: number,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: number,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	}
});
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/lib/find.js
/**
* @typedef {import('./util/schema.js').Schema} Schema
*/
var valid = /^data[-\w.:]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;
/**
* @param {Schema} schema
* @param {string} value
* @returns {Info}
*/
function find(schema, value) {
	const normal = normalize(value);
	let prop = value;
	let Type = Info;
	if (normal in schema.normal) return schema.property[schema.normal[normal]];
	if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
		if (value.charAt(4) === "-") {
			const rest = value.slice(5).replace(dash, camelcase);
			prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
		} else {
			const rest = value.slice(4);
			if (!dash.test(rest)) {
				let dashes = rest.replace(cap, kebab);
				if (dashes.charAt(0) !== "-") dashes = "-" + dashes;
				value = "data" + dashes;
			}
		}
		Type = DefinedInfo;
	}
	return new Type(prop, value);
}
/**
* @param {string} $0
* @returns {string}
*/
function kebab($0) {
	return "-" + $0.toLowerCase();
}
/**
* @param {string} $0
* @returns {string}
*/
function camelcase($0) {
	return $0.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/hast-util-to-parse5/node_modules/property-information/index.js
/**
* @typedef {import('./lib/util/info.js').Info} Info
* @typedef {import('./lib/util/schema.js').Schema} Schema
*/
var html = merge([
	xml,
	xlink,
	xmlns,
	aria,
	html$1
], "html");
var svg = merge([
	xml,
	xlink,
	xmlns,
	aria,
	svg$1
], "svg");
//#endregion
//#region node_modules/hast-util-to-parse5/lib/index.js
/**
* @typedef {import('hast').Comment} Comment
* @typedef {import('hast').Doctype} Doctype
* @typedef {import('hast').Element} Element
* @typedef {import('hast').Nodes} Nodes
* @typedef {import('hast').Root} Root
* @typedef {import('hast').RootContent} RootContent
* @typedef {import('hast').Text} Text
*
* @typedef {import('parse5').DefaultTreeAdapterMap['document']} Parse5Document
* @typedef {import('parse5').DefaultTreeAdapterMap['documentFragment']} Parse5Fragment
* @typedef {import('parse5').DefaultTreeAdapterMap['element']} Parse5Element
* @typedef {import('parse5').DefaultTreeAdapterMap['node']} Parse5Nodes
* @typedef {import('parse5').DefaultTreeAdapterMap['documentType']} Parse5Doctype
* @typedef {import('parse5').DefaultTreeAdapterMap['commentNode']} Parse5Comment
* @typedef {import('parse5').DefaultTreeAdapterMap['textNode']} Parse5Text
* @typedef {import('parse5').DefaultTreeAdapterMap['parentNode']} Parse5Parent
* @typedef {import('parse5').Token.Attribute} Parse5Attribute
*
* @typedef {import('property-information').Schema} Schema
*/
/**
* @typedef Options
*   Configuration.
* @property {Space | null | undefined} [space='html']
*   Which space the document is in (default: `'html'`).
*
*   When an `<svg>` element is found in the HTML space, this package already
*   automatically switches to and from the SVG space when entering and exiting
*   it.
*
* @typedef {Exclude<Parse5Nodes, Parse5Document | Parse5Fragment>} Parse5Content
*
* @typedef {'html' | 'svg'} Space
*/
/** @type {Options} */
var emptyOptions = {};
var own = {}.hasOwnProperty;
var one = zwitch("type", { handlers: {
	root: root$1,
	element: element$1,
	text: text$1,
	comment: comment$1,
	doctype: doctype$1
} });
/**
* Transform a hast tree to a `parse5` AST.
*
* @param {Nodes} tree
*   Tree to transform.
* @param {Options | null | undefined} [options]
*   Configuration (optional).
* @returns {Parse5Nodes}
*   `parse5` node.
*/
function toParse5(tree, options) {
	const space = (options || emptyOptions).space;
	return one(tree, space === "svg" ? svg : html);
}
/**
* @param {Root} node
*   Node (hast) to transform.
* @param {Schema} schema
*   Current schema.
* @returns {Parse5Document}
*   Parse5 node.
*/
function root$1(node, schema) {
	/** @type {Parse5Document} */
	const result = {
		nodeName: "#document",
		mode: (node.data || {}).quirksMode ? "quirks" : "no-quirks",
		childNodes: []
	};
	result.childNodes = all$1(node.children, result, schema);
	patch(node, result);
	return result;
}
/**
* @param {Root} node
*   Node (hast) to transform.
* @param {Schema} schema
*   Current schema.
* @returns {Parse5Fragment}
*   Parse5 node.
*/
function fragment(node, schema) {
	/** @type {Parse5Fragment} */
	const result = {
		nodeName: "#document-fragment",
		childNodes: []
	};
	result.childNodes = all$1(node.children, result, schema);
	patch(node, result);
	return result;
}
/**
* @param {Doctype} node
*   Node (hast) to transform.
* @returns {Parse5Doctype}
*   Parse5 node.
*/
function doctype$1(node) {
	/** @type {Parse5Doctype} */
	const result = {
		nodeName: "#documentType",
		name: "html",
		publicId: "",
		systemId: "",
		parentNode: null
	};
	patch(node, result);
	return result;
}
/**
* @param {Text} node
*   Node (hast) to transform.
* @returns {Parse5Text}
*   Parse5 node.
*/
function text$1(node) {
	/** @type {Parse5Text} */
	const result = {
		nodeName: "#text",
		value: node.value,
		parentNode: null
	};
	patch(node, result);
	return result;
}
/**
* @param {Comment} node
*   Node (hast) to transform.
* @returns {Parse5Comment}
*   Parse5 node.
*/
function comment$1(node) {
	/** @type {Parse5Comment} */
	const result = {
		nodeName: "#comment",
		data: node.value,
		parentNode: null
	};
	patch(node, result);
	return result;
}
/**
* @param {Element} node
*   Node (hast) to transform.
* @param {Schema} schema
*   Current schema.
* @returns {Parse5Element}
*   Parse5 node.
*/
function element$1(node, schema) {
	const parentSchema = schema;
	let currentSchema = parentSchema;
	if (node.type === "element" && node.tagName.toLowerCase() === "svg" && parentSchema.space === "html") currentSchema = svg;
	/** @type {Array<Parse5Attribute>} */
	const attrs = [];
	/** @type {string} */
	let prop;
	if (node.properties) {
		for (prop in node.properties) if (prop !== "children" && own.call(node.properties, prop)) {
			const result = createProperty(currentSchema, prop, node.properties[prop]);
			if (result) attrs.push(result);
		}
	}
	const space = currentSchema.space;
	/** @type {Parse5Element} */
	const result = {
		nodeName: node.tagName,
		tagName: node.tagName,
		attrs,
		namespaceURI: webNamespaces[space],
		childNodes: [],
		parentNode: null
	};
	result.childNodes = all$1(node.children, result, currentSchema);
	patch(node, result);
	if (node.tagName === "template" && node.content) result.content = fragment(node.content, currentSchema);
	return result;
}
/**
* Handle a property.
*
* @param {Schema} schema
*   Current schema.
* @param {string} prop
*   Key.
* @param {Array<number | string> | boolean | number | string | null | undefined} value
*   hast property value.
* @returns {Parse5Attribute | undefined}
*   Field for runtime, optional.
*/
function createProperty(schema, prop, value) {
	const info = find(schema, prop);
	if (value === false || value === null || value === void 0 || typeof value === "number" && Number.isNaN(value) || !value && info.boolean) return;
	if (Array.isArray(value)) value = info.commaSeparated ? stringify(value) : stringify$1(value);
	/** @type {Parse5Attribute} */
	const attribute = {
		name: info.attribute,
		value: value === true ? "" : String(value)
	};
	if (info.space && info.space !== "html" && info.space !== "svg") {
		const index = attribute.name.indexOf(":");
		if (index < 0) attribute.prefix = "";
		else {
			attribute.name = attribute.name.slice(index + 1);
			attribute.prefix = info.attribute.slice(0, index);
		}
		attribute.namespace = webNamespaces[info.space];
	}
	return attribute;
}
/**
* Transform all hast nodes.
*
* @param {Array<RootContent>} children
*   List of children.
* @param {Parse5Parent} parentNode
*   `parse5` parent node.
* @param {Schema} schema
*   Current schema.
* @returns {Array<Parse5Content>}
*   Transformed children.
*/
function all$1(children, parentNode, schema) {
	let index = -1;
	/** @type {Array<Parse5Content>} */
	const results = [];
	if (children) while (++index < children.length) {
		/** @type {Parse5Content} */
		const child = one(children[index], schema);
		child.parentNode = parentNode;
		results.push(child);
	}
	return results;
}
/**
* Add position info from `from` to `to`.
*
* @param {Nodes} from
*   hast node.
* @param {Parse5Nodes} to
*   `parse5` node.
* @returns {undefined}
*   Nothing.
*/
function patch(from, to) {
	const position = from.position;
	if (position && position.start && position.end) {
		position.start.offset;
		position.end.offset;
		to.sourceCodeLocation = {
			startLine: position.start.line,
			startCol: position.start.column,
			startOffset: position.start.offset,
			endLine: position.end.line,
			endCol: position.end.column,
			endOffset: position.end.offset
		};
	}
}
//#endregion
//#region node_modules/hast-util-raw/node_modules/unist-util-visit/lib/index.js
/**
* @typedef {import('unist').Node} UnistNode
* @typedef {import('unist').Parent} UnistParent
* @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
*/
/**
* @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
*   Test from `unist-util-is`.
*
*   Note: we have remove and add `undefined`, because otherwise when generating
*   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
*   which doesn’t work when publishing on npm.
*/
/**
* @typedef {(
*   Fn extends (value: any) => value is infer Thing
*   ? Thing
*   : Fallback
* )} Predicate
*   Get the value of a type guard `Fn`.
* @template Fn
*   Value; typically function that is a type guard (such as `(x): x is Y`).
* @template Fallback
*   Value to yield if `Fn` is not a type guard.
*/
/**
* @typedef {(
*   Check extends null | undefined // No test.
*   ? Value
*   : Value extends {type: Check} // String (type) test.
*   ? Value
*   : Value extends Check // Partial test.
*   ? Value
*   : Check extends Function // Function test.
*   ? Predicate<Check, Value> extends Value
*     ? Predicate<Check, Value>
*     : never
*   : never // Some other test?
* )} MatchesOne
*   Check whether a node matches a primitive check in the type system.
* @template Value
*   Value; typically unist `Node`.
* @template Check
*   Value; typically `unist-util-is`-compatible test, but not arrays.
*/
/**
* @typedef {(
*   Check extends Array<any>
*   ? MatchesOne<Value, Check[keyof Check]>
*   : MatchesOne<Value, Check>
* )} Matches
*   Check whether a node matches a check in the type system.
* @template Value
*   Value; typically unist `Node`.
* @template Check
*   Value; typically `unist-util-is`-compatible test.
*/
/**
* @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
*   Number; capped reasonably.
*/
/**
* @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
*   Increment a number in the type system.
* @template {Uint} [I=0]
*   Index.
*/
/**
* @typedef {(
*   Node extends UnistParent
*   ? Node extends {children: Array<infer Children>}
*     ? Child extends Children ? Node : never
*     : never
*   : never
* )} InternalParent
*   Collect nodes that can be parents of `Child`.
* @template {UnistNode} Node
*   All node types in a tree.
* @template {UnistNode} Child
*   Node to search for.
*/
/**
* @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
*   Collect nodes in `Tree` that can be parents of `Child`.
* @template {UnistNode} Tree
*   All node types in a tree.
* @template {UnistNode} Child
*   Node to search for.
*/
/**
* @typedef {(
*   Depth extends Max
*   ? never
*   :
*     | InternalParent<Node, Child>
*     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
* )} InternalAncestor
*   Collect nodes in `Tree` that can be ancestors of `Child`.
* @template {UnistNode} Node
*   All node types in a tree.
* @template {UnistNode} Child
*   Node to search for.
* @template {Uint} [Max=10]
*   Max; searches up to this depth.
* @template {Uint} [Depth=0]
*   Current depth.
*/
/**
* @typedef {(
*   Tree extends UnistParent
*     ? Depth extends Max
*       ? Tree
*       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
*     : Tree
* )} InclusiveDescendant
*   Collect all (inclusive) descendants of `Tree`.
*
*   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
*   > recurse without actually running into an infinite loop, which the
*   > previous version did.
*   >
*   > Practically, a max of `2` is typically enough assuming a `Root` is
*   > passed, but it doesn’t improve performance.
*   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
*   > Using up to `10` doesn’t hurt or help either.
* @template {UnistNode} Tree
*   Tree type.
* @template {Uint} [Max=10]
*   Max; searches up to this depth.
* @template {Uint} [Depth=0]
*   Current depth.
*/
/**
* @callback Visitor
*   Handle a node (matching `test`, if given).
*
*   Visitors are free to transform `node`.
*   They can also transform `parent`.
*
*   Replacing `node` itself, if `SKIP` is not returned, still causes its
*   descendants to be walked (which is a bug).
*
*   When adding or removing previous siblings of `node` (or next siblings, in
*   case of reverse), the `Visitor` should return a new `Index` to specify the
*   sibling to traverse after `node` is traversed.
*   Adding or removing next siblings of `node` (or previous siblings, in case
*   of reverse) is handled as expected without needing to return a new `Index`.
*
*   Removing the children property of `parent` still results in them being
*   traversed.
* @param {Visited} node
*   Found node.
* @param {Visited extends UnistNode ? number | undefined : never} index
*   Index of `node` in `parent`.
* @param {Ancestor extends UnistParent ? Ancestor | undefined : never} parent
*   Parent of `node`.
* @returns {VisitorResult}
*   What to do next.
*
*   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
*   An `Action` is treated as a tuple of `[Action]`.
*
*   Passing a tuple back only makes sense if the `Action` is `SKIP`.
*   When the `Action` is `EXIT`, that action can be returned.
*   When the `Action` is `CONTINUE`, `Index` can be returned.
* @template {UnistNode} [Visited=UnistNode]
*   Visited node type.
* @template {UnistParent} [Ancestor=UnistParent]
*   Ancestor type.
*/
/**
* @typedef {Visitor<Visited, Parent<Ancestor, Visited>>} BuildVisitorFromMatch
*   Build a typed `Visitor` function from a node and all possible parents.
*
*   It will infer which values are passed as `node` and which as `parent`.
* @template {UnistNode} Visited
*   Node type.
* @template {UnistParent} Ancestor
*   Parent type.
*/
/**
* @typedef {(
*   BuildVisitorFromMatch<
*     Matches<Descendant, Check>,
*     Extract<Descendant, UnistParent>
*   >
* )} BuildVisitorFromDescendants
*   Build a typed `Visitor` function from a list of descendants and a test.
*
*   It will infer which values are passed as `node` and which as `parent`.
* @template {UnistNode} Descendant
*   Node type.
* @template {Test} Check
*   Test type.
*/
/**
* @typedef {(
*   BuildVisitorFromDescendants<
*     InclusiveDescendant<Tree>,
*     Check
*   >
* )} BuildVisitor
*   Build a typed `Visitor` function from a tree and a test.
*
*   It will infer which values are passed as `node` and which as `parent`.
* @template {UnistNode} [Tree=UnistNode]
*   Node type.
* @template {Test} [Check=Test]
*   Test type.
*/
/**
* Visit nodes.
*
* This algorithm performs *depth-first* *tree traversal* in *preorder*
* (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
*
* You can choose for which nodes `visitor` is called by passing a `test`.
* For complex tests, you should test yourself in `visitor`, as it will be
* faster and will have improved type information.
*
* Walking the tree is an intensive task.
* Make use of the return values of the visitor when possible.
* Instead of walking a tree multiple times, walk it once, use `unist-util-is`
* to check if a node matches, and then perform different operations.
*
* You can change the tree.
* See `Visitor` for more info.
*
* @overload
* @param {Tree} tree
* @param {Check} check
* @param {BuildVisitor<Tree, Check>} visitor
* @param {boolean | null | undefined} [reverse]
* @returns {undefined}
*
* @overload
* @param {Tree} tree
* @param {BuildVisitor<Tree>} visitor
* @param {boolean | null | undefined} [reverse]
* @returns {undefined}
*
* @param {UnistNode} tree
*   Tree to traverse.
* @param {Visitor | Test} testOrVisitor
*   `unist-util-is`-compatible test (optional, omit to pass a visitor).
* @param {Visitor | boolean | null | undefined} [visitorOrReverse]
*   Handle each node (when test is omitted, pass `reverse`).
* @param {boolean | null | undefined} [maybeReverse=false]
*   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
* @returns {undefined}
*   Nothing.
*
* @template {UnistNode} Tree
*   Node type.
* @template {Test} Check
*   `unist-util-is`-compatible test.
*/
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
	/** @type {boolean | null | undefined} */
	let reverse;
	/** @type {Test} */
	let test;
	/** @type {Visitor} */
	let visitor;
	if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
		test = void 0;
		visitor = testOrVisitor;
		reverse = visitorOrReverse;
	} else {
		test = testOrVisitor;
		visitor = visitorOrReverse;
		reverse = maybeReverse;
	}
	visitParents(tree, test, overload, reverse);
	/**
	* @param {UnistNode} node
	* @param {Array<UnistParent>} parents
	*/
	function overload(node, parents) {
		const parent = parents[parents.length - 1];
		const index = parent ? parent.children.indexOf(node) : void 0;
		return visitor(node, index, parent);
	}
}
//#endregion
//#region node_modules/hast-util-raw/lib/index.js
/**
* @import {Options} from 'hast-util-raw'
* @import {Comment, Doctype, Element, Nodes, RootContent, Root, Text} from 'hast'
* @import {Raw} from 'mdast-util-to-hast'
* @import {DefaultTreeAdapterMap, ParserOptions} from 'parse5'
* @import {Point} from 'unist'
*/
/**
* @typedef State
*   Info passed around about the current state.
* @property {(node: Nodes) => undefined} handle
*   Add a hast node to the parser.
* @property {Options} options
*   User configuration.
* @property {Parser<DefaultTreeAdapterMap>} parser
*   Current parser.
* @property {boolean} stitches
*   Whether there are stitches.
*/
/**
* @typedef Stitch
*   Custom comment-like value we pass through parse5, which contains a
*   replacement node that we’ll swap back in afterwards.
* @property {'comment'} type
*   Node type.
* @property {{stitch: Nodes}} value
*   Replacement value.
*/
var gfmTagfilterExpression = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi;
var knownMdxNames = new Set([
	"mdxFlowExpression",
	"mdxJsxFlowElement",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"mdxjsEsm"
]);
/** @type {ParserOptions<DefaultTreeAdapterMap>} */
var parseOptions = {
	sourceCodeLocationInfo: true,
	scriptingEnabled: false
};
/**
* Pass a hast tree through an HTML parser, which will fix nesting, and turn
* raw nodes into actual nodes.
*
* @param {Nodes} tree
*   Original hast tree to transform.
* @param {Options | null | undefined} [options]
*   Configuration (optional).
* @returns {Nodes}
*   Parsed again tree.
*/
function raw(tree, options) {
	const document = documentMode(tree);
	/** @type {(node: Nodes, state: State) => undefined} */
	const one = zwitch("type", {
		handlers: {
			root,
			element,
			text,
			comment,
			doctype,
			raw: handleRaw
		},
		unknown
	});
	/** @type {State} */
	const state = {
		parser: document ? new Parser(parseOptions) : Parser.getFragmentParser(void 0, parseOptions),
		handle(node) {
			one(node, state);
		},
		stitches: false,
		options: options || {}
	};
	one(tree, state);
	resetTokenizer(state, pointStart());
	const result = fromParse5(document ? state.parser.document : state.parser.getFragment(), { file: state.options.file });
	if (state.stitches) visit(result, "comment", function(node, index, parent) {
		const stitch = node;
		if (stitch.value.stitch && parent && index !== void 0) {
			/** @type {Array<RootContent>} */
			const siblings = parent.children;
			siblings[index] = stitch.value.stitch;
			return index;
		}
	});
	if (result.type === "root" && result.children.length === 1 && result.children[0].type === tree.type) return result.children[0];
	return result;
}
/**
* Transform all nodes
*
* @param {Array<RootContent>} nodes
*   hast content.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function all(nodes, state) {
	let index = -1;
	/* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */
	if (nodes) while (++index < nodes.length) state.handle(nodes[index]);
}
/**
* Transform a root.
*
* @param {Root} node
*   hast root node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function root(node, state) {
	all(node.children, state);
}
/**
* Transform an element.
*
* @param {Element} node
*   hast element node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function element(node, state) {
	startTag(node, state);
	all(node.children, state);
	endTag(node, state);
}
/**
* Transform a text.
*
* @param {Text} node
*   hast text node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function text(node, state) {
	if (state.parser.tokenizer.state > 4) state.parser.tokenizer.state = 0;
	/** @type {Token.CharacterToken} */
	const token = {
		type: TokenType.CHARACTER,
		chars: node.value,
		location: createParse5Location(node)
	};
	resetTokenizer(state, pointStart(node));
	state.parser.currentToken = token;
	state.parser._processToken(state.parser.currentToken);
}
/**
* Transform a doctype.
*
* @param {Doctype} node
*   hast doctype node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function doctype(node, state) {
	/** @type {Token.DoctypeToken} */
	const token = {
		type: TokenType.DOCTYPE,
		name: "html",
		forceQuirks: false,
		publicId: "",
		systemId: "",
		location: createParse5Location(node)
	};
	resetTokenizer(state, pointStart(node));
	state.parser.currentToken = token;
	state.parser._processToken(state.parser.currentToken);
}
/**
* Transform a stitch.
*
* @param {Nodes} node
*   unknown node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function stitch(node, state) {
	state.stitches = true;
	/** @type {Nodes} */
	const clone = cloneWithoutChildren(node);
	if ("children" in node && "children" in clone) clone.children = raw({
		type: "root",
		children: node.children
	}, state.options).children;
	comment({
		type: "comment",
		value: { stitch: clone }
	}, state);
}
/**
* Transform a comment (or stitch).
*
* @param {Comment | Stitch} node
*   hast comment node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function comment(node, state) {
	/** @type {string} */
	const data = node.value;
	/** @type {Token.CommentToken} */
	const token = {
		type: TokenType.COMMENT,
		data,
		location: createParse5Location(node)
	};
	resetTokenizer(state, pointStart(node));
	state.parser.currentToken = token;
	state.parser._processToken(state.parser.currentToken);
}
/**
* Transform a raw node.
*
* @param {Raw} node
*   hast raw node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function handleRaw(node, state) {
	state.parser.tokenizer.preprocessor.html = "";
	state.parser.tokenizer.preprocessor.pos = -1;
	state.parser.tokenizer.preprocessor.lastGapPos = -2;
	state.parser.tokenizer.preprocessor.gapStack = [];
	state.parser.tokenizer.preprocessor.skipNextNewLine = false;
	state.parser.tokenizer.preprocessor.lastChunkWritten = false;
	state.parser.tokenizer.preprocessor.endOfChunkHit = false;
	state.parser.tokenizer.preprocessor.isEol = false;
	setPoint(state, pointStart(node));
	state.parser.tokenizer.write(state.options.tagfilter ? node.value.replace(gfmTagfilterExpression, "&lt;$1$2") : node.value, false);
	state.parser.tokenizer._runParsingLoop();
	/* c8 ignore next 12 -- removed in <https://github.com/inikulin/parse5/pull/897> */
	if (state.parser.tokenizer.state === 72 || state.parser.tokenizer.state === 78) {
		state.parser.tokenizer.preprocessor.lastChunkWritten = true;
		/** @type {number} */
		const cp = state.parser.tokenizer._consume();
		state.parser.tokenizer._callState(cp);
	}
}
/**
* Crash on an unknown node.
*
* @param {unknown} node_
*   unknown node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Never.
*/
function unknown(node_, state) {
	const node = node_;
	if (state.options.passThrough && state.options.passThrough.includes(node.type)) stitch(node, state);
	else {
		let extra = "";
		if (knownMdxNames.has(node.type)) extra = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax";
		throw new Error("Cannot compile `" + node.type + "` node" + extra);
	}
}
/**
* Reset the tokenizer of a parser.
*
* @param {State} state
*   Info passed around about the current state.
* @param {Point | undefined} point
*   Point.
* @returns {undefined}
*   Nothing.
*/
function resetTokenizer(state, point) {
	setPoint(state, point);
	/** @type {Token.CharacterToken} */
	const token = state.parser.tokenizer.currentCharacterToken;
	if (token && token.location) {
		token.location.endLine = state.parser.tokenizer.preprocessor.line;
		token.location.endCol = state.parser.tokenizer.preprocessor.col + 1;
		token.location.endOffset = state.parser.tokenizer.preprocessor.offset + 1;
		state.parser.currentToken = token;
		state.parser._processToken(state.parser.currentToken);
	}
	state.parser.tokenizer.paused = false;
	state.parser.tokenizer.inLoop = false;
	state.parser.tokenizer.active = false;
	state.parser.tokenizer.returnState = TokenizerMode.DATA;
	state.parser.tokenizer.charRefCode = -1;
	state.parser.tokenizer.consumedAfterSnapshot = -1;
	state.parser.tokenizer.currentLocation = null;
	state.parser.tokenizer.currentCharacterToken = null;
	state.parser.tokenizer.currentToken = null;
	state.parser.tokenizer.currentAttr = {
		name: "",
		value: ""
	};
}
/**
* Set current location.
*
* @param {State} state
*   Info passed around about the current state.
* @param {Point | undefined} point
*   Point.
* @returns {undefined}
*   Nothing.
*/
function setPoint(state, point) {
	if (point && point.offset !== void 0) {
		/** @type {Token.Location} */
		const location = {
			startLine: point.line,
			startCol: point.column,
			startOffset: point.offset,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		};
		state.parser.tokenizer.preprocessor.lineStartPos = -point.column + 1;
		state.parser.tokenizer.preprocessor.droppedBufferSize = point.offset;
		state.parser.tokenizer.preprocessor.line = point.line;
		state.parser.tokenizer.currentLocation = location;
	}
}
/**
* Emit a start tag.
*
* @param {Element} node
*   Element.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function startTag(node, state) {
	const tagName = node.tagName.toLowerCase();
	if (state.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
	resetTokenizer(state, pointStart(node));
	const current = state.parser.openElements.current;
	let ns = "namespaceURI" in current ? current.namespaceURI : webNamespaces.html;
	if (ns === webNamespaces.html && tagName === "svg") ns = webNamespaces.svg;
	const result = toParse5({
		...node,
		children: []
	}, { space: ns === webNamespaces.svg ? "svg" : "html" });
	/** @type {Token.TagToken} */
	const tag = {
		type: TokenType.START_TAG,
		tagName,
		tagID: getTagID(tagName),
		selfClosing: false,
		ackSelfClosing: false,
		attrs: "attrs" in result ? result.attrs : [],
		location: createParse5Location(node)
	};
	state.parser.currentToken = tag;
	state.parser._processToken(state.parser.currentToken);
	state.parser.tokenizer.lastStartTagName = tagName;
}
/**
* Emit an end tag.
*
* @param {Element} node
*   Element.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function endTag(node, state) {
	const tagName = node.tagName.toLowerCase();
	if (!state.parser.tokenizer.inForeignNode && htmlVoidElements.includes(tagName)) return;
	if (state.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
	resetTokenizer(state, pointEnd(node));
	/** @type {Token.TagToken} */
	const tag = {
		type: TokenType.END_TAG,
		tagName,
		tagID: getTagID(tagName),
		selfClosing: false,
		ackSelfClosing: false,
		attrs: [],
		location: createParse5Location(node)
	};
	state.parser.currentToken = tag;
	state.parser._processToken(state.parser.currentToken);
	if (tagName === state.parser.tokenizer.lastStartTagName && (state.parser.tokenizer.state === TokenizerMode.RCDATA || state.parser.tokenizer.state === TokenizerMode.RAWTEXT || state.parser.tokenizer.state === TokenizerMode.SCRIPT_DATA)) state.parser.tokenizer.state = TokenizerMode.DATA;
}
/**
* Check if `node` represents a whole document or a fragment.
*
* @param {Nodes} node
*   hast node.
* @returns {boolean}
*   Whether this represents a whole document or a fragment.
*/
function documentMode(node) {
	const head = node.type === "root" ? node.children[0] : node;
	return Boolean(head && (head.type === "doctype" || head.type === "element" && head.tagName.toLowerCase() === "html"));
}
/**
* Get a `parse5` location from a node.
*
* @param {Nodes | Stitch} node
*   hast node.
* @returns {Token.Location}
*   `parse5` location.
*/
function createParse5Location(node) {
	const start = pointStart(node) || {
		line: void 0,
		column: void 0,
		offset: void 0
	};
	const end = pointEnd(node) || {
		line: void 0,
		column: void 0,
		offset: void 0
	};
	return {
		startLine: start.line,
		startCol: start.column,
		startOffset: start.offset,
		endLine: end.line,
		endCol: end.column,
		endOffset: end.offset
	};
}
/**
* @template {Nodes} NodeType
*   Node type.
* @param {NodeType} node
*   Node to clone.
* @returns {NodeType}
*   Cloned node, without children.
*/
function cloneWithoutChildren(node) {
	return "children" in node ? esm_default$1({
		...node,
		children: []
	}) : esm_default$1(node);
}
//#endregion
//#region node_modules/rehype-raw/lib/index.js
/**
* @typedef {import('hast').Root} Root
* @typedef {import('hast-util-raw').Options} RawOptions
* @typedef {import('vfile').VFile} VFile
*/
/**
* @typedef {Omit<RawOptions, 'file'>} Options
*   Configuration.
*/
/**
* Parse the tree (and raw nodes) again, keeping positional info okay.
*
* @param {Options | null | undefined}  [options]
*   Configuration (optional).
* @returns
*   Transform.
*/
function rehypeRaw(options) {
	/**
	* @param {Root} tree
	*   Tree.
	* @param {VFile} file
	*   File.
	* @returns {Root}
	*   New tree.
	*/
	return function(tree, file) {
		return raw(tree, {
			...options,
			file
		});
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/dialog/search.js
var RootContext = (0, import_react.createContext)(null);
var ListContext = (0, import_react.createContext)(null);
var TagsListContext = (0, import_react.createContext)(null);
var PreContext = (0, import_react.createContext)(false);
var mdRenderer = createMarkdownRenderer({
	remarkRehypeOptions: { allowDangerousHtml: true },
	rehypePlugins: [rehypeRaw, rehypeCustomElements]
});
var mdComponents = {
	mark(props) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			...props,
			className: "text-fd-primary underline"
		});
	},
	a: "span",
	p(props) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			...props,
			className: "min-w-0"
		});
	},
	strong(props) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			...props,
			className: "text-fd-accent-foreground font-medium"
		});
	},
	code(props) {
		if ((0, import_react.use)(PreContext)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			...props,
			className: "mask-[linear-gradient(to_bottom,white,white_30px,transparent_80px)]"
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			...props,
			className: "border rounded-md px-px bg-fd-secondary text-fd-secondary-foreground"
		});
	},
	custom({ _tagName = "fragment", children, ...rest }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex max-w-full items-center border p-0.5 rounded-md bg-fd-card text-fd-card-foreground divide-x divide-fd-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "rounded-sm px-0.5 me-1 bg-fd-primary font-medium text-xs text-fd-primary-foreground border-none",
					children: _tagName
				}),
				Object.entries(rest).map(([k, v]) => {
					if (typeof v !== "string") return;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
						className: "truncate text-xs text-fd-muted-foreground px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-fd-card-foreground",
							children: [k, ": "]
						}), v]
					}, k);
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ps-1",
					children
				})
			]
		});
	},
	pre(props) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			...props,
			className: twMerge("flex flex-col border rounded-md my-0.5 p-2 bg-fd-secondary text-fd-secondary-foreground max-h-20 overflow-hidden", props.className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreContext, {
				value: true,
				children: props.children
			})
		});
	}
};
function rehypeCustomElements() {
	return (tree) => {
		visit$1(tree, (node) => {
			if (node.type === "element" && document.createElement(node.tagName) instanceof HTMLUnknownElement) {
				node.properties._tagName = node.tagName;
				node.tagName = "custom";
			}
		});
	};
}
function SearchDialog({ open, onOpenChange, search, onSearchChange, isLoading = false, onSelect: onSelectProp, children }) {
	const router = useRouter();
	const onOpenChangeCallback = (0, import_react.useRef)(onOpenChange);
	onOpenChangeCallback.current = onOpenChange;
	const onSearchChangeCallback = (0, import_react.useRef)(onSearchChange);
	onSearchChangeCallback.current = onSearchChange;
	const onSelect = (item) => {
		if (item.type === "action") item.onSelect();
		else if (item.external) window.open(item.url, "_blank")?.focus();
		else router.push(item.url);
		onOpenChange(false);
		onSelectProp?.(item);
	};
	const onSelectCallback = (0, import_react.useRef)(onSelect);
	onSelectCallback.current = onSelect;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootContext, {
			value: (0, import_react.useMemo)(() => ({
				open,
				search,
				isLoading,
				onOpenChange: (v) => onOpenChangeCallback.current(v),
				onSearchChange: (v) => onSearchChangeCallback.current(v),
				onSelect: (v) => onSelectCallback.current(v)
			}), [
				isLoading,
				open,
				search
			]),
			children
		})
	});
}
function SearchDialogHeader(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("flex flex-row items-center gap-2 p-3", props.className)
	});
}
function SearchDialogInput(props) {
	const { text } = useI18n();
	const { search, onSearchChange } = useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		value: search,
		onChange: (e) => onSearchChange(e.target.value),
		placeholder: text.search,
		className: "w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none"
	});
}
function SearchDialogClose({ children = "ESC", className, ...props }) {
	const { onOpenChange } = useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => onOpenChange(false),
		className: twMerge(buttonVariants({
			color: "outline",
			size: "sm",
			className: "font-mono text-fd-muted-foreground"
		}), className),
		...props,
		children
	});
}
function SearchDialogFooter(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("bg-fd-secondary/50 p-3 empty:hidden", props.className)
	});
}
function SearchDialogOverlay(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		...props,
		className: twMerge("fixed inset-0 z-50 backdrop-blur-xs bg-fd-overlay data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out", props.className)
	});
}
function SearchDialogContent({ children, ...props }) {
	const { text } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		"aria-describedby": void 0,
		...props,
		className: twMerge("fixed left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-1rem)] max-w-screen-sm -translate-x-1/2 rounded-xl border bg-fd-popover text-fd-popover-foreground shadow-2xl shadow-black/50 overflow-hidden data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in", "*:border-b *:has-[+:last-child[data-empty=true]]:border-b-0 *:data-[empty=true]:border-b-0 *:last:border-b-0", props.className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
			className: "hidden",
			children: text.search
		}), children]
	});
}
function SearchDialogList({ items = null, Empty = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "py-12 text-center text-sm text-fd-muted-foreground",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nLabel, { label: "searchNoResult" })
}), Item = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialogListItem, { ...props }), ...props }) {
	const ref = (0, import_react.useRef)(null);
	const { onSelect } = useSearch();
	const [active, setActive] = (0, import_react.useState)(() => items && items.length > 0 ? items[0].id : null);
	const onKey = (0, import_react.useEffectEvent)((e) => {
		if (!items || e.isComposing) return;
		if (e.key === "ArrowDown" || e.key == "ArrowUp") {
			let idx = items.findIndex((item) => item.id === active);
			if (idx === -1) idx = 0;
			else if (e.key === "ArrowDown") idx++;
			else idx--;
			setActive(items.at(idx % items.length)?.id ?? null);
			e.preventDefault();
		}
		if (e.key === "Enter") {
			const selected = items.find((item) => item.id === active);
			if (selected) onSelect(selected);
			e.preventDefault();
		}
	});
	(0, import_react.useEffect)(() => {
		const element = ref.current;
		if (!element) return;
		const observer = new ResizeObserver(() => {
			const viewport = element.firstElementChild;
			element.style.setProperty("--fd-animated-height", `${viewport.clientHeight}px`);
		});
		const viewport = element.firstElementChild;
		if (viewport) observer.observe(viewport);
		window.addEventListener("keydown", onKey);
		return () => {
			observer.disconnect();
			window.removeEventListener("keydown", onKey);
		};
	}, []);
	useOnChange(items, () => {
		if (items && items.length > 0) setActive(items[0].id);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		ref,
		"data-empty": items === null,
		className: twMerge("overflow-hidden h-(--fd-animated-height) transition-[height]", props.className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: twMerge("w-full flex flex-col overflow-y-auto max-h-[460px] p-1", !items && "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListContext, {
				value: (0, import_react.useMemo)(() => ({
					active,
					setActive
				}), [active]),
				children: [items?.length === 0 && Empty(), items?.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: Item({
					item,
					onClick: () => onSelect(item)
				}) }, item.id))]
			})
		})
	});
}
function SearchDialogListItem({ item, className, children, renderMarkdown = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(mdRenderer.Markdown, {
	components: mdComponents,
	children: s
}), renderHighlights: _, ...props }) {
	const { active: activeId, setActive } = useSearchList();
	const active = item.id === activeId;
	if (item.type === "action") children ??= item.node;
	else children ??= /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "inline-flex items-center text-fd-muted-foreground text-xs empty:hidden",
			children: item.breadcrumbs?.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 rtl:rotate-180" }), item] }, i))
		}),
		item.type !== "page" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "none",
			className: "absolute start-3 inset-y-0 w-px bg-fd-border"
		}),
		item.type === "heading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "absolute start-6 top-2.5 size-4 text-fd-muted-foreground" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: twMerge("min-w-0", item.type === "text" && "ps-4", item.type === "heading" && "ps-8", item.type === "page" || item.type === "heading" ? "font-medium" : "text-fd-popover-foreground/80"),
			children: typeof item.content === "string" ? renderMarkdown(item.content) : item.content
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		ref: (0, import_react.useCallback)((element) => {
			if (active && element) e(element, {
				scrollMode: "if-needed",
				block: "nearest",
				boundary: element.parentElement
			});
		}, [active]),
		"aria-selected": active,
		className: twMerge("relative select-none shrink-0 px-2.5 py-2 text-start text-sm overflow-hidden rounded-lg", active && "bg-fd-accent text-fd-accent-foreground", className),
		onPointerMove: () => setActive(item.id),
		...props,
		children
	});
}
function SearchDialogIcon(props) {
	const { isLoading } = useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
		...props,
		className: twMerge("size-5 text-fd-muted-foreground", isLoading && "animate-pulse duration-400", props.className)
	});
}
var itemVariants = cva("rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors", { variants: { active: { true: "bg-fd-accent text-fd-accent-foreground" } } });
function TagsList({ tag, onTagChange, allowClear = false, ...props }) {
	const onTagChangeCallback = (0, import_react.useRef)(onTagChange);
	onTagChangeCallback.current = onTagChange;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("flex items-center gap-1 flex-wrap", props.className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagsListContext, {
			value: (0, import_react.useMemo)(() => ({
				value: tag,
				onValueChange: (v) => onTagChangeCallback.current(v),
				allowClear
			}), [allowClear, tag]),
			children: props.children
		})
	});
}
function TagsListItem({ value, className, ...props }) {
	const { onValueChange, value: selectedValue, allowClear } = useTagsList();
	const selected = value === selectedValue;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"data-active": selected,
		className: twMerge(itemVariants({
			active: selected,
			className
		})),
		onClick: () => onValueChange(selected && allowClear ? void 0 : value),
		tabIndex: -1,
		...props,
		children: props.children
	});
}
function useSearch() {
	const ctx = (0, import_react.use)(RootContext);
	if (!ctx) throw new Error("Missing <SearchDialog />");
	return ctx;
}
function useTagsList() {
	const ctx = (0, import_react.use)(TagsListContext);
	if (!ctx) throw new Error("Missing <TagsList />");
	return ctx;
}
function useSearchList() {
	const ctx = (0, import_react.use)(ListContext);
	if (!ctx) throw new Error("Missing <SearchDialogList />");
	return ctx;
}
//#endregion
//#region node_modules/fumadocs-core/dist/search/client.js
function useDebounce(value, delayMs = 1e3) {
	const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		if (delayMs === 0) return;
		const handler = window.setTimeout(() => {
			setDebouncedValue(value);
		}, delayMs);
		return () => clearTimeout(handler);
	}, [delayMs, value]);
	if (delayMs === 0) return value;
	return debouncedValue;
}
var promiseMap = {};
/**
* Provide a hook to query different official search clients.
*
* Note: it will re-query when its parameters changed, make sure to define `deps` array if you encounter rendering issues.
*/
function useDocsSearch(clientOptions, deps) {
	const { delayMs = 100, allowEmpty = false, ...clientRest } = clientOptions;
	const [search, setSearch] = (0, import_react.useState)("");
	const [results, setResults] = (0, import_react.useState)("empty");
	const [error, setError] = (0, import_react.useState)();
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const debouncedValue = useDebounce(search, delayMs);
	const onStart = (0, import_react.useRef)(void 0);
	let client;
	if ("type" in clientRest) switch (clientRest.type) {
		case "fetch": {
			const { fetchClient } = (0, import_react.use)(promiseMap[clientRest.type] ??= import("./fetch-BvToIBE0.js"));
			client = fetchClient(clientRest);
			break;
		}
		case "algolia": {
			const { algoliaClient } = (0, import_react.use)(promiseMap[clientRest.type] ??= import("./algolia-BU31AjZE.js"));
			client = algoliaClient(clientRest);
			break;
		}
		case "orama-cloud": {
			const { oramaCloudClient } = (0, import_react.use)(promiseMap[clientRest.type] ??= import("./orama-cloud-CgDMQjJU.js"));
			client = oramaCloudClient(clientRest);
			break;
		}
		case "orama-cloud-legacy": {
			const { oramaCloudLegacyClient } = (0, import_react.use)(promiseMap[clientRest.type] ??= import("./orama-cloud-legacy-WE6brxAq.js"));
			client = oramaCloudLegacyClient(clientRest);
			break;
		}
		case "mixedbread": {
			const { mixedbreadClient } = (0, import_react.use)(promiseMap[clientRest.type] ??= import("./mixedbread-CzKlDSV_.js"));
			client = mixedbreadClient(clientRest);
			break;
		}
		case "static": {
			const { oramaStaticClient } = (0, import_react.use)(promiseMap[clientRest.type] ??= import("./orama-static-BhmgIcXw.js"));
			client = oramaStaticClient(clientRest);
			break;
		}
		default: throw new Error("unknown search client");
	}
	else client = clientRest.client;
	useOnChange([deps ?? client.deps, debouncedValue], () => {
		if (onStart.current) {
			onStart.current();
			onStart.current = void 0;
		}
		setIsLoading(true);
		let interrupt = false;
		onStart.current = () => {
			interrupt = true;
		};
		async function run() {
			if (debouncedValue.length === 0 && !allowEmpty) return "empty";
			return client.search(debouncedValue);
		}
		run().then((res) => {
			if (interrupt) return;
			setError(void 0);
			setResults(res);
		}).catch((err) => {
			setError(err);
		}).finally(() => {
			setIsLoading(false);
		});
	});
	return {
		search,
		setSearch,
		query: {
			isLoading,
			data: results,
			error
		}
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/dialog/search-default.js
function DefaultSearchDialog({ defaultTag, tags = [], api, delayMs, type = "fetch", allowClear = false, links = [], footer, ...props }) {
	const { locale } = useI18n();
	const [tag, setTag] = (0, import_react.useState)(defaultTag);
	const { search, setSearch, query } = useDocsSearch(type === "fetch" ? {
		type: "fetch",
		api,
		locale,
		tag,
		delayMs
	} : {
		type: "static",
		from: api,
		locale,
		tag,
		delayMs
	});
	const defaultItems = (0, import_react.useMemo)(() => {
		if (links.length === 0) return null;
		return links.map(([name, link]) => ({
			type: "page",
			id: name,
			content: name,
			url: link
		}));
	}, [links]);
	useOnChange(defaultTag, (v) => {
		setTag(v);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SearchDialog, {
		search,
		onSearchChange: setSearch,
		isLoading: query.isLoading,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialogOverlay, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SearchDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SearchDialogHeader, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialogIcon, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialogInput, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialogClose, {})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialogList, { items: query.data !== "empty" ? query.data : defaultItems })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SearchDialogFooter, { children: [tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagsList, {
				tag,
				onTagChange: setTag,
				allowClear,
				children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagsListItem, {
					value: tag.value,
					children: tag.name
				}, tag.value))
			}), footer] })
		]
	});
}
//#endregion
export { DefaultSearchDialog as default };
