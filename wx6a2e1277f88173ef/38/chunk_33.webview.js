$gwx_XC_42 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_42 || [];

        function gz$gwx_XC_42_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'u-empty data-v-b1d90c0b'])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-b1d90c0b'])
                Z([3, 'b1d90c0b-0'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z(z[5])
                Z([3, 'widthFix'])
                Z([
                    [7],
                    [3, 'f']
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
                                [3, 'd']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'height:'],
                        [
                            [7],
                            [3, 'e']
                        ]
                    ]
                ])
                Z([3, 'u-empty__text data-v-b1d90c0b'])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z([a, [
                    [7],
                    [3, 'g']
                ]])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([3, 'u-empty__wrap data-v-b1d90c0b'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_42_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_42_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_42 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_42 = true;
        var x = ['./node-modules/uview-plus/components/u-empty/u-empty.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_42_1()
            var a27B = _v()
            _(r, a27B)
            if (_oz(z, 0, e, s, gg)) {
                a27B.wxVkey = 1
                var t37B = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
                var e47B = _v()
                _(t37B, e47B)
                if (_oz(z, 3, e, s, gg)) {
                    e47B.wxVkey = 1
                    var o67B = _mz(z, 'up-icon', ['bind:__l', 4, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(e47B, o67B)
                } else {
                    e47B.wxVkey = 2
                    var x77B = _mz(z, 'image', ['class', 8, 'mode', 1, 'src', 2, 'style', 3], [], e, s, gg)
                    _(e47B, x77B)
                }
                var o87B = _mz(z, 'text', ['class', 12, 'style', 1], [], e, s, gg)
                var f97B = _oz(z, 14, e, s, gg)
                _(o87B, f97B)
                _(t37B, o87B)
                var b57B = _v()
                _(t37B, b57B)
                if (_oz(z, 15, e, s, gg)) {
                    b57B.wxVkey = 1
                    var c07B = _n('view')
                    _rz(z, c07B, 'class', 16, e, s, gg)
                    var hA8B = _n('slot')
                    _(c07B, hA8B)
                    _(b57B, c07B)
                }
                e47B.wxXCkey = 1
                e47B.wxXCkey = 3
                b57B.wxXCkey = 1
                _(a27B, t37B)
            }
            a27B.wxXCkey = 1
            a27B.wxXCkey = 3
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
                g = "$gwx_XC_42";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_42();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-empty/u-empty.wxml'] = [$gwx_XC_42, './node-modules/uview-plus/components/u-empty/u-empty.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-empty/u-empty.wxml'] = $gwx_XC_42('./node-modules/uview-plus/components/u-empty/u-empty.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/uview-plus/components/u-empty/u-empty.wxss'] = setCssToHead([".", [1], "u-empty.", [1], "data-v-b1d90c0b{-webkit-flex-direction:row;flex-direction:row;flex-direction:column}\n.", [1], "u-empty.", [1], "data-v-b1d90c0b,.", [1], "u-empty__text.", [1], "data-v-b1d90c0b,.", [1], "u-slot-wrap.", [1], "data-v-b1d90c0b{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "u-empty__text.", [1], "data-v-b1d90c0b,.", [1], "u-slot-wrap.", [1], "data-v-b1d90c0b{-webkit-flex-direction:row;flex-direction:row;margin-top:", [0, 20], "}\n", ], undefined, {
        path: "./node-modules/uview-plus/components/u-empty/u-empty.wxss"
    });
}