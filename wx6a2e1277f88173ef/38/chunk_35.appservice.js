$gwx_XC_44 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_44 || [];

        function gz$gwx_XC_44_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 's']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'u-icon']
                            ],
                            [1, 'data-v-5c5a4f0d']
                        ],
                        [
                            [7],
                            [3, 't']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'k']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_44 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_44 = true;
        var x = ['./node-modules/uview-plus/components/u-icon/u-icon.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_44_1()
            var c1CB = _mz(z, 'view', ['bindtap', 0, 'class', 1], [], e, s, gg)
            var o2CB = _v()
            _(c1CB, o2CB)
            if (_oz(z, 2, e, s, gg)) {
                o2CB.wxVkey = 1
            }
            o2CB.wxXCkey = 1
            _(r, c1CB)
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
                g = "$gwx_XC_44";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_44();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-icon/u-icon.wxml'] = [$gwx_XC_44, './node-modules/uview-plus/components/u-icon/u-icon.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-icon/u-icon.wxml'] = $gwx_XC_44('./node-modules/uview-plus/components/u-icon/u-icon.wxml');;
__wxRoute = "node-modules/uview-plus/components/u-icon/u-icon";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/uview-plus/components/u-icon/u-icon.js";
define("node-modules/uview-plus/components/u-icon/u-icon.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../../common/vendor.js"),
        i = {
            name: "u-icon",
            beforeCreate: function() {
                t.fontUtil.params.loaded || t.fontUtil.loadFont()
            },
            data: function() {
                return {}
            },
            emits: ["click"],
            mixins: [t.mpMixin, t.mixin, t.props$1],
            computed: {
                uClasses: function() {
                    var i = [];
                    return i.push(this.customPrefix + "-" + this.name), "uicon" == this.customPrefix ? i.push("u-iconfont") : i.push(this.customPrefix), this.color && t.config.type.includes(this.color) && i.push("u-icon__icon--" + this.color), i
                },
                iconStyle: function() {
                    var i = {};
                    return i = {
                        fontSize: t.addUnit(this.size),
                        lineHeight: t.addUnit(this.size),
                        fontWeight: this.bold ? "bold" : "normal",
                        top: t.addUnit(this.top)
                    }, "uicon" !== this.customPrefix && (i.fontFamily = this.customPrefix), this.color && !t.config.type.includes(this.color) && (i.color = this.color), i
                },
                isImg: function() {
                    return -1 !== this.name.indexOf("/")
                },
                imgStyle: function() {
                    var i = {};
                    return i.width = this.width ? t.addUnit(this.width) : t.addUnit(this.size), i.height = this.height ? t.addUnit(this.height) : t.addUnit(this.size), i
                },
                icon: function() {
                    return "uicon" !== this.customPrefix ? t.config.customIcons[this.name] || this.name : t.icons["uicon-" + this.name] || this.name
                }
            },
            methods: {
                addStyle: t.addStyle,
                addUnit: t.addUnit,
                clickHandler: function(t) {
                    this.$emit("click", this.index, t), this.stop && this.preventEvent(t)
                }
            }
        },
        e = t._export_sfc(i, [
            ["render", function(i, e, n, o, s, c) {
                return t.e({
                    a: c.isImg
                }, c.isImg ? {
                    b: i.name,
                    c: i.imgMode,
                    d: t.s(c.imgStyle),
                    e: t.s(c.addStyle(i.customStyle))
                } : {
                    f: t.t(c.icon),
                    g: t.n(c.uClasses),
                    h: t.s(c.iconStyle),
                    i: t.s(c.addStyle(i.customStyle)),
                    j: i.hoverClass
                }, {
                    k: "" !== i.label
                }, "" !== i.label ? {
                    l: t.t(i.label),
                    m: i.labelColor,
                    n: c.addUnit(i.labelSize),
                    o: "right" == i.labelPos ? c.addUnit(i.space) : 0,
                    p: "bottom" == i.labelPos ? c.addUnit(i.space) : 0,
                    q: "left" == i.labelPos ? c.addUnit(i.space) : 0,
                    r: "top" == i.labelPos ? c.addUnit(i.space) : 0
                } : {}, {
                    s: t.o((function() {
                        return c.clickHandler && c.clickHandler.apply(c, arguments)
                    })),
                    t: t.n("u-icon--" + i.labelPos)
                })
            }],
            ["__scopeId", "data-v-5c5a4f0d"]
        ]);
    wx.createComponent(e);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/uview-plus/components/u-icon/u-icon.js'
});
require("node-modules/uview-plus/components/u-icon/u-icon.js");