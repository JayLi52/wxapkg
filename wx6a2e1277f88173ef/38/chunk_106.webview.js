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
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([3, 'app-container px30 pb40 data-v-730738cd'])
                Z([3, 'true'])
                Z([
                    [2, '+'],
                    [1, 'height:'],
                    [1, '100vh']
                ])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'e'])
                Z([3, 'integral-item py20 f-row f-jcb f-ais data-v-730738cd'])
                Z([3, 'data-v-730738cd'])
                Z([3, 'title-color font30 data-v-730738cd'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ]])
                Z([3, 'tips-color font24 data-v-730738cd'])
                Z([3, 'margin-top:12rpx'])
                Z([3, 'color-999 data-v-730738cd'])
                Z([3, '明细时间：'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'b']
                ]])
                Z([3, 'f-col f-aie data-v-730738cd'])
                Z([3, 'mr10 data-v-730738cd'])
                Z([3, 't-fw-b font30 data-v-730738cd'])
                Z([
                    [2, '+'],
                    [1, 'color:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'd']
                    ]
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'c']
                ]])
                Z([3, 'font24 ml6 data-v-730738cd'])
                Z([a, [
                    [7],
                    [3, 'b']
                ]])
                Z([3, 'mt50 font28 f-row f-jcc color-999 data-v-730738cd'])
                Z([a, [
                    [7],
                    [3, 'c']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_9 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_9 = true;
        var x = ['./pages/my/wallet/wallet-detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_9_1()
            var cMY = _mz(z, 'scroll-view', ['bindscrolltolower', 0, 'class', 1, 'scrollY', 1, 'style', 2], [], e, s, gg)
            var oNY = _v()
            _(cMY, oNY)
            var lOY = function(tQY, aPY, eRY, gg) {
                var oTY = _n('view')
                _rz(z, oTY, 'class', 7, tQY, aPY, gg)
                var xUY = _n('view')
                _rz(z, xUY, 'class', 8, tQY, aPY, gg)
                var oVY = _n('view')
                _rz(z, oVY, 'class', 9, tQY, aPY, gg)
                var fWY = _oz(z, 10, tQY, aPY, gg)
                _(oVY, fWY)
                _(xUY, oVY)
                var cXY = _mz(z, 'view', ['class', 11, 'style', 1], [], tQY, aPY, gg)
                var hYY = _n('text')
                _rz(z, hYY, 'class', 13, tQY, aPY, gg)
                var oZY = _oz(z, 14, tQY, aPY, gg)
                _(hYY, oZY)
                _(cXY, hYY)
                var c1Y = _oz(z, 15, tQY, aPY, gg)
                _(cXY, c1Y)
                _(xUY, cXY)
                _(oTY, xUY)
                var o2Y = _n('view')
                _rz(z, o2Y, 'class', 16, tQY, aPY, gg)
                var l3Y = _n('view')
                _rz(z, l3Y, 'class', 17, tQY, aPY, gg)
                var a4Y = _mz(z, 'text', ['class', 18, 'style', 1], [], tQY, aPY, gg)
                var t5Y = _oz(z, 20, tQY, aPY, gg)
                _(a4Y, t5Y)
                _(l3Y, a4Y)
                var e6Y = _n('text')
                _rz(z, e6Y, 'class', 21, tQY, aPY, gg)
                var b7Y = _oz(z, 22, tQY, aPY, gg)
                _(e6Y, b7Y)
                _(l3Y, e6Y)
                _(o2Y, l3Y)
                _(oTY, o2Y)
                _(eRY, oTY)
                return eRY
            }
            oNY.wxXCkey = 2
            _2z(z, 5, lOY, e, s, gg, oNY, 'item', 'index', 'e')
            var o8Y = _n('view')
            _rz(z, o8Y, 'class', 23, e, s, gg)
            var x9Y = _oz(z, 24, e, s, gg)
            _(o8Y, x9Y)
            _(cMY, o8Y)
            _(r, cMY)
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
            outerGlobal.__wxml_comp_version__ = 0.02
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
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
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
else __wxAppCode__['pages/my/wallet/wallet-detail.wxml'] = $gwx_XC_9('./pages/my/wallet/wallet-detail.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/my/wallet/wallet-detail.wxss'] = setCssToHead([".", [1], "app-container.", [1], "data-v-730738cd{background-color:#fff;box-sizing:border-box}\n.", [1], "integral-item.", [1], "data-v-730738cd{border-bottom:", [0, 1], " solid #e6e6e6}\n.", [1], "integral-item.", [1], "data-v-730738cd:last-child{border:none}\n.", [1], "integral-icon.", [1], "data-v-730738cd{height:", [0, 41], ";width:", [0, 41], "}\n", ], undefined, {
        path: "./pages/my/wallet/wallet-detail.wxss"
    });
}