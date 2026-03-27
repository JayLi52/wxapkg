$gwx_XC_22 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_22 || [];

        function gz$gwx_XC_22_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'loading-status data-v-99f54c1f'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_22 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_22 = true;
        var x = ['./components/loading-status/loading-status.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_22_1()
            var o4W = _n('view')
            _rz(z, o4W, 'class', 0, e, s, gg)
            var l5W = _v()
            _(o4W, l5W)
            if (_oz(z, 1, e, s, gg)) {
                l5W.wxVkey = 1
            }
            var a6W = _v()
            _(o4W, a6W)
            if (_oz(z, 2, e, s, gg)) {
                a6W.wxVkey = 1
            }
            var t7W = _v()
            _(o4W, t7W)
            if (_oz(z, 3, e, s, gg)) {
                t7W.wxVkey = 1
            }
            l5W.wxXCkey = 1
            a6W.wxXCkey = 1
            t7W.wxXCkey = 1
            _(r, o4W)
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
                g = "$gwx_XC_22";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_22();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/loading-status/loading-status.wxml'] = [$gwx_XC_22, './components/loading-status/loading-status.wxml'];
else __wxAppCode__['components/loading-status/loading-status.wxml'] = $gwx_XC_22('./components/loading-status/loading-status.wxml');;
__wxRoute = "components/loading-status/loading-status";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/loading-status/loading-status.js";
define("components/loading-status/loading-status.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../common/vendor.js"),
        t = {
            __name: "loading-status",
            props: {
                isLoading: {
                    type: Boolean,
                    default: !1
                },
                hasMore: {
                    type: Boolean,
                    default: !0
                },
                hasError: {
                    type: Boolean,
                    default: !1
                },
                animationDuration: {
                    type: Number,
                    default: 2,
                    validator: function(e) {
                        return e > 0 && e <= 5
                    }
                },
                loadingText: {
                    type: String,
                    default: "加载中..."
                },
                completeText: {
                    type: String,
                    default: "已显示全部内容"
                },
                errorText: {
                    type: String,
                    default: "加载失败"
                },
                retryText: {
                    type: String,
                    default: "重试"
                },
                skeletonColor: {
                    type: String,
                    default: "#eee"
                },
                skeletonHighlightColor: {
                    type: String,
                    default: "#e0e0e0"
                }
            },
            emits: ["retry"],
            setup: function(t, r) {
                var o = r.emit,
                    a = function() {
                        o("retry")
                    };
                return function(r, o) {
                    return e.e({
                        a: t.isLoading && !t.hasError
                    }, t.isLoading && !t.hasError ? {
                        b: "".concat(t.animationDuration, "s"),
                        c: e.t(t.loadingText)
                    } : {}, {
                        d: !t.hasMore && !t.isLoading && !t.hasError
                    }, t.hasMore || t.isLoading || t.hasError ? {} : {
                        e: e.t(t.completeText)
                    }, {
                        f: t.hasError
                    }, t.hasError ? {
                        g: e.t(t.errorText),
                        h: e.t(t.retryText),
                        i: e.o(a),
                        j: t.skeletonColor,
                        k: t.skeletonHighlightColor
                    } : {})
                }
            }
        },
        r = e._export_sfc(t, [
            ["__scopeId", "data-v-99f54c1f"]
        ]);
    wx.createComponent(r);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/loading-status/loading-status.js'
});
require("components/loading-status/loading-status.js");