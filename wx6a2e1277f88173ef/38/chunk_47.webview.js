$gwx_XC_57 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_57 || [];

        function gz$gwx_XC_57_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'm']
                ])
                Z([3, 'u-qrcode data-v-7567110d'])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'width:'],
                            [
                                [7],
                                [3, 'k']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'height:'],
                        [
                            [7],
                            [3, 'l']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([3, 'u-qrcode__content data-v-7567110d'])
                Z([
                    [7],
                    [3, 'r0']
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'u-qrcode__canvas data-v-7567110d'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'width:'],
                            [
                                [7],
                                [3, 'c']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'height:'],
                        [
                            [7],
                            [3, 'd']
                        ]
                    ]
                ])
                Z([3, '2d'])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([3, 'u-qrcode__loading data-v-7567110d'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'width:'],
                            [
                                [7],
                                [3, 'g']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'height:'],
                        [
                            [7],
                            [3, 'h']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-7567110d'])
                Z([3, '7567110d-0'])
                Z(z[15])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_57 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_57 = true;
        var x = ['./node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_57_1()
            var t9LC = _mz(z, 'view', ['bindlongpress', 0, 'class', 1, 'id', 1, 'style', 2], [], e, s, gg)
            var e0LC = _mz(z, 'view', ['bindtap', 4, 'class', 1], [], e, s, gg)
            var bAMC = _v()
            _(e0LC, bAMC)
            if (_oz(z, 6, e, s, gg)) {
                bAMC.wxVkey = 1
                var xCMC = _mz(z, 'canvas', ['canvasId', 7, 'class', 1, 'id', 2, 'style', 3, 'type', 4], [], e, s, gg)
                _(bAMC, xCMC)
            }
            var oBMC = _v()
            _(e0LC, oBMC)
            if (_oz(z, 12, e, s, gg)) {
                oBMC.wxVkey = 1
                var oDMC = _mz(z, 'view', ['class', 13, 'style', 1], [], e, s, gg)
                var fEMC = _v()
                _(oDMC, fEMC)
                if (_oz(z, 15, e, s, gg)) {
                    fEMC.wxVkey = 1
                    var cFMC = _mz(z, 'up-loading-icon', ['bind:__l', 16, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(fEMC, cFMC)
                }
                fEMC.wxXCkey = 1
                fEMC.wxXCkey = 3
                _(oBMC, oDMC)
            }
            bAMC.wxXCkey = 1
            oBMC.wxXCkey = 1
            oBMC.wxXCkey = 3
            _(t9LC, e0LC)
            _(r, t9LC)
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
                g = "$gwx_XC_57";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_57();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml'] = [$gwx_XC_57, './node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml'] = $gwx_XC_57('./node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/uview-plus/components/u-qrcode/u-qrcode.wxss'] = setCssToHead([".", [1], "u-qrcode__loading.", [1], "data-v-7567110d{-webkit-align-items:center;align-items:center;background-color:#f7f7f7;bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;position:absolute;right:0;top:0}\n.", [1], "u-qrcode__content.", [1], "data-v-7567110d{position:relative}\n.", [1], "u-qrcode__content__canvas.", [1], "data-v-7567110d{left:", [0, -99999], ";position:fixed;top:", [0, -99999], ";z-index:-99999}\n", ], undefined, {
        path: "./node-modules/uview-plus/components/u-qrcode/u-qrcode.wxss"
    });
}