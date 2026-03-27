$gwx_XC_70 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_70 || [];

        function gz$gwx_XC_70_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app-container data-v-772eb0f2'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'background-image:'],
                            [
                                [7],
                                [3, 'e']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'padding-top:'],
                        [
                            [7],
                            [3, 'f']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-772eb0f2'])
                Z([3, '772eb0f2-0'])
                Z(z[2])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[3])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z(z[4])
                Z([3, '772eb0f2-1'])
                Z(z[7])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_70_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_70_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_70 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_70 = true;
        var x = ['./pages/common/fullscreen-modal/settlein-tip-modal.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_70_1()
            var oXSB = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var cYSB = _v()
            _(oXSB, cYSB)
            if (_oz(z, 2, e, s, gg)) {
                cYSB.wxVkey = 1
                var l1SB = _mz(z, 'navbar', ['bind:__l', 3, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(cYSB, l1SB)
            }
            var oZSB = _v()
            _(oXSB, oZSB)
            if (_oz(z, 7, e, s, gg)) {
                oZSB.wxVkey = 1
                var a2SB = _mz(z, 'base-button', ['bind:__l', 8, 'bindclick', 1, 'class', 2, 'uI', 3, 'uP', 4, 'uS', 5], [], e, s, gg)
                _(oZSB, a2SB)
            }
            cYSB.wxXCkey = 1
            cYSB.wxXCkey = 3
            oZSB.wxXCkey = 1
            oZSB.wxXCkey = 3
            _(r, oXSB)
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
                g = "$gwx_XC_70";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_70();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/fullscreen-modal/settlein-tip-modal.wxml'] = [$gwx_XC_70, './pages/common/fullscreen-modal/settlein-tip-modal.wxml'];
else __wxAppCode__['pages/common/fullscreen-modal/settlein-tip-modal.wxml'] = $gwx_XC_70('./pages/common/fullscreen-modal/settlein-tip-modal.wxml');;
__wxRoute = "pages/common/fullscreen-modal/settlein-tip-modal";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/common/fullscreen-modal/settlein-tip-modal.js";
define("pages/common/fullscreen-modal/settlein-tip-modal.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../common/vendor.js"),
        r = require("../../../store/fullscreenModalStore.js"),
        t = require("../../../utils/util.js");
    Array || (e.resolveComponent("navbar") + e.resolveComponent("BaseButton"))(), Math;
    var n = {
            __name: "settlein-tip-modal",
            setup: function(n) {
                var a = e.storeToRefs(r.useFullscreenModalStore()).backPageUrl,
                    o = r.useFullscreenModalStore().setIsSettleInTipReadVal,
                    l = t.getEnv("OSS_URL"),
                    u = e.ref(!0),
                    s = e.ref(15);
                e.onMounted((function() {
                    var e = setInterval((function() {
                        s.value--, s.value <= 0 && (clearInterval(e), u.value = !1)
                    }), 1e3)
                }));
                var c = function() {
                    u.value || (o(!0), e.index.redirectTo({
                        url: a.value
                    }))
                };
                return function(r, t) {
                    return {
                        a: e.p({
                            title: "",
                            isPlace: !1,
                            "bg-color": "rgba(0,0,0,0)"
                        }),
                        b: e.t(e.unref(u) ? "".concat(e.unref(s), "s 立即入驻") : "立即入驻"),
                        c: e.o(c),
                        d: e.p({
                            size: "large",
                            shape: "round",
                            styles: {
                                background: e.unref(u) ? "#E3E3E3" : "linear-gradient( 270deg, #FF6D40 0%, #FFAD4E 100%)",
                                color: e.unref(u) ? "#999999" : ""
                            }
                        }),
                        e: "url(".concat(e.unref(l), "/images/settle-in-tip-bg.png)"),
                        f: "468rpx"
                    }
                }
            }
        },
        a = e._export_sfc(n, [
            ["__scopeId", "data-v-772eb0f2"]
        ]);
    wx.createPage(a);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/common/fullscreen-modal/settlein-tip-modal.js'
});
require("pages/common/fullscreen-modal/settlein-tip-modal.js");