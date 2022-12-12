(() => {
var exports = {};
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 7401:
/***/ ((module) => {

// Exports
module.exports = {
	"absolute": "All_absolute__h2z6E",
	"search": "All_search__GWpbT",
	"button": "All_button__mQ988",
	"listContainer": "All_listContainer__nNHTA",
	"flexName": "All_flexName__hy9dZ",
	"searchQuery": "All_searchQuery__1NgBT"
};


/***/ }),

/***/ 3822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CategoryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1111);
/* harmony import */ var _components_ListDisplay_ListDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2852);
/* harmony import */ var _layouts_SinglePageLayout_SinglePageLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2239);
/* harmony import */ var _All_All_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7401);
/* harmony import */ var _All_All_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_All_All_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);










async function getStaticProps() {
    // get files from the directory
    const files = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_4___default().join("pages/posts"));
    const posts = files.map((filename)=>{
        // get slug
        const slug = filename.replace(".md", "");
        // get all frontmatter here:
        const markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_4___default().join("pages/posts", filename), "utf-8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(markdownWithMeta);
        return {
            slug,
            frontmatter
        };
    });
    return {
        props: {
            posts: posts
        }
    };
}
const All = ({ posts  })=>{
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: searchQuery , 1: setSearchQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: blogs , 1: setBlogs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const postsToRender = posts.filter((post)=>category === [] ? true : post.frontmatter.type.includes(category)
        );
        const results = postsToRender.filter((post)=>searchQuery === "" ? true : post.frontmatter.title.toLowerCase().includes(searchQuery)
        );
        setBlogs(results);
    }, [
        searchQuery,
        category
    ]);
    const onCategorySet = (cat)=>{
        const previousCategory = category;
        previousCategory === cat ? setCategory([]) : setCategory(cat);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_SinglePageLayout_SinglePageLayout__WEBPACK_IMPORTED_MODULE_7__/* .SinglePageLayout */ .S, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex ${(_All_All_module_scss__WEBPACK_IMPORTED_MODULE_9___default().absolute)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: (_All_All_module_scss__WEBPACK_IMPORTED_MODULE_9___default().search),
                        placeholder: "search",
                        onChange: (e)=>setSearchQuery(e.target.value.toLowerCase())
                        ,
                        value: searchQuery
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                style: {
                                    marginBottom: 12
                                },
                                children: "Got something to offer?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                href: "/newMember",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_All_All_module_scss__WEBPACK_IMPORTED_MODULE_9___default().button),
                                    children: "+ join the list"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                style: {
                    marginTop: 40
                },
                children: " All Members"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CategoryList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                posts: posts,
                onTagClick: onCategorySet,
                category: category
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_All_All_module_scss__WEBPACK_IMPORTED_MODULE_9___default().listContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                        children: [
                            "showing all",
                            " ",
                            category.length === 0 || /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `${(_All_All_module_scss__WEBPACK_IMPORTED_MODULE_9___default().searchQuery)} purplelight`,
                                        onClick: ()=>setCategory([])
                                        ,
                                        children: category
                                    }),
                                    " "
                                ]
                            }),
                            searchQuery && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    " ",
                                    "including",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `${(_All_All_module_scss__WEBPACK_IMPORTED_MODULE_9___default().searchQuery)} purplelight`,
                                        onClick: ()=>setSearchQuery("")
                                        ,
                                        children: searchQuery
                                    })
                                ]
                            })
                        ]
                    }),
                    blogs.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ListDisplay_ListDisplay__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            post: post
                        }, index)
                    )
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (All);


/***/ }),

/***/ 4834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,618,239,417], () => (__webpack_exec__(3822)));
module.exports = __webpack_exports__;

})();