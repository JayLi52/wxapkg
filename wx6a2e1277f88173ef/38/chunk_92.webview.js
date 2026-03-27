$gwx_XC_107 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_107 || [];

        function gz$gwx_XC_107_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'detail-qrcode data-v-e0d3d2d6'])
                Z([3, 'font24 color-999 data-v-e0d3d2d6'])
                Z([3, '请对方扫码验证'])
                Z([3, 'qrcode-img f-row f-jcc py16 my24 data-v-e0d3d2d6'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-e0d3d2d6'])
                Z([3, 'width:280rpx;height:280rpx'])
                Z([3, 'e0d3d2d6-0'])
                Z(z[5])
                Z([3, 'qrcode-code f-row f-jcb f-aic data-v-e0d3d2d6'])
                Z([3, 'f-row f-aic font26 data-v-e0d3d2d6'])
                Z(z[7])
                Z([a, [3, '券码：'],
                    [
                        [7],
                        [3, 'c']
                    ]
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[6])
                Z(z[7])
                Z([3, 'e0d3d2d6-1'])
                Z(z[15])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([3, 'ml10 font24 color-29e data-v-e0d3d2d6'])
                Z([3, '复制'])
                Z([3, 'font24 color-f70 data-v-e0d3d2d6'])
                Z([3, '待使用'])
                Z([3, 'f-row f-jcc py10 data-v-e0d3d2d6'])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, 'btn-orange data-v-e0d3d2d6'])
                Z([3, 'flex:0 0 60%'])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z(z[6])
                Z(z[7])
                Z([3, 'e0d3d2d6-2'])
                Z(z[29])
                Z([3, '扫码验证'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_107 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_107 = true;
        var x = ['./pages/my/order/components/detail-qrcode/detail-qrcode.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_107_1()
            var cAZE = _v()
            _(r, cAZE)
            if (_oz(z, 0, e, s, gg)) {
                cAZE.wxVkey = 1
                var oBZE = _n('view')
                _rz(z, oBZE, 'class', 1, e, s, gg)
                var lCZE = _n('view')
                _rz(z, lCZE, 'class', 2, e, s, gg)
                var aDZE = _oz(z, 3, e, s, gg)
                _(lCZE, aDZE)
                _(oBZE, lCZE)
                var tEZE = _n('view')
                _rz(z, tEZE, 'class', 4, e, s, gg)
                var eFZE = _v()
                _(tEZE, eFZE)
                if (_oz(z, 5, e, s, gg)) {
                    eFZE.wxVkey = 1
                    var bGZE = _mz(z, 'my-cache-image-index', ['bind:__l', 6, 'class', 1, 'style', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                    _(eFZE, bGZE)
                }
                eFZE.wxXCkey = 1
                eFZE.wxXCkey = 3
                _(oBZE, tEZE)
                var oHZE = _n('view')
                _rz(z, oHZE, 'class', 11, e, s, gg)
                var xIZE = _n('view')
                _rz(z, xIZE, 'class', 12, e, s, gg)
                var fKZE = _n('text')
                _rz(z, fKZE, 'class', 13, e, s, gg)
                var cLZE = _oz(z, 14, e, s, gg)
                _(fKZE, cLZE)
                _(xIZE, fKZE)
                var oJZE = _v()
                _(xIZE, oJZE)
                if (_oz(z, 15, e, s, gg)) {
                    oJZE.wxVkey = 1
                    var hMZE = _mz(z, 'up-copy', ['bind:__l', 16, 'class', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                    var oNZE = _n('text')
                    _rz(z, oNZE, 'class', 21, e, s, gg)
                    var cOZE = _oz(z, 22, e, s, gg)
                    _(oNZE, cOZE)
                    _(hMZE, oNZE)
                    _(oJZE, hMZE)
                }
                oJZE.wxXCkey = 1
                oJZE.wxXCkey = 3
                _(oHZE, xIZE)
                var oPZE = _n('view')
                _rz(z, oPZE, 'class', 23, e, s, gg)
                var lQZE = _oz(z, 24, e, s, gg)
                _(oPZE, lQZE)
                _(oHZE, oPZE)
                _(oBZE, oHZE)
                _(cAZE, oBZE)
            } else {
                cAZE.wxVkey = 2
                var aRZE = _n('view')
                _rz(z, aRZE, 'class', 25, e, s, gg)
                var tSZE = _mz(z, 'view', ['bindtap', 26, 'class', 1, 'style', 2], [], e, s, gg)
                var eTZE = _v()
                _(tSZE, eTZE)
                if (_oz(z, 29, e, s, gg)) {
                    eTZE.wxVkey = 1
                    var bUZE = _mz(z, 'up-icon', ['bind:__l', 30, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(eTZE, bUZE)
                }
                var oVZE = _oz(z, 34, e, s, gg)
                _(tSZE, oVZE)
                eTZE.wxXCkey = 1
                eTZE.wxXCkey = 3
                _(aRZE, tSZE)
                _(cAZE, aRZE)
            }
            cAZE.wxXCkey = 1
            cAZE.wxXCkey = 3
            cAZE.wxXCkey = 3
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
                g = "$gwx_XC_107";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_107();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/order/components/detail-qrcode/detail-qrcode.wxml'] = [$gwx_XC_107, './pages/my/order/components/detail-qrcode/detail-qrcode.wxml'];
else __wxAppCode__['pages/my/order/components/detail-qrcode/detail-qrcode.wxml'] = $gwx_XC_107('./pages/my/order/components/detail-qrcode/detail-qrcode.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/my/order/components/detail-qrcode/detail-qrcode.wxss'] = setCssToHead([".", [1], "detail-qrcode .", [1], "qrcode-code.", [1], "data-v-e0d3d2d6:after,.", [1], "detail-qrcode .", [1], "qrcode-code.", [1], "data-v-e0d3d2d6:before,.", [1], "detail-qrcode .", [1], "qrcode-img.", [1], "data-v-e0d3d2d6:after,.", [1], "detail-qrcode .", [1], "qrcode-img.", [1], "data-v-e0d3d2d6:before{background-color:#f8f8f8;border-radius:50%;content:\x22\x22;height:", [0, 30], ";left:", [0, -40], ";position:absolute;top:", [0, -16], ";width:", [0, 30], "}\n.", [1], "detail-qrcode .", [1], "qrcode-img.", [1], "data-v-e0d3d2d6{border-bottom:", [0, 2], " dashed #ddd;border-top:", [0, 2], " dashed #ddd;position:relative}\n.", [1], "detail-qrcode .", [1], "qrcode-img.", [1], "data-v-e0d3d2d6:after{left:auto;right:", [0, -40], "}\n.", [1], "detail-qrcode .", [1], "qrcode-code.", [1], "data-v-e0d3d2d6{position:relative}\n.", [1], "detail-qrcode .", [1], "qrcode-code.", [1], "data-v-e0d3d2d6:before{top:", [0, -36], "}\n.", [1], "detail-qrcode .", [1], "qrcode-code.", [1], "data-v-e0d3d2d6:after{left:auto;right:", [0, -40], ";top:", [0, -36], "}\n", ], undefined, {
        path: "./pages/my/order/components/detail-qrcode/detail-qrcode.wxss"
    });
}