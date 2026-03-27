$gwx_XC_81 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_81 || [];

        function gz$gwx_XC_81_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_81_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'example-main data-v-24cf91a0'])
                Z([3, 'example-cont data-v-24cf91a0'])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, '__l'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([3, 'data-v-24cf91a0'])
                Z([3, '24cf91a0-0'])
                Z(z[2])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'upload-icon f-row f-aic f-jcc data-v-24cf91a0'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z(z[3])
                Z(z[7])
                Z([3, '24cf91a0-1,24cf91a0-0'])
                Z(z[13])
                Z([3, 'mt30 mx32 font24 color-666 data-v-24cf91a0'])
                Z([3, '说明：最多上传3张参考图'])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[3])
                Z(z[7])
                Z([3, '24cf91a0-2'])
                Z(z[20])
                Z(z[10])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([3, 'btn-confirm data-v-24cf91a0'])
                Z([3, '保存'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_81_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_81 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_81 = true;
        var x = ['./pages/common/orders/edit-example.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_81_1()
            var oLOD = _n('view')
            _rz(z, oLOD, 'class', 0, e, s, gg)
            var oNOD = _n('view')
            _rz(z, oNOD, 'class', 1, e, s, gg)
            var lOOD = _v()
            _(oNOD, lOOD)
            if (_oz(z, 2, e, s, gg)) {
                lOOD.wxVkey = 1
                var aPOD = _mz(z, 'up-upload', ['bind:__l', 3, 'bindafterRead', 1, 'binddelete', 2, 'binderror', 3, 'class', 4, 'uI', 5, 'uP', 6, 'uS', 7], [], e, s, gg)
                var tQOD = _mz(z, 'view', ['bindtap', 11, 'class', 1], [], e, s, gg)
                var eROD = _v()
                _(tQOD, eROD)
                if (_oz(z, 13, e, s, gg)) {
                    eROD.wxVkey = 1
                    var bSOD = _mz(z, 'up-icon', ['bind:__l', 14, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(eROD, bSOD)
                }
                eROD.wxXCkey = 1
                eROD.wxXCkey = 3
                _(aPOD, tQOD)
                _(lOOD, aPOD)
            }
            lOOD.wxXCkey = 1
            lOOD.wxXCkey = 3
            _(oLOD, oNOD)
            var oTOD = _n('view')
            _rz(z, oTOD, 'class', 18, e, s, gg)
            var xUOD = _oz(z, 19, e, s, gg)
            _(oTOD, xUOD)
            _(oLOD, oTOD)
            var cMOD = _v()
            _(oLOD, cMOD)
            if (_oz(z, 20, e, s, gg)) {
                cMOD.wxVkey = 1
                var oVOD = _mz(z, 'l-status-bar', ['bind:__l', 21, 'class', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                var fWOD = _mz(z, 'view', ['bindtap', 26, 'class', 1], [], e, s, gg)
                var cXOD = _oz(z, 28, e, s, gg)
                _(fWOD, cXOD)
                _(oVOD, fWOD)
                _(cMOD, oVOD)
            }
            cMOD.wxXCkey = 1
            cMOD.wxXCkey = 3
            _(r, oLOD)
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
                g = "$gwx_XC_81";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_81();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/orders/edit-example.wxml'] = [$gwx_XC_81, './pages/common/orders/edit-example.wxml'];
else __wxAppCode__['pages/common/orders/edit-example.wxml'] = $gwx_XC_81('./pages/common/orders/edit-example.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/common/orders/edit-example.wxss'] = setCssToHead([".", [1], "example-main.", [1], "data-v-24cf91a0{background-color:#f8f8f8;min-height:100vh;padding-top:", [0, 32], ";width:100%}\n.", [1], "example-main .", [1], "example-cont.", [1], "data-v-24cf91a0{background-color:#fff;border-radius:", [0, 16], ";margin:0 ", [0, 32], ";padding:", [0, 30], " ", [0, 24], " ", [0, 20], ";position:relative}\n.", [1], "example-main .", [1], "example-cont .", [1], "upload-icon.", [1], "data-v-24cf91a0{background-color:#eee;height:", [0, 196], ";margin-bottom:", [0, 16], ";width:", [0, 196], "}\n.", [1], "example-main .", [1], "example-cont.", [1], "data-v-24cf91a0 .", [1], "u-icon{display:-webkit-flex!important;display:flex!important}\n", ], undefined, {
        path: "./pages/common/orders/edit-example.wxss"
    });
}