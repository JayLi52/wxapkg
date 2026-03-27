$gwx_XC_13 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];

        function gz$gwx_XC_13_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([
                    [7],
                    [3, 'n']
                ])
                Z([3, 'login_popup_box data-v-28e6be43'])
                Z([3, 'login_box data-v-28e6be43'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([3, '__l'])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([3, 'data-v-28e6be43'])
                Z([3, '28e6be43-0'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'f']
                    ],
                    [1, '']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'm']
                ])
                Z([3, 'close_btn data-v-28e6be43'])
                Z([
                    [7],
                    [3, 'l']
                ])
                Z(z[5])
                Z(z[7])
                Z([3, '28e6be43-1'])
                Z(z[13])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_13 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_13 = true;
        var x = ['./components/l-ui/l-login/l-login.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_13_1()
            var f5Q = _v()
            _(r, f5Q)
            if (_oz(z, 0, e, s, gg)) {
                f5Q.wxVkey = 1
                var c6Q = _mz(z, 'view', ['catchtap', 1, 'class', 1], [], e, s, gg)
                var h7Q = _n('view')
                _rz(z, h7Q, 'class', 3, e, s, gg)
                var o8Q = _v()
                _(h7Q, o8Q)
                if (_oz(z, 4, e, s, gg)) {
                    o8Q.wxVkey = 1
                } else {
                    o8Q.wxVkey = 2
                    var c9Q = _mz(z, 'base-button', ['bind:__l', 5, 'bindclick', 1, 'class', 2, 'uI', 3, 'uP', 4, 'uS', 5], [], e, s, gg)
                    _(o8Q, c9Q)
                }
                o8Q.wxXCkey = 1
                o8Q.wxXCkey = 3
                _(c6Q, h7Q)
                var o0Q = _mz(z, 'view', ['catchtap', 11, 'class', 1], [], e, s, gg)
                var lAR = _v()
                _(o0Q, lAR)
                if (_oz(z, 13, e, s, gg)) {
                    lAR.wxVkey = 1
                    var aBR = _mz(z, 'up-icon', ['bind:__l', 14, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(lAR, aBR)
                }
                lAR.wxXCkey = 1
                lAR.wxXCkey = 3
                _(c6Q, o0Q)
                _(f5Q, c6Q)
            }
            f5Q.wxXCkey = 1
            f5Q.wxXCkey = 3
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
                g = "$gwx_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_13();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/l-ui/l-login/l-login.wxml'] = [$gwx_XC_13, './components/l-ui/l-login/l-login.wxml'];
else __wxAppCode__['components/l-ui/l-login/l-login.wxml'] = $gwx_XC_13('./components/l-ui/l-login/l-login.wxml');;
__wxRoute = "components/l-ui/l-login/l-login";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/l-ui/l-login/l-login.js";
define("components/l-ui/l-login/l-login.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        o = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var t = require("../../../api/user-api/user/user.js"),
        r = require("../../../staticData/dataDictionary.js"),
        i = require("../../../store/global.js"),
        s = require("../../../store/location.js"),
        a = require("../../../store/user.js"),
        u = require("../../../store/wsStore.js"),
        c = require("../../../utils/common.js"),
        l = require("../../../utils/util.js"),
        d = require("../../../utils/route-manager.js");
    Array || (o.resolveComponent("BaseButton") + o.resolveComponent("up-icon"))(), Math;
    var p = {
            __name: "l-login",
            props: {
                show_mask: {
                    type: Boolean,
                    default: !0
                },
                switch_tab: {
                    type: String,
                    default: null
                },
                more_login: {
                    type: Boolean,
                    default: !0
                }
            },
            emits: ["close_mask", "login_success"],
            setup: function(p, f) {
                var v = f.emit;
                l.getEnv("OSS_URL");
                var h = u.useWsStore().initWebSocket,
                    g = o.storeToRefs(i.useGlobalStore()).globalInfo,
                    m = a.useUserStore(),
                    x = m.setUserToken,
                    w = m.getUserInfo,
                    b = m.clearLoginData,
                    _ = o.storeToRefs(a.useUserStore()).userInfo,
                    k = s.useLocationStore().getIpLocation,
                    y = c.getInviterId(),
                    j = p,
                    q = v,
                    I = o.ref(o.index.getStorageSync("isAuthorizedPhone")),
                    S = o.ref(!1),
                    T = function(e) {
                        S.value = !1, q("close_mask", e)
                    },
                    L = function(e) {
                        var n = 0 === e ? r.Agreement.user : r.Agreement.privacy;
                        d.$route.navigateTo("/pages/web-view/web-view?url=".concat(encodeURIComponent(n)))
                    },
                    C = function() {
                        S.value = !S.value
                    },
                    M = function() {
                        S.value ? R() : o.index.showToast({
                            icon: "none",
                            title: "请先阅读并勾选协议"
                        })
                    },
                    A = function() {
                        var r = n(e().mark((function n(r) {
                            var i, s;
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(i = r.detail.code)) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, t.getPhoneByWxMiniCode({
                                            code: i,
                                            appManageId: g.value.appManageId
                                        });
                                    case 5:
                                        200 === (s = e.sent).code && R(s.data), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), console.log(e.t0);
                                    case 12:
                                        e.next = 15;
                                        break;
                                    case 14:
                                        o.index.showToast({
                                            icon: "none",
                                            title: "请同意授权手机号"
                                        });
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), n, null, [
                                [2, 9]
                            ])
                        })));
                        return function(e) {
                            return r.apply(this, arguments)
                        }
                    }(),
                    R = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        o.index.getProvider({
                            service: "oauth",
                            success: function(n) {
                                -1 !== n.provider.indexOf("weixin") ? U(e) : o.index.showToast({
                                    title: "当前环境不支持微信登录",
                                    icon: "none"
                                })
                            },
                            fail: function(e) {
                                o.index.showToast({
                                    title: "获取登录服务失败",
                                    icon: "none"
                                })
                            }
                        })
                    },
                    U = function() {
                        var r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        o.index.login({
                            provider: "weixin",
                            onlyAuthorize: !0,
                            success: (r = n(e().mark((function n(o) {
                                var r, s;
                                return e().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = {
                                                code: o.code,
                                                device: g.value.device,
                                                projectId: g.value.projectId,
                                                appManageId: g.value.appManageId,
                                                inviteCode: y,
                                                bindPhoneCode: i
                                            }, s = null, e.next = 4, t.weChatLogin(r);
                                        case 4:
                                            s = e.sent, b(), B(s.data);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), n)
                            }))), function(e) {
                                return r.apply(this, arguments)
                            }),
                            fail: function(e) {
                                console.error("微信登录失败", e), P(e.message || "微信登录失败，请重试")
                            },
                            complete: function() {
                                console.log("微信登陆调用完成")
                            }
                        })
                    },
                    B = function() {
                        var t = n(e().mark((function n(t) {
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return x(t), e.next = 3, w();
                                    case 3:
                                        _.value.bindPhone || (o.index.showToast({
                                            title: "登录成功, 请验证手机号",
                                            icon: "none"
                                        }), setTimeout((function() {
                                            o.index.reLaunch({
                                                url: "/pages/my/settings/bind_phone"
                                            })
                                        }), 1e3)), k(), T(!1), h(), q("login_success"), o.index.hideLoading(), o.index.$emit("pageOnRefresh", {}), o.index.showToast({
                                            icon: "none",
                                            title: "登录成功"
                                        }), j.switch_tab && o.index.reLaunch({
                                            url: j.switch_tab
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    P = function(e) {
                        o.index.hideLoading(), o.index.showModal({
                            title: "温馨提示",
                            content: e
                        })
                    };
                return function(e, n) {
                    return o.e({
                        a: j.show_mask
                    }, j.show_mask ? o.e({
                        b: o.o(T),
                        c: o.unref(I) && o.unref(S)
                    }, o.unref(I) && o.unref(S) ? {
                        d: o.o(A)
                    } : {
                        e: o.o(M),
                        f: o.p({
                            styles: {
                                width: "690rpx"
                            },
                            size: "largeMore",
                            shape: "round"
                        })
                    }, {
                        g: o.n(o.unref(S) ? "icon-sl-checked" : "icon-sl-checkbox"),
                        h: o.s({
                            color: o.unref(S) ? "#2E96FA" : "#333"
                        }),
                        i: o.o((function(e) {
                            return L(0)
                        })),
                        j: o.o((function(e) {
                            return L(1)
                        })),
                        k: o.o(C),
                        l: o.p({
                            name: "close",
                            size: "14",
                            color: "#999"
                        }),
                        m: o.o(T),
                        n: o.o((function() {}))
                    }) : {})
                }
            }
        },
        f = o._export_sfc(p, [
            ["__scopeId", "data-v-28e6be43"]
        ]);
    wx.createComponent(f);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/l-ui/l-login/l-login.js'
});
require("components/l-ui/l-login/l-login.js");