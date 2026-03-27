$gwx_XC_68 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_68 || [];

        function gz$gwx_XC_68_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'u-waterfall data-v-405b52f2'])
                Z([3, 'column'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'f'])
                Z([3, 'u-column data-v-405b52f2'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'h']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'g']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'a']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'e']
                ])
                Z([3, 'c'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_68 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_68 = true;
        var x = ['./node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_68_1()
            var c3UC = _n('view')
            _rz(z, c3UC, 'class', 0, e, s, gg)
            var o4UC = _v()
            _(c3UC, o4UC)
            var l5UC = function(t7UC, a6UC, e8UC, gg) {
                var o0UC = _mz(z, 'view', ['class', 4, 'id', 1, 'ref', 2], [], t7UC, a6UC, gg)
                var oBVC = _n('slot')
                _rz(z, oBVC, 'name', 7, t7UC, a6UC, gg)
                _(o0UC, oBVC)
                var fCVC = _n('slot')
                _rz(z, fCVC, 'name', 8, t7UC, a6UC, gg)
                _(o0UC, fCVC)
                var xAVC = _v()
                _(o0UC, xAVC)
                if (_oz(z, 9, t7UC, a6UC, gg)) {
                    xAVC.wxVkey = 1
                    var cDVC = _v()
                    _(xAVC, cDVC)
                    var hEVC = function(cGVC, oFVC, oHVC, gg) {
                        var aJVC = _n('slot')
                        _rz(z, aJVC, 'name', 13, cGVC, oFVC, gg)
                        _(oHVC, aJVC)
                        var tKVC = _n('slot')
                        _(oHVC, tKVC)
                        return oHVC
                    }
                    cDVC.wxXCkey = 2
                    _2z(z, 11, hEVC, t7UC, a6UC, gg, cDVC, 'item', 'index', 'c')
                }
                xAVC.wxXCkey = 1
                _(e8UC, o0UC)
                return e8UC
            }
            o4UC.wxXCkey = 2
            _2z(z, 2, l5UC, e, s, gg, o4UC, 'column', 'index', 'f')
            _(r, c3UC)
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
                g = "$gwx_XC_68";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_68();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml'] = [$gwx_XC_68, './node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml'] = $gwx_XC_68('./node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/uview-plus/components/u-waterfall/u-waterfall.wxss'] = setCssToHead([".", [1], "u-waterfall.", [1], "data-v-405b52f2{-webkit-align-items:flex-start;align-items:flex-start}\n.", [1], "u-column.", [1], "data-v-405b52f2,.", [1], "u-waterfall.", [1], "data-v-405b52f2{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.", [1], "u-column.", [1], "data-v-405b52f2{-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;height:100%;overflow:hidden}\n.", [1], "u-column.", [1], "data-v-405b52f2:not(:first-child){margin-left:", [0, 10], "}\n.", [1], "u-image.", [1], "data-v-405b52f2{max-width:100%}\n", ], undefined, {
        path: "./node-modules/uview-plus/components/u-waterfall/u-waterfall.wxss"
    });
}