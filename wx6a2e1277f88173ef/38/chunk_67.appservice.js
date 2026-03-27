$gwx_XC_79 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_79 || [];

        function gz$gwx_XC_79_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_79_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'f-row f-jcb f-aic mb10 data-v-18448f8b'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_79_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_79 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_79 = true;
        var x = ['./pages/common/orders/components/other-expenses/other-expenses.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_79_1()
            var tS3B = _n('view')
            _rz(z, tS3B, 'class', 0, e, s, gg)
            var eT3B = _v()
            _(tS3B, eT3B)
            if (_oz(z, 1, e, s, gg)) {
                eT3B.wxVkey = 1
            }
            var bU3B = _v()
            _(tS3B, bU3B)
            if (_oz(z, 2, e, s, gg)) {
                bU3B.wxVkey = 1
            } else {
                bU3B.wxVkey = 2
                var oV3B = _v()
                _(bU3B, oV3B)
                if (_oz(z, 3, e, s, gg)) {
                    oV3B.wxVkey = 1
                }
                oV3B.wxXCkey = 1
            }
            eT3B.wxXCkey = 1
            bU3B.wxXCkey = 1
            _(r, tS3B)
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
                g = "$gwx_XC_79";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_79();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/orders/components/other-expenses/other-expenses.wxml'] = [$gwx_XC_79, './pages/common/orders/components/other-expenses/other-expenses.wxml'];
else __wxAppCode__['pages/common/orders/components/other-expenses/other-expenses.wxml'] = $gwx_XC_79('./pages/common/orders/components/other-expenses/other-expenses.wxml');;
__wxRoute = "pages/common/orders/components/other-expenses/other-expenses";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/common/orders/components/other-expenses/other-expenses.js";
define("pages/common/orders/components/other-expenses/other-expenses.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var a = require("../../../../../common/vendor.js"),
        t = {
            __name: "other-expenses",
            props: {
                data: {
                    type: Object
                },
                isCart: {
                    type: Boolean
                },
                isOrder: {
                    type: Boolean,
                    default: !1
                },
                showDist: Boolean
            },
            setup: function(t) {
                var e = t,
                    r = a.computed((function() {
                        return "Y" === e.data.freeFlag || "Y" === e.data.prodFree || 0 === e.data.payAmount
                    }));
                return function(e, d) {
                    var o, n, i;
                    return a.e({
                        a: a.t(t.data.prodName),
                        b: "FARE" === t.data.prodType && !t.showDist
                    }, "FARE" !== t.data.prodType || t.showDist ? {} : {
                        c: a.t(t.data.distance || "-")
                    }, {
                        d: !t.isOrder && !t.data.distance && "FARE" === t.data.prodType
                    }, t.isOrder || t.data.distance || "FARE" !== t.data.prodType ? a.e({
                        e: t.isCart && a.unref(r) && "FARE" === t.data.prodType
                    }, t.isCart && a.unref(r) && "FARE" === t.data.prodType ? {
                        f: a.t(null !== (o = t.data.payAmount) && void 0 !== o ? o : t.data.retailPrice * t.data.quantity)
                    } : {}, {
                        g: a.t(a.unref(r) ? "" : "¥"),
                        h: a.n(t.isOrder ? "color-333" : "color-f15"),
                        i: a.t("Y" === t.data.freeFlag ? "平台减免" : "Y" === t.data.prodFree || 0 === t.data.payAmount ? "免费" : null !== (n = t.data.payAmount) && void 0 !== n ? n : t.data.retailPrice * t.data.quantity),
                        j: a.n(t.isOrder ? "color-333" : "color-f15")
                    }) : {}, {
                        k: a.t(t.data.prodDesc),
                        l: a.t(a.unref(r) ? "¥" + (null !== (i = t.data.payAmount) && void 0 !== i ? i : t.data.retailPrice * t.data.quantity) : "")
                    })
                }
            }
        },
        e = a._export_sfc(t, [
            ["__scopeId", "data-v-18448f8b"]
        ]);
    wx.createComponent(e);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'pages/common/orders/components/other-expenses/other-expenses.js'
});
require("pages/common/orders/components/other-expenses/other-expenses.js");