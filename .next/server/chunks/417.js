exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 1898:
/***/ ((module) => {

// Exports
module.exports = {
	"listContainer": "ListDisplay_listContainer__ub044",
	"flexName": "ListDisplay_flexName__mlHCJ",
	"address": "ListDisplay_address__xk9zf",
	"type": "ListDisplay_type__XZgux",
	"title": "ListDisplay_title__6mH1i",
	"text": "ListDisplay_text__3VJRS",
	"link": "ListDisplay_link__GVhrU",
	"moreInfo": "ListDisplay_moreInfo__6p8Et"
};


/***/ }),

/***/ 1111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CategoryList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_camelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6573);
/* harmony import */ var _types_colors_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(142);



function CategoryList({ posts , onTagClick , category  }) {
    let allTags = [];
    const tags = posts.map((item)=>allTags.push(item.frontmatter.type)
    );
    let tagsonce = [
        ...new Set(allTags)
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "tags",
            children: tagsonce.map((tag, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `type bg-${_types_colors_type__WEBPACK_IMPORTED_MODULE_1__/* .categoryColors */ .w[(0,_utils_camelize__WEBPACK_IMPORTED_MODULE_2__/* .camelize */ ._)(tag)]} ${category == tag && "bg-chosen"}`,
                    "aria-label": `${tag} - ${category == tag ? "checked" : ""}`,
                    style: {
                        transitionDuration: "350ms"
                    },
                    onClick: ()=>onTagClick(tag)
                    ,
                    role: "button",
                    tabIndex: 0,
                    onKeyPress: ()=>onTagClick(tag)
                    ,
                    children: [
                        tag,
                        category == tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                paddingLeft: 8
                            },
                            children: " x"
                        })
                    ]
                }, index);
            })
        })
    });
};


/***/ }),

/***/ 2852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4834);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1898);
/* harmony import */ var _ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);






const ListDisplay = ({ posts  })=>{
    const { 0: extended , 1: setExtended  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: posts.map((post, index1)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listContainer),
                onClick: ()=>setExtended(!extended)
                ,
                tabIndex: 0,
                onKeyPress: ()=>setExtended(!extended)
                ,
                role: "button",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `flex-center ${(_ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().flexName)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: (_ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                                    children: [
                                        post.frontmatter.title,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().address),
                                            children: post.frontmatter.address
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: (_ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().type),
                                children: post.frontmatter.type
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().moreInfo)} ${extended || "hidden"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                                children: post.frontmatter.text
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "links",
                                children: post.frontmatter.tags?.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: `/events/${(0,_utils_slugify__WEBPACK_IMPORTED_MODULE_5__/* .slugify */ .l)(tag)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "type bg-purple",
                                            children: tag
                                        })
                                    }, index)
                                )
                            }),
                            post.frontmatter.link && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: post.frontmatter.link,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_ListDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaArrowRight, {}),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                marginLeft: 8
                                            },
                                            children: " visit website"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }, index1)
        )
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListDisplay);


/***/ }),

/***/ 142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ categoryColors)
/* harmony export */ });
const categoryColors = {
    community: "yellow",
    shop: "purplelight",
    cafe: "salmon",
    education: "purple",
    studio: "pink",
    gallery: "black",
    socialMovement: "blue",
    sport: "lightblue",
    house: "turqoise"
};


/***/ }),

/***/ 6573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ camelize)
/* harmony export */ });
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}


/***/ })

};
;