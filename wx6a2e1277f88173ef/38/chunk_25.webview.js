$gwx_XC_33 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_33 || [];

        function gz$gwx_XC_33_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'p']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'u-avatar']
                            ],
                            [1, 'data-v-d8fda593']
                        ],
                        [
                            [7],
                            [3, 'm']
                        ]
                    ]
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [7],
                            [3, 'n']
                        ],
                        [1, ';']
                    ],
                    [
                        [7],
                        [3, 'o']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$slots']
                    ],
                    [3, 'd']
                ])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'data-v-d8fda593'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'userAvatarUrl'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([3, '__l'])
                Z(z[5])
                Z([3, 'd8fda593-0'])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z(z[10])
                Z(z[5])
                Z([3, 'd8fda593-1'])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([
                    [7],
                    [3, 'k']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'u-avatar__image']
                            ],
                            [1, 'data-v-d8fda593']
                        ],
                        [
                            [7],
                            [3, 'h']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([
                    [7],
                    [3, 'l']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_33 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_33 = true;
        var x = ['./node-modules/uview-plus/components/u-avatar/u-avatar.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_33_1()
            var cN1B = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var hO1B = _v()
            _(cN1B, hO1B)
            if (_oz(z, 3, e, s, gg)) {
                hO1B.wxVkey = 1
                var oP1B = _n('slot')
                _(hO1B, oP1B)
            } else {
                hO1B.wxVkey = 2
                var cQ1B = _v()
                _(hO1B, cQ1B)
                if (_oz(z, 4, e, s, gg)) {
                    cQ1B.wxVkey = 1
                    var lS1B = _mz(z, 'open-data', ['class', 5, 'style', 1, 'type', 2], [], e, s, gg)
                    _(cQ1B, lS1B)
                }
                var oR1B = _v()
                _(hO1B, oR1B)
                if (_oz(z, 8, e, s, gg)) {
                    oR1B.wxVkey = 1
                } else if (_oz(z, 9, e, s, gg)) {
                    oR1B.wxVkey = 2
                    var aT1B = _mz(z, 'up-icon', ['bind:__l', 10, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(oR1B, aT1B)
                } else if (_oz(z, 14, e, s, gg)) {
                    oR1B.wxVkey = 3
                    var tU1B = _mz(z, 'up-text', ['bind:__l', 15, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(oR1B, tU1B)
                } else {
                    oR1B.wxVkey = 4
                    var eV1B = _mz(z, 'image', ['binderror', 19, 'class', 1, 'mode', 2, 'src', 3, 'style', 4], [], e, s, gg)
                    _(oR1B, eV1B)
                }
                cQ1B.wxXCkey = 1
                oR1B.wxXCkey = 1
                oR1B.wxXCkey = 3
                oR1B.wxXCkey = 3
            }
            hO1B.wxXCkey = 1
            hO1B.wxXCkey = 3
            _(r, cN1B)
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
                g = "$gwx_XC_33";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_33();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-avatar/u-avatar.wxml'] = [$gwx_XC_33, './node-modules/uview-plus/components/u-avatar/u-avatar.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-avatar/u-avatar.wxml'] = $gwx_XC_33('./node-modules/uview-plus/components/u-avatar/u-avatar.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/uview-plus/components/u-avatar/u-avatar.wxss'] = setCssToHead([".", [1], "u-avatar.", [1], "data-v-d8fda593{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center}\n.", [1], "u-avatar--circle.", [1], "data-v-d8fda593{border-radius:100px}\n.", [1], "u-avatar--square.", [1], "data-v-d8fda593{border-radius:4px}\n.", [1], "u-avatar__image--circle.", [1], "data-v-d8fda593{border-radius:100px;overflow:hidden}\n.", [1], "u-avatar__image--square.", [1], "data-v-d8fda593{border-radius:4px}\n", ], undefined, {
        path: "./node-modules/uview-plus/components/u-avatar/u-avatar.wxss"
    });
}