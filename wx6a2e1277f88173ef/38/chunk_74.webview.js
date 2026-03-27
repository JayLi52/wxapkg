$gwx_XC_87 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_87 || [];

        function gz$gwx_XC_87_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_87_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_87_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_87_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'position-box data-v-3499f8fb'])
                Z([3, 'current-position data-v-3499f8fb'])
                Z([3, 'title data-v-3499f8fb'])
                Z([3, '当前城市：'])
                Z([3, 'current-city data-v-3499f8fb'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-3499f8fb'])
                Z([3, '3499f8fb-0'])
                Z(z[5])
                Z(z[7])
                Z([a, [
                    [7],
                    [3, 'b']
                ]])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'current-city-desc']
                            ],
                            [1, 'data-v-3499f8fb']
                        ],
                        [
                            [2, '&&'],
                            [
                                [7],
                                [3, 'd']
                            ],
                            [1, 'hide']
                        ]
                    ]
                ])
                Z([3, 'dot data-v-3499f8fb'])
                Z(z[7])
                Z([a, [
                    [7],
                    [3, 'c']
                ]])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([3, 'again-position data-v-3499f8fb'])
                Z([3, 'icon-sl-position2 font40 mr4 data-v-3499f8fb'])
                Z(z[7])
                Z([3, '重新定位'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_87_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_87_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_87 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_87 = true;
        var x = ['./pages/home/select-address/components/position-top/position-top.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_87_1()
            var bWYD = _n('view')
            _rz(z, bWYD, 'class', 0, e, s, gg)
            var oXYD = _n('view')
            _rz(z, oXYD, 'class', 1, e, s, gg)
            var xYYD = _n('view')
            _rz(z, xYYD, 'class', 2, e, s, gg)
            var oZYD = _oz(z, 3, e, s, gg)
            _(xYYD, oZYD)
            _(oXYD, xYYD)
            var f1YD = _n('view')
            _rz(z, f1YD, 'class', 4, e, s, gg)
            var c2YD = _v()
            _(f1YD, c2YD)
            if (_oz(z, 5, e, s, gg)) {
                c2YD.wxVkey = 1
                var h3YD = _mz(z, 'up-icon', ['bind:__l', 6, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(c2YD, h3YD)
            }
            var o4YD = _n('text')
            _rz(z, o4YD, 'class', 10, e, s, gg)
            var c5YD = _oz(z, 11, e, s, gg)
            _(o4YD, c5YD)
            _(f1YD, o4YD)
            var o6YD = _n('view')
            _rz(z, o6YD, 'class', 12, e, s, gg)
            var l7YD = _n('view')
            _rz(z, l7YD, 'class', 13, e, s, gg)
            _(o6YD, l7YD)
            var a8YD = _n('text')
            _rz(z, a8YD, 'class', 14, e, s, gg)
            var t9YD = _oz(z, 15, e, s, gg)
            _(a8YD, t9YD)
            _(o6YD, a8YD)
            _(f1YD, o6YD)
            c2YD.wxXCkey = 1
            c2YD.wxXCkey = 3
            _(oXYD, f1YD)
            _(bWYD, oXYD)
            var e0YD = _mz(z, 'view', ['bindtap', 16, 'class', 1], [], e, s, gg)
            var bAZD = _n('text')
            _rz(z, bAZD, 'class', 18, e, s, gg)
            _(e0YD, bAZD)
            var oBZD = _n('text')
            _rz(z, oBZD, 'class', 19, e, s, gg)
            var xCZD = _oz(z, 20, e, s, gg)
            _(oBZD, xCZD)
            _(e0YD, oBZD)
            _(bWYD, e0YD)
            _(r, bWYD)
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
                g = "$gwx_XC_87";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_87();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/select-address/components/position-top/position-top.wxml'] = [$gwx_XC_87, './pages/home/select-address/components/position-top/position-top.wxml'];
else __wxAppCode__['pages/home/select-address/components/position-top/position-top.wxml'] = $gwx_XC_87('./pages/home/select-address/components/position-top/position-top.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/home/select-address/components/position-top/position-top.wxss'] = setCssToHead([".", [1], "position-box.", [1], "data-v-3499f8fb{-webkit-align-items:flex-end;align-items:flex-end;box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding-top:", [0, 24], "}\n.", [1], "position-box .", [1], "current-position .", [1], "title.", [1], "data-v-3499f8fb{color:#333;font-size:", [0, 28], ";margin-bottom:", [0, 8], "}\n.", [1], "position-box .", [1], "current-position .", [1], "current-city.", [1], "data-v-3499f8fb{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "position-box .", [1], "current-position .", [1], "current-city wx-text.", [1], "data-v-3499f8fb{color:#29e;font-size:", [0, 28], "}\n.", [1], "position-box .", [1], "current-position .", [1], "current-city .", [1], "current-city-desc.", [1], "data-v-3499f8fb{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "position-box .", [1], "current-position .", [1], "current-city .", [1], "current-city-desc.", [1], "hide.", [1], "data-v-3499f8fb{opacity:0}\n.", [1], "position-box .", [1], "current-position .", [1], "current-city .", [1], "current-city-desc .", [1], "dot.", [1], "data-v-3499f8fb{background-color:#2291f8;border-radius:50%;height:", [0, 4], ";margin:0 ", [0, 5], ";width:", [0, 4], "}\n.", [1], "position-box .", [1], "current-position .", [1], "current-city .", [1], "current-city-desc wx-text.", [1], "data-v-3499f8fb{max-width:", [0, 400], ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "position-box .", [1], "again-position.", [1], "data-v-3499f8fb{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "position-box .", [1], "again-position wx-text.", [1], "data-v-3499f8fb{color:#999;font-size:", [0, 28], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/home/select-address/components/position-top/position-top.wxss:1:1300)", {
        path: "./pages/home/select-address/components/position-top/position-top.wxss"
    });
}