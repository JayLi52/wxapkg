$gwx_XC_63 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_63 || [];

        function gz$gwx_XC_63_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_63_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'h']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [
                                    [5],
                                    [1, 'u-switch']
                                ],
                                [1, 'cursor-pointer']
                            ],
                            [1, 'data-v-bba54bb5']
                        ],
                        [
                            [7],
                            [3, 'e']
                        ]
                    ]
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [7],
                            [3, 'f']
                        ],
                        [1, ';']
                    ],
                    [
                        [7],
                        [3, 'g']
                    ]
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-bba54bb5'])
                Z([3, 'bba54bb5-0'])
                Z(z[3])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_63_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_63 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_63 = true;
        var x = ['./node-modules/uview-plus/components/u-switch/u-switch.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_63_1()
            var l5OB = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var a6OB = _v()
            _(l5OB, a6OB)
            if (_oz(z, 3, e, s, gg)) {
                a6OB.wxVkey = 1
                var t7OB = _mz(z, 'u-loading-icon', ['bind:__l', 4, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(a6OB, t7OB)
            }
            a6OB.wxXCkey = 1
            a6OB.wxXCkey = 3
            _(r, l5OB)
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
                g = "$gwx_XC_63";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_63();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-switch/u-switch.wxml'] = [$gwx_XC_63, './node-modules/uview-plus/components/u-switch/u-switch.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-switch/u-switch.wxml'] = $gwx_XC_63('./node-modules/uview-plus/components/u-switch/u-switch.wxml');;
__wxRoute = "node-modules/uview-plus/components/u-switch/u-switch";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/uview-plus/components/u-switch/u-switch.js";
define("node-modules/uview-plus/components/u-switch/u-switch.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var i = require("../../../../common/vendor.js"),
        t = {
            name: "u-switch",
            mixins: [i.mpMixin, i.mixin, i.props$29],
            watch: {
                modelValue: {
                    immediate: !0,
                    handler: function(i) {
                        i !== this.inactiveValue && this.activeValue
                    }
                }
            },
            data: function() {
                return {
                    bgColor: "#ffffff"
                }
            },
            computed: {
                isActive: function() {
                    return this.modelValue === this.activeValue
                },
                switchStyle: function() {
                    var t = {};
                    return t.width = i.addUnit(2 * this.size + 2), t.height = i.addUnit(Number(this.size) + 2), this.customInactiveColor && (t.borderColor = "rgba(0, 0, 0, 0)"), t.backgroundColor = this.isActive ? this.activeColor : this.inactiveColor, t
                },
                nodeStyle: function() {
                    var t = {};
                    t.width = i.addUnit(this.size - this.space), t.height = i.addUnit(this.size - this.space);
                    var e = this.isActive ? i.addUnit(this.space) : i.addUnit(this.size);
                    return t.transform = "translateX(-".concat(e, ")"), t
                },
                bgStyle: function() {
                    var t = {};
                    return t.width = i.addUnit(2 * Number(this.size) - this.size / 2), t.height = i.addUnit(this.size), t.backgroundColor = this.inactiveColor, t.transform = "scale(".concat(this.isActive ? 0 : 1, ")"), t
                },
                customInactiveColor: function() {
                    return "#fff" !== this.inactiveColor && "#ffffff" !== this.inactiveColor
                }
            },
            emits: ["update:modelValue", "change"],
            methods: {
                addStyle: i.addStyle,
                clickHandler: function() {
                    var i = this;
                    if (!this.disabled && !this.loading) {
                        var t = this.isActive ? this.inactiveValue : this.activeValue;
                        this.asyncChange || this.$emit("update:modelValue", t), this.$nextTick((function() {
                            i.$emit("change", t)
                        }))
                    }
                }
            }
        };
    Array || i.resolveComponent("u-loading-icon")(), Math;
    var e = i._export_sfc(t, [
        ["render", function(t, e, n, a, s, o) {
            return {
                a: i.s(o.bgStyle),
                b: i.p({
                    show: t.loading,
                    mode: "circle",
                    timingFunction: "linear",
                    color: t.modelValue ? t.activeColor : "#AAABAD",
                    size: .6 * t.size
                }),
                c: i.n(t.modelValue && "u-switch__node--on"),
                d: i.s(o.nodeStyle),
                e: i.n(t.disabled && "u-switch--disabled"),
                f: i.s(o.switchStyle),
                g: i.s(o.addStyle(t.customStyle)),
                h: i.o((function() {
                    return o.clickHandler && o.clickHandler.apply(o, arguments)
                }))
            }
        }],
        ["__scopeId", "data-v-bba54bb5"]
    ]);
    wx.createComponent(e);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/uview-plus/components/u-switch/u-switch.js'
});
require("node-modules/uview-plus/components/u-switch/u-switch.js");