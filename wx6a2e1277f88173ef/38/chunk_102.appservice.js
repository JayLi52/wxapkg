$gwx_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];

        function gz$gwx_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'set_info pt20 data-v-3db3866b'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'h'])
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
                Z([3, 'tab_item data-v-3db3866b'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'c']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'f']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-3db3866b'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'e']
                ])
                Z(z[8])
                Z([
                    [7],
                    [3, 'b']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./pages/my/settings/setting.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var lUL = _n('view')
            _rz(z, lUL, 'class', 0, e, s, gg)
            var tWL = _v()
            _(lUL, tWL)
            var eXL = function(oZL, bYL, x1L, gg) {
                var f3L = _v()
                _(x1L, f3L)
                if (_oz(z, 4, oZL, bYL, gg)) {
                    f3L.wxVkey = 1
                    var c4L = _mz(z, 'view', ['bindtap', 5, 'class', 1], [], oZL, bYL, gg)
                    var h5L = _v()
                    _(c4L, h5L)
                    if (_oz(z, 7, oZL, bYL, gg)) {
                        h5L.wxVkey = 1
                    }
                    var o6L = _v()
                    _(c4L, o6L)
                    if (_oz(z, 8, oZL, bYL, gg)) {
                        o6L.wxVkey = 1
                        var c7L = _mz(z, 'up-icon', ['bind:__l', 9, 'class', 1, 'uI', 2, 'uP', 3], [], oZL, bYL, gg)
                        _(o6L, c7L)
                    }
                    h5L.wxXCkey = 1
                    o6L.wxXCkey = 1
                    o6L.wxXCkey = 3
                    _(f3L, c4L)
                }
                f3L.wxXCkey = 1
                f3L.wxXCkey = 3
                return x1L
            }
            tWL.wxXCkey = 4
            _2z(z, 2, eXL, e, s, gg, tWL, 'item', 'index', 'h')
            var aVL = _v()
            _(lUL, aVL)
            if (_oz(z, 13, e, s, gg)) {
                aVL.wxVkey = 1
            }
            aVL.wxXCkey = 1
            _(r, lUL)
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
                g = "$gwx_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/settings/setting.wxml'] = [$gwx_XC_5, './pages/my/settings/setting.wxml'];
else __wxAppCode__['pages/my/settings/setting.wxml'] = $gwx_XC_5('./pages/my/settings/setting.wxml');;
__wxRoute = "pages/my/settings/setting";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/settings/setting.js";
define("pages/my/settings/setting.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../common/vendor.js");
    require("../../../enums/global.js"), require("../../../enums/im.js");
    var t = require("../../../store/user.js"),
        i = require("../../../utils/util.js"),
        s = require("../../../utils/route-manager.js");
    Array || r.resolveComponent("up-icon")(), Math;
    var o = {
            __name: "setting",
            setup: function(o) {
                r.storeToRefs(t.useUserStore()).userInfo;
                var a = t.useUserStore(),
                    u = a.isLoginFun,
                    c = a.logout;
                r.onLoad((function() {}));
                var m = r.reactive([{
                        name: "账号与安全",
                        url: "/pages/my/settings/account-security",
                        isShow: !0,
                        needLogin: !0
                    }, {
                        name: "隐私设置",
                        url: "/pages/my/settings/administrators?come=privacy&title=隐私设置",
                        isShow: !0,
                        needLogin: !0
                    }, {
                        name: "地址管理",
                        url: "/pages/my/settings/address/address",
                        isShow: !0,
                        needLogin: !0
                    }, {
                        name: "客服帮助",
                        url: i.contactService,
                        isShow: !0
                    }, {
                        name: "青少年模式",
                        url: "/pages/my/settings/teenage-mode",
                        isShow: !0
                    }, {
                        name: "社区公约",
                        url: "/pages/my/settings/certification?come=appoint&title=社区公约",
                        isShow: !0
                    }, {
                        name: "关于沙梨",
                        url: "/pages/my/settings/about",
                        isShow: !0
                    }]),
                    f = r.computed((function() {
                        return function(e) {
                            return !(e.needLogin && !u()) && e.isShow
                        }
                    })),
                    g = function() {
                        var t;
                        r.index.showModal({
                            title: "温馨提示",
                            content: "确定退出登录吗?",
                            success: (t = n(e().mark((function n(t) {
                                return e().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = t.confirm, !e.t0) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, c();
                                        case 4:
                                            r.index.$emit("pageOnRefresh", {}), r.index.navigateBack({
                                                success: function() {
                                                    r.index.removeTabBarBadge({
                                                        index: 2
                                                    })
                                                }
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), n)
                            }))), function(e) {
                                return t.apply(this, arguments)
                            })
                        })
                    };
                return function(e, n) {
                    return r.e({
                        a: r.f(r.unref(m), (function(e, n, t) {
                            return r.e({
                                a: r.unref(f)(e)
                            }, r.unref(f)(e) ? r.e({
                                b: r.t(e.name),
                                c: e.value
                            }, e.value ? {
                                d: r.t(e.value)
                            } : {}, {
                                e: "3db3866b-0-" + t,
                                f: r.p({
                                    name: "arrow-right",
                                    size: "16",
                                    color: "#999"
                                }),
                                g: r.o((function(n) {
                                    return function(e) {
                                        var n = e.url;
                                        "function" != typeof n ? s.$route.navigateTo(n) : n()
                                    }(e)
                                }), n)
                            }) : {}, {
                                h: n
                            })
                        })),
                        b: r.unref(u)()
                    }, r.unref(u)() ? {
                        c: r.o(g)
                    } : {})
                }
            }
        },
        a = r._export_sfc(o, [
            ["__scopeId", "data-v-3db3866b"]
        ]);
    wx.createPage(a);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/settings/setting.js'
});
require("pages/my/settings/setting.js");