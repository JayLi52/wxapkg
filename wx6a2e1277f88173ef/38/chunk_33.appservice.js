$gwx_XC_42 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_42 || [];

        function gz$gwx_XC_42_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'u-empty data-v-b1d90c0b'])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-b1d90c0b'])
                Z([3, 'b1d90c0b-0'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_42 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_42 = true;
        var x = ['./node-modules/uview-plus/components/u-empty/u-empty.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_42_1()
            var bSCB = _v()
            _(r, bSCB)
            if (_oz(z, 0, e, s, gg)) {
                bSCB.wxVkey = 1
                var oTCB = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
                var xUCB = _v()
                _(oTCB, xUCB)
                if (_oz(z, 3, e, s, gg)) {
                    xUCB.wxVkey = 1
                    var fWCB = _mz(z, 'up-icon', ['bind:__l', 4, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(xUCB, fWCB)
                } else {
                    xUCB.wxVkey = 2
                }
                var oVCB = _v()
                _(oTCB, oVCB)
                if (_oz(z, 8, e, s, gg)) {
                    oVCB.wxVkey = 1
                    var cXCB = _n('slot')
                    _(oVCB, cXCB)
                }
                xUCB.wxXCkey = 1
                xUCB.wxXCkey = 3
                oVCB.wxXCkey = 1
                _(bSCB, oTCB)
            }
            bSCB.wxXCkey = 1
            bSCB.wxXCkey = 3
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
                g = "$gwx_XC_42";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_42();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-empty/u-empty.wxml'] = [$gwx_XC_42, './node-modules/uview-plus/components/u-empty/u-empty.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-empty/u-empty.wxml'] = $gwx_XC_42('./node-modules/uview-plus/components/u-empty/u-empty.wxml');;
__wxRoute = "node-modules/uview-plus/components/u-empty/u-empty";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/uview-plus/components/u-empty/u-empty.js";
define("node-modules/uview-plus/components/u-empty/u-empty.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../../common/vendor.js"),
        e = {
            name: "u-empty",
            mixins: [t.mpMixin, t.mixin, t.props$13],
            data: function() {
                return {
                    icons: {
                        car: t.t$1("up.empty.car"),
                        page: t.t$1("up.empty.page"),
                        search: t.t$1("up.empty.search"),
                        address: t.t$1("up.empty.address"),
                        wifi: t.t$1("up.empty.wifi"),
                        order: t.t$1("up.empty.order"),
                        coupon: t.t$1("up.empty.coupon"),
                        favor: t.t$1("up.empty.favor"),
                        permission: t.t$1("up.empty.permission"),
                        history: t.t$1("up.empty.history"),
                        news: t.t$1("up.empty.news"),
                        message: t.t$1("up.empty.message"),
                        list: t.t$1("up.empty.list"),
                        data: t.t$1("up.empty.data"),
                        comment: t.t$1("up.empty.comment")
                    }
                }
            },
            computed: {
                emptyStyle: function() {
                    var e = {};
                    return e.marginTop = t.addUnit(this.marginTop), t.deepMerge(t.addStyle(this.customStyle), e)
                },
                textStyle: function() {
                    var e = {};
                    return e.color = this.textColor, e.fontSize = t.addUnit(this.textSize), e
                },
                isSrc: function() {
                    return this.icon.indexOf("/") >= 0
                }
            },
            methods: {
                addUnit: t.addUnit
            }
        };
    Array || t.resolveComponent("up-icon")(), Math;
    var o = t._export_sfc(e, [
        ["render", function(e, o, i, s, n, p) {
            return t.e({
                a: e.show
            }, e.show ? t.e({
                b: !p.isSrc
            }, p.isSrc ? {
                d: p.addUnit(e.width),
                e: p.addUnit(e.height),
                f: e.icon
            } : {
                c: t.p({
                    name: "message" === e.mode ? "chat" : "empty-".concat(e.mode),
                    size: e.iconSize,
                    color: e.iconColor,
                    "margin-top": "14"
                })
            }, {
                g: t.t(e.text ? e.text : n.icons[e.mode]),
                h: t.s(p.textStyle),
                i: e.$slots.default || e.$slots.$default
            }, (e.$slots.default || e.$slots.$default, {}), {
                j: t.s(p.emptyStyle)
            }) : {})
        }],
        ["__scopeId", "data-v-b1d90c0b"]
    ]);
    wx.createComponent(o);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/uview-plus/components/u-empty/u-empty.js'
});
require("node-modules/uview-plus/components/u-empty/u-empty.js");