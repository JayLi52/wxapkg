$gwx_XC_31 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_31 || [];

        function gz$gwx_XC_31_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'workCover'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'f02c731a-0'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z(z[2])
                Z([3, 'workCover-img w-per'])
                Z([3, 'f02c731a-1'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'c']
                    ],
                    [1, '']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z([3, 'workCover-online'])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([3, 'workCover-icon'])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z(z[2])
                Z([3, 'f02c731a-2'])
                Z(z[13])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_31 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_31 = true;
        var x = ['./components/work-cover/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_31_1()
            var e8VB = _n('view')
            _rz(z, e8VB, 'class', 0, e, s, gg)
            var b9VB = _v()
            _(e8VB, b9VB)
            if (_oz(z, 1, e, s, gg)) {
                b9VB.wxVkey = 1
                var oBWB = _mz(z, 'my-cache-image-index', ['bind:__l', 2, 'uI', 1, 'uP', 2], [], e, s, gg)
                _(b9VB, oBWB)
            } else {
                b9VB.wxVkey = 2
                var fCWB = _mz(z, 'my-cache-image-index', ['bind:__l', 5, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(b9VB, fCWB)
            }
            var o0VB = _v()
            _(e8VB, o0VB)
            if (_oz(z, 9, e, s, gg)) {
                o0VB.wxVkey = 1
                var cDWB = _n('text')
                _rz(z, cDWB, 'class', 10, e, s, gg)
                _(o0VB, cDWB)
            }
            var xAWB = _v()
            _(e8VB, xAWB)
            if (_oz(z, 11, e, s, gg)) {
                xAWB.wxVkey = 1
                var hEWB = _n('view')
                _rz(z, hEWB, 'class', 12, e, s, gg)
                var oFWB = _v()
                _(hEWB, oFWB)
                if (_oz(z, 13, e, s, gg)) {
                    oFWB.wxVkey = 1
                    var cGWB = _mz(z, 'up-icon', ['bind:__l', 14, 'uI', 1, 'uP', 2], [], e, s, gg)
                    _(oFWB, cGWB)
                }
                oFWB.wxXCkey = 1
                oFWB.wxXCkey = 3
                _(xAWB, hEWB)
            }
            b9VB.wxXCkey = 1
            b9VB.wxXCkey = 3
            b9VB.wxXCkey = 3
            o0VB.wxXCkey = 1
            xAWB.wxXCkey = 1
            xAWB.wxXCkey = 3
            _(r, e8VB)
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
                g = "$gwx_XC_31";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_31();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/work-cover/index.wxml'] = [$gwx_XC_31, './components/work-cover/index.wxml'];
else __wxAppCode__['components/work-cover/index.wxml'] = $gwx_XC_31('./components/work-cover/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/work-cover/index.wxss'] = setCssToHead([".", [1], "workCover{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;height:100%;-webkit-justify-content:center;justify-content:center;margin:0;overflow:hidden;padding:0;position:relative;width:100%}\n.", [1], "workCover .", [1], "workCover-icon{background-color:rgba(0,0,0,.6);border-radius:50%;height:", [0, 40], ";padding-bottom:", [0, 0], ";padding-left:", [0, 5], ";position:absolute;right:", [0, 20], ";top:", [0, 20], ";width:", [0, 40], ";z-index:99}\n.", [1], "workCover .", [1], "workCover-icon,.", [1], "workCover .", [1], "workCover-video{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-justify-content:center;justify-content:center}\n.", [1], "workCover .", [1], "workCover-video{max-height:60vh;width:100%}\n.", [1], "workCover .", [1], "workCover-video .", [1], "workCover-video-m{height:100%;left:0;position:absolute;right:0;width:100%;z-index:10}\n.", [1], "workCover .", [1], "workCover-img{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex:auto;flex:auto;-webkit-flex-shrink:0;flex-shrink:0;height:100%;-webkit-justify-content:center;justify-content:center;margin:0;padding:0}\n.", [1], "workCover .", [1], "workCover-online{background-color:#4cd964;border:", [0, 2], " solid #fff;border-radius:50%;bottom:", [0, 0], ";height:", [0, 20], ";position:absolute;right:", [0, 2], ";width:", [0, 20], "}\n", ], undefined, {
        path: "./components/work-cover/index.wxss"
    });
}