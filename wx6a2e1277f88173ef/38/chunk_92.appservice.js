$gwx_XC_107 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_107 || [];

        function gz$gwx_XC_107_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'detail-qrcode data-v-e0d3d2d6'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-e0d3d2d6'])
                Z([3, 'width:280rpx;height:280rpx'])
                Z([3, 'e0d3d2d6-0'])
                Z(z[2])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[3])
                Z(z[4])
                Z([3, 'e0d3d2d6-1'])
                Z(z[8])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, 'btn-orange data-v-e0d3d2d6'])
                Z([3, 'flex:0 0 60%'])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[3])
                Z(z[4])
                Z([3, 'e0d3d2d6-2'])
                Z(z[17])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_107 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_107 = true;
        var x = ['./pages/my/order/components/detail-qrcode/detail-qrcode.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_107_1()
            var oFQC = _v()
            _(r, oFQC)
            if (_oz(z, 0, e, s, gg)) {
                oFQC.wxVkey = 1
                var lGQC = _n('view')
                _rz(z, lGQC, 'class', 1, e, s, gg)
                var aHQC = _v()
                _(lGQC, aHQC)
                if (_oz(z, 2, e, s, gg)) {
                    aHQC.wxVkey = 1
                    var eJQC = _mz(z, 'my-cache-image-index', ['bind:__l', 3, 'class', 1, 'style', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                    _(aHQC, eJQC)
                }
                var tIQC = _v()
                _(lGQC, tIQC)
                if (_oz(z, 8, e, s, gg)) {
                    tIQC.wxVkey = 1
                    var bKQC = _mz(z, 'up-copy', ['bind:__l', 9, 'class', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                    _(tIQC, bKQC)
                }
                aHQC.wxXCkey = 1
                aHQC.wxXCkey = 3
                tIQC.wxXCkey = 1
                tIQC.wxXCkey = 3
                _(oFQC, lGQC)
            } else {
                oFQC.wxVkey = 2
                var oLQC = _mz(z, 'view', ['bindtap', 14, 'class', 1, 'style', 2], [], e, s, gg)
                var xMQC = _v()
                _(oLQC, xMQC)
                if (_oz(z, 17, e, s, gg)) {
                    xMQC.wxVkey = 1
                    var oNQC = _mz(z, 'up-icon', ['bind:__l', 18, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(xMQC, oNQC)
                }
                xMQC.wxXCkey = 1
                xMQC.wxXCkey = 3
                _(oFQC, oLQC)
            }
            oFQC.wxXCkey = 1
            oFQC.wxXCkey = 3
            oFQC.wxXCkey = 3
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
                g = "$gwx_XC_107";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_107();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/order/components/detail-qrcode/detail-qrcode.wxml'] = [$gwx_XC_107, './pages/my/order/components/detail-qrcode/detail-qrcode.wxml'];
else __wxAppCode__['pages/my/order/components/detail-qrcode/detail-qrcode.wxml'] = $gwx_XC_107('./pages/my/order/components/detail-qrcode/detail-qrcode.wxml');;
__wxRoute = "pages/my/order/components/detail-qrcode/detail-qrcode";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/order/components/detail-qrcode/detail-qrcode.js";
define("pages/my/order/components/detail-qrcode/detail-qrcode.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../../../common/vendor.js");
    require("../../../../../utils/request.js");
    var o = require("../../../../../api/payment-api/order/order.js");
    Array || (n.resolveComponent("my-cache-image-index") + n.resolveComponent("up-copy") + n.resolveComponent("up-icon"))(), Math || (function() {
        return "../../../../../components/cache-image/index.js"
    } + function() {
        return "../../../../../node-modules/uview-plus/components/u-copy/u-copy.js"
    } + function() {
        return "../../../../../node-modules/uview-plus/components/u-icon/u-icon.js"
    })();
    var t = {
            __name: "detail-qrcode",
            props: {
                data: Object,
                role: String
            },
            setup: function(t) {
                var u = t,
                    a = n.inject("orderContext").onScanCode,
                    c = n.ref({}),
                    i = n.computed((function() {
                        return "buyer" === u.role
                    }));
                return n.onMounted((function() {
                        i && r(e().mark((function r() {
                            var n;
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, o.generateQrcode({
                                            orderId: u.data.id
                                        });
                                    case 3:
                                        n = e.sent, c.value = n.data, e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), r, null, [
                                [0, 7]
                            ])
                        })))()
                    })),
                    function(e, r) {
                        return n.e({
                            a: n.unref(i)
                        }, n.unref(i) ? {
                            b: n.p({
                                width: "280rpx",
                                height: "280rpx",
                                imageUrl: n.unref(c).qrCode
                            }),
                            c: n.t(n.unref(c).orderNo),
                            d: n.p({
                                content: n.unref(c).orderNo
                            })
                        } : {
                            e: n.p({
                                name: "scan",
                                size: "20",
                                color: "#fff"
                            }),
                            f: n.o((function() {
                                return n.unref(a)(t.data.id)
                            }))
                        })
                    }
            }
        },
        u = n._export_sfc(t, [
            ["__scopeId", "data-v-e0d3d2d6"]
        ]);
    wx.createComponent(u);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'pages/my/order/components/detail-qrcode/detail-qrcode.js'
});
require("pages/my/order/components/detail-qrcode/detail-qrcode.js");