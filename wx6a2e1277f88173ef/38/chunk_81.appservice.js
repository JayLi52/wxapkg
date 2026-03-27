$gwx_XC_95 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_95 || [];

        function gz$gwx_XC_95_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_95_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([3, 'list data-v-74131d30'])
                Z([3, 'user'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'h'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'i']
                ])
                Z([3, 'user-item data-v-74131d30'])
                Z([3, 'position:relative'])
                Z([1, 0])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-74131d30'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'a']
                ])
                Z(z[9])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z(z[10])
                Z(z[11])
                Z([3, '74131d30-1'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[10])
                Z(z[11])
                Z([3, '74131d30-2'])
                Z(z[19])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_95_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_95_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_95 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_95 = true;
        var x = ['./pages/message/followers.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_95_1()
            var h9FC = _mz(z, 'scroll-view', ['scrollY', -1, 'bindscrolltolower', 0, 'class', 1], [], e, s, gg)
            var oBGC = _v()
            _(h9FC, oBGC)
            var lCGC = function(tEGC, aDGC, eFGC, gg) {
                var oHGC = _mz(z, 'view', ['bindtap', 5, 'class', 1, 'style', 2], [], tEGC, aDGC, gg)
                var xIGC = _v()
                _(oHGC, xIGC)
                if (_oz(z, 8, tEGC, aDGC, gg)) {
                    xIGC.wxVkey = 1
                }
                var oJGC = _v()
                _(oHGC, oJGC)
                if (_oz(z, 9, tEGC, aDGC, gg)) {
                    oJGC.wxVkey = 1
                    var fKGC = _mz(z, 'my-avatar-index', ['bind:__l', 10, 'class', 1, 'uI', 2, 'uP', 3], [], tEGC, aDGC, gg)
                    _(oJGC, fKGC)
                }
                xIGC.wxXCkey = 1
                oJGC.wxXCkey = 1
                oJGC.wxXCkey = 3
                _(eFGC, oHGC)
                return eFGC
            }
            oBGC.wxXCkey = 4
            _2z(z, 3, lCGC, e, s, gg, oBGC, 'user', 'index', 'h')
            var o0FC = _v()
            _(h9FC, o0FC)
            if (_oz(z, 14, e, s, gg)) {
                o0FC.wxVkey = 1
                var cLGC = _mz(z, 'up-empty', ['bind:__l', 15, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(o0FC, cLGC)
            }
            var cAGC = _v()
            _(h9FC, cAGC)
            if (_oz(z, 19, e, s, gg)) {
                cAGC.wxVkey = 1
                var hMGC = _mz(z, 'up-loadmore', ['bind:__l', 20, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(cAGC, hMGC)
            }
            o0FC.wxXCkey = 1
            o0FC.wxXCkey = 3
            cAGC.wxXCkey = 1
            cAGC.wxXCkey = 3
            _(r, h9FC)
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
                g = "$gwx_XC_95";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_95();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/message/followers.wxml'] = [$gwx_XC_95, './pages/message/followers.wxml'];
else __wxAppCode__['pages/message/followers.wxml'] = $gwx_XC_95('./pages/message/followers.wxml');;
__wxRoute = "pages/message/followers";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/message/followers.js";
define("pages/message/followers.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../common/vendor.js");
    require("../../utils/request.js");
    var o = require("../../api/user-api/user/user-follow.js"),
        r = require("../../store/wsStore.js"),
        n = require("../../utils/route-manager.js");
    Array || (e.resolveComponent("my-avatar-index") + e.resolveComponent("up-empty") + e.resolveComponent("up-loadmore"))(), Math || (function() {
        return "../../components/avatar/index.js"
    } + function() {
        return "../../node-modules/uview-plus/components/u-empty/u-empty.js"
    } + function() {
        return "../../node-modules/uview-plus/components/u-loadmore/u-loadmore.js"
    })();
    var t = {
            __name: "followers",
            setup: function(t) {
                var u = e.storeToRefs(r.useWsStore()).unreadInfo,
                    a = r.useWsStore().globalTabbarBadge,
                    l = e.ref("loadmore"),
                    s = e.ref("努力加载中"),
                    i = e.ref(""),
                    f = e.ref("已经到底了"),
                    c = e.ref([]),
                    d = e.ref({
                        current: 1,
                        size: 30,
                        ifRef: !0
                    });
                e.onLoad((function() {
                    v()
                })), e.onUnload((function() {
                    setTimeout((function() {
                        a()
                    }), 200)
                }));
                var m = function() {
                        d.value.ifRef && (d.value.current = d.value.current + 1, v())
                    },
                    v = function() {
                        l.value = "loading", o.newFollowUserList({
                            current: d.value.current,
                            size: d.value.size,
                            type: 2
                        }).then((function(e) {
                            if (l.value = "loadmore", c.value = e.data.records, 0 === e.data.total) return l.value = "loadmore", void(d.value.ifRef = !1);
                            e.data.pages <= e.data.current && (d.value.ifRef = !1, l.value = "nomore"), u.value.followCount.count = 0
                        }))
                    };
                return function(r, t) {
                    return e.e({
                        a: e.f(e.unref(c), (function(r, t, u) {
                            return e.e({}, {
                                a: "74131d30-0-" + u,
                                b: e.p({
                                    src: r.avatar,
                                    dia: "80rpx"
                                }),
                                c: e.t(r.nickName),
                                d: e.t(r.isFollow ? "已关注" : "回关"),
                                e: r.isFollow ? "#eee" : "#ff4181",
                                f: r.isFollow ? "#666" : "#fff",
                                g: e.o((function(n) {
                                    return function(r) {
                                        var n = {
                                            followUserId: r.userId
                                        };
                                        r.isFollow ? e.index.showModal({
                                            title: "操作提示",
                                            content: "确定取消关注吗？",
                                            cancelText: "考虑一下",
                                            confirmText: "确定取消",
                                            success: function(e) {
                                                e.confirm && (r.isFollow = !1, o.followCancelUser(n).catch((function(e) {
                                                    r.isFollow = !0
                                                })))
                                            }
                                        }) : (r.isFollow = !0, o.followAddUser(n).catch((function(e) {
                                            r.isFollow = !1
                                        })))
                                    }(r)
                                }), t),
                                h: t,
                                i: e.o((function(e) {
                                    return o = r, void n.$route.navigateTo("/pages/my/my/user?id=".concat(o.userId));
                                    var o
                                }), t)
                            })
                        })),
                        b: 0 === e.unref(c).length && "loadmore" === e.unref(l)
                    }, 0 === e.unref(c).length && "loadmore" === e.unref(l) ? {
                        c: e.p({
                            mode: "list",
                            text: "暂无粉丝",
                            marginTop: "100",
                            "icon-color": "rgba(0,0,0,0.3)",
                            "text-color": "rgba(0,0,0,0.6)"
                        })
                    } : {}, {
                        d: e.p({
                            status: e.unref(l),
                            "loading-text": e.unref(s),
                            "loadmore-text": e.unref(i),
                            "nomore-text": e.unref(f)
                        }),
                        e: e.o(m)
                    })
                }
            }
        },
        u = e._export_sfc(t, [
            ["__scopeId", "data-v-74131d30"]
        ]);
    wx.createPage(u);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/message/followers.js'
});
require("pages/message/followers.js");