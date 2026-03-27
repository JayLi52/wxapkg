$gwx_XC_111 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_111 || [];

        function gz$gwx_XC_111_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_111_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_111_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_111_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'menu-list data-v-cdae81e4'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'menu-item data-v-cdae81e4'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-cdae81e4'])
                Z([3, 'cdae81e4-0'])
                Z(z[3])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[2])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[4])
                Z(z[5])
                Z([3, 'cdae81e4-1'])
                Z(z[10])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_111_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_111_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_111 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_111 = true;
        var x = ['./pages/my/settings/account-security.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_111_1()
            var oXTC = _n('view')
            _rz(z, oXTC, 'class', 0, e, s, gg)
            var lYTC = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg)
            var aZTC = _v()
            _(lYTC, aZTC)
            if (_oz(z, 3, e, s, gg)) {
                aZTC.wxVkey = 1
                var t1TC = _mz(z, 'up-icon', ['bind:__l', 4, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(aZTC, t1TC)
            }
            aZTC.wxXCkey = 1
            aZTC.wxXCkey = 3
            _(oXTC, lYTC)
            var e2TC = _mz(z, 'view', ['bindtap', 8, 'class', 1], [], e, s, gg)
            var b3TC = _v()
            _(e2TC, b3TC)
            if (_oz(z, 10, e, s, gg)) {
                b3TC.wxVkey = 1
                var o4TC = _mz(z, 'up-icon', ['bind:__l', 11, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(b3TC, o4TC)
            }
            b3TC.wxXCkey = 1
            b3TC.wxXCkey = 3
            _(oXTC, e2TC)
            _(r, oXTC)
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
                g = "$gwx_XC_111";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_111();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/settings/account-security.wxml'] = [$gwx_XC_111, './pages/my/settings/account-security.wxml'];
else __wxAppCode__['pages/my/settings/account-security.wxml'] = $gwx_XC_111('./pages/my/settings/account-security.wxml');;
__wxRoute = "pages/my/settings/account-security";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/settings/account-security.js";
define("pages/my/settings/account-security.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var r = require("../../../api/user-api/user/user.js"),
        o = require("../../../store/global.js"),
        n = require("../../../store/user.js"),
        t = require("../../../utils/route-manager.js");
    Array || e.resolveComponent("up-icon")(), Math;
    var a = {
            __name: "account-security",
            setup: function(a) {
                e.storeToRefs(o.useGlobalStore()).globalInfo;
                n.useUserStore();
                var i = e.ref({
                    bindPhone: "",
                    bindWeChat: !1,
                    bindAlipay: !1,
                    bindDouYin: !1,
                    realNameStatus: !1
                });
                e.onLoad((function() {})), e.onShow((function() {
                    r.getBindInfo().then((function(e) {
                        i.value = e.data
                    }))
                }));
                var s = function() {
                        t.$route.navigateTo({
                            url: "/pages/common/login/password"
                        })
                    },
                    u = function() {
                        i.value.realNameStatus ? e.index.showToast({
                            icon: "none",
                            title: "请前往App进行修改"
                        }) : e.index.showToast({
                            icon: "none",
                            title: "请前往App进行实名认证"
                        })
                    };
                return function(r, o) {
                    return {
                        a: e.p({
                            name: "arrow-right",
                            size: "16",
                            color: "#999"
                        }),
                        b: e.o(s),
                        c: e.t(e.unref(i).realNameStatus ? "已认证" : "未认证"),
                        d: e.p({
                            name: "arrow-right",
                            size: "16",
                            color: "#999"
                        }),
                        e: e.o(u)
                    }
                }
            }
        },
        i = e._export_sfc(a, [
            ["__scopeId", "data-v-cdae81e4"]
        ]);
    wx.createPage(i);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/settings/account-security.js'
});
require("pages/my/settings/account-security.js");