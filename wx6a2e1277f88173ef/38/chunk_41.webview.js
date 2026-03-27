$gwx_XC_51 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_51 || [];

        function gz$gwx_XC_51_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'u-loadmore data-v-4d53dbf5'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [7],
                            [3, 'l']
                        ],
                        [1, ';']
                    ],
                    [
                        [7],
                        [3, 'm']
                    ]
                ])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-4d53dbf5'])
                Z([3, '4d53dbf5-0'])
                Z([
                    [7],
                    [3, 'b']
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
                                    [7],
                                    [3, 'i']
                                ]
                            ],
                            [1, 'u-loadmore__content']
                        ],
                        [1, 'data-v-4d53dbf5']
                    ]
                ])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([3, 'u-loadmore__content__icon-wrap data-v-4d53dbf5'])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[3])
                Z(z[4])
                Z([3, '4d53dbf5-1'])
                Z(z[10])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'u-line-1']
                            ],
                            [1, 'data-v-4d53dbf5']
                        ],
                        [
                            [7],
                            [3, 'g']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([a, [
                    [7],
                    [3, 'e']
                ]])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z(z[3])
                Z(z[4])
                Z([3, '4d53dbf5-2'])
                Z([
                    [7],
                    [3, 'k']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_51 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_51 = true;
        var x = ['./node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_51_1()
            var oJDC = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var cKDC = _v()
            _(oJDC, cKDC)
            if (_oz(z, 2, e, s, gg)) {
                cKDC.wxVkey = 1
                var lMDC = _mz(z, 'u-line', ['bind:__l', 3, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(cKDC, lMDC)
            }
            var aNDC = _n('view')
            _rz(z, aNDC, 'class', 7, e, s, gg)
            var tODC = _v()
            _(aNDC, tODC)
            if (_oz(z, 8, e, s, gg)) {
                tODC.wxVkey = 1
                var ePDC = _n('view')
                _rz(z, ePDC, 'class', 9, e, s, gg)
                var bQDC = _v()
                _(ePDC, bQDC)
                if (_oz(z, 10, e, s, gg)) {
                    bQDC.wxVkey = 1
                    var oRDC = _mz(z, 'u-loading-icon', ['bind:__l', 11, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(bQDC, oRDC)
                }
                bQDC.wxXCkey = 1
                bQDC.wxXCkey = 3
                _(tODC, ePDC)
            }
            var xSDC = _mz(z, 'text', ['bindtap', 15, 'class', 1, 'style', 2], [], e, s, gg)
            var oTDC = _oz(z, 18, e, s, gg)
            _(xSDC, oTDC)
            _(aNDC, xSDC)
            tODC.wxXCkey = 1
            tODC.wxXCkey = 3
            _(oJDC, aNDC)
            var oLDC = _v()
            _(oJDC, oLDC)
            if (_oz(z, 19, e, s, gg)) {
                oLDC.wxVkey = 1
                var fUDC = _mz(z, 'u-line', ['bind:__l', 20, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(oLDC, fUDC)
            }
            cKDC.wxXCkey = 1
            cKDC.wxXCkey = 3
            oLDC.wxXCkey = 1
            oLDC.wxXCkey = 3
            _(r, oJDC)
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
                g = "$gwx_XC_51";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_51();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml'] = [$gwx_XC_51, './node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml'] = $gwx_XC_51('./node-modules/uview-plus/components/u-loadmore/u-loadmore.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/uview-plus/components/u-loadmore/u-loadmore.wxss'] = setCssToHead([".", [1], "u-loadmore.", [1], "data-v-4d53dbf5{-webkit-flex:1;flex:1;-webkit-flex-direction:row;flex-direction:row}\n.", [1], "u-loadmore.", [1], "data-v-4d53dbf5,.", [1], "u-loadmore__content.", [1], "data-v-4d53dbf5{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "u-loadmore__content.", [1], "data-v-4d53dbf5{-webkit-flex-direction:row;flex-direction:row;margin:0 15px}\n.", [1], "u-loadmore__content__icon-wrap.", [1], "data-v-4d53dbf5{margin-right:8px}\n.", [1], "u-loadmore__content__text.", [1], "data-v-4d53dbf5{color:#606266;font-size:14px}\n.", [1], "u-loadmore__content__dot-text.", [1], "data-v-4d53dbf5{color:#909193;font-size:15px}\n", ], undefined, {
        path: "./node-modules/uview-plus/components/u-loadmore/u-loadmore.wxss"
    });
}