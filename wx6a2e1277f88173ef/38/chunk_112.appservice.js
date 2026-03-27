$gwx_XC_16 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];

        function gz$gwx_XC_16_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app-container data-v-70e2cfb5'])
                Z([3, 'top-fixed data-v-70e2cfb5'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'padding-top:'],
                            [
                                [7],
                                [3, 'f']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'height:'],
                        [
                            [7],
                            [3, 'g']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'navbar-left-icon data-v-70e2cfb5'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-70e2cfb5'])
                Z([3, '70e2cfb5-0'])
                Z(z[5])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[6])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z(z[7])
                Z([3, '70e2cfb5-1'])
                Z(z[10])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([3, 'recommend-list data-v-70e2cfb5'])
                Z([
                    [7],
                    [3, 'k']
                ])
                Z([
                    [7],
                    [3, 'm']
                ])
                Z([3, 'recommend-hidden data-v-70e2cfb5'])
                Z([
                    [7],
                    [3, 'l']
                ])
                Z(z[6])
                Z(z[7])
                Z([3, '70e2cfb5-2'])
                Z(z[21])
                Z([
                    [7],
                    [3, 'n']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_16 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_16 = true;
        var x = ['./pages/square/square-search/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_16_1()
            var oDT = _n('view')
            _rz(z, oDT, 'class', 0, e, s, gg)
            var oFT = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
            var cHT = _mz(z, 'view', ['bindtap', 3, 'class', 1], [], e, s, gg)
            var hIT = _v()
            _(cHT, hIT)
            if (_oz(z, 5, e, s, gg)) {
                hIT.wxVkey = 1
                var oJT = _mz(z, 'up-icon', ['bind:__l', 6, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(hIT, oJT)
            }
            hIT.wxXCkey = 1
            hIT.wxXCkey = 3
            _(oFT, cHT)
            var fGT = _v()
            _(oFT, fGT)
            if (_oz(z, 10, e, s, gg)) {
                fGT.wxVkey = 1
                var cKT = _mz(z, 'search-enter', ['bind:__l', 11, 'bindsearch', 1, 'class', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                _(fGT, cKT)
            }
            fGT.wxXCkey = 1
            fGT.wxXCkey = 3
            _(oDT, oFT)
            var xET = _v()
            _(oDT, xET)
            if (_oz(z, 16, e, s, gg)) {
                xET.wxVkey = 1
                var oLT = _n('view')
                _rz(z, oLT, 'class', 17, e, s, gg)
                var lMT = _v()
                _(oLT, lMT)
                if (_oz(z, 18, e, s, gg)) {
                    lMT.wxVkey = 1
                    var tOT = _mz(z, 'view', ['bindtap', 19, 'class', 1], [], e, s, gg)
                    var ePT = _v()
                    _(tOT, ePT)
                    if (_oz(z, 21, e, s, gg)) {
                        ePT.wxVkey = 1
                        var bQT = _mz(z, 'up-icon', ['bind:__l', 22, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                        _(ePT, bQT)
                    }
                    ePT.wxXCkey = 1
                    ePT.wxXCkey = 3
                    _(lMT, tOT)
                }
                var aNT = _v()
                _(oLT, aNT)
                if (_oz(z, 26, e, s, gg)) {
                    aNT.wxVkey = 1
                }
                lMT.wxXCkey = 1
                lMT.wxXCkey = 3
                aNT.wxXCkey = 1
                _(xET, oLT)
            }
            xET.wxXCkey = 1
            xET.wxXCkey = 3
            _(r, oDT)
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
                g = "$gwx_XC_16";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/square/square-search/index.wxml'] = [$gwx_XC_16, './pages/square/square-search/index.wxml'];
else __wxAppCode__['pages/square/square-search/index.wxml'] = $gwx_XC_16('./pages/square/square-search/index.wxml');;
__wxRoute = "pages/square/square-search/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/square/square-search/index.js";
define("pages/square/square-search/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/toConsumableArray"),
        r = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var n = require("../../../api/user-api/user/user-search.js"),
        t = require("../../../store/historySearchStore.js"),
        u = require("../../../store/user.js"),
        o = require("../../../utils/device.js"),
        s = require("../../../utils/util.js"),
        a = require("../../../utils/route-manager.js");
    Array || r.resolveComponent("up-icon")(), Math || (function() {
        return "../../../node-modules/uview-plus/components/u-icon/u-icon.js"
    } + i)();
    var i = function() {
            return "../../../components/search-enter/search-enter.js"
        },
        c = {
            __name: "index",
            setup: function(i) {
                var c = t.useHistorySearchStore(),
                    f = c.setHistorySearch,
                    l = c.getHistorySearchList,
                    h = r.storeToRefs(u.useUserStore()).searchReferral,
                    p = u.useUserStore().setSearchReferral,
                    d = r.ref([]),
                    v = r.ref([]),
                    m = u.useUserStore().isLoginFun;
                r.onLoad((function() {
                    m() && n.queryRecommendList({
                        scene: 1
                    }).then((function(r) {
                        r.data && (v.value = e(r.data))
                    }))
                })), r.onShow((function() {
                    ! function() {
                        var r = l();
                        (null == r ? void 0 : r.length) && (d.value = e(r).sort((function(e, r) {
                            return e.createTime ? r.createTime ? r.createTime - e.createTime : -1 : 1
                        })))
                    }()
                }));
                var g = function(e) {
                    e && (f(e), a.$route.navigateTo({
                        url: "/pages/square/square-search/search-list?search=".concat(e)
                    }))
                };
                return function(e, n) {
                    return r.e({
                        a: r.p({
                            name: "arrow-left",
                            color: "#333",
                            size: "42rpx",
                            bold: !0
                        }),
                        b: r.o((function() {
                            return r.unref(s.shareBack) && r.unref(s.shareBack).apply(void 0, arguments)
                        })),
                        c: r.o(g),
                        d: r.p({
                            content: {
                                placeholder: "搜一搜",
                                inputRadius: "32rpx",
                                bgColor: "#f6f7f9",
                                btnRadius: "90rpx"
                            },
                            isReadonly: !1,
                            focus: !0
                        }),
                        e: r.unref(!0) ? "62vw" : "86vw",
                        f: r.unref(o.device).statusBarHeight + "px",
                        g: r.unref(o.device).navbarHeight + "px",
                        h: r.unref(d).length
                    }, r.unref(d).length ? {
                        i: r.f(r.unref(d), (function(e, n, t) {
                            return {
                                a: r.t(e.searchText),
                                b: n,
                                c: r.o((function(r) {
                                    return g(e.searchText)
                                }), n)
                            }
                        }))
                    } : {}, {
                        j: r.unref(v).length
                    }, r.unref(v).length ? r.e({
                        k: "0" === r.unref(h)
                    }, "0" === r.unref(h) ? {
                        l: r.p({
                            name: "eye-off",
                            color: "#999",
                            size: "34rpx"
                        }),
                        m: r.o((function(e) {
                            return r.unref(p)("1")
                        }))
                    } : {}, {
                        n: "1" === r.unref(h)
                    }, "1" === r.unref(h) ? {
                        o: r.f(r.unref(v), (function(e, n, t) {
                            return {
                                a: r.t(e),
                                b: n,
                                c: r.o((function(r) {
                                    return g(e)
                                }), n)
                            }
                        }))
                    } : {}) : {})
                }
            }
        },
        f = r._export_sfc(c, [
            ["__scopeId", "data-v-70e2cfb5"]
        ]);
    wx.createPage(f);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/square/square-search/index.js'
});
require("pages/square/square-search/index.js");