$gwx_XC_109 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_109 || [];

        function gz$gwx_XC_109_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_109_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_109_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_109_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'order-datil data-v-d96e9bf2'])
                Z([3, 'data-v-d96e9bf2'])
                Z([3, 'padding-bottom:160rpx'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z(z[1])
                Z([3, 'd96e9bf2-0'])
                Z(z[3])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'f'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'c']
                ])
                Z(z[4])
                Z(z[1])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'b']
                ])
                Z(z[12])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'e']
                ])
                Z(z[4])
                Z(z[1])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'd']
                ])
                Z(z[17])
                Z([3, 'order-cont data-v-d96e9bf2'])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[4])
                Z(z[1])
                Z([3, 'd96e9bf2-3'])
                Z(z[23])
                Z([
                    [7],
                    [3, 'r0']
                ])
                Z([
                    [7],
                    [3, 'l']
                ])
                Z(z[4])
                Z(z[1])
                Z([3, 'd96e9bf2-4'])
                Z(z[29])
                Z([
                    [7],
                    [3, 'q']
                ])
                Z(z[4])
                Z(z[1])
                Z([3, 'd96e9bf2-5'])
                Z(z[34])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_109_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_109_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_109 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_109 = true;
        var x = ['./pages/my/order/order-refund.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_109_1()
            var eVSC = _n('view')
            _rz(z, eVSC, 'class', 0, e, s, gg)
            var oXSC = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
            var xYSC = _v()
            _(oXSC, xYSC)
            if (_oz(z, 3, e, s, gg)) {
                xYSC.wxVkey = 1
                var f1SC = _mz(z, 'user-simple-card', ['bind:__l', 4, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(xYSC, f1SC)
            }
            var c2SC = _v()
            _(oXSC, c2SC)
            var h3SC = function(c5SC, o4SC, o6SC, gg) {
                var a8SC = _v()
                _(o6SC, a8SC)
                if (_oz(z, 11, c5SC, o4SC, gg)) {
                    a8SC.wxVkey = 1
                    var t9SC = _v()
                    _(a8SC, t9SC)
                    if (_oz(z, 12, c5SC, o4SC, gg)) {
                        t9SC.wxVkey = 1
                        var e0SC = _mz(z, 'other-expenses', ['bind:__l', 13, 'class', 1, 'uI', 2, 'uP', 3], [], c5SC, o4SC, gg)
                        _(t9SC, e0SC)
                    }
                    t9SC.wxXCkey = 1
                    t9SC.wxXCkey = 3
                } else {
                    a8SC.wxVkey = 2
                    var bATC = _v()
                    _(a8SC, bATC)
                    if (_oz(z, 17, c5SC, o4SC, gg)) {
                        bATC.wxVkey = 1
                        var oBTC = _mz(z, 'detail-item', ['bind:__l', 18, 'class', 1, 'uI', 2, 'uP', 3], [], c5SC, o4SC, gg)
                        _(bATC, oBTC)
                    }
                    bATC.wxXCkey = 1
                    bATC.wxXCkey = 3
                }
                a8SC.wxXCkey = 1
                a8SC.wxXCkey = 3
                a8SC.wxXCkey = 3
                return o6SC
            }
            c2SC.wxXCkey = 4
            _2z(z, 9, h3SC, e, s, gg, c2SC, 'item', 'index', 'f')
            var xCTC = _n('view')
            _rz(z, xCTC, 'class', 22, e, s, gg)
            var oDTC = _v()
            _(xCTC, oDTC)
            if (_oz(z, 23, e, s, gg)) {
                oDTC.wxVkey = 1
                var cFTC = _mz(z, 'title', ['bind:__l', 24, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(oDTC, cFTC)
            }
            var fETC = _v()
            _(xCTC, fETC)
            if (_oz(z, 28, e, s, gg)) {
                fETC.wxVkey = 1
            }
            oDTC.wxXCkey = 1
            oDTC.wxXCkey = 3
            fETC.wxXCkey = 1
            _(oXSC, xCTC)
            var oZSC = _v()
            _(oXSC, oZSC)
            if (_oz(z, 29, e, s, gg)) {
                oZSC.wxVkey = 1
                var hGTC = _mz(z, 'title', ['bind:__l', 30, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(oZSC, hGTC)
            }
            xYSC.wxXCkey = 1
            xYSC.wxXCkey = 3
            oZSC.wxXCkey = 1
            oZSC.wxXCkey = 3
            _(eVSC, oXSC)
            var bWSC = _v()
            _(eVSC, bWSC)
            if (_oz(z, 34, e, s, gg)) {
                bWSC.wxVkey = 1
                var oHTC = _mz(z, 'l-status-bar', ['bind:__l', 35, 'class', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                _(bWSC, oHTC)
            }
            bWSC.wxXCkey = 1
            bWSC.wxXCkey = 3
            _(r, eVSC)
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
                g = "$gwx_XC_109";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_109();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/order/order-refund.wxml'] = [$gwx_XC_109, './pages/my/order/order-refund.wxml'];
else __wxAppCode__['pages/my/order/order-refund.wxml'] = $gwx_XC_109('./pages/my/order/order-refund.wxml');;
__wxRoute = "pages/my/order/order-refund";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/order/order-refund.js";
define("pages/my/order/order-refund.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var t = require("../../../api/payment-api/order/order.js"),
        u = require("../../../enums/global.js");
    require("../../../enums/im.js");
    var a = require("../../../staticData/guideStepData.js"),
        o = require("../../../store/order.js"),
        s = require("../../../utils/util.js");
    Array || n.resolveComponent("l-status-bar")(), Math || (l + c + d + i + function() {
        return "../../../components/l-ui/l-status-bar/l-status-bar.js"
    })();
    var i = function() {
            return "../../../components/title/title.js"
        },
        l = function() {
            return "../../../components/user-simple-card/user-simple-card.js"
        },
        c = function() {
            return "../../common/orders/components/other-expenses/other-expenses.js"
        },
        d = function() {
            return "./components/detail-item/detail-item.js"
        },
        f = {
            __name: "order-refund",
            setup: function(i) {
                var l = o.useOrderStore().checkIsBuyer,
                    c = n.ref(""),
                    d = n.ref("buyer"),
                    f = n.ref({}),
                    p = n.ref({});
                n.onLoad((function(e) {
                    n.getCurrentInstance().proxy.getOpenerEventChannel().on("orderRefundInfo", (function(e) {
                        f.value = e.orderDetail, l(e.orderDetail.buyerUserId) || (d.value = "seller"), v(e.orderDetail.id)
                    }))
                }));
                var m = n.computed((function() {
                        return "buyer" === d.value
                    })),
                    v = function() {
                        var u = r(e().mark((function r(u) {
                            var a, o, s;
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!u) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, t.refundPreCheck({
                                            orderId: u
                                        });
                                    case 4:
                                        s = e.sent, p.value = s.data, (null == (a = s.data) ? void 0 : a.allowRefund) || n.index.showToast({
                                            title: "".concat(null == (o = s.data) ? void 0 : o.penaltyReason),
                                            icon: "none",
                                            duration: 2500
                                        }), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), p.value = {
                                            allowRefund: !1,
                                            defaultReturnReason: "",
                                            returnAmount: 0,
                                            penaltyAmount: 0,
                                            penaltyReason: e.t0.message
                                        };
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), r, null, [
                                [1, 8]
                            ])
                        })));
                        return function(e) {
                            return u.apply(this, arguments)
                        }
                    }(),
                    y = function(e) {
                        c.value = e.detail.value
                    },
                    b = function() {
                        var u = r(e().mark((function r() {
                            var u, a, o, s, i, l, d;
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (u = p.value, a = u.allowRefund, o = u.penaltyAmount, s = u.defaultReturnReason, i = u.penaltyReason, a) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", void n.index.showToast({
                                            title: "".concat(i),
                                            icon: "none",
                                            duration: 2500
                                        }));
                                    case 3:
                                        return l = o > 0, d = {
                                            orderId: f.value.id,
                                            returnReason: c.value || s,
                                            returnAmount: f.value.paidAmount,
                                            penaltyFlag: l,
                                            penaltyAmount: o
                                        }, console.log(d), e.next = 7, t.buyerOrderRefund(d);
                                    case 7:
                                        n.index.showToast({
                                            title: "已申请退款",
                                            icon: "none"
                                        }), setTimeout((function() {
                                            n.index.navigateBack()
                                        }), 1e3);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), r)
                        })));
                        return function() {
                            return u.apply(this, arguments)
                        }
                    }();
                return function(e, r) {
                    return {
                        a: n.p({
                            userId: n.unref(m) ? n.unref(f).sellerUserId : n.unref(f).buyerUserId,
                            nickName: n.unref(m) ? n.unref(f).sellerNickName : n.unref(f).buyerNickName,
                            avatar: n.unref(m) ? n.unref(f).sellerAvatar : n.unref(f).buyerAvatar,
                            score: n.unref(f).sellerScore,
                            isChat: n.unref(f).orderStatus !== n.unref(u.Enums).ORDER_STATUS.PaymentPending,
                            customClass: "mx32 px26"
                        }),
                        b: n.f(n.unref(f).saleOrderItemList, (function(e, r, t) {
                            var u;
                            return n.e({
                                a: "FARE" === e.prodType
                            }, "FARE" === e.prodType ? {
                                b: "d96e9bf2-1-" + t,
                                c: n.p({
                                    data: e,
                                    showDist: !0,
                                    isOrder: !0
                                })
                            } : {
                                d: "d96e9bf2-2-" + t,
                                e: n.p({
                                    data: e,
                                    orderDetail: {
                                        orderStatus: n.unref(f).orderStatus,
                                        distance: null == (u = n.unref(f).placeOrderLocation) ? void 0 : u.distance
                                    },
                                    role: n.unref(d)
                                })
                            }, {
                                f: r
                            })
                        })),
                        c: n.t(n.unref(f).paidAmount),
                        d: n.t(n.unref(p).returnAmount || 0),
                        e: n.t(n.unref(p).penaltyAmount),
                        f: n.unref(p).penaltyAmount > 0 ? 1 : "",
                        g: n.t(n.unref(p).penaltyReason),
                        h: n.p({
                            title: "退款原因（选填）"
                        }),
                        i: n.unref(p).defaultReturnReason,
                        j: n.unref(c),
                        k: n.o(y),
                        l: n.p({
                            title: "申请退款规则"
                        }),
                        m: n.unref(a.refundRule2),
                        n: n.o((function() {
                            return n.unref(s.contactService) && n.unref(s.contactService).apply(void 0, arguments)
                        })),
                        o: n.o((function(e) {
                            return n.index.navigateBack()
                        })),
                        p: n.o(b),
                        q: n.p({
                            backgroundColor: "#fff"
                        })
                    }
                }
            }
        },
        p = n._export_sfc(f, [
            ["__scopeId", "data-v-d96e9bf2"]
        ]);
    wx.createPage(p);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/order/order-refund.js'
});
require("pages/my/order/order-refund.js");