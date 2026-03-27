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
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([3, 'app-container px30 pb40 data-v-c105c5e4'])
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
                Z([3, 'h'])
                Z([3, 'integral-item py20 f-row f-jcb f-ais data-v-c105c5e4'])
                Z([3, 'data-v-c105c5e4'])
                Z([3, 'title-color font30 data-v-c105c5e4'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ]])
                Z([3, 'tips-color font24 color-#333 data-v-c105c5e4'])
                Z([3, 'margin-top:12rpx'])
                Z([3, 'color-999 data-v-c105c5e4'])
                Z([3, '申请单号：'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'b']
                ]])
                Z([3, 'tips-color font24 data-v-c105c5e4'])
                Z(z[12])
                Z(z[13])
                Z([3, '申请时间：'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'c']
                ]])
                Z([3, 'f-col f-aie data-v-c105c5e4'])
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
                                    [1, 'font22']
                                ],
                                [1, 'mb8']
                            ],
                            [1, 'data-v-c105c5e4']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'e']
                        ]
                    ]
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'd']
                ]])
                Z([3, 'mr10 data-v-c105c5e4'])
                Z([
                    [2, '+'],
                    [1, 'color:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'g']
                    ]
                ])
                Z([3, 't-fw-h font30 data-v-c105c5e4'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'f']
                ]])
                Z([3, 'font24 ml6 data-v-c105c5e4'])
                Z([3, '元'])
                Z([3, 'mt50 font28 f-row f-jcc color-999 data-v-c105c5e4'])
                Z([a, [
                    [7],
                    [3, 'b']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
        var x = ['./pages/my/wallet/withdrawal-detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_10_1()
            var fAZ = _mz(z, 'scroll-view', ['bindscrolltolower', 0, 'class', 1, 'scrollY', 1, 'style', 2], [], e, s, gg)
            var cBZ = _v()
            _(fAZ, cBZ)
            var hCZ = function(cEZ, oDZ, oFZ, gg) {
                var aHZ = _n('view')
                _rz(z, aHZ, 'class', 7, cEZ, oDZ, gg)
                var tIZ = _n('view')
                _rz(z, tIZ, 'class', 8, cEZ, oDZ, gg)
                var eJZ = _n('view')
                _rz(z, eJZ, 'class', 9, cEZ, oDZ, gg)
                var bKZ = _oz(z, 10, cEZ, oDZ, gg)
                _(eJZ, bKZ)
                _(tIZ, eJZ)
                var oLZ = _mz(z, 'view', ['class', 11, 'style', 1], [], cEZ, oDZ, gg)
                var xMZ = _n('text')
                _rz(z, xMZ, 'class', 13, cEZ, oDZ, gg)
                var oNZ = _oz(z, 14, cEZ, oDZ, gg)
                _(xMZ, oNZ)
                _(oLZ, xMZ)
                var fOZ = _oz(z, 15, cEZ, oDZ, gg)
                _(oLZ, fOZ)
                _(tIZ, oLZ)
                var cPZ = _mz(z, 'view', ['class', 16, 'style', 1], [], cEZ, oDZ, gg)
                var hQZ = _n('text')
                _rz(z, hQZ, 'class', 18, cEZ, oDZ, gg)
                var oRZ = _oz(z, 19, cEZ, oDZ, gg)
                _(hQZ, oRZ)
                _(cPZ, hQZ)
                var cSZ = _oz(z, 20, cEZ, oDZ, gg)
                _(cPZ, cSZ)
                _(tIZ, cPZ)
                _(aHZ, tIZ)
                var oTZ = _n('view')
                _rz(z, oTZ, 'class', 21, cEZ, oDZ, gg)
                var lUZ = _n('view')
                _rz(z, lUZ, 'class', 22, cEZ, oDZ, gg)
                var aVZ = _oz(z, 23, cEZ, oDZ, gg)
                _(lUZ, aVZ)
                _(oTZ, lUZ)
                var tWZ = _mz(z, 'view', ['class', 24, 'style', 1], [], cEZ, oDZ, gg)
                var eXZ = _n('text')
                _rz(z, eXZ, 'class', 26, cEZ, oDZ, gg)
                var bYZ = _oz(z, 27, cEZ, oDZ, gg)
                _(eXZ, bYZ)
                _(tWZ, eXZ)
                var oZZ = _n('text')
                _rz(z, oZZ, 'class', 28, cEZ, oDZ, gg)
                var x1Z = _oz(z, 29, cEZ, oDZ, gg)
                _(oZZ, x1Z)
                _(tWZ, oZZ)
                _(oTZ, tWZ)
                _(aHZ, oTZ)
                _(oFZ, aHZ)
                return oFZ
            }
            cBZ.wxXCkey = 2
            _2z(z, 5, hCZ, e, s, gg, cBZ, 'item', 'index', 'h')
            var o2Z = _n('view')
            _rz(z, o2Z, 'class', 30, e, s, gg)
            var f3Z = _oz(z, 31, e, s, gg)
            _(o2Z, f3Z)
            _(fAZ, o2Z)
            _(r, fAZ)
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
                g = "$gwx_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/wallet/withdrawal-detail.wxml'] = [$gwx_XC_10, './pages/my/wallet/withdrawal-detail.wxml'];
else __wxAppCode__['pages/my/wallet/withdrawal-detail.wxml'] = $gwx_XC_10('./pages/my/wallet/withdrawal-detail.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/my/wallet/withdrawal-detail.wxss'] = setCssToHead([".", [1], "app-container.", [1], "data-v-c105c5e4{background-color:#fff;box-sizing:border-box}\n.", [1], "integral-item.", [1], "data-v-c105c5e4{border-bottom:", [0, 1], " solid #e6e6e6}\n.", [1], "integral-item.", [1], "data-v-c105c5e4:last-child{border:none}\n.", [1], "integral-icon.", [1], "data-v-c105c5e4{height:", [0, 41], ";width:", [0, 41], "}\n", ], undefined, {
        path: "./pages/my/wallet/withdrawal-detail.wxss"
    });
}