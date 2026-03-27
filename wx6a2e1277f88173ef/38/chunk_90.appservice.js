$gwx_XC_105 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_105 || [];

        function gz$gwx_XC_105_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_105_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_105_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_105_1 = [];
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
                    [3, 'h']
                ])
                Z([3, '__l'])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([3, 'data-v-ae846c42'])
                Z([3, 'ae846c42-0'])
                Z(z[1])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'i'])
                Z([3, 'left data-v-ae846c42'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'c']
                ])
                Z(z[2])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ])
                Z(z[5])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'b']
                ])
                Z(z[13])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'e']
                ])
                Z(z[2])
                Z(z[5])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'f']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'g']
                ])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[2])
                Z(z[5])
                Z([3, 'ae846c42-3,ae846c42-0'])
                Z(z[25])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[2])
                Z(z[5])
                Z([3, 'ae846c42-4,ae846c42-0'])
                Z(z[30])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_105_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_105_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_105 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_105 = true;
        var x = ['./pages/my/my/visitor-list.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_105_1()
            var fIPC = _v()
            _(r, fIPC)
            if (_oz(z, 0, e, s, gg)) {
                fIPC.wxVkey = 1
                var cJPC = _v()
                _(fIPC, cJPC)
                if (_oz(z, 1, e, s, gg)) {
                    cJPC.wxVkey = 1
                    var hKPC = _mz(z, 'my-list-index', ['bind:__l', 2, 'bindonRefresh', 1, 'bindscrolltolower', 2, 'class', 3, 'uI', 4, 'uP', 5, 'uS', 6], [], e, s, gg)
                    var cMPC = _v()
                    _(hKPC, cMPC)
                    var oNPC = function(aPPC, lOPC, tQPC, gg) {
                        var bSPC = _n('view')
                        _rz(z, bSPC, 'class', 12, aPPC, lOPC, gg)
                        var oTPC = _v()
                        _(bSPC, oTPC)
                        if (_oz(z, 13, aPPC, lOPC, gg)) {
                            oTPC.wxVkey = 1
                            var oVPC = _mz(z, 'up-avatar', ['bind:__l', 14, 'bindclick', 1, 'class', 2, 'uI', 3, 'uP', 4], [], aPPC, lOPC, gg)
                            _(oTPC, oVPC)
                        }
                        var xUPC = _v()
                        _(bSPC, xUPC)
                        if (_oz(z, 19, aPPC, lOPC, gg)) {
                            xUPC.wxVkey = 1
                            var fWPC = _mz(z, 'up-tag', ['bind:__l', 20, 'class', 1, 'uI', 2, 'uP', 3], [], aPPC, lOPC, gg)
                            _(xUPC, fWPC)
                        }
                        oTPC.wxXCkey = 1
                        oTPC.wxXCkey = 3
                        xUPC.wxXCkey = 1
                        xUPC.wxXCkey = 3
                        _(tQPC, bSPC)
                        return tQPC
                    }
                    cMPC.wxXCkey = 4
                    _2z(z, 10, oNPC, e, s, gg, cMPC, 'item', 'index', 'i')
                    var oLPC = _v()
                    _(hKPC, oLPC)
                    if (_oz(z, 24, e, s, gg)) {
                        oLPC.wxVkey = 1
                        var cXPC = _v()
                        _(oLPC, cXPC)
                        if (_oz(z, 25, e, s, gg)) {
                            cXPC.wxVkey = 1
                            var hYPC = _mz(z, 'up-loadmore', ['bind:__l', 26, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                            _(cXPC, hYPC)
                        }
                        cXPC.wxXCkey = 1
                        cXPC.wxXCkey = 3
                    } else {
                        oLPC.wxVkey = 2
                        var oZPC = _v()
                        _(oLPC, oZPC)
                        if (_oz(z, 30, e, s, gg)) {
                            oZPC.wxVkey = 1
                            var c1PC = _mz(z, 'up-empty', ['bind:__l', 31, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                            _(oZPC, c1PC)
                        }
                        oZPC.wxXCkey = 1
                        oZPC.wxXCkey = 3
                    }
                    oLPC.wxXCkey = 1
                    oLPC.wxXCkey = 3
                    oLPC.wxXCkey = 3
                    _(cJPC, hKPC)
                }
                cJPC.wxXCkey = 1
                cJPC.wxXCkey = 3
            }
            fIPC.wxXCkey = 1
            fIPC.wxXCkey = 3
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
                g = "$gwx_XC_105";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_105();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/my/visitor-list.wxml'] = [$gwx_XC_105, './pages/my/my/visitor-list.wxml'];
else __wxAppCode__['pages/my/my/visitor-list.wxml'] = $gwx_XC_105('./pages/my/my/visitor-list.wxml');;
__wxRoute = "pages/my/my/visitor-list";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/my/visitor-list.js";
define("pages/my/my/visitor-list.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/toConsumableArray"),
        t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        o = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var a = require("../../../api/utils.js"),
        n = require("../../../store/user.js"),
        s = require("../../../utils/util.js");
    Array || (o.resolveComponent("up-avatar") + o.resolveComponent("up-tag") + o.resolveComponent("up-loadmore") + o.resolveComponent("up-empty") + o.resolveComponent("my-list-index"))(), Math || (function() {
        return "../../../node-modules/uview-plus/components/u-avatar/u-avatar.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-tag/u-tag.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-empty/u-empty.js"
    } + function() {
        return "../../../components/list/index.js"
    })();
    var u = {
            __name: "visitor-list",
            setup: function(u) {
                var i = s.getEnv("OSS_URL"),
                    p = n.useUserStore(),
                    l = o.storeToRefs(p).userInfo,
                    d = (p.noLoginToast, o.ref("7")),
                    c = o.ref([]),
                    f = o.ref(""),
                    v = o.reactive({
                        dataList: [],
                        firstLoaded: !1,
                        isCurrentPage: !1
                    }),
                    g = o.reactive({
                        pageSize: 20,
                        pageNo: 1,
                        hasMore: !1,
                        refreshing: !1
                    }),
                    m = function() {
                        var n = t(e().mark((function t() {
                            var n, s, u, i, p, m, h, y, L, T = arguments;
                            return e().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = T.length > 0 && void 0 !== T[0] && T[0], e.prev = 1, g.refreshing = !0, s = n || 1 === g.pageNo ? [] : r(v.dataList), u = {
                                            pageNum: g.pageNo,
                                            pageSize: g.pageSize,
                                            conditions: [{
                                                property: "visitorTargetType",
                                                operate: "IN",
                                                value: c.value
                                            }, {
                                                property: "visitorType",
                                                operate: "=",
                                                value: "REAL"
                                            }, {
                                                property: "visitorUserId",
                                                operate: "=",
                                                value: l.value.userId
                                            }],
                                            orders: [{
                                                property: "createdTime",
                                                direction: "DESC"
                                            }]
                                        }, d.value && ("today" === d.value ? u.conditions.push({
                                            property: "createdTime",
                                            operate: ">=",
                                            value: o.dayjs().format("YYYY-MM-DD")
                                        }) : (i = o.dayjs().subtract(d.value, "day").format("YYYY-MM-DD"), u.conditions.push({
                                            property: "createdTime",
                                            operate: ">=",
                                            value: i
                                        }))), "SKILL" === c.value && u.conditions.push({
                                            property: "visitorTargetId",
                                            operate: "=",
                                            value: f.value
                                        }), e.next = 8, a.queryByExamplePage("/user-api/userVisitor", u);
                                    case 8:
                                        p = e.sent, m = p.data, h = m.items, y = m.total, n && (g.pageNo = 1), L = s.concat(h), v.firstLoaded = !0, v.dataList = L, g.hasMore = v.dataList.length < y, g.refreshing = !1, e.next = 20;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(1), g.refreshing = !1, console.error(e.t0);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), t, null, [
                                [1, 17]
                            ])
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    h = function() {
                        g.pageNo = 1, v.dataList = [], m()
                    },
                    y = function() {
                        !g.refreshing && g.hasMore && (g.pageNo += 1, m())
                    };
                return o.onLoad((function(e) {
                        console.log("onLoad options", e), e.visitorType && (f.value = e.skillId, "ALL" === e.visitorType ? c.value = ["SKILL", "USER"] : c.value = [e.visitorType], console.log("visitorType", c.value)), e.visitDay && (d.value = e.visitDay), h()
                    })),
                    function(e, r) {
                        return o.e({
                            a: o.unref(v).firstLoaded || o.unref(v).isCurrentPage
                        }, o.unref(v).firstLoaded || o.unref(v).isCurrentPage ? o.e({
                            b: o.f(o.unref(v).dataList, (function(e, r, t) {
                                return o.e({
                                    a: o.o((function(r) {
                                        return function(e) {
                                            s.goToMyUser(e.userId)
                                        }(e)
                                    }), r),
                                    b: "ae846c42-1-" + t + ",ae846c42-0",
                                    c: o.p({
                                        src: e.avatar || "".concat(o.unref(i), "/images/logo-400x400.png"),
                                        size: "94rpx"
                                    }),
                                    d: o.t(e.nickName),
                                    e: o.unref(l).userId === e.userId
                                }, o.unref(l).userId === e.userId ? {
                                    f: "ae846c42-2-" + t + ",ae846c42-0",
                                    g: o.p({
                                        text: "我",
                                        bgColor: "#f5f5f5",
                                        color: "#999",
                                        size: "mini",
                                        borderColor: "transparent"
                                    })
                                } : {}, {
                                    h: o.t(e.createdTime),
                                    i: r
                                })
                            })),
                            c: o.unref(v).dataList.length
                        }, o.unref(v).dataList.length ? {
                            d: o.p({
                                status: o.unref(g).refreshing ? "loading" : o.unref(g).hasMore ? "loadmore" : "nomore",
                                "loading-text": "加载中",
                                "nomore-text": "没有更多了"
                            })
                        } : {
                            e: o.p({
                                mode: "data",
                                text: "暂无访客"
                            })
                        }, {
                            f: o.o(h),
                            g: o.o(y),
                            h: o.p({
                                refresherEnabled: !0,
                                isRefresh: o.unref(g).refreshing,
                                "refresher-background": "transparent"
                            })
                        }) : {})
                    }
            }
        },
        i = o._export_sfc(u, [
            ["__scopeId", "data-v-ae846c42"]
        ]);
    wx.createPage(i);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/my/visitor-list.js'
});
require("pages/my/my/visitor-list.js");