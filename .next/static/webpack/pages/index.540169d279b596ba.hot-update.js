"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _lang_en_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lang/en/home */ \"./src/lang/en/home.ts\");\n/* harmony import */ var _lang_es_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lang/es/home */ \"./src/lang/es/home.ts\");\n/* harmony import */ var _lang_pt_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lang/pt/home */ \"./src/lang/pt/home.ts\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n//el index es el home\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Home = (param)=>{\n    let { data  } = param;\n    _s();\n    // Traducciones\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { locale  } = router;\n    const content = locale === \"en\" ? _lang_en_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"] : locale === \"es\" ? _lang_es_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : _lang_pt_home__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        title: \"Ecommerce DH\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: content.title\n                }, void 0, false, {\n                    fileName: \"/Users/imac/Desktop/CTD/CTDIII/FRONT III/Semana_1/MarioNext/src/pages/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                    children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                            item: item\n                        }, item.tail, false, {\n                            fileName: \"/Users/imac/Desktop/CTD/CTDIII/FRONT III/Semana_1/MarioNext/src/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 7\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/imac/Desktop/CTD/CTDIII/FRONT III/Semana_1/MarioNext/src/pages/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/imac/Desktop/CTD/CTDIII/FRONT III/Semana_1/MarioNext/src/pages/index.tsx\",\n            lineNumber: 35,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/imac/Desktop/CTD/CTDIII/FRONT III/Semana_1/MarioNext/src/pages/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFCQUFxQjs7O0FBWWZBO0FBWG1DO0FBQ0k7QUFFRjtBQUNBO0FBQ0E7QUFDRztBQUdOO0FBUXhDLE1BQU1RLE9BQXdCLFNBQVk7UUFBWCxFQUFDQyxLQUFJLEVBQUM7O0lBRXBDLGVBQWU7SUFDZixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFDSSxPQUFNLEVBQUMsR0FBR0Q7SUFDakIsTUFBTUUsVUFDTEQsV0FBVyxPQUNSUixxREFBYUEsR0FDYlEsV0FBVyxPQUNYUCxxREFBYUEsR0FDYkMscURBQWE7SUFHakIscUJBQ0MsOERBQUNILHNEQUFNQTtRQUFDVyxPQUFNO2tCQUNiLDRFQUFDQzs7OEJBQ0EsOERBQUNDOzhCQUFJSCxRQUFRQyxLQUFLOzs7Ozs7OEJBQ2xCLDhEQUFDQztvQkFBSUUsV0FBV1YscUVBQVc7OEJBQ3pCRyxLQUFLUyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNsQixrREFBSUE7NEJBQWlCa0IsTUFBTUE7MkJBQWpCQSxLQUFLQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUI7R0F6Qk1aOztRQUdVRCxrREFBU0E7OztLQUhuQkM7O0FBdUNOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vZWwgaW5kZXggZXMgZWwgaG9tZVxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICdAL2ludGVyZmFjZSc7XG5pbXBvcnQgaG9tZUNvbnRlbnRFTiBmcm9tIFwiQC9sYW5nL2VuL2hvbWVcIjtcbmltcG9ydCBob21lQ29udGVudEVTIGZyb20gXCJAL2xhbmcvZXMvaG9tZVwiO1xuaW1wb3J0IGhvbWVDb250ZW50UFQgZnJvbSBcIkAvbGFuZy9wdC9ob21lXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoe3N1YnNldHM6IFtcImxhdGluXCJdfSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGRhdGE6IENoYXJhY3RlcltdXG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPFByb3BzPiA9ICh7ZGF0YX0pID0+IHtcblxuXHQvLyBUcmFkdWNjaW9uZXNcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IHtsb2NhbGV9ID0gcm91dGVyO1xuXHRjb25zdCBjb250ZW50ID1cblx0XHRsb2NhbGUgPT09IFwiZW5cIlxuXHRcdFx0PyBob21lQ29udGVudEVOXG5cdFx0XHQ6IGxvY2FsZSA9PT0gXCJlc1wiXG5cdFx0XHQ/IGhvbWVDb250ZW50RVNcblx0XHRcdDogaG9tZUNvbnRlbnRQVDtcblxuXG5cdHJldHVybiAoXG5cdFx0PExheW91dCB0aXRsZT1cIkVjb21tZXJjZSBESFwiPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgxPntjb250ZW50LnRpdGxlfTwvaDE+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG5cdFx0XHRcdFx0e2RhdGEubWFwKChpdGVtKSA9PiAoXG5cdFx0XHRcdFx0XHQ8Q2FyZCBrZXk9e2l0ZW0udGFpbH0gaXRlbT17aXRlbX0gLz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PiB7XG5cdGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYW1paWJvYXBpLmNvbS9hcGkvYW1paWJvL1wiKVxuXHRjb25zdCByZXNwID0gYXdhaXQgY2hhcmFjdGVycy5qc29uKClcblx0Y29uc3QgZGF0YSA9IHJlc3AuYW1paWJvLnNsaWNlKDAsIDUwKVxuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGRhdGFcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJpbnRlciIsIkNhcmQiLCJMYXlvdXQiLCJob21lQ29udGVudEVOIiwiaG9tZUNvbnRlbnRFUyIsImhvbWVDb250ZW50UFQiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJIb21lIiwiZGF0YSIsInJvdXRlciIsImxvY2FsZSIsImNvbnRlbnQiLCJ0aXRsZSIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJ0YWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});