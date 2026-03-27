$gwx_XC_110 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_110 || [];

        function gz$gwx_XC_110_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_110_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_110_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_110_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'set_info pt20 data-v-47d16e51'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'logo-img data-v-47d16e51'])
                Z([3, '47d16e51-0'])
                Z(z[1])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'c']
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
                Z([3, 'tab_item data-v-47d16e51'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'b']
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[2])
                Z([3, 'data-v-47d16e51'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'd']
                ])
                Z(z[12])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_110_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_110_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_110 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_110 = true;
        var x = ['./pages/my/settings/about.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_110_1()
            var oJTC = _n('view')
            _rz(z, oJTC, 'class', 0, e, s, gg)
            var lKTC = _v()
            _(oJTC, lKTC)
            if (_oz(z, 1, e, s, gg)) {
                lKTC.wxVkey = 1
                var aLTC = _mz(z, 'my-cache-image-index', ['bind:__l', 2, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(lKTC, aLTC)
            }
            var tMTC = _v()
            _(oJTC, tMTC)
            var eNTC = function(oPTC, bOTC, xQTC, gg) {
                var fSTC = _mz(z, 'view', ['bindtap', 9, 'class', 1], [], oPTC, bOTC, gg)
                var cTTC = _v()
                _(fSTC, cTTC)
                if (_oz(z, 11, oPTC, bOTC, gg)) {
                    cTTC.wxVkey = 1
                }
                var hUTC = _v()
                _(fSTC, hUTC)
                if (_oz(z, 12, oPTC, bOTC, gg)) {
                    hUTC.wxVkey = 1
                    var oVTC = _mz(z, 'up-icon', ['bind:__l', 13, 'class', 1, 'uI', 2, 'uP', 3], [], oPTC, bOTC, gg)
                    _(hUTC, oVTC)
                }
                cTTC.wxXCkey = 1
                hUTC.wxXCkey = 1
                hUTC.wxXCkey = 3
                _(xQTC, fSTC)
                return xQTC
            }
            tMTC.wxXCkey = 4
            _2z(z, 7, eNTC, e, s, gg, tMTC, 'item', 'index', 'e')
            lKTC.wxXCkey = 1
            lKTC.wxXCkey = 3
            _(r, oJTC)
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
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_110";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_110();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/settings/about.wxml'] = [$gwx_XC_110, './pages/my/settings/about.wxml'];
else __wxAppCode__['pages/my/settings/about.wxml'] = $gwx_XC_110('./pages/my/settings/about.wxml');;
__wxRoute = "pages/my/settings/about";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/settings/about.js";
define("pages/my/settings/about.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../common/vendor.js"),
        n = require("../../../utils/util.js");
    Array || (e.resolveComponent("my-cache-image-index") + e.resolveComponent("up-icon"))(), Math || (function() {
        return "../../../components/cache-image/index.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-icon/u-icon.js"
    })();
    var r = {
            __name: "about",
            setup: function(r) {
                var t = n.getEnv("OSS_URL"),
                    o = e.ref([{
                        name: "营业执照",
                        href: "".concat(t, "/images/business_license.jpg")
                    }, {
                        name: "电信经营许可",
                        href: "".concat(t, "/images/network_licenses.jpg")
                    }]);

                function i(e) {
                    var n = (new Date).getFullYear();
                    return e === n ? e : e + " - " + n
                }
                return function(n, r) {
                    return {
                        a: e.p({
                            imageUrl: "".concat(e.unref(t), "/images/logo-400x400.png"),
                            width: "120rpx",
                            height: "120rpx",
                            radius: "15rpx"
                        }),
                        b: e.t(e.index.getStorageSync("logDeviceId")),
                        c: e.f(e.unref(o), (function(n, r, t) {
                            return e.e({
                                a: e.t(n.name),
                                b: null == n ? void 0 : n.dis
                            }, (null == n ? void 0 : n.dis) ? {
                                c: e.t(n.dis)
                            } : {}, {
                                d: "47d16e51-1-" + t,
                                e: r,
                                f: e.o((function(r) {
                                    return t = n.href, void e.index.previewImage({
                                        current: 0,
                                        urls: [t]
                                    });
                                    var t
                                }), r)
                            })
                        })),
                        d: e.p({
                            name: "arrow-right",
                            size: "16",
                            color: "#999"
                        }),
                        e: e.o((function(e) {})),
                        f: e.t(i(2024))
                    }
                }
            }
        },
        t = e._export_sfc(r, [
            ["__scopeId", "data-v-47d16e51"]
        ]);
    wx.createPage(t);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/settings/about.js'
});
require("pages/my/settings/about.js");