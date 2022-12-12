exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 6862:
/***/ ((module) => {

// Exports
module.exports = {
	"hamburger": "Hamburger_hamburger__0oU6t",
	"line": "Hamburger_line__elGiE"
};


/***/ }),

/***/ 2764:
/***/ ((module) => {

// Exports
module.exports = {
	"column": "LargeMenu_column__FWL80",
	"li": "LargeMenu_li__jMF7O",
	"largeMenu": "LargeMenu_largeMenu__kh4Vs",
	"menuItem": "LargeMenu_menuItem__A7GMh"
};


/***/ }),

/***/ 1566:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Menu_nav__WfyMi",
	"open": "Menu_open__nSkZt"
};


/***/ }),

/***/ 5098:
/***/ ((module) => {

// Exports
module.exports = {
	"skipNav": "SkipNav_skipNav__8kBFW"
};


/***/ }),

/***/ 9618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Menu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/SkipNav/SkipNav.module.scss
var SkipNav_module = __webpack_require__(5098);
var SkipNav_module_default = /*#__PURE__*/__webpack_require__.n(SkipNav_module);
;// CONCATENATED MODULE: ./components/SkipNav/SkipNav.tsx


function SkipNav() {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "#content",
        className: (SkipNav_module_default()).skipNav,
        children: "skip Navigation"
    });
};

// EXTERNAL MODULE: ./components/Menu/Menu.module.scss
var Menu_module = __webpack_require__(1566);
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);
// EXTERNAL MODULE: ./components/Hamburger/Hamburger.module.scss
var Hamburger_module = __webpack_require__(6862);
var Hamburger_module_default = /*#__PURE__*/__webpack_require__.n(Hamburger_module);
;// CONCATENATED MODULE: ./components/Hamburger/Hamburger.tsx


function Hamburger({ open , onButtonClick  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Hamburger_module_default()).hamburger,
        onClick: onButtonClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Hamburger_module_default()).line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Hamburger_module_default()).line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Hamburger_module_default()).line
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/LargeMenu/LargeMenu.module.scss
var LargeMenu_module = __webpack_require__(2764);
var LargeMenu_module_default = /*#__PURE__*/__webpack_require__.n(LargeMenu_module);
;// CONCATENATED MODULE: ./components/LargeMenu/LargeMenu.tsx



function Footer() {
    const menuItems = [
        {
            name: "kort",
            link: "map"
        },
        {
            name: "brugere",
            link: "members"
        },
        {
            name: "viden om",
            link: "about"
        },
        {
            name: "foreningen",
            link: "association"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex-between' ${(LargeMenu_module_default()).largeMenu} bg-purple`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (LargeMenu_module_default()).column,
                        style: {
                            minWidth: 200
                        },
                        children: [
                            menuItems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/${item.link}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (LargeMenu_module_default()).menuItem,
                                        children: item.name
                                    })
                                }, index)
                            ),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "F"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "LI"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Ig"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (LargeMenu_module_default()).column,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Partners"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (LargeMenu_module_default()).li,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "www.sydhavnenskvarteret.dk",
                                    children: "Sydhavens Kvarteret"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (LargeMenu_module_default()).li,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "www.sydhavnensfestival.dk",
                                    children: "Sydhavens Festival"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (LargeMenu_module_default()).li,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "www.sammenomsydhaven.dk",
                                    children: "Sydhavens Festival"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "right",
                children: [
                    "copyright Sydhaven 2022 | code & design by",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "AnetaCamo"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Menu/Menu.tsx







function Menu() {
    const menuItems = [
        {
            name: "venue",
            link: "/",
            color: "gray"
        },
        {
            name: "workspaces",
            link: "/",
            color: "yellow"
        },
        {
            name: "accomodation",
            link: "/",
            color: "salmon"
        },
        {
            name: "catering",
            link: "/",
            color: "purplelight"
        },
        {
            name: "community",
            link: "/",
            color: "green"
        }, 
    ];
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(Menu_module_default()).logo} logo h2`,
                    children: "S"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                role: "navigation",
                className: `bg-black menu ${(Menu_module_default()).nav} ${open && (Menu_module_default()).open} `,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SkipNav, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: `${(Menu_module_default()).logo} logo h2`,
                            children: "N\xe5b\xf8 Map"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex desktop",
                        children: menuItems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/${item.link}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: `${(Menu_module_default()).li} li ${item.color}`,
                                    children: item.name
                                })
                            }, index)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Hamburger, {
                        onButtonClick: ()=>setOpen(!open)
                    })
                ]
            }),
            open && /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


/***/ })

};
;