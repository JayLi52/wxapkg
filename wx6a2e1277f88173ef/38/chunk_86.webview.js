$gwx_XC_100 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_100 || [];

        function gz$gwx_XC_100_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_100_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_100_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_100_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'SelfIntroduction'])
                Z([3, 'SelfIntroduction-content'])
                Z([
                    [7],
                    [3, 'r0']
                ])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [7],
                                [3, 'b']
                            ]
                        ],
                        [1, 'SelfIntroduction-content-textarea']
                    ]
                ])
                Z([3, '100'])
                Z([3, '请输入内容'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'num'])
                Z([3, '最多允许'])
                Z([
                    [2, '+'],
                    [1, 'color:'],
                    [
                        [7],
                        [3, 'e']
                    ]
                ])
                Z([a, [
                    [7],
                    [3, 'd']
                ]])
                Z([a, [3, '/ 4 次换行, 字数限制 '],
                    [
                        [7],
                        [3, 'f']
                    ],
                    [3, ' / 100']
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([3, '__l'])
                Z([3, '51fb857a-0'])
                Z(z[13])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[14])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z([3, '51fb857a-1,51fb857a-0'])
                Z(z[18])
                Z(z[17])
                Z([3, '确定'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_100_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_100_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_100 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_100 = true;
        var x = ['./pages/my/edit-profile/input-signatures.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_100_1()
            var bSNE = _n('view')
            _rz(z, bSNE, 'class', 0, e, s, gg)
            var oTNE = _n('view')
            _rz(z, oTNE, 'class', 1, e, s, gg)
            var xUNE = _v()
            _(oTNE, xUNE)
            if (_oz(z, 2, e, s, gg)) {
                xUNE.wxVkey = 1
                var fWNE = _mz(z, 'textarea', ['count', -1, 'bindinput', 3, 'class', 1, 'maxlength', 2, 'placeholder', 3, 'value', 4], [], e, s, gg)
                _(xUNE, fWNE)
            }
            var cXNE = _n('view')
            _rz(z, cXNE, 'class', 8, e, s, gg)
            var hYNE = _oz(z, 9, e, s, gg)
            _(cXNE, hYNE)
            var oZNE = _n('text')
            _rz(z, oZNE, 'style', 10, e, s, gg)
            var c1NE = _oz(z, 11, e, s, gg)
            _(oZNE, c1NE)
            _(cXNE, oZNE)
            var o2NE = _oz(z, 12, e, s, gg)
            _(cXNE, o2NE)
            _(oTNE, cXNE)
            var oVNE = _v()
            _(oTNE, oVNE)
            if (_oz(z, 13, e, s, gg)) {
                oVNE.wxVkey = 1
                var l3NE = _mz(z, 'l-status-bar', ['bind:__l', 14, 'uI', 1, 'uP', 2, 'uS', 3], [], e, s, gg)
                var a4NE = _v()
                _(l3NE, a4NE)
                if (_oz(z, 18, e, s, gg)) {
                    a4NE.wxVkey = 1
                    var t5NE = _mz(z, 'base-button', ['bind:__l', 19, 'bindclick', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                    var e6NE = _oz(z, 24, e, s, gg)
                    _(t5NE, e6NE)
                    _(a4NE, t5NE)
                }
                a4NE.wxXCkey = 1
                a4NE.wxXCkey = 3
                _(oVNE, l3NE)
            }
            xUNE.wxXCkey = 1
            oVNE.wxXCkey = 1
            oVNE.wxXCkey = 3
            _(bSNE, oTNE)
            _(r, bSNE)
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
                g = "$gwx_XC_100";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_100();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/edit-profile/input-signatures.wxml'] = [$gwx_XC_100, './pages/my/edit-profile/input-signatures.wxml'];
else __wxAppCode__['pages/my/edit-profile/input-signatures.wxml'] = $gwx_XC_100('./pages/my/edit-profile/input-signatures.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/my/edit-profile/input-signatures.wxss'] = setCssToHead([".", [1], "SelfIntroduction{background-color:rgba(0,0,0,.05);height:100vh;width:100%}\n.", [1], "SelfIntroduction .", [1], "preview{color:#ff4500;font-size:", [0, 28], ";height:", [0, 50], ";padding:", [0, 20], "}\n.", [1], "SelfIntroduction .", [1], "SelfIntroduction-content{padding:", [0, 20], "}\n.", [1], "SelfIntroduction .", [1], "SelfIntroduction-content .", [1], "warning{border:", [0, 1], " solid #f15}\n.", [1], "SelfIntroduction .", [1], "SelfIntroduction-content .", [1], "SelfIntroduction-content-textarea{background-color:#fff;border-radius:", [0, 30], ";box-sizing:border-box;line-height:", [0, 35], ";padding:", [0, 20], ";width:100%}\n.", [1], "SelfIntroduction .", [1], "SelfIntroduction-content .", [1], "num{font-size:", [0, 22], ";margin-top:", [0, 20], ";text-align:right;width:100%}\n.", [1], "SelfIntroduction .", [1], "SelfIntroduction-content .", [1], "btun{-webkit-align-items:center;align-items:center;background:linear-gradient(90deg,#55b6f2,#af8cf8);border-radius:", [0, 40], ";color:#fff;display:-webkit-flex;display:flex;height:", [0, 80], ";-webkit-justify-content:center;justify-content:center;margin-top:", [0, 40], ";width:100%}\n", ], undefined, {
        path: "./pages/my/edit-profile/input-signatures.wxss"
    });
}