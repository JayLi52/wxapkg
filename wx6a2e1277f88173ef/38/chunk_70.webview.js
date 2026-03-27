$gwx_XC_83 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_83 || [];

        function gz$gwx_XC_83_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_83_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'remark-main data-v-4933fc22'])
                Z([3, 'remark-cont data-v-4933fc22'])
                Z([
                    [7],
                    [3, 'r0']
                ])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'textarea data-v-4933fc22'])
                Z([3, '100'])
                Z([3, '请输入备注要求, 最多100个字'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'text-length data-v-4933fc22'])
                Z([a, [
                        [7],
                        [3, 'd']
                    ],
                    [3, '/100']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-4933fc22'])
                Z([3, '4933fc22-0'])
                Z(z[11])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([3, 'btn-confirm data-v-4933fc22'])
                Z([3, '保存'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_83_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_83_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_83 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_83 = true;
        var x = ['./pages/common/orders/edit-remark.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_83_1()
            var hCWD = _n('view')
            _rz(z, hCWD, 'class', 0, e, s, gg)
            var cEWD = _n('view')
            _rz(z, cEWD, 'class', 1, e, s, gg)
            var oFWD = _v()
            _(cEWD, oFWD)
            if (_oz(z, 2, e, s, gg)) {
                oFWD.wxVkey = 1
                var lGWD = _mz(z, 'textarea', ['bindconfirm', 3, 'bindinput', 1, 'class', 2, 'maxlength', 3, 'placeholder', 4, 'value', 5], [], e, s, gg)
                _(oFWD, lGWD)
            }
            var aHWD = _n('view')
            _rz(z, aHWD, 'class', 9, e, s, gg)
            var tIWD = _oz(z, 10, e, s, gg)
            _(aHWD, tIWD)
            _(cEWD, aHWD)
            oFWD.wxXCkey = 1
            _(hCWD, cEWD)
            var oDWD = _v()
            _(hCWD, oDWD)
            if (_oz(z, 11, e, s, gg)) {
                oDWD.wxVkey = 1
                var eJWD = _mz(z, 'l-status-bar', ['bind:__l', 12, 'class', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                var bKWD = _mz(z, 'view', ['bindtap', 17, 'class', 1], [], e, s, gg)
                var oLWD = _oz(z, 19, e, s, gg)
                _(bKWD, oLWD)
                _(eJWD, bKWD)
                _(oDWD, eJWD)
            }
            oDWD.wxXCkey = 1
            oDWD.wxXCkey = 3
            _(r, hCWD)
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
                g = "$gwx_XC_83";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_83();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/orders/edit-remark.wxml'] = [$gwx_XC_83, './pages/common/orders/edit-remark.wxml'];
else __wxAppCode__['pages/common/orders/edit-remark.wxml'] = $gwx_XC_83('./pages/common/orders/edit-remark.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/common/orders/edit-remark.wxss'] = setCssToHead([".", [1], "remark-main.", [1], "data-v-4933fc22{background-color:#f8f8f8;min-height:100vh;width:100%}\n.", [1], "remark-main .", [1], "remark-cont.", [1], "data-v-4933fc22{margin:0 ", [0, 32], ";padding-top:", [0, 32], ";position:relative}\n.", [1], "remark-main .", [1], "remark-cont .", [1], "textarea.", [1], "data-v-4933fc22{background-color:#fff;border-radius:", [0, 16], ";box-sizing:border-box;padding:", [0, 20], ";width:100%}\n.", [1], "remark-main .", [1], "remark-cont .", [1], "text-length.", [1], "data-v-4933fc22{bottom:", [0, 20], ";color:#999;font-size:", [0, 24], ";position:absolute;right:", [0, 20], "}\n", ], undefined, {
        path: "./pages/common/orders/edit-remark.wxss"
    });
}