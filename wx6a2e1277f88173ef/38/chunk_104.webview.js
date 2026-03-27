$gwx_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];

        function gz$gwx_XC_7_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'platform-entry data-v-910ad3cb'])
                Z([3, 'entry-categories data-v-910ad3cb'])
                Z([3, 'title data-v-910ad3cb'])
                Z([3, '选择入驻类型'])
                Z([3, 'category-list data-v-910ad3cb'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'e'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'f']
                ])
                Z([3, 'category-item data-v-910ad3cb'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([3, 'category-icon data-v-910ad3cb'])
                Z([3, 'border-radius:12rpx'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ])
                Z(z[10])
                Z([3, 'category-name data-v-910ad3cb'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'c']
                ]])
                Z([3, 'category-desc data-v-910ad3cb'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'd']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
        var x = ['./pages/my/settled-platform/settled-cate.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_7_1()
            var cWV = _n('view')
            _rz(z, cWV, 'class', 0, e, s, gg)
            var oXV = _n('view')
            _rz(z, oXV, 'class', 1, e, s, gg)
            var lYV = _n('view')
            _rz(z, lYV, 'class', 2, e, s, gg)
            var aZV = _oz(z, 3, e, s, gg)
            _(lYV, aZV)
            _(oXV, lYV)
            var t1V = _n('view')
            _rz(z, t1V, 'class', 4, e, s, gg)
            var e2V = _v()
            _(t1V, e2V)
            var b3V = function(x5V, o4V, o6V, gg) {
                var c8V = _mz(z, 'view', ['bindtap', 8, 'class', 1], [], x5V, o4V, gg)
                var h9V = _v()
                _(c8V, h9V)
                if (_oz(z, 10, x5V, o4V, gg)) {
                    h9V.wxVkey = 1
                    var o0V = _mz(z, 'my-cache-image-index', ['bind:__l', 11, 'class', 1, 'style', 2, 'uI', 3, 'uP', 4], [], x5V, o4V, gg)
                    _(h9V, o0V)
                }
                var cAW = _n('text')
                _rz(z, cAW, 'class', 16, x5V, o4V, gg)
                var oBW = _oz(z, 17, x5V, o4V, gg)
                _(cAW, oBW)
                _(c8V, cAW)
                var lCW = _n('text')
                _rz(z, lCW, 'class', 18, x5V, o4V, gg)
                var aDW = _oz(z, 19, x5V, o4V, gg)
                _(lCW, aDW)
                _(c8V, lCW)
                h9V.wxXCkey = 1
                h9V.wxXCkey = 3
                _(o6V, c8V)
                return o6V
            }
            e2V.wxXCkey = 4
            _2z(z, 6, b3V, e, s, gg, e2V, 'item', 'index', 'e')
            _(oXV, t1V)
            _(cWV, oXV)
            _(r, cWV)
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
                g = "$gwx_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/settled-platform/settled-cate.wxml'] = [$gwx_XC_7, './pages/my/settled-platform/settled-cate.wxml'];
else __wxAppCode__['pages/my/settled-platform/settled-cate.wxml'] = $gwx_XC_7('./pages/my/settled-platform/settled-cate.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/my/settled-platform/settled-cate.wxss'] = setCssToHead([".", [1], "platform-entry.", [1], "data-v-910ad3cb{background-color:#f8f8f8;min-height:100vh}\n.", [1], "platform-entry .", [1], "banner.", [1], "data-v-910ad3cb{height:", [0, 300], ";width:100%}\n.", [1], "platform-entry .", [1], "banner wx-image.", [1], "data-v-910ad3cb{height:100%;width:100%}\n.", [1], "platform-entry .", [1], "entry-categories.", [1], "data-v-910ad3cb{padding:", [0, 30], "}\n.", [1], "platform-entry .", [1], "entry-categories .", [1], "title.", [1], "data-v-910ad3cb{color:#333;font-size:", [0, 32], ";font-weight:700;margin-bottom:", [0, 30], "}\n.", [1], "platform-entry .", [1], "entry-categories .", [1], "category-list .", [1], "category-item.", [1], "data-v-910ad3cb{-webkit-align-items:center;align-items:center;background-color:#fff;border-radius:", [0, 12], ";display:-webkit-flex;display:flex;margin-bottom:", [0, 20], ";padding:", [0, 30], ";position:relative}\n.", [1], "platform-entry .", [1], "entry-categories .", [1], "category-list .", [1], "category-item.", [1], "data-v-910ad3cb:active{opacity:.8}\n.", [1], "platform-entry .", [1], "entry-categories .", [1], "category-list .", [1], "category-item .", [1], "category-icon.", [1], "data-v-910ad3cb{height:", [0, 80], ";margin-right:", [0, 20], ";width:", [0, 80], "}\n.", [1], "platform-entry .", [1], "entry-categories .", [1], "category-list .", [1], "category-item .", [1], "category-name.", [1], "data-v-910ad3cb{color:#333;font-size:", [0, 28], ";font-weight:700}\n.", [1], "platform-entry .", [1], "entry-categories .", [1], "category-list .", [1], "category-item .", [1], "category-desc.", [1], "data-v-910ad3cb{color:#999;font-size:", [0, 24], ";margin-left:", [0, 20], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/my/settled-platform/settled-cate.wxss:1:164)", {
        path: "./pages/my/settled-platform/settled-cate.wxss"
    });
}