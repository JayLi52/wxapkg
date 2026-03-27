$gwx_XC_21 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_21 || [];

        function gz$gwx_XC_21_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'list-box data-v-f268d420'])
                Z([3, 'list-box-refresher data-v-f268d420'])
                Z([3, 'list-box-refresher-icon data-v-f268d420'])
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
                                    [1, 'transform:'],
                                    [
                                        [7],
                                        [3, 'b']
                                    ]
                                ],
                                [1, ';']
                            ],
                            [
                                [2, '+'],
                                [1, 'transition:'],
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
                        [1, 'opacity:'],
                        [
                            [7],
                            [3, 'd']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-f268d420'])
                Z([3, 'f268d420-0'])
                Z(z[4])
                Z([
                    [7],
                    [3, 'n']
                ])
                Z([
                    [7],
                    [3, 'p']
                ])
                Z([
                    [7],
                    [3, 'o']
                ])
                Z([3, 'list data-v-f268d420'])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [7],
                    [3, 'k']
                ])
                Z([
                    [7],
                    [3, 'l']
                ])
                Z([1, false])
                Z(z[17])
                Z([
                    [7],
                    [3, 'm']
                ])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[6])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_21 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_21 = true;
        var x = ['./components/list/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_21_1()
            var lMEB = _n('view')
            _rz(z, lMEB, 'class', 0, e, s, gg)
            var aNEB = _n('view')
            _rz(z, aNEB, 'class', 1, e, s, gg)
            var tOEB = _mz(z, 'view', ['class', 2, 'style', 1], [], e, s, gg)
            var ePEB = _v()
            _(tOEB, ePEB)
            if (_oz(z, 4, e, s, gg)) {
                ePEB.wxVkey = 1
                var bQEB = _mz(z, 'up-icon', ['bind:__l', 5, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(ePEB, bQEB)
            }
            ePEB.wxXCkey = 1
            ePEB.wxXCkey = 3
            _(aNEB, tOEB)
            _(lMEB, aNEB)
            var oREB = _mz(z, 'scroll-view', ['scrollAnchoring', -1, 'scrollWithAnimation', -1, 'bindrefresherrefresh', 9, 'bindscroll', 1, 'bindscrolltolower', 2, 'class', 3, 'enableBackToTop', 4, 'lowerThreshold', 5, 'refresherBackground', 6, 'refresherDefaultStyle', 7, 'refresherEnabled', 8, 'refresherTriggered', 9, 'scrollIntoView', 10, 'scrollTop', 11, 'scrollY', 12], [], e, s, gg)
            var xSEB = _mz(z, 'view', ['bindtouchend', 22, 'bindtouchmove', 1, 'class', 2], [], e, s, gg)
            var oTEB = _n('slot')
            _(xSEB, oTEB)
            _(oREB, xSEB)
            _(lMEB, oREB)
            _(r, lMEB)
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
                g = "$gwx_XC_21";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_21();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/list/index.wxml'] = [$gwx_XC_21, './components/list/index.wxml'];
else __wxAppCode__['components/list/index.wxml'] = $gwx_XC_21('./components/list/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/list/index.wxss'] = setCssToHead([".", [1], "list-box.", [1], "data-v-f268d420{display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;height:100%;position:relative;width:100%}\n.", [1], "list-box .", [1], "list-box-refresher.", [1], "data-v-f268d420{left:0;padding-top:3px;pointer-events:none;position:absolute;top:0;width:100%;z-index:99999}\n.", [1], "list-box .", [1], "list-box-refresher .", [1], "list-box-refresher-icon.", [1], "data-v-f268d420,.", [1], "list-box .", [1], "list-box-refresher.", [1], "data-v-f268d420{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "list-box .", [1], "list-box-refresher .", [1], "list-box-refresher-icon.", [1], "data-v-f268d420{background-color:#fff;border-radius:50%;box-shadow:0 0 ", [0, 10], " #999;height:42px;width:42px;will-change:transform}\n.", [1], "list.", [1], "data-v-f268d420{display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;height:100%;position:relative;width:100%}\n.", [1], "refresh-height.", [1], "data-v-f268d420{height:", [0, 86], "}\n", ], undefined, {
        path: "./components/list/index.wxss"
    });
}