$gwx_XC_30 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];

        function gz$gwx_XC_30_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [5],
                                        [
                                            [5],
                                            [1, 'order-cont']
                                        ],
                                        [1, 'f-row']
                                    ],
                                    [1, 'f-aic']
                                ],
                                [1, 'mb26']
                            ],
                            [1, 'data-v-d8e9caae']
                        ],
                        [
                            [7],
                            [3, 'i']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-d8e9caae'])
                Z([3, 'width:80rpx;height:80rpx;border-radius:50%'])
                Z([3, 'd8e9caae-0'])
                Z(z[2])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z(z[4])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([
                    [7],
                    [3, 'g']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_30 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_30 = true;
        var x = ['./components/user-simple-card/user-simple-card.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_30_1()
            var cJ6 = _mz(z, 'view', ['bindtap', 0, 'class', 1], [], e, s, gg)
            var hK6 = _v()
            _(cJ6, hK6)
            if (_oz(z, 2, e, s, gg)) {
                hK6.wxVkey = 1
                var cM6 = _mz(z, 'my-cache-image-index', ['bind:__l', 3, 'class', 1, 'style', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                _(hK6, cM6)
            }
            var oL6 = _v()
            _(cJ6, oL6)
            if (_oz(z, 8, e, s, gg)) {
                oL6.wxVkey = 1
            }
            var oN6 = _n('view')
            _rz(z, oN6, 'class', 9, e, s, gg)
            var lO6 = _v()
            _(oN6, lO6)
            if (_oz(z, 10, e, s, gg)) {
                lO6.wxVkey = 1
            }
            var aP6 = _v()
            _(oN6, aP6)
            if (_oz(z, 11, e, s, gg)) {
                aP6.wxVkey = 1
            }
            lO6.wxXCkey = 1
            aP6.wxXCkey = 1
            _(cJ6, oN6)
            hK6.wxXCkey = 1
            hK6.wxXCkey = 3
            oL6.wxXCkey = 1
            _(r, cJ6)
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
                g = "$gwx_XC_30";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_30();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/user-simple-card/user-simple-card.wxml'] = [$gwx_XC_30, './components/user-simple-card/user-simple-card.wxml'];
else __wxAppCode__['components/user-simple-card/user-simple-card.wxml'] = $gwx_XC_30('./components/user-simple-card/user-simple-card.wxml');;
__wxRoute = "components/user-simple-card/user-simple-card";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/user-simple-card/user-simple-card.js";
define("components/user-simple-card/user-simple-card.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../common/vendor.js"),
        r = require("../../store/wsStore.js"),
        o = require("../../utils/util.js"),
        t = require("../../utils/route-manager.js");
    Array || e.resolveComponent("my-cache-image-index")(), Math;
    var s = {
            __name: "user-simple-card",
            props: {
                userId: String,
                nickName: String,
                avatar: String,
                score: Number,
                isChat: Boolean,
                isFollow: Boolean,
                customClass: String
            },
            setup: function(s) {
                var a = r.useWsStore().toChat,
                    n = o.getEnv("OSS_URL"),
                    i = s,
                    u = function() {
                        t.$route.navigateTo({
                            url: "/pages/my/my/user?id=".concat(i.userId)
                        })
                    },
                    c = function() {};
                return function(r, o) {
                    return e.e({
                        a: e.p({
                            imageUrl: s.avatar || "".concat(e.unref(n), "/images/makeup-category-cos.png"),
                            width: "80rpx",
                            height: "80rpx",
                            radius: "50%"
                        }),
                        b: e.t(s.nickName || "用户昵称"),
                        c: s.score && s.score > 0
                    }, s.score && s.score > 0 ? {
                        d: e.t(Number((s.score / 20).toFixed(1)))
                    } : {}, {
                        e: s.isChat
                    }, s.isChat ? {
                        f: e.o((function() {
                            return e.unref(a)({
                                userId: s.userId
                            })
                        }))
                    } : {}, {
                        g: s.isFollow
                    }, s.isFollow ? {
                        h: e.o(c)
                    } : {}, {
                        i: e.n(s.customClass),
                        j: e.o(u)
                    })
                }
            }
        },
        a = e._export_sfc(s, [
            ["__scopeId", "data-v-d8e9caae"]
        ]);
    wx.createComponent(a);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/user-simple-card/user-simple-card.js'
});
require("components/user-simple-card/user-simple-card.js");