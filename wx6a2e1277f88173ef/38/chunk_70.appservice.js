$gwx_XC_83 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_83 || [];

        function gz$gwx_XC_83_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_83_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'remark-main data-v-4933fc22'])
                Z([
                    [7],
                    [3, 'r0']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-4933fc22'])
                Z([3, '4933fc22-0'])
                Z(z[2])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_83_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_83 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_83 = true;
        var x = ['./pages/common/orders/edit-remark.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_83_1()
            var oJ8B = _n('view')
            _rz(z, oJ8B, 'class', 0, e, s, gg)
            var xK8B = _v()
            _(oJ8B, xK8B)
            if (_oz(z, 1, e, s, gg)) {
                xK8B.wxVkey = 1
            }
            var oL8B = _v()
            _(oJ8B, oL8B)
            if (_oz(z, 2, e, s, gg)) {
                oL8B.wxVkey = 1
                var fM8B = _mz(z, 'l-status-bar', ['bind:__l', 3, 'class', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                _(oL8B, fM8B)
            }
            xK8B.wxXCkey = 1
            oL8B.wxXCkey = 1
            oL8B.wxXCkey = 3
            _(r, oJ8B)
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
                g = "$gwx_XC_83";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_83();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/orders/edit-remark.wxml'] = [$gwx_XC_83, './pages/common/orders/edit-remark.wxml'];
else __wxAppCode__['pages/common/orders/edit-remark.wxml'] = $gwx_XC_83('./pages/common/orders/edit-remark.wxml');;
__wxRoute = "pages/common/orders/edit-remark";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/common/orders/edit-remark.js";
define("pages/common/orders/edit-remark.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var r = require("../../../api/payment-api/order/order.js"),
        o = require("../../../store/order.js");
    Array || e.resolveComponent("l-status-bar")(), Math;
    var t = {
            __name: "edit-remark",
            setup: function(t) {
                var a = o.useOrderStore(),
                    n = e.storeToRefs(a),
                    u = n.orderMore,
                    i = n.paymentInfo,
                    s = e.ref(u.value.remark || ""),
                    d = function(e) {
                        s.value = e.detail.value
                    },
                    f = function() {
                        var o = {
                            orderId: i.value.orderId,
                            remark: s.value
                        };
                        r.updateOrderNotesAndReference(o).then((function(r) {
                            u.value.remark = s.value, e.index.showToast({
                                title: "保存成功",
                                icon: "none"
                            }), setTimeout((function() {
                                e.index.navigateBack()
                            }), 1e3)
                        }))
                    };
                return function(r, o) {
                    return {
                        a: e.unref(s),
                        b: e.o(d),
                        c: e.o(f),
                        d: e.t(e.unref(s).length),
                        e: e.o(f),
                        f: e.p({
                            backgroundColor: "#fff"
                        })
                    }
                }
            }
        },
        a = e._export_sfc(t, [
            ["__scopeId", "data-v-4933fc22"]
        ]);
    wx.createPage(a);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/common/orders/edit-remark.js'
});
require("pages/common/orders/edit-remark.js");