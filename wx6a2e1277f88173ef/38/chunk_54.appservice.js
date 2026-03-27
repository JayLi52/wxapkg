$gwx_XC_65 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_65 || [];

        function gz$gwx_XC_65_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_65_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'u-textarea']
                            ],
                            [1, 'data-v-7e9a04ee']
                        ],
                        [
                            [7],
                            [3, 'F']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'G']
                ])
                Z([
                    [7],
                    [3, 'r0']
                ])
                Z([
                    [7],
                    [3, 'B']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_65_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_65 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_65 = true;
        var x = ['./node-modules/uview-plus/components/u-textarea/u-textarea.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_65_1()
            var hSPB = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var oTPB = _v()
            _(hSPB, oTPB)
            if (_oz(z, 2, e, s, gg)) {
                oTPB.wxVkey = 1
            }
            var cUPB = _v()
            _(hSPB, cUPB)
            if (_oz(z, 3, e, s, gg)) {
                cUPB.wxVkey = 1
            }
            oTPB.wxXCkey = 1
            cUPB.wxXCkey = 1
            _(r, hSPB)
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
                g = "$gwx_XC_65";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_65();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-textarea/u-textarea.wxml'] = [$gwx_XC_65, './node-modules/uview-plus/components/u-textarea/u-textarea.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-textarea/u-textarea.wxml'] = $gwx_XC_65('./node-modules/uview-plus/components/u-textarea/u-textarea.wxml');;
__wxRoute = "node-modules/uview-plus/components/u-textarea/u-textarea";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/uview-plus/components/u-textarea/u-textarea.js";
define("node-modules/uview-plus/components/u-textarea/u-textarea.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../../common/vendor.js"),
        n = {
            name: "u-textarea",
            mixins: [e.mpMixin, e.mixin, e.props$9],
            data: function() {
                return {
                    innerValue: "",
                    focused: !1,
                    firstChange: !0,
                    changeFromInner: !1,
                    innerFormatter: function(e) {
                        return e
                    }
                }
            },
            created: function() {},
            watch: {
                modelValue: {
                    immediate: !0,
                    handler: function(e, n) {
                        this.innerValue = e, this.firstChange = !1, this.changeFromInner = !1
                    }
                }
            },
            computed: {
                fieldStyle: function() {
                    var n = {};
                    return n.height = e.addUnit(this.height), this.autoHeight && (n.height = "auto", n.minHeight = e.addUnit(this.height)), n
                },
                textareaClass: function() {
                    var e = [],
                        n = this.border,
                        t = this.disabled;
                    return "surround" === n && (e = e.concat(["u-border", "u-textarea--radius"])), "bottom" === n && (e = e.concat(["u-border-bottom", "u-textarea--no-radius"])), t && e.push("u-textarea--disabled"), e.join(" ")
                },
                textareaStyle: function() {
                    return e.deepMerge({}, e.addStyle(this.customStyle))
                }
            },
            emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
            methods: {
                addStyle: e.addStyle,
                addUnit: e.addUnit,
                setFormatter: function(e) {
                    this.innerFormatter = e
                },
                onFocus: function(e) {
                    this.$emit("focus", e)
                },
                onBlur: function(n) {
                    this.$emit("blur", n), e.formValidate(this, "blur")
                },
                onLinechange: function(e) {
                    this.$emit("linechange", e)
                },
                onInput: function(e) {
                    var n = this,
                        t = (e.detail || {}).value,
                        i = void 0 === t ? "" : t,
                        o = (this.formatter || this.innerFormatter)(i);
                    this.innerValue = i, this.$nextTick((function() {
                        n.innerValue = o, n.valueChange()
                    }))
                },
                valueChange: function() {
                    var n = this,
                        t = this.innerValue;
                    this.$nextTick((function() {
                        n.$emit("update:modelValue", t), n.changeFromInner = !0, n.$emit("change", t), e.formValidate(n, "change")
                    }))
                },
                onConfirm: function(e) {
                    this.$emit("confirm", e)
                },
                onKeyboardheightchange: function(e) {
                    this.$emit("keyboardheightchange", e)
                }
            }
        },
        t = e._export_sfc(n, [
            ["render", function(n, t, i, o, a, r) {
                return e.e({
                    a: a.innerValue,
                    b: e.s(r.fieldStyle),
                    c: n.placeholder,
                    d: r.addStyle(n.placeholderStyle, "string" == typeof n.placeholderStyle ? "string" : "object"),
                    e: n.placeholderClass,
                    f: n.disabled,
                    g: n.focus,
                    h: n.autoHeight,
                    i: n.fixed,
                    j: n.cursorSpacing,
                    k: n.cursor,
                    l: n.showConfirmBar,
                    m: n.selectionStart,
                    n: n.selectionEnd,
                    o: n.adjustPosition,
                    p: n.disableDefaultPadding,
                    q: n.holdKeyboard,
                    r: n.maxlength,
                    s: n.confirmType,
                    t: n.ignoreCompositionEvent,
                    v: e.o((function() {
                        return r.onFocus && r.onFocus.apply(r, arguments)
                    })),
                    w: e.o((function() {
                        return r.onBlur && r.onBlur.apply(r, arguments)
                    })),
                    x: e.o((function() {
                        return r.onLinechange && r.onLinechange.apply(r, arguments)
                    })),
                    y: e.o((function() {
                        return r.onInput && r.onInput.apply(r, arguments)
                    })),
                    z: e.o((function() {
                        return r.onConfirm && r.onConfirm.apply(r, arguments)
                    })),
                    A: e.o((function() {
                        return r.onKeyboardheightchange && r.onKeyboardheightchange.apply(r, arguments)
                    })),
                    B: n.count
                }, n.count ? {
                    C: e.t(a.innerValue.length),
                    D: e.t(n.maxlength),
                    E: n.disabled ? "transparent" : "#fff"
                } : {}, {
                    F: e.n(r.textareaClass),
                    G: e.s(r.textareaStyle)
                })
            }],
            ["__scopeId", "data-v-7e9a04ee"]
        ]);
    wx.createComponent(t);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/uview-plus/components/u-textarea/u-textarea.js'
});
require("node-modules/uview-plus/components/u-textarea/u-textarea.js");