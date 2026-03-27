$gwx_XC_72 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_72 || [];

        function gz$gwx_XC_72_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_72_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_72_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_72_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'a']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-828431e6'])
                Z([3, '828431e6-0'])
                Z(z[0])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_72_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_72_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_72 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_72 = true;
        var x = ['./pages/common/login/cancel-lation.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_72_1()
            var oPVB = _v()
            _(r, oPVB)
            if (_oz(z, 0, e, s, gg)) {
                oPVB.wxVkey = 1
                var lQVB = _mz(z, 'navbar', ['bind:__l', 1, 'class', 1, 'uI', 2, 'uP', 3], [], e, s, gg)
                _(oPVB, lQVB)
            }
            oPVB.wxXCkey = 1
            oPVB.wxXCkey = 3
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
                g = "$gwx_XC_72";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_72();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/login/cancel-lation.wxml'] = [$gwx_XC_72, './pages/common/login/cancel-lation.wxml'];
else __wxAppCode__['pages/common/login/cancel-lation.wxml'] = $gwx_XC_72('./pages/common/login/cancel-lation.wxml');;
__wxRoute = "pages/common/login/cancel-lation";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/common/login/cancel-lation.js";
define("pages/common/login/cancel-lation.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        e = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../common/vendor.js"),
        l = require("../../../store/user.js"),
        s = require("../../../utils/device.js");
    Array || r.resolveComponent("navbar")(), Math;
    var o = {
            __name: "cancel-lation",
            setup: function(o) {
                var c = l.useUserStore().deleteUser,
                    a = s.device.safeAreaInsetsBottom ? .55 * s.device.safeAreaInsetsBottom : r.index.upx2px(20);
                r.ref(null);
                var n = [{
                    name: "p",
                    attrs: {
                        class: "sub-title-color",
                        style: "color:#4D4D4D;"
                    },
                    children: [{
                        type: "text",
                        text: "【重要】在您注销您的沙梨帐号之前，请充分阅读、理解并同意下列事项："
                    }]
                }, {
                    name: "p",
                    children: [{
                        name: "span",
                        attrs: {
                            class: "title-color t-fw-h",
                            style: "font-weight:800;color:#000000;"
                        },
                        children: [{
                            type: "text",
                            text: "【特别提示】注销沙梨帐号为不可恢复的操作，注销帐号后您将无法再使用本沙梨帐号或找回您浏览、关注、添加、绑定的任何内容或信息（即使您使用相同的手机号码再次注册并使用沙梨）。"
                        }]
                    }, {
                        name: "span",
                        attrs: {
                            class: "sub-title-color",
                            style: "color:#4D4D4D;"
                        },
                        children: [{
                            type: "text",
                            text: "请确保您所申请注销的沙梨帐号应当是您本人依照《沙梨用户服务协议》的约定创建并由本公司提供给您本人的帐号。您应当依照本公司规定的程序或网站上的提示注销沙梨帐号。建议您在注销前自行备份沙梨帐号相关的所有信息，并请确认与本沙梨帐号相关的所有服务均已进行妥善处理。注销完成后，沙梨将删除您的个人信息或对其进行匿名化处理（法律法规另有规定的除外）。请您知悉并理解，根据相关法律法规规定相关日志记录沙梨将保留不少于6个月的时间。"
                        }]
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "title-color t-fw-h",
                        style: "font-weight:800;color:#000000;"
                    },
                    children: [{
                        type: "text",
                        text: "1.我们对您注销沙梨帐号的决定深表遗憾。如果您仍决定继续进行帐号注销，您的帐号需同时满足以下条件："
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "sub-title-color",
                        style: "color:#4D4D4D;"
                    },
                    children: [{
                        type: "text",
                        text: "1.1 帐号处于安全状态：帐号处于正常使用状态，无被盗风险。"
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "sub-title-color",
                        style: "color:#4D4D4D;"
                    },
                    children: [{
                        type: "text",
                        text: "1.2 帐号财产已结清， 没有未完成或存在争议的服务： 帐号中没有资产、 欠款、 未结清的资金和虛拟权益； 本帐号及通过本帐号接入的第三方中没有未完成或存在争议的服务。"
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "sub-title-color",
                        style: "color:#4D4D4D;"
                    },
                    children: [{
                        type: "text",
                        text: "1.3 帐号无任何未结争议纠纷， 包括投诉举报或被投诉举报。"
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "title-color t-fw-h",
                        style: "font-weight:800;color:#000000;"
                    },
                    children: [{
                        type: "text",
                        text: "2.沙梨帐号注销后，您将无法登录、使用本沙梨帐号，也将无法找回本沙梨帐号中及与帐号相关的任何内容或信息，包括但不限于："
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "sub-title-color",
                        style: "color:#4D4D4D;"
                    },
                    children: [{
                        type: "text",
                        text: "2.1 个人已提交的身份信息、帐号信息、沙梨好友关系等信息。"
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "sub-title-color",
                        style: "color:#4D4D4D;"
                    },
                    children: [{
                        type: "text",
                        text: "2.2 已发布的视频、动态、文章、点赞、评论、转发、互动、粉丝、喜欢、收藏等内容数据。"
                    }]
                }, {
                    name: "p",
                    children: [{
                        name: "span",
                        attrs: {
                            class: "sub-title-color",
                            style: "color:#4D4D4D;"
                        },
                        children: [{
                            type: "text",
                            text: "2.3 帐号内钱包账户余额、奖励、收益、实名认证信息、交易记录、已绑定的银行卡等信息将被作废及删除。"
                        }]
                    }, {
                        name: "span",
                        attrs: {
                            class: "title-color t-fw-h",
                            style: "font-weight:800;color:#000000;"
                        },
                        children: [{
                            type: "text",
                            text: "请确认帐号内无任何资产或虛拟权益，您曾获得的资产虛拟权益等财产性利益视为您同意放弃，将无法继续使用。您理解并同意，您将放弃沙梨的资产或权益，沙梨无法协助您恢复上述服务，也无法找回帐号相关的任何内容或信息。"
                        }]
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "title-color t-fw-h",
                        style: "font-weight:800;color:#000000;"
                    },
                    children: [{
                        type: "text",
                        text: "3.沙梨帐号注销将导致本公司终止为您提供服务，依《沙梨用户服务协议》 和《隐私政策》等约定的双方权利义务终止，依法律法规另有规定、本页面其他条款另行约定不得终止的或依其性质不能终止的除外。"
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "sub-title-color",
                        style: "color:#4D4D4D;"
                    },
                    children: [{
                        type: "text",
                        text: "4.在您的沙梨帐号注销期间，如果您的帐号涉及争议纠纷，包括但不限于：投诉、举报、诉公、仲裁、国家有权机关调查等，您理解并同意，沙梨有权自行决定是否终止本帐号的注销而无需另行得到您的同意。"
                    }]
                }, {
                    name: "p",
                    attrs: {
                        class: "sub-title-color",
                        style: "color:#4D4D4D;"
                    },
                    children: [{
                        type: "text",
                        text: "5.注销本沙梨帐号并不代表本沙梨帐号注销前的账户行为和相关责任得到豁免或减轻。"
                    }]
                }];

                function i() {
                    var l;
                    r.index.showModal({
                        title: "温馨提示",
                        content: "该账号将在七天后完成注销操作，中途登录将会被取消注销账号！",
                        success: (l = e(t().mark((function e(l) {
                            return t().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        l.confirm && (c(), r.index.navigateBack({
                                            delta: 2
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), e)
                        }))), function(t) {
                            return l.apply(this, arguments)
                        })
                    })
                }
                return function(t, e) {
                    return {
                        a: r.p({
                            title: "沙梨账号注销协议"
                        }),
                        b: n,
                        c: r.unref(a) + "px",
                        d: r.o(i),
                        e: r.unref(a) + "px"
                    }
                }
            }
        },
        c = r._export_sfc(o, [
            ["__scopeId", "data-v-828431e6"]
        ]);
    wx.createPage(c);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/common/login/cancel-lation.js'
});
require("pages/common/login/cancel-lation.js");