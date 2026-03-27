$gwx_XC_113 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_113 || [];

        function gz$gwx_XC_113_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_113_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app-container data-v-1c541ed0'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-1c541ed0'])
                Z([3, '1c541ed0-0'])
                Z(z[1])
                Z([3, 'is_address_info data-v-1c541ed0'])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([3, 'address_item data-v-1c541ed0'])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[2])
                Z(z[3])
                Z([3, '1c541ed0-1'])
                Z(z[9])
                Z([
                    [7],
                    [3, 'm']
                ])
                Z(z[2])
                Z([
                    [7],
                    [3, 'l']
                ])
                Z(z[3])
                Z([3, '1c541ed0-2'])
                Z(z[14])
                Z(z[2])
                Z(z[3])
                Z([3, '1c541ed0-3'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([3, 'f-row px20 data-v-1c541ed0'])
                Z([
                    [7],
                    [3, 'n']
                ])
                Z([
                    [7],
                    [3, 'p']
                ])
                Z(z[2])
                Z([
                    [7],
                    [3, 'o']
                ])
                Z(z[3])
                Z([3, '1c541ed0-4,1c541ed0-3'])
                Z(z[26])
                Z(z[23])
                Z([
                    [7],
                    [3, 'r']
                ])
                Z(z[2])
                Z([
                    [7],
                    [3, 'q']
                ])
                Z(z[3])
                Z([3, '1c541ed0-5,1c541ed0-3'])
                Z(z[33])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_113_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_113_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_113 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_113 = true;
        var x = ['./pages/my/settings/address/address-detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_113_1()
            var lQUC = _n('view')
            _rz(z, lQUC, 'class', 0, e, s, gg)
            var aRUC = _v()
            _(lQUC, aRUC)
            if (_oz(z, 1, e, s, gg)) {
                aRUC.wxVkey = 1
                var tSUC = _mz(z, 'navbar', ['bind:__l', 2, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(aRUC, tSUC)
            }
            var eTUC = _n('form')
            _rz(z, eTUC, 'class', 6, e, s, gg)
            var oVUC = _mz(z, 'view', ['bindtap', 7, 'class', 1], [], e, s, gg)
            var xWUC = _v()
            _(oVUC, xWUC)
            if (_oz(z, 9, e, s, gg)) {
                xWUC.wxVkey = 1
                var oXUC = _mz(z, 'up-icon', ['bind:__l', 10, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(xWUC, oXUC)
            }
            xWUC.wxXCkey = 1
            xWUC.wxXCkey = 3
            _(eTUC, oVUC)
            var bUUC = _v()
            _(eTUC, bUUC)
            if (_oz(z, 14, e, s, gg)) {
                bUUC.wxVkey = 1
                var fYUC = _mz(z, 'up-switch', ['bind:__l', 15, 'bindupdateModelValue', 1, 'class', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                _(bUUC, fYUC)
            }
            var cZUC = _mz(z, 'l-status-bar', ['bind:__l', 20, 'class', 1, 'uI', 2, 'uS', 3], [], e, s, gg)
            var h1UC = _n('view')
            _rz(z, h1UC, 'class', 24, e, s, gg)
            var o2UC = _v()
            _(h1UC, o2UC)
            if (_oz(z, 25, e, s, gg)) {
                o2UC.wxVkey = 1
                var o4UC = _v()
                _(o2UC, o4UC)
                if (_oz(z, 26, e, s, gg)) {
                    o4UC.wxVkey = 1
                    var l5UC = _mz(z, 'base-button', ['bind:__l', 27, 'bindclick', 1, 'class', 2, 'uI', 3, 'uP', 4, 'uS', 5], [], e, s, gg)
                    _(o4UC, l5UC)
                }
                o4UC.wxXCkey = 1
                o4UC.wxXCkey = 3
            }
            var c3UC = _v()
            _(h1UC, c3UC)
            if (_oz(z, 33, e, s, gg)) {
                c3UC.wxVkey = 1
                var a6UC = _mz(z, 'base-button', ['bind:__l', 34, 'bindclick', 1, 'class', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                _(c3UC, a6UC)
            }
            o2UC.wxXCkey = 1
            o2UC.wxXCkey = 3
            c3UC.wxXCkey = 1
            c3UC.wxXCkey = 3
            _(cZUC, h1UC)
            _(eTUC, cZUC)
            bUUC.wxXCkey = 1
            bUUC.wxXCkey = 3
            _(lQUC, eTUC)
            aRUC.wxXCkey = 1
            aRUC.wxXCkey = 3
            _(r, lQUC)
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
                g = "$gwx_XC_113";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_113();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/settings/address/address-detail.wxml'] = [$gwx_XC_113, './pages/my/settings/address/address-detail.wxml'];
else __wxAppCode__['pages/my/settings/address/address-detail.wxml'] = $gwx_XC_113('./pages/my/settings/address/address-detail.wxml');;
__wxRoute = "pages/my/settings/address/address-detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/settings/address/address-detail.js";
define("pages/my/settings/address/address-detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../../common/vendor.js");
    require("../../../../utils/request.js");
    var t = require("../../../../api/utils.js"),
        a = require("../../../../api/user-api/user/user-address.js"),
        s = require("../../../../store/location.js"),
        u = require("../../../../store/user.js");
    Array || (r.resolveComponent("navbar") + r.resolveComponent("up-icon") + r.resolveComponent("up-switch") + r.resolveComponent("BaseButton") + r.resolveComponent("l-status-bar"))(), Math || (function() {
        return "../../../../components/navbar/navbar.js"
    } + function() {
        return "../../../../node-modules/uview-plus/components/u-icon/u-icon.js"
    } + function() {
        return "../../../../node-modules/uview-plus/components/u-switch/u-switch.js"
    } + function() {
        return "../../../../components/l-ui/l-status-bar/l-status-bar.js"
    })();
    var o = {
            __name: "address-detail",
            setup: function(o) {
                var d = r.storeToRefs(s.useLocationStore()).locationInfo,
                    i = r.storeToRefs(u.useUserStore()).userInfo,
                    l = a.BASE_USER_ADDRESS,
                    c = r.ref("0"),
                    f = r.ref({
                        address: {
                            latitude: "",
                            longitude: "",
                            address: ""
                        },
                        address_info: "",
                        user_name: "",
                        tel: "",
                        is_default: !1,
                        label: 0,
                        label_info: "",
                        common_use: !0
                    });
                r.onLoad((function(e) {
                    "0" !== e.id && (c.value = e.id, t.queryById(l, c.value).then((function(e) {
                        var n = e.data,
                            r = {
                                address: {
                                    latitude: n.latitude,
                                    longitude: n.longitude,
                                    address: n.region,
                                    name: n.name
                                },
                                address_info: n.detailedAddress,
                                user_name: n.userName,
                                tel: n.phone,
                                is_default: n.defaultAddress
                            };
                        f.value = r
                    }))), r.index.$on("update_address_info", (function(e) {
                        f.value.address.name = e.name, f.value.address.address = e.address, f.value.address.latitude = e.location.lat, f.value.address.longitude = e.location.lng
                    }))
                })), r.onUnload((function() {
                    r.index.$off("update_address_info")
                }));
                var v = function() {
                        r.index.chooseLocation({
                            latitude: d.value.latitude,
                            longitude: d.value.longitude,
                            success: function(e) {
                                console.log("chooseLocation", e), f.value.address.name = e.name, f.value.address.address = e.address, f.value.address.latitude = e.latitude, f.value.address.longitude = e.longitude
                            }
                        })
                    },
                    p = function() {
                        var a = n(e().mark((function n() {
                            var a, s, u, o;
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("" != (a = f.value).user_name) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", void r.index.showToast({
                                            title: "请填写联系人",
                                            icon: "none"
                                        }));
                                    case 3:
                                        if ("" != a.tel) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", void r.index.showToast({
                                            title: "请输入手机号",
                                            icon: "none"
                                        }));
                                    case 5:
                                        if (s = a.tel, /^1[3-9]\d{9}$/.test(s)) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", void r.index.showToast({
                                            title: "请输入正确的手机号",
                                            icon: "none"
                                        }));
                                    case 7:
                                        if (a.address_info) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return", void r.index.showToast({
                                            title: "请输入详细地址",
                                            icon: "none"
                                        }));
                                    case 9:
                                        if (f.value.address.latitude) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return", void r.index.showToast({
                                            title: "请点击所在区域",
                                            icon: "none"
                                        }));
                                    case 11:
                                        return u = "地址添加成功", o = {
                                            userId: i.value.userId,
                                            detailedAddress: a.address_info,
                                            userName: a.user_name,
                                            phone: a.tel,
                                            name: f.value.address.name,
                                            region: f.value.address.address,
                                            defaultAddress: f.value.is_default,
                                            longitude: f.value.address.longitude,
                                            latitude: f.value.address.latitude
                                        }, "0" !== c.value && (o.id = c.value, u = "地址修改成功"), e.prev = 13, e.next = 16, t.upsert(l, o);
                                    case 16:
                                        r.index.$emit("refreshAddressList"), r.index.showToast({
                                            title: u
                                        }), r.index.navigateBack(), e.next = 24;
                                        break;
                                    case 21:
                                        e.prev = 21, e.t0 = e.catch(13), r.index.showToast({
                                            title: e.t0
                                        });
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), n, null, [
                                [13, 21]
                            ])
                        })));
                        return function() {
                            return a.apply(this, arguments)
                        }
                    }(),
                    m = function() {
                        r.index.showModal({
                            title: "温馨提示",
                            content: "是否确定删除地址",
                            success: function(e) {
                                e.confirm && t.deleteById(l, c.value).then((function(e) {
                                    200 == e.code && (r.index.$emit("refreshAddressList"), r.index.showToast({
                                        title: "删除成功"
                                    }), r.index.navigateBack())
                                }))
                            }
                        })
                    };
                return r.ref(),
                    function(e, n) {
                        return r.e({
                            a: r.p({
                                title: "0" !== r.unref(c) ? "修改地址" : "添加地址",
                                "bg-color": "rgba(0,0,0,0)"
                            }),
                            b: r.unref(f).user_name,
                            c: r.o((function(e) {
                                return r.unref(f).user_name = e.detail.value
                            })),
                            d: r.unref(f).tel,
                            e: r.o((function(e) {
                                return r.unref(f).tel = e.detail.value
                            })),
                            f: r.unref(f).address.name,
                            g: r.o((function(e) {
                                return r.unref(f).address.name = e.detail.value
                            })),
                            h: r.p({
                                name: "arrow-right",
                                size: "16",
                                color: "#999"
                            }),
                            i: r.o(v),
                            j: r.unref(f).address_info,
                            k: r.o((function(e) {
                                return r.unref(f).address_info = e.detail.value
                            })),
                            l: r.o((function(e) {
                                return r.unref(f).is_default = e
                            })),
                            m: r.p({
                                activeColor: "#AC8DF2",
                                modelValue: r.unref(f).is_default
                            }),
                            n: "0" !== r.unref(c)
                        }, "0" !== r.unref(c) ? {
                            o: r.o(m),
                            p: r.p({
                                type: "error",
                                size: "large",
                                shape: "round"
                            })
                        } : {}, {
                            q: r.o((function(e) {
                                return r.unref(r.debounce)(p, 1e3, !0)
                            })),
                            r: r.p({
                                size: "large",
                                shape: "round",
                                text: "保存地址"
                            })
                        })
                    }
            }
        },
        d = r._export_sfc(o, [
            ["__scopeId", "data-v-1c541ed0"]
        ]);
    wx.createPage(d);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/settings/address/address-detail.js'
});
require("pages/my/settings/address/address-detail.js");