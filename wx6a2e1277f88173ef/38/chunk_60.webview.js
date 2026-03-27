$gwx_XC_72 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_72 || [];

        function gz$gwx_XC_72_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_72_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_72_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_72_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app-container pl30 pr20 pt20 data-v-828431e6'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-828431e6'])
                Z([3, '828431e6-0'])
                Z(z[1])
                Z([3, 'font28 lh50 data-v-828431e6'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z(z[3])
                Z([3, 'height:246rpx'])
                Z(z[3])
                Z([
                    [2, '+'],
                    [1, 'height:'],
                    [
                        [7],
                        [3, 'c']
                    ]
                ])
                Z([3, 'bg-fff fixed full-x pt20 px40 data-v-828431e6'])
                Z([3, 'bottom:0'])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([3, 'btn-confirm data-v-828431e6'])
                Z([3, 'hover-class-opa'])
                Z([3, 'color-fff t-fw-h font34 data-v-828431e6'])
                Z([3, '我已阅读并同意协议'])
                Z(z[3])
                Z([
                    [2, '+'],
                    [1, 'height:'],
                    [
                        [7],
                        [3, 'e']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_72_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_72_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_72 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_72 = true;
        var x = ['./pages/common/login/cancel-lation.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_72_1()
            var bK5C = _n('view')
            _rz(z, bK5C, 'class', 0, e, s, gg)
            var oL5C = _v()
            _(bK5C, oL5C)
            if (_oz(z, 1, e, s, gg)) {
                oL5C.wxVkey = 1
                var xM5C = _mz(z, 'navbar', ['bind:__l', 2, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(oL5C, xM5C)
            }
            var oN5C = _mz(z, 'rich-text', ['class', 6, 'nodes', 1], [], e, s, gg)
            _(bK5C, oN5C)
            var fO5C = _mz(z, 'view', ['class', 8, 'style', 1], [], e, s, gg)
            _(bK5C, fO5C)
            var cP5C = _mz(z, 'view', ['class', 10, 'style', 1], [], e, s, gg)
            _(bK5C, cP5C)
            var hQ5C = _mz(z, 'view', ['class', 12, 'style', 1], [], e, s, gg)
            var oR5C = _mz(z, 'view', ['bindtap', 14, 'class', 1, 'hoverClass', 2], [], e, s, gg)
            var cS5C = _n('text')
            _rz(z, cS5C, 'class', 17, e, s, gg)
            var oT5C = _oz(z, 18, e, s, gg)
            _(cS5C, oT5C)
            _(oR5C, cS5C)
            _(hQ5C, oR5C)
            var lU5C = _mz(z, 'view', ['class', 19, 'style', 1], [], e, s, gg)
            _(hQ5C, lU5C)
            _(bK5C, hQ5C)
            oL5C.wxXCkey = 1
            oL5C.wxXCkey = 3
            _(r, bK5C)
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
                g = "$gwx_XC_72";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_72();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/login/cancel-lation.wxml'] = [$gwx_XC_72, './pages/common/login/cancel-lation.wxml'];
else __wxAppCode__['pages/common/login/cancel-lation.wxml'] = $gwx_XC_72('./pages/common/login/cancel-lation.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/common/login/cancel-lation.wxss'] = setCssToHead(["body{overflow-y:auto}\n.", [1], "button-main.", [1], "data-v-828431e6{background-color:#5e11e8;border-radius:", [0, 43], ";height:", [0, 86], "}\n.", [1], "fixed.", [1], "data-v-828431e6{border-top:", [0, 1], " solid #f0f0f5}\n.", [1], "lh50.", [1], "data-v-828431e6{line-height:", [0, 50], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/common/login/cancel-lation.wxss:1:1)", {
        path: "./pages/common/login/cancel-lation.wxss"
    });
}