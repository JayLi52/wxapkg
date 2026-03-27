$gwx_XC_21 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_21 || [];

        function gz$gwx_XC_21_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'list-box data-v-f268d420'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-f268d420'])
                Z([3, 'f268d420-0'])
                Z(z[1])
                Z([
                    [7],
                    [3, 'n']
                ])
                Z([
                    [7],
                    [3, 'p']
                ])
                Z([
                    [7],
                    [3, 'o']
                ])
                Z([3, 'list data-v-f268d420'])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [7],
                    [3, 'k']
                ])
                Z([
                    [7],
                    [3, 'l']
                ])
                Z([1, false])
                Z(z[14])
                Z([
                    [7],
                    [3, 'm']
                ])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[3])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_21 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_21 = true;
        var x = ['./components/list/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_21_1()
            var xWW = _n('view')
            _rz(z, xWW, 'class', 0, e, s, gg)
            var oXW = _v()
            _(xWW, oXW)
            if (_oz(z, 1, e, s, gg)) {
                oXW.wxVkey = 1
                var fYW = _mz(z, 'up-icon', ['bind:__l', 2, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(oXW, fYW)
            }
            var cZW = _mz(z, 'scroll-view', ['scrollAnchoring', -1, 'scrollWithAnimation', -1, 'bindrefresherrefresh', 6, 'bindscroll', 1, 'bindscrolltolower', 2, 'class', 3, 'enableBackToTop', 4, 'lowerThreshold', 5, 'refresherBackground', 6, 'refresherDefaultStyle', 7, 'refresherEnabled', 8, 'refresherTriggered', 9, 'scrollIntoView', 10, 'scrollTop', 11, 'scrollY', 12], [], e, s, gg)
            var h1W = _mz(z, 'view', ['bindtouchend', 19, 'bindtouchmove', 1, 'class', 2], [], e, s, gg)
            var o2W = _n('slot')
            _(h1W, o2W)
            _(cZW, h1W)
            _(xWW, cZW)
            oXW.wxXCkey = 1
            oXW.wxXCkey = 3
            _(r, xWW)
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
                g = "$gwx_XC_21";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_21();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/list/index.wxml'] = [$gwx_XC_21, './components/list/index.wxml'];
else __wxAppCode__['components/list/index.wxml'] = $gwx_XC_21('./components/list/index.wxml');;
__wxRoute = "components/list/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/list/index.js";
define("components/list/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/slicedToArray"),
        r = require("../../common/vendor.js"),
        o = require("../../utils/device.js"),
        a = require("./hooks.js");
    Array || r.resolveComponent("up-icon")(), Math;
    var t = {
            __name: "index",
            props: {
                enableBackToTop: {
                    type: [Boolean, String],
                    default: !1
                },
                scrollY: {
                    type: [Boolean, String],
                    default: !0
                },
                scrollTop: {
                    type: [Number, String],
                    default: 0
                },
                refresherEnabled: {
                    type: [Boolean, String],
                    default: !1
                },
                isRefresh: {
                    type: [Boolean, String],
                    default: !1
                },
                showRefreshImg: {
                    type: Boolean,
                    default: !0
                },
                lowerThreshold: {
                    type: Number,
                    default: 300
                },
                showCustom: {
                    type: Boolean,
                    default: !1
                },
                refresherBackground: {
                    type: String,
                    default: "#fff"
                },
                bounce: {
                    type: Boolean,
                    default: function() {
                        return o.device.isIos
                    }
                },
                scrollIntoView: {
                    type: String,
                    default: ""
                }
            },
            emits: ["scrolltolower", "onRefresh", "onPullingDown", "scroll"],
            setup: function(o, t) {
                var l = t.emit,
                    n = o,
                    u = l,
                    s = r.ref(n.scrollY);
                r.ref(null), r.ref(), r.watch([a.ManagerScroll], (function(r, o) {
                    var a = e(r, 1)[0];
                    e(o, 1)[0];
                    s.value = !!a && n.scrollY
                }));
                var c = r.ref(!0),
                    f = r.ref(n.refresherEnabled),
                    i = 0,
                    v = 0,
                    d = r.ref("translateY(-40px) rotateZ(0deg)"),
                    p = r.ref("transform 0s ease"),
                    h = r.ref(0),
                    g = function(e) {
                        if (c.value && f.value) {
                            var r = e.touches[0];
                            i || (i = r.clientY);
                            var o = (r.clientY - (i + 40)) / 3,
                                a = 6 * o;
                            r.clientY - i > 0 ? s.value = !1 : s.value = !0, o < 80 ? (v = o, d.value = "translateY(".concat(o, "px) rotateZ(").concat(a, "deg)"), p.value = "transform 0s ease", h.value = o / 60) : (d.value = "translateY(80px) rotateZ(".concat(a, "deg)"), p.value = "transform 0s ease", h.value = 1)
                        }
                    },
                    m = function(e) {
                        c.value && f.value && (i = 0, s.value = !0, v > 30 ? w() : y())
                    },
                    w = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 99999;
                        d.value = "translateY(".concat(v || 80, "px) rotateZ(0deg)"), h.value = 1, setTimeout((function() {
                            b(), f.value = !1, d.value = "translateY(".concat(v, "px) rotateZ(").concat(e, "deg)"), p.value = "all 120s ease", h.value = 1
                        }), 100)
                    },
                    y = function() {
                        v = 0, f.value = !0, d.value = "translateY(-40px) rotateZ(0deg)", p.value = "all 0.3s ease", h.value = 0
                    };
                r.watch((function() {
                    return n.isRefresh
                }), (function(e) {
                    e || y()
                }), {
                    deep: !0
                });
                var Y = function() {
                        u("scrolltolower")
                    },
                    b = function() {
                        u("onRefresh")
                    },
                    B = function(e) {
                        e.detail.scrollTop < 10 ? (i = 0, c.value = !0) : c.value = !1, u("scroll", e)
                    };
                return function(e, a) {
                    return {
                        a: r.p({
                            name: "reload",
                            color: "red",
                            size: "30px"
                        }),
                        b: r.unref(d),
                        c: r.unref(p),
                        d: r.unref(h),
                        e: r.o(g),
                        f: r.o(m),
                        g: o.enableBackToTop,
                        h: o.scrollTop,
                        i: r.unref(s),
                        j: o.lowerThreshold,
                        k: o.refresherBackground,
                        l: o.showCustom ? "none" : "black",
                        m: o.scrollIntoView,
                        n: r.o(b),
                        o: r.o(Y),
                        p: r.o(B)
                    }
                }
            }
        },
        l = r._export_sfc(t, [
            ["__scopeId", "data-v-f268d420"]
        ]);
    wx.createComponent(l);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/list/index.js'
});
require("components/list/index.js");