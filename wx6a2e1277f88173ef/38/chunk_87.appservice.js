$gwx_XC_101 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_101 || [];

        function gz$gwx_XC_101_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_101_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_101_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_101_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([3, '__l'])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([3, 'data-v-c5e991d2'])
                Z([3, 'c5e991d2-0'])
                Z(z[0])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z(z[4])
                Z([3, 'padding:16rpx;background:#f6f7f9'])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[1])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[4])
                Z([3, 'c5e991d2-1,c5e991d2-0'])
                Z(z[11])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'column']
                    ]
                ])
                Z([3, 'v0'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'b'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'v0']
                    ],
                    [3, 'c']
                ])
                Z([3, 'list'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'v0']
                    ],
                    [3, 'a']
                ])
                Z([3, 'i'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'j']
                ])
                Z([3, 'square-item data-v-c5e991d2'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'b']
                ])
                Z(z[1])
                Z(z[4])
                Z([3, 'width:100%;height:100%'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'a']
                ])
                Z(z[27])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'f']
                ])
                Z(z[1])
                Z(z[4])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'e']
                ])
                Z(z[33])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z(z[1])
                Z(z[4])
                Z([3, 'c5e991d2-4,c5e991d2-0'])
                Z(z[38])
                Z(z[1])
                Z(z[4])
                Z([3, 'c5e991d2-5,c5e991d2-0'])
                Z(z[1])
                Z(z[4])
                Z([3, 'c5e991d2-6,c5e991d2-0'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'g']
                    ],
                    [1, '']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_101_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_101_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_101 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_101 = true;
        var x = ['./pages/my/history/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_101_1()
            var oPLC = _v()
            _(r, oPLC)
            if (_oz(z, 0, e, s, gg)) {
                oPLC.wxVkey = 1
                var cQLC = _mz(z, 'my-list-index', ['bind:__l', 1, 'bindonRefresh', 1, 'bindscrolltolower', 2, 'class', 3, 'uI', 4, 'uP', 5, 'uS', 6], [], e, s, gg)
                var oRLC = _v()
                _(cQLC, oRLC)
                if (_oz(z, 8, e, s, gg)) {
                    oRLC.wxVkey = 1
                    var lSLC = _mz(z, 'view', ['class', 9, 'style', 1], [], e, s, gg)
                    var aTLC = _v()
                    _(lSLC, aTLC)
                    if (_oz(z, 11, e, s, gg)) {
                        aTLC.wxVkey = 1
                        var eVLC = _mz(z, 'up-waterfall', ['bind:__l', 12, 'bindupdateModelValue', 1, 'class', 2, 'uI', 3, 'uP', 4, 'uS', 5], [], e, s, gg)
                        var bWLC = _v()
                        _(eVLC, bWLC)
                        var oXLC = function(oZLC, xYLC, f1LC, gg) {
                            var h3LC = _n('view')
                            _rz(z, h3LC, 'slot', 21, oZLC, xYLC, gg)
                            var o4LC = _v()
                            _(h3LC, o4LC)
                            var c5LC = function(l7LC, o6LC, a8LC, gg) {
                                var e0LC = _mz(z, 'view', ['bindtap', 25, 'class', 1], [], l7LC, o6LC, gg)
                                var bAMC = _v()
                                _(e0LC, bAMC)
                                if (_oz(z, 27, l7LC, o6LC, gg)) {
                                    bAMC.wxVkey = 1
                                    var xCMC = _mz(z, 'work-cover', ['bind:__l', 28, 'class', 1, 'style', 2, 'uI', 3, 'uP', 4], [], l7LC, o6LC, gg)
                                    _(bAMC, xCMC)
                                }
                                var oBMC = _v()
                                _(e0LC, oBMC)
                                if (_oz(z, 33, l7LC, o6LC, gg)) {
                                    oBMC.wxVkey = 1
                                    var oDMC = _mz(z, 'my-cache-image-index', ['bind:__l', 34, 'class', 1, 'uI', 2, 'uP', 3], [], l7LC, o6LC, gg)
                                    _(oBMC, oDMC)
                                }
                                bAMC.wxXCkey = 1
                                bAMC.wxXCkey = 3
                                oBMC.wxXCkey = 1
                                oBMC.wxXCkey = 3
                                _(a8LC, e0LC)
                                return a8LC
                            }
                            o4LC.wxXCkey = 4
                            _2z(z, 23, c5LC, oZLC, xYLC, gg, o4LC, 'list', 'index', 'i')
                            _(f1LC, h3LC)
                            return f1LC
                        }
                        bWLC.wxXCkey = 4
                        _2z(z, 19, oXLC, e, s, gg, bWLC, 'v0', 'index', 'b')
                        _(aTLC, eVLC)
                    }
                    var tULC = _v()
                    _(lSLC, tULC)
                    if (_oz(z, 38, e, s, gg)) {
                        tULC.wxVkey = 1
                        var fEMC = _mz(z, 'up-loadmore', ['bind:__l', 39, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                        _(tULC, fEMC)
                    }
                    var cFMC = _mz(z, 'up-safe-bottom', ['bind:__l', 43, 'class', 1, 'uI', 2], [], e, s, gg)
                    _(lSLC, cFMC)
                    aTLC.wxXCkey = 1
                    aTLC.wxXCkey = 3
                    tULC.wxXCkey = 1
                    tULC.wxXCkey = 3
                    _(oRLC, lSLC)
                } else {
                    oRLC.wxVkey = 2
                    var hGMC = _mz(z, 'up-empty', ['bind:__l', 46, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(oRLC, hGMC)
                }
                oRLC.wxXCkey = 1
                oRLC.wxXCkey = 3
                oRLC.wxXCkey = 3
                _(oPLC, cQLC)
            }
            oPLC.wxXCkey = 1
            oPLC.wxXCkey = 3
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
                g = "$gwx_XC_101";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_101();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/history/index.wxml'] = [$gwx_XC_101, './pages/my/history/index.wxml'];
else __wxAppCode__['pages/my/history/index.wxml'] = $gwx_XC_101('./pages/my/history/index.wxml');;
__wxRoute = "pages/my/history/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/history/index.js";
define("pages/my/history/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        t = require("../../../common/vendor.js"),
        o = require("../../../api/square-api/index.js"),
        a = require("../../../utils/util.js"),
        u = require("../../../utils/route-manager.js");
    Array || (t.resolveComponent("my-cache-image-index") + t.resolveComponent("up-waterfall") + t.resolveComponent("up-loadmore") + t.resolveComponent("up-safe-bottom") + t.resolveComponent("up-empty") + t.resolveComponent("my-list-index"))(), Math || (s + function() {
        return "../../../components/cache-image/index.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-waterfall/u-waterfall.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-empty/u-empty.js"
    } + function() {
        return "../../../components/list/index.js"
    })();
    var s = function() {
            return "../../../components/work-cover/index.js"
        },
        i = {
            __name: "index",
            setup: function(s) {
                var i = a.getEnv("OSS_URL"),
                    c = t.ref([]),
                    l = t.reactive({
                        refreshing: !1,
                        loadmoreProps: {
                            status: "loadmore",
                            loadmoreText: "上拉加载更多",
                            loadingText: "努力加载中...",
                            nomoreText: "已经到底了"
                        },
                        otherParams: {
                            operateType: 1,
                            userId: ""
                        },
                        pagination: {
                            size: 10,
                            current: 1
                        }
                    }),
                    d = function() {
                        var t = n(e().mark((function n(t) {
                            var a, u, s, i;
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (["nomore", "loading"].includes(l.loadmoreProps.status) && !t) {
                                            e.next = 19;
                                            break
                                        }
                                        return l.loadmoreProps.status = "loading", e.prev = 2, a = r(r({}, l.pagination), l.otherParams), e.next = 6, o.pageUpvoteList(a);
                                    case 6:
                                        u = e.sent, s = u.data, i = s.records, s.current, s.pages, s.total, s.size, l.loadmoreProps.status = "loadmore", (null == i ? void 0 : i.length) ? (c.value = t ? i : c.value.concat(i), i.length < l.pagination.size ? l.loadmoreProps.status = "nomore" : l.pagination.current += 1) : l.loadmoreProps.status = "nomore", e.next = 19;
                                        break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(2), l.loadmoreProps.status = "loadmore", l.refreshing = !1;
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), n, null, [
                                [2, 16]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                t.onLoad(function() {
                    var r = n(e().mark((function r(n) {
                        var t;
                        return e().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = n.userId, l.otherParams.userId = t, d(!1);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), r)
                    })));
                    return function(e) {
                        return r.apply(this, arguments)
                    }
                }());
                var p = function() {
                        var r = n(e().mark((function r() {
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return l.refreshing = !0, l.pagination = {
                                            size: 10,
                                            current: 1
                                        }, e.next = 4, d(!0);
                                    case 4:
                                        l.refreshing = !1;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), r)
                        })));
                        return function() {
                            return r.apply(this, arguments)
                        }
                    }(),
                    m = function() {
                        t.throttle((function() {
                            d()
                        }), {
                            wait: 800,
                            immediate: !0
                        })
                    },
                    f = function(e) {
                        var r = a.getQuery(e),
                            n = r.height,
                            t = r.width;
                        return n && t ? {
                            width: "354rpx",
                            height: "".concat((354 * n / t).toFixed(2), "rpx"),
                            background: "#fff",
                            maxHeight: "472rpx",
                            minHeight: "200rpx",
                            borderRadius: "5px 5px 0 0",
                            overflow: "hidden"
                        } : {}
                    };
                return function(e, r) {
                    var n, o;
                    return t.e({
                        a: null == (n = t.unref(c)) ? void 0 : n.length
                    }, (null == (o = t.unref(c)) ? void 0 : o.length) ? {
                        b: t.w((function(e, r, n) {
                            var o = e.colList;
                            e.colIndex;
                            return {
                                a: t.f(o, (function(e, r, o) {
                                    return {
                                        a: "c5e991d2-2-" + n + "-" + o + ",c5e991d2-1",
                                        b: t.p({
                                            radius: "10rpx 10rpx 0 0",
                                            lazyLoad: !0,
                                            src: e.mainImage
                                        }),
                                        c: t.s(f(e.mainImage)),
                                        d: t.t(e.title),
                                        e: "c5e991d2-3-" + n + "-" + o + ",c5e991d2-1",
                                        f: t.p({
                                            imageUrl: e.avatar,
                                            width: "36rpx",
                                            height: "36rpx",
                                            mode: "aspectFill",
                                            radius: "50%"
                                        }),
                                        g: t.t(e.nickName),
                                        h: t.t(t.unref(a.bigNumberTransform)(e.visits) || 0),
                                        i: r,
                                        j: t.o((function(r) {
                                            return function(e) {
                                                var r = e.postsId,
                                                    n = e.type,
                                                    t = e.id;
                                                2 === n ? u.$route.navigateTo({
                                                    url: "/pages/square/square-details/shortVideo?id=".concat(r || t)
                                                }) : u.$route.navigateTo({
                                                    url: "/pages/square/square-details/index?id=".concat(r || t)
                                                })
                                            }(e)
                                        }), r)
                                    }
                                })),
                                b: n,
                                c: r
                            }
                        }), {
                            name: "column",
                            path: "b",
                            vueId: "c5e991d2-1,c5e991d2-0"
                        }),
                        c: "".concat(t.unref(i), "/images/icon-hot-active.png"),
                        d: t.o((function(e) {
                            return t.isRef(c) ? c.value = e : null
                        })),
                        e: t.p({
                            columns: "2",
                            idKey: "postsId",
                            modelValue: t.unref(c)
                        }),
                        f: t.p({
                            status: t.unref(l).loadmoreProps.status,
                            "loading-text": t.unref(l).loadmoreProps.loadingText,
                            "loadmore-text": t.unref(l).loadmoreProps.loadmoreText,
                            "nomore-text": t.unref(l).loadmoreProps.nomoreText
                        })
                    } : {
                        g: t.p({
                            mode: "history"
                        })
                    }, {
                        h: t.o(p),
                        i: t.o(m),
                        j: t.p({
                            refresherEnabled: !0,
                            isRefresh: t.unref(l).refreshing,
                            "refresher-background": "transparent"
                        })
                    })
                }
            }
        },
        c = t._export_sfc(i, [
            ["__scopeId", "data-v-c5e991d2"]
        ]);
    wx.createPage(c);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/history/index.js'
});
require("pages/my/history/index.js");