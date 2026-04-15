import { o as __toESM } from "./chunk-D3zDcpJC.js";
import { n as require_react, t as require_react_dom } from "./react-dom-CwY-XDXW.js";
import { n as useDirection, s as Link$1 } from "./dist-BmAKauDC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
import { C as twMerge, S as cva, _ as useComposedRefs, c as useCallbackRef, d as useControllableState, f as useId, g as composeRefs, h as createContextScope, i as Presence, l as Primitive, p as useLayoutEffect2, s as DismissableLayer, u as dispatchDiscreteCustomEvent, v as composeEventHandlers, x as buttonVariants } from "./es2015-LeHT4uEA.js";
import { _ as ChevronDown, c as LinkItem, g as Languages, l as baseSlots, n as baseOptions, r as useIsScrollTop, s as useLinkItems, t as createCollection, u as Link$2 } from "./dist-bniMLlGl.js";
//#region node_modules/fumadocs-ui/dist/layouts/home/slots/container.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function Container(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		id: "nd-home-layout",
		...props,
		className: twMerge("flex flex-1 flex-col [--fd-layout-width:1400px]", props.className)
	});
}
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		previous: value
	});
	return import_react.useMemo(() => {
		if (ref.current.value !== value) {
			ref.current.previous = ref.current.value;
			ref.current.value = value;
		}
		return ref.current.previous;
	}, [value]);
}
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var VISUALLY_HIDDEN_STYLES = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
});
var NAME = "VisuallyHidden";
var VisuallyHidden = import_react.forwardRef((props, forwardedRef) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...props,
		ref: forwardedRef,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...props.style
		}
	});
});
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;
//#endregion
//#region node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var NAVIGATION_MENU_NAME = "NavigationMenu";
var [Collection, useCollection, createCollectionScope] = createCollection(NAVIGATION_MENU_NAME);
var [FocusGroupCollection, useFocusGroupCollection, createFocusGroupCollectionScope] = createCollection(NAVIGATION_MENU_NAME);
var [createNavigationMenuContext, createNavigationMenuScope] = createContextScope(NAVIGATION_MENU_NAME, [createCollectionScope, createFocusGroupCollectionScope]);
var [NavigationMenuProviderImpl, useNavigationMenuContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var [ViewportContentProvider, useViewportContentContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var NavigationMenu$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
	const [navigationMenu, setNavigationMenu] = import_react.useState(null);
	const composedRef = useComposedRefs(forwardedRef, (node) => setNavigationMenu(node));
	const direction = useDirection(dir);
	const openTimerRef = import_react.useRef(0);
	const closeTimerRef = import_react.useRef(0);
	const skipDelayTimerRef = import_react.useRef(0);
	const [isOpenDelayed, setIsOpenDelayed] = import_react.useState(true);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		onChange: (value2) => {
			const isOpen = value2 !== "";
			const hasSkipDelayDuration = skipDelayDuration > 0;
			if (isOpen) {
				window.clearTimeout(skipDelayTimerRef.current);
				if (hasSkipDelayDuration) setIsOpenDelayed(false);
			} else {
				window.clearTimeout(skipDelayTimerRef.current);
				skipDelayTimerRef.current = window.setTimeout(() => setIsOpenDelayed(true), skipDelayDuration);
			}
			onValueChange?.(value2);
		},
		defaultProp: defaultValue ?? "",
		caller: NAVIGATION_MENU_NAME
	});
	const startCloseTimer = import_react.useCallback(() => {
		window.clearTimeout(closeTimerRef.current);
		closeTimerRef.current = window.setTimeout(() => setValue(""), 150);
	}, [setValue]);
	const handleOpen = import_react.useCallback((itemValue) => {
		window.clearTimeout(closeTimerRef.current);
		setValue(itemValue);
	}, [setValue]);
	const handleDelayedOpen = import_react.useCallback((itemValue) => {
		if (value === itemValue) window.clearTimeout(closeTimerRef.current);
		else openTimerRef.current = window.setTimeout(() => {
			window.clearTimeout(closeTimerRef.current);
			setValue(itemValue);
		}, delayDuration);
	}, [
		value,
		setValue,
		delayDuration
	]);
	import_react.useEffect(() => {
		return () => {
			window.clearTimeout(openTimerRef.current);
			window.clearTimeout(closeTimerRef.current);
			window.clearTimeout(skipDelayTimerRef.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuProvider, {
		scope: __scopeNavigationMenu,
		isRootMenu: true,
		value,
		dir: direction,
		orientation,
		rootNavigationMenu: navigationMenu,
		onTriggerEnter: (itemValue) => {
			window.clearTimeout(openTimerRef.current);
			if (isOpenDelayed) handleDelayedOpen(itemValue);
			else handleOpen(itemValue);
		},
		onTriggerLeave: () => {
			window.clearTimeout(openTimerRef.current);
			startCloseTimer();
		},
		onContentEnter: () => window.clearTimeout(closeTimerRef.current),
		onContentLeave: startCloseTimer,
		onItemSelect: (itemValue) => {
			setValue((prevValue) => prevValue === itemValue ? "" : itemValue);
		},
		onItemDismiss: () => setValue(""),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.nav, {
			"aria-label": "Main",
			"data-orientation": orientation,
			dir: direction,
			...NavigationMenuProps,
			ref: composedRef
		})
	});
});
NavigationMenu$1.displayName = NAVIGATION_MENU_NAME;
var SUB_NAME = "NavigationMenuSub";
var NavigationMenuSub = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", ...subProps } = props;
	const context = useNavigationMenuContext(SUB_NAME, __scopeNavigationMenu);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		onChange: onValueChange,
		defaultProp: defaultValue ?? "",
		caller: SUB_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuProvider, {
		scope: __scopeNavigationMenu,
		isRootMenu: false,
		value,
		dir: context.dir,
		orientation,
		rootNavigationMenu: context.rootNavigationMenu,
		onTriggerEnter: (itemValue) => setValue(itemValue),
		onItemSelect: (itemValue) => setValue(itemValue),
		onItemDismiss: () => setValue(""),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-orientation": orientation,
			...subProps,
			ref: forwardedRef
		})
	});
});
NavigationMenuSub.displayName = SUB_NAME;
var NavigationMenuProvider = (props) => {
	const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
	const [viewport, setViewport] = import_react.useState(null);
	const [viewportContent, setViewportContent] = import_react.useState(/* @__PURE__ */ new Map());
	const [indicatorTrack, setIndicatorTrack] = import_react.useState(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuProviderImpl, {
		scope,
		isRootMenu,
		rootNavigationMenu,
		value,
		previousValue: usePrevious(value),
		baseId: useId(),
		dir,
		orientation,
		viewport,
		onViewportChange: setViewport,
		indicatorTrack,
		onIndicatorTrackChange: setIndicatorTrack,
		onTriggerEnter: useCallbackRef(onTriggerEnter),
		onTriggerLeave: useCallbackRef(onTriggerLeave),
		onContentEnter: useCallbackRef(onContentEnter),
		onContentLeave: useCallbackRef(onContentLeave),
		onItemSelect: useCallbackRef(onItemSelect),
		onItemDismiss: useCallbackRef(onItemDismiss),
		onViewportContentChange: import_react.useCallback((contentValue, contentData) => {
			setViewportContent((prevContent) => {
				prevContent.set(contentValue, contentData);
				return new Map(prevContent);
			});
		}, []),
		onViewportContentRemove: import_react.useCallback((contentValue) => {
			setViewportContent((prevContent) => {
				if (!prevContent.has(contentValue)) return prevContent;
				prevContent.delete(contentValue);
				return new Map(prevContent);
			});
		}, []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
			scope,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewportContentProvider, {
				scope,
				items: viewportContent,
				children
			})
		})
	});
};
var LIST_NAME = "NavigationMenuList";
var NavigationMenuList$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, ...listProps } = props;
	const context = useNavigationMenuContext(LIST_NAME, __scopeNavigationMenu);
	const list = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.ul, {
		"data-orientation": context.orientation,
		...listProps,
		ref: forwardedRef
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		style: { position: "relative" },
		ref: context.onIndicatorTrackChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
			scope: __scopeNavigationMenu,
			children: context.isRootMenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGroup, {
				asChild: true,
				children: list
			}) : list
		})
	});
});
NavigationMenuList$1.displayName = LIST_NAME;
var ITEM_NAME = "NavigationMenuItem";
var [NavigationMenuItemContextProvider, useNavigationMenuItemContext] = createNavigationMenuContext(ITEM_NAME);
var NavigationMenuItem$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
	const autoValue = useId();
	const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
	const contentRef = import_react.useRef(null);
	const triggerRef = import_react.useRef(null);
	const focusProxyRef = import_react.useRef(null);
	const restoreContentTabOrderRef = import_react.useRef(() => {});
	const wasEscapeCloseRef = import_react.useRef(false);
	const handleContentEntry = import_react.useCallback((side = "start") => {
		if (contentRef.current) {
			restoreContentTabOrderRef.current();
			const candidates = getTabbableCandidates(contentRef.current);
			if (candidates.length) focusFirst(side === "start" ? candidates : candidates.reverse());
		}
	}, []);
	const handleContentExit = import_react.useCallback(() => {
		if (contentRef.current) {
			const candidates = getTabbableCandidates(contentRef.current);
			if (candidates.length) restoreContentTabOrderRef.current = removeFromTabOrder(candidates);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuItemContextProvider, {
		scope: __scopeNavigationMenu,
		value,
		triggerRef,
		contentRef,
		focusProxyRef,
		wasEscapeCloseRef,
		onEntryKeyDown: handleContentEntry,
		onFocusProxyEnter: handleContentEntry,
		onRootContentClose: handleContentExit,
		onContentFocusOutside: handleContentExit,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.li, {
			...itemProps,
			ref: forwardedRef
		})
	});
});
NavigationMenuItem$1.displayName = ITEM_NAME;
var TRIGGER_NAME = "NavigationMenuTrigger";
var NavigationMenuTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
	const context = useNavigationMenuContext(TRIGGER_NAME, props.__scopeNavigationMenu);
	const itemContext = useNavigationMenuItemContext(TRIGGER_NAME, props.__scopeNavigationMenu);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(ref, itemContext.triggerRef, forwardedRef);
	const triggerId = makeTriggerId(context.baseId, itemContext.value);
	const contentId = makeContentId(context.baseId, itemContext.value);
	const hasPointerMoveOpenedRef = import_react.useRef(false);
	const wasClickCloseRef = import_react.useRef(false);
	const open = itemContext.value === context.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
		scope: __scopeNavigationMenu,
		value: itemContext.value,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGroupItem, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
				id: triggerId,
				disabled,
				"data-disabled": disabled ? "" : void 0,
				"data-state": getOpenState(open),
				"aria-expanded": open,
				"aria-controls": contentId,
				...triggerProps,
				ref: composedRefs,
				onPointerEnter: composeEventHandlers(props.onPointerEnter, () => {
					wasClickCloseRef.current = false;
					itemContext.wasEscapeCloseRef.current = false;
				}),
				onPointerMove: composeEventHandlers(props.onPointerMove, whenMouse(() => {
					if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current) return;
					context.onTriggerEnter(itemContext.value);
					hasPointerMoveOpenedRef.current = true;
				})),
				onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse(() => {
					if (disabled) return;
					context.onTriggerLeave();
					hasPointerMoveOpenedRef.current = false;
				})),
				onClick: composeEventHandlers(props.onClick, () => {
					context.onItemSelect(itemContext.value);
					wasClickCloseRef.current = open;
				}),
				onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
					const entryKey = {
						horizontal: "ArrowDown",
						vertical: context.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
					}[context.orientation];
					if (open && event.key === entryKey) {
						itemContext.onEntryKeyDown();
						event.preventDefault();
					}
				})
			})
		})
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"aria-hidden": true,
		tabIndex: 0,
		ref: itemContext.focusProxyRef,
		onFocus: (event) => {
			const content = itemContext.contentRef.current;
			const prevFocusedElement = event.relatedTarget;
			const wasTriggerFocused = prevFocusedElement === ref.current;
			const wasFocusFromContent = content?.contains(prevFocusedElement);
			if (wasTriggerFocused || !wasFocusFromContent) itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
		}
	}), context.viewport && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-owns": contentId })] })] });
});
NavigationMenuTrigger$1.displayName = TRIGGER_NAME;
var LINK_NAME = "NavigationMenuLink";
var LINK_SELECT = "navigationMenu.linkSelect";
var NavigationMenuLink$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGroupItem, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.a, {
			"data-active": active ? "" : void 0,
			"aria-current": active ? "page" : void 0,
			...linkProps,
			ref: forwardedRef,
			onClick: composeEventHandlers(props.onClick, (event) => {
				const target = event.target;
				const linkSelectEvent = new CustomEvent(LINK_SELECT, {
					bubbles: true,
					cancelable: true
				});
				target.addEventListener(LINK_SELECT, (event2) => onSelect?.(event2), { once: true });
				dispatchDiscreteCustomEvent(target, linkSelectEvent);
				if (!linkSelectEvent.defaultPrevented && !event.metaKey) dispatchDiscreteCustomEvent(target, new CustomEvent(ROOT_CONTENT_DISMISS, {
					bubbles: true,
					cancelable: true
				}));
			}, { checkForDefaultPrevented: false })
		})
	});
});
NavigationMenuLink$1.displayName = LINK_NAME;
var INDICATOR_NAME = "NavigationMenuIndicator";
var NavigationMenuIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...indicatorProps } = props;
	const context = useNavigationMenuContext(INDICATOR_NAME, props.__scopeNavigationMenu);
	const isVisible = Boolean(context.value);
	return context.indicatorTrack ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isVisible,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuIndicatorImpl, {
			...indicatorProps,
			ref: forwardedRef
		})
	}), context.indicatorTrack) : null;
});
NavigationMenuIndicator.displayName = INDICATOR_NAME;
var NavigationMenuIndicatorImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, ...indicatorProps } = props;
	const context = useNavigationMenuContext(INDICATOR_NAME, __scopeNavigationMenu);
	const getItems = useCollection(__scopeNavigationMenu);
	const [activeTrigger, setActiveTrigger] = import_react.useState(null);
	const [position, setPosition] = import_react.useState(null);
	const isHorizontal = context.orientation === "horizontal";
	const isVisible = Boolean(context.value);
	import_react.useEffect(() => {
		const triggerNode = getItems().find((item) => item.value === context.value)?.ref.current;
		if (triggerNode) setActiveTrigger(triggerNode);
	}, [getItems, context.value]);
	const handlePositionChange = () => {
		if (activeTrigger) setPosition({
			size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
			offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
		});
	};
	useResizeObserver(activeTrigger, handlePositionChange);
	useResizeObserver(context.indicatorTrack, handlePositionChange);
	return position ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"aria-hidden": true,
		"data-state": isVisible ? "visible" : "hidden",
		"data-orientation": context.orientation,
		...indicatorProps,
		ref: forwardedRef,
		style: {
			position: "absolute",
			...isHorizontal ? {
				left: 0,
				width: position.size + "px",
				transform: `translateX(${position.offset}px)`
			} : {
				top: 0,
				height: position.size + "px",
				transform: `translateY(${position.offset}px)`
			},
			...indicatorProps.style
		}
	}) : null;
});
var CONTENT_NAME = "NavigationMenuContent";
var NavigationMenuContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...contentProps } = props;
	const context = useNavigationMenuContext(CONTENT_NAME, props.__scopeNavigationMenu);
	const itemContext = useNavigationMenuItemContext(CONTENT_NAME, props.__scopeNavigationMenu);
	const composedRefs = useComposedRefs(itemContext.contentRef, forwardedRef);
	const open = itemContext.value === context.value;
	const commonProps = {
		value: itemContext.value,
		triggerRef: itemContext.triggerRef,
		focusProxyRef: itemContext.focusProxyRef,
		wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
		onContentFocusOutside: itemContext.onContentFocusOutside,
		onRootContentClose: itemContext.onRootContentClose,
		...contentProps
	};
	return !context.viewport ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuContentImpl, {
			"data-state": getOpenState(open),
			...commonProps,
			ref: composedRefs,
			onPointerEnter: composeEventHandlers(props.onPointerEnter, context.onContentEnter),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse(context.onContentLeave)),
			style: {
				pointerEvents: !open && context.isRootMenu ? "none" : void 0,
				...commonProps.style
			}
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewportContentMounter, {
		forceMount,
		...commonProps,
		ref: composedRefs
	});
});
NavigationMenuContent$1.displayName = CONTENT_NAME;
var ViewportContentMounter = import_react.forwardRef((props, forwardedRef) => {
	const { onViewportContentChange, onViewportContentRemove } = useNavigationMenuContext(CONTENT_NAME, props.__scopeNavigationMenu);
	useLayoutEffect2(() => {
		onViewportContentChange(props.value, {
			ref: forwardedRef,
			...props
		});
	}, [
		props,
		forwardedRef,
		onViewportContentChange
	]);
	useLayoutEffect2(() => {
		return () => onViewportContentRemove(props.value);
	}, [props.value, onViewportContentRemove]);
	return null;
});
var ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var NavigationMenuContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
	const context = useNavigationMenuContext(CONTENT_NAME, __scopeNavigationMenu);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(ref, forwardedRef);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const getItems = useCollection(__scopeNavigationMenu);
	const prevMotionAttributeRef = import_react.useRef(null);
	const { onItemDismiss } = context;
	import_react.useEffect(() => {
		const content = ref.current;
		if (context.isRootMenu && content) {
			const handleClose = () => {
				onItemDismiss();
				onRootContentClose();
				if (content.contains(document.activeElement)) triggerRef.current?.focus();
			};
			content.addEventListener(ROOT_CONTENT_DISMISS, handleClose);
			return () => content.removeEventListener(ROOT_CONTENT_DISMISS, handleClose);
		}
	}, [
		context.isRootMenu,
		props.value,
		triggerRef,
		onItemDismiss,
		onRootContentClose
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGroup, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			id: contentId,
			"aria-labelledby": triggerId,
			"data-motion": import_react.useMemo(() => {
				const values = getItems().map((item) => item.value);
				if (context.dir === "rtl") values.reverse();
				const index = values.indexOf(context.value);
				const prevIndex = values.indexOf(context.previousValue);
				const isSelected = value === context.value;
				const wasSelected = prevIndex === values.indexOf(value);
				if (!isSelected && !wasSelected) return prevMotionAttributeRef.current;
				const attribute = (() => {
					if (index !== prevIndex) {
						if (isSelected && prevIndex !== -1) return index > prevIndex ? "from-end" : "from-start";
						if (wasSelected && index !== -1) return index > prevIndex ? "to-start" : "to-end";
					}
					return null;
				})();
				prevMotionAttributeRef.current = attribute;
				return attribute;
			}, [
				context.previousValue,
				context.value,
				context.dir,
				getItems,
				value
			]),
			"data-orientation": context.orientation,
			...contentProps,
			ref: composedRefs,
			disableOutsidePointerEvents: false,
			onDismiss: () => {
				const rootContentDismissEvent = new Event(ROOT_CONTENT_DISMISS, {
					bubbles: true,
					cancelable: true
				});
				ref.current?.dispatchEvent(rootContentDismissEvent);
			},
			onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
				onContentFocusOutside();
				const target = event.target;
				if (context.rootNavigationMenu?.contains(target)) event.preventDefault();
			}),
			onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
				const target = event.target;
				const isTrigger = getItems().some((item) => item.ref.current?.contains(target));
				const isRootViewport = context.isRootMenu && context.viewport?.contains(target);
				if (isTrigger || isRootViewport || !context.isRootMenu) event.preventDefault();
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
				if (event.key === "Tab" && !isMetaKey) {
					const candidates = getTabbableCandidates(event.currentTarget);
					const focusedElement = document.activeElement;
					const index = candidates.findIndex((candidate) => candidate === focusedElement);
					if (focusFirst(event.shiftKey ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length))) event.preventDefault();
					else focusProxyRef.current?.focus();
				}
			}),
			onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (_event) => {
				wasEscapeCloseRef.current = true;
			})
		})
	});
});
var VIEWPORT_NAME = "NavigationMenuViewport";
var NavigationMenuViewport$1 = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...viewportProps } = props;
	const context = useNavigationMenuContext(VIEWPORT_NAME, props.__scopeNavigationMenu);
	const open = Boolean(context.value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuViewportImpl, {
			...viewportProps,
			ref: forwardedRef
		})
	});
});
NavigationMenuViewport$1.displayName = VIEWPORT_NAME;
var NavigationMenuViewportImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, children, ...viewportImplProps } = props;
	const context = useNavigationMenuContext(VIEWPORT_NAME, __scopeNavigationMenu);
	const composedRefs = useComposedRefs(forwardedRef, context.onViewportChange);
	const viewportContentContext = useViewportContentContext(CONTENT_NAME, props.__scopeNavigationMenu);
	const [size, setSize] = import_react.useState(null);
	const [content, setContent] = import_react.useState(null);
	const viewportWidth = size ? size?.width + "px" : void 0;
	const viewportHeight = size ? size?.height + "px" : void 0;
	const open = Boolean(context.value);
	const activeContentValue = open ? context.value : context.previousValue;
	const handleSizeChange = () => {
		if (content) setSize({
			width: content.offsetWidth,
			height: content.offsetHeight
		});
	};
	useResizeObserver(content, handleSizeChange);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getOpenState(open),
		"data-orientation": context.orientation,
		...viewportImplProps,
		ref: composedRefs,
		style: {
			pointerEvents: !open && context.isRootMenu ? "none" : void 0,
			["--radix-navigation-menu-viewport-width"]: viewportWidth,
			["--radix-navigation-menu-viewport-height"]: viewportHeight,
			...viewportImplProps.style
		},
		onPointerEnter: composeEventHandlers(props.onPointerEnter, context.onContentEnter),
		onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse(context.onContentLeave)),
		children: Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props2 }]) => {
			const isActive = activeContentValue === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
				present: forceMount || isActive,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuContentImpl, {
					...props2,
					ref: composeRefs(ref, (node) => {
						if (isActive && node) setContent(node);
					})
				})
			}, value);
		})
	});
});
var FOCUS_GROUP_NAME = "FocusGroup";
var FocusGroup = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, ...groupProps } = props;
	const context = useNavigationMenuContext(FOCUS_GROUP_NAME, __scopeNavigationMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGroupCollection.Provider, {
		scope: __scopeNavigationMenu,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGroupCollection.Slot, {
			scope: __scopeNavigationMenu,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				dir: context.dir,
				...groupProps,
				ref: forwardedRef
			})
		})
	});
});
var ARROW_KEYS = [
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown"
];
var FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var FocusGroupItem = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeNavigationMenu, ...groupProps } = props;
	const getItems = useFocusGroupCollection(__scopeNavigationMenu);
	const context = useNavigationMenuContext(FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGroupCollection.ItemSlot, {
		scope: __scopeNavigationMenu,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			...groupProps,
			ref: forwardedRef,
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if ([
					"Home",
					"End",
					...ARROW_KEYS
				].includes(event.key)) {
					let candidateNodes = getItems().map((item) => item.ref.current);
					if ([
						context.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
						"ArrowUp",
						"End"
					].includes(event.key)) candidateNodes.reverse();
					if (ARROW_KEYS.includes(event.key)) {
						const currentIndex = candidateNodes.indexOf(event.currentTarget);
						candidateNodes = candidateNodes.slice(currentIndex + 1);
					}
					setTimeout(() => focusFirst(candidateNodes));
					event.preventDefault();
				}
			})
		})
	});
});
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
function focusFirst(candidates) {
	const previouslyFocusedElement = document.activeElement;
	return candidates.some((candidate) => {
		if (candidate === previouslyFocusedElement) return true;
		candidate.focus();
		return document.activeElement !== previouslyFocusedElement;
	});
}
function removeFromTabOrder(candidates) {
	candidates.forEach((candidate) => {
		candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
		candidate.setAttribute("tabindex", "-1");
	});
	return () => {
		candidates.forEach((candidate) => {
			const prevTabIndex = candidate.dataset.tabindex;
			candidate.setAttribute("tabindex", prevTabIndex);
		});
	};
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
function getOpenState(open) {
	return open ? "open" : "closed";
}
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
function whenMouse(handler) {
	return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root2 = NavigationMenu$1;
var List = NavigationMenuList$1;
var Trigger = NavigationMenuTrigger$1;
var Link = NavigationMenuLink$1;
var Content = NavigationMenuContent$1;
var Viewport = NavigationMenuViewport$1;
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/navigation-menu.js
var NavigationMenu = Root2;
var NavigationMenuList = List;
function NavigationMenuItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuItem$1, {
		className: twMerge("list-none", className),
		...props,
		children
	});
}
function NavigationMenuTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		className: twMerge("data-[state=open]:bg-fd-accent/50", className),
		...props,
		children
	});
}
function NavigationMenuContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		className: twMerge("absolute inset-x-0 top-0 overflow-auto fd-scroll-container max-h-[80svh] data-[motion=from-end]:animate-fd-enterFromRight data-[motion=from-start]:animate-fd-enterFromLeft data-[motion=to-end]:animate-fd-exitToRight data-[motion=to-start]:animate-fd-exitToLeft", className),
		...props
	});
}
var NavigationMenuLink = Link;
function NavigationMenuViewport({ className, ref, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "flex w-full justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			...props,
			className: twMerge("relative h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-fd-nav-menu-out data-[state=open]:animate-fd-nav-menu-in", className)
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/home/slots/header.js
var navItemVariants = cva("[&_svg]:size-4", {
	variants: { variant: {
		main: "inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary",
		button: buttonVariants({
			color: "secondary",
			className: "gap-1.5"
		}),
		icon: buttonVariants({
			color: "ghost",
			size: "icon"
		})
	} },
	defaultVariants: { variant: "main" }
});
function Header(props) {
	const { navItems, menuItems, slots, props: { nav } } = useHomeLayout();
	if (nav?.component) return nav.component;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HeaderNavigationMenu, {
		transparentMode: nav?.transparentMode,
		...props,
		children: [
			slots.navTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.navTitle, { className: "inline-flex items-center gap-2.5 font-semibold" }),
			nav?.children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-row items-center gap-2 px-6 max-sm:hidden",
				children: navItems.filter((item) => !isSecondary(item)).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLinkItem, {
					item,
					className: "text-sm"
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-row items-center justify-end gap-1.5 flex-1 max-lg:hidden",
				children: [
					slots.searchTrigger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.searchTrigger.full, {
						hideIfDisabled: true,
						className: "w-full rounded-full ps-2.5 max-w-[240px]"
					}),
					slots.themeSwitch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.themeSwitch, {}),
					slots.languageSelect && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.languageSelect.root, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-5" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-row gap-2 items-center empty:hidden",
						children: navItems.filter(isSecondary).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLinkItem, {
							className: twMerge(item.type === "icon" && "-mx-1 first:ms-0 last:me-0"),
							item
						}, i))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-row items-center ms-auto -me-1.5 lg:hidden",
				children: [slots.searchTrigger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.searchTrigger.sm, {
					hideIfDisabled: true,
					className: "p-2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuItem, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuTrigger, {
						"aria-label": "Toggle Menu",
						className: twMerge(buttonVariants({
							size: "icon",
							color: "ghost",
							className: "group [&_svg]:size-5.5"
						})),
						onPointerMove: nav?.enableHoverToOpen ? void 0 : (e) => e.preventDefault(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "transition-transform duration-300 group-data-[state=open]:rotate-180" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NavigationMenuContent, {
						className: "flex flex-col p-4 sm:flex-row sm:items-center sm:justify-end",
						children: [menuItems.filter((item) => !isSecondary(item)).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavigationMenuLinkItem, {
							item,
							className: "sm:hidden"
						}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "-ms-1.5 flex flex-row items-center gap-2 max-sm:mt-2",
							children: [
								menuItems.filter(isSecondary).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavigationMenuLinkItem, {
									item,
									className: twMerge(item.type === "icon" && "-mx-1 first:ms-0")
								}, i)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									role: "separator",
									className: "flex-1"
								}),
								slots.languageSelect && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(slots.languageSelect.root, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-5" }),
									slots.languageSelect.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.languageSelect.text, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3 text-fd-muted-foreground" })
								] }),
								slots.themeSwitch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.themeSwitch, {})
							]
						})]
					})] })
				})]
			})
		]
	});
}
function isSecondary(item) {
	if ("secondary" in item && item.secondary != null) return item.secondary;
	return item.type === "icon";
}
function HeaderNavigationMenu({ transparentMode = "none", ...props }) {
	const [value, setValue] = (0, import_react.useState)("");
	const isTop = useIsScrollTop({ enabled: transparentMode === "top" }) ?? true;
	const isTransparent = transparentMode === "top" ? isTop : transparentMode === "always";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenu, {
		value,
		onValueChange: setValue,
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			id: "nd-nav",
			...props,
			className: twMerge("sticky h-14 top-0 z-40", props.className),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: twMerge("backdrop-blur-lg border-b transition-colors *:mx-auto *:max-w-(--fd-layout-width)", value.length > 0 && "max-lg:shadow-lg max-lg:rounded-b-2xl", (!isTransparent || value.length > 0) && "bg-fd-background/80"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuList, {
					className: "flex h-14 w-full items-center px-4",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: props.children })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuViewport, {})]
			})
		})
	});
}
function NavigationMenuLinkItem({ item, ...props }) {
	if (item.type === "custom") return item.children;
	if (item.type === "menu") {
		const children = item.items.map((child, j) => {
			if (child.type === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: child.children }, j);
			const { banner = child.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4",
				children: child.icon
			}) : null, ...rest } = child.menu ?? {};
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLink, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
					href: child.url,
					external: child.external,
					...rest,
					className: twMerge("flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground", rest.className),
					children: rest.children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						banner,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-medium",
							children: child.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fd-muted-foreground empty:hidden",
							children: child.description
						})
					] })
				})
			}, `${j}-${child.url}`);
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NavigationMenuItem, {
			...props,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuTrigger, {
				className: twMerge(navItemVariants(), "rounded-md"),
				children: item.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
					href: item.url,
					external: item.external,
					children: item.text
				}) : item.text
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuContent, {
				className: "grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-3",
				children
			})]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuItem, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLink, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkItem, {
				item,
				"aria-label": item.type === "icon" ? item.label : void 0,
				className: twMerge(navItemVariants({ variant: item.type })),
				children: item.type === "icon" ? item.icon : item.text
			})
		})
	});
}
function MobileNavigationMenuLinkItem({ item, ...props }) {
	if (item.type === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: twMerge("grid", props.className),
		children: item.children
	});
	if (item.type === "menu") {
		const header = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [item.icon, item.text] });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: twMerge("mb-4 flex flex-col", props.className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-sm text-fd-muted-foreground",
				children: item.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLink, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
						href: item.url,
						external: item.external,
						children: header
					})
				}) : header
			}), item.items.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavigationMenuLinkItem, { item: child }, i))]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuLink, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LinkItem, {
			item,
			className: twMerge({
				main: "inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4",
				icon: buttonVariants({
					size: "icon",
					color: "ghost"
				}),
				button: buttonVariants({
					color: "secondary",
					className: "gap-1.5 [&_svg]:size-4"
				})
			}[item.type ?? "main"], props.className),
			"aria-label": item.type === "icon" ? item.label : void 0,
			children: [item.icon, item.type === "icon" ? void 0 : item.text]
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/home/index.js
var LayoutContext = (0, import_react.createContext)(null);
function useHomeLayout() {
	const context = (0, import_react.use)(LayoutContext);
	if (!context) throw new Error("Please use this component under <HomeLayout /> (`fumadocs-ui/layouts/home`).");
	return context;
}
var { useProvider } = baseSlots({ useProps() {
	return useHomeLayout().props;
} });
function HomeLayout(props) {
	const { nav: { enabled: navEnabled = true } = {}, slots: defaultSlots, children, i18n: _i18n, githubUrl: _githubUrl, links: _links, themeSwitch: _themeSwitch, searchToggle: _searchToggle, ...rest } = props;
	const { baseSlots, baseProps } = useProvider(props);
	const linkItems = useLinkItems(props);
	const slots = {
		...baseSlots,
		header: defaultSlots?.header ?? Header,
		container: defaultSlots?.container ?? Container
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutContext, {
		value: {
			props: baseProps,
			slots,
			...linkItems
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(slots.container, {
			...rest,
			children: [navEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slots.header, {}), children]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeLayout, {
		...baseOptions(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex flex-col w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "min-h-[calc(100dvh-3.5rem)] flex flex-col items-center justify-center px-4 border-b border-fd-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-3xl flex flex-col gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium tracking-[0.1em] uppercase text-fd-muted-foreground",
								"aria-label": "Categoria",
								children: "Google Sheets · Banco de Dados · Aeronáutica"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-5xl sm:text-7xl font-bold leading-none tracking-[-0.04em] text-fd-foreground",
								children: [
									"Handbook",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"de Planilhas"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-lg text-base text-fd-muted-foreground leading-relaxed",
								children: "Referência prática sobre Google Sheets, Query, funções avançadas e conceitos de banco de dados — focado no contexto do Corpo de Cadetes da Aeronáutica."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
									to: "/docs/$",
									params: { _splat: "intro" },
									className: "inline-flex items-center gap-2 px-5 py-2.5 border border-fd-foreground bg-fd-foreground text-fd-background font-medium text-sm hover:bg-transparent hover:text-fd-foreground transition-colors cursor-pointer",
									children: ["Começar a ler", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "14",
										height: "14",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
									to: "/docs/$",
									params: { _splat: "funcoes/query" },
									className: "inline-flex items-center gap-2 px-5 py-2.5 border border-fd-border bg-fd-background text-fd-foreground font-medium text-sm hover:border-fd-foreground transition-colors cursor-pointer",
									children: "Função QUERY"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-16 px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-3xl mx-auto flex flex-col gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium tracking-[0.1em] uppercase text-fd-muted-foreground",
								children: "Conteúdo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold tracking-[-0.02em] text-fd-foreground",
								children: "O que você vai encontrar"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-px border border-fd-border",
							children: SECTIONS.map(({ slug, title, description, tag }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
								to: "/docs/$",
								params: { _splat: slug },
								className: "group flex flex-col gap-3 p-6 bg-fd-background hover:bg-fd-accent transition-colors cursor-pointer border-b border-r border-fd-border last:border-b-0 [&:nth-child(even)]:border-r-0 sm:[&:nth-child(n)]:border-b sm:last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-medium tracking-[0.08em] uppercase text-fd-muted-foreground",
										children: tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-semibold tracking-[-0.01em] text-fd-foreground",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-fd-muted-foreground leading-relaxed",
										children: description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-auto flex items-center gap-1 text-xs font-medium text-fd-foreground opacity-0 group-hover:opacity-100 transition-opacity",
										children: ["Ler", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											xmlns: "http://www.w3.org/2000/svg",
											width: "12",
											height: "12",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" })
										})]
									})
								]
							}, slug))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-auto border-t border-fd-border px-4 py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl mx-auto flex items-center justify-between text-xs text-fd-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Handbook de Planilhas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Corpo de Cadetes da Aeronáutica · ", (/* @__PURE__ */ new Date()).getFullYear()] })]
					})
				})
			]
		})
	});
}
var SECTIONS = [
	{
		slug: "intro",
		title: "Introdução a Planilhas",
		description: "Motivação, documentação e primeiros passos com Google Sheets.",
		tag: "Fundamentos"
	},
	{
		slug: "funcoes/query",
		title: "Função QUERY",
		description: "A função mais poderosa do Sheets: estrutura, cláusulas e exemplos reais.",
		tag: "Funções"
	},
	{
		slug: "funcoes/xlookup",
		title: "XLOOKUP",
		description: "Busca avançada — substituto moderno do VLOOKUP com mais poder.",
		tag: "Funções"
	},
	{
		slug: "casos-de-estudo",
		title: "Casos de Estudo",
		description: "Problemas reais resolvidos passo a passo para consolidar o aprendizado.",
		tag: "Prática"
	}
];
//#endregion
export { Home as component };
