"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./components/layouts/MDX/AuthorLayout.tsx":
/*!*************************************************!*\
  !*** ./components/layouts/MDX/AuthorLayout.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthorLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction AuthorLayout(param) {\n    let { children, content } = param;\n    const { avatar, occupation, company } = content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center sm:text-left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold md:text-3xl lg:text-4xl\",\n                            children: \"Guilherme Vieira\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\layouts\\\\MDX\\\\AuthorLayout.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-sm font-normal md:text-base\",\n                            children: [\n                                occupation,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"underlineOpen\",\n                                    href: \"https://www.castgroup.com.br/\",\n                                    children: company\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\layouts\\\\MDX\\\\AuthorLayout.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\layouts\\\\MDX\\\\AuthorLayout.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\layouts\\\\MDX\\\\AuthorLayout.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\layouts\\\\MDX\\\\AuthorLayout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\layouts\\\\MDX\\\\AuthorLayout.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\layouts\\\\MDX\\\\AuthorLayout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = AuthorLayout;\nvar _c;\n$RefreshReg$(_c, \"AuthorLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGF5b3V0cy9NRFgvQXV0aG9yTGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFTZSxTQUFTQSxhQUFhLEtBQTRCO1FBQTVCLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFTLEdBQTVCO0lBQ25DLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRSxHQUFHSDtJQUV4QyxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUE0Qzs7Ozs7O3NDQUMxRCw4REFBQ0U7NEJBQUdGLFdBQVU7O2dDQUNYSDtnQ0FBWTs4Q0FDYiw4REFBQ007b0NBQUVILFdBQVU7b0NBQWdCSSxNQUFLOzhDQUMvQk47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtULDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWk47Ozs7Ozs7Ozs7OztBQUlUO0tBckJ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL01EWC9BdXRob3JMYXlvdXQudHN4P2IxODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ0AvY29tcG9uZW50cy9JbWFnZSc7XHJcbmltcG9ydCB0eXBlIHsgQXV0aG9ycyB9IGZyb20gJ2NvbnRlbnRsYXllci9nZW5lcmF0ZWQnO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgY29udGVudDogT21pdDxBdXRob3JzLCAnX2lkJyB8ICdfcmF3JyB8ICdib2R5Jz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvckxheW91dCh7IGNoaWxkcmVuLCBjb250ZW50IH06IFByb3BzKSB7XHJcbiAgY29uc3QgeyBhdmF0YXIsIG9jY3VwYXRpb24sIGNvbXBhbnkgfSA9IGNvbnRlbnQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LThcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IGZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNtOmZsZXgtcm93IHNtOml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWQ6dGV4dC0zeGwgbGc6dGV4dC00eGxcIj5HdWlsaGVybWUgVmllaXJhPC9oMT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbm9ybWFsIG1kOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICB7b2NjdXBhdGlvbn17JyAnfVxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1bmRlcmxpbmVPcGVuXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNhc3Rncm91cC5jb20uYnIvXCI+XHJcbiAgICAgICAgICAgICAge2NvbXBhbnl9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIG1heC13LW5vbmUgcGItOCB0ZXh0LWp1c3RpZnkgdGV4dC1zbSBkYXJrOnByb3NlLWRhcmsgbWQ6dGV4dC1sZyB4bDpjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkF1dGhvckxheW91dCIsImNoaWxkcmVuIiwiY29udGVudCIsImF2YXRhciIsIm9jY3VwYXRpb24iLCJjb21wYW55IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/layouts/MDX/AuthorLayout.tsx\n"));

/***/ })

});