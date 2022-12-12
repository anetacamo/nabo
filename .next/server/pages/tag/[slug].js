"use strict";
(() => {
var exports = {};
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 5257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagsPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_SinglePageLayout_SinglePageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2239);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_TagsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8009);
/* harmony import */ var _components_Cards_Cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3630);







const folder = "pages/tags";
function TagsPage({ posts , tags , slug  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_SinglePageLayout_SinglePageLayout__WEBPACK_IMPORTED_MODULE_1__/* .SinglePageLayout */ .S, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "all tagged ",
                            slug
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards_Cards__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        posts: posts,
                        tag: slug,
                        regular: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        style: {
                            marginTop: "-16px",
                            marginBottom: "-4px"
                        },
                        children: "All tags"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TagsList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        posts: posts
                    })
                ]
            })
        ]
    });
};
async function getStaticPaths() {
    const files = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("pages/tags"));
    const paths = files.map((filename)=>({
            params: {
                slug: filename.replace(".md", "")
            }
        })
    );
    const posts = files.map((filename)=>{
        const slug = filename.replace(".md", "");
        const markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("pages/tags", filename), "utf-8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(markdownWithMeta);
        return {
            slug,
            frontmatter
        };
    });
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params: { slug: slug1  }  }) {
    const markdownWithMeta1 = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("pages/tags", slug1 + ".md"), "utf-8");
    const files = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("pages/tags"));
    const postsfiles = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("pages/posts"));
    const posts = postsfiles.map((filename)=>{
        // get slug
        const slug = filename.replace(".md", "");
        // get all frontmatter here:
        const markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("pages/posts", filename), "utf-8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(markdownWithMeta);
        return {
            slug,
            frontmatter
        };
    });
    const tags = files.map((filename)=>{
        // get slug
        const slug = filename.replace(".md", "");
        // get all frontmatter here:
        const markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("pages/tags", filename), "utf-8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(markdownWithMeta);
        return {
            slug,
            frontmatter
        };
    });
    const { data: frontmatter1 , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(markdownWithMeta1);
    return {
        props: {
            posts,
            tags,
            frontmatter: frontmatter1,
            slug: slug1,
            content
        }
    };
}


/***/ }),

/***/ 142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ camelize)
/* harmony export */ });
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675,618,239,9,630], () => (__webpack_exec__(5257)));
module.exports = __webpack_exports__;

})();