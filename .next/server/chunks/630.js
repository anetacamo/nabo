exports.id = 630;
exports.ids = [630];
exports.modules = {

/***/ 4772:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "CardRegular_card__8frfI",
	"image": "CardRegular_image__izk_a",
	"special": "CardRegular_special__eopY_",
	"link": "CardRegular_link__HXQKk"
};


/***/ }),

/***/ 3630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Cards)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./utils/camelize.js
var camelize = __webpack_require__(6573);
// EXTERNAL MODULE: ./types/colors.type.ts
var colors_type = __webpack_require__(142);
// EXTERNAL MODULE: ./components/CardRegular/CardRegular.module.scss
var CardRegular_module = __webpack_require__(4772);
var CardRegular_module_default = /*#__PURE__*/__webpack_require__.n(CardRegular_module);
;// CONCATENATED MODULE: ./components/CardRegular/CardRegular.tsx





function CardRegular({ post , children  }) {
    return(//@ts-expect-error
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(CardRegular_module_default()).card} bg-${colors_type/* categoryColors */.w[(0,camelize/* camelize */._)(post?.type)]}`,
        children: [
            post?.image && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (CardRegular_module_default()).image,
                style: {
                    padding: 48,
                    backgroundColor: "black",
                    margin: -24,
                    opacity: 0.2,
                    textAlign: "center"
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
            post?.title && /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (CardRegular_module_default()).special,
                children: post?.title
            }),
            post?.address && /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "bolded ",
                children: post?.address
            }),
            post?.link && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                className: "bolded",
                children: [
                    "website ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (CardRegular_module_default()).link,
                        children: post?.link
                    })
                ]
            }),
            post?.text && /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                style: {
                    marginTop: 12
                },
                children: post?.text
            }),
            post?.opening && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                style: {
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "bolded",
                        children: "open "
                    }),
                    post?.opening
                ]
            }),
            children
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Cards/Cards.tsx


function Cards({ posts , background  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex-center",
        style: {
            alignItems: "unset",
            margin: -8
        },
        children: posts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx(CardRegular, {
                post: post.frontmatter
            }, index)
        )
    });
};


/***/ })

};
;