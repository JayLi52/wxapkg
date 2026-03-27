$gwx_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];

        function gz$gwx_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'set_info pt20 data-v-3db3866b'])
                Z([3, 'tab_list data-v-3db3866b'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'h'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'g']
                ])
                Z([3, 'tab_item data-v-3db3866b'])
                Z([3, 'tab_name data-v-3db3866b'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'b']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'c']
                ])
                Z([3, 'tab_value data-v-3db3866b'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'd']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'f']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-3db3866b'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'e']
                ])
                Z(z[13])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([3, 'no_login data-v-3db3866b'])
                Z([3, '退出登录'])
                Z([3, ' data-v-3db3866b'])
                Z([3, 'height:40rpx'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./pages/my/settings/setting.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var o8T = _n('view')
            _rz(z, o8T, 'class', 0, e, s, gg)
            var c0T = _n('view')
            _rz(z, c0T, 'class', 1, e, s, gg)
            var hAU = _v()
            _(c0T, hAU)
            var oBU = function(oDU, cCU, lEU, gg) {
                var tGU = _v()
                _(lEU, tGU)
                if (_oz(z, 5, oDU, cCU, gg)) {
                    tGU.wxVkey = 1
                    var eHU = _mz(z, 'view', ['bindtap', 6, 'class', 1], [], oDU, cCU, gg)
                    var xKU = _n('view')
                    _rz(z, xKU, 'class', 8, oDU, cCU, gg)
                    var oLU = _oz(z, 9, oDU, cCU, gg)
                    _(xKU, oLU)
                    _(eHU, xKU)
                    var bIU = _v()
                    _(eHU, bIU)
                    if (_oz(z, 10, oDU, cCU, gg)) {
                        bIU.wxVkey = 1
                        var fMU = _n('view')
                        _rz(z, fMU, 'class', 11, oDU, cCU, gg)
                        var cNU = _oz(z, 12, oDU, cCU, gg)
                        _(fMU, cNU)
                        _(bIU, fMU)
                    }
                    var oJU = _v()
                    _(eHU, oJU)
                    if (_oz(z, 13, oDU, cCU, gg)) {
                        oJU.wxVkey = 1
                        var hOU = _mz(z, 'up-icon', ['bind:__l', 14, 'class', 1, 'uI', 2, 'uP', 3], [], oDU, cCU, gg)
                        _(oJU, hOU)
                    }
                    bIU.wxXCkey = 1
                    oJU.wxXCkey = 1
                    oJU.wxXCkey = 3
                    _(tGU, eHU)
                }
                tGU.wxXCkey = 1
                tGU.wxXCkey = 3
                return lEU
            }
            hAU.wxXCkey = 4
            _2z(z, 3, oBU, e, s, gg, hAU, 'item', 'index', 'h')
            _(o8T, c0T)
            var f9T = _v()
            _(o8T, f9T)
            if (_oz(z, 18, e, s, gg)) {
                f9T.wxVkey = 1
                var oPU = _mz(z, 'view', ['bindtap', 19, 'class', 1], [], e, s, gg)
                var cQU = _oz(z, 21, e, s, gg)
                _(oPU, cQU)
                _(f9T, oPU)
            }
            var oRU = _mz(z, 'view', ['class', 22, 'style', 1], [], e, s, gg)
            _(o8T, oRU)
            f9T.wxXCkey = 1
            _(r, o8T)
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
                g = "$gwx_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/settings/setting.wxml'] = [$gwx_XC_5, './pages/my/settings/setting.wxml'];
else __wxAppCode__['pages/my/settings/setting.wxml'] = $gwx_XC_5('./pages/my/settings/setting.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/my/settings/setting.wxss'] = setCssToHead([".", [1], "set_info.", [1], "data-v-3db3866b{height:100vh}\n.", [1], "item_title.", [1], "data-v-3db3866b{font-size:", [0, 46], ";font-weight:800;padding:0 ", [0, 50], "}\n.", [1], "tab_list.", [1], "data-v-3db3866b{background-color:#fff;border-radius:", [0, 20], ";margin:", [0, 20], "}\n.", [1], "tab_item.", [1], "data-v-3db3866b{-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #f4f4f4;display:-webkit-flex;display:flex;height:", [0, 110], ";-webkit-justify-content:space-between;justify-content:space-between;padding:0 ", [0, 30], "}\n.", [1], "tab_item .", [1], "tab_name.", [1], "data-v-3db3866b{-webkit-flex:1;flex:1}\n.", [1], "tab_item .", [1], "tab_dis.", [1], "data-v-3db3866b{color:rgba(0,0,0,.5);font-size:", [0, 22], "}\n.", [1], "tab_item .", [1], "tab_value.", [1], "data-v-3db3866b{color:rgba(0,0,0,.5)}\n.", [1], "no_login.", [1], "data-v-3db3866b{background-color:#fff;border-radius:", [0, 40], ";color:red;height:", [0, 96], ";line-height:", [0, 96], ";margin:", [0, 60], " ", [0, 30], " ", [0, 30], ";text-align:center}\nbody{background-color:#f6f7f9;overflow:auto}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/my/settings/setting.wxss:1:774)", {
        path: "./pages/my/settings/setting.wxss"
    });
}