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

/***/ "(app-pages-browser)/./components/renderCanvas.js":
/*!************************************!*\
  !*** ./components/renderCanvas.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCanvas: function() { return /* binding */ renderCanvas; }\n/* harmony export */ });\nfunction n(e) {\n    this.init(e || {});\n}\nn.prototype = {\n    init: function(e) {\n        this.phase = e.phase || 0;\n        this.offset = e.offset || 0;\n        this.frequency = e.frequency || 0.001;\n        this.amplitude = e.amplitude || 1;\n    },\n    update: function() {\n        return this.phase += this.frequency, e = this.offset + Math.sin(this.phase) * this.amplitude;\n    },\n    value: function() {\n        return e;\n    }\n};\nfunction Line(e) {\n    this.init(e || {});\n}\n_c = Line;\nLine.prototype = {\n    init: function(e) {\n        this.spring = e.spring + 0.1 * Math.random() - 0.05;\n        this.friction = E.friction + 0.01 * Math.random() - 0.005;\n        this.nodes = [];\n        for(var t, n = 0; n < E.size; n++){\n            t = new Node();\n            t.x = pos.x;\n            t.y = pos.y;\n            this.nodes.push(t);\n        }\n    },\n    update: function() {\n        var e = this.spring, t = this.nodes[0];\n        t.vx += (pos.x - t.x) * e;\n        t.vy += (pos.y - t.y) * e;\n        for(var n, i = 0, a = this.nodes.length; i < a; i++)t = this.nodes[i], 0 < i && (n = this.nodes[i - 1], t.vx += (n.x - t.x) * e, t.vy += (n.y - t.y) * e, t.vx += n.vx * E.dampening, t.vy += n.vy * E.dampening), t.vx *= this.friction, t.vy *= this.friction, t.x += t.vx, t.y += t.vy, e *= E.tension;\n    },\n    draw: function() {\n        var e, t, n = this.nodes[0].x, i = this.nodes[0].y;\n        ctx.beginPath();\n        ctx.moveTo(n, i);\n        for(var a = 1, o = this.nodes.length - 2; a < o; a++){\n            e = this.nodes[a];\n            t = this.nodes[a + 1];\n            n = 0.5 * (e.x + t.x);\n            i = 0.5 * (e.y + t.y);\n            ctx.quadraticCurveTo(e.x, e.y, n, i);\n        }\n        e = this.nodes[a];\n        t = this.nodes[a + 1];\n        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);\n        ctx.stroke();\n        ctx.closePath();\n    }\n};\nfunction onMousemove(e) {\n    function o() {\n        lines = [];\n        for(var e = 0; e < E.trails; e++)lines.push(new Line({\n            spring: 0.45 + e / E.trails * 0.025\n        }));\n    }\n    function c(e) {\n        e.touches ? (pos.x = e.touches[0].pageX, pos.y = e.touches[0].pageY) : (pos.x = e.clientX, pos.y = e.clientY), e.preventDefault();\n    }\n    function l(e) {\n        1 == e.touches.length && (pos.x = e.touches[0].pageX, pos.y = e.touches[0].pageY);\n    }\n    document.removeEventListener(\"mousemove\", onMousemove), document.removeEventListener(\"touchstart\", onMousemove), document.addEventListener(\"mousemove\", c), document.addEventListener(\"touchmove\", c), document.addEventListener(\"touchstart\", l), c(e), o(), render();\n}\nfunction render() {\n    if (ctx.running) {\n        ctx.globalCompositeOperation = \"source-over\";\n        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n        ctx.globalCompositeOperation = \"lighter\";\n        ctx.strokeStyle = \"hsla(\" + (60 + Math.round(f.update())) + \",90%,50%,0.25)\";\n        ctx.lineWidth = 1;\n        for(var e, t = 0; t < E.trails; t++){\n            (e = lines[t]).update();\n            e.draw();\n        }\n        ctx.frame++;\n        window.requestAnimationFrame(render);\n    }\n}\nfunction resizeCanvas() {\n    ctx.canvas.width = window.innerWidth - 20;\n    ctx.canvas.height = window.innerHeight;\n}\nvar ctx, f, e = 0, pos = {}, lines = [], E = {\n    debug: true,\n    friction: 0.5,\n    trails: 20,\n    size: 50,\n    dampening: 0.25,\n    tension: 0.98\n};\nfunction Node() {\n    this.x = 0;\n    this.y = 0;\n    this.vy = 0;\n    this.vx = 0;\n}\n_c1 = Node;\nconst renderCanvas = function() {\n    ctx = document.getElementById(\"canvas\").getContext(\"2d\");\n    ctx.running = true;\n    ctx.frame = 1;\n    f = new n({\n        phase: Math.random() * 2 * Math.PI,\n        amplitude: 85,\n        frequency: 0.0015,\n        offset: 285\n    });\n    document.addEventListener(\"mousemove\", onMousemove);\n    document.addEventListener(\"touchstart\", onMousemove);\n    document.body.addEventListener(\"orientationchange\", resizeCanvas);\n    window.addEventListener(\"resize\", resizeCanvas);\n    window.addEventListener(\"focus\", ()=>{\n        if (!ctx.running) {\n            ctx.running = true;\n            render();\n        }\n    });\n    window.addEventListener(\"blur\", ()=>{\n        ctx.running = true;\n    });\n    resizeCanvas();\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"Line\");\n$RefreshReg$(_c1, \"Node\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcmVuZGVyQ2FudmFzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSxFQUFFQyxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxJQUFJLENBQUNELEtBQUssQ0FBQztBQUNsQjtBQUNBRCxFQUFFRyxTQUFTLEdBQUc7SUFDWkQsTUFBTSxTQUFVRCxDQUFDO1FBQ2YsSUFBSSxDQUFDRyxLQUFLLEdBQUdILEVBQUVHLEtBQUssSUFBSTtRQUN4QixJQUFJLENBQUNDLE1BQU0sR0FBR0osRUFBRUksTUFBTSxJQUFJO1FBQzFCLElBQUksQ0FBQ0MsU0FBUyxHQUFHTCxFQUFFSyxTQUFTLElBQUk7UUFDaEMsSUFBSSxDQUFDQyxTQUFTLEdBQUdOLEVBQUVNLFNBQVMsSUFBSTtJQUNsQztJQUNBQyxRQUFRO1FBQ04sT0FDRSxJQUFLLENBQUNKLEtBQUssSUFBSSxJQUFJLENBQUNFLFNBQVMsRUFBSUwsSUFBSSxJQUFJLENBQUNJLE1BQU0sR0FBR0ksS0FBS0MsR0FBRyxDQUFDLElBQUksQ0FBQ04sS0FBSyxJQUFJLElBQUksQ0FBQ0csU0FBUztJQUU1RjtJQUNBSSxPQUFPO1FBQ0wsT0FBT1Y7SUFDVDtBQUNGO0FBRUEsU0FBU1csS0FBS1gsQ0FBQztJQUNiLElBQUksQ0FBQ0MsSUFBSSxDQUFDRCxLQUFLLENBQUM7QUFDbEI7S0FGU1c7QUFJVEEsS0FBS1QsU0FBUyxHQUFHO0lBQ2ZELE1BQU0sU0FBVUQsQ0FBQztRQUNmLElBQUksQ0FBQ1ksTUFBTSxHQUFHWixFQUFFWSxNQUFNLEdBQUcsTUFBTUosS0FBS0ssTUFBTSxLQUFLO1FBQy9DLElBQUksQ0FBQ0MsUUFBUSxHQUFHQyxFQUFFRCxRQUFRLEdBQUcsT0FBT04sS0FBS0ssTUFBTSxLQUFLO1FBQ3BELElBQUksQ0FBQ0csS0FBSyxHQUFHLEVBQUU7UUFDZixJQUFLLElBQUlDLEdBQUdsQixJQUFJLEdBQUdBLElBQUlnQixFQUFFRyxJQUFJLEVBQUVuQixJQUFL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QVE7SUFDVjtJQUNBOEMsU0FBU0UsZ0JBQWdCLENBQUMsYUFBYWI7SUFDdkNXLFNBQVNFLGdCQUFnQixDQUFDLGNBQWNiO0lBQ3hDVyxTQUFTeUIsSUFBSSxDQUFDdkIsZ0JBQWdCLENBQUMscUJBQXFCZTtJQUNwREYsT0FBT2IsZ0JBQWdCLENBQUMsVUFBVWU7SUFDbENGLE9BQU9iLGdCQUFnQixDQUFDLFNBQVM7UUFDL0IsSUFBSSxDQUFDcEIsSUFBSXNCLE9BQU8sRUFBRTtZQUNoQnRCLElBQUlzQixPQUFPLEdBQUc7WUFDZEQ7UUFDRjtJQUNGO0lBQ0FZLE9BQU9iLGdCQUFnQixDQUFDLFFBQVE7UUFDOUJwQixJQUFJc0IsT0FBTyxHQUFHO0lBQ2hCO0lBQ0FhO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JlbmRlckNhbnZhcy5qcz9lNmRiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG4oZSkge1xyXG4gIHRoaXMuaW5pdChlIHx8IHt9KTtcclxufVxyXG5uLnByb3RvdHlwZSA9IHtcclxuICBpbml0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgdGhpcy5waGFzZSA9IGUucGhhc2UgfHwgMDtcclxuICAgIHRoaXMub2Zmc2V0ID0gZS5vZmZzZXQgfHwgMDtcclxuICAgIHRoaXMuZnJlcXVlbmN5ID0gZS5mcmVxdWVuY3kgfHwgMC4wMDE7XHJcbiAgICB0aGlzLmFtcGxpdHVkZSA9IGUuYW1wbGl0dWRlIHx8IDE7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLnBoYXNlICs9IHRoaXMuZnJlcXVlbmN5KSwgKGUgPSB0aGlzLm9mZnNldCArIE1hdGguc2luKHRoaXMucGhhc2UpICogdGhpcy5hbXBsaXR1ZGUpXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBlO1xyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBMaW5lKGUpIHtcclxuICB0aGlzLmluaXQoZSB8fCB7fSk7XHJcbn1cclxuXHJcbkxpbmUucHJvdG90eXBlID0ge1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLnNwcmluZyA9IGUuc3ByaW5nICsgMC4xICogTWF0aC5yYW5kb20oKSAtIDAuMDU7XHJcbiAgICB0aGlzLmZyaWN0aW9uID0gRS5mcmljdGlvbiArIDAuMDEgKiBNYXRoLnJhbmRvbSgpIC0gMC4wMDU7XHJcbiAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICBmb3IgKHZhciB0LCBuID0gMDsgbiA8IEUuc2l6ZTsgbisrKSB7XHJcbiAgICAgIHQgPSBuZXcgTm9kZSgpO1xyXG4gICAgICB0LnggPSBwb3MueDtcclxuICAgICAgdC55ID0gcG9zLnk7XHJcbiAgICAgIHRoaXMubm9kZXMucHVzaCh0KTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGUgPSB0aGlzLnNwcmluZyxcclxuICAgICAgdCA9IHRoaXMubm9kZXNbMF07XHJcbiAgICB0LnZ4ICs9IChwb3MueCAtIHQueCkgKiBlO1xyXG4gICAgdC52eSArPSAocG9zLnkgLSB0LnkpICogZTtcclxuICAgIGZvciAodmFyIG4sIGkgPSAwLCBhID0gdGhpcy5ub2Rlcy5sZW5ndGg7IGkgPCBhOyBpKyspXHJcbiAgICAgICh0ID0gdGhpcy5ub2Rlc1tpXSksXHJcbiAgICAgICAgMCA8IGkgJiZcclxuICAgICAgICAgICgobiA9IHRoaXMubm9kZXNbaSAtIDFdKSxcclxuICAgICAgICAgICh0LnZ4ICs9IChuLnggLSB0LngpICogZSksXHJcbiAgICAgICAgICAodC52eSArPSAobi55IC0gdC55KSAqIGUpLFxyXG4gICAgICAgICAgKHQudnggKz0gbi52eCAqIEUuZGFtcGVuaW5nKSxcclxuICAgICAgICAgICh0LnZ5ICs9IG4udnkgKiBFLmRhbXBlbmluZykpLFxyXG4gICAgICAgICh0LnZ4ICo9IHRoaXMuZnJpY3Rpb24pLFxyXG4gICAgICAgICh0LnZ5ICo9IHRoaXMuZnJpY3Rpb24pLFxyXG4gICAgICAgICh0LnggKz0gdC52eCksXHJcbiAgICAgICAgKHQueSArPSB0LnZ5KSxcclxuICAgICAgICAoZSAqPSBFLnRlbnNpb24pO1xyXG4gIH0sXHJcbiAgZHJhdzogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGUsXHJcbiAgICAgIHQsXHJcbiAgICAgIG4gPSB0aGlzLm5vZGVzWzBdLngsXHJcbiAgICAgIGkgPSB0aGlzLm5vZGVzWzBdLnk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKG4sIGkpO1xyXG4gICAgZm9yICh2YXIgYSA9IDEsIG8gPSB0aGlzLm5vZGVzLmxlbmd0aCAtIDI7IGEgPCBvOyBhKyspIHtcclxuICAgICAgZSA9IHRoaXMubm9kZXNbYV07XHJcbiAgICAgIHQgPSB0aGlzLm5vZGVzW2EgKyAxXTtcclxuICAgICAgbiA9IDAuNSAqIChlLnggKyB0LngpO1xyXG4gICAgICBpID0gMC41ICogKGUueSArIHQueSk7XHJcbiAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKGUueCwgZS55LCBuLCBpKTtcclxuICAgIH1cclxuICAgIGUgPSB0aGlzLm5vZGVzW2FdO1xyXG4gICAgdCA9IHRoaXMubm9kZXNbYSArIDFdO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oZS54LCBlLnksIHQueCwgdC55KTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Nb3VzZW1vdmUoZSkge1xyXG4gIGZ1bmN0aW9uIG8oKSB7XHJcbiAgICBsaW5lcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCBFLnRyYWlsczsgZSsrKVxyXG4gICAgICBsaW5lcy5wdXNoKG5ldyBMaW5lKHsgc3ByaW5nOiAwLjQ1ICsgKGUgLyBFLnRyYWlscykgKiAwLjAyNSB9KSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGMoZSkge1xyXG4gICAgZS50b3VjaGVzXHJcbiAgICAgID8gKChwb3MueCA9IGUudG91Y2hlc1swXS5wYWdlWCksIChwb3MueSA9IGUudG91Y2hlc1swXS5wYWdlWSkpXHJcbiAgICAgIDogKChwb3MueCA9IGUuY2xpZW50WCksIChwb3MueSA9IGUuY2xpZW50WSkpLFxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGwoZSkge1xyXG4gICAgMSA9PSBlLnRvdWNoZXMubGVuZ3RoICYmICgocG9zLnggPSBlLnRvdWNoZXNbMF0ucGFnZVgpLCAocG9zLnkgPSBlLnRvdWNoZXNbMF0ucGFnZVkpKTtcclxuICB9XHJcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZW1vdmUpLFxyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uTW91c2Vtb3ZlKSxcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGMpLFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgYyksXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbCksXHJcbiAgICBjKGUpLFxyXG4gICAgbygpLFxyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICBpZiAoY3R4LnJ1bm5pbmcpIHtcclxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2hzbGEoJyArICg2MCArIE1hdGgucm91bmQoZi51cGRhdGUoKSkpICsgJyw5MCUsNTAlLDAuMjUpJztcclxuICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgZm9yICh2YXIgZSwgdCA9IDA7IHQgPCBFLnRyYWlsczsgdCsrKSB7XHJcbiAgICAgIChlID0gbGluZXNbdF0pLnVwZGF0ZSgpO1xyXG4gICAgICBlLmRyYXcoKTtcclxuICAgIH1cclxuICAgIGN0eC5mcmFtZSsrO1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gIGN0eC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwO1xyXG4gIGN0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG59XHJcblxyXG52YXIgY3R4LFxyXG4gIGYsXHJcbiAgZSA9IDAsXHJcbiAgcG9zID0ge30sXHJcbiAgbGluZXMgPSBbXSxcclxuICBFID0ge1xyXG4gICAgZGVidWc6IHRydWUsXHJcbiAgICBmcmljdGlvbjogMC41LFxyXG4gICAgdHJhaWxzOiAyMCxcclxuICAgIHNpemU6IDUwLFxyXG4gICAgZGFtcGVuaW5nOiAwLjI1LFxyXG4gICAgdGVuc2lvbjogMC45OCxcclxuICB9O1xyXG5mdW5jdGlvbiBOb2RlKCkge1xyXG4gIHRoaXMueCA9IDA7XHJcbiAgdGhpcy55ID0gMDtcclxuICB0aGlzLnZ5ID0gMDtcclxuICB0aGlzLnZ4ID0gMDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBjdHgucnVubmluZyA9IHRydWU7XHJcbiAgY3R4LmZyYW1lID0gMTtcclxuICBmID0gbmV3IG4oe1xyXG4gICAgcGhhc2U6IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSSxcclxuICAgIGFtcGxpdHVkZTogODUsXHJcbiAgICBmcmVxdWVuY3k6IDAuMDAxNSxcclxuICAgIG9mZnNldDogMjg1LFxyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2Vtb3ZlKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Nb3VzZW1vdmUpO1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCByZXNpemVDYW52YXMpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgIGlmICghY3R4LnJ1bm5pbmcpIHtcclxuICAgICAgY3R4LnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICByZW5kZXIoKTtcclxuICAgIH1cclxuICB9KTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgIGN0eC5ydW5uaW5nID0gdHJ1ZTtcclxuICB9KTtcclxuICByZXNpemVDYW52YXMoKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIm4iLCJlIiwiaW5pdCIsInByb3RvdHlwZSIsInBoYXNlIiwib2Zmc2V0IiwiZnJlcXVlbmN5IiwiYW1wbGl0dWRlIiwidXBkYXRlIiwiTWF0aCIsInNpbiIsInZhbHVlIiwiTGluZSIsInNwcmluZyIsInJhbmRvbSIsImZyaWN0aW9uIiwiRSIsIm5vZGVzIiwidCIsInNpemUiLCJOb2RlIiwieCIsInBvcyIsInkiLCJwdXNoIiwidngiLCJ2eSIsImkiLCJhIiwibGVuZ3RoIiwiZGFtcGVuaW5nIiwidGVuc2lvbiIsImRyYXciLCJjdHgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJvIiwicXVhZHJhdGljQ3VydmVUbyIsInN0cm9rZSIsImNsb3NlUGF0aCIsIm9uTW91c2Vtb3ZlIiwibGluZXMiLCJ0cmFpbHMiLCJjIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJjbGllbnRYIiwiY2xpZW50WSIsInByZXZlbnREZWZhdWx0IiwibCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJydW5uaW5nIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiY2xlYXJSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJzdHJva2VTdHlsZSIsInJvdW5kIiwiZiIsImxpbmVXaWR0aCIsImZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGVidWciLCJyZW5kZXJDYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJQSSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/renderCanvas.js\n"));

/***/ })

});