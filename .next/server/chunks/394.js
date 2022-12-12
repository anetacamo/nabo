exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 2502:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "ImageSection_image__bPZ7j",
	"full": "ImageSection_full__IzSXl",
	"textContainer": "ImageSection_textContainer__1rcGg",
	"blackOverlay": "ImageSection_blackOverlay__alhft"
};


/***/ }),

/***/ 3394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageSection_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2502);
/* harmony import */ var _ImageSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageSection_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function ImageSection({ background , children , overlay , full  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `${(_ImageSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default().image)} ${full && (_ImageSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default().full)}`,
        style: {
            backgroundImage: `url(${background})`
        },
        children: [
            overlay && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ImageSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default().blackOverlay)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ImageSection_module_scss__WEBPACK_IMPORTED_MODULE_1___default().textContainer),
                children: children
            })
        ]
    });
};


/***/ })

};
;