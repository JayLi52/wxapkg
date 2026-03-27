$gwx_XC_94 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_94 || [];

        function gz$gwx_XC_94_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_94_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_94_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_94_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'followers data-v-7e4df39c'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-7e4df39c'])
                Z([3, '7e4df39c-0'])
                Z(z[1])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([3, 'list data-v-7e4df39c'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'height:'],
                            [
                                [7],
                                [3, 'h']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'box-sizing:'],
                        [1, 'border-box']
                    ]
                ])
                Z([3, 'user'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'l'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'm']
                ])
                Z([3, 'user-item data-v-7e4df39c'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'c']
                ])
                Z(z[2])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'a']
                ])
                Z(z[3])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'b']
                ])
                Z(z[14])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'k']
                ])
                Z(z[2])
                Z(z[3])
                Z([3, 'width:100rpx;height:100rpx'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'j']
                ])
                Z(z[20])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[2])
                Z(z[3])
                Z([3, '7e4df39c-3'])
                Z(z[26])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[2])
                Z(z[3])
                Z([3, '7e4df39c-4'])
                Z([
                    [7],
                    [3, 'f']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_94_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_94_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_94 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_94 = true;
        var x = ['./pages/message/favouriteCommentList.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_94_1()
            var bOFC = _n('view')
            _rz(z, bOFC, 'class', 0, e, s, gg)
            var oPFC = _v()
            _(bOFC, oPFC)
            if (_oz(z, 1, e, s, gg)) {
                oPFC.wxVkey = 1
                var xQFC = _mz(z, 'navbar', ['bind:__l', 2, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(oPFC, xQFC)
            }
            var oRFC = _mz(z, 'scroll-view', ['scrollY', -1, 'bindscrolltolower', 6, 'class', 1, 'style', 2], [], e, s, gg)
            var hUFC = _v()
            _(oRFC, hUFC)
            var oVFC = function(oXFC, cWFC, lYFC, gg) {
                var t1FC = _mz(z, 'view', ['bindtap', 12, 'class', 1], [], oXFC, cWFC, gg)
                var e2FC = _v()
                _(t1FC, e2FC)
                if (_oz(z, 14, oXFC, cWFC, gg)) {
                    e2FC.wxVkey = 1
                    var o4FC = _mz(z, 'my-avatar-index', ['bind:__l', 15, 'catchtap', 1, 'class', 2, 'uI', 3, 'uP', 4], [], oXFC, cWFC, gg)
                    _(e2FC, o4FC)
                }
                var b3FC = _v()
                _(t1FC, b3FC)
                if (_oz(z, 20, oXFC, cWFC, gg)) {
                    b3FC.wxVkey = 1
                    var x5FC = _mz(z, 'work-cover', ['bind:__l', 21, 'class', 1, 'style', 2, 'uI', 3, 'uP', 4], [], oXFC, cWFC, gg)
                    _(b3FC, x5FC)
                }
                e2FC.wxXCkey = 1
                e2FC.wxXCkey = 3
                b3FC.wxXCkey = 1
                b3FC.wxXCkey = 3
                _(lYFC, t1FC)
                return lYFC
            }
            hUFC.wxXCkey = 4
            _2z(z, 10, oVFC, e, s, gg, hUFC, 'user', 'index', 'l')
            var fSFC = _v()
            _(oRFC, fSFC)
            if (_oz(z, 26, e, s, gg)) {
                fSFC.wxVkey = 1
                var o6FC = _mz(z, 'up-loadmore', ['bind:__l', 27, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(fSFC, o6FC)
            }
            var cTFC = _v()
            _(oRFC, cTFC)
            if (_oz(z, 31, e, s, gg)) {
                cTFC.wxVkey = 1
                var f7FC = _mz(z, 'up-empty', ['bind:__l', 32, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(cTFC, f7FC)
            }
            fSFC.wxXCkey = 1
            fSFC.wxXCkey = 3
            cTFC.wxXCkey = 1
            cTFC.wxXCkey = 3
            _(bOFC, oRFC)
            oPFC.wxXCkey = 1
            oPFC.wxXCkey = 3
            _(r, bOFC)
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
                g = "$gwx_XC_94";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_94();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/message/favouriteCommentList.wxml'] = [$gwx_XC_94, './pages/message/favouriteCommentList.wxml'];
else __wxAppCode__['pages/message/favouriteCommentList.wxml'] = $gwx_XC_94('./pages/message/favouriteCommentList.wxml');;
__wxRoute = "pages/message/favouriteCommentList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/message/favouriteCommentList.js";
define("pages/message/favouriteCommentList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/toConsumableArray"),
        r = require("../../common/vendor.js");
    require("../../utils/request.js");
    var t = require("../../api/square-api/index.js"),
        o = require("../../store/wsStore.js"),
        n = require("../../utils/device.js"),
        a = require("../../utils/im/utils.js"),
        u = require("../../utils/route-manager.js");
    Array || (r.resolveComponent("navbar") + r.resolveComponent("my-avatar-index") + r.resolveComponent("up-loadmore") + r.resolveComponent("up-empty"))(), Math || (function() {
        return "../../components/navbar/navbar.js"
    } + function() {
        return "../../components/avatar/index.js"
    } + s + function() {
        return "../../node-modules/uview-plus/components/u-loadmore/u-loadmore.js"
    } + function() {
        return "../../node-modules/uview-plus/components/u-empty/u-empty.js"
    })();
    var s = function() {
            return "../../components/work-cover/index.js"
        },
        i = {
            __name: "favouriteCommentList",
            setup: function(s) {
                var i = o.useWsStore().globalTabbarBadge,
                    l = r.storeToRefs(o.useWsStore()).unreadInfo,
                    c = n.device,
                    d = c.navbarInnerHeight,
                    m = c.statusBarHeight,
                    v = c.safeAreaInsetsBottom,
                    f = r.ref("loadmore"),
                    p = r.ref("努力加载中"),
                    g = r.ref(""),
                    b = r.ref("已经到底了"),
                    x = r.ref([]),
                    C = r.ref(""),
                    j = r.ref({
                        current: 1,
                        size: 20
                    }),
                    h = !0;
                r.onLoad((function(e) {
                    C.value = e.type, y()
                })), r.onUnload((function() {
                    setTimeout((function() {
                        i()
                    }), 200)
                }));
                var q = function() {
                        h && (j.value.current = j.value.current + 1, y())
                    },
                    y = function() {
                        f.value = "loading";
                        var r = 1 === j.value.current ? [] : e(x.value);
                        "upvoteCount" === C.value ? t.collectFollowList(j.value).then((function(t) {
                            if (f.value = "loadmore", x.value = [].concat(e(r), e(t.data.records)), 0 === t.data.total) return f.value = "loadmore", void(h = !1);
                            t.data.pages <= t.data.current && (h = !1, f.value = "nomore"), l.value.upvoteCount.count = 0
                        })) : t.collectCommentsList(j.value).then((function(t) {
                            if (f.value = "loadmore", x.value = [].concat(e(r), e(t.data.records)), 0 === t.data.total) return f.value = "loadmore", void(h = !1);
                            t.data.pages <= t.data.current && (h = !1, f.value = "nomore"), l.value.commentsCount.count = 0
                        }))
                    };
                return function(e, t) {
                    return r.e({
                        a: r.p({
                            title: "upvoteCount" === r.unref(C) ? "收到的赞和收藏" : "收到的评论",
                            "bg-color": "rgba(0,0,0,0)"
                        }),
                        b: r.f(r.unref(x), (function(e, t, o) {
                            return r.e({
                                a: r.o((function(r) {
                                    return t = e, void u.$route.navigateTo({
                                        url: "/pages/my/my/user?id=".concat(t.userId)
                                    });
                                    var t
                                }), t),
                                b: "7e4df39c-1-" + o,
                                c: r.p({
                                    src: e.avatar,
                                    dia: "80rpx"
                                }),
                                d: r.t(e.nickName)
                            }, "upvoteCount" === r.unref(C) ? {
                                e: r.t(13 === e.operateType ? "赞了你的评论" : 3 === e.operateType ? "赞了你的动态" : "收藏了你的动态"),
                                f: r.t(r.unref(a.msgTimeStamp)(e.createdTime, "short"))
                            } : {
                                g: r.t(e.replyId ? "回复了你的评论" : "评论了你的动态"),
                                h: r.t(r.unref(a.msgTimeStamp)(e.createdTime, "short")),
                                i: r.t(e.content)
                            }, {
                                j: "7e4df39c-2-" + o,
                                k: r.p({
                                    src: e.mainImage || e.postsMainImage,
                                    radius: "10rpx",
                                    fill: !0
                                }),
                                l: t,
                                m: r.o((function(r) {
                                    return t = e, void u.$route.navigateTo({
                                        url: "/pages/square/square-details/index?id=".concat(t.postsId)
                                    });
                                    var t
                                }), t)
                            })
                        })),
                        c: "upvoteCount" === r.unref(C),
                        d: r.p({
                            status: r.unref(f),
                            "loading-text": r.unref(p),
                            "loadmore-text": r.unref(g),
                            "nomore-text": r.unref(b)
                        }),
                        e: 0 === r.unref(x).length && "loadmore" === r.unref(f)
                    }, 0 === r.unref(x).length && "loadmore" === r.unref(f) ? {
                        f: r.p({
                            mode: "list",
                            text: "upvoteCount" === r.unref(C) ? "暂时没有收到点赞哦" : "暂时没有收到别人的评论",
                            marginTop: "100",
                            "icon-color": "rgba(0,0,0,0.3)",
                            "text-color": "rgba(0,0,0,0.6)"
                        })
                    } : {}, {
                        g: r.o(q),
                        h: "calc(100% - ".concat(r.unref(d) + r.unref(m) + r.unref(v), "px)")
                    })
                }
            }
        },
        l = r._export_sfc(i, [
            ["__scopeId", "data-v-7e4df39c"]
        ]);
    wx.createPage(l);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/message/favouriteCommentList.js'
});
require("pages/message/favouriteCommentList.js");