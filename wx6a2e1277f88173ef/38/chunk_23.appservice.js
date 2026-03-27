$gwx_XC_31 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_31 || [];

        function gz$gwx_XC_31_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'workCover'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'f02c731a-0'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z(z[2])
                Z([3, 'workCover-img w-per'])
                Z([3, 'f02c731a-1'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'c']
                    ],
                    [1, '']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z(z[2])
                Z([3, 'f02c731a-2'])
                Z(z[11])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_31 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_31 = true;
        var x = ['./components/work-cover/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_31_1()
            var eR6 = _n('view')
            _rz(z, eR6, 'class', 0, e, s, gg)
            var bS6 = _v()
            _(eR6, bS6)
            if (_oz(z, 1, e, s, gg)) {
                bS6.wxVkey = 1
                var oV6 = _mz(z, 'my-cache-image-index', ['bind:__l', 2, 'uI', 1, 'uP', 2], [], e, s, gg)
                _(bS6, oV6)
            } else {
                bS6.wxVkey = 2
                var fW6 = _mz(z, 'my-cache-image-index', ['bind:__l', 5, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(bS6, fW6)
            }
            var oT6 = _v()
            _(eR6, oT6)
            if (_oz(z, 9, e, s, gg)) {
                oT6.wxVkey = 1
            }
            var xU6 = _v()
            _(eR6, xU6)
            if (_oz(z, 10, e, s, gg)) {
                xU6.wxVkey = 1
                var cX6 = _v()
                _(xU6, cX6)
                if (_oz(z, 11, e, s, gg)) {
                    cX6.wxVkey = 1
                    var hY6 = _mz(z, 'up-icon', ['bind:__l', 12, 'uI', 1, 'uP', 2], [], e, s, gg)
                    _(cX6, hY6)
                }
                cX6.wxXCkey = 1
                cX6.wxXCkey = 3
            }
            bS6.wxXCkey = 1
            bS6.wxXCkey = 3
            bS6.wxXCkey = 3
            oT6.wxXCkey = 1
            xU6.wxXCkey = 1
            xU6.wxXCkey = 3
            _(r, eR6)
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
                g = "$gwx_XC_31";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_31();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/work-cover/index.wxml'] = [$gwx_XC_31, './components/work-cover/index.wxml'];
else __wxAppCode__['components/work-cover/index.wxml'] = $gwx_XC_31('./components/work-cover/index.wxml');;
__wxRoute = "components/work-cover/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/work-cover/index.js";
define("components/work-cover/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../common/vendor.js");
    Array || (e.resolveComponent("my-cache-image-index") + e.resolveComponent("up-icon"))(), Math || (function() {
        return "../cache-image/index.js"
    } + function() {
        return "../../node-modules/uview-plus/components/u-icon/u-icon.js"
    })();
    var i = {
        __name: "index",
        props: {
            src: {
                type: String,
                default: ""
            },
            fill: {
                type: Boolean,
                default: !1
            },
            loadWidth: {
                type: String,
                default: "500"
            },
            isNvue: {
                type: Boolean,
                default: !1
            },
            styles: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            lazyLoad: {
                type: Boolean,
                default: !1
            },
            showOnline: {
                type: Boolean,
                default: !1
            },
            radius: {
                type: String,
                default: "50%"
            }
        },
        setup: function(i) {
            var n = e.ref("mp4"),
                l = i;
            return function(t, a) {
                var o, r;
                return e.e({
                    a: l.isNvue
                }, l.isNvue ? {
                    b: e.p({
                        styles: l.styles,
                        lazyLoad: i.lazyLoad,
                        imageUrl: i.src + "".concat(i.src.includes("?") ? "&" : "?", "imageMogr2/thumbnail/").concat(i.loadWidth, "x"),
                        isNvue: l.isNvue,
                        mode: i.fill ? "aspectFill" : "widthFix"
                    })
                } : {
                    c: e.p({
                        radius: i.radius,
                        height: i.fill ? "100%" : "auto",
                        width: "100%",
                        imageUrl: i.src + "".concat(i.src.includes("?") ? "&" : "?", "imageMogr2/thumbnail/").concat(i.loadWidth, "x"),
                        lazyLoad: i.lazyLoad,
                        mode: i.fill ? "aspectFill" : "widthFix"
                    })
                }, {
                    d: i.showOnline
                }, (i.showOnline, {}), {
                    e: null == (o = i.src) ? void 0 : o.includes(e.unref(n))
                }, (null == (r = i.src) ? void 0 : r.includes(e.unref(n))) ? {
                    f: e.p({
                        name: "play-right-fill",
                        color: "#fff",
                        size: "20rpx"
                    })
                } : {})
            }
        }
    };
    wx.createComponent(i);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/work-cover/index.js'
});
require("components/work-cover/index.js");