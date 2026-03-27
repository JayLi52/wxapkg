$gwx_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];

        function gz$gwx_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-6fb3e71a'])
                Z([3, 'width:100%;height:100%'])
                Z([3, '6fb3e71a-0'])
                Z(z[0])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_1 = true;
        var x = ['./components/avatar/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_1_1()
            var c0F = _v()
            _(r, c0F)
            if (_oz(z, 0, e, s, gg)) {
                c0F.wxVkey = 1
                var hAG = _mz(z, 'work-cover', ['bind:__l', 1, 'class', 1, 'style', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                _(c0F, hAG)
            }
            c0F.wxXCkey = 1
            c0F.wxXCkey = 3
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
                g = "$gwx_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/avatar/index.wxml'] = [$gwx_XC_1, './components/avatar/index.wxml'];
else __wxAppCode__['components/avatar/index.wxml'] = $gwx_XC_1('./components/avatar/index.wxml');;
__wxRoute = "components/avatar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/avatar/index.js";
define("components/avatar/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../common/vendor.js");
    Math || t();
    var t = function() {
            return "../work-cover/index.js"
        },
        n = {
            __name: "index",
            props: {
                src: {
                    type: String,
                    default: ""
                },
                fill: {
                    type: Boolean,
                    default: !0
                },
                dia: {
                    type: String,
                    default: "70rpx"
                },
                radius: {
                    type: String,
                    default: "50%"
                },
                showOnline: {
                    type: Boolean,
                    default: !1
                }
            },
            setup: function(t) {
                return function(n, r) {
                    return {
                        a: e.p({
                            src: t.src,
                            loadWidth: "200",
                            showOnline: t.showOnline,
                            fill: t.fill
                        }),
                        b: t.dia,
                        c: t.dia,
                        d: t.radius
                    }
                }
            }
        },
        r = e._export_sfc(n, [
            ["__scopeId", "data-v-6fb3e71a"]
        ]);
    wx.createComponent(r);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/avatar/index.js'
});
require("components/avatar/index.js");