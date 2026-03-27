$gwx_XC_26 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_26 || [];

        function gz$gwx_XC_26_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'k']
                ])
                Z([3, 'tip-bar data-v-cfcbd367'])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'f1 data-v-cfcbd367'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-cfcbd367'])
                Z([3, 'cfcbd367-0'])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[6])
                Z([3, 'tip-icon data-v-cfcbd367'])
                Z([3, 'cfcbd367-1'])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[6])
                Z(z[7])
                Z([3, 'cfcbd367-2'])
                Z([
                    [7],
                    [3, 'i']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_26 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_26 = true;
        var x = ['./components/tip-bar/tip-bar.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_26_1()
            var o8Z = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var l9Z = _v()
            _(o8Z, l9Z)
            if (_oz(z, 3, e, s, gg)) {
                l9Z.wxVkey = 1
            }
            var tA1 = _n('view')
            _rz(z, tA1, 'class', 4, e, s, gg)
            var eB1 = _v()
            _(tA1, eB1)
            if (_oz(z, 5, e, s, gg)) {
                eB1.wxVkey = 1
                var bC1 = _mz(z, 'up-icon', ['bind:__l', 6, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(eB1, bC1)
            } else if (_oz(z, 10, e, s, gg)) {
                eB1.wxVkey = 2
                var oD1 = _mz(z, 'my-cache-image-index', ['bind:__l', 11, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(eB1, oD1)
            }
            eB1.wxXCkey = 1
            eB1.wxXCkey = 3
            eB1.wxXCkey = 3
            _(o8Z, tA1)
            var a0Z = _v()
            _(o8Z, a0Z)
            if (_oz(z, 15, e, s, gg)) {
                a0Z.wxVkey = 1
                var xE1 = _mz(z, 'up-icon', ['bind:__l', 16, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(a0Z, xE1)
            }
            l9Z.wxXCkey = 1
            a0Z.wxXCkey = 1
            a0Z.wxXCkey = 3
            _(r, o8Z)
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
                g = "$gwx_XC_26";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_26();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tip-bar/tip-bar.wxml'] = [$gwx_XC_26, './components/tip-bar/tip-bar.wxml'];
else __wxAppCode__['components/tip-bar/tip-bar.wxml'] = $gwx_XC_26('./components/tip-bar/tip-bar.wxml');;
__wxRoute = "components/tip-bar/tip-bar";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/tip-bar/tip-bar.js";
define("components/tip-bar/tip-bar.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../common/vendor.js"),
        n = require("../../utils/route-manager.js");
    Array || (t.resolveComponent("up-icon") + t.resolveComponent("my-cache-image-index"))(), Math || (function() {
        return "../../node-modules/uview-plus/components/u-icon/u-icon.js"
    } + function() {
        return "../cache-image/index.js"
    })();
    var e = {
            __name: "tip-bar",
            props: {
                customStyle: {
                    type: Object
                },
                content: {
                    type: Object
                }
            },
            emits: ["clickTipbar"],
            setup: function(e, o) {
                var c = o.emit,
                    i = e,
                    r = c,
                    l = function() {
                        var t, e, o;
                        (null == (t = i.content) ? void 0 : t.click) ? r("clickTipbar"): (null == (e = i.content) ? void 0 : e.url) && n.$route.navigateTo({
                            url: null == (o = i.content) ? void 0 : o.url
                        })
                    };
                return function(n, e) {
                    return t.e({
                        a: i.content.title
                    }, i.content.title ? {
                        b: t.t(i.content.title)
                    } : {}, {
                        c: i.content.tipIcon
                    }, i.content.tipIcon ? {
                        d: t.p({
                            name: i.content.tipIcon,
                            color: i.content.tipIconColor,
                            size: i.content.tipIconSize
                        })
                    } : i.content.tipIconUrl ? {
                        f: t.p({
                            width: "36rpx",
                            height: "36rpx",
                            imageUrl: i.content.tipIconUrl
                        })
                    } : {}, {
                        e: i.content.tipIconUrl,
                        g: t.t(i.content.tip),
                        h: i.content.url || i.content.click
                    }, i.content.url || i.content.click ? {
                        i: t.p({
                            name: "arrow-right",
                            size: "12",
                            color: i.content.urlColor
                        })
                    } : {}, {
                        j: t.s(i.customStyle),
                        k: t.o(l)
                    })
                }
            }
        },
        o = t._export_sfc(e, [
            ["__scopeId", "data-v-cfcbd367"]
        ]);
    wx.createComponent(o);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/tip-bar/tip-bar.js'
});
require("components/tip-bar/tip-bar.js");