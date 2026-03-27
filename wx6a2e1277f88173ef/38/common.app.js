var __wxAppData = __wxAppData || {};
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var __vd_version_info__ = __vd_version_info__ || {};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};
if (this && this.__g === undefined) Object.defineProperty(this, "__g", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: function() {
        function D(e, t) {
            if (typeof t != "undefined") e.children.push(t)
        }

        function S(e) {
            if (typeof e != "undefined") return {
                tag: "virtual",
                wxKey: e,
                children: []
            };
            return {
                tag: "virtual",
                children: []
            }
        }

        function v(e) {
            return {
                tag: "wx-" + e,
                attr: {},
                children: [],
                n: [],
                raw: {},
                generics: {}
            }
        }

        function e(e, t) {
            t && e.properities.push(t)
        }

        function t(e, t, r) {
            return typeof e[r] != "undefined" ? e[r] : t[r]
        }

        function u(e) {
            console.warn("WXMLRT_" + g + ":" + e)
        }

        function r(e, t) {
            u(t + ":-1:-1:-1: Template `" + e + "` is being called recursively, will be stop.")
        }
        var s = console.warn;
        var n = console.log;

        function o() {
            function e() {}
            e.prototype = {
                hn: function(e, t) {
                    if (typeof e == "object") {
                        var r = 0;
                        var n = false,
                            o = false;
                        for (var a in e) {
                            n = n | a === "__value__";
                            o = o | a === "__wxspec__";
                            r++;
                            if (r > 2) break
                        }
                        return r == 2 && n && o && (t || e.__wxspec__ !== "m" || this.hn(e.__value__) === "h") ? "h" : "n"
                    }
                    return "n"
                },
                nh: function(e, t) {
                    return {
                        __value__: e,
                        __wxspec__: t ? t : true
                    }
                },
                rv: function(e) {
                    return this.hn(e, true) === "n" ? e : this.rv(e.__value__)
                },
                hm: function(e) {
                    if (typeof e == "object") {
                        var t = 0;
                        var r = false,
                            n = false;
                        for (var o in e) {
                            r = r | o === "__value__";
                            n = n | o === "__wxspec__";
                            t++;
                            if (t > 2) break
                        }
                        return t == 2 && r && n && (e.__wxspec__ === "m" || this.hm(e.__value__))
                    }
                    return false
                }
            };
            return new e
        }
        var A = o();

        function T(e) {
            var t = e.split("\n " + " " + " " + " ");
            for (var r = 0; r < t.length; ++r) {
                if (0 == r) continue;
                if (")" === t[r][t[r].length - 1]) t[r] = t[r].replace(/\s\(.*\)$/, "");
                else t[r] = "at anonymous function"
            }
            return t.join("\n " + " " + " " + " ")
        }

        function a(M) {
            function m(e, t, r, n, o) {
                var a = false;
                var i = e[0][1];
                var p, u, l, f, v, c;
                switch (i) {
                    case "?:":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : x(e[3], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "&&":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : A.rv(p);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "||":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? A.rv(p) : x(e[2], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "+":
                    case "*":
                    case "/":
                    case "%":
                    case "|":
                    case "^":
                    case "&":
                    case "===":
                    case "==":
                    case "!=":
                    case "!==":
                    case ">=":
                    case "<=":
                    case ">":
                    case "<":
                    case "<<":
                    case ">>":
                        p = x(e[1], t, r, n, o, a);
                        u = x(e[2], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        switch (i) {
                            case "+":
                                f = A.rv(p) + A.rv(u);
                                break;
                            case "*":
                                f = A.rv(p) * A.rv(u);
                                break;
                            case "/":
                                f = A.rv(p) / A.rv(u);
                                break;
                            case "%":
                                f = A.rv(p) % A.rv(u);
                                break;
                            case "|":
                                f = A.rv(p) | A.rv(u);
                                break;
                            case "^":
                                f = A.rv(p) ^ A.rv(u);
                                break;
                            case "&":
                                f = A.rv(p) & A.rv(u);
                                break;
                            case "===":
                                f = A.rv(p) === A.rv(u);
                                break;
                            case "==":
                                f = A.rv(p) == A.rv(u);
                                break;
                            case "!=":
                                f = A.rv(p) != A.rv(u);
                                break;
                            case "!==":
                                f = A.rv(p) !== A.rv(u);
                                break;
                            case ">=":
                                f = A.rv(p) >= A.rv(u);
                                break;
                            case "<=":
                                f = A.rv(p) <= A.rv(u);
                                break;
                            case ">":
                                f = A.rv(p) > A.rv(u);
                                break;
                            case "<":
                                f = A.rv(p) < A.rv(u);
                                break;
                            case "<<":
                                f = A.rv(p) << A.rv(u);
                                break;
                            case ">>":
                                f = A.rv(p) >> A.rv(u);
                                break;
                            default:
                                break
                        }
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "-":
                        p = e.length === 3 ? x(e[1], t, r, n, o, a) : 0;
                        u = e.length === 3 ? x(e[2], t, r, n, o, a) : x(e[1], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        f = l ? A.rv(p) - A.rv(u) : p - u;
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "!":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = !A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    case "~":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = ~A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    default:
                        s("unrecognized op" + i)
                }
            }

            function x(e, t, r, n, o, a) {
                var i = e[0];
                var p = false;
                if (typeof a !== "undefined") o.ap = a;
                if (typeof i === "object") {
                    var u = i[0];
                    var l, f, v, c, s, y, b, d, h, _, g;
                    switch (u) {
                        case 2:
                            return m(e, t, r, n, o);
                            break;
                        case 4:
                            return x(e[1], t, r, n, o, p);
                            break;
                        case 5:
                            switch (e.length) {
                                case 2:
                                    l = x(e[1], t, r, n, o, p);
                                    return M ? [l] : [A.rv(l)];
                                    return [l];
                                    break;
                                case 1:
                                    return [];
                                    break;
                                default:
                                    l = x(e[1], t, r, n, o, p);
                                    v = x(e[2], t, r, n, o, p);
                                    l.push(M ? v : A.rv(v));
                                    return l;
                                    break
                            }
                            break;
                        case 6:
                            l = x(e[1], t, r, n, o);
                            var w = o.ap;
                            h = A.hn(l) === "h";
                            f = h ? A.rv(l) : l;
                            o.is_affected |= h;
                            if (M) {
                                if (f === null || typeof f === "undefined") {
                                    return h ? A.nh(undefined, "e") : undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return h || _ ? A.nh(undefined, "e") : undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return h || _ ? g ? y : A.nh(y, "e") : y
                            } else {
                                if (f === null || typeof f === "undefined") {
                                    return undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return g ? A.rv(y) : y
                            }
                        case 7:
                            switch (e[1][0]) {
                                case 11:
                                    o.is_affected |= A.hn(n) === "h";
                                    return n;
                                case 3:
                                    b = A.rv(r);
                                    d = A.rv(t);
                                    v = e[1][1];
                                    if (n && n.f && n.f.hasOwnProperty(v)) {
                                        l = n.f;
                                        o.ap = true
                                    } else {
                                        l = b && b.hasOwnProperty(v) ? r : d && d.hasOwnProperty(v) ? t : undefined
                                    }
                                    if (M) {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            y = h && !g ? A.nh(y, "e") : y;
                                            return y
                                        }
                                    } else {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            return A.rv(y)
                                        }
                                    }
                                    return undefined
                            }
                            break;
                        case 8:
                            l = {};
                            l[e[1]] = x(e[2], t, r, n, o, p);
                            return l;
                            break;
                        case 9:
                            l = x(e[1], t, r, n, o, p);
                            v = x(e[2], t, r, n, o, p);

                            function O(e, t, r) {
                                var n, o;
                                h = A.hn(e) === "h";
                                _ = A.hn(t) === "h";
                                f = A.rv(e);
                                c = A.rv(t);
                                for (var a in c) {
                                    if (r || !f.hasOwnProperty(a)) {
                                        f[a] = M ? _ ? A.nh(c[a], "e") : c[a] : A.rv(c[a])
                                    }
                                }
                                return e
                            }
                            var s = l;
                            var j = true;
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                l = v;
                                v = s;
                                j = false
                            }
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                var P = {};
                                return O(O(P, l, j), v, j)
                            } else return O(l, v, j);
                            break;
                        case 10:
                            l = x(e[1], t, r, n, o, p);
                            l = M ? l : A.rv(l);
                            return l;
                            break;
                        case 12:
                            var P;
                            l = x(e[1], t, r, n, o);
                            if (!o.ap) {
                                return M && A.hn(l) === "h" ? A.nh(P, "f") : P
                            }
                            var w = o.ap;
                            v = x(e[2], t, r, n, o, p);
                            o.ap = w;
                            h = A.hn(l) === "h";
                            _ = N(v);
                            f = A.rv(l);
                            c = A.rv(v);
                            snap_bb = K(c, "nv_");
                            try {
                                P = typeof f === "function" ? K(f.apply(null, snap_bb)) : undefined
                            } catch (t) {
                                t.message = t.message.replace(/nv_/g, "");
                                t.stack = t.stack.substring(0, t.stack.indexOf("\n", t.stack.lastIndexOf("at nv_")));
                                t.stack = t.stack.replace(/\snv_/g, " ");
                                t.stack = T(t.stack);
                                if (n.debugInfo) {
                                    t.stack += "\n " + " " + " " + " at " + n.debugInfo[0] + ":" + n.debugInfo[1] + ":" + n.debugInfo[2];
                                    console.error(t)
                                }
                                P = undefined
                            }
                            return M && (_ || h) ? A.nh(P, "f") : P
                    }
                } else {
                    if (i === 3 || i === 1) return e[1];
                    else if (i === 11) {
                        var l = "";
                        for (var D = 1; D < e.length; D++) {
                            var S = A.rv(x(e[D], t, r, n, o, p));
                            l += typeof S === "undefined" ? "" : S
                        }
                        return l
                    }
                }
            }

            function e(e, t, r, n, o, a) {
                if (e[0] == "11182016") {
                    n.debugInfo = e[2];
                    return x(e[1], t, r, n, o, a)
                } else {
                    n.debugInfo = null;
                    return x(e, t, r, n, o, a)
                }
            }
            return e
        }
        var f = a(true);
        var c = a(false);

        function i(e, t, r, n, o, a, i, p) {
            {
                var u = {
                    is_affected: false
                };
                var l = f(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(a) || u.is_affected != p) {
                    console.warn("A. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(a) + ", " + p + " is expected")
                }
            } {
                var u = {
                    is_affected: false
                };
                var l = c(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(i) || u.is_affected != p) {
                    console.warn("B. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(i) + ", " + p + " is expected")
                }
            }
        }

        function y(e, t, r, n, o, a, i, p, u) {
            var l = A.hn(e) === "n";
            var f = A.rv(n);
            var v = f.hasOwnProperty(i);
            var c = f.hasOwnProperty(p);
            var s = f[i];
            var y = f[p];
            var b = Object.prototype.toString.call(A.rv(e));
            var d = b[8];
            if (d === "N" && b[10] === "l") d = "X";
            var h;
            if (l) {
                if (d === "A") {
                    var _;
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        _ = A.rv(e[g]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    var _;
                    for (var O in e) {
                        f[i] = e[O];
                        f[p] = l ? O : A.nh(O, "h");
                        _ = A.rv(e[O]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < e; g++) {
                        f[i] = g;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            } else {
                var j = A.rv(e);
                var _, P;
                if (d === "A") {
                    for (var g = 0; g < j.length; g++) {
                        P = j[g];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    for (var O in j) {
                        P = j[O];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? O : A.nh(O, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < j.length; g++) {
                        P = A.nh(j[g], "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < j; g++) {
                        P = A.nh(g, "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            }
            if (v) {
                f[i] = s
            } else {
                delete f[i]
            }
            if (c) {
                f[p] = y
            } else {
                delete f[p]
            }
        }

        function N(e) {
            if (A.hn(e) == "h") return true;
            if (typeof e !== "object") return false;
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    if (N(e[t])) return true
                }
            }
            return false
        }

        function b(e, t, r, n, o) {
            var a = false;
            var i = K(n, "", 2);
            if (o.ap && i && i.constructor === Function) {
                t = "$wxs:" + t;
                e.attr["$gdc"] = K
            }
            if (o.is_affected || N(n)) {
                e.n.push(t);
                e.raw[t] = n
            }
            e.attr[t] = i
        }

        function d(e, t, r, n, o, a) {
            a.opindex = r;
            var i = {},
                p;
            var u = c(z[r], n, o, a, i);
            b(e, t, r, u, i)
        }

        function h(e, t, r, n, o, a, i) {
            i.opindex = n;
            var p = {},
                u;
            var l = c(e[n], o, a, i, p);
            b(t, r, n, l, p)
        }

        function p(e, t, r, n) {
            n.opindex = e;
            var o = {};
            var a = c(z[e], t, r, n, o);
            return a && a.constructor === Function ? undefined : a
        }

        function l(e, t, r, n, o) {
            o.opindex = t;
            var a = {};
            var i = c(e[t], r, n, o, a);
            return i && i.constructor === Function ? undefined : i
        }

        function _(e, t, r, n, o) {
            var o = o || {};
            n.opindex = e;
            return f(z[e], t, r, n, o)
        }

        function w(e, t, r, n, o, a) {
            var a = a || {};
            o.opindex = t;
            return f(e[t], r, n, o, a)
        }

        function O(e, t, r, n, o, a, i, p, u) {
            var l = {};
            var f = _(e, r, n, o);
            y(f, t, r, n, o, a, i, p, u)
        }

        function j(e, t, r, n, o, a, i, p, u, l) {
            var f = {};
            var v = w(e, t, n, o, a);
            y(v, r, n, o, a, i, p, u, l)
        }

        function P(e, t, r, n, o, a) {
            var i = v(e);
            var p = 0;
            for (var u = 0; u < t.length; u += 2) {
                if (p + t[u + 1] < 0) {
                    i.attr[t[u]] = true
                } else {
                    d(i, t[u], p + t[u + 1], n, o, a);
                    if (p === 0) p = t[u + 1]
                }
            }
            for (var u = 0; u < r.length; u += 2) {
                if (p + r[u + 1] < 0) {
                    i.generics[r[u]] = ""
                } else {
                    var l = c(z[p + r[u + 1]], n, o, a);
                    if (l != "") l = "wx-" + l;
                    i.generics[r[u]] = l;
                    if (p === 0) p = r[u + 1]
                }
            }
            return i
        }

        function M(e, t, r, n, o, a, i) {
            var p = v(t);
            var u = 0;
            for (var l = 0; l < r.length; l += 2) {
                if (u + r[l + 1] < 0) {
                    p.attr[r[l]] = true
                } else {
                    h(e, p, r[l], u + r[l + 1], o, a, i);
                    if (u === 0) u = r[l + 1]
                }
            }
            for (var l = 0; l < n.length; l += 2) {
                if (u + n[l + 1] < 0) {
                    p.generics[n[l]] = ""
                } else {
                    var f = c(e[u + n[l + 1]], o, a, i);
                    if (f != "") f = "wx-" + f;
                    p.generics[n[l]] = f;
                    if (u === 0) u = n[l + 1]
                }
            }
            return p
        }
        var m = function() {
            if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
                x();
                C();
                k();
                U();
                I();
                L();
                E();
                R();
                F()
            }
            if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true
        };
        var x = function() {
            Object.defineProperty(Object.prototype, "nv_constructor", {
                writable: true,
                value: "Object"
            });
            Object.defineProperty(Object.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[object Object]"
                }
            })
        };
        var C = function() {
            Object.defineProperty(Function.prototype, "nv_constructor", {
                writable: true,
                value: "Function"
            });
            Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function() {}
            });
            Object.defineProperty(Function.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[function Function]"
                }
            })
        };
        var k = function() {
            Object.defineProperty(Array.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return this.nv_join()
                }
            });
            Object.defineProperty(Array.prototype, "nv_join", {
                writable: true,
                value: function(e) {
                    e = undefined == e ? "," : e;
                    var t = "";
                    for (var r = 0; r < this.length; ++r) {
                        if (0 != r) t += e;
                        if (null == this[r] || undefined == this[r]) t += "";
                        else if (typeof this[r] == "function") t += this[r].nv_toString();
                        else if (typeof this[r] == "object" && this[r].nv_constructor === "Array") t += this[r].nv_join();
                        else t += this[r].toString()
                    }
                    return t
                }
            });
            Object.defineProperty(Array.prototype, "nv_constructor", {
                writable: true,
                value: "Array"
            });
            Object.defineProperty(Array.prototype, "nv_concat", {
                writable: true,
                value: Array.prototype.concat
            });
            Object.defineProperty(Array.prototype, "nv_pop", {
                writable: true,
                value: Array.prototype.pop
            });
            Object.defineProperty(Array.prototype, "nv_push", {
                writable: true,
                value: Array.prototype.push
            });
            Object.defineProperty(Array.prototype, "nv_reverse", {
                writable: true,
                value: Array.prototype.reverse
            });
            Object.defineProperty(Array.prototype, "nv_shift", {
                writable: true,
                value: Array.prototype.shift
            });
            Object.defineProperty(Array.prototype, "nv_slice", {
                writable: true,
                value: Array.prototype.slice
            });
            Object.defineProperty(Array.prototype, "nv_sort", {
                writable: true,
                value: Array.prototype.sort
            });
            Object.defineProperty(Array.prototype, "nv_splice", {
                writable: true,
                value: Array.prototype.splice
            });
            Object.defineProperty(Array.prototype, "nv_unshift", {
                writable: true,
                value: Array.prototype.unshift
            });
            Object.defineProperty(Array.prototype, "nv_indexOf", {
                writable: true,
                value: Array.prototype.indexOf
            });
            Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
                writable: true,
                value: Array.prototype.lastIndexOf
            });
            Object.defineProperty(Array.prototype, "nv_every", {
                writable: true,
                value: Array.prototype.every
            });
            Object.defineProperty(Array.prototype, "nv_some", {
                writable: true,
                value: Array.prototype.some
            });
            Object.defineProperty(Array.prototype, "nv_forEach", {
                writable: true,
                value: Array.prototype.forEach
            });
            Object.defineProperty(Array.prototype, "nv_map", {
                writable: true,
                value: Array.prototype.map
            });
            Object.defineProperty(Array.prototype, "nv_filter", {
                writable: true,
                value: Array.prototype.filter
            });
            Object.defineProperty(Array.prototype, "nv_reduce", {
                writable: true,
                value: Array.prototype.reduce
            });
            Object.defineProperty(Array.prototype, "nv_reduceRight", {
                writable: true,
                value: Array.prototype.reduceRight
            });
            Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var U = function() {
            Object.defineProperty(String.prototype, "nv_constructor", {
                writable: true,
                value: "String"
            });
            Object.defineProperty(String.prototype, "nv_toString", {
                writable: true,
                value: String.prototype.toString
            });
            Object.defineProperty(String.prototype, "nv_valueOf", {
                writable: true,
                value: String.prototype.valueOf
            });
            Object.defineProperty(String.prototype, "nv_charAt", {
                writable: true,
                value: String.prototype.charAt
            });
            Object.defineProperty(String.prototype, "nv_charCodeAt", {
                writable: true,
                value: String.prototype.charCodeAt
            });
            Object.defineProperty(String.prototype, "nv_concat", {
                writable: true,
                value: String.prototype.concat
            });
            Object.defineProperty(String.prototype, "nv_indexOf", {
                writable: true,
                value: String.prototype.indexOf
            });
            Object.defineProperty(String.prototype, "nv_lastIndexOf", {
                writable: true,
                value: String.prototype.lastIndexOf
            });
            Object.defineProperty(String.prototype, "nv_localeCompare", {
                writable: true,
                value: String.prototype.localeCompare
            });
            Object.defineProperty(String.prototype, "nv_match", {
                writable: true,
                value: String.prototype.match
            });
            Object.defineProperty(String.prototype, "nv_replace", {
                writable: true,
                value: String.prototype.replace
            });
            Object.defineProperty(String.prototype, "nv_search", {
                writable: true,
                value: String.prototype.search
            });
            Object.defineProperty(String.prototype, "nv_slice", {
                writable: true,
                value: String.prototype.slice
            });
            Object.defineProperty(String.prototype, "nv_split", {
                writable: true,
                value: String.prototype.split
            });
            Object.defineProperty(String.prototype, "nv_substring", {
                writable: true,
                value: String.prototype.substring
            });
            Object.defineProperty(String.prototype, "nv_toLowerCase", {
                writable: true,
                value: String.prototype.toLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
                writable: true,
                value: String.prototype.toLocaleLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toUpperCase", {
                writable: true,
                value: String.prototype.toUpperCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
                writable: true,
                value: String.prototype.toLocaleUpperCase
            });
            Object.defineProperty(String.prototype, "nv_trim", {
                writable: true,
                value: String.prototype.trim
            });
            Object.defineProperty(String.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var I = function() {
            Object.defineProperty(Boolean.prototype, "nv_constructor", {
                writable: true,
                value: "Boolean"
            });
            Object.defineProperty(Boolean.prototype, "nv_toString", {
                writable: true,
                value: Boolean.prototype.toString
            });
            Object.defineProperty(Boolean.prototype, "nv_valueOf", {
                writable: true,
                value: Boolean.prototype.valueOf
            })
        };
        var L = function() {
            Object.defineProperty(Number, "nv_MAX_VALUE", {
                writable: false,
                value: Number.MAX_VALUE
            });
            Object.defineProperty(Number, "nv_MIN_VALUE", {
                writable: false,
                value: Number.MIN_VALUE
            });
            Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
                writable: false,
                value: Number.NEGATIVE_INFINITY
            });
            Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
                writable: false,
                value: Number.POSITIVE_INFINITY
            });
            Object.defineProperty(Number.prototype, "nv_constructor", {
                writable: true,
                value: "Number"
            });
            Object.defineProperty(Number.prototype, "nv_toString", {
                writable: true,
                value: Number.prototype.toString
            });
            Object.defineProperty(Number.prototype, "nv_toLocaleString", {
                writable: true,
                value: Number.prototype.toLocaleString
            });
            Object.defineProperty(Number.prototype, "nv_valueOf", {
                writable: true,
                value: Number.prototype.valueOf
            });
            Object.defineProperty(Number.prototype, "nv_toFixed", {
                writable: true,
                value: Number.prototype.toFixed
            });
            Object.defineProperty(Number.prototype, "nv_toExponential", {
                writable: true,
                value: Number.prototype.toExponential
            });
            Object.defineProperty(Number.prototype, "nv_toPrecision", {
                writable: true,
                value: Number.prototype.toPrecision
            })
        };
        var E = function() {
            Object.defineProperty(Math, "nv_E", {
                writable: false,
                value: Math.E
            });
            Object.defineProperty(Math, "nv_LN10", {
                writable: false,
                value: Math.LN10
            });
            Object.defineProperty(Math, "nv_LN2", {
                writable: false,
                value: Math.LN2
            });
            Object.defineProperty(Math, "nv_LOG2E", {
                writable: false,
                value: Math.LOG2E
            });
            Object.defineProperty(Math, "nv_LOG10E", {
                writable: false,
                value: Math.LOG10E
            });
            Object.defineProperty(Math, "nv_PI", {
                writable: false,
                value: Math.PI
            });
            Object.defineProperty(Math, "nv_SQRT1_2", {
                writable: false,
                value: Math.SQRT1_2
            });
            Object.defineProperty(Math, "nv_SQRT2", {
                writable: false,
                value: Math.SQRT2
            });
            Object.defineProperty(Math, "nv_abs", {
                writable: false,
                value: Math.abs
            });
            Object.defineProperty(Math, "nv_acos", {
                writable: false,
                value: Math.acos
            });
            Object.defineProperty(Math, "nv_asin", {
                writable: false,
                value: Math.asin
            });
            Object.defineProperty(Math, "nv_atan", {
                writable: false,
                value: Math.atan
            });
            Object.defineProperty(Math, "nv_atan2", {
                writable: false,
                value: Math.atan2
            });
            Object.defineProperty(Math, "nv_ceil", {
                writable: false,
                value: Math.ceil
            });
            Object.defineProperty(Math, "nv_cos", {
                writable: false,
                value: Math.cos
            });
            Object.defineProperty(Math, "nv_exp", {
                writable: false,
                value: Math.exp
            });
            Object.defineProperty(Math, "nv_floor", {
                writable: false,
                value: Math.floor
            });
            Object.defineProperty(Math, "nv_log", {
                writable: false,
                value: Math.log
            });
            Object.defineProperty(Math, "nv_max", {
                writable: false,
                value: Math.max
            });
            Object.defineProperty(Math, "nv_min", {
                writable: false,
                value: Math.min
            });
            Object.defineProperty(Math, "nv_pow", {
                writable: false,
                value: Math.pow
            });
            Object.defineProperty(Math, "nv_random", {
                writable: false,
                value: Math.random
            });
            Object.defineProperty(Math, "nv_round", {
                writable: false,
                value: Math.round
            });
            Object.defineProperty(Math, "nv_sin", {
                writable: false,
                value: Math.sin
            });
            Object.defineProperty(Math, "nv_sqrt", {
                writable: false,
                value: Math.sqrt
            });
            Object.defineProperty(Math, "nv_tan", {
                writable: false,
                value: Math.tan
            })
        };
        var R = function() {
            Object.defineProperty(Date.prototype, "nv_constructor", {
                writable: true,
                value: "Date"
            });
            Object.defineProperty(Date, "nv_parse", {
                writable: true,
                value: Date.parse
            });
            Object.defineProperty(Date, "nv_UTC", {
                writable: true,
                value: Date.UTC
            });
            Object.defineProperty(Date, "nv_now", {
                writable: true,
                value: Date.now
            });
            Object.defineProperty(Date.prototype, "nv_toString", {
                writable: true,
                value: Date.prototype.toString
            });
            Object.defineProperty(Date.prototype, "nv_toDateString", {
                writable: true,
                value: Date.prototype.toDateString
            });
            Object.defineProperty(Date.prototype, "nv_toTimeString", {
                writable: true,
                value: Date.prototype.toTimeString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleString", {
                writable: true,
                value: Date.prototype.toLocaleString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
                writable: true,
                value: Date.prototype.toLocaleDateString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
                writable: true,
                value: Date.prototype.toLocaleTimeString
            });
            Object.defineProperty(Date.prototype, "nv_valueOf", {
                writable: true,
                value: Date.prototype.valueOf
            });
            Object.defineProperty(Date.prototype, "nv_getTime", {
                writable: true,
                value: Date.prototype.getTime
            });
            Object.defineProperty(Date.prototype, "nv_getFullYear", {
                writable: true,
                value: Date.prototype.getFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
                writable: true,
                value: Date.prototype.getUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getMonth", {
                writable: true,
                value: Date.prototype.getMonth
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
                writable: true,
                value: Date.prototype.getUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_getDate", {
                writable: true,
                value: Date.prototype.getDate
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDate", {
                writable: true,
                value: Date.prototype.getUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_getDay", {
                writable: true,
                value: Date.prototype.getDay
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDay", {
                writable: true,
                value: Date.prototype.getUTCDay
            });
            Object.defineProperty(Date.prototype, "nv_getHours", {
                writable: true,
                value: Date.prototype.getHours
            });
            Object.defineProperty(Date.prototype, "nv_getUTCHours", {
                writable: true,
                value: Date.prototype.getUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_getMinutes", {
                writable: true,
                value: Date.prototype.getMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
                writable: true,
                value: Date.prototype.getUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getSeconds", {
                writable: true,
                value: Date.prototype.getSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
                writable: true,
                value: Date.prototype.getUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
                writable: true,
                value: Date.prototype.getMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
                writable: true,
                value: Date.prototype.getUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
                writable: true,
                value: Date.prototype.getTimezoneOffset
            });
            Object.defineProperty(Date.prototype, "nv_setTime", {
                writable: true,
                value: Date.prototype.setTime
            });
            Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
                writable: true,
                value: Date.prototype.setMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
                writable: true,
                value: Date.prototype.setUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setSeconds", {
                writable: true,
                value: Date.prototype.setSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
                writable: true,
                value: Date.prototype.setUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setMinutes", {
                writable: true,
                value: Date.prototype.setMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
                writable: true,
                value: Date.prototype.setUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setHours", {
                writable: true,
                value: Date.prototype.setHours
            });
            Object.defineProperty(Date.prototype, "nv_setUTCHours", {
                writable: true,
                value: Date.prototype.setUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_setDate", {
                writable: true,
                value: Date.prototype.setDate
            });
            Object.defineProperty(Date.prototype, "nv_setUTCDate", {
                writable: true,
                value: Date.prototype.setUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_setMonth", {
                writable: true,
                value: Date.prototype.setMonth
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
                writable: true,
                value: Date.prototype.setUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_setFullYear", {
                writable: true,
                value: Date.prototype.setFullYear
            });
            Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
                writable: true,
                value: Date.prototype.setUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_toUTCString", {
                writable: true,
                value: Date.prototype.toUTCString
            });
            Object.defineProperty(Date.prototype, "nv_toISOString", {
                writable: true,
                value: Date.prototype.toISOString
            });
            Object.defineProperty(Date.prototype, "nv_toJSON", {
                writable: true,
                value: Date.prototype.toJSON
            })
        };
        var F = function() {
            Object.defineProperty(RegExp.prototype, "nv_constructor", {
                writable: true,
                value: "RegExp"
            });
            Object.defineProperty(RegExp.prototype, "nv_exec", {
                writable: true,
                value: RegExp.prototype.exec
            });
            Object.defineProperty(RegExp.prototype, "nv_test", {
                writable: true,
                value: RegExp.prototype.test
            });
            Object.defineProperty(RegExp.prototype, "nv_toString", {
                writable: true,
                value: RegExp.prototype.toString
            });
            Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                    return this.source
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                    return this.global
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                    return this.ignoreCase
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                    return this.multiline
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                    return this.lastIndex
                },
                set: function(e) {
                    this.lastIndex = e
                }
            })
        };
        m();
        var J = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(Date);
            return new(Function.prototype.bind.apply(Date, e))
        };
        var B = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(RegExp);
            return new(Function.prototype.bind.apply(RegExp, e))
        };
        var Y = {};
        Y.nv_log = function() {
            var e = "WXSRT:";
            for (var t = 0; t < arguments.length; ++t) e += arguments[t] + " ";
            console.log(e)
        };
        var G = parseInt,
            X = parseFloat,
            H = isNaN,
            V = isFinite,
            $ = decodeURI,
            W = decodeURIComponent,
            Q = encodeURI,
            q = encodeURIComponent;

        function K(e, t, r) {
            e = A.rv(e);
            if (e === null || e === undefined) return e;
            if (typeof e === "string" || typeof e === "boolean" || typeof e === "number") return e;
            if (e.constructor === Object) {
                var n = {};
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o))
                        if (undefined === t) n[o.substring(3)] = K(e[o], t, r);
                        else n[t + o] = K(e[o], t, r);
                return n
            }
            if (e.constructor === Array) {
                var n = [];
                for (var a = 0; a < e.length; a++) n.push(K(e[a], t, r));
                return n
            }
            if (e.constructor === Date) {
                var n = new Date;
                n.setTime(e.getTime());
                return n
            }
            if (e.constructor === RegExp) {
                var i = "";
                if (e.global) i += "g";
                if (e.ignoreCase) i += "i";
                if (e.multiline) i += "m";
                return new RegExp(e.source, i)
            }
            if (r && typeof e === "function") {
                if (r == 1) return K(e(), undefined, 2);
                if (r == 2) return e
            }
            return null
        }
        var Z = {};
        Z.nv_stringify = function(e) {
            JSON.stringify(e);
            return JSON.stringify(K(e))
        };
        Z.nv_parse = function(e) {
            if (e === undefined) return undefined;
            var t = JSON.parse(e);
            return K(t, "nv_")
        };

        function ee(e, t, r, n) {
            e.extraAttr = {
                t_action: t,
                t_rawid: r
            };
            if (typeof n != "undefined") e.extraAttr.t_cid = n
        }

        function te() {
            if (typeof __globalThis.__webview_engine_version__ == "undefined") return 0;
            return __globalThis.__webview_engine_version__
        }

        function re(e, t, r, n, o, a) {
            var i = ne(t, r, n);
            if (i) e.push(i);
            else {
                e.push("");
                u(n + ":import:" + o + ":" + a + ": Path `" + t + "` not found from `" + n + "`.")
            }
        }

        function ne(e, t, r) {
            if (e[0] != "/") {
                var n = r.split("/");
                n.pop();
                var o = e.split("/");
                for (var a = 0; a < o.length; a++) {
                    if (o[a] == "..") n.pop();
                    else if (!o[a] || o[a] == ".") continue;
                    else n.push(o[a])
                }
                e = n.join("/")
            }
            if (r[0] == "." && e[0] == "/") e = "." + e;
            if (t[e]) return e;
            if (t[e + ".wxml"]) return e + ".wxml"
        }

        function oe(e, t, r, n) {
            if (!t) return;
            if (n[e][t]) return n[e][t];
            for (var o = r[e].i.length - 1; o >= 0; o--) {
                if (r[e].i[o] && n[r[e].i[o]][t]) return n[r[e].i[o]][t]
            }
            for (var o = r[e].ti.length - 1; o >= 0; o--) {
                var a = ne(r[e].ti[o], r, e);
                if (a && n[a][t]) return n[a][t]
            }
            var i = ae(r, e);
            for (var o = 0; o < i.length; o++) {
                if (i[o] && n[i[o]][t]) return n[i[o]][t]
            }
            for (var p = r[e].j.length - 1; p >= 0; p--)
                if (r[e].j[p]) {
                    for (var a = r[r[e].j[p]].ti.length - 1; a >= 0; a--) {
                        var u = ne(r[r[e].j[p]].ti[a], r, e);
                        if (u && n[u][t]) {
                            return n[u][t]
                        }
                    }
                }
        }

        function ae(e, t) {
            if (!t) return [];
            if ($gaic[t]) {
                return $gaic[t]
            }
            var r = [],
                n = [],
                o = 0,
                a = 0,
                i = {},
                p = {};
            n.push(t);
            p[t] = true;
            a++;
            while (o < a) {
                var u = n[o++];
                for (var l = 0; l < e[u].ic.length; l++) {
                    var f = e[u].ic[l];
                    var v = ne(f, e, u);
                    if (v && !p[v]) {
                        p[v] = true;
                        n.push(v);
                        a++
                    }
                }
                for (var l = 0; u != t && l < e[u].ti.length; l++) {
                    var c = e[u].ti[l];
                    var s = ne(c, e, u);
                    if (s && !i[s]) {
                        i[s] = true;
                        r.push(s)
                    }
                }
            }
            $gaic[t] = r;
            return r
        }
        var ie = {};

        function pe(e, t, r, n, o, a, i) {
            var p = ne(e, t, r);
            t[r].j.push(p);
            if (p) {
                if (ie[p]) {
                    u("-1:include:-1:-1: `" + e + "` is being included in a loop, will be stop.");
                    return
                }
                ie[p] = true;
                try {
                    t[p].f(n, o, a, i)
                } catch (n) {}
                ie[p] = false
            } else {
                u(r + ":include:-1:-1: Included path `" + e + "` not found from `" + r + "`.")
            }
        }

        function ue(e, t, r, n) {
            u(t + ":template:" + r + ":" + n + ": Template `" + e + "` not found.")
        }

        function le(e) {
            var t = false;
            delete e.properities;
            delete e.n;
            if (e.children) {
                do {
                    t = false;
                    var r = [];
                    for (var n = 0; n < e.children.length; n++) {
                        var o = e.children[n];
                        if (o.tag == "virtual") {
                            t = true;
                            for (var a = 0; o.children && a < o.children.length; a++) {
                                r.push(o.children[a])
                            }
                        } else {
                            r.push(o)
                        }
                    }
                    e.children = r
                } while (t);
                for (var n = 0; n < e.children.length; n++) {
                    le(e.children[n])
                }
            }
            return e
        }

        function fe(e) {
            if (e.tag == "wx-wx-scope") {
                e.tag = "virtual";
                e.wxCkey = "11";
                e["wxScopeData"] = e.attr["wx:scope-data"];
                delete e.n;
                delete e.raw;
                delete e.generics;
                delete e.attr
            }
            for (var t = 0; e.children && t < e.children.length; t++) {
                fe(e.children[t])
            }
            return e
        }
        return {
            a: D,
            b: S,
            c: v,
            d: e,
            e: t,
            f: u,
            g: r,
            h: s,
            i: n,
            j: o,
            k: A,
            l: T,
            m: a,
            n: f,
            o: c,
            p: i,
            q: y,
            r: N,
            s: b,
            t: d,
            u: h,
            v: p,
            w: l,
            x: _,
            y: w,
            z: O,
            A: j,
            B: P,
            C: M,
            D: J,
            E: B,
            F: Y,
            G: G,
            H: X,
            I: H,
            J: V,
            K: $,
            L: W,
            M: Q,
            N: q,
            O: K,
            P: Z,
            Q: ee,
            R: te,
            S: re,
            T: ne,
            U: oe,
            V: ae,
            W: ie,
            X: pe,
            Y: ue,
            Z: le,
            aa: fe
        }
    }()
});
Object.freeze(__g);
g = "";
__wxAppCode__['app.json'] = {
    "pages": ["pages/square/square", "pages/home/home", "pages/message/message", "pages/my/my/index", "pages/my/my/user", "pages/my/my/follow", "pages/my/my/report", "pages/my/my/visitor-list", "pages/square/square-search/index", "pages/square/square-search/search-list", "pages/home/select-address/select-address", "pages/home/select-address/select-address-list", "pages/home/select-address/search-address", "pages/home/select-address/select-all-address", "pages/square/square-details/shortVideo", "pages/square/square-details/index", "pages/square/detail-share", "pages/home/details/detail", "pages/home/details/comment/index", "pages/square/topi-details/index", "pages/web-view/web-view", "pages/my/settings/setting", "pages/my/settings/teenage-mode", "pages/my/settings/certification", "pages/home/home-search", "pages/my/settings/about", "pages/common/login/login-mp", "pages/message/chat-room", "pages/message/favouriteCommentList", "pages/message/followers", "pages/message/chat-skill-list", "pages/message/chat-skill-fare", "pages/common/orders/order", "pages/common/orders/order-time", "pages/common/orders/hairstyle", "pages/common/orders/order-confirm", "pages/common/orders/order-finish", "pages/common/orders/edit-remark", "pages/common/orders/edit-example", "pages/common/evaluation/evaluation", "pages/common/login/password", "pages/common/login/cancel-lation", "pages/my/history/index", "pages/my/order/order-list", "pages/my/order/order-detail", "pages/my/order/order-refund", "pages/my/edit-profile/edit-profile", "pages/my/edit-profile/input-signatures", "pages/my/settings/account-security", "pages/my/settings/administrators", "pages/my/settings/searchReferral", "pages/my/settings/address/address", "pages/my/settings/blackList", "pages/my/settings/address/address-detail", "pages/my/wallet/wallet", "pages/my/settled-platform/settled-cate", "pages/my/wallet/withdrawal-detail", "pages/my/wallet/wallet-detail", "pages/common/fullscreen-modal/settlein-tip-modal"],
    "subPackages": [{
        "root": "package-sub/",
        "pages": ["pages/activity/activity-list", "pages/activity/invite-order", "pages/activity/reward-ranking", "pages/organ/organManage/index", "pages/organ/organManage/organDetail", "pages/organ/organManage/infoOne", "pages/organ/organManage/infoTwo", "pages/organ/organManage/infoThree", "pages/organ/organManage/organSettleIn", "pages/organ/organInvitation/invitationStepOne", "pages/organ/organInvitation/invitationStepTwo", "pages/organ/organInvitation/invitationStepThree", "pages/organ/organInvitation/invitationStepFour", "pages/organ/organManage/addOrganUser", "pages/organ/organInvitation/invitationSignatory", "pages/organ/organInvitation/invitationSignatoryStepOne", "pages/organ/organManage/organUserList", "pages/organ/organManage/joinOrgan", "pages/organ/organManage/organAssessmentList", "pages/organ/assessManage/index", "pages/organ/assessManage/modifyCampusList", "pages/organ/assessManage/offlineAssess", "pages/coupon/coupon", "pages/coupon/coupon-order", "pages/activity/activity-detail"],
        "name": "package-sub"
    }],
    "window": {
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "沙梨",
        "navigationBarBackgroundColor": "#fff",
        "backgroundColor": "#fff",
        "onReachBottomDistance": 100
    },
    "tabBar": {
        "color": "#999999",
        "selectedColor": "#56B6F3",
        "borderStyle": "white",
        "backgroundColor": "#ffffff",
        "list": [{
            "pagePath": "pages/home/home",
            "text": "预约",
            "iconPath": "/static/images/tabbar/icon-b-home.png",
            "selectedIconPath": "/static/images/tabbar/icon-c-home.png"
        }, {
            "pagePath": "pages/square/square",
            "text": "社区",
            "iconPath": "/static/images/tabbar/icon-b-hd.png",
            "selectedIconPath": "/static/images/tabbar/icon-c-hd.png"
        }, {
            "pagePath": "pages/message/message",
            "text": "消息",
            "iconPath": "/static/images/tabbar/icon-b-ms.png",
            "selectedIconPath": "/static/images/tabbar/icon-c-ms.png"
        }, {
            "pagePath": "pages/my/my/index",
            "text": "我的",
            "iconPath": "/static/images/tabbar/icon-b-my.png",
            "selectedIconPath": "/static/images/tabbar/icon-c-my.png"
        }]
    },
    "networkTimeout": {
        "uploadFile": 600000
    },
    "lazyCodeLoading": "requiredComponents",
    "permission": {
        "scope.userLocation": {
            "desc": "你的位置信息将用于小程序位置接口的效果展示"
        }
    },
    "requiredPrivateInfos": ["getLocation", "chooseLocation"],
    "plugins": {},
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/activity-banner/activity-banner.json'] = {
    "component": true,
    "usingComponents": {
        "up-swiper": "../../node-modules/uview-plus/components/u-swiper/u-swiper",
        "my-cache-image-index": "../cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/avatar/index.json'] = {
    "component": true,
    "usingComponents": {
        "work-cover": "../work-cover/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/base-button/base-button.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/cache-image/index.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/calendar-popup/calendar-popup.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-popup": "../../node-modules/uview-plus/components/u-popup/u-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/contract-rules-popup/contract-rules-popup.json'] = {
    "component": true,
    "usingComponents": {
        "up-loading-icon": "../../node-modules/uview-plus/components/u-loading-icon/u-loading-icon",
        "up-popup": "../../node-modules/uview-plus/components/u-popup/u-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/datetime-popup/datetime-popup.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-popup": "../../node-modules/uview-plus/components/u-popup/u-popup",
        "calendar-popup": "../calendar-popup/calendar-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/description-popup/description-popup.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../cache-image/index",
        "up-popup": "../../node-modules/uview-plus/components/u-popup/u-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/filter-button/filter-button.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/filter-popup/filter-popup.json'] = {
    "component": true,
    "usingComponents": {
        "up-popup": "../../node-modules/uview-plus/components/u-popup/u-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/gesture/index.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/img-list-scroll/img-list-scroll.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/info-item/info-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../cache-image/index",
        "up-copy": "../../node-modules/uview-plus/components/u-copy/u-copy",
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/l-ui/l-login/l-login.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/l-ui/l-status-bar/l-status-bar.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/list/cell.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/list/index.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/load-more/index.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/loading-status/loading-status.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/navbar/navbar.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/orange-tabs/orange-tabs.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/search-enter/search-enter.json'] = {
    "component": true,
    "usingComponents": {
        "up-input": "../../node-modules/uview-plus/components/u-input/u-input",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/select-makeup-category/select-makeup-category.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/select-position/select-position.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/share-sheet/index.json'] = {
    "component": true,
    "usingComponents": {
        "up-divider": "../../node-modules/uview-plus/components/u-divider/u-divider",
        "up-avatar": "../../node-modules/uview-plus/components/u-avatar/u-avatar",
        "up-checkbox": "../../node-modules/uview-plus/components/u-checkbox/u-checkbox",
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-checkbox-group": "../../node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group",
        "up-textarea": "../../node-modules/uview-plus/components/u-textarea/u-textarea",
        "up-button": "../../node-modules/uview-plus/components/u-button/u-button",
        "my-cache-image-index": "../cache-image/index",
        "up-action-sheet": "../../node-modules/uview-plus/components/u-action-sheet/u-action-sheet",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/sort-filter-control/sort-filter-control.json'] = {
    "component": true,
    "usingComponents": {
        "filter-button": "../filter-button/filter-button",
        "sort-indicator": "../sort-indicator/sort-indicator",
        "sort-item-text": "../sort-item-text/sort-item-text",
        "sort-select": "../sort-select/sort-select",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/sort-indicator/sort-indicator.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/sort-item-text/sort-item-text.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/sort-select/sort-select.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/tip-bar/tip-bar.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "my-cache-image-index": "../cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/title/title.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/tk-map/tianditu-static-map.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/tsp-video/video.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/user-simple-card/user-simple-card.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/view-image-popup/view-image-popup.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-rate": "../../node-modules/uview-plus/components/u-rate/u-rate",
        "l-login": "../l-ui/l-login/l-login",
        "up-overlay": "../../node-modules/uview-plus/components/u-overlay/u-overlay",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['components/work-cover/index.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../cache-image/index",
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/@zebra-ui/swiper/components/z-swiper-item/z-swiper-item.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/@zebra-ui/swiper/components/z-swiper-shadow/z-shadow.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/@zebra-ui/swiper/components/z-swiper/z-navigation.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/@zebra-ui/swiper/components/z-swiper/z-pagination.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/@zebra-ui/swiper/components/z-swiper/z-scrollbar.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/@zebra-ui/swiper/components/z-swiper/z-swiper.json'] = {
    "component": true,
    "usingComponents": {
        "navigation": "./z-navigation",
        "pagination": "./z-pagination",
        "scrollbar": "./z-scrollbar",
        "shadow": "../z-swiper-shadow/z-shadow",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-action-sheet/u-action-sheet.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "u-line": "../u-line/u-line",
        "u-loading-icon": "../u-loading-icon/u-loading-icon",
        "u-gap": "../u-gap/u-gap",
        "u-popup": "../u-popup/u-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-avatar/u-avatar.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "up-text": "../u-text/u-text",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-badge/u-badge.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-button/u-button.json'] = {
    "component": true,
    "usingComponents": {
        "u-loading-icon": "../u-loading-icon/u-loading-icon",
        "up-icon": "../u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-cell-group/u-cell-group.json'] = {
    "component": true,
    "usingComponents": {
        "u-line": "../u-line/u-line",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-cell/u-cell.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "u-line": "../u-line/u-line",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-checkbox/u-checkbox.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-copy/u-copy.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-count-down/u-count-down.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-datetime-picker/u-datetime-picker.json'] = {
    "component": true,
    "usingComponents": {
        "up-input": "../u-input/u-input",
        "u-picker": "../u-picker/u-picker",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-divider/u-divider.json'] = {
    "component": true,
    "usingComponents": {
        "u-line": "../u-line/u-line",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-empty/u-empty.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-gap/u-gap.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-icon/u-icon.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-index-anchor/u-index-anchor.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-index-item/u-index-item.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-index-list/u-index-list.json'] = {
    "component": true,
    "usingComponents": {
        "u-transition": "../u-transition/u-transition",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-input/u-input.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-line/u-line.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-link/u-link.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-loading-icon/u-loading-icon.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-loading-page/u-loading-page.json'] = {
    "component": true,
    "usingComponents": {
        "u-loading-icon": "../u-loading-icon/u-loading-icon",
        "u-transition": "../u-transition/u-transition",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-loadmore/u-loadmore.json'] = {
    "component": true,
    "usingComponents": {
        "u-line": "../u-line/u-line",
        "u-loading-icon": "../u-loading-icon/u-loading-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-modal/u-modal.json'] = {
    "component": true,
    "usingComponents": {
        "u-line": "../u-line/u-line",
        "u-loading-icon": "../u-loading-icon/u-loading-icon",
        "u-popup": "../u-popup/u-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-navbar/u-navbar.json'] = {
    "component": true,
    "usingComponents": {
        "u-status-bar": "../u-status-bar/u-status-bar",
        "up-icon": "../u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-overlay/u-overlay.json'] = {
    "component": true,
    "usingComponents": {
        "u-transition": "../u-transition/u-transition",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-parse/node/node.json'] = {
    "component": true,
    "usingComponents": {
        "node": "./node",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-parse/u-parse.json'] = {
    "component": true,
    "usingComponents": {
        "node": "./node/node",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-picker/u-picker.json'] = {
    "component": true,
    "usingComponents": {
        "up-input": "../u-input/u-input",
        "u-toolbar": "../u-toolbar/u-toolbar",
        "u-loading-icon": "../u-loading-icon/u-loading-icon",
        "u-popup": "../u-popup/u-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-popup/u-popup.json'] = {
    "component": true,
    "usingComponents": {
        "u-overlay": "../u-overlay/u-overlay",
        "u-status-bar": "../u-status-bar/u-status-bar",
        "up-icon": "../u-icon/u-icon",
        "u-safe-bottom": "../u-safe-bottom/u-safe-bottom",
        "u-transition": "../u-transition/u-transition",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-qrcode/u-qrcode.json'] = {
    "component": true,
    "usingComponents": {
        "up-loading-icon": "../u-loading-icon/u-loading-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-radio-group/u-radio-group.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-radio/u-radio.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-rate/u-rate.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-status-bar/u-status-bar.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-steps-item/u-steps-item.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "up-text": "../u-text/u-text",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-steps/u-steps.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-sticky/u-sticky.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-swiper-indicator/u-swiper-indicator.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-swiper/u-swiper.json'] = {
    "component": true,
    "usingComponents": {
        "up-loading-icon": "../u-loading-icon/u-loading-icon",
        "up-swiper-indicator": "../u-swiper-indicator/u-swiper-indicator",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-switch/u-switch.json'] = {
    "component": true,
    "usingComponents": {
        "u-loading-icon": "../u-loading-icon/u-loading-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-tabs/u-tabs.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "u-badge": "../u-badge/u-badge",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-tag/u-tag.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "u-transition": "../u-transition/u-transition",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-text/u-text.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "u-link": "../u-link/u-link",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-textarea/u-textarea.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-toolbar/u-toolbar.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-transition/u-transition.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-upload/u-upload.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../u-icon/u-icon",
        "u-loading-icon": "../u-loading-icon/u-loading-icon",
        "up-gap": "../u-gap/u-gap",
        "up-popup": "../u-popup/u-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['node-modules/uview-plus/components/u-waterfall/u-waterfall.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/evaluation/evaluation.json'] = {
    "navigationBarTitleText": "写评价",
    "usingComponents": {
        "up-rate": "../../../node-modules/uview-plus/components/u-rate/u-rate",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-upload": "../../../node-modules/uview-plus/components/u-upload/u-upload",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "detail-item": "../../my/order/components/detail-item/detail-item",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/fullscreen-modal/settlein-tip-modal.json'] = {
    "navigationBarTitleText": "入驻平台合约",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/login/cancel-lation.json'] = {
    "navigationBarTitleText": "注销账号",
    "backgroundColor": "#ffffff",
    "navigationStyle": "custom",
    "navigationBarTextStyle": "black",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/login/login-mp.json'] = {
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-input": "../../../node-modules/uview-plus/components/u-input/u-input",
        "up-button": "../../../node-modules/uview-plus/components/u-button/u-button",
        "l-login": "../../../components/l-ui/l-login/l-login",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/login/password.json'] = {
    "navigationBarTitleText": "修改密码",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-input": "../../../node-modules/uview-plus/components/u-input/u-input",
        "up-button": "../../../node-modules/uview-plus/components/u-button/u-button",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/components/cart-item/cart-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/components/confirm-item/confirm-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/components/coupon-item/coupon-item.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/components/hairstyle-item/hairstyle-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/components/makeup-item/makeup-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/components/order-cart/order-cart.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "up-popup": "../../../../../node-modules/uview-plus/components/u-popup/u-popup",
        "cart-item": "../cart-item/cart-item",
        "coupon-item": "../coupon-item/coupon-item",
        "other-expenses": "../other-expenses/other-expenses",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/components/other-expenses/other-expenses.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/components/time-picker-popup/time-picker-item.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/components/time-picker-popup/time-picker-popup.json'] = {
    "component": true,
    "usingComponents": {
        "up-popup": "../../../../../node-modules/uview-plus/components/u-popup/u-popup",
        "time-picker-item": "./time-picker-item",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/edit-example.json'] = {
    "navigationBarTitleText": "参考图",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-upload": "../../../node-modules/uview-plus/components/u-upload/u-upload",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/edit-remark.json'] = {
    "navigationBarTitleText": "备注",
    "usingComponents": {
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/hairstyle.json'] = {
    "navigationBarTitleText": "选发型",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "title": "../../../components/title/title",
        "hairstyle-item": "./components/hairstyle-item/hairstyle-item",
        "makeup-item": "./components/makeup-item/makeup-item",
        "order-cart": "./components/order-cart/order-cart",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/order-confirm.json'] = {
    "navigationBarTitleText": "确认订单",
    "usingComponents": {
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "contract-rules-popup": "../../../components/contract-rules-popup/contract-rules-popup",
        "title": "../../../components/title/title",
        "order-paytype": "../../my/order/components/order-paytype/order-paytype",
        "confirm-item": "./components/confirm-item/confirm-item",
        "coupon-item": "./components/coupon-item/coupon-item",
        "other-expenses": "./components/other-expenses/other-expenses",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/order-finish.json'] = {
    "navigationBarTitleText": "订单支付",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "my-cache-image-index": "../../../components/cache-image/index",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "title": "../../../components/title/title",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/order-time.json'] = {
    "navigationBarTitleText": "选择跟妆时间",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "calendar-popup": "../../../components/calendar-popup/calendar-popup",
        "time-picker-popup": "./components/time-picker-popup/time-picker-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/common/orders/order.json'] = {
    "navigationBarTitleText": "确认订单",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "datetime-popup": "../../../components/datetime-popup/datetime-popup",
        "orange-tabs": "../../../components/orange-tabs/orange-tabs",
        "title": "../../../components/title/title",
        "user-simple-card": "../../../components/user-simple-card/user-simple-card",
        "makeup-item": "./components/makeup-item/makeup-item",
        "order-cart": "./components/order-cart/order-cart",
        "other-expenses": "./components/other-expenses/other-expenses",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/components/makeup-card-list/makeup-card-list.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "up-empty": "../../../../node-modules/uview-plus/components/u-empty/u-empty",
        "img-list-scroll": "../../../../components/img-list-scroll/img-list-scroll",
        "loading-status": "../../../../components/loading-status/loading-status",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/components/photographer-card-list/photographer-card-list.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "up-empty": "../../../../node-modules/uview-plus/components/u-empty/u-empty",
        "l-login": "../../../../components/l-ui/l-login/l-login",
        "img-list-scroll": "../../../../components/img-list-scroll/img-list-scroll",
        "loading-status": "../../../../components/loading-status/loading-status",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/details/comment/index.json'] = {
    "navigationBarTitleText": "全部评论",
    "usingComponents": {
        "up-loadmore": "../../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-safe-bottom": "../../../../node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom",
        "my-list-index": "../../../../components/list/index",
        "comment-item": "../components/comment-item/comment-item",
        "makeup-category": "../components/makeup-category/makeup-category",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/details/components/comment-item/comment-item.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-sticky": "../../../../../node-modules/uview-plus/components/u-sticky/u-sticky",
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "up-rate": "../../../../../node-modules/uview-plus/components/u-rate/u-rate",
        "up-empty": "../../../../../node-modules/uview-plus/components/u-empty/u-empty",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/details/components/makeup-category/makeup-category.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/details/detail.json'] = {
    "navigationBarTitleText": "技能详情",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-tabs": "../../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "up-waterfall": "../../../node-modules/uview-plus/components/u-waterfall/u-waterfall",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "l-login": "../../../components/l-ui/l-login/l-login",
        "description-popup": "../../../components/description-popup/description-popup",
        "tip-bar": "../../../components/tip-bar/tip-bar",
        "title": "../../../components/title/title",
        "view-image-popup": "../../../components/view-image-popup/view-image-popup",
        "comment-item": "./components/comment-item/comment-item",
        "makeup-category": "./components/makeup-category/makeup-category",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/home-search.json'] = {
    "navigationBarTitleText": "搜索",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../components/navbar/navbar",
        "search-enter": "../../components/search-enter/search-enter",
        "makeup-card-list": "./components/makeup-card-list/makeup-card-list",
        "photographer-card-list": "./components/photographer-card-list/photographer-card-list",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/home.json'] = {
    "navigationBarTitleText": "首页",
    "navigationBarTextStyle": "black",
    "navigationStyle": "custom",
    "enablePullDownRefresh": false,
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-tabs": "../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "up-popup": "../../node-modules/uview-plus/components/u-popup/u-popup",
        "activity-banner": "../../components/activity-banner/activity-banner",
        "filter-popup": "../../components/filter-popup/filter-popup",
        "search-enter": "../../components/search-enter/search-enter",
        "select-makeup-category": "../../components/select-makeup-category/select-makeup-category",
        "select-position": "../../components/select-position/select-position",
        "sort-filter-control": "../../components/sort-filter-control/sort-filter-control",
        "tip-bar": "../../components/tip-bar/tip-bar",
        "makeup-card-list": "./components/makeup-card-list/makeup-card-list",
        "photographer-card-list": "./components/photographer-card-list/photographer-card-list",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/select-address/components/position-top/position-top.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/select-address/search-address.json'] = {
    "navigationBarTitleText": "搜索地址",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-empty": "../../../node-modules/uview-plus/components/u-empty/u-empty",
        "loading-status": "../../../components/loading-status/loading-status",
        "search-enter": "../../../components/search-enter/search-enter",
        "position-top": "./components/position-top/position-top",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/select-address/select-address-list.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "up-tabs": "../../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "up-index-anchor": "../../../node-modules/uview-plus/components/u-index-anchor/u-index-anchor",
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-rate": "../../../node-modules/uview-plus/components/u-rate/u-rate",
        "up-index-item": "../../../node-modules/uview-plus/components/u-index-item/u-index-item",
        "up-index-list": "../../../node-modules/uview-plus/components/u-index-list/u-index-list",
        "search-enter": "../../../components/search-enter/search-enter",
        "position-top": "./components/position-top/position-top",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/select-address/select-address.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-tabs": "../../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "search-enter": "../../../components/search-enter/search-enter",
        "position-top": "./components/position-top/position-top",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/home/select-address/select-all-address.json'] = {
    "navigationBarTitleText": "全部地址",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-empty": "../../../node-modules/uview-plus/components/u-empty/u-empty",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "l-login": "../../../components/l-ui/l-login/l-login",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/chat-room.json'] = {
    "navigationBarTitleText": "聊天室",
    "navigationStyle": "custom",
    "navigationBarTextStyle": "black",
    "usingComponents": {
        "navbar": "../../components/navbar/navbar",
        "up-popup": "../../node-modules/uview-plus/components/u-popup/u-popup",
        "detail-qrcode": "../my/order/components/detail-qrcode/detail-qrcode",
        "order-paytype": "../my/order/components/order-paytype/order-paytype",
        "chat-list": "./components/chat-content/chat-list",
        "chat-official-list": "./components/chat-content/chat-official-list",
        "chat-skill-card": "./components/chat-content/chat-skill-card",
        "chat-control": "./components/chat-control/chat-control",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/chat-skill-fare.json'] = {
    "navigationBarTitleText": "发送车补",
    "usingComponents": {
        "up-empty": "../../node-modules/uview-plus/components/u-empty/u-empty",
        "l-status-bar": "../../components/l-ui/l-status-bar/l-status-bar",
        "user-simple-card": "../../components/user-simple-card/user-simple-card",
        "skill-fare-item": "./components/chat-content/skill-fare-item",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/chat-skill-list.json'] = {
    "navigationBarTitleText": "我的技能",
    "navigationStyle": "custom",
    "usingComponents": {
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-content/chat-list.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "chat-item": "../chat-item/chat-item",
        "chat-system": "../chat-item/chat-system",
        "chat-timestamp": "../chat-item/chat-timestamp",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-content/chat-official-list.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-empty": "../../../../node-modules/uview-plus/components/u-empty/u-empty",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-content/chat-skill-card.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "contract-rules-popup": "../../../../components/contract-rules-popup/contract-rules-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-content/skill-fare-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-control/chat-control.json'] = {
    "component": true,
    "usingComponents": {
        "control-emoji": "./control-emoji",
        "control-intro": "./control-intro",
        "control-menu": "./control-menu",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-control/control-emoji.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-control/control-intro.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-control/control-menu.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-item/chat-image.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-item/chat-item.json'] = {
    "component": true,
    "usingComponents": {
        "chat-image": "./chat-image",
        "chat-location": "./chat-location",
        "chat-service": "./chat-service",
        "chat-share": "./chat-share",
        "chat-subsidy": "./chat-subsidy",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-item/chat-location.json'] = {
    "component": true,
    "usingComponents": {
        "tianditu-static-map": "../../../../components/tk-map/tianditu-static-map",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-item/chat-service.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-item/chat-share.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-item/chat-subsidy.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-item/chat-system.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/chat-item/chat-timestamp.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/message-list/dot.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/message-list/message-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-avatar-index": "../../../../components/avatar/index",
        "my-cache-image-index": "../../../../components/cache-image/index",
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "dot": "./dot",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/components/message-list/message-list.json'] = {
    "component": true,
    "usingComponents": {
        "my-list-cell": "../../../../components/list/cell",
        "my-list-index": "../../../../components/list/index",
        "load-more": "../../../../components/load-more/index",
        "message-item": "./message-item",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/favouriteCommentList.json'] = {
    "navigationBarTitleText": "赞和收藏",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../components/navbar/navbar",
        "my-avatar-index": "../../components/avatar/index",
        "up-loadmore": "../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-empty": "../../node-modules/uview-plus/components/u-empty/u-empty",
        "work-cover": "../../components/work-cover/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/followers.json'] = {
    "navigationBarTitleText": "粉丝",
    "usingComponents": {
        "my-avatar-index": "../../components/avatar/index",
        "up-empty": "../../node-modules/uview-plus/components/u-empty/u-empty",
        "up-loadmore": "../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/message/message.json'] = {
    "navigationBarTitleText": "消息",
    "navigationStyle": "custom",
    "backgroundColor": "#fff",
    "navigationBarTextStyle": "black",
    "usingComponents": {
        "navbar": "../../components/navbar/navbar",
        "my-cache-image-index": "../../components/cache-image/index",
        "l-login": "../../components/l-ui/l-login/l-login",
        "message-list": "./components/message-list/message-list",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/components/follow-list.json'] = {
    "component": true,
    "usingComponents": {
        "up-avatar": "../../../node-modules/uview-plus/components/u-avatar/u-avatar",
        "up-tag": "../../../node-modules/uview-plus/components/u-tag/u-tag",
        "up-loadmore": "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-empty": "../../../node-modules/uview-plus/components/u-empty/u-empty",
        "my-list-index": "../../../components/list/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/components/list-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-waterfall": "../../../node-modules/uview-plus/components/u-waterfall/u-waterfall",
        "up-loadmore": "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-empty": "../../../node-modules/uview-plus/components/u-empty/u-empty",
        "work-cover": "../../../components/work-cover/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/components/menu-popup.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-popup": "../../../node-modules/uview-plus/components/u-popup/u-popup",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/components/tabs-list.json'] = {
    "component": true,
    "usingComponents": {
        "up-tabs": "../../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "list-item": "./list-item",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/edit-profile/edit-profile.json'] = {
    "navigationBarTitleText": "编辑资料",
    "usingComponents": {
        "my-avatar-index": "../../../components/avatar/index",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-copy": "../../../node-modules/uview-plus/components/u-copy/u-copy",
        "up-safe-bottom": "../../../node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom",
        "up-picker": "../../../node-modules/uview-plus/components/u-picker/u-picker",
        "t-cropper": "../../../uni_modules/t-cropper/components/t-cropper/t-cropper",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/edit-profile/input-signatures.json'] = {
    "navigationBarTitleText": "个人简介",
    "usingComponents": {
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/history/index.json'] = {
    "navigationBarTitleText": "浏览记录",
    "usingComponents": {
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-waterfall": "../../../node-modules/uview-plus/components/u-waterfall/u-waterfall",
        "up-loadmore": "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-safe-bottom": "../../../node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom",
        "up-empty": "../../../node-modules/uview-plus/components/u-empty/u-empty",
        "my-list-index": "../../../components/list/index",
        "work-cover": "../../../components/work-cover/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/my/follow.json'] = {
    "navigationBarTitleText": "关注",
    "navigationStyle": "custom",
    "navigationBarTextStyle": "black",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "up-tabs": "../../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "follow-list": "../components/follow-list",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/my/index.json'] = {
    "navigationBarTitleText": "我的",
    "navigationStyle": "custom",
    "navigationBarTextStyle": "white",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-avatar": "../../../node-modules/uview-plus/components/u-avatar/u-avatar",
        "up-navbar": "../../../node-modules/uview-plus/components/u-navbar/u-navbar",
        "up-copy": "../../../node-modules/uview-plus/components/u-copy/u-copy",
        "my-cache-image-index": "../../../components/cache-image/index",
        "my-list-index": "../../../components/list/index",
        "l-login": "../../../components/l-ui/l-login/l-login",
        "share-sheet": "../../../components/share-sheet/index",
        "menu-popup": "../components/menu-popup",
        "tabs-list": "../components/tabs-list",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/my/report.json'] = {
    "navigationBarTitleText": "举报",
    "navigationBarTextStyle": "black",
    "usingComponents": {
        "up-textarea": "../../../node-modules/uview-plus/components/u-textarea/u-textarea",
        "up-upload": "../../../node-modules/uview-plus/components/u-upload/u-upload",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/my/user.json'] = {
    "navigationBarTitleText": "用户",
    "navigationStyle": "custom",
    "navigationBarTextStyle": "white",
    "usingComponents": {
        "up-avatar": "../../../node-modules/uview-plus/components/u-avatar/u-avatar",
        "up-navbar": "../../../node-modules/uview-plus/components/u-navbar/u-navbar",
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-copy": "../../../node-modules/uview-plus/components/u-copy/u-copy",
        "my-list-index": "../../../components/list/index",
        "l-login": "../../../components/l-ui/l-login/l-login",
        "share-sheet": "../../../components/share-sheet/index",
        "tabs-list": "../components/tabs-list",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/my/visitor-list.json'] = {
    "navigationBarTitleText": "访客列表",
    "navigationBarTextStyle": "black",
    "usingComponents": {
        "up-avatar": "../../../node-modules/uview-plus/components/u-avatar/u-avatar",
        "up-tag": "../../../node-modules/uview-plus/components/u-tag/u-tag",
        "up-loadmore": "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-empty": "../../../node-modules/uview-plus/components/u-empty/u-empty",
        "my-list-index": "../../../components/list/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/components/detail-item/detail-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/components/detail-operation/detail-operation.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-popup": "../../../../../node-modules/uview-plus/components/u-popup/u-popup",
        "contract-rules-popup": "../../../../../components/contract-rules-popup/contract-rules-popup",
        "order-paytype": "../order-paytype/order-paytype",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/components/detail-qrcode/detail-qrcode.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "up-copy": "../../../../../node-modules/uview-plus/components/u-copy/u-copy",
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/components/order-item/order-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../../components/cache-image/index",
        "order-status-label": "../order-status-label/order-status-label",
        "order-operation": "./order-operation",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/components/order-item/order-operation.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/components/order-paytype/order-paytype.json'] = {
    "component": true,
    "usingComponents": {
        "up-radio": "../../../../../node-modules/uview-plus/components/u-radio/u-radio",
        "up-radio-group": "../../../../../node-modules/uview-plus/components/u-radio-group/u-radio-group",
        "title": "../../../../../components/title/title",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/components/order-status-label/order-status-label.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-count-down": "../../../../../node-modules/uview-plus/components/u-count-down/u-count-down",
        "up-popup": "../../../../../node-modules/uview-plus/components/u-popup/u-popup",
        "detail-qrcode": "../detail-qrcode/detail-qrcode",
        "order-paytype": "../order-paytype/order-paytype",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/order-detail.json'] = {
    "navigationBarTitleText": "订单详情",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "up-steps-item": "../../../node-modules/uview-plus/components/u-steps-item/u-steps-item",
        "up-steps": "../../../node-modules/uview-plus/components/u-steps/u-steps",
        "up-count-down": "../../../node-modules/uview-plus/components/u-count-down/u-count-down",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "info-item": "../../../components/info-item/info-item",
        "title": "../../../components/title/title",
        "user-simple-card": "../../../components/user-simple-card/user-simple-card",
        "coupon-item": "../../common/orders/components/coupon-item/coupon-item",
        "other-expenses": "../../common/orders/components/other-expenses/other-expenses",
        "detail-item": "./components/detail-item/detail-item",
        "detail-operation": "./components/detail-operation/detail-operation",
        "detail-qrcode": "./components/detail-qrcode/detail-qrcode",
        "order-status-label": "./components/order-status-label/order-status-label",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/order-list.json'] = {
    "navigationBarTitleText": "我的订单",
    "navigationStyle": "custom",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-tabs": "../../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "up-loadmore": "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-empty": "../../../node-modules/uview-plus/components/u-empty/u-empty",
        "contract-rules-popup": "../../../components/contract-rules-popup/contract-rules-popup",
        "order-item": "./components/order-item/order-item",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/order/order-refund.json'] = {
    "navigationBarTitleText": "退款申请",
    "usingComponents": {
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "title": "../../../components/title/title",
        "user-simple-card": "../../../components/user-simple-card/user-simple-card",
        "other-expenses": "../../common/orders/components/other-expenses/other-expenses",
        "detail-item": "./components/detail-item/detail-item",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/about.json'] = {
    "navigationBarTitleText": "关于沙梨",
    "usingComponents": {
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/account-security.json'] = {
    "navigationBarTitleText": "账号与安全",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/address/address-detail.json'] = {
    "navigationBarTitleText": "修改地址",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../../components/navbar/navbar",
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-switch": "../../../../node-modules/uview-plus/components/u-switch/u-switch",
        "l-status-bar": "../../../../components/l-ui/l-status-bar/l-status-bar",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/address/address.json'] = {
    "navigationBarTitleText": "地址管理",
    "usingComponents": {
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "l-status-bar": "../../../../components/l-ui/l-status-bar/l-status-bar",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/administrators.json'] = {
    "navigationBarTitleText": "隐私设置",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-switch": "../../../node-modules/uview-plus/components/u-switch/u-switch",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/blackList.json'] = {
    "navigationBarTitleText": "黑名单用户",
    "usingComponents": {
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-empty": "../../../node-modules/uview-plus/components/u-empty/u-empty",
        "up-loadmore": "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-modal": "../../../node-modules/uview-plus/components/u-modal/u-modal",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/certification.json'] = {
    "navigationBarTitleText": "社区公约",
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/searchReferral.json'] = {
    "navigationBarTitleText": "个性化内容推荐设置",
    "usingComponents": {
        "up-switch": "../../../node-modules/uview-plus/components/u-switch/u-switch",
        "up-cell": "../../../node-modules/uview-plus/components/u-cell/u-cell",
        "up-cell-group": "../../../node-modules/uview-plus/components/u-cell-group/u-cell-group",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/setting.json'] = {
    "navigationBarTitleText": "设置",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settings/teenage-mode.json'] = {
    "navigationBarTitleText": "青少年模式",
    "navigationStyle": "custom",
    "usingComponents": {
        "navbar": "../../../components/navbar/navbar",
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-input": "../../../node-modules/uview-plus/components/u-input/u-input",
        "up-modal": "../../../node-modules/uview-plus/components/u-modal/u-modal",
        "l-status-bar": "../../../components/l-ui/l-status-bar/l-status-bar",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/settled-platform/settled-cate.json'] = {
    "navigationBarTitleText": "入驻平台",
    "usingComponents": {
        "my-cache-image-index": "../../../components/cache-image/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/wallet/components/wallet-layout-card.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-loading-icon": "../../../../node-modules/uview-plus/components/u-loading-icon/u-loading-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/wallet/components/wallet-layout-item.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "up-loading-icon": "../../../../node-modules/uview-plus/components/u-loading-icon/u-loading-icon",
        "up-icon": "../../../../node-modules/uview-plus/components/u-icon/u-icon",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/wallet/wallet-detail.json'] = {
    "navigationBarTitleText": "收益明细",
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/wallet/wallet.json'] = {
    "navigationBarTitleText": "我的钱包",
    "usingComponents": {
        "wallet-layout-card": "./components/wallet-layout-card",
        "wallet-layout-item": "./components/wallet-layout-item",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/my/wallet/withdrawal-detail.json'] = {
    "navigationBarTitleText": "提现明细",
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/detail-share.json'] = {
    "navigationBarTitleText": "聊天列表",
    "navigationBarTextStyle": "black",
    "navigationStyle": "custom",
    "usingComponents": {
        "up-navbar": "../../node-modules/uview-plus/components/u-navbar/u-navbar",
        "up-input": "../../node-modules/uview-plus/components/u-input/u-input",
        "up-checkbox": "../../node-modules/uview-plus/components/u-checkbox/u-checkbox",
        "my-avatar-index": "../../components/avatar/index",
        "up-checkbox-group": "../../node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group",
        "up-safe-bottom": "../../node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom",
        "up-textarea": "../../node-modules/uview-plus/components/u-textarea/u-textarea",
        "up-button": "../../node-modules/uview-plus/components/u-button/u-button",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square-details/comment.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-tag": "../../../node-modules/uview-plus/components/u-tag/u-tag",
        "u-line": "../../../node-modules/uview-plus/components/u-line/u-line",
        "up-loadmore": "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square-details/index.json'] = {
    "navigationBarTitleText": "动态详情",
    "navigationBarTextStyle": "black",
    "navigationStyle": "custom",
    "usingComponents": {
        "up-safe-bottom": "../../../node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-textarea": "../../../node-modules/uview-plus/components/u-textarea/u-textarea",
        "up-popup": "../../../node-modules/uview-plus/components/u-popup/u-popup",
        "l-login": "../../../components/l-ui/l-login/l-login",
        "up-action-sheet": "../../../node-modules/uview-plus/components/u-action-sheet/u-action-sheet",
        "navbar": "./navbar",
        "section": "./section",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square-details/navbar.json'] = {
    "component": true,
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-avatar": "../../../node-modules/uview-plus/components/u-avatar/u-avatar",
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-button": "../../../node-modules/uview-plus/components/u-button/u-button",
        "up-modal": "../../../node-modules/uview-plus/components/u-modal/u-modal",
        "share-sheet": "../../../components/share-sheet/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square-details/section.json'] = {
    "component": true,
    "usingComponents": {
        "up-parse": "../../../node-modules/uview-plus/components/u-parse/u-parse",
        "up-divider": "../../../node-modules/uview-plus/components/u-divider/u-divider",
        "comment": "./comment",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square-details/shortVideo.json'] = {
    "navigationBarTitleText": "动态视频",
    "navigationBarTextStyle": "black",
    "navigationStyle": "custom",
    "usingComponents": {
        "up-navbar": "../../../node-modules/uview-plus/components/u-navbar/u-navbar",
        "up-avatar": "../../../node-modules/uview-plus/components/u-avatar/u-avatar",
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-parse": "../../../node-modules/uview-plus/components/u-parse/u-parse",
        "up-button": "../../../node-modules/uview-plus/components/u-button/u-button",
        "up-popup": "../../../node-modules/uview-plus/components/u-popup/u-popup",
        "up-textarea": "../../../node-modules/uview-plus/components/u-textarea/u-textarea",
        "l-login": "../../../components/l-ui/l-login/l-login",
        "up-action-sheet": "../../../node-modules/uview-plus/components/u-action-sheet/u-action-sheet",
        "gesture": "../../../components/gesture/index",
        "share-sheet": "../../../components/share-sheet/index",
        "tw-videov": "../../../components/tsp-video/video",
        "comment": "./comment",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square-list.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../components/cache-image/index",
        "up-waterfall": "../../node-modules/uview-plus/components/u-waterfall/u-waterfall",
        "up-loadmore": "../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-empty": "../../node-modules/uview-plus/components/u-empty/u-empty",
        "my-list-index": "../../components/list/index",
        "work-cover": "../../components/work-cover/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square-search/components/search-user.json'] = {
    "component": true,
    "usingComponents": {
        "my-cache-image-index": "../../../../components/cache-image/index",
        "up-loadmore": "../../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-safe-bottom": "../../../../node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom",
        "up-empty": "../../../../node-modules/uview-plus/components/u-empty/u-empty",
        "my-list-index": "../../../../components/list/index",
        "l-login": "../../../../components/l-ui/l-login/l-login",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square-search/index.json'] = {
    "navigationBarTitleText": "搜素",
    "navigationBarTextStyle": "black",
    "navigationStyle": "custom",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "search-enter": "../../../components/search-enter/search-enter",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square-search/search-list.json'] = {
    "navigationBarTitleText": "搜素",
    "navigationBarTextStyle": "black",
    "navigationStyle": "custom",
    "usingComponents": {
        "up-icon": "../../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-tabs": "../../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "search-enter": "../../../components/search-enter/search-enter",
        "square-list": "../square-list",
        "search-user": "./components/search-user",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/square.json'] = {
    "navigationBarTitleText": "社区",
    "navigationBarTextStyle": "black",
    "navigationStyle": "custom",
    "usingComponents": {
        "up-loading-page": "../../node-modules/uview-plus/components/u-loading-page/u-loading-page",
        "up-icon": "../../node-modules/uview-plus/components/u-icon/u-icon",
        "up-tabs": "../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "u-transition": "../../node-modules/uview-plus/components/u-transition/u-transition",
        "z-swiper-item": "../../node-modules/@zebra-ui/swiper/components/z-swiper-item/z-swiper-item",
        "z-swiper": "../../node-modules/@zebra-ui/swiper/components/z-swiper/z-swiper",
        "square-list": "./square-list",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/square/topi-details/index.json'] = {
    "navigationBarTitleText": "话题详情",
    "navigationBarTextStyle": "black",
    "navigationStyle": "custom",
    "usingComponents": {
        "up-navbar": "../../../node-modules/uview-plus/components/u-navbar/u-navbar",
        "my-cache-image-index": "../../../components/cache-image/index",
        "up-tabs": "../../../node-modules/uview-plus/components/u-tabs/u-tabs",
        "up-waterfall": "../../../node-modules/uview-plus/components/u-waterfall/u-waterfall",
        "up-loadmore": "../../../node-modules/uview-plus/components/u-loadmore/u-loadmore",
        "up-safe-bottom": "../../../node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom",
        "up-empty": "../../../node-modules/uview-plus/components/u-empty/u-empty",
        "my-list-index": "../../../components/list/index",
        "l-login": "../../../components/l-ui/l-login/l-login",
        "work-cover": "../../../components/work-cover/index",
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['pages/web-view/web-view.json'] = {
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};
__wxAppCode__['project.config.json'] = {
    "miniprogramRoot": "",
    "__compileDebugInfo__": {
        "useSummer": true
    }
};
__wxAppCode__['uni_modules/t-cropper/components/t-cropper/t-cropper.json'] = {
    "component": true,
    "usingComponents": {
        "base-button": "/components/base-button/base-button"
    }
};;
var __WXML_DEP__ = __WXML_DEP__ || {};;
var __LAZY_CODE_LOADING_CHUNK_MAP__ = __LAZY_CODE_LOADING_CHUNK_MAP__ || {};
[
    ['chunk_0', ['components/activity-banner/activity-banner', 'components/filter-button/filter-button', 'components/filter-popup/filter-popup', 'components/select-makeup-category/select-makeup-category', 'components/select-position/select-position', 'components/sort-filter-control/sort-filter-control', 'components/sort-indicator/sort-indicator', 'components/sort-item-text/sort-item-text', 'components/sort-select/sort-select', 'node-modules/uview-plus/components/u-swiper-indicator/u-swiper-indicator', 'node-modules/uview-plus/components/u-swiper/u-swiper', 'pages/home/home', ]],
    ['chunk_1', ['components/avatar/index', ]],
    ['chunk_10', ['components/info-item/info-item', 'node-modules/uview-plus/components/u-steps-item/u-steps-item', 'node-modules/uview-plus/components/u-steps/u-steps', 'pages/my/order/components/detail-operation/detail-operation', 'pages/my/order/order-detail', ]],
    ['chunk_100', ['pages/my/settings/blackList', ]],
    ['chunk_101', ['pages/my/settings/certification', ]],
    ['chunk_102', ['pages/my/settings/setting', ]],
    ['chunk_103', ['pages/my/settings/teenage-mode', ]],
    ['chunk_104', ['pages/my/settled-platform/settled-cate', ]],
    ['chunk_105', ['pages/my/wallet/components/wallet-layout-card', 'pages/my/wallet/components/wallet-layout-item', 'pages/my/wallet/wallet', ]],
    ['chunk_106', ['pages/my/wallet/wallet-detail', ]],
    ['chunk_107', ['pages/my/wallet/withdrawal-detail', ]],
    ['chunk_108', ['pages/square/detail-share', ]],
    ['chunk_109', ['pages/square/square-details/index', 'pages/square/square-details/navbar', 'pages/square/square-details/section', ]],
    ['chunk_11', ['components/l-ui/l-login/l-login', ]],
    ['chunk_110', ['pages/square/square-list', ]],
    ['chunk_111', ['pages/square/square-search/components/search-user', 'pages/square/square-search/search-list', ]],
    ['chunk_112', ['pages/square/square-search/index', ]],
    ['chunk_113', ['pages/square/topi-details/index', ]],
    ['chunk_114', ['pages/web-view/web-view', ]],
    ['chunk_12', ['components/l-ui/l-status-bar/l-status-bar', ]],
    ['chunk_13', ['components/list/cell', 'components/load-more/index', 'pages/message/components/message-list/dot', 'pages/message/components/message-list/message-item', 'pages/message/components/message-list/message-list', 'pages/message/message', ]],
    ['chunk_14', ['components/list/index', ]],
    ['chunk_15', ['components/loading-status/loading-status', ]],
    ['chunk_16', ['components/navbar/navbar', ]],
    ['chunk_17', ['components/search-enter/search-enter', ]],
    ['chunk_18', ['components/share-sheet/index', 'node-modules/uview-plus/components/u-action-sheet/u-action-sheet', 'node-modules/uview-plus/components/u-divider/u-divider', ]],
    ['chunk_19', ['components/tip-bar/tip-bar', ]],
    ['chunk_2', ['components/base-button/base-button', ]],
    ['chunk_20', ['components/title/title', ]],
    ['chunk_21', ['components/tk-map/tianditu-static-map', 'pages/message/chat-room', 'pages/message/components/chat-content/chat-list', 'pages/message/components/chat-content/chat-official-list', 'pages/message/components/chat-content/chat-skill-card', 'pages/message/components/chat-control/chat-control', 'pages/message/components/chat-control/control-emoji', 'pages/message/components/chat-control/control-intro', 'pages/message/components/chat-control/control-menu', 'pages/message/components/chat-item/chat-image', 'pages/message/components/chat-item/chat-item', 'pages/message/components/chat-item/chat-location', 'pages/message/components/chat-item/chat-service', 'pages/message/components/chat-item/chat-share', 'pages/message/components/chat-item/chat-subsidy', 'pages/message/components/chat-item/chat-system', 'pages/message/components/chat-item/chat-timestamp', ]],
    ['chunk_22', ['components/user-simple-card/user-simple-card', ]],
    ['chunk_23', ['components/work-cover/index', ]],
    ['chunk_24', ['node-modules/@zebra-ui/swiper/components/z-swiper-item/z-swiper-item', 'node-modules/@zebra-ui/swiper/components/z-swiper-shadow/z-shadow', 'node-modules/@zebra-ui/swiper/components/z-swiper/z-navigation', 'node-modules/@zebra-ui/swiper/components/z-swiper/z-pagination', 'node-modules/@zebra-ui/swiper/components/z-swiper/z-scrollbar', 'node-modules/@zebra-ui/swiper/components/z-swiper/z-swiper', 'node-modules/uview-plus/components/u-loading-page/u-loading-page', 'pages/square/square', ]],
    ['chunk_25', ['node-modules/uview-plus/components/u-avatar/u-avatar', ]],
    ['chunk_26', ['node-modules/uview-plus/components/u-badge/u-badge', 'node-modules/uview-plus/components/u-tabs/u-tabs', ]],
    ['chunk_27', ['node-modules/uview-plus/components/u-button/u-button', ]],
    ['chunk_28', ['node-modules/uview-plus/components/u-cell-group/u-cell-group', 'node-modules/uview-plus/components/u-cell/u-cell', 'pages/my/settings/searchReferral', ]],
    ['chunk_29', ['node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group', 'node-modules/uview-plus/components/u-checkbox/u-checkbox', ]],
    ['chunk_3', ['components/cache-image/index', ]],
    ['chunk_30', ['node-modules/uview-plus/components/u-copy/u-copy', ]],
    ['chunk_31', ['node-modules/uview-plus/components/u-count-down/u-count-down', 'pages/my/order/components/order-status-label/order-status-label', ]],
    ['chunk_32', ['node-modules/uview-plus/components/u-datetime-picker/u-datetime-picker', ]],
    ['chunk_33', ['node-modules/uview-plus/components/u-empty/u-empty', ]],
    ['chunk_34', ['node-modules/uview-plus/components/u-gap/u-gap', ]],
    ['chunk_35', ['node-modules/uview-plus/components/u-icon/u-icon', ]],
    ['chunk_36', ['node-modules/uview-plus/components/u-index-anchor/u-index-anchor', 'node-modules/uview-plus/components/u-index-item/u-index-item', 'node-modules/uview-plus/components/u-index-list/u-index-list', 'pages/home/select-address/select-address-list', ]],
    ['chunk_37', ['node-modules/uview-plus/components/u-input/u-input', ]],
    ['chunk_38', ['node-modules/uview-plus/components/u-line/u-line', ]],
    ['chunk_39', ['node-modules/uview-plus/components/u-link/u-link', 'node-modules/uview-plus/components/u-text/u-text', ]],
    ['chunk_4', ['components/calendar-popup/calendar-popup', ]],
    ['chunk_40', ['node-modules/uview-plus/components/u-loading-icon/u-loading-icon', ]],
    ['chunk_41', ['node-modules/uview-plus/components/u-loadmore/u-loadmore', ]],
    ['chunk_42', ['node-modules/uview-plus/components/u-modal/u-modal', ]],
    ['chunk_43', ['node-modules/uview-plus/components/u-navbar/u-navbar', ]],
    ['chunk_44', ['node-modules/uview-plus/components/u-overlay/u-overlay', 'node-modules/uview-plus/components/u-popup/u-popup', ]],
    ['chunk_45', ['node-modules/uview-plus/components/u-parse/node/node', 'node-modules/uview-plus/components/u-parse/u-parse', 'pages/square/square-details/comment', ]],
    ['chunk_46', ['node-modules/uview-plus/components/u-picker/u-picker', 'node-modules/uview-plus/components/u-toolbar/u-toolbar', ]],
    ['chunk_47', ['node-modules/uview-plus/components/u-qrcode/u-qrcode', ]],
    ['chunk_48', ['node-modules/uview-plus/components/u-rate/u-rate', ]],
    ['chunk_49', ['node-modules/uview-plus/components/u-safe-bottom/u-safe-bottom', ]],
    ['chunk_5', ['components/contract-rules-popup/contract-rules-popup', 'node-modules/uview-plus/components/u-radio-group/u-radio-group', 'node-modules/uview-plus/components/u-radio/u-radio', 'pages/my/order/components/order-paytype/order-paytype', ]],
    ['chunk_50', ['node-modules/uview-plus/components/u-status-bar/u-status-bar', ]],
    ['chunk_51', ['node-modules/uview-plus/components/u-sticky/u-sticky', 'pages/home/details/components/comment-item/comment-item', 'pages/home/details/components/makeup-category/makeup-category', ]],
    ['chunk_52', ['node-modules/uview-plus/components/u-switch/u-switch', ]],
    ['chunk_53', ['node-modules/uview-plus/components/u-tag/u-tag', ]],
    ['chunk_54', ['node-modules/uview-plus/components/u-textarea/u-textarea', ]],
    ['chunk_55', ['node-modules/uview-plus/components/u-transition/u-transition', ]],
    ['chunk_56', ['node-modules/uview-plus/components/u-upload/u-upload', ]],
    ['chunk_57', ['node-modules/uview-plus/components/u-waterfall/u-waterfall', ]],
    ['chunk_58', ['pages/common/evaluation/evaluation', ]],
    ['chunk_59', ['pages/common/fullscreen-modal/settlein-tip-modal', ]],
    ['chunk_6', ['components/datetime-popup/datetime-popup', 'components/orange-tabs/orange-tabs', 'pages/common/orders/order', ]],
    ['chunk_60', ['pages/common/login/cancel-lation', ]],
    ['chunk_61', ['pages/common/login/login-mp', ]],
    ['chunk_62', ['pages/common/login/password', ]],
    ['chunk_63', ['pages/common/orders/components/cart-item/cart-item', 'pages/common/orders/components/makeup-item/makeup-item', 'pages/common/orders/components/order-cart/order-cart', ]],
    ['chunk_64', ['pages/common/orders/components/confirm-item/confirm-item', 'pages/common/orders/order-confirm', ]],
    ['chunk_65', ['pages/common/orders/components/coupon-item/coupon-item', ]],
    ['chunk_66', ['pages/common/orders/components/hairstyle-item/hairstyle-item', 'pages/common/orders/hairstyle', ]],
    ['chunk_67', ['pages/common/orders/components/other-expenses/other-expenses', ]],
    ['chunk_68', ['pages/common/orders/components/time-picker-popup/time-picker-item', 'pages/common/orders/components/time-picker-popup/time-picker-popup', 'pages/common/orders/order-time', ]],
    ['chunk_69', ['pages/common/orders/edit-example', ]],
    ['chunk_7', ['components/description-popup/description-popup', 'components/view-image-popup/view-image-popup', 'pages/home/details/detail', ]],
    ['chunk_70', ['pages/common/orders/edit-remark', ]],
    ['chunk_71', ['pages/common/orders/order-finish', ]],
    ['chunk_72', ['pages/home/details/comment/index', ]],
    ['chunk_73', ['pages/home/home-search', ]],
    ['chunk_74', ['pages/home/select-address/components/position-top/position-top', ]],
    ['chunk_75', ['pages/home/select-address/search-address', ]],
    ['chunk_76', ['pages/home/select-address/select-address', ]],
    ['chunk_77', ['pages/home/select-address/select-all-address', ]],
    ['chunk_78', ['pages/message/chat-skill-fare', 'pages/message/components/chat-content/skill-fare-item', ]],
    ['chunk_79', ['pages/message/chat-skill-list', ]],
    ['chunk_8', ['components/gesture/index', 'components/tsp-video/video', 'pages/square/square-details/shortVideo', ]],
    ['chunk_80', ['pages/message/favouriteCommentList', ]],
    ['chunk_81', ['pages/message/followers', ]],
    ['chunk_82', ['pages/my/components/follow-list', 'pages/my/my/follow', ]],
    ['chunk_83', ['pages/my/components/list-item', 'pages/my/components/tabs-list', ]],
    ['chunk_84', ['pages/my/components/menu-popup', 'pages/my/my/index', ]],
    ['chunk_85', ['pages/my/edit-profile/edit-profile', 'uni_modules/t-cropper/components/t-cropper/t-cropper', ]],
    ['chunk_86', ['pages/my/edit-profile/input-signatures', ]],
    ['chunk_87', ['pages/my/history/index', ]],
    ['chunk_88', ['pages/my/my/report', ]],
    ['chunk_89', ['pages/my/my/user', ]],
    ['chunk_9', ['components/img-list-scroll/img-list-scroll', 'pages/home/components/makeup-card-list/makeup-card-list', 'pages/home/components/photographer-card-list/photographer-card-list', ]],
    ['chunk_90', ['pages/my/my/visitor-list', ]],
    ['chunk_91', ['pages/my/order/components/detail-item/detail-item', ]],
    ['chunk_92', ['pages/my/order/components/detail-qrcode/detail-qrcode', ]],
    ['chunk_93', ['pages/my/order/components/order-item/order-item', 'pages/my/order/components/order-item/order-operation', 'pages/my/order/order-list', ]],
    ['chunk_94', ['pages/my/order/order-refund', ]],
    ['chunk_95', ['pages/my/settings/about', ]],
    ['chunk_96', ['pages/my/settings/account-security', ]],
    ['chunk_97', ['pages/my/settings/address/address', ]],
    ['chunk_98', ['pages/my/settings/address/address-detail', ]],
    ['chunk_99', ['pages/my/settings/administrators', ]],
].forEach(function(a) {
    (a[1] || []).forEach(function(b) {
        __LAZY_CODE_LOADING_CHUNK_MAP__[b] = __LAZY_CODE_LOADING_CHUNK_MAP__[b] || a[0] || ''
    });
});