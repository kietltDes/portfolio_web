"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-avatar@1.0.4_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-avatar@1.0.4_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-avatar@1.0.4_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-avatar/dist/index.mjs":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-avatar@1.0.4_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-avatar/dist/index.mjs ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Avatar: () => (/* binding */ $cddcb0b647441e34$export$e2255cf6045e8d47),\n/* harmony export */   AvatarFallback: () => (/* binding */ $cddcb0b647441e34$export$69fffb6a9571fbfe),\n/* harmony export */   AvatarImage: () => (/* binding */ $cddcb0b647441e34$export$2cd8ae1985206fe8),\n/* harmony export */   Fallback: () => (/* binding */ $cddcb0b647441e34$export$fb8d7f40caaeea67),\n/* harmony export */   Image: () => (/* binding */ $cddcb0b647441e34$export$3e431a229df88919),\n/* harmony export */   Root: () => (/* binding */ $cddcb0b647441e34$export$be92b6f5f03c0fe9),\n/* harmony export */   createAvatarScope: () => (/* binding */ $cddcb0b647441e34$export$90370d16b488820f)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"(ssr)/./node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-primitive */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* -------------------------------------------------------------------------------------------------\n * Avatar\n * -----------------------------------------------------------------------------------------------*/ const $cddcb0b647441e34$var$AVATAR_NAME = 'Avatar';\nconst [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)($cddcb0b647441e34$var$AVATAR_NAME);\nconst [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);\nconst $cddcb0b647441e34$export$e2255cf6045e8d47 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{\n    const { __scopeAvatar: __scopeAvatar , ...avatarProps } = props;\n    const [imageLoadingStatus, setImageLoadingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('idle');\n    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($cddcb0b647441e34$var$AvatarProvider, {\n        scope: __scopeAvatar,\n        imageLoadingStatus: imageLoadingStatus,\n        onImageLoadingStatusChange: setImageLoadingStatus\n    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.Primitive.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, avatarProps, {\n        ref: forwardedRef\n    })));\n});\n/*#__PURE__*/ Object.assign($cddcb0b647441e34$export$e2255cf6045e8d47, {\n    displayName: $cddcb0b647441e34$var$AVATAR_NAME\n});\n/* -------------------------------------------------------------------------------------------------\n * AvatarImage\n * -----------------------------------------------------------------------------------------------*/ const $cddcb0b647441e34$var$IMAGE_NAME = 'AvatarImage';\nconst $cddcb0b647441e34$export$2cd8ae1985206fe8 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{\n    const { __scopeAvatar: __scopeAvatar , src: src , onLoadingStatusChange: onLoadingStatusChange = ()=>{} , ...imageProps } = props;\n    const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);\n    const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);\n    const handleLoadingStatusChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__.useCallbackRef)((status)=>{\n        onLoadingStatusChange(status);\n        context.onImageLoadingStatusChange(status);\n    });\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.useLayoutEffect)(()=>{\n        if (imageLoadingStatus !== 'idle') handleLoadingStatusChange(imageLoadingStatus);\n    }, [\n        imageLoadingStatus,\n        handleLoadingStatusChange\n    ]);\n    return imageLoadingStatus === 'loaded' ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.Primitive.img, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, imageProps, {\n        ref: forwardedRef,\n        src: src\n    })) : null;\n});\n/*#__PURE__*/ Object.assign($cddcb0b647441e34$export$2cd8ae1985206fe8, {\n    displayName: $cddcb0b647441e34$var$IMAGE_NAME\n});\n/* -------------------------------------------------------------------------------------------------\n * AvatarFallback\n * -----------------------------------------------------------------------------------------------*/ const $cddcb0b647441e34$var$FALLBACK_NAME = 'AvatarFallback';\nconst $cddcb0b647441e34$export$69fffb6a9571fbfe = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{\n    const { __scopeAvatar: __scopeAvatar , delayMs: delayMs , ...fallbackProps } = props;\n    const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);\n    const [canRender, setCanRender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(delayMs === undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (delayMs !== undefined) {\n            const timerId = window.setTimeout(()=>setCanRender(true)\n            , delayMs);\n            return ()=>window.clearTimeout(timerId)\n            ;\n        }\n    }, [\n        delayMs\n    ]);\n    return canRender && context.imageLoadingStatus !== 'loaded' ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.Primitive.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, fallbackProps, {\n        ref: forwardedRef\n    })) : null;\n});\n/*#__PURE__*/ Object.assign($cddcb0b647441e34$export$69fffb6a9571fbfe, {\n    displayName: $cddcb0b647441e34$var$FALLBACK_NAME\n});\n/* -----------------------------------------------------------------------------------------------*/ function $cddcb0b647441e34$var$useImageLoadingStatus(src) {\n    const [loadingStatus, setLoadingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('idle');\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.useLayoutEffect)(()=>{\n        if (!src) {\n            setLoadingStatus('error');\n            return;\n        }\n        let isMounted = true;\n        const image = new window.Image();\n        const updateStatus = (status)=>()=>{\n                if (!isMounted) return;\n                setLoadingStatus(status);\n            }\n        ;\n        setLoadingStatus('loading');\n        image.onload = updateStatus('loaded');\n        image.onerror = updateStatus('error');\n        image.src = src;\n        return ()=>{\n            isMounted = false;\n        };\n    }, [\n        src\n    ]);\n    return loadingStatus;\n}\nconst $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;\nconst $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;\nconst $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWF2YXRhckAxLjAuNF9AdHlwZXMrcmVhY3QtZG9tQDE4LjMuMF9AdHlwZXMrcmVhY3RAMTguMy4zX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1hdmF0YXIvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUNtRTtBQUNqRTtBQUNDO0FBQ0c7QUFDcEI7Ozs7Ozs7O0FBUXhFO0FBQ0E7QUFDQTtBQUNBLCtGQUErRiwyRUFBeUI7QUFDeEg7QUFDQSxnRUFBZ0UsaURBQWlCO0FBQ2pGLFlBQVksZ0RBQWdEO0FBQzVELHdEQUF3RCwrQ0FBZTtBQUN2RSx5QkFBeUIsb0RBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCLG9EQUFvQixDQUFDLGdFQUFnQixPQUFPLDhFQUFvQyxHQUFHO0FBQ3hHO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxpREFBaUI7QUFDakYsWUFBWSxnR0FBZ0csa0JBQWtCO0FBQzlIO0FBQ0E7QUFDQSxzQ0FBc0MsZ0ZBQXFCO0FBQzNEO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxrRkFBc0I7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELG9EQUFvQixDQUFDLGdFQUFnQixNQUFNLDhFQUFvQyxHQUFHO0FBQzdJO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGlEQUFpQjtBQUNqRixZQUFZLHFFQUFxRTtBQUNqRjtBQUNBLHNDQUFzQywrQ0FBZTtBQUNyRCxJQUFJLGdEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdGQUFnRixvREFBb0IsQ0FBQyxnRUFBZ0IsT0FBTyw4RUFBb0MsR0FBRztBQUNuSztBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDhDQUE4QywrQ0FBZTtBQUM3RCxJQUFJLGtGQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS2taO0FBQ2xaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9yZm9saW8vLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWF2YXRhckAxLjAuNF9AdHlwZXMrcmVhY3QtZG9tQDE4LjMuMF9AdHlwZXMrcmVhY3RAMTguMy4zX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1hdmF0YXIvZGlzdC9pbmRleC5tanM/MjY4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJDhOeXZOJGJhYmVscnVudGltZWhlbHBlcnNlc21leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQge2ZvcndhcmRSZWYgYXMgJDhOeXZOJGZvcndhcmRSZWYsIHVzZVN0YXRlIGFzICQ4Tnl2TiR1c2VTdGF0ZSwgY3JlYXRlRWxlbWVudCBhcyAkOE55dk4kY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0IGFzICQ4Tnl2TiR1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVDb250ZXh0U2NvcGUgYXMgJDhOeXZOJGNyZWF0ZUNvbnRleHRTY29wZX0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1jb250ZXh0XCI7XG5pbXBvcnQge3VzZUNhbGxiYWNrUmVmIGFzICQ4Tnl2TiR1c2VDYWxsYmFja1JlZn0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmXCI7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdCBhcyAkOE55dk4kdXNlTGF5b3V0RWZmZWN0fSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXVzZS1sYXlvdXQtZWZmZWN0XCI7XG5pbXBvcnQge1ByaW1pdGl2ZSBhcyAkOE55dk4kUHJpbWl0aXZlfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXByaW1pdGl2ZVwiO1xuXG5cblxuXG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBdmF0YXJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gY29uc3QgJGNkZGNiMGI2NDc0NDFlMzQkdmFyJEFWQVRBUl9OQU1FID0gJ0F2YXRhcic7XG5jb25zdCBbJGNkZGNiMGI2NDc0NDFlMzQkdmFyJGNyZWF0ZUF2YXRhckNvbnRleHQsICRjZGRjYjBiNjQ3NDQxZTM0JGV4cG9ydCQ5MDM3MGQxNmI0ODg4MjBmXSA9ICQ4Tnl2TiRjcmVhdGVDb250ZXh0U2NvcGUoJGNkZGNiMGI2NDc0NDFlMzQkdmFyJEFWQVRBUl9OQU1FKTtcbmNvbnN0IFskY2RkY2IwYjY0NzQ0MWUzNCR2YXIkQXZhdGFyUHJvdmlkZXIsICRjZGRjYjBiNjQ3NDQxZTM0JHZhciR1c2VBdmF0YXJDb250ZXh0XSA9ICRjZGRjYjBiNjQ3NDQxZTM0JHZhciRjcmVhdGVBdmF0YXJDb250ZXh0KCRjZGRjYjBiNjQ3NDQxZTM0JHZhciRBVkFUQVJfTkFNRSk7XG5jb25zdCAkY2RkY2IwYjY0NzQ0MWUzNCRleHBvcnQkZTIyNTVjZjYwNDVlOGQ0NyA9IC8qI19fUFVSRV9fKi8gJDhOeXZOJGZvcndhcmRSZWYoKHByb3BzLCBmb3J3YXJkZWRSZWYpPT57XG4gICAgY29uc3QgeyBfX3Njb3BlQXZhdGFyOiBfX3Njb3BlQXZhdGFyICwgLi4uYXZhdGFyUHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IFtpbWFnZUxvYWRpbmdTdGF0dXMsIHNldEltYWdlTG9hZGluZ1N0YXR1c10gPSAkOE55dk4kdXNlU3RhdGUoJ2lkbGUnKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qLyAkOE55dk4kY3JlYXRlRWxlbWVudCgkY2RkY2IwYjY0NzQ0MWUzNCR2YXIkQXZhdGFyUHJvdmlkZXIsIHtcbiAgICAgICAgc2NvcGU6IF9fc2NvcGVBdmF0YXIsXG4gICAgICAgIGltYWdlTG9hZGluZ1N0YXR1czogaW1hZ2VMb2FkaW5nU3RhdHVzLFxuICAgICAgICBvbkltYWdlTG9hZGluZ1N0YXR1c0NoYW5nZTogc2V0SW1hZ2VMb2FkaW5nU3RhdHVzXG4gICAgfSwgLyojX19QVVJFX18qLyAkOE55dk4kY3JlYXRlRWxlbWVudCgkOE55dk4kUHJpbWl0aXZlLnNwYW4sICQ4Tnl2TiRiYWJlbHJ1bnRpbWVoZWxwZXJzZXNtZXh0ZW5kcyh7fSwgYXZhdGFyUHJvcHMsIHtcbiAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWZcbiAgICB9KSkpO1xufSk7XG4vKiNfX1BVUkVfXyovIE9iamVjdC5hc3NpZ24oJGNkZGNiMGI2NDc0NDFlMzQkZXhwb3J0JGUyMjU1Y2Y2MDQ1ZThkNDcsIHtcbiAgICBkaXNwbGF5TmFtZTogJGNkZGNiMGI2NDc0NDFlMzQkdmFyJEFWQVRBUl9OQU1FXG59KTtcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEF2YXRhckltYWdlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGNvbnN0ICRjZGRjYjBiNjQ3NDQxZTM0JHZhciRJTUFHRV9OQU1FID0gJ0F2YXRhckltYWdlJztcbmNvbnN0ICRjZGRjYjBiNjQ3NDQxZTM0JGV4cG9ydCQyY2Q4YWUxOTg1MjA2ZmU4ID0gLyojX19QVVJFX18qLyAkOE55dk4kZm9yd2FyZFJlZigocHJvcHMsIGZvcndhcmRlZFJlZik9PntcbiAgICBjb25zdCB7IF9fc2NvcGVBdmF0YXI6IF9fc2NvcGVBdmF0YXIgLCBzcmM6IHNyYyAsIG9uTG9hZGluZ1N0YXR1c0NoYW5nZTogb25Mb2FkaW5nU3RhdHVzQ2hhbmdlID0gKCk9Pnt9ICwgLi4uaW1hZ2VQcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgY29udGV4dCA9ICRjZGRjYjBiNjQ3NDQxZTM0JHZhciR1c2VBdmF0YXJDb250ZXh0KCRjZGRjYjBiNjQ3NDQxZTM0JHZhciRJTUFHRV9OQU1FLCBfX3Njb3BlQXZhdGFyKTtcbiAgICBjb25zdCBpbWFnZUxvYWRpbmdTdGF0dXMgPSAkY2RkY2IwYjY0NzQ0MWUzNCR2YXIkdXNlSW1hZ2VMb2FkaW5nU3RhdHVzKHNyYyk7XG4gICAgY29uc3QgaGFuZGxlTG9hZGluZ1N0YXR1c0NoYW5nZSA9ICQ4Tnl2TiR1c2VDYWxsYmFja1JlZigoc3RhdHVzKT0+e1xuICAgICAgICBvbkxvYWRpbmdTdGF0dXNDaGFuZ2Uoc3RhdHVzKTtcbiAgICAgICAgY29udGV4dC5vbkltYWdlTG9hZGluZ1N0YXR1c0NoYW5nZShzdGF0dXMpO1xuICAgIH0pO1xuICAgICQ4Tnl2TiR1c2VMYXlvdXRFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKGltYWdlTG9hZGluZ1N0YXR1cyAhPT0gJ2lkbGUnKSBoYW5kbGVMb2FkaW5nU3RhdHVzQ2hhbmdlKGltYWdlTG9hZGluZ1N0YXR1cyk7XG4gICAgfSwgW1xuICAgICAgICBpbWFnZUxvYWRpbmdTdGF0dXMsXG4gICAgICAgIGhhbmRsZUxvYWRpbmdTdGF0dXNDaGFuZ2VcbiAgICBdKTtcbiAgICByZXR1cm4gaW1hZ2VMb2FkaW5nU3RhdHVzID09PSAnbG9hZGVkJyA/IC8qI19fUFVSRV9fKi8gJDhOeXZOJGNyZWF0ZUVsZW1lbnQoJDhOeXZOJFByaW1pdGl2ZS5pbWcsICQ4Tnl2TiRiYWJlbHJ1bnRpbWVoZWxwZXJzZXNtZXh0ZW5kcyh7fSwgaW1hZ2VQcm9wcywge1xuICAgICAgICByZWY6IGZvcndhcmRlZFJlZixcbiAgICAgICAgc3JjOiBzcmNcbiAgICB9KSkgOiBudWxsO1xufSk7XG4vKiNfX1BVUkVfXyovIE9iamVjdC5hc3NpZ24oJGNkZGNiMGI2NDc0NDFlMzQkZXhwb3J0JDJjZDhhZTE5ODUyMDZmZTgsIHtcbiAgICBkaXNwbGF5TmFtZTogJGNkZGNiMGI2NDc0NDFlMzQkdmFyJElNQUdFX05BTUVcbn0pO1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQXZhdGFyRmFsbGJhY2tcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gY29uc3QgJGNkZGNiMGI2NDc0NDFlMzQkdmFyJEZBTExCQUNLX05BTUUgPSAnQXZhdGFyRmFsbGJhY2snO1xuY29uc3QgJGNkZGNiMGI2NDc0NDFlMzQkZXhwb3J0JDY5ZmZmYjZhOTU3MWZiZmUgPSAvKiNfX1BVUkVfXyovICQ4Tnl2TiRmb3J3YXJkUmVmKChwcm9wcywgZm9yd2FyZGVkUmVmKT0+e1xuICAgIGNvbnN0IHsgX19zY29wZUF2YXRhcjogX19zY29wZUF2YXRhciAsIGRlbGF5TXM6IGRlbGF5TXMgLCAuLi5mYWxsYmFja1Byb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBjb250ZXh0ID0gJGNkZGNiMGI2NDc0NDFlMzQkdmFyJHVzZUF2YXRhckNvbnRleHQoJGNkZGNiMGI2NDc0NDFlMzQkdmFyJEZBTExCQUNLX05BTUUsIF9fc2NvcGVBdmF0YXIpO1xuICAgIGNvbnN0IFtjYW5SZW5kZXIsIHNldENhblJlbmRlcl0gPSAkOE55dk4kdXNlU3RhdGUoZGVsYXlNcyA9PT0gdW5kZWZpbmVkKTtcbiAgICAkOE55dk4kdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChkZWxheU1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVySWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKT0+c2V0Q2FuUmVuZGVyKHRydWUpXG4gICAgICAgICAgICAsIGRlbGF5TXMpO1xuICAgICAgICAgICAgcmV0dXJuICgpPT53aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVySWQpXG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGRlbGF5TXNcbiAgICBdKTtcbiAgICByZXR1cm4gY2FuUmVuZGVyICYmIGNvbnRleHQuaW1hZ2VMb2FkaW5nU3RhdHVzICE9PSAnbG9hZGVkJyA/IC8qI19fUFVSRV9fKi8gJDhOeXZOJGNyZWF0ZUVsZW1lbnQoJDhOeXZOJFByaW1pdGl2ZS5zcGFuLCAkOE55dk4kYmFiZWxydW50aW1laGVscGVyc2VzbWV4dGVuZHMoe30sIGZhbGxiYWNrUHJvcHMsIHtcbiAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWZcbiAgICB9KSkgOiBudWxsO1xufSk7XG4vKiNfX1BVUkVfXyovIE9iamVjdC5hc3NpZ24oJGNkZGNiMGI2NDc0NDFlMzQkZXhwb3J0JDY5ZmZmYjZhOTU3MWZiZmUsIHtcbiAgICBkaXNwbGF5TmFtZTogJGNkZGNiMGI2NDc0NDFlMzQkdmFyJEZBTExCQUNLX05BTUVcbn0pO1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBmdW5jdGlvbiAkY2RkY2IwYjY0NzQ0MWUzNCR2YXIkdXNlSW1hZ2VMb2FkaW5nU3RhdHVzKHNyYykge1xuICAgIGNvbnN0IFtsb2FkaW5nU3RhdHVzLCBzZXRMb2FkaW5nU3RhdHVzXSA9ICQ4Tnl2TiR1c2VTdGF0ZSgnaWRsZScpO1xuICAgICQ4Tnl2TiR1c2VMYXlvdXRFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmdTdGF0dXMoJ2Vycm9yJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpO1xuICAgICAgICBjb25zdCB1cGRhdGVTdGF0dXMgPSAoc3RhdHVzKT0+KCk9PntcbiAgICAgICAgICAgICAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdTdGF0dXMoc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBzZXRMb2FkaW5nU3RhdHVzKCdsb2FkaW5nJyk7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IHVwZGF0ZVN0YXR1cygnbG9hZGVkJyk7XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSB1cGRhdGVTdGF0dXMoJ2Vycm9yJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgICAgICBpc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHNyY1xuICAgIF0pO1xuICAgIHJldHVybiBsb2FkaW5nU3RhdHVzO1xufVxuY29uc3QgJGNkZGNiMGI2NDc0NDFlMzQkZXhwb3J0JGJlOTJiNmY1ZjAzYzBmZTkgPSAkY2RkY2IwYjY0NzQ0MWUzNCRleHBvcnQkZTIyNTVjZjYwNDVlOGQ0NztcbmNvbnN0ICRjZGRjYjBiNjQ3NDQxZTM0JGV4cG9ydCQzZTQzMWEyMjlkZjg4OTE5ID0gJGNkZGNiMGI2NDc0NDFlMzQkZXhwb3J0JDJjZDhhZTE5ODUyMDZmZTg7XG5jb25zdCAkY2RkY2IwYjY0NzQ0MWUzNCRleHBvcnQkZmI4ZDdmNDBjYWFlZWE2NyA9ICRjZGRjYjBiNjQ3NDQxZTM0JGV4cG9ydCQ2OWZmZmI2YTk1NzFmYmZlO1xuXG5cblxuXG5leHBvcnQgeyRjZGRjYjBiNjQ3NDQxZTM0JGV4cG9ydCQ5MDM3MGQxNmI0ODg4MjBmIGFzIGNyZWF0ZUF2YXRhclNjb3BlLCAkY2RkY2IwYjY0NzQ0MWUzNCRleHBvcnQkZTIyNTVjZjYwNDVlOGQ0NyBhcyBBdmF0YXIsICRjZGRjYjBiNjQ3NDQxZTM0JGV4cG9ydCQyY2Q4YWUxOTg1MjA2ZmU4IGFzIEF2YXRhckltYWdlLCAkY2RkY2IwYjY0NzQ0MWUzNCRleHBvcnQkNjlmZmZiNmE5NTcxZmJmZSBhcyBBdmF0YXJGYWxsYmFjaywgJGNkZGNiMGI2NDc0NDFlMzQkZXhwb3J0JGJlOTJiNmY1ZjAzYzBmZTkgYXMgUm9vdCwgJGNkZGNiMGI2NDc0NDFlMzQkZXhwb3J0JDNlNDMxYTIyOWRmODg5MTkgYXMgSW1hZ2UsICRjZGRjYjBiNjQ3NDQxZTM0JGV4cG9ydCRmYjhkN2Y0MGNhYWVlYTY3IGFzIEZhbGxiYWNrfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-avatar@1.0.4_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-avatar/dist/index.mjs\n");

/***/ })

};
;