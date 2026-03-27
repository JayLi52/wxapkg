$gwx_XC_24 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];

        function gz$gwx_XC_24_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'search-enter-box data-v-ebdffe8a'])
                Z([
                    [7],
                    [3, 'k']
                ])
                Z([3, 'search-enter data-v-ebdffe8a'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'border-radius:'],
                            [
                                [7],
                                [3, 'l']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'background-color:'],
                        [
                            [7],
                            [3, 'm']
                        ]
                    ]
                ])
                Z([3, 'search-input data-v-ebdffe8a'])
                Z([3, 'icon-sl-search font32 color-999 mr10 data-v-ebdffe8a'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'data-v-ebdffe8a'])
                Z([a, [
                    [7],
                    [3, 'b']
                ]])
                Z([3, '__l'])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([3, 'r data-v-ebdffe8a'])
                Z([3, 'ebdffe8a-0'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'h']
                    ],
                    [1, '']
                ])
                Z([3, 'inputRef'])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z(z[9])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z(z[7])
                Z([3, 'ebdffe8a-1'])
                Z(z[18])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([3, '搜索'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_24 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_24 = true;
        var x = ['./components/search-enter/search-enter.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_24_1()
            var c5FB = _n('view')
            _rz(z, c5FB, 'class', 0, e, s, gg)
            var o6FB = _mz(z, 'view', ['bindtap', 1, 'class', 1, 'style', 2], [], e, s, gg)
            var a8FB = _n('view')
            _rz(z, a8FB, 'class', 4, e, s, gg)
            var e0FB = _n('text')
            _rz(z, e0FB, 'class', 5, e, s, gg)
            _(a8FB, e0FB)
            var t9FB = _v()
            _(a8FB, t9FB)
            if (_oz(z, 6, e, s, gg)) {
                t9FB.wxVkey = 1
                var bAGB = _n('text')
                _rz(z, bAGB, 'class', 7, e, s, gg)
                var oBGB = _oz(z, 8, e, s, gg)
                _(bAGB, oBGB)
                _(t9FB, bAGB)
            } else {
                t9FB.wxVkey = 2
                var xCGB = _mz(z, 'up-input', ['bind:__l', 9, 'bindchange', 1, 'bindclear', 2, 'bindconfirm', 3, 'bindupdateModelValue', 4, 'class', 5, 'uI', 6, 'uP', 7, 'uR', 8], [], e, s, gg)
                _(t9FB, xCGB)
            }
            t9FB.wxXCkey = 1
            t9FB.wxXCkey = 3
            _(o6FB, a8FB)
            var l7FB = _v()
            _(o6FB, l7FB)
            if (_oz(z, 18, e, s, gg)) {
                l7FB.wxVkey = 1
                var oDGB = _mz(z, 'base-button', ['bind:__l', 19, 'bindclick', 1, 'class', 2, 'uI', 3, 'uP', 4, 'uS', 5], [], e, s, gg)
                var fEGB = _oz(z, 25, e, s, gg)
                _(oDGB, fEGB)
                _(l7FB, oDGB)
            }
            l7FB.wxXCkey = 1
            l7FB.wxXCkey = 3
            _(c5FB, o6FB)
            _(r, c5FB)
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
                g = "$gwx_XC_24";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_24();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/search-enter/search-enter.wxml'] = [$gwx_XC_24, './components/search-enter/search-enter.wxml'];
else __wxAppCode__['components/search-enter/search-enter.wxml'] = $gwx_XC_24('./components/search-enter/search-enter.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/search-enter/search-enter.wxss'] = setCssToHead([".", [1], "search-enter-box.", [1], "data-v-ebdffe8a{box-sizing:border-box}\n.", [1], "search-enter-box .", [1], "search-enter.", [1], "data-v-ebdffe8a{-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-flex;display:flex;height:", [0, 64], ";-webkit-justify-content:space-between;justify-content:space-between;padding:0 ", [0, 10], ";width:100%}\n.", [1], "search-enter-box .", [1], "search-enter .", [1], "search-input.", [1], "data-v-ebdffe8a{-webkit-align-items:center;align-items:center;color:#999;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;font-size:", [0, 26], "}\n.", [1], "search-enter-box .", [1], "search-enter .", [1], "search-btn.", [1], "data-v-ebdffe8a{-webkit-align-items:center;align-items:center;background-image:linear-gradient(90deg,#55b6f2,#af8cf8);color:#fff;display:-webkit-flex;display:flex;font-size:", [0, 24], ";height:", [0, 48], ";-webkit-justify-content:center;justify-content:center;width:", [0, 96], "}\n", ], undefined, {
        path: "./components/search-enter/search-enter.wxss"
    });
}