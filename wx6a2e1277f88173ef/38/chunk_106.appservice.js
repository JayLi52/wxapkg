$gwx_XC_9 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];

        function gz$gwx_XC_9_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_9 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_9 = true;
        var x = ['./pages/my/wallet/wallet-detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_9_1()
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
                g = "$gwx_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_9();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/wallet/wallet-detail.wxml'] = [$gwx_XC_9, './pages/my/wallet/wallet-detail.wxml'];
else __wxAppCode__['pages/my/wallet/wallet-detail.wxml'] = $gwx_XC_9('./pages/my/wallet/wallet-detail.wxml');;
__wxRoute = "pages/my/wallet/wallet-detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/wallet/wallet-detail.js";
define("pages/my/wallet/wallet-detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var t = require("../../../api/payment-api/asset/asset.js"),
        a = require("../../../store/global.js"),
        r = require("../../../store/user.js"),
        o = {
            __name: "wallet-detail",
            setup: function(o) {
                var s = e.storeToRefs(a.useGlobalStore()).dataDictMapStore,
                    n = e.storeToRefs(r.useUserStore()).userInfo,
                    i = e.ref(""),
                    l = e.ref(""),
                    u = e.reactive({
                        pageSize: 30,
                        pageIndex: 1,
                        allow: !0,
                        list: [],
                        loadTxt: "加载中..."
                    });

                function d() {
                    u.loadTxt = "加载中...";
                    var e = {
                        pageNum: u.pageIndex,
                        pageSize: u.pageSize,
                        conditions: [{
                            operate: "=",
                            property: "userId",
                            value: n.value.userId
                        }, {
                            operate: "=",
                            property: "assetTypeId",
                            value: i.value
                        }, {
                            operate: "=",
                            property: "detailStatus",
                            value: "AVAILABLE"
                        }],
                        orders: [{
                            property: "processDate",
                            direction: "DESC"
                        }]
                    };
                    t.getTransactionDetail(e).then((function(e) {
                        1 == u.pageIndex ? u.list = e.data.items : u.list = u.list.concat(e.data.items), e.data.totalPage = Math.ceil(e.data.total / e.data.pageSize), u.allow = !(e.data.pageNum >= e.data.totalPage), u.loadTxt = "下滑加载更多", u.list && (u.loadTxt = u.list && u.list.length ? "暂无更多数据～" : "暂无明细")
                    })).catch((function() {}))
                }
                var p = function() {
                    u.allow && (u.pageIndex++, d())
                };
                return e.onLoad((function(t) {
                        e.index.setNavigationBarTitle({
                            title: "".concat(t.name || "收益", "明细")
                        }), t.assetTypeId && (l.value = t.assetTypeUnit, i.value = t.assetTypeId)
                    })), e.onMounted((function() {
                        d()
                    })),
                    function(t, a) {
                        var r;
                        return {
                            a: e.f(e.unref(u).list, (function(t, a, r) {
                                return {
                                    a: e.t(t.ruleDisplayName || "收益"),
                                    b: e.t(t.processDate),
                                    c: e.t(t.originalAmount),
                                    d: t.originalAmount > 0 ? "#3a6" : "#f15",
                                    e: a
                                }
                            })),
                            b: e.t(null == (r = e.unref(s).get(e.unref(l))) ? void 0 : r.name),
                            c: e.t(e.unref(u).loadTxt),
                            d: e.o(p)
                        }
                    }
            }
        },
        s = e._export_sfc(o, [
            ["__scopeId", "data-v-730738cd"]
        ]);
    wx.createPage(s);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/wallet/wallet-detail.js'
});
require("pages/my/wallet/wallet-detail.js");