"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_HiOutlineArrowNarrowDown_react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=HiOutlineArrowNarrowDown!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _Providers_ScrollProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Providers/ScrollProvider */ \"(app-pages-browser)/./components/Providers/ScrollProvider.tsx\");\n/* harmony import */ var _renderCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderCanvas */ \"(app-pages-browser)/./components/renderCanvas.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Hero() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollY } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Providers_ScrollProvider__WEBPACK_IMPORTED_MODULE_2__.ScrollContext);\n    let progress = 0;\n    const { current: elContainer } = ref;\n    if (elContainer) {\n        progress = Math.min(1, scrollY / elContainer.clientHeight);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_renderCanvas__WEBPACK_IMPORTED_MODULE_3__.renderCanvas)();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grainy-header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"sr-only\",\n                children: \"Hello I'm Guilherme Vieira, I'm a software developer, and I love building things for the web.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"-mt-36\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: ref,\n                                className: \"flex cursor-default flex-col space-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-5xl font-semibold sm:text-6xl md:text-7xl xl:text-9xl\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                className: \"firstName\",\n                                                children: \"Guilherme\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                className: \"surname\",\n                                                children: \"Vieira\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 56\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-large sm:text-6xl md:text-3xl xl:text-4xl odyssey\",\n                                        children: [\n                                            \"The \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                className: \"dark:text-primary-600\",\n                                                children: \"Odyssey\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 21\n                                            }, this),\n                                            \" of a \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                className: \"dark:text-primary-600\",\n                                                children: \"Software engineer\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 75\n                                            }, this),\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl font-semibold underlineHyper readMore\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/about\",\n                                            className: \"dark:text-primary-600\",\n                                            children: \"Read more about me →\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                animate: {\n                                    transform: \"translateY(\".concat(progress * 10, \"vh)\")\n                                },\n                                className: \"absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    role: \"presentation\",\n                                    className: \"flex cursor-pointer flex-col items-center justify-center\",\n                                    onClick: ()=>{\n                                        const intro = document.querySelector(\"#intro\");\n                                        intro === null || intro === void 0 ? void 0 : intro.scrollIntoView({\n                                            behavior: \"smooth\"\n                                        });\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineArrowNarrowDown_react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiOutlineArrowNarrowDown, {\n                                        size: 20\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                className: \"bg-skin-base pointer-events-none absolute inset-0\",\n                id: \"canvas\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilherme.vieira\\\\Desktop\\\\t\\\\components\\\\Hero.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"Mj/4QvFXTy48t6cICn6yfZmonKQ=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQzZCO0FBQ1Y7QUFDQztBQUNiO0FBQ2pCO0FBR2QsU0FBU1E7O0lBQ3RCLE1BQU1DLE1BQU1OLDZDQUFNQSxDQUFxQjtJQUN2QyxNQUFNLEVBQUVPLE9BQU8sRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ0ksb0VBQWFBO0lBRTVDLElBQUlNLFdBQVc7SUFDZixNQUFNLEVBQUVDLFNBQVNDLFdBQVcsRUFBRSxHQUFHSjtJQUVqQyxJQUFJSSxhQUFhO1FBQ2ZGLFdBQVdHLEtBQUtDLEdBQUcsQ0FBQyxHQUFHTCxVQUFVRyxZQUFZRyxZQUFZO0lBQzNEO0lBRUFkLGdEQUFTQSxDQUFDO1FBQ1JJLDJEQUFZQTtJQUNkLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVU7Ozs7OzswQkFHeEIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSVIsS0FBS0E7Z0NBQUtTLFdBQVU7O2tEQUN2Qiw4REFBQ0M7d0NBQUdELFdBQVU7OzBEQUNaLDhEQUFDRTtnREFBRUYsV0FBVTswREFBWTs7Ozs7OzRDQUFhOzBEQUFDLDhEQUFDRTtnREFBRUYsV0FBVTswREFBVTs7Ozs7Ozs7Ozs7O2tEQUVoRSw4REFBQ0c7d0NBQUdILFdBQVU7OzRDQUFrRTswREFDMUUsOERBQUNFO2dEQUFFRixXQUFVOzBEQUF3Qjs7Ozs7OzRDQUFXOzBEQUFNLDhEQUFDRTtnREFBRUYsV0FBVTswREFBd0I7Ozs7Ozs0Q0FBcUI7Ozs7Ozs7a0RBRXRILDhEQUFDSTt3Q0FBT0osV0FBVTtrREFDaEIsNEVBQUNYLGtEQUFJQTs0Q0FBQ2dCLE1BQUs7NENBQVNMLFdBQVU7c0RBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHMUQsOERBQUNsQixpREFBTUEsQ0FBQ2lCLEdBQUc7Z0NBQ1RPLFNBQVM7b0NBQ1BDLFdBQVcsY0FBNEIsT0FBZGQsV0FBVyxJQUFHO2dDQUN6QztnQ0FDQU8sV0FBVTswQ0FFViw0RUFBQ0Q7b0NBQ0NTLE1BQUs7b0NBQ0xSLFdBQVU7b0NBQ1ZTLFNBQVM7d0NBQ1AsTUFBTUMsUUFBUUMsU0FBU0MsYUFBYSxDQUFDO3dDQUVyQ0Ysa0JBQUFBLDRCQUFBQSxNQUFPRyxjQUFjLENBQUM7NENBQUVDLFVBQVU7d0NBQVM7b0NBQzdDOzhDQUVBLDRFQUFDNUIsb0hBQXdCQTt3Q0FBQzZCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0xQyw4REFBQ0M7Z0JBQU9oQixXQUFVO2dCQUFvRGlCLElBQUc7Ozs7Ozs7Ozs7OztBQUcvRTtHQTFEd0IzQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm8udHN4P2U3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhpT3V0bGluZUFycm93TmFycm93RG93biB9IGZyb20gJ3JlYWN0LWljb25zL2hpJztcclxuaW1wb3J0IHsgU2Nyb2xsQ29udGV4dCB9IGZyb20gJy4vUHJvdmlkZXJzL1Njcm9sbFByb3ZpZGVyJztcclxuaW1wb3J0IHsgcmVuZGVyQ2FudmFzIH0gZnJvbSAnLi9yZW5kZXJDYW52YXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oKTogUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEhlYWRpbmdFbGVtZW50PihudWxsKTtcclxuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZUNvbnRleHQoU2Nyb2xsQ29udGV4dCk7XHJcblxyXG4gIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgY29uc3QgeyBjdXJyZW50OiBlbENvbnRhaW5lciB9ID0gcmVmO1xyXG5cclxuICBpZiAoZWxDb250YWluZXIpIHtcclxuICAgIHByb2dyZXNzID0gTWF0aC5taW4oMSwgc2Nyb2xsWSAvIGVsQ29udGFpbmVyLmNsaWVudEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVuZGVyQ2FudmFzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyYWlueS1oZWFkZXInPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgIEhlbGxvIEknbSBHdWlsaGVybWUgVmllaXJhLCBJJ20gYSBzb2Z0d2FyZSBkZXZlbG9wZXIsIGFuZCBJIGxvdmUgYnVpbGRpbmcgdGhpbmdzIGZvciB0aGUgd2ViLlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBoLVtjYWxjKDEwMHZoLTgxcHgpXSBpdGVtcy1jZW50ZXIgbWQ6aC1bY2FsYygxMDB2aC0xMTZweCldXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctc2NyZWVuIG1heC13LTN4bCBweC00IHNtOnB4LTkgeGw6bWF4LXctNXhsIHhsOnB4LTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW10LTM2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImZsZXggY3Vyc29yLWRlZmF1bHQgZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtc2VtaWJvbGQgc206dGV4dC02eGwgbWQ6dGV4dC03eGwgeGw6dGV4dC05eGxcIj5cclxuICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImZpcnN0TmFtZVwiPkd1aWxoZXJtZTwvYj4gPGIgY2xhc3NOYW1lPVwic3VybmFtZVwiPlZpZWlyYTwvYj5cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWxhcmdlIHNtOnRleHQtNnhsIG1kOnRleHQtM3hsIHhsOnRleHQtNHhsIG9keXNzZXlcIj5cclxuICAgICAgICAgICAgICAgIFRoZSA8YiBjbGFzc05hbWU9J2Rhcms6dGV4dC1wcmltYXJ5LTYwMCc+T2R5c3NleTwvYj4gb2YgYSA8YiBjbGFzc05hbWU9J2Rhcms6dGV4dC1wcmltYXJ5LTYwMCc+U29mdHdhcmUgZW5naW5lZXI8L2I+LlxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LW1kIHctbWF4IGN1cnNvci1wb2ludGVyIHNtOnRleHQtbGcgbWQ6dGV4dC14bCB4bDp0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHVuZGVybGluZUh5cGVyIHJlYWRNb3JlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LXByaW1hcnktNjAwXCI+UmVhZCBtb3JlIGFib3V0IG1lICZyYXJyOzwvTGluaz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3Byb2dyZXNzICogMTB9dmgpYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdHJhbnNmb3JtIG1kOmJvdHRvbS04XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItcG9pbnRlciBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnRybycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaW50cm8/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SGlPdXRsaW5lQXJyb3dOYXJyb3dEb3duIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxjYW52YXMgY2xhc3NOYW1lPVwiYmctc2tpbi1iYXNlIHBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMFwiIGlkPVwiY2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSGlPdXRsaW5lQXJyb3dOYXJyb3dEb3duIiwiU2Nyb2xsQ29udGV4dCIsInJlbmRlckNhbnZhcyIsIkxpbmsiLCJIZXJvIiwicmVmIiwic2Nyb2xsWSIsInByb2dyZXNzIiwiY3VycmVudCIsImVsQ29udGFpbmVyIiwiTWF0aCIsIm1pbiIsImNsaWVudEhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYiIsImgyIiwiYnV0dG9uIiwiaHJlZiIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJyb2xlIiwib25DbGljayIsImludHJvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInNpemUiLCJjYW52YXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Hero.tsx\n"));

/***/ })

});