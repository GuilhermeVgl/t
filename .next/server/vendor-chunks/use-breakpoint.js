"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-breakpoint";
exports.ids = ["vendor-chunks/use-breakpoint"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-breakpoint/dist/esm/createMediaQueries.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-breakpoint/dist/esm/createMediaQueries.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Create media query objects\n * @param breakpoints the list of configured breakpoint names and their pixel values\n */\nconst createMediaQueries = (breakpoints) => {\n    const sortedBreakpoints = Object.keys(breakpoints).sort((a, b) => breakpoints[b] - breakpoints[a]);\n    return sortedBreakpoints.map((breakpoint, index) => {\n        let query = '';\n        const minWidth = breakpoints[breakpoint];\n        const nextBreakpoint = sortedBreakpoints[index - 1];\n        const maxWidth = nextBreakpoint ? breakpoints[nextBreakpoint] : null;\n        if (minWidth >= 0) {\n            query = `(min-width: ${minWidth}px)`;\n        }\n        if (maxWidth !== null) {\n            if (query) {\n                query += ' and ';\n            }\n            query += `(max-width: ${maxWidth - 1}px)`;\n        }\n        const mediaQuery = {\n            breakpoint,\n            maxWidth: maxWidth ? maxWidth - 1 : null,\n            minWidth,\n            query,\n        };\n        return mediaQuery;\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMediaQueries);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWJyZWFrcG9pbnQvZGlzdC9lc20vY3JlYXRlTWVkaWFRdWVyaWVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLGtCQUFrQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VpbGhlcm1lZnJlaXRhcy5jb20vLi9ub2RlX21vZHVsZXMvdXNlLWJyZWFrcG9pbnQvZGlzdC9lc20vY3JlYXRlTWVkaWFRdWVyaWVzLmpzPzJmNzEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGUgbWVkaWEgcXVlcnkgb2JqZWN0c1xuICogQHBhcmFtIGJyZWFrcG9pbnRzIHRoZSBsaXN0IG9mIGNvbmZpZ3VyZWQgYnJlYWtwb2ludCBuYW1lcyBhbmQgdGhlaXIgcGl4ZWwgdmFsdWVzXG4gKi9cbmNvbnN0IGNyZWF0ZU1lZGlhUXVlcmllcyA9IChicmVha3BvaW50cykgPT4ge1xuICAgIGNvbnN0IHNvcnRlZEJyZWFrcG9pbnRzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLnNvcnQoKGEsIGIpID0+IGJyZWFrcG9pbnRzW2JdIC0gYnJlYWtwb2ludHNbYV0pO1xuICAgIHJldHVybiBzb3J0ZWRCcmVha3BvaW50cy5tYXAoKGJyZWFrcG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBxdWVyeSA9ICcnO1xuICAgICAgICBjb25zdCBtaW5XaWR0aCA9IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICBjb25zdCBuZXh0QnJlYWtwb2ludCA9IHNvcnRlZEJyZWFrcG9pbnRzW2luZGV4IC0gMV07XG4gICAgICAgIGNvbnN0IG1heFdpZHRoID0gbmV4dEJyZWFrcG9pbnQgPyBicmVha3BvaW50c1tuZXh0QnJlYWtwb2ludF0gOiBudWxsO1xuICAgICAgICBpZiAobWluV2lkdGggPj0gMCkge1xuICAgICAgICAgICAgcXVlcnkgPSBgKG1pbi13aWR0aDogJHttaW5XaWR0aH1weClgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhXaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgKz0gJyBhbmQgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXJ5ICs9IGAobWF4LXdpZHRoOiAke21heFdpZHRoIC0gMX1weClgO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lZGlhUXVlcnkgPSB7XG4gICAgICAgICAgICBicmVha3BvaW50LFxuICAgICAgICAgICAgbWF4V2lkdGg6IG1heFdpZHRoID8gbWF4V2lkdGggLSAxIDogbnVsbCxcbiAgICAgICAgICAgIG1pbldpZHRoLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBtZWRpYVF1ZXJ5O1xuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lZGlhUXVlcmllcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-breakpoint/dist/esm/createMediaQueries.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-breakpoint/dist/esm/getCSSMediaQueries.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-breakpoint/dist/esm/getCSSMediaQueries.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createMediaQueries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMediaQueries.js */ \"(ssr)/./node_modules/use-breakpoint/dist/esm/createMediaQueries.js\");\n\n/**\n * Get CSS native media queries for given breakpoint configuration.\n * @param breakpoints the list of configured breakpoint names and their pixel values\n *\n * @example\n * const breakpoints = { mobile: -1, tablet: 768, desktop: 1280 }\n * const queries = getCSSMediaQueries(breakpoints)\n * // {\n   //   \"mobile\": \"@media (max-width: 767px)\",\n   //   \"tablet\": \"@media (min-width: 768px) and (max-width: 1279px)\",\n   //   \"desktop\": \"@media (min-width: 1280px)\",\n   // }\n *\n * @example <caption>Targeting only screen</caption>\n * const breakpoints = { mobile: -1, tablet: 768, desktop: 1280 }\n * const queries = getCSSMediaQueries(breakpoints, 'screen')\n * // {\n   //   \"mobile\": \"@media only screen (max-width: 767px)\",\n   //   \"tablet\": \"@media only screen (min-width: 768px) and (max-width: 1279px)\",\n   //   \"desktop\": \"@media only screen (min-width: 1280px)\",\n   // }\n */\nconst getCSSMediaQueries = (breakpoints, type) => {\n    const typePrefix = type ? `only ${type} and ` : '';\n    const queries = (0,_createMediaQueries_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(breakpoints);\n    return queries.reduce((queries, { breakpoint, query }) => {\n        // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        queries[breakpoint] = `@media ${typePrefix}${query}`;\n        return queries;\n    }, {});\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCSSMediaQueries);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWJyZWFrcG9pbnQvZGlzdC9lc20vZ2V0Q1NTTWVkaWFRdWVyaWVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUMsb0JBQW9CLGtFQUFrQjtBQUN0QyxzQ0FBc0MsbUJBQW1CO0FBQ3pEO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRSxNQUFNO0FBQzNEO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQSxpRUFBZSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2d1aWxoZXJtZWZyZWl0YXMuY29tLy4vbm9kZV9tb2R1bGVzL3VzZS1icmVha3BvaW50L2Rpc3QvZXNtL2dldENTU01lZGlhUXVlcmllcy5qcz83MTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVNZWRpYVF1ZXJpZXMgZnJvbSAnLi9jcmVhdGVNZWRpYVF1ZXJpZXMuanMnO1xuLyoqXG4gKiBHZXQgQ1NTIG5hdGl2ZSBtZWRpYSBxdWVyaWVzIGZvciBnaXZlbiBicmVha3BvaW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAcGFyYW0gYnJlYWtwb2ludHMgdGhlIGxpc3Qgb2YgY29uZmlndXJlZCBicmVha3BvaW50IG5hbWVzIGFuZCB0aGVpciBwaXhlbCB2YWx1ZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgYnJlYWtwb2ludHMgPSB7IG1vYmlsZTogLTEsIHRhYmxldDogNzY4LCBkZXNrdG9wOiAxMjgwIH1cbiAqIGNvbnN0IHF1ZXJpZXMgPSBnZXRDU1NNZWRpYVF1ZXJpZXMoYnJlYWtwb2ludHMpXG4gKiAvLyB7XG4gICAvLyAgIFwibW9iaWxlXCI6IFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxuICAgLy8gICBcInRhYmxldFwiOiBcIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweClcIixcbiAgIC8vICAgXCJkZXNrdG9wXCI6IFwiQG1lZGlhIChtaW4td2lkdGg6IDEyODBweClcIixcbiAgIC8vIH1cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5UYXJnZXRpbmcgb25seSBzY3JlZW48L2NhcHRpb24+XG4gKiBjb25zdCBicmVha3BvaW50cyA9IHsgbW9iaWxlOiAtMSwgdGFibGV0OiA3NjgsIGRlc2t0b3A6IDEyODAgfVxuICogY29uc3QgcXVlcmllcyA9IGdldENTU01lZGlhUXVlcmllcyhicmVha3BvaW50cywgJ3NjcmVlbicpXG4gKiAvLyB7XG4gICAvLyAgIFwibW9iaWxlXCI6IFwiQG1lZGlhIG9ubHkgc2NyZWVuIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxuICAgLy8gICBcInRhYmxldFwiOiBcIkBtZWRpYSBvbmx5IHNjcmVlbiAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweClcIixcbiAgIC8vICAgXCJkZXNrdG9wXCI6IFwiQG1lZGlhIG9ubHkgc2NyZWVuIChtaW4td2lkdGg6IDEyODBweClcIixcbiAgIC8vIH1cbiAqL1xuY29uc3QgZ2V0Q1NTTWVkaWFRdWVyaWVzID0gKGJyZWFrcG9pbnRzLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IHR5cGUgPyBgb25seSAke3R5cGV9IGFuZCBgIDogJyc7XG4gICAgY29uc3QgcXVlcmllcyA9IGNyZWF0ZU1lZGlhUXVlcmllcyhicmVha3BvaW50cyk7XG4gICAgcmV0dXJuIHF1ZXJpZXMucmVkdWNlKChxdWVyaWVzLCB7IGJyZWFrcG9pbnQsIHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgcXVlcmllc1ticmVha3BvaW50XSA9IGBAbWVkaWEgJHt0eXBlUHJlZml4fSR7cXVlcnl9YDtcbiAgICAgICAgcmV0dXJuIHF1ZXJpZXM7XG4gICAgfSwge30pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldENTU01lZGlhUXVlcmllcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-breakpoint/dist/esm/getCSSMediaQueries.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-breakpoint/dist/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/use-breakpoint/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _useBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   getCSSMediaQueries: () => (/* reexport safe */ _getCSSMediaQueries_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   useBreakpoint: () => (/* reexport safe */ _useBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _getCSSMediaQueries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCSSMediaQueries.js */ \"(ssr)/./node_modules/use-breakpoint/dist/esm/getCSSMediaQueries.js\");\n/* harmony import */ var _useBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBreakpoint.js */ \"(ssr)/./node_modules/use-breakpoint/dist/esm/useBreakpoint.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWJyZWFrcG9pbnQvZGlzdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0U7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2d1aWxoZXJtZWZyZWl0YXMuY29tLy4vbm9kZV9tb2R1bGVzL3VzZS1icmVha3BvaW50L2Rpc3QvZXNtL2luZGV4LmpzP2VmZTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRDU1NNZWRpYVF1ZXJpZXMgfSBmcm9tICcuL2dldENTU01lZGlhUXVlcmllcy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0LCBkZWZhdWx0IGFzIHVzZUJyZWFrcG9pbnQgfSBmcm9tICcuL3VzZUJyZWFrcG9pbnQuanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-breakpoint/dist/esm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-breakpoint/dist/esm/useBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-breakpoint/dist/esm/useBreakpoint.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createMediaQueries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMediaQueries.js */ \"(ssr)/./node_modules/use-breakpoint/dist/esm/createMediaQueries.js\");\n\n\nconst EMPTY_BREAKPOINT = {\n    breakpoint: null,\n    minWidth: null,\n    maxWidth: null,\n    query: null,\n};\n/**\n * A React hook to use the current responsive breakpoint.\n * Will listen to changes using the window.matchMedia API.\n * @param {*} config the list of configured breakpoint names and their pixel values\n * @param {*} [defaultBreakpoint] the optional default breakpoint\n *\n * @example\n * const breakpoints = { mobile: 0, tablet: 768, desktop: 1280 }\n * ...\n * const result = useBreakpoint(breakpoints)\n * // { breakpoint: string; minWidth: number; maxWidth: number | null } | { breakpoint: undefined; minWidth: undefined; maxWidth: undefined }\n *\n * @example <caption>With default value</caption>\n * const breakpoints = { mobile: 0, tablet: 768, desktop: 1280 }\n * ...\n * const result = useBreakpoint(breakpoints, 'mobile')\n * // breakpoint: { breakpoint: string; minWidth: number; maxWidth: number | null }\n */\nconst useBreakpoint = (config, defaultBreakpoint) => {\n    /** Memoize list of calculated media queries from config */\n    const mediaQueries = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_createMediaQueries_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(config), [config]);\n    const subscribe = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((callback) => {\n        const unsubscribers = [];\n        mediaQueries.forEach(({ query, ...breakpoint }) => {\n            const list = window.matchMedia(query);\n            const supportsNewEventListeners = 'addEventListener' in list && 'removeEventListener' in list;\n            if (supportsNewEventListeners) {\n                list.addEventListener('change', callback);\n            }\n            else {\n                ;\n                list.addListener(callback);\n            }\n            /** Map the unsubscribers array to a list of unsubscriber methods */\n            unsubscribers.push(supportsNewEventListeners\n                ? () => list.removeEventListener('change', callback)\n                : () => list.removeListener(callback));\n        });\n        /** Return a function that when called, will call all unsubscribers */\n        return () => unsubscribers.forEach((unsubscriber) => unsubscriber());\n    }, [mediaQueries]);\n    const getSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n        const match = mediaQueries.find((mediaQuery) => {\n            /**\n             * If we're in the browser and there's no default value,\n             * try to match actual breakpoint.\n             */\n            if (window.matchMedia(mediaQuery.query).matches) {\n                return true;\n            }\n            /** Otherwise, try to match default value */\n            if (mediaQuery.breakpoint === defaultBreakpoint) {\n                return true;\n            }\n        });\n        return match ?? EMPTY_BREAKPOINT;\n    }, [defaultBreakpoint, mediaQueries]);\n    const getServerSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n        const match = mediaQueries.find((mediaQuery) => defaultBreakpoint === mediaQuery.breakpoint);\n        return match ?? EMPTY_BREAKPOINT;\n    }, [defaultBreakpoint, mediaQueries]);\n    const currentBreakpoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);\n    /** Print a nice debug value for React Devtools */\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(currentBreakpoint, (c) => typeof c.breakpoint === 'string'\n        ? `${c.breakpoint} (${c.minWidth} ≤ x${c.maxWidth ? ` < ${c.maxWidth + 1}` : ''})`\n        : '');\n    return currentBreakpoint;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBreakpoint);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWJyZWFrcG9pbnQvZGlzdC9lc20vdXNlQnJlYWtwb2ludC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1GO0FBQzFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLFFBQVEsb0JBQW9CLGtCQUFrQiwwQkFBMEIsSUFBSSx1QkFBdUIscUJBQXFCO0FBQ3hIO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0Isa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBTyxPQUFPLGtFQUFrQjtBQUN6RCxzQkFBc0Isa0RBQVc7QUFDakM7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCLGtEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsa0RBQVc7QUFDekM7QUFDQTtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsMkRBQW9CO0FBQ2xEO0FBQ0EsSUFBSSxvREFBYTtBQUNqQixhQUFhLGNBQWMsR0FBRyxZQUFZLEtBQUssbUJBQW1CLGVBQWUsT0FBTztBQUN4RjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWlsaGVybWVmcmVpdGFzLmNvbS8uL25vZGVfbW9kdWxlcy91c2UtYnJlYWtwb2ludC9kaXN0L2VzbS91c2VCcmVha3BvaW50LmpzPzQ1ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZURlYnVnVmFsdWUsIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVNZWRpYVF1ZXJpZXMgZnJvbSAnLi9jcmVhdGVNZWRpYVF1ZXJpZXMuanMnO1xuY29uc3QgRU1QVFlfQlJFQUtQT0lOVCA9IHtcbiAgICBicmVha3BvaW50OiBudWxsLFxuICAgIG1pbldpZHRoOiBudWxsLFxuICAgIG1heFdpZHRoOiBudWxsLFxuICAgIHF1ZXJ5OiBudWxsLFxufTtcbi8qKlxuICogQSBSZWFjdCBob29rIHRvIHVzZSB0aGUgY3VycmVudCByZXNwb25zaXZlIGJyZWFrcG9pbnQuXG4gKiBXaWxsIGxpc3RlbiB0byBjaGFuZ2VzIHVzaW5nIHRoZSB3aW5kb3cubWF0Y2hNZWRpYSBBUEkuXG4gKiBAcGFyYW0geyp9IGNvbmZpZyB0aGUgbGlzdCBvZiBjb25maWd1cmVkIGJyZWFrcG9pbnQgbmFtZXMgYW5kIHRoZWlyIHBpeGVsIHZhbHVlc1xuICogQHBhcmFtIHsqfSBbZGVmYXVsdEJyZWFrcG9pbnRdIHRoZSBvcHRpb25hbCBkZWZhdWx0IGJyZWFrcG9pbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgYnJlYWtwb2ludHMgPSB7IG1vYmlsZTogMCwgdGFibGV0OiA3NjgsIGRlc2t0b3A6IDEyODAgfVxuICogLi4uXG4gKiBjb25zdCByZXN1bHQgPSB1c2VCcmVha3BvaW50KGJyZWFrcG9pbnRzKVxuICogLy8geyBicmVha3BvaW50OiBzdHJpbmc7IG1pbldpZHRoOiBudW1iZXI7IG1heFdpZHRoOiBudW1iZXIgfCBudWxsIH0gfCB7IGJyZWFrcG9pbnQ6IHVuZGVmaW5lZDsgbWluV2lkdGg6IHVuZGVmaW5lZDsgbWF4V2lkdGg6IHVuZGVmaW5lZCB9XG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+V2l0aCBkZWZhdWx0IHZhbHVlPC9jYXB0aW9uPlxuICogY29uc3QgYnJlYWtwb2ludHMgPSB7IG1vYmlsZTogMCwgdGFibGV0OiA3NjgsIGRlc2t0b3A6IDEyODAgfVxuICogLi4uXG4gKiBjb25zdCByZXN1bHQgPSB1c2VCcmVha3BvaW50KGJyZWFrcG9pbnRzLCAnbW9iaWxlJylcbiAqIC8vIGJyZWFrcG9pbnQ6IHsgYnJlYWtwb2ludDogc3RyaW5nOyBtaW5XaWR0aDogbnVtYmVyOyBtYXhXaWR0aDogbnVtYmVyIHwgbnVsbCB9XG4gKi9cbmNvbnN0IHVzZUJyZWFrcG9pbnQgPSAoY29uZmlnLCBkZWZhdWx0QnJlYWtwb2ludCkgPT4ge1xuICAgIC8qKiBNZW1vaXplIGxpc3Qgb2YgY2FsY3VsYXRlZCBtZWRpYSBxdWVyaWVzIGZyb20gY29uZmlnICovXG4gICAgY29uc3QgbWVkaWFRdWVyaWVzID0gdXNlTWVtbygoKSA9PiBjcmVhdGVNZWRpYVF1ZXJpZXMoY29uZmlnKSwgW2NvbmZpZ10pO1xuICAgIGNvbnN0IHN1YnNjcmliZSA9IHVzZUNhbGxiYWNrKChjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gW107XG4gICAgICAgIG1lZGlhUXVlcmllcy5mb3JFYWNoKCh7IHF1ZXJ5LCAuLi5icmVha3BvaW50IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3J0c05ld0V2ZW50TGlzdGVuZXJzID0gJ2FkZEV2ZW50TGlzdGVuZXInIGluIGxpc3QgJiYgJ3JlbW92ZUV2ZW50TGlzdGVuZXInIGluIGxpc3Q7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydHNOZXdFdmVudExpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkTGlzdGVuZXIoY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIE1hcCB0aGUgdW5zdWJzY3JpYmVycyBhcnJheSB0byBhIGxpc3Qgb2YgdW5zdWJzY3JpYmVyIG1ldGhvZHMgKi9cbiAgICAgICAgICAgIHVuc3Vic2NyaWJlcnMucHVzaChzdXBwb3J0c05ld0V2ZW50TGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBsaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDogKCkgPT4gbGlzdC5yZW1vdmVMaXN0ZW5lcihjYWxsYmFjaykpO1xuICAgICAgICB9KTtcbiAgICAgICAgLyoqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgd2hlbiBjYWxsZWQsIHdpbGwgY2FsbCBhbGwgdW5zdWJzY3JpYmVycyAqL1xuICAgICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmVycy5mb3JFYWNoKCh1bnN1YnNjcmliZXIpID0+IHVuc3Vic2NyaWJlcigpKTtcbiAgICB9LCBbbWVkaWFRdWVyaWVzXSk7XG4gICAgY29uc3QgZ2V0U25hcHNob3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gbWVkaWFRdWVyaWVzLmZpbmQoKG1lZGlhUXVlcnkpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgd2UncmUgaW4gdGhlIGJyb3dzZXIgYW5kIHRoZXJlJ3Mgbm8gZGVmYXVsdCB2YWx1ZSxcbiAgICAgICAgICAgICAqIHRyeSB0byBtYXRjaCBhY3R1YWwgYnJlYWtwb2ludC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhUXVlcnkucXVlcnkpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBPdGhlcndpc2UsIHRyeSB0byBtYXRjaCBkZWZhdWx0IHZhbHVlICovXG4gICAgICAgICAgICBpZiAobWVkaWFRdWVyeS5icmVha3BvaW50ID09PSBkZWZhdWx0QnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoID8/IEVNUFRZX0JSRUFLUE9JTlQ7XG4gICAgfSwgW2RlZmF1bHRCcmVha3BvaW50LCBtZWRpYVF1ZXJpZXNdKTtcbiAgICBjb25zdCBnZXRTZXJ2ZXJTbmFwc2hvdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBtZWRpYVF1ZXJpZXMuZmluZCgobWVkaWFRdWVyeSkgPT4gZGVmYXVsdEJyZWFrcG9pbnQgPT09IG1lZGlhUXVlcnkuYnJlYWtwb2ludCk7XG4gICAgICAgIHJldHVybiBtYXRjaCA/PyBFTVBUWV9CUkVBS1BPSU5UO1xuICAgIH0sIFtkZWZhdWx0QnJlYWtwb2ludCwgbWVkaWFRdWVyaWVzXSk7XG4gICAgY29uc3QgY3VycmVudEJyZWFrcG9pbnQgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCk7XG4gICAgLyoqIFByaW50IGEgbmljZSBkZWJ1ZyB2YWx1ZSBmb3IgUmVhY3QgRGV2dG9vbHMgKi9cbiAgICB1c2VEZWJ1Z1ZhbHVlKGN1cnJlbnRCcmVha3BvaW50LCAoYykgPT4gdHlwZW9mIGMuYnJlYWtwb2ludCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBgJHtjLmJyZWFrcG9pbnR9ICgke2MubWluV2lkdGh9IOKJpCB4JHtjLm1heFdpZHRoID8gYCA8ICR7Yy5tYXhXaWR0aCArIDF9YCA6ICcnfSlgXG4gICAgICAgIDogJycpO1xuICAgIHJldHVybiBjdXJyZW50QnJlYWtwb2ludDtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VCcmVha3BvaW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-breakpoint/dist/esm/useBreakpoint.js\n");

/***/ })

};
;