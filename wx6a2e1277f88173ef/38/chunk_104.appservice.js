$gwx_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];

        function gz$gwx_XC_7_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'e'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'f']
                ])
                Z([3, 'category-item data-v-910ad3cb'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([3, 'category-icon data-v-910ad3cb'])
                Z([3, 'border-radius:12rpx'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ])
                Z(z[5])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
        var x = ['./pages/my/settled-platform/settled-cate.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_7_1()
            var bQM = _v()
            _(r, bQM)
            var oRM = function(oTM, xSM, fUM, gg) {
                var hWM = _mz(z, 'view', ['bindtap', 3, 'class', 1], [], oTM, xSM, gg)
                var oXM = _v()
                _(hWM, oXM)
                if (_oz(z, 5, oTM, xSM, gg)) {
                    oXM.wxVkey = 1
                    var cYM = _mz(z, 'my-cache-image-index', ['bind:__l', 6, 'class', 1, 'style', 2, 'uI', 3, 'uP', 4], [], oTM, xSM, gg)
                    _(oXM, cYM)
                }
                oXM.wxXCkey = 1
                oXM.wxXCkey = 3
                _(fUM, hWM)
                return fUM
            }
            bQM.wxXCkey = 4
            _2z(z, 1, oRM, e, s, gg, bQM, 'item', 'index', 'e')
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
                g = "$gwx_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/settled-platform/settled-cate.wxml'] = [$gwx_XC_7, './pages/my/settled-platform/settled-cate.wxml'];
else __wxAppCode__['pages/my/settled-platform/settled-cate.wxml'] = $gwx_XC_7('./pages/my/settled-platform/settled-cate.wxml');;
__wxRoute = "pages/my/settled-platform/settled-cate";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/settled-platform/settled-cate.js";
define("pages/my/settled-platform/settled-cate.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var r = require("../../../store/fullscreenModalStore.js"),
        t = require("../../../utils/util.js");
    Array || e.resolveComponent("my-cache-image-index")(), Math;
    var i = {
            __name: "settled-cate",
            setup: function(i) {
                r.useFullscreenModalStore().setBackPageUrl;
                var n = t.getEnv("OSS_URL"),
                    a = e.ref([{
                        id: 1,
                        name: "认证化妆师",
                        icon: "".concat(n, "/images/huazhuangshi.jpg"),
                        description: "自由接单，不交押金",
                        url: "/pages/my/settled-platform/makeup-guide"
                    }, {
                        id: 2,
                        name: "认证摄影师",
                        icon: "".concat(n, "/images/sheyingshi.jpg"),
                        description: "自由接单，不交押金",
                        url: "/pages/my/settled-platform/photo-guide"
                    }]);
                return function(r, t) {
                    return {
                        a: e.f(e.unref(a), (function(r, t, i) {
                            return {
                                a: "910ad3cb-0-" + i,
                                b: e.p({
                                    imageUrl: r.icon,
                                    mode: "aspectFit",
                                    radius: "12rpx",
                                    width: "80rpx",
                                    height: "80rpx"
                                }),
                                c: e.t(r.name),
                                d: e.t(r.description),
                                e: t,
                                f: e.o((function(r) {
                                    return e.unref(e.debounce)(void e.index.showToast({
                                        title: "小程序目前暂时不支持申请接单技能",
                                        icon: "none"
                                    }), 600, !0)
                                }), t)
                            }
                        }))
                    }
                }
            }
        },
        n = e._export_sfc(i, [
            ["__scopeId", "data-v-910ad3cb"]
        ]);
    wx.createPage(n);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/settled-platform/settled-cate.js'
});
require("pages/my/settled-platform/settled-cate.js");