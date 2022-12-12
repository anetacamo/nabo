"use strict";
exports.id = 9;
exports.ids = [9];
exports.modules = {

/***/ 8009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TagsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4834);



function TagsList({ posts  }) {
    let allTags = [];
    const tags = posts.map((item)=>item.frontmatter.tags?.map((tag)=>allTags.push(tag)
        )
    );
    let tagsonce = [
        ...new Set(allTags)
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "tags",
            children: tagsonce.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/tag/${(0,_utils_slugify__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .l)(tag)}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "type bg-purplelight",
                        children: tag
                    })
                }, index)
            )
        })
    });
};


/***/ }),

/***/ 4834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ slugify)
/* harmony export */ });
function slugify(text) {
    if (text !== undefined) {
        return text.toString().toLowerCase().replace(/á/g, "a").replace(/č/g, "c").replace(/ď/g, "c").replace(/é/g, "e").replace(/ě/g, "e").replace(/í/g, "i").replace(/ň/g, "n").replace(/ó/g, "o").replace(/ř/g, "r").replace(/š/g, "s").replace(/ť/g, "t").replace(/ú/g, "u").replace(/ů/g, "u").replace(/ž/g, "z").replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
    }
}


/***/ })

};
;