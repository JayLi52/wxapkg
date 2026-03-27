$gwx_XC_90 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_90 || [];

        function gz$gwx_XC_90_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_90_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_90_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_90_1 = [];
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
                Z([3, 'data-v-9d6351e2'])
                Z([3, '9d6351e2-0'])
                Z(z[0])
                Z([3, 'app-container data-v-9d6351e2'])
                Z([3, 'address-list data-v-9d6351e2'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'g'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z(z[1])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'e']
                ])
                Z(z[2])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'f']
                ])
                Z(z[10])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[1])
                Z(z[2])
                Z([3, '9d6351e2-2'])
                Z(z[17])
                Z(z[6])
                Z(z[7])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, 'j'])
                Z([3, 'address-item h88 data-v-9d6351e2'])
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
                    [3, 'g']
                ])
                Z([3, 'address-item-left data-v-9d6351e2'])
                Z(z[12])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'i']
                ])
                Z([3, 'right-icon-box data-v-9d6351e2'])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z(z[1])
                Z(z[2])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'h']
                ])
                Z(z[33])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z(z[1])
                Z(z[2])
                Z([3, '9d6351e2-4'])
                Z(z[39])
                Z(z[1])
                Z(z[2])
                Z([3, '9d6351e2-5'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'k']
                ])
                Z(z[1])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z(z[2])
                Z([3, '9d6351e2-6,9d6351e2-5'])
                Z(z[48])
                Z(z[47])
                Z([
                    [7],
                    [3, 'm']
                ])
                Z(z[1])
                Z([
                    [7],
                    [3, 'l']
                ])
                Z(z[2])
                Z([3, '9d6351e2-7'])
                Z(z[55])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_90_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_90_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_90 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_90 = true;
        var x = ['./pages/home/select-address/select-all-address.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_90_1()
            var oTAC = _v()
            _(r, oTAC)
            if (_oz(z, 0, e, s, gg)) {
                oTAC.wxVkey = 1
                var oVAC = _mz(z, 'navbar', ['bind:__l', 1, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(oTAC, oVAC)
            }
            var lWAC = _n('view')
            _rz(z, lWAC, 'class', 5, e, s, gg)
            var aXAC = _n('view')
            _rz(z, aXAC, 'class', 6, e, s, gg)
            var eZAC = _v()
            _(aXAC, eZAC)
            var b1AC = function(x3AC, o2AC, o4AC, gg) {
                var c6AC = _v()
                _(o4AC, c6AC)
                if (_oz(z, 10, x3AC, o2AC, gg)) {
                    c6AC.wxVkey = 1
                    var h7AC = _mz(z, 'up-icon', ['bind:__l', 11, 'bindtap', 1, 'class', 2, 'uI', 3, 'uP', 4], [], x3AC, o2AC, gg)
                    _(c6AC, h7AC)
                }
                c6AC.wxXCkey = 1
                c6AC.wxXCkey = 3
                return o4AC
            }
            eZAC.wxXCkey = 4
            _2z(z, 8, b1AC, e, s, gg, eZAC, 'item', 'index', 'g')
            var tYAC = _v()
            _(aXAC, tYAC)
            if (_oz(z, 16, e, s, gg)) {
                tYAC.wxVkey = 1
                var o8AC = _v()
                _(tYAC, o8AC)
                if (_oz(z, 17, e, s, gg)) {
                    o8AC.wxVkey = 1
                    var c9AC = _mz(z, 'up-empty', ['bind:__l', 18, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(o8AC, c9AC)
                }
                o8AC.wxXCkey = 1
                o8AC.wxXCkey = 3
            }
            tYAC.wxXCkey = 1
            tYAC.wxXCkey = 3
            _(lWAC, aXAC)
            var o0AC = _n('view')
            _rz(z, o0AC, 'class', 22, e, s, gg)
            var aBBC = _v()
            _(o0AC, aBBC)
            var tCBC = function(bEBC, eDBC, oFBC, gg) {
                var oHBC = _n('view')
                _rz(z, oHBC, 'class', 26, bEBC, eDBC, gg)
                var fIBC = _v()
                _(oHBC, fIBC)
                if (_oz(z, 27, bEBC, eDBC, gg)) {
                    fIBC.wxVkey = 1
                } else {
                    fIBC.wxVkey = 2
                    var cJBC = _mz(z, 'view', ['catchtap', 28, 'class', 1], [], bEBC, eDBC, gg)
                    var hKBC = _v()
                    _(cJBC, hKBC)
                    if (_oz(z, 30, bEBC, eDBC, gg)) {
                        hKBC.wxVkey = 1
                    }
                    hKBC.wxXCkey = 1
                    _(fIBC, cJBC)
                }
                var oLBC = _mz(z, 'view', ['catchtap', 31, 'class', 1], [], bEBC, eDBC, gg)
                var cMBC = _v()
                _(oLBC, cMBC)
                if (_oz(z, 33, bEBC, eDBC, gg)) {
                    cMBC.wxVkey = 1
                    var oNBC = _mz(z, 'up-icon', ['bind:__l', 34, 'class', 1, 'uI', 2, 'uP', 3], [], bEBC, eDBC, gg)
                    _(cMBC, oNBC)
                }
                cMBC.wxXCkey = 1
                cMBC.wxXCkey = 3
                _(oHBC, oLBC)
                fIBC.wxXCkey = 1
                _(oFBC, oHBC)
                return oFBC
            }
            aBBC.wxXCkey = 4
            _2z(z, 24, tCBC, e, s, gg, aBBC, 'item', 'index', 'j')
            var lABC = _v()
            _(o0AC, lABC)
            if (_oz(z, 38, e, s, gg)) {
                lABC.wxVkey = 1
                var lOBC = _v()
                _(lABC, lOBC)
                if (_oz(z, 39, e, s, gg)) {
                    lOBC.wxVkey = 1
                    var aPBC = _mz(z, 'up-empty', ['bind:__l', 40, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(lOBC, aPBC)
                }
                lOBC.wxXCkey = 1
                lOBC.wxXCkey = 3
            }
            lABC.wxXCkey = 1
            lABC.wxXCkey = 3
            _(lWAC, o0AC)
            _(r, lWAC)
            var tQBC = _mz(z, 'l-status-bar', ['bind:__l', 44, 'class', 1, 'uI', 2, 'uS', 3], [], e, s, gg)
            var eRBC = _v()
            _(tQBC, eRBC)
            if (_oz(z, 48, e, s, gg)) {
                eRBC.wxVkey = 1
                var bSBC = _mz(z, 'base-button', ['bind:__l', 49, 'bindclick', 1, 'class', 2, 'uI', 3, 'uP', 4, 'uS', 5], [], e, s, gg)
                _(eRBC, bSBC)
            }
            eRBC.wxXCkey = 1
            eRBC.wxXCkey = 3
            _(r, tQBC)
            var cUAC = _v()
            _(r, cUAC)
            if (_oz(z, 55, e, s, gg)) {
                cUAC.wxVkey = 1
                var oTBC = _mz(z, 'l-login', ['bind:__l', 56, 'bindclose_mask', 1, 'class', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                _(cUAC, oTBC)
            }
            oTAC.wxXCkey = 1
            oTAC.wxXCkey = 3
            cUAC.wxXCkey = 1
            cUAC.wxXCkey = 3
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
                g = "$gwx_XC_90";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_90();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/select-address/select-all-address.wxml'] = [$gwx_XC_90, './pages/home/select-address/select-all-address.wxml'];
else __wxAppCode__['pages/home/select-address/select-all-address.wxml'] = $gwx_XC_90('./pages/home/select-address/select-all-address.wxml');;
__wxRoute = "pages/home/select-address/select-all-address";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/home/select-address/select-all-address.js";
define("pages/home/select-address/select-all-address.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../@babel/runtime/helpers/toConsumableArray"),
        r = require("../../../common/vendor.js"),
        o = require("../../../store/historyAddressStore.js"),
        s = require("../../../store/location.js"),
        i = require("../../../store/user.js"),
        u = require("../../../utils/route-manager.js");
    Array || (r.resolveComponent("navbar") + r.resolveComponent("up-icon") + r.resolveComponent("up-empty") + r.resolveComponent("BaseButton") + r.resolveComponent("l-status-bar") + r.resolveComponent("l-login"))(), Math || (function() {
        return "../../../components/navbar/navbar.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-icon/u-icon.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-empty/u-empty.js"
    } + function() {
        return "../../../components/l-ui/l-status-bar/l-status-bar.js"
    } + function() {
        return "../../../components/l-ui/l-login/l-login.js"
    })();
    var a = {
            __name: "select-all-address",
            setup: function(a) {
                r.storeToRefs(i.useUserStore()).userInfo;
                var d = i.useUserStore().noLoginToast,
                    c = r.storeToRefs(s.useLocationStore()).needSetHomeSearchPages,
                    l = s.useLocationStore(),
                    f = l.setSelectedAddress,
                    m = l.judeCityIsOpen,
                    p = l.getMyAddressLists,
                    g = r.storeToRefs(o.useHistoryAddressStore()).historyAddressList,
                    v = o.useHistoryAddressStore().setHistoryAddressList,
                    h = r.ref(""),
                    b = r.ref(!1),
                    y = r.ref([]),
                    x = r.ref([]);
                r.onShow((function() {
                    p(!0).then((function(e) {
                        y.value = e
                    })), x.value = n(g.value).sort((function(e, t) {
                        return e.createTime ? t.createTime ? t.createTime - e.createTime : -1 : 1
                    }))
                })), r.onLoad((function(e) {
                    e.from && (h.value = e.from)
                }));
                var C = function(e) {
                        d({
                            callback: function() {
                                return b.value = !0
                            }
                        }) || u.$route.navigateTo({
                            url: "/pages/my/settings/address/address-detail?id=".concat(e)
                        })
                    },
                    A = function(e) {
                        c.value.includes(h.value) ? f(e) : r.index.$emit("selectCityAddress", {
                            selectedAddress: e,
                            usePage: h.value
                        }), r.index.navigateBack({
                            delta: 2,
                            fail: function() {
                                r.index.switchTab({
                                    url: "/pages/home/home"
                                })
                            }
                        })
                    };
                return function(n, o) {
                    return r.e({
                        a: r.p({
                            title: "全部地址",
                            "bg-color": "#fff"
                        }),
                        b: r.f(r.unref(y), (function(n, o, s) {
                            return {
                                a: r.t(n.region),
                                b: r.t(n.userName),
                                c: r.t(n.phone),
                                d: r.o((function(o) {
                                    return (s = t(e().mark((function t(n) {
                                        var o, s;
                                        return e().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return console.log("selectAddressItem", n), e.next = 3, m(n.adCode);
                                                case 3:
                                                    if (o = e.sent, console.log("isOpen", o), o) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return", void r.index.showModal({
                                                        title: "注意",
                                                        content: "所选地址所在城市暂未开放运营，请重新选择",
                                                        showCancel: !1,
                                                        confirmColor: "#2291f8"
                                                    }));
                                                case 6:
                                                    s = {
                                                        city: n.city,
                                                        city_code: n.adCode,
                                                        desc_address: "",
                                                        region: n.region,
                                                        longitude: n.longitude,
                                                        latitude: n.latitude,
                                                        isOpen: !0
                                                    }, c.value.includes(h.value) ? f(s) : r.index.$emit("selectCityAddress", {
                                                        selectedAddress: s,
                                                        usePage: h.value
                                                    }), r.index.navigateBack({
                                                        delta: 2,
                                                        fail: function() {
                                                            r.index.switchTab({
                                                                url: "/pages/home/home"
                                                            })
                                                        }
                                                    });
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), t)
                                    }))), function(e) {
                                        return s.apply(this, arguments)
                                    })(n);
                                    var s
                                }), n.id),
                                e: r.o((function(e) {
                                    return C(n.id)
                                }), n.id),
                                f: "9d6351e2-1-" + s,
                                g: n.id
                            }
                        })),
                        c: r.p({
                            name: "edit-pen",
                            color: "#999",
                            size: "40rpx"
                        }),
                        d: !r.unref(y).length
                    }, r.unref(y).length ? {} : {
                        e: r.p({
                            mode: "list",
                            text: "暂无常用地点"
                        })
                    }, {
                        f: r.f(r.unref(x), (function(e, t, n) {
                            return r.e({
                                a: e.region
                            }, e.region ? {
                                b: r.t(e.region),
                                c: r.o((function(t) {
                                    return A(e)
                                }), e.id)
                            } : r.e({
                                d: r.t(e.city),
                                e: e.desc_address
                            }, e.desc_address ? {
                                f: r.t(e.desc_address)
                            } : {}, {
                                g: r.o((function(t) {
                                    return A(e)
                                }), e.id)
                            }), {
                                h: "9d6351e2-3-" + n,
                                i: r.o((function(t) {
                                    return function(e) {
                                        r.index.showModal({
                                            content: "确认删除此历史地点吗？",
                                            confirmColor: "#2291f8",
                                            success: function(t) {
                                                t.confirm && (console.log("用户点击确定"), x.value = x.value.filter((function(t) {
                                                    return !(t.latitude === e.latitude && t.longitude === e.longitude)
                                                })), v(x.value))
                                            }
                                        })
                                    }(e)
                                }), e.id),
                                j: e.id
                            })
                        })),
                        g: r.p({
                            name: "trash",
                            color: "#999",
                            size: "32rpx"
                        }),
                        h: !r.unref(x).length
                    }, r.unref(x).length ? {} : {
                        i: r.p({
                            mode: "list",
                            text: "暂无历史地点"
                        })
                    }, {
                        j: r.o((function(e) {
                            return C(0)
                        })),
                        k: r.p({
                            size: "large",
                            shape: "round"
                        }),
                        l: r.o((function(e) {
                            return b.value = !1
                        })),
                        m: r.p({
                            show_mask: r.unref(b)
                        })
                    })
                }
            }
        },
        d = r._export_sfc(a, [
            ["__scopeId", "data-v-9d6351e2"]
        ]);
    wx.createPage(d);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/home/select-address/select-all-address.js'
});
require("pages/home/select-address/select-all-address.js");