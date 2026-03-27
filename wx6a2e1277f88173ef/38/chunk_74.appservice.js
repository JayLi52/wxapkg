$gwx_XC_87 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_87 || [];

        function gz$gwx_XC_87_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_87_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_87_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_87_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-3499f8fb'])
                Z([3, '3499f8fb-0'])
                Z(z[0])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_87_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_87_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_87 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_87 = true;
        var x = ['./pages/home/select-address/components/position-top/position-top.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_87_1()
            var cW9B = _v()
            _(r, cW9B)
            if (_oz(z, 0, e, s, gg)) {
                cW9B.wxVkey = 1
                var oX9B = _mz(z, 'up-icon', ['bind:__l', 1, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(cW9B, oX9B)
            }
            cW9B.wxXCkey = 1
            cW9B.wxXCkey = 3
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
                g = "$gwx_XC_87";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_87();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/select-address/components/position-top/position-top.wxml'] = [$gwx_XC_87, './pages/home/select-address/components/position-top/position-top.wxml'];
else __wxAppCode__['pages/home/select-address/components/position-top/position-top.wxml'] = $gwx_XC_87('./pages/home/select-address/components/position-top/position-top.wxml');;
__wxRoute = "pages/home/select-address/components/position-top/position-top";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/home/select-address/components/position-top/position-top.js";
define("pages/home/select-address/components/position-top/position-top.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../../../common/vendor.js"),
        i = require("../../../../../store/location.js");
    Array || n.resolveComponent("up-icon")(), Math;
    var o = {
            __name: "position-top",
            props: {
                againPositionCallBack: {
                    type: Function,
                    default: function() {}
                }
            },
            setup: function(o) {
                var r = o,
                    a = i.useLocationStore(),
                    s = n.storeToRefs(a),
                    d = s.locationInfo,
                    c = s.selectedAddress,
                    u = a.getLocation,
                    l = a.setSelectedAddress;
                d.value.city || u(!0), n.watch((function() {
                    return d.value
                }), (function(e) {
                    if (!c.value || "{}" === JSON.stringify(c.value) || !c.value.city) {
                        var t = {
                            city: e.city,
                            city_code: e.city_code,
                            desc_address: e.desc_address,
                            longitude: e.longitude,
                            latitude: e.latitude,
                            isOpen: e.isOpen
                        };
                        l(t)
                    }
                }), {
                    immediate: !0,
                    deep: !0
                });
                var p = function() {
                    var i = t(e().mark((function t() {
                        var i, o;
                        return e().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n.index.showLoading({
                                        title: "定位中...",
                                        mask: !0
                                    }), e.next = 4, u(!0);
                                case 4:
                                    i = e.sent, console.log("againPosition", i), 200 == i.code ? (o = {
                                        city: i.address.city,
                                        city_code: i.address.city_code,
                                        desc_address: i.address.desc_address,
                                        longitude: i.address.longitude,
                                        latitude: i.address.latitude,
                                        isOpen: i.address.isOpen
                                    }, l(o), r.againPositionCallBack && r.againPositionCallBack(o), n.index.hideLoading()) : (n.index.hideLoading(), n.index.showToast({
                                        icon: "none",
                                        title: "定位失败"
                                    })), e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), n.index.hideLoading(), n.index.showToast({
                                        icon: "none",
                                        title: "定位失败"
                                    }), console.error("定位异常:", e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), t, null, [
                            [0, 8]
                        ])
                    })));
                    return function() {
                        return i.apply(this, arguments)
                    }
                }();
                return function(e, t) {
                    return {
                        a: n.p({
                            name: "map",
                            color: "#29e",
                            size: "28rpx"
                        }),
                        b: n.t(n.unref(c).city || "暂无"),
                        c: n.t(n.unref(c).desc_address),
                        d: n.unref(c).desc_address ? "" : 1,
                        e: n.o(p)
                    }
                }
            }
        },
        r = n._export_sfc(o, [
            ["__scopeId", "data-v-3499f8fb"]
        ]);
    wx.createComponent(r);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'pages/home/select-address/components/position-top/position-top.js'
});
require("pages/home/select-address/components/position-top/position-top.js");