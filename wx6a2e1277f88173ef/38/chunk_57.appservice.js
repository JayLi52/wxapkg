$gwx_XC_68 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_68 || [];

        function gz$gwx_XC_68_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'column'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'f'])
                Z([3, 'u-column data-v-405b52f2'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'h']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'g']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'a']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'c']
                ])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'column']
                    ],
                    [3, 'e']
                ])
                Z([3, 'c'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'a']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_68 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_68 = true;
        var x = ['./node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_68_1()
            var tIRB = _v()
            _(r, tIRB)
            var eJRB = function(oLRB, bKRB, xMRB, gg) {
                var fORB = _mz(z, 'view', ['class', 3, 'id', 1, 'ref', 2], [], oLRB, bKRB, gg)
                var hQRB = _n('slot')
                _rz(z, hQRB, 'name', 6, oLRB, bKRB, gg)
                _(fORB, hQRB)
                var oRRB = _n('slot')
                _rz(z, oRRB, 'name', 7, oLRB, bKRB, gg)
                _(fORB, oRRB)
                var cPRB = _v()
                _(fORB, cPRB)
                if (_oz(z, 8, oLRB, bKRB, gg)) {
                    cPRB.wxVkey = 1
                    var cSRB = _v()
                    _(cPRB, cSRB)
                    var oTRB = function(aVRB, lURB, tWRB, gg) {
                        var bYRB = _n('slot')
                        _rz(z, bYRB, 'name', 12, aVRB, lURB, gg)
                        _(tWRB, bYRB)
                        var oZRB = _n('slot')
                        _(tWRB, oZRB)
                        return tWRB
                    }
                    cSRB.wxXCkey = 2
                    _2z(z, 10, oTRB, oLRB, bKRB, gg, cSRB, 'item', 'index', 'c')
                }
                cPRB.wxXCkey = 1
                _(xMRB, fORB)
                return xMRB
            }
            tIRB.wxXCkey = 2
            _2z(z, 1, eJRB, e, s, gg, tIRB, 'column', 'index', 'f')
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
                g = "$gwx_XC_68";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_68();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml'] = [$gwx_XC_68, './node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml'];
else __wxAppCode__['node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml'] = $gwx_XC_68('./node-modules/uview-plus/components/u-waterfall/u-waterfall.wxml');;
__wxRoute = "node-modules/uview-plus/components/u-waterfall/u-waterfall";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/uview-plus/components/u-waterfall/u-waterfall.js";
define("node-modules/uview-plus/components/u-waterfall/u-waterfall.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../../@babel/runtime/helpers/objectSpread2"),
        t = require("../../../../@babel/runtime/helpers/toConsumableArray"),
        n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
        i = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
        a = require("../../../../common/vendor.js"),
        u = {
            name: "u-waterfall",
            props: {
                modelValue: {
                    type: Array,
                    required: !0,
                    default: function() {
                        return []
                    }
                },
                addTime: {
                    type: [Number, String],
                    default: 200
                },
                idKey: {
                    type: String,
                    default: "id"
                },
                columns: {
                    type: [Number, String],
                    default: 2
                },
                columnsMin: {
                    type: [Number, String],
                    default: 2
                },
                minColumnWidth: {
                    type: Number,
                    default: 230
                }
            },
            mixins: [a.mpMixin, a.mixin],
            data: function() {
                return {
                    columnList: [
                        []
                    ],
                    children: [],
                    initialized: !1,
                    windowWidth: 375,
                    windowHeight: 0
                }
            },
            watch: {
                copyFlowList: {
                    handler: function(e, t) {
                        if (e && 0 != e.length) {
                            1 == this.columnList.length && this.initColumnList();
                            var n = Array.isArray(t) && t.length > 0 ? t.length : 0;
                            this.handleData(e.slice(n))
                        } else this.clear(!1)
                    },
                    immediate: !0
                },
                columns: {
                    handler: function() {
                        this.initColumnList(), this.copyFlowList.length > 0 && this.redistributeData()
                    },
                    immediate: !1
                }
            },
            created: function() {
                this.initColumnList()
            },
            mounted: function() {
                this.initialized = !0
            },
            beforeUnmount: function() {},
            computed: {
                copyFlowList: function() {
                    return this.modelValue && 0 != this.modelValue.length ? this.cloneData(this.modelValue) : []
                }
            },
            emits: ["update:modelValue", "after-add-one", "after-add-all"],
            methods: {
                initColumnList: function() {
                    this.windowWidth = a.index.getSystemInfoSync().windowWidth;
                    var e = this.getColumnsCount();
                    this.columnList = Array.from({
                        length: e
                    }, (function() {
                        return []
                    }))
                },
                getColumnsCount: function() {
                    if ("auto" === this.columns) {
                        var e = Math.max(1, Math.floor(this.windowWidth / (this.minColumnWidth + 7)));
                        return e < this.columnsMin && (e = this.columnsMin), e
                    }
                    return parseInt(this.columns) || 2
                },
                handleWindowResize: function(e) {
                    var t = this;
                    this.windowWidth = e.size.windowWidth, this.windowHeight = e.size.windowHeight, this.resizeTimer && clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout((function() {
                        t.getColumnsCount() !== t.columnList.length && t.redistributeData()
                    }), 300)
                },
                redistributeData: function() {
                    var e = this;
                    return r(i().mark((function t() {
                        var n;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.initColumnList(), n = e.cloneData(e.copyFlowList), e.handleData(n);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleData: function(u) {
                    var s = this;
                    return r(i().mark((function o() {
                        var l, c, h, d, m, f;
                        return i().wrap((function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    if (u && 0 !== u.length) {
                                        o.next = 2;
                                        break
                                    }
                                    return o.abrupt("return");
                                case 2:
                                    l = new Array(s.columnList.length).fill(0), c = 0;
                                case 4:
                                    if (!(c < s.columnList.length)) {
                                        o.next = 18;
                                        break
                                    }
                                    return o.prev = 5, o.next = 8, s.$uGetRect("#u-column-".concat(c));
                                case 8:
                                    h = o.sent, l[c] = h.height || 0, o.next = 15;
                                    break;
                                case 12:
                                    o.prev = 12, o.t0 = o.catch(5), l[c] = 0;
                                case 15:
                                    c++, o.next = 4;
                                    break;
                                case 18:
                                    d = n(u), o.prev = 19, f = i().mark((function n() {
                                        var u, o;
                                        return i().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return u = m.value, o = l.indexOf(Math.min.apply(Math, t(l))), s.columnList[o].push(u), n.next = 5, a.sleep(s.addTime);
                                                case 5:
                                                    return n.next = 7, s.$nextTick(r(i().mark((function t() {
                                                        var n;
                                                        return i().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0, t.next = 3, s.$uGetRect("#u-column-".concat(o));
                                                                case 3:
                                                                    (n = t.sent).height && (l[o] = n.height, s.$emit("after-add-one", e(e({}, u), {}, {
                                                                        height: n.height
                                                                    }))), t.next = 9;
                                                                    break;
                                                                case 7:
                                                                    t.prev = 7, t.t0 = t.catch(0);
                                                                case 9:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [0, 7]
                                                        ])
                                                    }))));
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })), d.s();
                                case 22:
                                    if ((m = d.n()).done) {
                                        o.next = 26;
                                        break
                                    }
                                    return o.delegateYield(f(), "t1", 24);
                                case 24:
                                    o.next = 22;
                                    break;
                                case 26:
                                    o.next = 31;
                                    break;
                                case 28:
                                    o.prev = 28, o.t2 = o.catch(19), d.e(o.t2);
                                case 31:
                                    return o.prev = 31, d.f(), o.finish(31);
                                case 34:
                                    s.$emit("after-add-all", {
                                        columnHeights: l,
                                        newData: u
                                    });
                                case 35:
                                case "end":
                                    return o.stop()
                            }
                        }), o, null, [
                            [5, 12],
                            [19, 28, 31, 34]
                        ])
                    })))()
                },
                cloneData: function(e) {
                    return JSON.parse(JSON.stringify(e))
                },
                clear: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.initColumnList(), e && this.$emit("update:modelValue", [])
                },
                remove: function(e) {
                    for (var t = this, n = 0; n < this.columnList.length; n++) {
                        var i = this.columnList[n].findIndex((function(n) {
                            return n[t.idKey] == e
                        }));
                        if (-1 !== i) {
                            this.columnList[n].splice(i, 1);
                            break
                        }
                    }
                    var r = this.modelValue.findIndex((function(n) {
                        return n[t.idKey] == e
                    }));
                    if (-1 !== r) {
                        var a = this.cloneData(this.modelValue);
                        a.splice(r, 1), this.$emit("update:modelValue", a)
                    }
                },
                modify: function(e, t, n) {
                    for (var i = this, r = !1, a = null, u = 0; u < this.columnList.length; u++) {
                        var s = this.columnList[u].findIndex((function(t) {
                            return t[i.idKey] == e
                        }));
                        if (-1 !== s) {
                            this.columnList[u][s][t] = n, a = this.columnList[u][s], r = !0;
                            break
                        }
                    }
                    if (r && a) {
                        var o = this.modelValue.findIndex((function(t) {
                            return t[i.idKey] == e
                        }));
                        if (-1 !== o) {
                            var l = this.cloneData(this.modelValue);
                            l[o][t] = n, this.$emit("update:modelValue", l)
                        }
                    }
                }
            }
        },
        s = a._export_sfc(u, [
            ["render", function(e, t, n, i, r, u) {
                return {
                    a: a.f(r.columnList, (function(t, n, i) {
                        return a.e({
                            a: "column-" + i,
                            b: a.r("column", {
                                colIndex: n,
                                colList: t
                            }, i),
                            c: "left-" + i,
                            d: a.r("left", {
                                colIndex: n,
                                leftList: t
                            }, i)
                        }, e.$slots.left || e.$slots.column ? {} : {
                            e: a.f(t, (function(e, t, n) {
                                return {
                                    a: "d-" + i + "-" + n,
                                    b: a.r("d", {
                                        item: e,
                                        itemIndex: t
                                    }, i + "-" + n),
                                    c: t
                                }
                            }))
                        }, {
                            f: n,
                            g: "u-column-".concat(n),
                            h: "u-column-".concat(n)
                        })
                    })),
                    b: !e.$slots.left && !e.$slots.column
                }
            }],
            ["__scopeId", "data-v-405b52f2"]
        ]);
    wx.createComponent(s);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/uview-plus/components/u-waterfall/u-waterfall.js'
});
require("node-modules/uview-plus/components/u-waterfall/u-waterfall.js");