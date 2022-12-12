(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8768:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Filters_container__qJGow",
	"active": "Filters_active__lF466",
	"line": "Filters_line__bKpKg",
	"square": "Filters_square__T8nmb"
};


/***/ }),

/***/ 9374:
/***/ ((module) => {

// Exports
module.exports = {
	"mapCanvas": "MapGl_mapCanvas__M63M8",
	"map": "MapGl_map__sYi4n",
	"point": "MapGl_point__UYmoV",
	"icon": "MapGl_icon__OmoIu",
	"title": "MapGl_title__cU_sr",
	"opened": "MapGl_opened__fwthg"
};


/***/ }),

/***/ 4119:
/***/ ((module) => {

// Exports
module.exports = {
	"largeTitle": "Home_largeTitle__7wGH8",
	"mainTitle": "Home_mainTitle__CKEOL"
};


/***/ }),

/***/ 9549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./components/Cards/Cards.tsx + 1 modules
var Cards = __webpack_require__(3630);
// EXTERNAL MODULE: ./layouts/DefaultLayout/DefaultLayout.tsx
var DefaultLayout = __webpack_require__(4333);
// EXTERNAL MODULE: ./pages/Home/Home.module.scss
var Home_module = __webpack_require__(4119);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./components/TagsList.tsx
var TagsList = __webpack_require__(8009);
// EXTERNAL MODULE: ./components/CategoryList.tsx
var CategoryList = __webpack_require__(1111);
// EXTERNAL MODULE: ./components/ListDisplay/ListDisplay.tsx
var ListDisplay = __webpack_require__(2852);
// EXTERNAL MODULE: ./components/Filters/Filters.module.scss
var Filters_module = __webpack_require__(8768);
var Filters_module_default = /*#__PURE__*/__webpack_require__.n(Filters_module);
;// CONCATENATED MODULE: ./components/Filters/Filters.tsx


function Filters({ cardDisplay , onButtonClick  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Filters_module_default()).container} ${cardDisplay ? "" : (Filters_module_default()).active}`,
                onClick: onButtonClick,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Filters_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Filters_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Filters_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Filters_module_default()).line
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Filters_module_default()).container} ${cardDisplay ? (Filters_module_default()).active : ""}`,
                onClick: onButtonClick,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Filters_module_default()).square
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Filters_module_default()).square
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Filters_module_default()).square
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Filters_module_default()).square
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: external "react-map-gl"
const external_react_map_gl_namespaceObject = require("react-map-gl");
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_namespaceObject);
// EXTERNAL MODULE: ./components/Map/MapGl.module.scss
var MapGl_module = __webpack_require__(9374);
var MapGl_module_default = /*#__PURE__*/__webpack_require__.n(MapGl_module);
// EXTERNAL MODULE: ./utils/camelize.js
var camelize = __webpack_require__(6573);
// EXTERNAL MODULE: ./types/colors.type.ts
var colors_type = __webpack_require__(142);
;// CONCATENATED MODULE: ./components/Map/MapGl.tsx







function MapGl({ posts  }) {
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: viewState , 1: setViewState  } = (0,external_react_.useState)({
        latitude: 56.14788383454515,
        longitude: 10.210058485187,
        zoom: 14
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
            style: {
                width: "100vw",
                height: "500px"
            },
            ...viewState,
            onMove: (evt)=>setViewState(evt.viewState)
            ,
            maxZoom: 17,
            minZoom: 13,
            scrollZoom: false,
            mapStyle: "mapbox://styles/anetahaha/clbeb4ftc002e14p79cgh7e6t",
            mapboxAccessToken: "pk.eyJ1IjoiYW5ldGFoYWhhIiwiYSI6ImNsYmU3MXVpbDAyZ2ozcXBnbmhmZDc4aXUifQ.27PW9H2rbmyeI44A7pgcEQ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_namespaceObject.NavigationControl, {}),
                posts.map((post, index)=>post.frontmatter.longitude && /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_namespaceObject.Marker, {
                        latitude: post.frontmatter.latitude,
                        longitude: post.frontmatter.longitude,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(MapGl_module_default()).point} bg-${colors_type/* categoryColors */.w[(0,camelize/* camelize */._)(post?.frontmatter.type)]}`,
                            onMouseEnter: ()=>setName(post.frontmatter.title)
                            ,
                            onMouseLeave: ()=>setName("")
                            ,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `/cards/star.png`,
                                    alt: `icon`,
                                    className: (MapGl_module_default()).icon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(MapGl_module_default()).title} bg-${colors_type/* categoryColors */.w[(0,camelize/* camelize */._)(post?.frontmatter.type)]} ${name === post.frontmatter.title ? (MapGl_module_default()).opened : ""}`,
                                    children: [
                                        name === post.frontmatter.title ? name : "",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "gray",
                                            children: [
                                                " ",
                                                name === post.frontmatter.title ? post.frontmatter.address : ""
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }, index)
                )
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/index.tsx













async function getStaticProps() {
    const files = external_fs_default().readdirSync(external_path_default().join("pages/posts"));
    const posts = files.map((filename)=>{
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
function Home({ posts  }) {
    const { 0: category , 1: setCategory  } = (0,external_react_.useState)([]);
    const { 0: searchQuery , 1: setSearchQuery  } = (0,external_react_.useState)("");
    const { 0: blogs , 1: setBlogs  } = (0,external_react_.useState)([]);
    const { 0: cardDisplay , 1: setCardDisplay  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
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
    const title = "Home";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DefaultLayout/* DefaultLayout */.H, {
        title: title,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "bg-black center",
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: (Home_module_default()).mainTitle,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "purple",
                                children: "N\xe5bo map"
                            }),
                            " is an interactive guide to help you organise all spheres of your cultural event and match you with the right people and facilities you might havent even know existed"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MapGl, {
                posts: posts
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CategoryList/* default */.Z, {
                    posts: posts,
                    onTagClick: onCategorySet,
                    category: category
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                style: {
                    marginTop: -80
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).listContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex",
                                style: {
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        children: [
                                            "showing all",
                                            " ",
                                            category.length === 0 || /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `${(Home_module_default()).searchQuery} purplelight`,
                                                        onClick: ()=>setCategory([])
                                                        ,
                                                        children: category
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            searchQuery && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    " ",
                                                    "including",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `${(Home_module_default()).searchQuery} purplelight`,
                                                        onClick: ()=>setSearchQuery("")
                                                        ,
                                                        children: searchQuery
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "gray",
                                                children: [
                                                    " ",
                                                    blogs.length,
                                                    " results"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Filters, {
                                        cardDisplay: cardDisplay,
                                        onButtonClick: ()=>setCardDisplay(!cardDisplay)
                                    })
                                ]
                            }),
                            cardDisplay ? /*#__PURE__*/ jsx_runtime_.jsx(Cards/* default */.Z, {
                                posts: blogs,
                                background: "gray"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(ListDisplay/* default */.Z, {
                                posts: blogs
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagsList/* default */.Z, {
                        posts: posts
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "bg-purple",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        style: {
                            maxWidth: 600
                        },
                        children: "Are you looking to organise a festival?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            maxWidth: 800,
                            marginBottom: 12
                        },
                        children: "Skateducate er en frivillig forening, der prim\xe6rt arbejder for at f\xe5 flere kvinder, piger og non-bin\xe6re til at blive en del af skateboardmilj\xf8et. Skateducate er en frivillig forening, der prim\xe6rt arbejder for at f\xe5 flere kvinder, piger og non-bin\xe6re til at blive en del af skateboardmilj\xf8et."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        style: {
                            marginRight: 12
                        },
                        children: "accomodation"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "catering"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "bg-salmon right",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        style: {
                            maxWidth: 600,
                            textAlign: "right",
                            marginLeft: "auto"
                        },
                        children: "Or looking for a venue to host your event?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            maxWidth: 800,
                            marginLeft: "auto",
                            marginBottom: 12
                        },
                        children: "Skateducate er en frivillig forening, der prim\xe6rt arbejder for at f\xe5 flere kvinder, piger og non-bin\xe6re til at blive en del af skateboardmilj\xf8et. Skateducate er en frivillig forening, der prim\xe6rt arbejder for at f\xe5 flere kvinder, piger og non-bin\xe6re til at blive en del af skateboardmilj\xf8et."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "venue"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "center bg-yellow",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        style: {
                            maxWidth: 600,
                            margin: "auto"
                        },
                        children: "Or just an individual wanting to attend some workshop?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            maxWidth: 800,
                            margin: "auto",
                            marginTop: 12
                        },
                        children: "Skateducate er en frivillig forening, der prim\xe6rt arbejder for at f\xe5 flere kvinder, piger og non-bin\xe6re til at blive en del af skateboardmilj\xf8et. Skateducate er en frivillig forening, der prim\xe6rt arbejder for at f\xe5 flere kvinder, piger og non-bin\xe6re til at blive en del af skateboardmilj\xf8et."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        style: {
                            marginRight: 12
                        },
                        children: "workshops"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "workspaces"
                    })
                ]
            })
        ]
    });
};


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675,618,9,417,630,333], () => (__webpack_exec__(9549)));
module.exports = __webpack_exports__;

})();