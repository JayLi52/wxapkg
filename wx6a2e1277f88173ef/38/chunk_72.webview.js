$gwx_XC_85 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_85 || [];

        function gz$gwx_XC_85_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_85_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'comment data-v-edeefcfe'])
                Z([3, 'data-v-edeefcfe'])
                Z([3, 'padding:0 32rpx'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z(z[1])
                Z([3, 'edeefcfe-0'])
                Z(z[3])
                Z([3, 'comment-lists data-v-edeefcfe'])
                Z([
                    [7],
                    [3, 'k']
                ])
                Z(z[4])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z(z[1])
                Z([3, 'edeefcfe-1'])
                Z(z[10])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z(z[1])
                Z([3, 'height:24rpx'])
                Z([3, 'comment-list data-v-edeefcfe'])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[4])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z(z[1])
                Z([3, 'edeefcfe-2,edeefcfe-1'])
                Z(z[21])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[4])
                Z(z[1])
                Z([3, 'edeefcfe-3,edeefcfe-1'])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[1])
                Z([3, 'text-align:center;color:#50b8f2'])
                Z([3, '检查网络正常后请下拉重试'])
                Z(z[4])
                Z(z[1])
                Z([3, 'edeefcfe-4,edeefcfe-1'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_85_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_85 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_85 = true;
        var x = ['./pages/home/details/comment/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_85_1()
            var oZXD = _n('view')
            _rz(z, oZXD, 'class', 0, e, s, gg)
            var l1XD = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
            var a2XD = _v()
            _(l1XD, a2XD)
            if (_oz(z, 3, e, s, gg)) {
                a2XD.wxVkey = 1
                var t3XD = _mz(z, 'makeup-category', ['bind:__l', 4, 'bindselectMakeup', 1, 'class', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                _(a2XD, t3XD)
            }
            a2XD.wxXCkey = 1
            a2XD.wxXCkey = 3
            _(oZXD, l1XD)
            var e4XD = _n('view')
            _rz(z, e4XD, 'class', 9, e, s, gg)
            var b5XD = _v()
            _(e4XD, b5XD)
            if (_oz(z, 10, e, s, gg)) {
                b5XD.wxVkey = 1
                var o6XD = _mz(z, 'my-list-index', ['bind:__l', 11, 'bindonRefresh', 1, 'bindscrolltolower', 2, 'class', 3, 'uI', 4, 'uP', 5, 'uS', 6], [], e, s, gg)
                var f9XD = _mz(z, 'view', ['class', 18, 'style', 1], [], e, s, gg)
                _(o6XD, f9XD)
                var c0XD = _n('view')
                _rz(z, c0XD, 'class', 20, e, s, gg)
                var hAYD = _v()
                _(c0XD, hAYD)
                if (_oz(z, 21, e, s, gg)) {
                    hAYD.wxVkey = 1
                    var oBYD = _mz(z, 'comment-item', ['bind:__l', 22, 'bindlabelChange', 1, 'class', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                    _(hAYD, oBYD)
                }
                hAYD.wxXCkey = 1
                hAYD.wxXCkey = 3
                _(o6XD, c0XD)
                var x7XD = _v()
                _(o6XD, x7XD)
                if (_oz(z, 27, e, s, gg)) {
                    x7XD.wxVkey = 1
                    var cCYD = _mz(z, 'up-loadmore', ['bind:__l', 28, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(x7XD, cCYD)
                }
                var o8XD = _v()
                _(o6XD, o8XD)
                if (_oz(z, 32, e, s, gg)) {
                    o8XD.wxVkey = 1
                    var oDYD = _mz(z, 'view', ['bindtap', 33, 'class', 1, 'style', 2], [], e, s, gg)
                    var lEYD = _oz(z, 36, e, s, gg)
                    _(oDYD, lEYD)
                    _(o8XD, oDYD)
                }
                var aFYD = _mz(z, 'up-safe-bottom', ['bind:__l', 37, 'class', 1, 'uI', 2], [], e, s, gg)
                _(o6XD, aFYD)
                x7XD.wxXCkey = 1
                x7XD.wxXCkey = 3
                o8XD.wxXCkey = 1
                _(b5XD, o6XD)
            }
            b5XD.wxXCkey = 1
            b5XD.wxXCkey = 3
            _(oZXD, e4XD)
            _(r, oZXD)
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
                g = "$gwx_XC_85";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_85();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/details/comment/index.wxml'] = [$gwx_XC_85, './pages/home/details/comment/index.wxml'];
else __wxAppCode__['pages/home/details/comment/index.wxml'] = $gwx_XC_85('./pages/home/details/comment/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/home/details/comment/index.wxss'] = setCssToHead([".", [1], "comment.", [1], "data-v-edeefcfe{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100vh;width:100%}\n.", [1], "comment .", [1], "comment-lists.", [1], "data-v-edeefcfe{background:#fff;-webkit-flex:1;flex:1;height:calc(100% - ", [0, 118], ")}\n.", [1], "comment .", [1], "comment-lists .", [1], "comment-list.", [1], "data-v-edeefcfe{padding:0 ", [0, 32], "}\n", ], undefined, {
        path: "./pages/home/details/comment/index.wxss"
    });
}