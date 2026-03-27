$gwx_XC_19 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_19 || [];

        function gz$gwx_XC_19_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'status-bar data-v-55197ef9'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [
                                    [2, '+'],
                                    [
                                        [2, '+'],
                                        [
                                            [2, '+'],
                                            [1, 'width:'],
                                            [
                                                [7],
                                                [3, 'b']
                                            ]
                                        ],
                                        [1, ';']
                                    ],
                                    [
                                        [2, '+'],
                                        [1, 'background-color:'],
                                        [
                                            [7],
                                            [3, 'c']
                                        ]
                                    ]
                                ],
                                [1, ';']
                            ],
                            [
                                [2, '+'],
                                [1, 'position:'],
                                [
                                    [7],
                                    [3, 'd']
                                ]
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'padding:'],
                        [
                            [7],
                            [3, 'e']
                        ]
                    ]
                ])
                Z([3, 'safe-area data-v-55197ef9'])
                Z([
                    [2, '+'],
                    [1, 'background-color:'],
                    [
                        [7],
                        [3, 'a']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_19 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_19 = true;
        var x = ['./components/l-ui/l-status-bar/l-status-bar.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_19_1()
            var c6BB = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var h7BB = _n('slot')
            _(c6BB, h7BB)
            var o8BB = _mz(z, 'view', ['class', 2, 'style', 1], [], e, s, gg)
            _(c6BB, o8BB)
            _(r, c6BB)
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
                g = "$gwx_XC_19";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_19();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/l-ui/l-status-bar/l-status-bar.wxml'] = [$gwx_XC_19, './components/l-ui/l-status-bar/l-status-bar.wxml'];
else __wxAppCode__['components/l-ui/l-status-bar/l-status-bar.wxml'] = $gwx_XC_19('./components/l-ui/l-status-bar/l-status-bar.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/l-ui/l-status-bar/l-status-bar.wxss'] = setCssToHead([".", [1], "status-bar.", [1], "data-v-55197ef9{bottom:0;left:0;width:100%;z-index:1999}\n.", [1], "status-bar .", [1], "safe-area.", [1], "data-v-55197ef9{padding-bottom:calc(env(safe-area-inset-bottom)/2 + ", [0, 25], ");position:relative;z-index:2000}\n", ], undefined, {
        path: "./components/l-ui/l-status-bar/l-status-bar.wxss"
    });
}