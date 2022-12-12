(() => {
var exports = {};
exports.id = 278;
exports.ids = [278];
exports.modules = {

/***/ 7206:
/***/ ((module) => {

// Exports
module.exports = {
	"paragraph": "Paragraph_paragraph__rDXlW",
	"left": "Paragraph_left__Gmej1",
	"small": "Paragraph_small__JwQnn",
	"large": "Paragraph_large__dzVCC"
};


/***/ }),

/***/ 9814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ association),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Card.tsx


function Card({ post , background , bordercolor , style , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `card bg-${background} border-${bordercolor}`,
        style: style,
        children: [
            post?.image && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    padding: 12
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: `/cards/${post?.image}`,
                    alt: "blue",
                    className: `half filter-yellow`,
                    height: 80,
                    width: 80,
                    objectFit: "contain"
                })
            }),
            post?.type && /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "type bg-purple",
                children: post?.type
            }),
            post?.title && //<Link href={`/events/${slugify(post?.title)}`}>
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                style: {
                    marginBottom: "-8px",
                    cursor: "pointer"
                },
                children: post?.title
            }),
            post?.address && /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "bolded purple",
                children: post?.address
            }),
            post?.address && /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: post?.text
            }),
            post?.opening && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "purple bolded",
                        children: "open "
                    }),
                    post?.opening
                ]
            }),
            children
        ]
    });
};

// EXTERNAL MODULE: ./components/Paragraph/Paragraph.module.scss
var Paragraph_module = __webpack_require__(7206);
var Paragraph_module_default = /*#__PURE__*/__webpack_require__.n(Paragraph_module);
;// CONCATENATED MODULE: ./components/Paragraph/Paragraph.tsx


function Paragraph({ children , size , left  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: `large ${(Paragraph_module_default()).paragraph} ${size && (Paragraph_module_default()).large} ${left && (Paragraph_module_default()).left}`,
        children: children
    });
};

;// CONCATENATED MODULE: ./components/StarsDivider.tsx


function StarsDivider() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "stars-divider",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/cards/star.png",
                alt: "star",
                width: 40,
                height: 40,
                className: "star filter-purple"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/cards/star.png",
                alt: "star",
                width: 40,
                height: 40,
                className: "star filter-purple"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/cards/star.png",
                alt: "star",
                width: 40,
                height: 40,
                className: "star filter-purple"
            })
        ]
    });
};

// EXTERNAL MODULE: ./layouts/DefaultLayout/DefaultLayout.tsx
var DefaultLayout = __webpack_require__(4333);
;// CONCATENATED MODULE: ./texts/association.json
const association_namespaceObject = JSON.parse('{"m":{"Oc":"subtitle","TN":"Association of South Harbour","fL":"Text about association, become a member, join our events, takeover instagram, send proposals, ask question, sign to newsletter"},"f":{"Oc":"Two types of memberships","TN":"become a member","OV":[{"title":"first type of membership","text":"Text about assosiation, two types of membership, what does it do, instagram takeover - The values - - Documents - Board of people - How to be a member - how to be a sponsor","button":"mail us"},{"title":"second type of membership","text":"Text about assosiation, two types of membership, what does it do, instagram takeover - The values - - Documents - Board of people - How to be a member - how to be a sponsor","button":"mail us"},{"title":"become a sponsor","text":"Text about assosiation, two types of membership, what does it do, instagram takeover - The values - - Documents - Board of people - How to be a member - how to be a sponsor","button":"mail us"}],"EI":"If you have any alternative proposals for cooperation, questions or just want to say hi","LI":"let us know","CR":{"TN":"Instagram takeover","fL":"Text about assosiation, two types of membership, what does it do, instagram takeover - The values - - Documents - Board of people - How to be a member - how to be a sponsor","LI":"mail us"}}}');
// EXTERNAL MODULE: ./components/ImageSection/ImageSection.tsx
var ImageSection = __webpack_require__(3394);
;// CONCATENATED MODULE: ./pages/association.tsx










async function getStaticProps() {
    // get files from the directory
    const files = external_fs_default().readdirSync(external_path_default().join("pages/posts"));
    const posts = files.map((filename)=>{
        // get slug
        const slug = filename.replace(".md", "");
        // get all frontmatter here:
        const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join("pages/posts", filename), "utf-8");
        const { data: frontmatter  } = external_gray_matter_default()(markdownWithMeta);
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
const Association = ({ posts  })=>{
    const title = "Association of South Harbour";
    return /*#__PURE__*/ jsx_runtime_.jsx(DefaultLayout/* DefaultLayout */.H, {
        title: title,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "center bg-black",
            style: {
                paddingBottom: 48
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(StarsDivider, {}),
                        association_namespaceObject.m.Oc !== "" && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "purple-bg",
                            children: association_namespaceObject.m.Oc
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            style: {
                                maxWidth: 600,
                                margin: "auto"
                            },
                            children: association_namespaceObject.m.TN
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                            children: association_namespaceObject.m.fL
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(StarsDivider, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ImageSection/* default */.Z, {
                    background: "/14.jpeg"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "bg-purple",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "pink",
                            children: association_namespaceObject.f.Oc
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: association_namespaceObject.f.TN
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-center",
                            children: association_namespaceObject.f.OV.map((mem, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                    background: index === 2 ? "pink" : "black",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: mem.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                            children: mem.text
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            children: mem.button
                                        })
                                    ]
                                }, index)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                            children: association_namespaceObject.f.EI
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            children: association_namespaceObject.f.LI
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                style: {
                                    width: 640,
                                    height: 240,
                                    maxWidth: 640
                                },
                                background: "yellow",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        style: {
                                            marginBottom: 0
                                        },
                                        children: association_namespaceObject.f.CR.TN
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        children: association_namespaceObject.f.CR.fL
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        style: {
                                            marginTop: 0
                                        },
                                        children: association_namespaceObject.f.CR.LI
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const association = (Association);


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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675,618,333,394], () => (__webpack_exec__(9814)));
module.exports = __webpack_exports__;

})();