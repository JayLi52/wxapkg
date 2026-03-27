$gwx_XC_49 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_49 || [];

        function gz$gwx_XC_49_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_49_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_49_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_49_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'p']
                ])
                Z([3, '__l'])
                Z([
                    [7],
                    [3, 'o']
                ])
                Z([3, 'data-v-595e9c48'])
                Z([3, '595e9c48-0'])
                Z(z[0])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([3, 'calendar-popup-box data-v-595e9c48'])
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, 'right-btn-box data-v-595e9c48'])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z([3, 'switch-month-btn previous-btn data-v-595e9c48'])
                Z([
                    [2, '+'],
                    [1, 'opacity:'],
                    [
                        [7],
                        [3, 'e']
                    ]
                ])
                Z([
                    [7],
                    [3, 'd']
                ])
                Z(z[1])
                Z(z[3])
                Z([3, '595e9c48-1,595e9c48-0'])
                Z(z[13])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z([3, 'switch-month-btn next-btn data-v-595e9c48'])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z(z[1])
                Z(z[3])
                Z([3, '595e9c48-2,595e9c48-0'])
                Z(z[20])
                Z([3, 'day'])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z([3, 'k'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'day']
                    ],
                    [3, 'l']
                ])
                Z([3, 'calendar-day data-v-595e9c48'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$slots']
                    ],
                    [1, 'calendar-day']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'day']
                    ],
                    [3, 'i']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'day']
                    ],
                    [3, 'e']
                ])
                Z([
                    [7],
                    [3, 'k']
                ])
                Z([
                    [7],
                    [3, 'n']
                ])
                Z(z[1])
                Z([
                    [7],
                    [3, 'm']
                ])
                Z(z[3])
                Z([3, '595e9c48-3,595e9c48-0'])
                Z(z[34])
                Z(z[6])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_49_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_49_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_49 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_49 = true;
        var x = ['./components/calendar-popup/calendar-popup.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_49_1()
            var tGFB = _v()
            _(r, tGFB)
            if (_oz(z, 0, e, s, gg)) {
                tGFB.wxVkey = 1
                var eHFB = _mz(z, 'up-popup', ['bind:__l', 1, 'bindclose', 1, 'class', 2, 'uI', 3, 'uP', 4, 'uS', 5], [], e, s, gg)
                var bIFB = _n('view')
                _rz(z, bIFB, 'class', 7, e, s, gg)
                var oJFB = _v()
                _(bIFB, oJFB)
                if (_oz(z, 8, e, s, gg)) {
                    oJFB.wxVkey = 1
                }
                var oLFB = _n('view')
                _rz(z, oLFB, 'class', 9, e, s, gg)
                var fMFB = _mz(z, 'view', ['bindtap', 10, 'class', 1, 'style', 2], [], e, s, gg)
                var cNFB = _v()
                _(fMFB, cNFB)
                if (_oz(z, 13, e, s, gg)) {
                    cNFB.wxVkey = 1
                    var hOFB = _mz(z, 'up-icon', ['bind:__l', 14, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(cNFB, hOFB)
                }
                cNFB.wxXCkey = 1
                cNFB.wxXCkey = 3
                _(oLFB, fMFB)
                var oPFB = _mz(z, 'view', ['bindtap', 18, 'class', 1], [], e, s, gg)
                var cQFB = _v()
                _(oPFB, cQFB)
                if (_oz(z, 20, e, s, gg)) {
                    cQFB.wxVkey = 1
                    var oRFB = _mz(z, 'up-icon', ['bind:__l', 21, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                    _(cQFB, oRFB)
                }
                cQFB.wxXCkey = 1
                cQFB.wxXCkey = 3
                _(oLFB, oPFB)
                _(bIFB, oLFB)
                var lSFB = _v()
                _(bIFB, lSFB)
                var aTFB = function(eVFB, tUFB, bWFB, gg) {
                    var xYFB = _mz(z, 'view', ['bindtap', 28, 'class', 1], [], eVFB, tUFB, gg)
                    var oZFB = _v()
                    _(xYFB, oZFB)
                    if (_oz(z, 30, eVFB, tUFB, gg)) {
                        oZFB.wxVkey = 1
                        var f1FB = _n('slot')
                        _rz(z, f1FB, 'name', 31, eVFB, tUFB, gg)
                        _(oZFB, f1FB)
                    } else {
                        oZFB.wxVkey = 2
                        var c2FB = _v()
                        _(oZFB, c2FB)
                        if (_oz(z, 32, eVFB, tUFB, gg)) {
                            c2FB.wxVkey = 1
                        }
                        c2FB.wxXCkey = 1
                    }
                    oZFB.wxXCkey = 1
                    _(bWFB, xYFB)
                    return bWFB
                }
                lSFB.wxXCkey = 2
                _2z(z, 26, aTFB, e, s, gg, lSFB, 'day', 'index', 'k')
                var xKFB = _v()
                _(bIFB, xKFB)
                if (_oz(z, 33, e, s, gg)) {
                    xKFB.wxVkey = 1
                    var h3FB = _v()
                    _(xKFB, h3FB)
                    if (_oz(z, 34, e, s, gg)) {
                        h3FB.wxVkey = 1
                        var o4FB = _mz(z, 'base-button', ['bind:__l', 35, 'bindclick', 1, 'class', 2, 'uI', 3, 'uP', 4, 'uS', 5], [], e, s, gg)
                        _(h3FB, o4FB)
                    }
                    h3FB.wxXCkey = 1
                    h3FB.wxXCkey = 3
                }
                oJFB.wxXCkey = 1
                xKFB.wxXCkey = 1
                xKFB.wxXCkey = 3
                _(eHFB, bIFB)
                _(tGFB, eHFB)
            }
            tGFB.wxXCkey = 1
            tGFB.wxXCkey = 3
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
                g = "$gwx_XC_49";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_49();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/calendar-popup/calendar-popup.wxml'] = [$gwx_XC_49, './components/calendar-popup/calendar-popup.wxml'];
else __wxAppCode__['components/calendar-popup/calendar-popup.wxml'] = $gwx_XC_49('./components/calendar-popup/calendar-popup.wxml');;
__wxRoute = "components/calendar-popup/calendar-popup";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/calendar-popup/calendar-popup.js";
define("components/calendar-popup/calendar-popup.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../common/vendor.js");
    Array || (e.resolveComponent("up-icon") + e.resolveComponent("BaseButton") + e.resolveComponent("up-popup"))(), Math || (function() {
        return "../../node-modules/uview-plus/components/u-icon/u-icon.js"
    } + function() {
        return "../../node-modules/uview-plus/components/u-popup/u-popup.js"
    })();
    var t = {
            __name: "calendar-popup",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                title: {
                    type: String,
                    default: "全部日期"
                },
                format: {
                    type: String,
                    default: "YYYY-MM-DD"
                },
                multiple: {
                    type: Boolean,
                    default: !1
                },
                getDayText: {
                    type: Function,
                    default: null
                },
                getDayTextStyle: {
                    type: Function,
                    default: null
                },
                getDayTextClass: {
                    type: Function,
                    default: null
                },
                defaultSelectedDate: {
                    type: [Date, String, Array],
                    default: null
                }
            },
            emits: ["close", "change", "confirm"],
            setup: function(t, a) {
                var u = a.emit;
                e.dayjs.extend(e.isSameOrAfter);
                var n = t,
                    l = u,
                    r = ["日", "一", "二", "三", "四", "五", "六"],
                    o = e.dayjs().startOf("day"),
                    f = e.ref(null),
                    i = e.ref([]),
                    d = function() {
                        (function() {
                            var t = n.defaultSelectedDate ? n.multiple && Array.isArray(n.defaultSelectedDate) && n.defaultSelectedDate.length ? n.defaultSelectedDate[0] : n.defaultSelectedDate : null,
                                a = t && e.dayjs(t).isSameOrAfter(o, "day") ? e.dayjs(t) : null;
                            f.value = a || o
                        })(),
                        function() {
                            if (i.value = [], n.defaultSelectedDate)
                                if (n.multiple)
                                    if (Array.isArray(n.defaultSelectedDate)) i.value = n.defaultSelectedDate.map((function(t) {
                                        return e.dayjs(t)
                                    })).filter((function(e) {
                                        return e.isSameOrAfter(o, "day")
                                    }));
                                    else {
                                        var t = e.dayjs(n.defaultSelectedDate);
                                        t.isSameOrAfter(o, "day") && i.value.push(t)
                                    } else {
                                var a = e.dayjs(n.defaultSelectedDate);
                                a.isSameOrAfter(o, "day") && i.value.push(a)
                            } else n.multiple || i.value.push(o)
                        }()
                    };
                e.watch((function() {
                    return n.defaultSelectedDate
                }), (function(e) {
                    d()
                }), {
                    deep: !0,
                    immediate: !0
                });
                var c = e.computed((function() {
                        return e.dayjs(f.value).startOf("month")
                    })),
                    s = e.computed((function() {
                        return c.value.format("YYYY年MM月")
                    })),
                    p = e.computed((function() {
                        return c.value.isAfter(o.startOf("month"), "month")
                    })),
                    m = e.computed((function() {
                        return function() {
                            for (var e = c.value.clone().startOf("month"), t = e.day(), a = [], u = 0; u < t; u++) a.push({
                                date: "",
                                isCurrentMonth: !1
                            });
                            for (var n = e.daysInMonth(), l = 1; l <= n; l++) {
                                var r = e.clone().date(l);
                                a.push({
                                    date: l,
                                    isCurrentMonth: !0,
                                    fullDate: r
                                })
                            }
                            return a
                        }()
                    })),
                    y = function(t) {
                        return t.fullDate && t.fullDate.isSame(e.dayjs(), "day")
                    },
                    D = function(e) {
                        return !!e.fullDate && i.value.some((function(t) {
                            return t.isSame(e.fullDate, "day")
                        }))
                    },
                    v = function(e) {
                        return !!e.isCurrentMonth && !!e.fullDate && (e.fullDate.isSame(o, "day") || e.fullDate.isAfter(o, "day"))
                    },
                    h = function() {
                        f.value = c.value.clone().add(1, "month").toDate()
                    },
                    S = function() {
                        n.multiple && l("confirm", i.value.map((function(e) {
                            return e.format(n.format)
                        })))
                    },
                    g = function() {
                        l("close")
                    };
                return function(a, u) {
                    return e.e({
                        a: t.title
                    }, t.title ? {
                        b: e.t(t.title)
                    } : {}, {
                        c: e.t(e.unref(s)),
                        d: e.p({
                            name: "arrow-left",
                            color: "#333",
                            size: "28rpx"
                        }),
                        e: e.unref(p) ? 1 : 0,
                        f: e.o((function(t) {
                            return e.unref(p) ? void(f.value = c.value.clone().subtract(1, "month").toDate()) : ""
                        })),
                        g: e.p({
                            name: "arrow-right",
                            color: "#333",
                            size: "28rpx"
                        }),
                        h: e.o(h),
                        i: e.f(r, (function(t, a, u) {
                            return {
                                a: e.t(t),
                                b: a
                            }
                        })),
                        j: e.f(e.unref(m), (function(a, u, r) {
                            return e.e({
                                a: e.t(a.date),
                                b: y(a) ? 1 : "",
                                c: v(a) ? "" : 1,
                                d: D(a) ? 1 : "",
                                e: a.isCurrentMonth && t.getDayText
                            }, a.isCurrentMonth && t.getDayText ? {
                                f: e.t(t.getDayText(a.fullDate)),
                                g: e.s(t.getDayTextStyle ? t.getDayTextStyle(a.fullDate) : ""),
                                h: e.n(t.getDayTextClass ? t.getDayTextClass(a.fullDate) : "")
                            } : {}, {
                                i: "calendar-day-" + r,
                                j: e.r("calendar-day", {
                                    day: a,
                                    isSelected: D(a),
                                    isToday: y(a),
                                    isSelectable: v(a)
                                }, r),
                                k: u,
                                l: e.o((function(e) {
                                    return v(a) ? function(e) {
                                        if (e.isCurrentMonth && v(e)) {
                                            var t = e.fullDate.format(n.format),
                                                a = i.value.some((function(t) {
                                                    return t.isSame(e.fullDate, "day")
                                                }));
                                            n.multiple ? (a ? i.value = i.value.filter((function(t) {
                                                return !t.isSame(e.fullDate, "day")
                                            })) : i.value.push(e.fullDate), l("change", i.value.map((function(e) {
                                                return e.format(n.format)
                                            })))) : a || (i.value = [e.fullDate], l("change", t))
                                        }
                                    }(a) : ""
                                }), u)
                            })
                        })),
                        k: t.multiple
                    }, t.multiple ? {
                        l: e.t(e.unref(i).length),
                        m: e.o(S),
                        n: e.p({
                            shape: "round"
                        })
                    } : {}, {
                        o: e.o(g),
                        p: e.p({
                            show: t.show,
                            round: "40rpx"
                        })
                    })
                }
            }
        },
        a = e._export_sfc(t, [
            ["__scopeId", "data-v-595e9c48"]
        ]);
    wx.createComponent(a);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/calendar-popup/calendar-popup.js'
});
require("components/calendar-popup/calendar-popup.js");