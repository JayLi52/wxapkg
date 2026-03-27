$gwx_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];

        function gz$gwx_XC_10_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
        var x = ['./pages/my/wallet/withdrawal-detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_10_1()
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
                g = "$gwx_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/wallet/withdrawal-detail.wxml'] = [$gwx_XC_10, './pages/my/wallet/withdrawal-detail.wxml'];
else __wxAppCode__['pages/my/wallet/withdrawal-detail.wxml'] = $gwx_XC_10('./pages/my/wallet/withdrawal-detail.wxml');;
__wxRoute = "pages/my/wallet/withdrawal-detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/wallet/withdrawal-detail.js";
define("pages/my/wallet/withdrawal-detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../common/vendor.js");
    require("../../../utils/request.js");
    var a = require("../../../api/payment-api/asset/asset.js"),
        e = require("../../../store/global.js"),
        l = {
            __name: "withdrawal-detail",
            setup: function(l) {
                var i = t.storeToRefs(e.useGlobalStore()).dataDictMapStore,
                    o = t.reactive({
                        pageSize: 30,
                        pageIndex: 1,
                        allow: !0,
                        list: [],
                        loadTxt: "加载中..."
                    });

                function r() {
                    o.loadTxt = "加载中...";
                    var t = {
                        pageNum: o.pageIndex,
                        pageSize: o.pageSize
                    };
                    a.getRecordWithMyself(t).then((function(t) {
                        1 == o.pageIndex ? o.list = t.data.items : o.list = o.list.concat(t.data.items), t.data.totalPage = Math.ceil(t.data.total / t.data.pageSize), o.allow = !(t.data.pageNum >= t.data.totalPage), o.loadTxt = "下滑加载更多", o.list && (o.loadTxt = o.list && o.list.length ? "暂无更多数据～" : "暂无明细")
                    })).catch((function() {}))
                }
                var n = function() {
                    o.allow && (o.pageIndex++, r())
                };
                return t.onMounted((function() {
                        r()
                    })),
                    function(a, e) {
                        return {
                            a: t.f(t.unref(o).list, (function(a, e, l) {
                                return {
                                    a: t.t(a.displayName || "提现申请"),
                                    b: t.t(a.applyNo),
                                    c: t.t(a.applyTime),
                                    d: t.t("WITHDRAWAL_COMPLETE" === a.withdrawalStatus ? "提现成功" : "AUTO_APPROVED" === a.applyStatus ? t.unref(i).get(a.withdrawalStatus).name : t.unref(i).get(a.applyStatus).name),
                                    e: t.n("WITHDRAWAL_COMPLETE" === a.withdrawalStatus ? "color-3a6" : "color-f70"),
                                    f: t.t(a.withdrawalAmount),
                                    g: "WITHDRAWAL_COMPLETE" !== a.withdrawalStatus ? "#999" : "#f70",
                                    h: e
                                }
                            })),
                            b: t.t(t.unref(o).loadTxt),
                            c: t.o(n)
                        }
                    }
            }
        },
        i = t._export_sfc(l, [
            ["__scopeId", "data-v-c105c5e4"]
        ]);
    wx.createPage(i);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/wallet/withdrawal-detail.js'
});
require("pages/my/wallet/withdrawal-detail.js");