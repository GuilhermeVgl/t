/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./.contentlayer/generated/index.mjs":
/*!*******************************************!*\
  !*** ./.contentlayer/generated/index.mjs ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./app/about/page.tsx":
/*!****************************!*\
  !*** ./app/about/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MDXComponents */ \"(app-pages-browser)/./components/MDXComponents.tsx\");\n/* harmony import */ var _layouts_MDX_AuthorLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/MDX/AuthorLayout */ \"(app-pages-browser)/./components/layouts/MDX/AuthorLayout.tsx\");\n/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/MainLayout */ \"(app-pages-browser)/./components/layouts/MainLayout.tsx\");\n/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contentlayer/generated */ \"(app-pages-browser)/./.contentlayer/generated/index.mjs\");\n/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(contentlayer_generated__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_downloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-downloader */ \"(app-pages-browser)/./node_modules/react-use-downloader/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction About() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        document.title = \"About - Guilherme Vieira\";\n        return ()=>{};\n    }, []);\n    const { download } = (0,react_use_downloader__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const fileUrl = \"/static/files/LucasMontano-CV.pdf\";\n    const filename = \"LucasMontano-CV.pdf\";\n    const author = contentlayer_generated__WEBPACK_IMPORTED_MODULE_4__.allAuthors.find((p)=>p.slug === \"about\");\n    if (!author) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_MDX_AuthorLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                content: author,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDXComponents__WEBPACK_IMPORTED_MODULE_1__.MDXLayoutRenderer, {\n                    content: author\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\app\\\\about\\\\page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\app\\\\about\\\\page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button\",\n                onClick: ()=>download(fileUrl, filename),\n                children: \"Download\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\app\\\\about\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\app\\\\about\\\\page.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(About, \"rh2g2+GxnsFpS4P84KuGvWzEaJ4=\", false, function() {\n    return [\n        react_use_downloader__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hYm91dC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFK0Q7QUFDVDtBQUNSO0FBQ007QUFDSDtBQUNmO0FBRW5CLFNBQVNNOztJQUN0QkQsZ0RBQVNBLENBQUM7UUFDUkUsU0FBU0MsS0FBSyxHQUFHO1FBQ2pCLE9BQU8sS0FDUDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdMLGdFQUFhQTtJQUVsQyxNQUFNTSxVQUFVO0lBQ2hCLE1BQU1DLFdBQVc7SUFFakIsTUFBTUMsU0FBU1QsOERBQVVBLENBQUNVLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxJQUFJLEtBQUs7SUFFakQsSUFBSSxDQUFDSCxRQUFRO1FBQ1gsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNWLDJEQUFVQTs7MEJBQ1QsOERBQUNELGlFQUFZQTtnQkFBQ2UsU0FBU0o7MEJBQ3JCLDRFQUFDWix3RUFBaUJBO29CQUFDZ0IsU0FBU0o7Ozs7Ozs7Ozs7OzBCQUU5Qiw4REFBQ0s7Z0JBQU9DLFdBQVU7Z0JBQVNDLFNBQVMsSUFBTVYsU0FBU0MsU0FBU0M7MEJBQVc7Ozs7Ozs7Ozs7OztBQUc3RTtHQTFCd0JMOztRQU9ERiw0REFBYUE7OztLQVBaRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWJvdXQvcGFnZS50c3g/ODA2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBNRFhMYXlvdXRSZW5kZXJlciB9IGZyb20gJ0AvY29tcG9uZW50cy9NRFhDb21wb25lbnRzJztcclxuaW1wb3J0IEF1dGhvckxheW91dCBmcm9tICdAL2xheW91dHMvTURYL0F1dGhvckxheW91dCc7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IHsgYWxsQXV0aG9ycyB9IGZyb20gJ2NvbnRlbnRsYXllci9nZW5lcmF0ZWQnO1xyXG5pbXBvcnQgdXNlRG93bmxvYWRlciBmcm9tICdyZWFjdC11c2UtZG93bmxvYWRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9ICdBYm91dCAtIEd1aWxoZXJtZSBWaWVpcmEnO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgIH07XHJcbiAgfSwgW10pOyBcclxuICBcclxuICBjb25zdCB7IGRvd25sb2FkIH0gPSB1c2VEb3dubG9hZGVyKCk7IFxyXG5cclxuICBjb25zdCBmaWxlVXJsID0gXCIvc3RhdGljL2ZpbGVzL0x1Y2FzTW9udGFuby1DVi5wZGZcIjsgXHJcbiAgY29uc3QgZmlsZW5hbWUgPSBcIkx1Y2FzTW9udGFuby1DVi5wZGZcIjsgXHJcblxyXG4gIGNvbnN0IGF1dGhvciA9IGFsbEF1dGhvcnMuZmluZCgocCkgPT4gcC5zbHVnID09PSAnYWJvdXQnKTtcclxuXHJcbiAgaWYgKCFhdXRob3IpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICA8QXV0aG9yTGF5b3V0IGNvbnRlbnQ9e2F1dGhvcn0+XHJcbiAgICAgICAgPE1EWExheW91dFJlbmRlcmVyIGNvbnRlbnQ9e2F1dGhvcn0gLz5cclxuICAgICAgPC9BdXRob3JMYXlvdXQ+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZG93bmxvYWQoZmlsZVVybCwgZmlsZW5hbWUpfT5Eb3dubG9hZDwvYnV0dG9uPlxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1EWExheW91dFJlbmRlcmVyIiwiQXV0aG9yTGF5b3V0IiwiTWFpbkxheW91dCIsImFsbEF1dGhvcnMiLCJ1c2VEb3dubG9hZGVyIiwidXNlRWZmZWN0IiwiQWJvdXQiLCJkb2N1bWVudCIsInRpdGxlIiwiZG93bmxvYWQiLCJmaWxlVXJsIiwiZmlsZW5hbWUiLCJhdXRob3IiLCJmaW5kIiwicCIsInNsdWciLCJjb250ZW50IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/about/page.tsx\n"));

/***/ })

});