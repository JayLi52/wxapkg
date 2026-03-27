$gwx_XC_23 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];

        function gz$gwx_XC_23_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'f-row f-aic f-jcb rela bs data-v-34c1f592'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'height:'],
                            [
                                [7],
                                [3, 'w']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'padding-right:'],
                        [
                            [7],
                            [3, 'x']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([3, 'navbar-icon f-row f-aic f-jcc bs data-v-34c1f592'])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$slots']
                    ],
                    [3, 'left']
                ])
                Z([3, 'left'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-34c1f592'])
                Z([3, '34c1f592-0'])
                Z(z[8])
                Z([3, 'abso mx16 f-col f-aic f-jcc bs data-v-34c1f592'])
                Z([
                    [7],
                    [3, 'q']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$slots']
                    ],
                    [3, 'title']
                ])
                Z([3, 'title'])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([3, 'font20 f-row f-jcc f-aic data-v-34c1f592'])
                Z([3, 'margin-top:-10rpx'])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [7],
                    [3, 'n']
                ])
                Z([
                    [7],
                    [3, 'r']
                ])
                Z([
                    [7],
                    [3, 'v']
                ])
                Z([3, 'navbar-icon f-row f-aic f-jcc bs mr10 data-v-34c1f592'])
                Z([
                    [7],
                    [3, 't']
                ])
                Z([3, 'right'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_23 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_23 = true;
        var x = ['./components/navbar/navbar.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_23_1()
            var b9W = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var o0W = _v()
            _(b9W, o0W)
            if (_oz(z, 2, e, s, gg)) {
                o0W.wxVkey = 1
                var oBX = _mz(z, 'view', ['bindtap', 3, 'class', 1, 'style', 2], [], e, s, gg)
                var fCX = _v()
                _(oBX, fCX)
                if (_oz(z, 6, e, s, gg)) {
                    fCX.wxVkey = 1
                    var cDX = _n('slot')
                    _rz(z, cDX, 'name', 7, e, s, gg)
                    _(fCX, cDX)
                } else {
                    fCX.wxVkey = 2
                    var hEX = _v()
                    _(fCX, hEX)
                    if (_oz(z, 8, e, s, gg)) {
                        hEX.wxVkey = 1
                        var oFX = _mz(z, 'up-icon', ['bind:__l', 9, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                        _(hEX, oFX)
                    }
                    hEX.wxXCkey = 1
                    hEX.wxXCkey = 3
                }
                fCX.wxXCkey = 1
                fCX.wxXCkey = 3
                _(o0W, oBX)
            }
            var cGX = _mz(z, 'view', ['class', 13, 'style', 1], [], e, s, gg)
            var oHX = _v()
            _(cGX, oHX)
            if (_oz(z, 15, e, s, gg)) {
                oHX.wxVkey = 1
                var lIX = _n('slot')
                _rz(z, lIX, 'name', 16, e, s, gg)
                _(oHX, lIX)
            } else {
                oHX.wxVkey = 2
                var aJX = _v()
                _(oHX, aJX)
                if (_oz(z, 17, e, s, gg)) {
                    aJX.wxVkey = 1
                    var tKX = _mz(z, 'view', ['class', 18, 'style', 1], [], e, s, gg)
                    var eLX = _v()
                    _(tKX, eLX)
                    if (_oz(z, 20, e, s, gg)) {
                        eLX.wxVkey = 1
                    }
                    var bMX = _v()
                    _(tKX, bMX)
                    if (_oz(z, 21, e, s, gg)) {
                        bMX.wxVkey = 1
                    }
                    eLX.wxXCkey = 1
                    bMX.wxXCkey = 1
                    _(aJX, tKX)
                }
                aJX.wxXCkey = 1
            }
            oHX.wxXCkey = 1
            _(b9W, cGX)
            var xAX = _v()
            _(b9W, xAX)
            if (_oz(z, 22, e, s, gg)) {
                xAX.wxVkey = 1
                var oNX = _mz(z, 'view', ['bindtap', 23, 'class', 1, 'style', 2], [], e, s, gg)
                var xOX = _n('slot')
                _rz(z, xOX, 'name', 26, e, s, gg)
                _(oNX, xOX)
                _(xAX, oNX)
            }
            o0W.wxXCkey = 1
            o0W.wxXCkey = 3
            xAX.wxXCkey = 1
            _(r, b9W)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_23";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_23();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/navbar/navbar.wxml'] = [$gwx_XC_23, './components/navbar/navbar.wxml'];
else __wxAppCode__['components/navbar/navbar.wxml'] = $gwx_XC_23('./components/navbar/navbar.wxml');;
__wxRoute = "components/navbar/navbar";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/navbar/navbar.js";
define("components/navbar/navbar.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../common/vendor.js"),
        e = require("../../utils/device.js"),
        o = require("../../utils/util.js");
    Array || t.resolveComponent("up-icon")(), Math;
    var a = {
            __name: "navbar",
            props: {
                title: {
                    type: String,
                    default: ""
                },
                isPlace: {
                    type: Boolean,
                    default: !0
                },
                showBack: {
                    type: Boolean,
                    default: !0
                },
                bgColor: {
                    type: String,
                    default: "#ffffff"
                },
                titleColor: {
                    type: String,
                    default: "#000000"
                },
                iconColor: {
                    type: String,
                    default: ""
                },
                opacity: {
                    type: [String, Number],
                    default: "1"
                },
                customStyle: {
                    type: String,
                    default: ""
                },
                customClass: {
                    type: String,
                    default: ""
                },
                boxShadow: {
                    type: Boolean,
                    default: !1
                },
                backPageCallback: {
                    type: Function,
                    default: null
                },
                onlineStatus: {
                    type: [Number, String],
                    default: 0
                },
                distance: {
                    type: String,
                    default: ""
                }
            },
            emits: ["onRightTap"],
            setup: function(a, n) {
                var i = n.expose,
                    r = n.emit,
                    l = !!t.useSlots().right,
                    c = a,
                    u = r,
                    s = e.device.statusBarHeight,
                    p = e.device.navbarInnerHeight,
                    d = "height: ".concat(p, "px;width: ").concat(p, "px;"),
                    f = {
                        left: "".concat(p, "px"),
                        right: "".concat(p, "px"),
                        top: 0,
                        bottom: 0,
                        paddingLeft: e.device.navbarDiff + "px",
                        paddingRight: e.device.navbarDiff + "px"
                    },
                    g = 0;
                l && (g = e.device.wxMenuRight, f.paddingLeft = 0, f.paddingRight = 0, f.right = p + g + "px");
                var h = t.computed((function() {
                    var t = {
                        height: p + "px",
                        "padding-top": s + "px",
                        background: c.bgColor,
                        opacity: c.opacity
                    };
                    return c.boxShadow && (t.boxShadow = "0 8rpx 8rpx rgba(128, 128, 128, 0.1)"), t
                }));

                function x() {
                    c.backPageCallback ? c.backPageCallback(S) : S()
                }

                function S() {
                    o.shareBack()
                }

                function b() {
                    u("onRightTap")
                }
                return t.onMounted((function() {
                        var t = getCurrentPages();
                        1 === t.length && t[0].route
                    })), i({
                        backPage: S
                    }),
                    function(e, o) {
                        return t.e({
                            a: a.showBack
                        }, a.showBack ? {
                            b: t.p({
                                name: "arrow-left",
                                size: "20",
                                color: a.iconColor || a.titleColor
                            }),
                            c: t.r("left", {
                                color: a.iconColor || a.titleColor
                            }),
                            d: t.s(d),
                            e: t.o(x)
                        } : {}, {
                            f: t.s(d),
                            g: t.t(a.title),
                            h: a.titleColor,
                            i: a.onlineStatus || a.distance
                        }, a.onlineStatus || a.distance ? t.e({
                            j: a.onlineStatus
                        }, a.onlineStatus ? {
                            k: 3 != a.onlineStatus ? "#4cd964" : "#999",
                            l: t.t(3 != a.onlineStatus ? "在线" : "离线"),
                            m: 3 != a.onlineStatus ? "#4cd964" : "#999"
                        } : {}, {
                            n: a.distance
                        }, a.distance ? {
                            o: t.t(a.distance)
                        } : {}) : {}, {
                            p: t.r("title", {
                                color: a.titleColor
                            }),
                            q: t.s(f),
                            r: l
                        }, l ? {
                            s: t.r("right", {
                                color: a.iconColor || a.titleColor
                            }),
                            t: t.s(d),
                            v: t.o(b)
                        } : {}, {
                            w: t.unref(p) + "px",
                            x: t.unref(g) + "px",
                            y: t.n(a.customClass),
                            z: t.s(t.unref(h)),
                            A: t.s(a.customStyle),
                            B: "",
                            C: a.isPlace ? "".concat(t.unref(p) + t.unref(s), "px") : "0px"
                        })
                    }
            }
        },
        n = t._export_sfc(a, [
            ["__scopeId", "data-v-34c1f592"]
        ]);
    wx.createComponent(n);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/navbar/navbar.js'
});
require("components/navbar/navbar.js");