$gwx_XC_57 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_57 || [];

        function gz$gwx_XC_57_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'm']
                ])
                Z([3, 'u-qrcode data-v-7567110d'])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'width:'],
                            [
                                [7],
                                [3, 'k']
                            ]
                        ],
                        [1, ';']
                    ],
                    [
                        [2, '+'],
                        [1, 'height:'],
                        [
                            [7],
                            [3, 'l']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z([3, 'u-qrcode__content data-v-7567110d'])
                Z([
                    [7],
                    [3, 'r0']
                ])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-7567110d'])
                Z([3, '7567110d-0'])
                Z(z[8])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_57 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_57 = true;
        var x = ['./node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_57_1()
            var t3LB = _mz(z, 'view', ['bindlongpress', 0, 'class', 1, 'id', 1, 'style', 2], [], e, s, gg)
            var e4LB = _mz(z, 'view', ['bindtap', 4, 'class', 1], [], e, s, gg)
            var b5LB = _v()
            _(e4LB, b5LB)
            if (_oz(z, 6, e, s, gg)) {
                b5LB.wxVkey = 1
            }
            var o6LB = _v()
            _(e4LB, o6LB)
            if (_oz(z, 7, e, s, gg)) {
                o6LB.wxVkey = 1
                var x7LB = _v()
                _(o6LB, x7LB)
                if (_oz(z, 8, e, s, gg)) {
                    x7LB.wxVkey = 1
                    var o8LB = _mz(z, 'up-loading-icon', ['bind:__l', 9, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(x7LB, o8LB)
                }
                x7LB.wxXCkey = 1
                x7LB.wxXCkey = 3
            }
            b5LB.wxXCkey = 1
            o6LB.wxXCkey = 1
            o6LB.wxXCkey = 3
            _(t3LB, e4LB)
            _(r, t3LB)
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
                g = "$gwx_XC_57";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_57();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml'] = [$gwx_XC_57, './node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml'] = $gwx_XC_57('./node-modules/uview-plus/components/u-qrcode/u-qrcode.wxml');;
__wxRoute = "node-modules/uview-plus/components/u-qrcode/u-qrcode";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/uview-plus/components/u-qrcode/u-qrcode.js";
define("node-modules/uview-plus/components/u-qrcode/u-qrcode.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e, t = require("../../../../@babel/runtime/helpers/typeof"),
        n = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
        o = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
        i = require("../../../../common/vendor.js"),
        r = {
            name: "u-qrcode",
            props: {
                cid: {
                    type: String,
                    default: function() {
                        return "u-qrcode-canvas".concat(Math.floor(1e6 * Math.random()))
                    }
                },
                size: {
                    type: Number,
                    default: 200
                },
                unit: {
                    type: String,
                    default: "px"
                },
                show: {
                    type: Boolean,
                    default: !0
                },
                val: {
                    type: String,
                    default: ""
                },
                background: {
                    type: String,
                    default: "#ffffff"
                },
                foreground: {
                    type: String,
                    default: "#000000"
                },
                pdground: {
                    type: String,
                    default: "#000000"
                },
                icon: {
                    type: String,
                    default: ""
                },
                iconSize: {
                    type: Number,
                    default: 40
                },
                lv: {
                    type: Number,
                    default: 3
                },
                onval: {
                    type: Boolean,
                    default: !0
                },
                loadMake: {
                    type: Boolean,
                    default: !0
                },
                usingComponents: {
                    type: Boolean,
                    default: !0
                },
                showLoading: {
                    type: Boolean,
                    default: !0
                },
                loadingText: {
                    type: String,
                    default: "生成中"
                },
                allowPreview: {
                    type: Boolean,
                    default: !1
                },
                useRootHeightAndWidth: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                }
            },
            emits: ["result", "longpressCallback"],
            data: function() {
                return {
                    loading: !1,
                    result: "",
                    popupShow: !1,
                    list: [{
                        name: "保存二维码"
                    }],
                    rootId: "rootId".concat(Number(100 * Math.random()).toFixed(0)),
                    ganvas: null,
                    context: "",
                    canvasObj: {},
                    sizeLocal: this.size,
                    ctx: null,
                    canvas: null
                }
            },
            mounted: function() {
                var e = this;
                return o(n().mark((function t() {
                    return n().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (t.t0 = e.useRootHeightAndWidth, !t.t0) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 4, e.setNewSize();
                            case 4:
                                e.loadMake && (e._empty(e.val) || setTimeout((function() {
                                    setTimeout((function() {
                                        e._makeCode()
                                    }))
                                }), 0));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))()
            },
            methods: {
                _makeCode: function() {
                    var t = this;
                    this._empty(this.val) ? i.index.showToast({
                        title: "二维码内容不能为空",
                        icon: "none",
                        duration: 2e3
                    }) : (this.loading = !0, e = new i.QRCode({
                        context: t,
                        canvasId: t.cid,
                        nvueContext: t.context,
                        usingComponents: t.usingComponents,
                        showLoading: !1,
                        loadingText: t.loadingText,
                        text: t.val,
                        size: t.sizeLocal,
                        background: t.background,
                        foreground: t.foreground,
                        pdground: t.pdground,
                        correctLevel: t.lv,
                        image: t.icon,
                        imageSize: t.iconSize,
                        cbResult: function(e) {
                            t._result(e)
                        }
                    }))
                },
                _clearCode: function() {
                    this._result(""), e.clear()
                },
                _saveCode: function() {
                    "" != this.result && i.index.saveImageToPhotosAlbum({
                        filePath: this.result,
                        success: function() {
                            i.index.showToast({
                                title: "二维码保存成功",
                                icon: "success",
                                duration: 2e3
                            })
                        }
                    })
                },
                preview: function(e) {
                    this.allowPreview && i.index.previewImage({
                        urls: [this.result],
                        longPressActions: {
                            itemList: ["保存二维码图片"],
                            success: function(e) {
                                0 === e.tapIndex && that._saveCode()
                            },
                            fail: function(e) {
                                console.log(e.errMsg)
                            }
                        }
                    }), this.$emit("preview", {
                        url: this.result
                    }, e)
                },
                toTempFilePath: function(e) {
                    var t = this;
                    return o(n().mark((function o() {
                        var r, a, s;
                        return n().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r = e.success, a = e.fail, !t.context) {
                                        n.next = 5;
                                        break
                                    }
                                    t.ctx.toTempFilePath(0, 0, t.sizeLocal, t.sizeLocal, t.sizeLocal, t.sizeLocal, "", 1, (function(e) {
                                        r(e)
                                    })), n.next = 9;
                                    break;
                                case 5:
                                    return n.next = 7, t.getNode(t.cid, !0);
                                case 7:
                                    s = n.sent, i.index.canvasToTempFilePath({
                                        canvas: s,
                                        success: function(e) {
                                            r(e)
                                        },
                                        fail: a
                                    }, t);
                                case 9:
                                case "end":
                                    return n.stop()
                            }
                        }), o)
                    })))()
                },
                longpress: function() {
                    var e = this;
                    return o(n().mark((function t() {
                        return n().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.toTempFilePath({
                                        success: function(t) {
                                            e.$emit("longpressCallback", t.tempFilePath)
                                        },
                                        fail: function(e) {}
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                setNewSize: function() {
                    var e = this;
                    return o(n().mark((function t() {
                        var o, i, r;
                        return n().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.getNode(e.rootId, !1);
                                case 2:
                                    o = t.sent, i = o.width, r = o.height, e.sizeLocal = i > r ? r : i;
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                getNode: function(e, t) {
                    var r = this;
                    return o(n().mark((function o() {
                        return n().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", new Promise((function(n, o) {
                                        try {
                                            i.index.createSelectorQuery().in(r).select("#".concat(e)).fields({
                                                node: !0,
                                                size: !0
                                            }).exec((function(e) {
                                                n(t ? e[0].node : e[0])
                                            }))
                                        } catch (e) {
                                            console.error("获取节点失败", e)
                                        }
                                    })));
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }), o)
                    })))()
                },
                selectClick: function(e) {
                    0 === e && (alert("保存二维码"), this._saveCode())
                },
                _result: function(e) {
                    this.loading = !1, this.result = e, this.$emit("result", e)
                },
                _empty: function(e) {
                    var n = t(e),
                        o = !1;
                    return "number" == n && "" == String(e) || "undefined" == n ? o = !0 : "object" == n ? "{}" != JSON.stringify(e) && "[]" != JSON.stringify(e) && null != e || (o = !0) : "string" == n ? "" != e && "undefined" != e && "null" != e && "{}" != e && "[]" != e || (o = !0) : "function" == n && (o = !1), o
                }
            },
            watch: {
                size: function(e, t) {
                    var n = this;
                    e == t || this._empty(e) || (this.cSize = e, this._empty(this.val) || setTimeout((function() {
                        n._makeCode()
                    }), 100))
                },
                val: function(e, t) {
                    var n = this;
                    this.onval && (e == t || this._empty(e) || setTimeout((function() {
                        n._makeCode()
                    }), 0))
                }
            },
            computed: {}
        };
    Array || i.resolveComponent("up-loading-icon")(), Math;
    var a = i._export_sfc(r, [
        ["render", function(e, t, n, o, r, a) {
            return i.e({
                a: n.cid,
                b: n.cid,
                c: r.sizeLocal + n.unit,
                d: r.sizeLocal + n.unit,
                e: n.showLoading && r.loading
            }, n.showLoading && r.loading ? {
                f: i.p({
                    vertical: !0,
                    text: n.loadingText,
                    textSize: "14px"
                }),
                g: r.sizeLocal + n.unit,
                h: r.sizeLocal + n.unit
            } : {}, {
                i: i.o((function() {
                    return a.preview && a.preview.apply(a, arguments)
                })),
                j: r.rootId,
                k: n.useRootHeightAndWidth ? "100%" : "auto",
                l: n.useRootHeightAndWidth ? "100%" : "auto",
                m: i.o((function() {
                    return a.longpress && a.longpress.apply(a, arguments)
                }))
            })
        }],
        ["__scopeId", "data-v-7567110d"]
    ]);
    wx.createComponent(a);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/uview-plus/components/u-qrcode/u-qrcode.js'
});
require("node-modules/uview-plus/components/u-qrcode/u-qrcode.js");