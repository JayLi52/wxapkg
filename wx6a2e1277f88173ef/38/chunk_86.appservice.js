$gwx_XC_100 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_100 || [];

        function gz$gwx_XC_100_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_100_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_100_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_100_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'SelfIntroduction-content'])
                Z([
                    [7],
                    [3, 'r0']
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([3, '__l'])
                Z([3, '51fb857a-0'])
                Z(z[2])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[3])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([3, '51fb857a-1,51fb857a-0'])
                Z(z[7])
                Z(z[6])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_100_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_100_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_100 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_100 = true;
        var x = ['./pages/my/edit-profile/input-signatures.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_100_1()
            var bILC = _n('view')
            _rz(z, bILC, 'class', 0, e, s, gg)
            var oJLC = _v()
            _(bILC, oJLC)
            if (_oz(z, 1, e, s, gg)) {
                oJLC.wxVkey = 1
            }
            var xKLC = _v()
            _(bILC, xKLC)
            if (_oz(z, 2, e, s, gg)) {
                xKLC.wxVkey = 1
                var oLLC = _mz(z, 'l-status-bar', ['bind:__l', 3, 'uI', 1, 'uP', 2, 'uS', 3], [], e, s, gg)
                var fMLC = _v()
                _(oLLC, fMLC)
                if (_oz(z, 7, e, s, gg)) {
                    fMLC.wxVkey = 1
                    var cNLC = _mz(z, 'base-button', ['bind:__l', 8, 'bindclick', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                    _(fMLC, cNLC)
                }
                fMLC.wxXCkey = 1
                fMLC.wxXCkey = 3
                _(xKLC, oLLC)
            }
            oJLC.wxXCkey = 1
            xKLC.wxXCkey = 1
            xKLC.wxXCkey = 3
            _(r, bILC)
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
                g = "$gwx_XC_100";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_100();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/edit-profile/input-signatures.wxml'] = [$gwx_XC_100, './pages/my/edit-profile/input-signatures.wxml'];
else __wxAppCode__['pages/my/edit-profile/input-signatures.wxml'] = $gwx_XC_100('./pages/my/edit-profile/input-signatures.wxml');;
__wxRoute = "pages/my/edit-profile/input-signatures";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/edit-profile/input-signatures.js";
define("pages/my/edit-profile/input-signatures.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var n = require("../../../common/vendor.js");
    Array || (n.resolveComponent("BaseButton") + n.resolveComponent("l-status-bar"))(), Math;
    var e = {
        __name: "input-signatures",
        setup: function(e) {
            var t = n.ref(""),
                a = n.computed((function() {
                    var n;
                    return ((null == (n = t.value) ? void 0 : n.match(/\n/g)) || []).length
                })),
                r = function(n) {
                    var e = n.detail.value;
                    if ((e.match(/\n/g) || []).length > 4) {
                        var a = e.split("\n");
                        t.value = a.slice(0, 5).join("\n")
                    } else t.value = e
                },
                u = function() {
                    a.value >= 4 ? n.index.showToast({
                        title: "换行超过4行",
                        icon: "none"
                    }) : (n.index.$emit("setSignatures", t.value), n.index.navigateBack())
                },
                o = function(n) {
                    t.value = n.signatures || ""
                };
            return n.onMounted((function() {
                    var e, t = n.getCurrentInstance().proxy.getOpenerEventChannel();
                    null == (e = null == t ? void 0 : t.on) || e.call(t, "acceptDataFromOpenerPage", o)
                })), n.onUnmounted((function() {
                    var e, t = n.getCurrentInstance().proxy.getOpenerEventChannel();
                    null == (e = null == t ? void 0 : t.off) || e.call(t, "acceptDataFromOpenerPage", o)
                })),
                function(e, o) {
                    return {
                        a: n.unref(t),
                        b: n.n(n.unref(a) >= 4 ? "warning" : ""),
                        c: n.o(r),
                        d: n.t(n.unref(a) + 1),
                        e: n.unref(a) >= 4 ? "#f15" : "#333",
                        f: n.t(n.unref(t).length),
                        g: n.o(u),
                        h: n.p({
                            type: "primary",
                            shape: "round"
                        }),
                        i: n.p({
                            padding: "0 32rpx"
                        })
                    }
                }
        }
    };
    wx.createPage(e);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/edit-profile/input-signatures.js'
});
require("pages/my/edit-profile/input-signatures.js");