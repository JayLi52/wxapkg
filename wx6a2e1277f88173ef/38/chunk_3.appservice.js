$gwx_XC_38 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_38 || [];

        function gz$gwx_XC_38_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_38_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_38_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_38 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_38 = true;
        var x = ['./components/cache-image/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_38_1()
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
                g = "$gwx_XC_38";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_38();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cache-image/index.wxml'] = [$gwx_XC_38, './components/cache-image/index.wxml'];
else __wxAppCode__['components/cache-image/index.wxml'] = $gwx_XC_38('./components/cache-image/index.wxml');;
__wxRoute = "components/cache-image/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/cache-image/index.js";
define("components/cache-image/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../common/vendor.js"),
        n = {
            __name: "index",
            props: {
                imageUrl: {
                    type: String,
                    default: ""
                },
                loadingImg: {
                    type: String,
                    default: "https://ali-cdn.shali66.com/system_v2/images/loading.gif"
                },
                mode: {
                    type: String,
                    default: "widthFix"
                },
                width: {
                    type: String,
                    default: "auto"
                },
                height: {
                    type: String,
                    default: "auto"
                },
                isNvue: {
                    type: Boolean,
                    default: !1
                },
                resize: {
                    type: String,
                    default: "cover"
                },
                styles: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                radius: {
                    type: String,
                    default: ""
                },
                lazyLoad: {
                    type: Boolean,
                    default: !0
                }
            },
            emits: ["load", "click"],
            setup: function(n, a) {
                var i = a.expose,
                    u = a.emit,
                    o = r.ref("loading"),
                    l = r.ref(""),
                    s = n,
                    c = u,
                    d = function(e) {
                        return e ? e.startsWith("@/static") ? (e = e.slice(1), void(l.value = e)) : (o.value = "loading", l.value = s.loadingImg, o.value = "success", void(l.value = e)) : (o.value = "error", void(l.value = s.loadingImg))
                    },
                    f = function() {
                        "success" === o.value && (l.value = s.imageUrl), o.value = "error"
                    },
                    g = function(e) {
                        o.value = "success", c("load", e)
                    };
                return r.watch((function() {
                        return s.imageUrl
                    }), function() {
                        var r = t(e().mark((function t(r, n) {
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r && r !== n && d(r);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), t)
                        })));
                        return function(e, t) {
                            return r.apply(this, arguments)
                        }
                    }()), r.onMounted((function() {
                        s.imageUrl && d(s.imageUrl)
                    })), i({
                        cacheStatus: o,
                        reload: function() {
                            return d(s.imageUrl)
                        }
                    }),
                    function(e, t) {
                        return r.e({
                            a: s.isNvue
                        }, s.isNvue ? {
                            b: r.unref(l) || n.loadingImg,
                            c: n.lazyLoad,
                            d: s.resize,
                            e: r.s(s.styles),
                            f: n.mode,
                            g: r.o(f),
                            h: r.o(g),
                            i: r.o((function(e) {
                                return c("click")
                            }))
                        } : {
                            j: r.unref(l) || n.loadingImg,
                            k: n.lazyLoad,
                            l: n.mode,
                            m: n.width,
                            n: n.height,
                            o: n.radius,
                            p: r.s(s.styles),
                            q: r.o(f),
                            r: r.o(g),
                            s: r.o((function(e) {
                                return c("click")
                            }))
                        })
                    }
            }
        };
    wx.createComponent(n);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/cache-image/index.js'
});
require("components/cache-image/index.js");