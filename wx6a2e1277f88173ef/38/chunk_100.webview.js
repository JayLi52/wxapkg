$gwx_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];

        function gz$gwx_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'following data-v-7290cc75'])
                Z([3, 'list data-v-7290cc75'])
                Z([3, 'user'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'f'])
                Z([3, 'user-item data-v-7290cc75'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'c']
                ])
                Z([3, '__l'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'a']
                ])
                Z([3, 'data-v-7290cc75'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'b']
                ])
                Z(z[6])
                Z([3, 'info data-v-7290cc75'])
                Z([3, 'name data-v-7290cc75'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'd']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'user']
                    ],
                    [3, 'e']
                ])
                Z([3, 'follow-btn data-v-7290cc75'])
                Z([3, '解除拉黑'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z(z[7])
                Z(z[9])
                Z([3, '7290cc75-1'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[7])
                Z(z[9])
                Z([3, '7290cc75-2'])
                Z(z[23])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[7])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([3, 'r data-v-7290cc75'])
                Z([3, '7290cc75-3'])
                Z(z[28])
                Z([3, 'uModal'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
        var x = ['./pages/my/settings/blackList.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_3_1()
            var eJS = _n('view')
            _rz(z, eJS, 'class', 0, e, s, gg)
            var oNS = _n('view')
            _rz(z, oNS, 'class', 1, e, s, gg)
            var fOS = _v()
            _(oNS, fOS)
            var cPS = function(oRS, hQS, cSS, gg) {
                var lUS = _n('view')
                _rz(z, lUS, 'class', 5, oRS, hQS, gg)
                var aVS = _v()
                _(lUS, aVS)
                if (_oz(z, 6, oRS, hQS, gg)) {
                    aVS.wxVkey = 1
                    var tWS = _mz(z, 'my-cache-image-index', ['bind:__l', 7, 'bindtap', 1, 'class', 2, 'uI', 3, 'uP', 4], [], oRS, hQS, gg)
                    _(aVS, tWS)
                }
                var eXS = _n('view')
                _rz(z, eXS, 'class', 12, oRS, hQS, gg)
                var bYS = _n('text')
                _rz(z, bYS, 'class', 13, oRS, hQS, gg)
                var oZS = _oz(z, 14, oRS, hQS, gg)
                _(bYS, oZS)
                _(eXS, bYS)
                _(lUS, eXS)
                var x1S = _mz(z, 'button', ['bindtap', 15, 'class', 1], [], oRS, hQS, gg)
                var o2S = _oz(z, 17, oRS, hQS, gg)
                _(x1S, o2S)
                _(lUS, x1S)
                aVS.wxXCkey = 1
                aVS.wxXCkey = 3
                _(cSS, lUS)
                return cSS
            }
            fOS.wxXCkey = 4
            _2z(z, 3, cPS, e, s, gg, fOS, 'user', 'index', 'f')
            _(eJS, oNS)
            var bKS = _v()
            _(eJS, bKS)
            if (_oz(z, 18, e, s, gg)) {
                bKS.wxVkey = 1
                var f3S = _mz(z, 'up-empty', ['bind:__l', 19, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(bKS, f3S)
            }
            var oLS = _v()
            _(eJS, oLS)
            if (_oz(z, 23, e, s, gg)) {
                oLS.wxVkey = 1
                var c4S = _mz(z, 'up-loadmore', ['bind:__l', 24, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(oLS, c4S)
            }
            var xMS = _v()
            _(eJS, xMS)
            if (_oz(z, 28, e, s, gg)) {
                xMS.wxVkey = 1
                var h5S = _mz(z, 'up-modal', ['bind:__l', 29, 'bindcancel', 1, 'bindconfirm', 2, 'class', 3, 'uI', 4, 'uP', 5, 'uR', 6], [], e, s, gg)
                _(xMS, h5S)
            }
            bKS.wxXCkey = 1
            bKS.wxXCkey = 3
            oLS.wxXCkey = 1
            oLS.wxXCkey = 3
            xMS.wxXCkey = 1
            xMS.wxXCkey = 3
            _(r, eJS)
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
                g = "$gwx_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/settings/blackList.wxml'] = [$gwx_XC_3, './pages/my/settings/blackList.wxml'];
else __wxAppCode__['pages/my/settings/blackList.wxml'] = $gwx_XC_3('./pages/my/settings/blackList.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/my/settings/blackList.wxss'] = setCssToHead([".", [1], "following.", [1], "data-v-7290cc75{background:#f8f8f8;min-height:100vh;padding:", [0, 20], "}\n.", [1], "following .", [1], "list.", [1], "data-v-7290cc75{overflow-y:auto}\n.", [1], "user-item.", [1], "data-v-7290cc75{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 12], ";display:-webkit-flex;display:flex;margin-bottom:", [0, 20], ";padding:", [0, 20], "}\n.", [1], "user-item .", [1], "info.", [1], "data-v-7290cc75{-webkit-flex:1;flex:1;margin-left:", [0, 20], "}\n.", [1], "user-item .", [1], "info .", [1], "name.", [1], "data-v-7290cc75{color:#333;font-size:", [0, 28], ";font-weight:500}\n.", [1], "user-item .", [1], "info .", [1], "desc.", [1], "data-v-7290cc75{color:#999;font-size:", [0, 24], ";margin-top:", [0, 6], "}\n.", [1], "user-item .", [1], "follow-btn.", [1], "data-v-7290cc75{background:#ff4d4f;border:none;border-radius:", [0, 30], ";color:#fff;font-size:", [0, 20], ";outline:none;padding:", [0, 0], " ", [0, 20], ";white-space:nowrap;width:", [0, 120], "}\n", ], undefined, {
        path: "./pages/my/settings/blackList.wxss"
    });
}