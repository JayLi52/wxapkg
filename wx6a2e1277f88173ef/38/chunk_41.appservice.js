$gwx_XC_51 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_51 || [];

        function gz$gwx_XC_51_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'u-loadmore data-v-4d53dbf5'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [7],
                            [3, 'l']
                        ],
                        [1, ';']
                    ],
                    [
                        [7],
                        [3, 'm']
                    ]
                ])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-4d53dbf5'])
                Z([3, '4d53dbf5-0'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[3])
                Z(z[4])
                Z([3, '4d53dbf5-1'])
                Z(z[8])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z(z[3])
                Z(z[4])
                Z([3, '4d53dbf5-2'])
                Z([
                    [7],
                    [3, 'k']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_51 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_51 = true;
        var x = ['./node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_51_1()
            var oBGB = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var xCGB = _v()
            _(oBGB, xCGB)
            if (_oz(z, 2, e, s, gg)) {
                xCGB.wxVkey = 1
                var cFGB = _mz(z, 'u-line', ['bind:__l', 3, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(xCGB, cFGB)
            }
            var oDGB = _v()
            _(oBGB, oDGB)
            if (_oz(z, 7, e, s, gg)) {
                oDGB.wxVkey = 1
                var hGGB = _v()
                _(oDGB, hGGB)
                if (_oz(z, 8, e, s, gg)) {
                    hGGB.wxVkey = 1
                    var oHGB = _mz(z, 'u-loading-icon', ['bind:__l', 9, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(hGGB, oHGB)
                }
                hGGB.wxXCkey = 1
                hGGB.wxXCkey = 3
            }
            var fEGB = _v()
            _(oBGB, fEGB)
            if (_oz(z, 13, e, s, gg)) {
                fEGB.wxVkey = 1
                var cIGB = _mz(z, 'u-line', ['bind:__l', 14, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(fEGB, cIGB)
            }
            xCGB.wxXCkey = 1
            xCGB.wxXCkey = 3
            oDGB.wxXCkey = 1
            oDGB.wxXCkey = 3
            fEGB.wxXCkey = 1
            fEGB.wxXCkey = 3
            _(r, oBGB)
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
                g = "$gwx_XC_51";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_51();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml'] = [$gwx_XC_51, './node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml'] = $gwx_XC_51('./node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml');;
__wxRoute = "node-modules/uview-plus/components/u-loadmore/u-loadmore";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/uview-plus/components/u-loadmore/u-loadmore.js";
define("node-modules/uview-plus/components/u-loadmore/u-loadmore.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var o = require("../../../../common/vendor.js"),
        t = {
            name: "u-loadmore",
            mixins: [o.mpMixin, o.mixin, o.props$12],
            data: function() {
                return {
                    dotText: "●"
                }
            },
            computed: {
                loadTextStyle: function() {
                    return {
                        color: this.color,
                        fontSize: o.addUnit(this.fontSize),
                        lineHeight: o.addUnit(this.fontSize),
                        backgroundColor: this.bgColor
                    }
                },
                showText: function() {
                    return "loadmore" == this.status ? this.loadmoreText : "loading" == this.status ? this.loadingText : "nomore" == this.status && this.isDot ? this.dotText : this.nomoreText
                }
            },
            emits: ["loadmore"],
            methods: {
                addStyle: o.addStyle,
                addUnit: o.addUnit,
                loadMore: function() {
                    "loadmore" == this.status && this.$emit("loadmore")
                }
            }
        };
    Array || (o.resolveComponent("u-line") + o.resolveComponent("u-loading-icon"))(), Math || (function() {
        return "../u-line/u-line.js"
    } + function() {
        return "../u-loading-icon/u-loading-icon.js"
    })();
    var e = o._export_sfc(t, [
        ["render", function(t, e, n, i, r, d) {
            return o.e({
                a: t.line
            }, t.line ? {
                b: o.p({
                    length: "140rpx",
                    color: t.lineColor,
                    hairline: !1,
                    dashed: t.dashed
                })
            } : {}, {
                c: "loading" === t.status && t.icon
            }, "loading" === t.status && t.icon ? {
                d: o.p({
                    color: t.iconColor,
                    size: t.iconSize,
                    mode: t.loadingIcon
                })
            } : {}, {
                e: o.t(d.showText),
                f: o.s(d.loadTextStyle),
                g: o.n("nomore" == t.status && 1 == t.isDot ? "u-loadmore__content__dot-text" : "u-loadmore__content__text"),
                h: o.o((function() {
                    return d.loadMore && d.loadMore.apply(d, arguments)
                })),
                i: o.n("loadmore" == t.status || "nomore" == t.status ? "u-more" : ""),
                j: t.line
            }, t.line ? {
                k: o.p({
                    length: "140rpx",
                    color: t.lineColor,
                    hairline: !1,
                    dashed: t.dashed
                })
            } : {}, {
                l: o.s(d.addStyle(t.customStyle)),
                m: o.s({
                    backgroundColor: t.bgColor,
                    marginBottom: d.addUnit(t.marginBottom),
                    marginTop: d.addUnit(t.marginTop),
                    height: d.addUnit(t.height)
                })
            })
        }],
        ["__scopeId", "data-v-4d53dbf5"]
    ]);
    wx.createComponent(e);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/uview-plus/components/u-loadmore/u-loadmore.js'
});
require("node-modules/uview-plus/components/u-loadmore/u-loadmore.js");