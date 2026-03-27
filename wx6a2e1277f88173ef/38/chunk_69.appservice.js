$gwx_XC_81 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_81 || [];

        function gz$gwx_XC_81_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_81_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'example-main data-v-24cf91a0'])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, '__l'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([3, 'data-v-24cf91a0'])
                Z([3, '24cf91a0-0'])
                Z(z[1])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'upload-icon f-row f-aic f-jcc data-v-24cf91a0'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z(z[2])
                Z(z[6])
                Z([3, '24cf91a0-1,24cf91a0-0'])
                Z(z[12])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[2])
                Z(z[6])
                Z([3, '24cf91a0-2'])
                Z(z[17])
                Z(z[9])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_81_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_81 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_81 = true;
        var x = ['./pages/common/orders/edit-example.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_81_1()
            var tC5B = _n('view')
            _rz(z, tC5B, 'class', 0, e, s, gg)
            var eD5B = _v()
            _(tC5B, eD5B)
            if (_oz(z, 1, e, s, gg)) {
                eD5B.wxVkey = 1
                var oF5B = _mz(z, 'up-upload', ['bind:__l', 2, 'bindafterRead', 1, 'binddelete', 2, 'binderror', 3, 'class', 4, 'uI', 5, 'uP', 6, 'uS', 7], [], e, s, gg)
                var xG5B = _mz(z, 'view', ['bindtap', 10, 'class', 1], [], e, s, gg)
                var oH5B = _v()
                _(xG5B, oH5B)
                if (_oz(z, 12, e, s, gg)) {
                    oH5B.wxVkey = 1
                    var fI5B = _mz(z, 'up-icon', ['bind:__l', 13, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(oH5B, fI5B)
                }
                oH5B.wxXCkey = 1
                oH5B.wxXCkey = 3
                _(oF5B, xG5B)
                _(eD5B, oF5B)
            }
            var bE5B = _v()
            _(tC5B, bE5B)
            if (_oz(z, 17, e, s, gg)) {
                bE5B.wxVkey = 1
                var cJ5B = _mz(z, 'l-status-bar', ['bind:__l', 18, 'class', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                _(bE5B, cJ5B)
            }
            eD5B.wxXCkey = 1
            eD5B.wxXCkey = 3
            bE5B.wxXCkey = 1
            bE5B.wxXCkey = 3
            _(r, tC5B)
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
                g = "$gwx_XC_81";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_81();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/orders/edit-example.wxml'] = [$gwx_XC_81, './pages/common/orders/edit-example.wxml'];
else __wxAppCode__['pages/common/orders/edit-example.wxml'] = $gwx_XC_81('./pages/common/orders/edit-example.wxml');;
__wxRoute = "pages/common/orders/edit-example";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/common/orders/edit-example.js";
define("pages/common/orders/edit-example.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../@babel/runtime/helpers/toConsumableArray"),
        t = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var o = require("../../../api/payment-api/order/order.js"),
        u = require("../../../store/global.js"),
        a = require("../../../store/order.js"),
        s = require("../../../utils/upload.js");
    Array || (t.resolveComponent("up-icon") + t.resolveComponent("up-upload") + t.resolveComponent("l-status-bar"))(), Math || (function() {
        return "../../../node-modules/uview-plus/components/u-icon/u-icon.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-upload/u-upload.js"
    } + function() {
        return "../../../components/l-ui/l-status-bar/l-status-bar.js"
    })();
    var i = {
            __name: "edit-example",
            setup: function(i) {
                var c = a.useOrderStore(),
                    l = t.storeToRefs(c),
                    p = l.paymentInfo,
                    d = l.orderMore,
                    f = u.useGlobalStore(),
                    v = f.setChoosingFile,
                    m = f.resetChoosingFile,
                    x = t.ref([]),
                    h = function(e) {
                        x.value = [].concat(n(x.value), n(e.file)), m()
                    },
                    b = function() {
                        var n = r(e().mark((function r(n) {
                            var o;
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = n.file.id, e.t0 = o, !e.t0) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 5, ResourceApi.deleteByResourceId({
                                            id: o
                                        });
                                    case 5:
                                        t.index.showToast({
                                            title: "删除成功",
                                            icon: "success"
                                        });
                                    case 6:
                                        x.value.splice(n.index, 1);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), r)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(),
                    w = function() {
                        var n = r(e().mark((function n() {
                            return e().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (0 === x.value.length) {
                                            n.next = 8;
                                            break
                                        }
                                        return t.index.showLoading({
                                            title: "上传中..."
                                        }), n.next = 4, r(e().mark((function r() {
                                            var n, t, u, a;
                                            return e().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        n = [], t = 0;
                                                    case 2:
                                                        if (!(t < x.value.length)) {
                                                            e.next = 11;
                                                            break
                                                        }
                                                        return u = x.value[t], e.next = 6, s.uploadFile(u, {
                                                            integratedId: p.value.orderId
                                                        });
                                                    case 6:
                                                        200 === (a = e.sent).code && n.push(a.data.resourcePath);
                                                    case 8:
                                                        t++, e.next = 2;
                                                        break;
                                                    case 11:
                                                        return e.next = 13, o.updateOrderNotesAndReference({
                                                            orderId: p.value.orderId,
                                                            referenceId: p.value.orderId
                                                        });
                                                    case 13:
                                                        d.value.referenceList = n;
                                                    case 14:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), r)
                                        })))();
                                    case 4:
                                        t.index.showToast({
                                            title: "保存成功"
                                        }), t.index.navigateBack(), n.next = 9;
                                        break;
                                    case 8:
                                        t.index.showToast({
                                            title: "请至少上传一张图片",
                                            icon: "none"
                                        });
                                    case 9:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                return function(e, r) {
                    return {
                        a: t.p({
                            name: "plus",
                            size: "30"
                        }),
                        b: t.o((function() {
                            return t.unref(v) && t.unref(v).apply(void 0, arguments)
                        })),
                        c: t.o(h),
                        d: t.o(b),
                        e: t.o(t.unref(m)),
                        f: t.p({
                            fileList: t.unref(x),
                            sizeType: ["compressed"],
                            maxCount: 3,
                            capture: "album",
                            multiple: !0,
                            width: "196rpx",
                            height: "196rpx"
                        }),
                        g: t.o(w),
                        h: t.p({
                            backgroundColor: "#fff"
                        })
                    }
                }
            }
        },
        c = t._export_sfc(i, [
            ["__scopeId", "data-v-24cf91a0"]
        ]);
    wx.createPage(c);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/common/orders/edit-example.js'
});
require("pages/common/orders/edit-example.js");