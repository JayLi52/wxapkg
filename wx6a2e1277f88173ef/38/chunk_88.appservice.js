$gwx_XC_102 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_102 || [];

        function gz$gwx_XC_102_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_102_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_102_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_102_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'complaint data-v-23caf357'])
                Z([
                    [7],
                    [3, 'c']
                ])
                Z([3, '__l'])
                Z([
                    [7],
                    [3, 'b']
                ])
                Z([3, 'data-v-23caf357'])
                Z([3, '23caf357-0'])
                Z(z[1])
                Z([
                    [7],
                    [3, 'g']
                ])
                Z(z[2])
                Z([
                    [7],
                    [3, 'e']
                ])
                Z([
                    [7],
                    [3, 'f']
                ])
                Z(z[4])
                Z([3, '23caf357-1'])
                Z(z[7])
                Z([
                    [7],
                    [3, 'j']
                ])
                Z(z[2])
                Z(z[4])
                Z([3, '23caf357-2'])
                Z(z[14])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'd']
                    ]
                ])
                Z([
                    [7],
                    [3, 'i']
                ])
                Z(z[2])
                Z([
                    [7],
                    [3, 'h']
                ])
                Z(z[4])
                Z([3, '23caf357-3,23caf357-2'])
                Z(z[20])
                Z(z[19])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_102_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_102_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_102 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_102 = true;
        var x = ['./pages/my/my/report.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_102_1()
            var cIMC = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 0], [], e, s, gg)
            var oJMC = _v()
            _(cIMC, oJMC)
            if (_oz(z, 1, e, s, gg)) {
                oJMC.wxVkey = 1
                var tMMC = _mz(z, 'up-textarea', ['bind:__l', 2, 'bindupdateModelValue', 1, 'class', 2, 'uI', 3, 'uP', 4], [], e, s, gg)
                _(oJMC, tMMC)
            }
            var lKMC = _v()
            _(cIMC, lKMC)
            if (_oz(z, 7, e, s, gg)) {
                lKMC.wxVkey = 1
                var eNMC = _mz(z, 'up-upload', ['bind:__l', 8, 'bindafterRead', 1, 'binddelete', 2, 'class', 3, 'uI', 4, 'uP', 5], [], e, s, gg)
                _(lKMC, eNMC)
            }
            var aLMC = _v()
            _(cIMC, aLMC)
            if (_oz(z, 14, e, s, gg)) {
                aLMC.wxVkey = 1
                var bOMC = _mz(z, 'l-status-bar', ['bind:__l', 15, 'class', 1, 'uI', 2, 'uP', 3, 'uS', 4], [], e, s, gg)
                var oPMC = _v()
                _(bOMC, oPMC)
                if (_oz(z, 20, e, s, gg)) {
                    oPMC.wxVkey = 1
                    var xQMC = _mz(z, 'base-button', ['bind:__l', 21, 'bindclick', 1, 'class', 2, 'uI', 3, 'uP', 4, 'uS', 5], [], e, s, gg)
                    _(oPMC, xQMC)
                }
                oPMC.wxXCkey = 1
                oPMC.wxXCkey = 3
                _(aLMC, bOMC)
            }
            oJMC.wxXCkey = 1
            oJMC.wxXCkey = 3
            lKMC.wxXCkey = 1
            lKMC.wxXCkey = 3
            aLMC.wxXCkey = 1
            aLMC.wxXCkey = 3
            _(r, cIMC)
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
                g = "$gwx_XC_102";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_102();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/my/report.wxml'] = [$gwx_XC_102, './pages/my/my/report.wxml'];
else __wxAppCode__['pages/my/my/report.wxml'] = $gwx_XC_102('./pages/my/my/report.wxml');;
__wxRoute = "pages/my/my/report";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/my/my/report.js";
define("pages/my/my/report.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/objectSpread2"),
        t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../common/vendor.js"),
        o = require("../../../api/square-api/index.js"),
        a = require("../../../utils/upload.js");
    Array || (r.resolveComponent("up-textarea") + r.resolveComponent("up-upload") + r.resolveComponent("BaseButton") + r.resolveComponent("l-status-bar"))(), Math || (function() {
        return "../../../node-modules/uview-plus/components/u-textarea/u-textarea.js"
    } + function() {
        return "../../../node-modules/uview-plus/components/u-upload/u-upload.js"
    } + function() {
        return "../../../components/l-ui/l-status-bar/l-status-bar.js"
    })();
    var u = {
            __name: "report",
            setup: function(u) {
                var i = r.reactive({
                        formData: {
                            confId: "",
                            content: ""
                        },
                        targetUserId: "",
                        userId: "",
                        fileList: [],
                        typeList: [],
                        loading: !1
                    }),
                    c = function(e) {
                        i.fileList.splice(e.index, 1)
                    };
                r.onLoad(function() {
                    var e = n(t().mark((function e(n) {
                        var r, a, u, c;
                        return t().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.targetUserId, a = n.userId, i.targetUserId = r, i.userId = a, e.prev = 2, e.next = 5, o.accusationConf({
                                        pageSize: 100
                                    });
                                case 5:
                                    u = e.sent, c = u.data, console.log(c), i.typeList = c.items, e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(2), console.log(e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 10]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }());
                var s = function() {
                        var r = n(t().mark((function n(r) {
                            return t().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        [].concat(r.file).forEach((function(t) {
                                            i.fileList.push(e({}, t))
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return r.apply(this, arguments)
                        }
                    }(),
                    l = function() {
                        if (i.formData.confId)
                            if (i.formData.content) {
                                if (!i.loading) {
                                    var u = i.fileList.map((function(t) {
                                        return new Promise((function(n, r) {
                                            a.uploadFile(t.url).then((function(o) {
                                                if (200 === o.code) return n(e(e({}, o), {}, {
                                                    width: t.width,
                                                    height: t.height
                                                }));
                                                r(o)
                                            })).catch((function(e) {
                                                r(e)
                                            }))
                                        }))
                                    }));
                                    Promise.all(u).then(function() {
                                        var e = n(t().mark((function e(n) {
                                            var a, u;
                                            return t().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (a = "", u = !0, n.map((function(e) {
                                                                if (200 === e.code) {
                                                                    var t = e.data.url ? e.data.url : e.data.resourcePath;
                                                                    a += a ? ",".concat(t) : "".concat(t)
                                                                } else u = !1
                                                            })), !u) {
                                                            e.next = 13;
                                                            break
                                                        }
                                                        return i.loading = !0, e.prev = 3, e.next = 6, o.accusationInsert({
                                                            targetUserId: i.targetUserId,
                                                            images: a,
                                                            confId: i.formData.confId,
                                                            content: i.formData.content
                                                        });
                                                    case 6:
                                                        i.loading = !1, r.index.navigateBack({
                                                            success: function() {
                                                                r.index.showToast({
                                                                    title: "我们已经收到您的举报",
                                                                    icon: "none"
                                                                })
                                                            }
                                                        }), e.next = 13;
                                                        break;
                                                    case 10:
                                                        e.prev = 10, e.t0 = e.catch(3), i.loading = !1, console.log(e.t0);
                                                    case 13:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [3, 10]
                                            ])
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()).catch((function(e) {
                                        console.log(e)
                                    }))
                                }
                            } else r.index.showToast({
                                title: "举报描述不能为空",
                                icon: "none"
                            });
                        else r.index.showToast({
                            title: "举报类型不能为空",
                            icon: "none"
                        })
                    };
                return function(e, t) {
                    return {
                        a: r.f(r.unref(i).typeList, (function(e, t, n) {
                            return {
                                a: r.t(e.type),
                                b: r.s(e.id === r.unref(i).formData.confId ? {
                                    backgroundColor: "#f9ae3d"
                                } : null),
                                c: r.o((function(t) {
                                    return r.unref(i).formData.confId = e.id
                                }), e.id),
                                d: e.id
                            }
                        })),
                        b: r.o((function(e) {
                            return r.unref(i).formData.content = e
                        })),
                        c: r.p({
                            maxlength: "100",
                            border: "surround",
                            placeholder: "请输入内容",
                            count: !0,
                            modelValue: r.unref(i).formData.content
                        }),
                        d: r.t(r.unref(i).fileList.length),
                        e: r.o(s),
                        f: r.o(c),
                        g: r.p({
                            fileList: r.unref(i).fileList,
                            sizeType: ["compressed"],
                            multiple: !0,
                            maxCount: 3,
                            previewFullImage: !0
                        }),
                        h: r.o(l),
                        i: r.p({
                            shape: "round"
                        }),
                        j: r.p({
                            padding: "0 32rpx"
                        })
                    }
                }
            }
        },
        i = r._export_sfc(u, [
            ["__scopeId", "data-v-23caf357"]
        ]);
    wx.createPage(i);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/my/my/report.js'
});
require("pages/my/my/report.js");