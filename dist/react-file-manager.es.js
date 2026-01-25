import { jsx as d, jsxs as k, Fragment as fe } from "react/jsx-runtime";
import * as Le from "react";
import $e, { useState as z, useRef as oe, useEffect as X, createContext as Ne, useContext as Ee, useCallback as ln, useLayoutEffect as Bn, useMemo as Ke } from "react";
var cn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, $t = $e.createContext && /* @__PURE__ */ $e.createContext(cn), Wn = ["attr", "size", "title"];
function _n(t, e) {
  if (t == null) return {};
  var n = Kn(t, e), o, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      o = s[i], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
function Kn(t, e) {
  if (t == null) return {};
  var n = {};
  for (var o in t)
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      if (e.indexOf(o) >= 0) continue;
      n[o] = t[o];
    }
  return n;
}
function Ie() {
  return Ie = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ie.apply(this, arguments);
}
function yt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Ue(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yt(Object(n), !0).forEach(function(o) {
      Yn(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Yn(t, e, n) {
  return e = qn(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function qn(t) {
  var e = Gn(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Gn(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function dn(t) {
  return t && t.map((e, n) => /* @__PURE__ */ $e.createElement(e.tag, Ue({
    key: n
  }, e.attr), dn(e.child)));
}
function V(t) {
  return (e) => /* @__PURE__ */ $e.createElement(Jn, Ie({
    attr: Ue({}, t.attr)
  }, e), dn(t.child));
}
function Jn(t) {
  var e = (n) => {
    var {
      attr: o,
      size: i,
      title: s
    } = t, a = _n(t, Wn), r = i || n.size || "1em", l;
    return n.className && (l = n.className), t.className && (l = (l ? l + " " : "") + t.className), /* @__PURE__ */ $e.createElement("svg", Ie({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, o, a, {
      className: l,
      style: Ue(Ue({
        color: t.color || n.color
      }, n.style), t.style),
      height: r,
      width: r,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ $e.createElement("title", null, s), t.children);
  };
  return $t !== void 0 ? /* @__PURE__ */ $e.createElement($t.Consumer, null, (n) => e(n)) : e(cn);
}
function Zn(t) {
  return V({ attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z" }, child: [] }] })(t);
}
const ft = ({ loading: t = !1, className: e }) => t ? /* @__PURE__ */ d("div", { className: `loader-container ${e}`, children: /* @__PURE__ */ d(Zn, { className: "spinner" }) }) : null;
function un(t) {
  return V({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" }, child: [] }] })(t);
}
function pn(t) {
  return V({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" }, child: [] }, { tag: "path", attr: { d: "M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" }, child: [] }] })(t);
}
function fn(t) {
  return V({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" }, child: [] }] })(t);
}
function wt(t) {
  return V({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" }, child: [] }] })(t);
}
function hn(t) {
  return V({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" }, child: [] }] })(t);
}
function mn(t) {
  return V({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "23 4 23 10 17 10" }, child: [] }, { tag: "polyline", attr: { points: "1 20 1 14 7 14" }, child: [] }, { tag: "path", attr: { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }, child: [] }] })(t);
}
function Xn(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }, child: [] }] })(t);
}
function Qn(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(t);
}
function eo(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }, child: [] }] })(t);
}
function to(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(t);
}
function no(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }, child: [] }] })(t);
}
function gn(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" }, child: [] }] })(t);
}
function ht(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }, child: [] }] })(t);
}
function vn(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z" }, child: [] }] })(t);
}
function oo(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" }, child: [] }] })(t);
}
function $n(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8c0-1.102-.898-2-2-2zm-14 4H15v4H6.005z" }, child: [] }, { tag: "path", attr: { d: "M17.005 17.995V4H20V2h-8v2h3.005v1.995h-11c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20H12v2h8v-2h-2.995v-2.005zm-13-2v-8h11v8h-11z" }, child: [] }] })(t);
}
function io(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z" }, child: [] }, { tag: "path", attr: { d: "M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm8.933 3.519-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z" }, child: [] }] })(t);
}
function yn(t) {
  return V({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, child: [] }] })(t);
}
function so(t) {
  return V({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" }, child: [] }] })(t);
}
function ao(t) {
  return V({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384L320 384l0-96-192 0 0-224 320 0 0 32 64 0 0-32c0-35.3-28.7-64-64-64L128 0zM512 128l-112 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-208-96 0c-17.7 0-32-14.3-32-32l0-96zm32 0l0 96 96 0-96-96z" }, child: [] }] })(t);
}
function De(t) {
  return V({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" }, child: [] }] })(t);
}
function xt(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464l256 0c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM192 272l0 128c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L129.4 376 112 376c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16l17.4 0 35.3-35.3c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8zm85.8-4c11.6 20 18.2 43.3 18.2 68s-6.6 48-18.2 68c-6.6 11.5-21.3 15.4-32.8 8.8s-15.4-21.3-8.8-32.8c7.5-12.9 11.8-27.9 11.8-44s-4.3-31.1-11.8-44c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8z" }, child: [] }] })(t);
}
function re(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" }, child: [] }] })(t);
}
function bt(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" }, child: [] }] })(t);
}
function Ze(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2l48 0 32 0 40 0 72 0c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z" }, child: [] }] })(t);
}
function ro(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" }, child: [] }] })(t);
}
function lo(t) {
  return V({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" }, child: [] }] })(t);
}
function Ct(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm72 208c-13.3 0-24 10.7-24 24l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z" }, child: [] }] })(t);
}
function Ft(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 288c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 16 44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3l0 103.4c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1L240 368l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96z" }, child: [] }] })(t);
}
function St(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z" }, child: [] }] })(t);
}
function co(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l48 0c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l48 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm48 112c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm-6.3 71.8L82.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8l-14.8 0c-14.5 0-27.2 9.7-30.9 23.8zM128 336l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" }, child: [] }] })(t);
}
function je(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" }, child: [] }] })(t);
}
function Nt(t) {
  return V({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z" }, child: [] }] })(t);
}
function dt(t) {
  return V({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M104.6 48L64 48C28.7 48 0 76.7 0 112L0 384c0 35.3 28.7 64 64 64l96 0 0-48-96 0c-8.8 0-16-7.2-16-16l0-272c0-8.8 7.2-16 16-16l16 0c0 17.7 14.3 32 32 32l72.4 0C202 108.4 227.6 96 256 96l62 0c-7.1-27.6-32.2-48-62-48l-40.6 0C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48zM144 56a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 464l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L464 243.9 464 448c0 8.8-7.2 16-16 16zM256 512l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L256 128c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64z" }, child: [] }] })(t);
}
const Ae = (t = () => {
}) => {
  const [e, n] = z(!1), o = oe(null), i = (s) => {
    o.current?.contains(s.target) ? n(!1) : (n(!0), t(s, o));
  };
  return X(() => (document.addEventListener("click", i, !0), document.addEventListener("mousedown", i, !0), () => {
    document.removeEventListener("click", i, !0), document.removeEventListener("mousedown", i, !0);
  }), []), { ref: o, isClicked: e, setIsClicked: n };
}, wn = Ne(), uo = ({ children: t, layout: e }) => {
  const [n, o] = z(() => i(e));
  function i(s) {
    return ["list", "grid"].includes(s) ? s : "grid";
  }
  return /* @__PURE__ */ d(wn.Provider, { value: { activeLayout: n, setActiveLayout: o }, children: t });
}, ye = () => Ee(wn), H = (t) => typeof t == "string", Pe = () => {
  let t, e;
  const n = new Promise((o, i) => {
    t = o, e = i;
  });
  return n.resolve = t, n.reject = e, n;
}, Et = (t) => t == null ? "" : "" + t, po = (t, e, n) => {
  t.forEach((o) => {
    e[o] && (n[o] = e[o]);
  });
}, fo = /###/g, Pt = (t) => t && t.indexOf("###") > -1 ? t.replace(fo, ".") : t, kt = (t) => !t || H(t), ke = (t, e, n) => {
  const o = H(e) ? e.split(".") : e;
  let i = 0;
  for (; i < o.length - 1; ) {
    if (kt(t)) return {};
    const s = Pt(o[i]);
    !t[s] && n && (t[s] = new n()), Object.prototype.hasOwnProperty.call(t, s) ? t = t[s] : t = {}, ++i;
  }
  return kt(t) ? {} : {
    obj: t,
    k: Pt(o[i])
  };
}, Tt = (t, e, n) => {
  const {
    obj: o,
    k: i
  } = ke(t, e, Object);
  if (o !== void 0 || e.length === 1) {
    o[i] = n;
    return;
  }
  let s = e[e.length - 1], a = e.slice(0, e.length - 1), r = ke(t, a, Object);
  for (; r.obj === void 0 && a.length; )
    s = `${a[a.length - 1]}.${s}`, a = a.slice(0, a.length - 1), r = ke(t, a, Object), r?.obj && typeof r.obj[`${r.k}.${s}`] < "u" && (r.obj = void 0);
  r.obj[`${r.k}.${s}`] = n;
}, ho = (t, e, n, o) => {
  const {
    obj: i,
    k: s
  } = ke(t, e, Object);
  i[s] = i[s] || [], i[s].push(n);
}, He = (t, e) => {
  const {
    obj: n,
    k: o
  } = ke(t, e);
  if (n && Object.prototype.hasOwnProperty.call(n, o))
    return n[o];
}, mo = (t, e, n) => {
  const o = He(t, n);
  return o !== void 0 ? o : He(e, n);
}, xn = (t, e, n) => {
  for (const o in e)
    o !== "__proto__" && o !== "constructor" && (o in t ? H(t[o]) || t[o] instanceof String || H(e[o]) || e[o] instanceof String ? n && (t[o] = e[o]) : xn(t[o], e[o], n) : t[o] = e[o]);
  return t;
}, Ce = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var go = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const vo = (t) => H(t) ? t.replace(/[&<>"'\/]/g, (e) => go[e]) : t;
class $o {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const n = this.regExpMap.get(e);
    if (n !== void 0)
      return n;
    const o = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, o), this.regExpQueue.push(e), o;
  }
}
const yo = [" ", ",", "?", "!", ";"], wo = new $o(20), xo = (t, e, n) => {
  e = e || "", n = n || "";
  const o = yo.filter((a) => e.indexOf(a) < 0 && n.indexOf(a) < 0);
  if (o.length === 0) return !0;
  const i = wo.getRegExp(`(${o.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let s = !i.test(t);
  if (!s) {
    const a = t.indexOf(n);
    a > 0 && !i.test(t.substring(0, a)) && (s = !0);
  }
  return s;
}, ut = (t, e, n = ".") => {
  if (!t) return;
  if (t[e])
    return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
  const o = e.split(n);
  let i = t;
  for (let s = 0; s < o.length; ) {
    if (!i || typeof i != "object")
      return;
    let a, r = "";
    for (let l = s; l < o.length; ++l)
      if (l !== s && (r += n), r += o[l], a = i[r], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && l < o.length - 1)
          continue;
        s += l - s + 1;
        break;
      }
    i = a;
  }
  return i;
}, ze = (t) => t?.replace("_", "-"), bo = {
  type: "logger",
  log(t) {
    this.output("log", t);
  },
  warn(t) {
    this.output("warn", t);
  },
  error(t) {
    this.output("error", t);
  },
  output(t, e) {
    console?.[t]?.apply?.(console, e);
  }
};
class Ve {
  constructor(e, n = {}) {
    this.init(e, n);
  }
  init(e, n = {}) {
    this.prefix = n.prefix || "i18next:", this.logger = e || bo, this.options = n, this.debug = n.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, n, o, i) {
    return i && !this.debug ? null : (H(e[0]) && (e[0] = `${o}${this.prefix} ${e[0]}`), this.logger[n](e));
  }
  create(e) {
    return new Ve(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Ve(this.logger, e);
  }
}
var me = new Ve();
class Ye {
  constructor() {
    this.observers = {};
  }
  on(e, n) {
    return e.split(" ").forEach((o) => {
      this.observers[o] || (this.observers[o] = /* @__PURE__ */ new Map());
      const i = this.observers[o].get(n) || 0;
      this.observers[o].set(n, i + 1);
    }), this;
  }
  off(e, n) {
    if (this.observers[e]) {
      if (!n) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(n);
    }
  }
  emit(e, ...n) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([i, s]) => {
      for (let a = 0; a < s; a++)
        i(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, s]) => {
      for (let a = 0; a < s; a++)
        i.apply(i, [e, ...n]);
    });
  }
}
class Lt extends Ye {
  constructor(e, n = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const n = this.options.ns.indexOf(e);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(e, n, o, i = {}) {
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, a = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let r;
    e.indexOf(".") > -1 ? r = e.split(".") : (r = [e, n], o && (Array.isArray(o) ? r.push(...o) : H(o) && s ? r.push(...o.split(s)) : r.push(o)));
    const l = He(this.data, r);
    return !l && !n && !o && e.indexOf(".") > -1 && (e = r[0], n = r[1], o = r.slice(2).join(".")), l || !a || !H(o) ? l : ut(this.data?.[e]?.[n], o, s);
  }
  addResource(e, n, o, i, s = {
    silent: !1
  }) {
    const a = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let r = [e, n];
    o && (r = r.concat(a ? o.split(a) : o)), e.indexOf(".") > -1 && (r = e.split("."), i = n, n = r[1]), this.addNamespaces(n), Tt(this.data, r, i), s.silent || this.emit("added", e, n, o, i);
  }
  addResources(e, n, o, i = {
    silent: !1
  }) {
    for (const s in o)
      (H(o[s]) || Array.isArray(o[s])) && this.addResource(e, n, s, o[s], {
        silent: !0
      });
    i.silent || this.emit("added", e, n, o);
  }
  addResourceBundle(e, n, o, i, s, a = {
    silent: !1,
    skipCopy: !1
  }) {
    let r = [e, n];
    e.indexOf(".") > -1 && (r = e.split("."), i = o, o = n, n = r[1]), this.addNamespaces(n);
    let l = He(this.data, r) || {};
    a.skipCopy || (o = JSON.parse(JSON.stringify(o))), i ? xn(l, o, s) : l = {
      ...l,
      ...o
    }, Tt(this.data, r, l), a.silent || this.emit("added", e, n, o);
  }
  removeResourceBundle(e, n) {
    this.hasResourceBundle(e, n) && delete this.data[e][n], this.removeNamespaces(n), this.emit("removed", e, n);
  }
  hasResourceBundle(e, n) {
    return this.getResource(e, n) !== void 0;
  }
  getResourceBundle(e, n) {
    return n || (n = this.options.defaultNS), this.getResource(e, n);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const n = this.getDataByLanguage(e);
    return !!(n && Object.keys(n) || []).find((i) => n[i] && Object.keys(n[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var bn = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, n, o, i) {
    return t.forEach((s) => {
      e = this.processors[s]?.process(e, n, o, i) ?? e;
    }), e;
  }
};
const Cn = /* @__PURE__ */ Symbol("i18next/PATH_KEY");
function Co() {
  const t = [], e = /* @__PURE__ */ Object.create(null);
  let n;
  return e.get = (o, i) => (n?.revoke?.(), i === Cn ? t : (t.push(i), n = Proxy.revocable(o, e), n.proxy)), Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function pt(t, e) {
  const {
    [Cn]: n
  } = t(Co());
  return n.join(e?.keySeparator ?? ".");
}
const zt = {}, Xe = (t) => !H(t) && typeof t != "boolean" && typeof t != "number";
class Be extends Ye {
  constructor(e, n = {}) {
    super(), po(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = me.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, n = {
    interpolation: {}
  }) {
    const o = {
      ...n
    };
    if (e == null) return !1;
    const i = this.resolve(e, o);
    if (i?.res === void 0) return !1;
    const s = Xe(i.res);
    return !(o.returnObjects === !1 && s);
  }
  extractFromKey(e, n) {
    let o = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    o === void 0 && (o = ":");
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let s = n.ns || this.options.defaultNS || [];
    const a = o && e.indexOf(o) > -1, r = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !xo(e, o, i);
    if (a && !r) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: H(s) ? [s] : s
        };
      const c = e.split(o);
      (o !== i || o === i && this.options.ns.indexOf(c[0]) > -1) && (s = c.shift()), e = c.join(i);
    }
    return {
      key: e,
      namespaces: H(s) ? [s] : s
    };
  }
  translate(e, n, o) {
    let i = typeof n == "object" ? {
      ...n
    } : n;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
      ...i
    }), i || (i = {}), e == null) return "";
    typeof e == "function" && (e = pt(e, {
      ...this.options,
      ...i
    })), Array.isArray(e) || (e = [String(e)]);
    const s = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: r,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], i), c = l[l.length - 1];
    let u = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const p = i.lng || this.language, m = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p?.toLowerCase() === "cimode")
      return m ? s ? {
        res: `${c}${u}${r}`,
        usedKey: r,
        exactUsedKey: r,
        usedLng: p,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(i)
      } : `${c}${u}${r}` : s ? {
        res: r,
        usedKey: r,
        exactUsedKey: r,
        usedLng: p,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(i)
      } : r;
    const f = this.resolve(e, i);
    let h = f?.res;
    const w = f?.usedKey || r, T = f?.exactUsedKey || r, N = ["[object Number]", "[object Function]", "[object RegExp]"], L = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, S = !this.i18nFormat || this.i18nFormat.handleAsObject, F = i.count !== void 0 && !H(i.count), g = Be.hasDefaultValue(i), P = F ? this.pluralResolver.getSuffix(p, i.count, i) : "", x = i.ordinal && F ? this.pluralResolver.getSuffix(p, i.count, {
      ordinal: !1
    }) : "", C = F && !i.ordinal && i.count === 0, v = C && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${P}`] || i[`defaultValue${x}`] || i.defaultValue;
    let $ = h;
    S && !h && g && ($ = v);
    const A = Xe($), I = Object.prototype.toString.apply($);
    if (S && $ && A && N.indexOf(I) < 0 && !(H(L) && Array.isArray($))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const R = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(w, $, {
          ...i,
          ns: l
        }) : `key '${r} (${this.language})' returned an object instead of string.`;
        return s ? (f.res = R, f.usedParams = this.getUsedParamsDetails(i), f) : R;
      }
      if (a) {
        const R = Array.isArray($), _ = R ? [] : {}, G = R ? T : w;
        for (const Z in $)
          if (Object.prototype.hasOwnProperty.call($, Z)) {
            const ne = `${G}${a}${Z}`;
            g && !h ? _[Z] = this.translate(ne, {
              ...i,
              defaultValue: Xe(v) ? v[Z] : void 0,
              joinArrays: !1,
              ns: l
            }) : _[Z] = this.translate(ne, {
              ...i,
              joinArrays: !1,
              ns: l
            }), _[Z] === ne && (_[Z] = $[Z]);
          }
        h = _;
      }
    } else if (S && H(L) && Array.isArray(h))
      h = h.join(L), h && (h = this.extendTranslation(h, e, i, o));
    else {
      let R = !1, _ = !1;
      !this.isValidLookup(h) && g && (R = !0, h = v), this.isValidLookup(h) || (_ = !0, h = r);
      const Z = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && _ ? void 0 : h, ne = g && v !== h && this.options.updateMissing;
      if (_ || R || ne) {
        if (this.logger.log(ne ? "updateKey" : "missingKey", p, c, r, ne ? v : h), a) {
          const b = this.resolve(r, {
            ...i,
            keySeparator: !1
          });
          b && b.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let se = [];
        const le = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && le && le[0])
          for (let b = 0; b < le.length; b++)
            se.push(le[b]);
        else this.options.saveMissingTo === "all" ? se = this.languageUtils.toResolveHierarchy(i.lng || this.language) : se.push(i.lng || this.language);
        const y = (b, D, U) => {
          const j = g && U !== h ? U : Z;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(b, c, D, j, ne, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(b, c, D, j, ne, i), this.emit("missingKey", b, c, D, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && F ? se.forEach((b) => {
          const D = this.pluralResolver.getSuffixes(b, i);
          C && i[`defaultValue${this.options.pluralSeparator}zero`] && D.indexOf(`${this.options.pluralSeparator}zero`) < 0 && D.push(`${this.options.pluralSeparator}zero`), D.forEach((U) => {
            y([b], r + U, i[`defaultValue${U}`] || v);
          });
        }) : y(se, r, v));
      }
      h = this.extendTranslation(h, e, i, f, o), _ && h === r && this.options.appendNamespaceToMissingKey && (h = `${c}${u}${r}`), (_ || R) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}${u}${r}` : r, R ? h : void 0, i));
    }
    return s ? (f.res = h, f.usedParams = this.getUsedParamsDetails(i), f) : h;
  }
  extendTranslation(e, n, o, i, s) {
    if (this.i18nFormat?.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...o
      }, o.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!o.skipInterpolation) {
      o.interpolation && this.interpolator.init({
        ...o,
        interpolation: {
          ...this.options.interpolation,
          ...o.interpolation
        }
      });
      const l = H(e) && (o?.interpolation?.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (l) {
        const p = e.match(this.interpolator.nestingRegexp);
        c = p && p.length;
      }
      let u = o.replace && !H(o.replace) ? o.replace : o;
      if (this.options.interpolation.defaultVariables && (u = {
        ...this.options.interpolation.defaultVariables,
        ...u
      }), e = this.interpolator.interpolate(e, u, o.lng || this.language || i.usedLng, o), l) {
        const p = e.match(this.interpolator.nestingRegexp), m = p && p.length;
        c < m && (o.nest = !1);
      }
      !o.lng && i && i.res && (o.lng = this.language || i.usedLng), o.nest !== !1 && (e = this.interpolator.nest(e, (...p) => s?.[0] === p[0] && !o.context ? (this.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`), null) : this.translate(...p, n), o)), o.interpolation && this.interpolator.reset();
    }
    const a = o.postProcess || this.options.postProcess, r = H(a) ? [a] : a;
    return e != null && r?.length && o.applyPostProcessor !== !1 && (e = bn.handle(r, e, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(o)
      },
      ...o
    } : o, this)), e;
  }
  resolve(e, n = {}) {
    let o, i, s, a, r;
    return H(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(o)) return;
      const c = this.extractFromKey(l, n), u = c.key;
      i = u;
      let p = c.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const m = n.count !== void 0 && !H(n.count), f = m && !n.ordinal && n.count === 0, h = n.context !== void 0 && (H(n.context) || typeof n.context == "number") && n.context !== "", w = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      p.forEach((T) => {
        this.isValidLookup(o) || (r = T, !zt[`${w[0]}-${T}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(r) && (zt[`${w[0]}-${T}`] = !0, this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), w.forEach((N) => {
          if (this.isValidLookup(o)) return;
          a = N;
          const L = [u];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(L, u, N, T, n);
          else {
            let F;
            m && (F = this.pluralResolver.getSuffix(N, n.count, n));
            const g = `${this.options.pluralSeparator}zero`, P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (m && (n.ordinal && F.indexOf(P) === 0 && L.push(u + F.replace(P, this.options.pluralSeparator)), L.push(u + F), f && L.push(u + g)), h) {
              const x = `${u}${this.options.contextSeparator || "_"}${n.context}`;
              L.push(x), m && (n.ordinal && F.indexOf(P) === 0 && L.push(x + F.replace(P, this.options.pluralSeparator)), L.push(x + F), f && L.push(x + g));
            }
          }
          let S;
          for (; S = L.pop(); )
            this.isValidLookup(o) || (s = S, o = this.getResource(N, T, S, n));
        }));
      });
    }), {
      res: o,
      usedKey: i,
      exactUsedKey: s,
      usedLng: a,
      usedNS: r
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, n, o, i = {}) {
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, n, o, i) : this.resourceStore.getResource(e, n, o, i);
  }
  getUsedParamsDetails(e = {}) {
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], o = e.replace && !H(e.replace);
    let i = o ? e.replace : e;
    if (o && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !o) {
      i = {
        ...i
      };
      for (const s of n)
        delete i[s];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const n = "defaultValue";
    for (const o in e)
      if (Object.prototype.hasOwnProperty.call(e, o) && n === o.substring(0, n.length) && e[o] !== void 0)
        return !0;
    return !1;
  }
}
class At {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = me.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ze(e), !e || e.indexOf("-") < 0) return null;
    const n = e.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ze(e), !e || e.indexOf("-") < 0) return e;
    const n = e.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(e) {
    if (H(e) && e.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return n && this.options.lowerCaseLng && (n = n.toLowerCase()), n || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let n;
    return e.forEach((o) => {
      if (n) return;
      const i = this.formatLanguageCode(o);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
    }), !n && this.options.supportedLngs && e.forEach((o) => {
      if (n) return;
      const i = this.getScriptPartFromCode(o);
      if (this.isSupportedCode(i)) return n = i;
      const s = this.getLanguagePartFromCode(o);
      if (this.isSupportedCode(s)) return n = s;
      n = this.options.supportedLngs.find((a) => {
        if (a === s) return a;
        if (!(a.indexOf("-") < 0 && s.indexOf("-") < 0) && (a.indexOf("-") > 0 && s.indexOf("-") < 0 && a.substring(0, a.indexOf("-")) === s || a.indexOf(s) === 0 && s.length > 1))
          return a;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(e, n) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(n)), H(e) && (e = [e]), Array.isArray(e)) return e;
    if (!n) return e.default || [];
    let o = e[n];
    return o || (o = e[this.getScriptPartFromCode(n)]), o || (o = e[this.formatLanguageCode(n)]), o || (o = e[this.getLanguagePartFromCode(n)]), o || (o = e.default), o || [];
  }
  toResolveHierarchy(e, n) {
    const o = this.getFallbackCodes((n === !1 ? [] : n) || this.options.fallbackLng || [], e), i = [], s = (a) => {
      a && (this.isSupportedCode(a) ? i.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return H(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : H(e) && s(this.formatLanguageCode(e)), o.forEach((a) => {
      i.indexOf(a) < 0 && s(this.formatLanguageCode(a));
    }), i;
  }
}
const Rt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Ot = {
  select: (t) => t === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Fo {
  constructor(e, n = {}) {
    this.languageUtils = e, this.options = n, this.logger = me.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, n = {}) {
    const o = ze(e === "dev" ? "en" : e), i = n.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
      cleanedCode: o,
      type: i
    });
    if (s in this.pluralRulesCache)
      return this.pluralRulesCache[s];
    let a;
    try {
      a = new Intl.PluralRules(o, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Ot;
      if (!e.match(/-|_/)) return Ot;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(l, n);
    }
    return this.pluralRulesCache[s] = a, a;
  }
  needsPlural(e, n = {}) {
    let o = this.getRule(e, n);
    return o || (o = this.getRule("dev", n)), o?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(e, n, o = {}) {
    return this.getSuffixes(e, o).map((i) => `${n}${i}`);
  }
  getSuffixes(e, n = {}) {
    let o = this.getRule(e, n);
    return o || (o = this.getRule("dev", n)), o ? o.resolvedOptions().pluralCategories.sort((i, s) => Rt[i] - Rt[s]).map((i) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, n, o = {}) {
    const i = this.getRule(e, o);
    return i ? `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", n, o));
  }
}
const Mt = (t, e, n, o = ".", i = !0) => {
  let s = mo(t, e, n);
  return !s && i && H(n) && (s = ut(t, n, o), s === void 0 && (s = ut(e, n, o))), s;
}, Qe = (t) => t.replace(/\$/g, "$$$$");
class It {
  constructor(e = {}) {
    this.logger = me.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((n) => n), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: o,
      useRawValueToEscape: i,
      prefix: s,
      prefixEscaped: a,
      suffix: r,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: p,
      nestingPrefix: m,
      nestingPrefixEscaped: f,
      nestingSuffix: h,
      nestingSuffixEscaped: w,
      nestingOptionsSeparator: T,
      maxReplaces: N,
      alwaysFormat: L
    } = e.interpolation;
    this.escape = n !== void 0 ? n : vo, this.escapeValue = o !== void 0 ? o : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = s ? Ce(s) : a || "{{", this.suffix = r ? Ce(r) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = m ? Ce(m) : f || Ce("$t("), this.nestingSuffix = h ? Ce(h) : w || Ce(")"), this.nestingOptionsSeparator = T || ",", this.maxReplaces = N || 1e3, this.alwaysFormat = L !== void 0 ? L : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (n, o) => n?.source === o ? (n.lastIndex = 0, n) : new RegExp(o, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, n, o, i) {
    let s, a, r;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (f) => {
      if (f.indexOf(this.formatSeparator) < 0) {
        const N = Mt(n, l, f, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(N, void 0, o, {
          ...i,
          ...n,
          interpolationkey: f
        }) : N;
      }
      const h = f.split(this.formatSeparator), w = h.shift().trim(), T = h.join(this.formatSeparator).trim();
      return this.format(Mt(n, l, w, this.options.keySeparator, this.options.ignoreJSONStructure), T, o, {
        ...i,
        ...n,
        interpolationkey: w
      });
    };
    this.resetRegExp();
    const u = i?.missingInterpolationHandler || this.options.missingInterpolationHandler, p = i?.interpolation?.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (f) => Qe(f)
    }, {
      regex: this.regexp,
      safeValue: (f) => this.escapeValue ? Qe(this.escape(f)) : Qe(f)
    }].forEach((f) => {
      for (r = 0; s = f.regex.exec(e); ) {
        const h = s[1].trim();
        if (a = c(h), a === void 0)
          if (typeof u == "function") {
            const T = u(e, s, i);
            a = H(T) ? T : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, h))
            a = "";
          else if (p) {
            a = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${h} for interpolating ${e}`), a = "";
        else !H(a) && !this.useRawValueToEscape && (a = Et(a));
        const w = f.safeValue(a);
        if (e = e.replace(s[0], w), p ? (f.regex.lastIndex += a.length, f.regex.lastIndex -= s[0].length) : f.regex.lastIndex = 0, r++, r >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, n, o = {}) {
    let i, s, a;
    const r = (l, c) => {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const p = l.split(new RegExp(`${u}[ ]*{`));
      let m = `{${p[1]}`;
      l = p[0], m = this.interpolate(m, a);
      const f = m.match(/'/g), h = m.match(/"/g);
      ((f?.length ?? 0) % 2 === 0 && !h || h.length % 2 !== 0) && (m = m.replace(/'/g, '"'));
      try {
        a = JSON.parse(m), c && (a = {
          ...c,
          ...a
        });
      } catch (w) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, w), `${l}${u}${m}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, l;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let l = [];
      a = {
        ...o
      }, a = a.replace && !H(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      const c = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (c !== -1 && (l = i[1].slice(c).split(this.formatSeparator).map((u) => u.trim()).filter(Boolean), i[1] = i[1].slice(0, c)), s = n(r.call(this, i[1].trim(), a), a), s && i[0] === e && !H(s)) return s;
      H(s) || (s = Et(s)), s || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), s = ""), l.length && (s = l.reduce((u, p) => this.format(u, p, o.lng, {
        ...o,
        interpolationkey: i[1].trim()
      }), s.trim())), e = e.replace(i[0], s), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const So = (t) => {
  let e = t.toLowerCase().trim();
  const n = {};
  if (t.indexOf("(") > -1) {
    const o = t.split("(");
    e = o[0].toLowerCase().trim();
    const i = o[1].substring(0, o[1].length - 1);
    e === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach((a) => {
      if (a) {
        const [r, ...l] = a.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), u = r.trim();
        n[u] || (n[u] = c), c === "false" && (n[u] = !1), c === "true" && (n[u] = !0), isNaN(c) || (n[u] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: n
  };
}, Ut = (t) => {
  const e = {};
  return (n, o, i) => {
    let s = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (s = {
      ...s,
      [i.interpolationkey]: void 0
    });
    const a = o + JSON.stringify(s);
    let r = e[a];
    return r || (r = t(ze(o), i), e[a] = r), r(n);
  };
}, No = (t) => (e, n, o) => t(ze(n), o)(e);
class Eo {
  constructor(e = {}) {
    this.logger = me.create("formatter"), this.options = e, this.init(e);
  }
  init(e, n = {
    interpolation: {}
  }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const o = n.cacheInBuiltFormats ? Ut : No;
    this.formats = {
      number: o((i, s) => {
        const a = new Intl.NumberFormat(i, {
          ...s
        });
        return (r) => a.format(r);
      }),
      currency: o((i, s) => {
        const a = new Intl.NumberFormat(i, {
          ...s,
          style: "currency"
        });
        return (r) => a.format(r);
      }),
      datetime: o((i, s) => {
        const a = new Intl.DateTimeFormat(i, {
          ...s
        });
        return (r) => a.format(r);
      }),
      relativetime: o((i, s) => {
        const a = new Intl.RelativeTimeFormat(i, {
          ...s
        });
        return (r) => a.format(r, s.range || "day");
      }),
      list: o((i, s) => {
        const a = new Intl.ListFormat(i, {
          ...s
        });
        return (r) => a.format(r);
      })
    };
  }
  add(e, n) {
    this.formats[e.toLowerCase().trim()] = n;
  }
  addCached(e, n) {
    this.formats[e.toLowerCase().trim()] = Ut(n);
  }
  format(e, n, o, i = {}) {
    const s = n.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && s[0].indexOf(")") < 0 && s.find((r) => r.indexOf(")") > -1)) {
      const r = s.findIndex((l) => l.indexOf(")") > -1);
      s[0] = [s[0], ...s.splice(1, r)].join(this.formatSeparator);
    }
    return s.reduce((r, l) => {
      const {
        formatName: c,
        formatOptions: u
      } = So(l);
      if (this.formats[c]) {
        let p = r;
        try {
          const m = i?.formatParams?.[i.interpolationkey] || {}, f = m.locale || m.lng || i.locale || i.lng || o;
          p = this.formats[c](r, f, {
            ...u,
            ...i,
            ...m
          });
        } catch (m) {
          this.logger.warn(m);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return r;
    }, e);
  }
}
const Po = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class ko extends Ye {
  constructor(e, n, o, i = {}) {
    super(), this.backend = e, this.store = n, this.services = o, this.languageUtils = o.languageUtils, this.options = i, this.logger = me.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(o, i.backend, i);
  }
  queueLoad(e, n, o, i) {
    const s = {}, a = {}, r = {}, l = {};
    return e.forEach((c) => {
      let u = !0;
      n.forEach((p) => {
        const m = `${c}|${p}`;
        !o.reload && this.store.hasResourceBundle(c, p) ? this.state[m] = 2 : this.state[m] < 0 || (this.state[m] === 1 ? a[m] === void 0 && (a[m] = !0) : (this.state[m] = 1, u = !1, a[m] === void 0 && (a[m] = !0), s[m] === void 0 && (s[m] = !0), l[p] === void 0 && (l[p] = !0)));
      }), u || (r[c] = !0);
    }), (Object.keys(s).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(s),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(r),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, n, o) {
    const i = e.split("|"), s = i[0], a = i[1];
    n && this.emit("failedLoading", s, a, n), !n && o && this.store.addResourceBundle(s, a, o, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = n ? -1 : 2, n && o && (this.state[e] = 0);
    const r = {};
    this.queue.forEach((l) => {
      ho(l.loaded, [s], a), Po(l, e), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        r[c] || (r[c] = {});
        const u = l.loaded[c];
        u.length && u.forEach((p) => {
          r[c][p] === void 0 && (r[c][p] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", r), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, n, o, i = 0, s = this.retryTimeout, a) {
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: o,
        tried: i,
        wait: s,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const r = (c, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (c && u && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, n, o, i + 1, s * 2, a);
        }, s);
        return;
      }
      a(c, u);
    }, l = this.backend[o].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, n);
        c && typeof c.then == "function" ? c.then((u) => r(null, u)).catch(r) : r(null, c);
      } catch (c) {
        r(c);
      }
      return;
    }
    return l(e, n, r);
  }
  prepareLoading(e, n, o = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    H(e) && (e = this.languageUtils.toResolveHierarchy(e)), H(n) && (n = [n]);
    const s = this.queueLoad(e, n, o, i);
    if (!s.toLoad.length)
      return s.pending.length || i(), null;
    s.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, n, o) {
    this.prepareLoading(e, n, {}, o);
  }
  reload(e, n, o) {
    this.prepareLoading(e, n, {
      reload: !0
    }, o);
  }
  loadOne(e, n = "") {
    const o = e.split("|"), i = o[0], s = o[1];
    this.read(i, s, "read", void 0, void 0, (a, r) => {
      a && this.logger.warn(`${n}loading namespace ${s} for language ${i} failed`, a), !a && r && this.logger.log(`${n}loaded namespace ${s} for language ${i}`, r), this.loaded(e, a, r);
    });
  }
  saveMissing(e, n, o, i, s, a = {}, r = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${o}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(o == null || o === "")) {
      if (this.backend?.create) {
        const l = {
          ...a,
          isUpdate: s
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let u;
            c.length === 5 ? u = c(e, n, o, i, l) : u = c(e, n, o, i), u && typeof u.then == "function" ? u.then((p) => r(null, p)).catch(r) : r(null, u);
          } catch (u) {
            r(u);
          }
        else
          c(e, n, o, i, r, l);
      }
      !e || !e[0] || this.store.addResource(e[0], n, o, i);
    }
  }
}
const et = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (t) => {
    let e = {};
    if (typeof t[1] == "object" && (e = t[1]), H(t[1]) && (e.defaultValue = t[1]), H(t[2]) && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
      const n = t[3] || t[2];
      Object.keys(n).forEach((o) => {
        e[o] = n[o];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (t) => t,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), Dt = (t) => (H(t.ns) && (t.ns = [t.ns]), H(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]), H(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs?.indexOf?.("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), typeof t.initImmediate == "boolean" && (t.initAsync = t.initImmediate), t), Re = () => {
}, To = (t) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n) => {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
};
class Te extends Ye {
  constructor(e = {}, n) {
    if (super(), this.options = Dt(e), this.services = {}, this.logger = me, this.modules = {
      external: []
    }, To(this), n && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, n), this;
      setTimeout(() => {
        this.init(e, n);
      }, 0);
    }
  }
  init(e = {}, n) {
    this.isInitializing = !0, typeof e == "function" && (n = e, e = {}), e.defaultNS == null && e.ns && (H(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const o = et();
    this.options = {
      ...o,
      ...this.options,
      ...Dt(e)
    }, this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = o.overloadTranslationOptionHandler), this.options.debug === !0 && typeof console < "u" && console.warn("i18next is maintained with support from locize.com — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com");
    const i = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? me.init(i(this.modules.logger), this.options) : me.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = Eo;
      const u = new At(this.options);
      this.store = new Lt(this.options.resources, this.options);
      const p = this.services;
      p.logger = me, p.resourceStore = this.store, p.languageUtils = u, p.pluralResolver = new Fo(u, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), c && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (p.formatter = i(c), p.formatter.init && p.formatter.init(p, this.options), this.options.interpolation.format = p.formatter.format.bind(p.formatter)), p.interpolator = new It(this.options), p.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, p.backendConnector = new ko(i(this.modules.backend), p.resourceStore, p, this.options), p.backendConnector.on("*", (f, ...h) => {
        this.emit(f, ...h);
      }), this.modules.languageDetector && (p.languageDetector = i(this.modules.languageDetector), p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)), this.modules.i18nFormat && (p.i18nFormat = i(this.modules.i18nFormat), p.i18nFormat.init && p.i18nFormat.init(this)), this.translator = new Be(this.services, this.options), this.translator.on("*", (f, ...h) => {
        this.emit(f, ...h);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = Re), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = (...u) => this.store[c](...u);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = (...u) => (this.store[c](...u), this);
    });
    const r = Pe(), l = () => {
      const c = (u, p) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), r.resolve(p), n(u, p);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), r;
  }
  loadResources(e, n = Re) {
    let o = n;
    const i = H(e) ? e : this.language;
    if (typeof e == "function" && (o = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (i?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return o();
      const s = [], a = (r) => {
        if (!r || r === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(r).forEach((c) => {
          c !== "cimode" && s.indexOf(c) < 0 && s.push(c);
        });
      };
      i ? a(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => a(l)), this.options.preload?.forEach?.((r) => a(r)), this.services.backendConnector.load(s, this.options.ns, (r) => {
        !r && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), o(r);
      });
    } else
      o(null);
  }
  reloadResources(e, n, o) {
    const i = Pe();
    return typeof e == "function" && (o = e, e = void 0), typeof n == "function" && (o = n, n = void 0), e || (e = this.languages), n || (n = this.options.ns), o || (o = Re), this.services.backendConnector.reload(e, n, (s) => {
      i.resolve(), o(s);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && bn.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let n = 0; n < this.languages.length; n++) {
        const o = this.languages[n];
        if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
          this.resolvedLanguage = o;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, n) {
    this.isLanguageChangingTo = e;
    const o = Pe();
    this.emit("languageChanging", e);
    const i = (r) => {
      this.language = r, this.languages = this.services.languageUtils.toResolveHierarchy(r), this.resolvedLanguage = void 0, this.setResolvedLanguage(r);
    }, s = (r, l) => {
      l ? this.isLanguageChangingTo === e && (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, o.resolve((...c) => this.t(...c)), n && n(r, (...c) => this.t(...c));
    }, a = (r) => {
      !e && !r && this.services.languageDetector && (r = []);
      const l = H(r) ? r : r && r[0], c = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(H(r) ? [r] : r);
      c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector?.cacheUserLanguage?.(c)), this.loadResources(c, (u) => {
        s(u, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), o;
  }
  getFixedT(e, n, o) {
    const i = (s, a, ...r) => {
      let l;
      typeof a != "object" ? l = this.options.overloadTranslationOptionHandler([s, a].concat(r)) : l = {
        ...a
      }, l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || o || i.keyPrefix);
      const c = this.options.keySeparator || ".";
      let u;
      return l.keyPrefix && Array.isArray(s) ? u = s.map((p) => (typeof p == "function" && (p = pt(p, {
        ...this.options,
        ...a
      })), `${l.keyPrefix}${c}${p}`)) : (typeof s == "function" && (s = pt(s, {
        ...this.options,
        ...a
      })), u = l.keyPrefix ? `${l.keyPrefix}${c}${s}` : s), this.t(u, l);
    };
    return H(e) ? i.lng = e : i.lngs = e, i.ns = n, i.keyPrefix = o, i;
  }
  t(...e) {
    return this.translator?.translate(...e);
  }
  exists(...e) {
    return this.translator?.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, n = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const o = n.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (o.toLowerCase() === "cimode") return !0;
    const a = (r, l) => {
      const c = this.services.backendConnector.state[`${r}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const r = n.precheck(this, a);
      if (r !== void 0) return r;
    }
    return !!(this.hasResourceBundle(o, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(o, e) && (!i || a(s, e)));
  }
  loadNamespaces(e, n) {
    const o = Pe();
    return this.options.ns ? (H(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      o.resolve(), n && n(i);
    }), o) : (n && n(), Promise.resolve());
  }
  loadLanguages(e, n) {
    const o = Pe();
    H(e) && (e = [e]);
    const i = this.options.preload || [], s = e.filter((a) => i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return s.length ? (this.options.preload = i.concat(s), this.loadResources((a) => {
      o.resolve(), n && n(a);
    }), o) : (n && n(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const i = new Intl.Locale(e);
      if (i && i.getTextInfo) {
        const s = i.getTextInfo();
        if (s && s.direction) return s.direction;
      }
    } catch {
    }
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], o = this.services?.languageUtils || new At(et());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : n.indexOf(o.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, n) {
    const o = new Te(e, n);
    return o.createInstance = Te.createInstance, o;
  }
  cloneInstance(e = {}, n = Re) {
    const o = e.forkResourceStore;
    o && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: !0
    }, s = new Te(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach((r) => {
      s[r] = this[r];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, o) {
      const r = Object.keys(this.store.data).reduce((l, c) => (l[c] = {
        ...this.store.data[c]
      }, l[c] = Object.keys(l[c]).reduce((u, p) => (u[p] = {
        ...l[c][p]
      }, u), l[c]), l), {});
      s.store = new Lt(r, i), s.services.resourceStore = s.store;
    }
    if (e.interpolation) {
      const l = {
        ...et().interpolation,
        ...this.options.interpolation,
        ...e.interpolation
      }, c = {
        ...i,
        interpolation: l
      };
      s.services.interpolator = new It(c);
    }
    return s.translator = new Be(s.services, i), s.translator.on("*", (r, ...l) => {
      s.emit(r, ...l);
    }), s.init(i, n), s.translator.options = i, s.translator.backendConnector.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, s;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const ie = Te.createInstance();
ie.createInstance;
ie.dir;
ie.init;
ie.loadResources;
ie.reloadResources;
ie.use;
ie.changeLanguage;
ie.getFixedT;
ie.t;
ie.exists;
ie.setDefaultNamespace;
ie.hasLoadedNamespace;
ie.loadNamespaces;
ie.loadLanguages;
const Lo = "مجلد جديد", zo = "رفع", Ao = "لصق", Ro = "تغيير العرض", Oo = "تحديث", Mo = "قص", Io = "نسخ", Uo = "إعادة تسمية", Do = "تنزيل", jo = "تم تحديد العنصر", Ho = "تم تحديد {{count}} عناصر", Vo = "إلغاء", Bo = "مسح التحديد", Wo = "تم", _o = "إذا قمت بتغيير امتداد الملف، قد يصبح الملف غير قابل للاستخدام. هل أنت متأكد من أنك تريد تغييره؟", Ko = "لا", Yo = "نعم", qo = "إغلاق", Go = "نوع الملف غير مسموح به.", Jo = "الملف موجود بالفعل.", Zo = "أقصى حجم رفع هو", Xo = "اسحب الملفات للرفع", Qo = "اختيار ملف", ei = "فشل الرفع.", ti = "جاري الرفع", ni = "تم الرفع", oi = "إزالة", ii = "إلغاء الرفع", si = "معاينة", ai = "آسف! المعاينة غير متاحة لهذا الملف.", ri = "الصفحة الرئيسية", li = "عرض المزيد من المجلدات", ci = "نقل إلى", di = "هذا المجلد فارغ.", ui = "تحديد الكل", pi = "عرض", fi = "شبكة", hi = "قائمة", mi = "فتح", gi = "لا شيء هنا بعد", vi = "الاسم", $i = "تاريخ التعديل", yi = "الحجم", wi = 'هل أنت متأكد أنك تريد حذف "{{fileName}}"؟', xi = "هل أنت متأكد أنك تريد حذف هذه العناصر {{count}}؟", bi = "{{percent}}% تم", Ci = "تم الإلغاء", Fi = 'لا يمكن أن يحتوي اسم الملف على أي من الحروف التالية: \\ / : * ? " < > |', Si = 'هذا الموقع يحتوي بالفعل على مجلد باسم "{{renameFile}}".', Ni = "طي لوحة التنقل", Ei = "توسيع لوحة التنقل", Pi = {
  newFolder: Lo,
  upload: zo,
  paste: Ao,
  changeView: Ro,
  refresh: Oo,
  cut: Mo,
  copy: Io,
  rename: Uo,
  download: Do,
  delete: "حذف",
  itemSelected: jo,
  itemsSelected: Ho,
  cancel: Vo,
  clearSelection: Bo,
  completed: Wo,
  fileNameChangeWarning: _o,
  no: Ko,
  yes: Yo,
  close: qo,
  fileTypeNotAllowed: Go,
  fileAlreadyExist: Jo,
  maxUploadSize: Zo,
  dragFileToUpload: Xo,
  chooseFile: Qo,
  uploadFail: ei,
  uploading: ti,
  uploaded: ni,
  remove: oi,
  abortUpload: ii,
  preview: si,
  previewUnavailable: ai,
  home: ri,
  showMoreFolder: li,
  moveTo: ci,
  folderEmpty: di,
  selectAll: ui,
  view: pi,
  grid: fi,
  list: hi,
  open: mi,
  nothingHereYet: gi,
  name: vi,
  modified: $i,
  size: yi,
  deleteItemConfirm: wi,
  deleteItemsConfirm: xi,
  percentDone: bi,
  canceled: Ci,
  invalidFileName: Fi,
  folderExists: Si,
  collapseNavigationPane: Ni,
  expandNavigationPane: Ei
}, ki = "Ny mappe", Ti = "Upload", Li = "Indsæt", zi = "Skift visning", Ai = "Opdater", Ri = "Klip", Oi = "Kopiér", Mi = "Omdøb", Ii = "Download", Ui = "element valgt", Di = "elementer valgt", ji = "Annuller", Hi = "Ryd markering", Vi = "Fuldført", Bi = "Hvis du ændrer en filendelse, kan filen blive ubrugelig. Er du sikker på, at du vil ændre den?", Wi = "Nej", _i = "Ja", Ki = "Luk", Yi = "Filtypen er ikke tilladt.", qi = "Fil findes allerede.", Gi = "Maksimal uploadstørrelse er", Ji = "Træk filer for at uploade", Zi = "Vælg fil", Xi = "Upload mislykkedes.", Qi = "Uploader", es = "Uploadet", ts = "Fjern", ns = "Afbryd upload", os = "Forhåndsvisning", is = "Beklager! Forhåndsvisning er ikke tilgængelig for denne fil.", ss = "Hjem", as = "Vis flere mapper", rs = "Flyt til", ls = "Denne mappe er tom.", cs = "Vælg alle", ds = "Vis", us = "Gitter", ps = "Liste", fs = "Åbn", hs = "Intet her endnu", ms = "Navn", gs = "Ændret", vs = "Størrelse", $s = 'Er du sikker på, at du vil slette "{{fileName}}"?', ys = "Er du sikker på, at du vil slette disse {{count}} elementer?", ws = "{{percent}}% færdig", xs = "Annulleret", bs = 'Et filnavn må ikke indeholde følgende tegn: \\ / : * ? " < > |', Cs = 'Denne destination indeholder allerede en mappe med navnet "{{renameFile}}".', Fs = "Skjul navigationsrude", Ss = "Udvid navigationsrude", Ns = {
  newFolder: ki,
  upload: Ti,
  paste: Li,
  changeView: zi,
  refresh: Ai,
  cut: Ri,
  copy: Oi,
  rename: Mi,
  download: Ii,
  delete: "Slet",
  itemSelected: Ui,
  itemsSelected: Di,
  cancel: ji,
  clearSelection: Hi,
  completed: Vi,
  fileNameChangeWarning: Bi,
  no: Wi,
  yes: _i,
  close: Ki,
  fileTypeNotAllowed: Yi,
  fileAlreadyExist: qi,
  maxUploadSize: Gi,
  dragFileToUpload: Ji,
  chooseFile: Zi,
  uploadFail: Xi,
  uploading: Qi,
  uploaded: es,
  remove: ts,
  abortUpload: ns,
  preview: os,
  previewUnavailable: is,
  home: ss,
  showMoreFolder: as,
  moveTo: rs,
  folderEmpty: ls,
  selectAll: cs,
  view: ds,
  grid: us,
  list: ps,
  open: fs,
  nothingHereYet: hs,
  name: ms,
  modified: gs,
  size: vs,
  deleteItemConfirm: $s,
  deleteItemsConfirm: ys,
  percentDone: ws,
  canceled: xs,
  invalidFileName: bs,
  folderExists: Cs,
  collapseNavigationPane: Fs,
  expandNavigationPane: Ss
}, Es = "Neuer Ordner", Ps = "Hochladen", ks = "Einfügen", Ts = "Ansicht ändern", Ls = "Aktualisieren", zs = "Ausschneiden", As = "Kopieren", Rs = "Umbenennen", Os = "Herunterladen", Ms = "Element ausgewählt", Is = "Elemente ausgewählt", Us = "Abbrechen", Ds = "Auswahl aufheben", js = "Abgeschlossen", Hs = "Wenn Sie die Dateierweiterung ändern, kann die Datei unbrauchbar werden. Möchten Sie das wirklich tun?", Vs = "Nein", Bs = "Ja", Ws = "Schließen", _s = "Dateityp nicht erlaubt.", Ks = "Datei existiert bereits.", Ys = "Maximale Uploadgröße ist", qs = "Dateien zum Hochladen ziehen", Gs = "Datei auswählen", Js = "Hochladen fehlgeschlagen.", Zs = "Wird hochgeladen", Xs = "Hochgeladen", Qs = "Entfernen", ea = "Upload abbrechen", ta = "Vorschau", na = "Leider ist keine Vorschau für diese Datei verfügbar.", oa = "Startseite", ia = "Mehr Ordner anzeigen", sa = "Verschieben nach", aa = "Dieser Ordner ist leer.", ra = "Alle auswählen", la = "Ansicht", ca = "Raster", da = "Liste", ua = "Öffnen", pa = "Hier ist noch nichts", fa = "Name", ha = "Geändert", ma = "Größe", ga = 'Möchten Sie "{{fileName}}" wirklich löschen?', va = "Möchten Sie diese {{count}} Elemente wirklich löschen?", $a = "{{percent}}% erledigt", ya = "Abgebrochen", wa = 'Ein Dateiname darf keines der folgenden Zeichen enthalten: \\ / : * ? " < > |', xa = 'In diesem Zielordner gibt es bereits einen Ordner namens "{{renameFile}}".', ba = "Navigationsbereich einklappen", Ca = "Navigationsbereich erweitern", Fa = {
  newFolder: Es,
  upload: Ps,
  paste: ks,
  changeView: Ts,
  refresh: Ls,
  cut: zs,
  copy: As,
  rename: Rs,
  download: Os,
  delete: "Löschen",
  itemSelected: Ms,
  itemsSelected: Is,
  cancel: Us,
  clearSelection: Ds,
  completed: js,
  fileNameChangeWarning: Hs,
  no: Vs,
  yes: Bs,
  close: Ws,
  fileTypeNotAllowed: _s,
  fileAlreadyExist: Ks,
  maxUploadSize: Ys,
  dragFileToUpload: qs,
  chooseFile: Gs,
  uploadFail: Js,
  uploading: Zs,
  uploaded: Xs,
  remove: Qs,
  abortUpload: ea,
  preview: ta,
  previewUnavailable: na,
  home: oa,
  showMoreFolder: ia,
  moveTo: sa,
  folderEmpty: aa,
  selectAll: ra,
  view: la,
  grid: ca,
  list: da,
  open: ua,
  nothingHereYet: pa,
  name: fa,
  modified: ha,
  size: ma,
  deleteItemConfirm: ga,
  deleteItemsConfirm: va,
  percentDone: $a,
  canceled: ya,
  invalidFileName: wa,
  folderExists: xa,
  collapseNavigationPane: ba,
  expandNavigationPane: Ca
}, Sa = "New Folder", Na = "Upload", Ea = "Paste", Pa = "Change View", ka = "Refresh", Ta = "Cut", La = "Copy", za = "Rename", Aa = "Download", Ra = "item selected", Oa = "items selected", Ma = "Cancel", Ia = "Clear Selection", Ua = "Completed", Da = "If you change a file name extension, the file might become unusable. Are you sure you want to change it?", ja = "No", Ha = "Yes", Va = "Close", Ba = "File type is not allowed.", Wa = "File already exists.", _a = "Maximum upload size is", Ka = "Drag files to upload", Ya = "Choose File", qa = "Upload failed.", Ga = "Uploading", Ja = "Uploaded", Za = "Remove", Xa = "Abort Upload", Qa = "Preview", er = "Sorry! Preview is not available for this file.", tr = "Home", nr = "Show more folders", or = "Move to", ir = "This folder is empty.", sr = "Select all", ar = "View", rr = "Grid", lr = "List", cr = "Open", dr = "Nothing here yet", ur = "Name", pr = "Modified", fr = "Size", hr = 'Are you sure you want to delete "{{fileName}}"?', mr = "Are you sure you want to delete these {{count}} items?", gr = "{{percent}}% done", vr = "Canceled", $r = `A file name can't contain any of the following characters: \\ / : * ? " < > |`, yr = 'This destination already contains a folder named "{{renameFile}}".', wr = "Collapse Navigation Pane", xr = "Expand Navigation Pane", br = {
  newFolder: Sa,
  upload: Na,
  paste: Ea,
  changeView: Pa,
  refresh: ka,
  cut: Ta,
  copy: La,
  rename: za,
  download: Aa,
  delete: "Delete",
  itemSelected: Ra,
  itemsSelected: Oa,
  cancel: Ma,
  clearSelection: Ia,
  completed: Ua,
  fileNameChangeWarning: Da,
  no: ja,
  yes: Ha,
  close: Va,
  fileTypeNotAllowed: Ba,
  fileAlreadyExist: Wa,
  maxUploadSize: _a,
  dragFileToUpload: Ka,
  chooseFile: Ya,
  uploadFail: qa,
  uploading: Ga,
  uploaded: Ja,
  remove: Za,
  abortUpload: Xa,
  preview: Qa,
  previewUnavailable: er,
  home: tr,
  showMoreFolder: nr,
  moveTo: or,
  folderEmpty: ir,
  selectAll: sr,
  view: ar,
  grid: rr,
  list: lr,
  open: cr,
  nothingHereYet: dr,
  name: ur,
  modified: pr,
  size: fr,
  deleteItemConfirm: hr,
  deleteItemsConfirm: mr,
  percentDone: gr,
  canceled: vr,
  invalidFileName: $r,
  folderExists: yr,
  collapseNavigationPane: wr,
  expandNavigationPane: xr
}, Cr = "Nueva carpeta", Fr = "Subir", Sr = "Pegar", Nr = "Cambiar vista", Er = "Actualizar", Pr = "Cortar", kr = "Copiar", Tr = "Renombrar", Lr = "Descargar", zr = "elemento seleccionado", Ar = "elementos seleccionados", Rr = "Cancelar", Or = "Borrar selección", Mr = "Completado", Ir = "Si cambia la extensión del archivo, es posible que no funcione. ¿Está seguro de que desea cambiarla?", Ur = "No", Dr = "Sí", jr = "Cerrar", Hr = "Tipo de archivo no permitido.", Vr = "El archivo ya existe.", Br = "El tamaño máximo de subida es", Wr = "Arrastre archivos para subir", _r = "Elegir archivo", Kr = "Error al subir.", Yr = "Subiendo", qr = "Subido", Gr = "Eliminar", Jr = "Cancelar subida", Zr = "Vista previa", Xr = "¡Lo sentimos! No hay vista previa disponible para este archivo.", Qr = "Inicio", el = "Mostrar más carpetas", tl = "Mover a", nl = "Esta carpeta está vacía.", ol = "Seleccionar todo", il = "Vista", sl = "Cuadrícula", al = "Lista", rl = "Abrir", ll = "Nada por aquí aún", cl = "Nombre", dl = "Modificado", ul = "Tamaño", pl = '¿Está seguro de que desea eliminar "{{fileName}}"?', fl = "¿Está seguro de que desea eliminar estos {{count}} elementos?", hl = "{{percent}}% completado", ml = "Cancelado", gl = 'Un nombre de archivo no puede contener ninguno de los siguientes caracteres: \\ / : * ? " < > |', vl = 'Ya existe una carpeta llamada "{{renameFile}}" en este destino.', $l = "Contraer panel de navegación", yl = "Expandir panel de navegación", wl = {
  newFolder: Cr,
  upload: Fr,
  paste: Sr,
  changeView: Nr,
  refresh: Er,
  cut: Pr,
  copy: kr,
  rename: Tr,
  download: Lr,
  delete: "Eliminar",
  itemSelected: zr,
  itemsSelected: Ar,
  cancel: Rr,
  clearSelection: Or,
  completed: Mr,
  fileNameChangeWarning: Ir,
  no: Ur,
  yes: Dr,
  close: jr,
  fileTypeNotAllowed: Hr,
  fileAlreadyExist: Vr,
  maxUploadSize: Br,
  dragFileToUpload: Wr,
  chooseFile: _r,
  uploadFail: Kr,
  uploading: Yr,
  uploaded: qr,
  remove: Gr,
  abortUpload: Jr,
  preview: Zr,
  previewUnavailable: Xr,
  home: Qr,
  showMoreFolder: el,
  moveTo: tl,
  folderEmpty: nl,
  selectAll: ol,
  view: il,
  grid: sl,
  list: al,
  open: rl,
  nothingHereYet: ll,
  name: cl,
  modified: dl,
  size: ul,
  deleteItemConfirm: pl,
  deleteItemsConfirm: fl,
  percentDone: hl,
  canceled: ml,
  invalidFileName: gl,
  folderExists: vl,
  collapseNavigationPane: $l,
  expandNavigationPane: yl
}, xl = "پوشه جدید", bl = "بارگذاری", Cl = "الحاق", Fl = "تغییر نمایش", Sl = "بازخوانی", Nl = "برش", El = "کپی", Pl = "تغییر نام", kl = "دانلود", Tl = "مورد انتخاب شده", Ll = "مورد انتخاب شده", zl = "لغو", Al = "پاک کردن انتخاب", Rl = "تکمیل شد", Ol = "اگر پسوند نام فایل را تغییر دهید، ممکن است فایل غیرقابل استفاده شود. آیا مطمئن هستید که می‌خواهید آن را تغییر دهید؟", Ml = "خیر", Il = "بله", Ul = "بستن", Dl = "نوع فایل مجاز نیست.", jl = "فایل از قبل موجود است.", Hl = "حداکثر اندازه بارگذاری", Vl = "فایل‌ها را برای بارگذاری بکشید", Bl = "انتخاب فایل", Wl = "بارگذاری ناموفق بود.", _l = "در حال بارگذاری", Kl = "بارگذاری شد", Yl = "حذف", ql = "لغو بارگذاری", Gl = "پیش‌نمایش", Jl = "متأسفیم! پیش‌نمایش برای این فایل در دسترس نیست.", Zl = "خانه", Xl = "نمایش پوشه‌های بیشتر", Ql = "انتقال به", ec = "این پوشه خالی است.", tc = "انتخاب همه", nc = "نمایش", oc = "شبکه‌ای", ic = "لیستی", sc = "باز کردن", ac = "هنوز چیزی اینجا نیست", rc = "نام", lc = "تغییر یافته", cc = "اندازه", dc = 'آیا مطمئن هستید که می‌خواهید "{{fileName}}" را حذف کنید؟', uc = "آیا مطمئن هستید که می‌خواهید این {{count}} مورد را حذف کنید؟", pc = "{{percent}}% انجام شد", fc = "لغو شد", hc = 'نام فایل نمی‌تواند شامل هیچ یک از کاراکترهای زیر باشد: \\ / : * ? " < > |', mc = 'این مقصد از قبل شامل پوشه‌ای به نام "{{renameFile}}" است.', gc = "بستن پنل ناوبری", vc = "باز کردن پنل ناوبری", $c = {
  newFolder: xl,
  upload: bl,
  paste: Cl,
  changeView: Fl,
  refresh: Sl,
  cut: Nl,
  copy: El,
  rename: Pl,
  download: kl,
  delete: "حذف",
  itemSelected: Tl,
  itemsSelected: Ll,
  cancel: zl,
  clearSelection: Al,
  completed: Rl,
  fileNameChangeWarning: Ol,
  no: Ml,
  yes: Il,
  close: Ul,
  fileTypeNotAllowed: Dl,
  fileAlreadyExist: jl,
  maxUploadSize: Hl,
  dragFileToUpload: Vl,
  chooseFile: Bl,
  uploadFail: Wl,
  uploading: _l,
  uploaded: Kl,
  remove: Yl,
  abortUpload: ql,
  preview: Gl,
  previewUnavailable: Jl,
  home: Zl,
  showMoreFolder: Xl,
  moveTo: Ql,
  folderEmpty: ec,
  selectAll: tc,
  view: nc,
  grid: oc,
  list: ic,
  open: sc,
  nothingHereYet: ac,
  name: rc,
  modified: lc,
  size: cc,
  deleteItemConfirm: dc,
  deleteItemsConfirm: uc,
  percentDone: pc,
  canceled: fc,
  invalidFileName: hc,
  folderExists: mc,
  collapseNavigationPane: gc,
  expandNavigationPane: vc
}, yc = "Uusi kansio", wc = "Lataa", xc = "Liitä", bc = "Vaihda näkymää", Cc = "Päivitä", Fc = "Leikkaa", Sc = "Kopioi", Nc = "Nimeä uudelleen", Ec = "Lataa", Pc = "kohde valittu", kc = "kohdetta valittu", Tc = "Peruuta", Lc = "Tyhjennä valinta", zc = "Valmis", Ac = "Jos muutat tiedostopäätettä, tiedosto ei ehkä enää toimi. Haluatko varmasti muuttaa sen?", Rc = "Ei", Oc = "Kyllä", Mc = "Sulje", Ic = "Tiedostotyyppi ei sallittu.", Uc = "Tiedosto on jo olemassa.", Dc = "Suurin sallittu tiedostokoko on", jc = "Raahaa tiedostoja ladattavaksi", Hc = "Valitse tiedosto", Vc = "Lataus epäonnistui.", Bc = "Ladataan", Wc = "Ladattu", _c = "Poista", Kc = "Keskeytä lataus", Yc = "Esikatsele", qc = "Valitettavasti esikatselua ei ole saatavilla tälle tiedostolle.", Gc = "Etusivu", Jc = "Näytä lisää kansioita", Zc = "Siirrä kohteeseen", Xc = "Tämä kansio on tyhjä.", Qc = "Valitse kaikki", ed = "Näytä", td = "Ruudukko", nd = "Lista", od = "Avaa", id = "Täällä ei ole vielä mitään", sd = "Nimi", ad = "Muokattu", rd = "Koko", ld = 'Haluatko varmasti poistaa tiedoston "{{fileName}}"?', cd = "Haluatko varmasti poistaa nämä {{count}} kohdetta?", dd = "{{percent}}% valmis", ud = "Peruutettu", pd = 'Tiedostonimessä ei voi olla seuraavia merkkejä: \\ / : * ? " < > |', fd = 'Kohteessa on jo kansio nimeltä "{{renameFile}}".', hd = "Pienennä navigointipaneeli", md = "Laajenna navigointipaneeli", gd = {
  newFolder: yc,
  upload: wc,
  paste: xc,
  changeView: bc,
  refresh: Cc,
  cut: Fc,
  copy: Sc,
  rename: Nc,
  download: Ec,
  delete: "Poista",
  itemSelected: Pc,
  itemsSelected: kc,
  cancel: Tc,
  clearSelection: Lc,
  completed: zc,
  fileNameChangeWarning: Ac,
  no: Rc,
  yes: Oc,
  close: Mc,
  fileTypeNotAllowed: Ic,
  fileAlreadyExist: Uc,
  maxUploadSize: Dc,
  dragFileToUpload: jc,
  chooseFile: Hc,
  uploadFail: Vc,
  uploading: Bc,
  uploaded: Wc,
  remove: _c,
  abortUpload: Kc,
  preview: Yc,
  previewUnavailable: qc,
  home: Gc,
  showMoreFolder: Jc,
  moveTo: Zc,
  folderEmpty: Xc,
  selectAll: Qc,
  view: ed,
  grid: td,
  list: nd,
  open: od,
  nothingHereYet: id,
  name: sd,
  modified: ad,
  size: rd,
  deleteItemConfirm: ld,
  deleteItemsConfirm: cd,
  percentDone: dd,
  canceled: ud,
  invalidFileName: pd,
  folderExists: fd,
  collapseNavigationPane: hd,
  expandNavigationPane: md
}, vd = "Nouveau dossier", $d = "Téléverser", yd = "Coller", wd = "Changer la vue", xd = "Rafraîchir", bd = "Couper", Cd = "Copier", Fd = "Renommer", Sd = "Télécharger", Nd = "élément sélectionné", Ed = "éléments sélectionnés", Pd = "Annuler", kd = "Effacer la sélection", Td = "Terminé", Ld = "Si vous modifiez l'extension d'un fichier, celui-ci pourrait devenir inutilisable. Êtes-vous sûr de vouloir le modifier ?", zd = "Non", Ad = "Oui", Rd = "Fermer", Od = "Type de fichier non autorisé.", Md = "Le fichier existe déjà.", Id = "La taille maximale de téléversement est", Ud = "Glissez les fichiers à téléverser", Dd = "Choisir un fichier", jd = "Échec du téléversement.", Hd = "Téléversement en cours", Vd = "Téléversé", Bd = "Supprimer", Wd = "Annuler le téléversement", _d = "Aperçu", Kd = "Désolé ! L'aperçu n'est pas disponible pour ce fichier.", Yd = "Accueil", qd = "Afficher plus de dossiers", Gd = "Déplacer vers", Jd = "Ce dossier est vide.", Zd = "Tout sélectionner", Xd = "Vue", Qd = "Grille", eu = "Liste", tu = "Ouvrir", nu = "Rien ici pour le moment", ou = "Nom", iu = "Modifié", su = "Taille", au = 'Êtes-vous sûr de vouloir supprimer "{{fileName}}" ?', ru = "Êtes-vous sûr de vouloir supprimer ces {{count}} éléments ?", lu = "{{percent}}% terminé", cu = "Annulé", du = 'Un nom de fichier ne peut pas contenir les caractères suivants : \\ / : * ? " < > |', uu = 'Cette destination contient déjà un dossier nommé "{{renameFile}}".', pu = "Réduire le panneau de navigation", fu = "Développer le panneau de navigation", hu = {
  newFolder: vd,
  upload: $d,
  paste: yd,
  changeView: wd,
  refresh: xd,
  cut: bd,
  copy: Cd,
  rename: Fd,
  download: Sd,
  delete: "Supprimer",
  itemSelected: Nd,
  itemsSelected: Ed,
  cancel: Pd,
  clearSelection: kd,
  completed: Td,
  fileNameChangeWarning: Ld,
  no: zd,
  yes: Ad,
  close: Rd,
  fileTypeNotAllowed: Od,
  fileAlreadyExist: Md,
  maxUploadSize: Id,
  dragFileToUpload: Ud,
  chooseFile: Dd,
  uploadFail: jd,
  uploading: Hd,
  uploaded: Vd,
  remove: Bd,
  abortUpload: Wd,
  preview: _d,
  previewUnavailable: Kd,
  home: Yd,
  showMoreFolder: qd,
  moveTo: Gd,
  folderEmpty: Jd,
  selectAll: Zd,
  view: Xd,
  grid: Qd,
  list: eu,
  open: tu,
  nothingHereYet: nu,
  name: ou,
  modified: iu,
  size: su,
  deleteItemConfirm: au,
  deleteItemsConfirm: ru,
  percentDone: lu,
  canceled: cu,
  invalidFileName: du,
  folderExists: uu,
  collapseNavigationPane: pu,
  expandNavigationPane: fu
}, mu = "תיקייה חדשה", gu = "העלה", vu = "הדבק", $u = "שנה תצוגה", yu = "רענן", wu = "גזור", xu = "העתק", bu = "שנה שם", Cu = "הורד", Fu = "פריט נבחר", Su = "פריטים נבחרו", Nu = "בטל", Eu = "נקה בחירה", Pu = "הושלם", ku = "אם תשנה את סיומת הקובץ, הקובץ עלול להפוך לבלתי שמיש. האם אתה בטוח שברצונך לשנות זאת?", Tu = "לא", Lu = "כן", zu = "סגור", Au = "סוג הקובץ אינו מורשה.", Ru = "הקובץ כבר קיים.", Ou = "גודל העלאה מקסימלי הוא", Mu = "גרור קבצים להעלאה", Iu = "בחר קובץ", Uu = "ההעלאה נכשלה.", Du = "מעלה...", ju = "הועלה", Hu = "הסר", Vu = "בטל העלאה", Bu = "תצוגה מקדימה", Wu = "מצטערים! אין תצוגה מקדימה זמינה לקובץ זה.", _u = "דף הבית", Ku = "הצג תיקיות נוספות", Yu = "העבר ל", qu = "התיקייה ריקה.", Gu = "בחר הכל", Ju = "תצוגה", Zu = "רשת", Xu = "רשימה", Qu = "פתח", ep = "אין כאן כלום עדיין", tp = "שם", np = "שונה", op = "גודל", ip = 'האם אתה בטוח שברצונך למחוק את "{{fileName}}"?', sp = "האם אתה בטוח שברצונך למחוק את {{count}} הפריטים האלו?", ap = "{{percent}}% הושלמו", rp = "בוטל", lp = 'שם קובץ לא יכול להכיל את התווים הבאים: \\ / : * ? " < > |', cp = 'כבר קיימת תיקייה בשם "{{renameFile}}" במיקום זה.', dp = "כווץ את לוח הניווט", up = "הרחב את לוח הניווט", pp = {
  newFolder: mu,
  upload: gu,
  paste: vu,
  changeView: $u,
  refresh: yu,
  cut: wu,
  copy: xu,
  rename: bu,
  download: Cu,
  delete: "מחק",
  itemSelected: Fu,
  itemsSelected: Su,
  cancel: Nu,
  clearSelection: Eu,
  completed: Pu,
  fileNameChangeWarning: ku,
  no: Tu,
  yes: Lu,
  close: zu,
  fileTypeNotAllowed: Au,
  fileAlreadyExist: Ru,
  maxUploadSize: Ou,
  dragFileToUpload: Mu,
  chooseFile: Iu,
  uploadFail: Uu,
  uploading: Du,
  uploaded: ju,
  remove: Hu,
  abortUpload: Vu,
  preview: Bu,
  previewUnavailable: Wu,
  home: _u,
  showMoreFolder: Ku,
  moveTo: Yu,
  folderEmpty: qu,
  selectAll: Gu,
  view: Ju,
  grid: Zu,
  list: Xu,
  open: Qu,
  nothingHereYet: ep,
  name: tp,
  modified: np,
  size: op,
  deleteItemConfirm: ip,
  deleteItemsConfirm: sp,
  percentDone: ap,
  canceled: rp,
  invalidFileName: lp,
  folderExists: cp,
  collapseNavigationPane: dp,
  expandNavigationPane: up
}, fp = "नया फ़ोल्डर", hp = "अपलोड करें", mp = "पेस्ट करें", gp = "दृश्य बदलें", vp = "रिफ्रेश करें", $p = "काटें", yp = "कॉपी करें", wp = "नाम बदलें", xp = "डाउनलोड करें", bp = "आइटम चुना गया", Cp = "आइटम्स चुने गए", Fp = "रद्द करें", Sp = "चयन साफ़ करें", Np = "पूर्ण हुआ", Ep = "यदि आप फ़ाइल नाम एक्सटेंशन बदलते हैं, तो फ़ाइल अनुपयोगी हो सकती है। क्या आप वाकई इसे बदलना चाहते हैं?", Pp = "नहीं", kp = "हाँ", Tp = "बंद करें", Lp = "फ़ाइल प्रकार की अनुमति नहीं है।", zp = "फ़ाइल पहले से मौजूद है।", Ap = "अधिकतम अपलोड आकार है", Rp = "अपलोड करने के लिए फ़ाइलें खींचें", Op = "फ़ाइल चुनें", Mp = "अपलोड विफल रहा।", Ip = "अपलोड हो रहा है", Up = "अपलोड हो गया", Dp = "हटाएं", jp = "अपलोड रोकें", Hp = "पूर्वावलोकन", Vp = "माफ़ कीजिए! इस फ़ाइल के लिए पूर्वावलोकन उपलब्ध नहीं है।", Bp = "होम", Wp = "और फ़ोल्डर दिखाएँ", _p = "इसमें ले जाएँ", Kp = "यह फ़ोल्डर खाली है।", Yp = "सभी का चयन करें", qp = "दृश्य", Gp = "ग्रिड", Jp = "सूची", Zp = "खोलें", Xp = "यहाँ अभी कुछ नहीं है", Qp = "नाम", ef = "परिवर्तित", tf = "आकार", nf = 'क्या आप वाकई "{{fileName}}" को हटाना चाहते हैं?', of = "क्या आप वाकई इन {{count}} आइटम्स को हटाना चाहते हैं?", sf = "{{percent}}% पूर्ण", af = "रद्द किया गया", rf = 'फ़ाइल नाम में निम्नलिखित वर्ण नहीं हो सकते: \\ / : * ? " < > |', lf = 'इस स्थान पर "{{renameFile}}" नाम का एक फ़ोल्डर पहले से मौजूद है।', cf = "नेविगेशन पैन को संकुचित करें", df = "नेविगेशन पैन को विस्तारित करें", uf = {
  newFolder: fp,
  upload: hp,
  paste: mp,
  changeView: gp,
  refresh: vp,
  cut: $p,
  copy: yp,
  rename: wp,
  download: xp,
  delete: "हटाएं",
  itemSelected: bp,
  itemsSelected: Cp,
  cancel: Fp,
  clearSelection: Sp,
  completed: Np,
  fileNameChangeWarning: Ep,
  no: Pp,
  yes: kp,
  close: Tp,
  fileTypeNotAllowed: Lp,
  fileAlreadyExist: zp,
  maxUploadSize: Ap,
  dragFileToUpload: Rp,
  chooseFile: Op,
  uploadFail: Mp,
  uploading: Ip,
  uploaded: Up,
  remove: Dp,
  abortUpload: jp,
  preview: Hp,
  previewUnavailable: Vp,
  home: Bp,
  showMoreFolder: Wp,
  moveTo: _p,
  folderEmpty: Kp,
  selectAll: Yp,
  view: qp,
  grid: Gp,
  list: Jp,
  open: Zp,
  nothingHereYet: Xp,
  name: Qp,
  modified: ef,
  size: tf,
  deleteItemConfirm: nf,
  deleteItemsConfirm: of,
  percentDone: sf,
  canceled: af,
  invalidFileName: rf,
  folderExists: lf,
  collapseNavigationPane: cf,
  expandNavigationPane: df
}, pf = "Nuova cartella", ff = "Carica", hf = "Incolla", mf = "Cambia vista", gf = "Ricarica", vf = "Taglia", $f = "Copia", yf = "Rinomina", wf = "Scarica", xf = "elemento selezionato", bf = "elementi selezionati", Cf = "Annulla", Ff = "Pulisci selezione", Sf = "Completato", Nf = "Se cambi l'estensione del file, potrebbe diventare inutilizzabile. Sei sicuro di volerlo fare?", Ef = "No", Pf = "Sì", kf = "Chiudi", Tf = "Tipo di file non consentito.", Lf = "Il file esiste già.", zf = "La dimensione massima di caricamento è", Af = "Trascina i file per caricarli", Rf = "Scegli file", Of = "Caricamento fallito.", Mf = "Caricamento in corso", If = "Caricato", Uf = "Rimuovi", Df = "Annulla caricamento", jf = "Anteprima", Hf = "Spiacenti! L'anteprima non è disponibile per questo file.", Vf = "Home", Bf = "Mostra altre cartelle", Wf = "Sposta in", _f = "Questa cartella è vuota.", Kf = "Seleziona tutto", Yf = "Vista", qf = "Griglia", Gf = "Lista", Jf = "Apri", Zf = "Niente qui per ora", Xf = "Nome", Qf = "Modificato", eh = "Dimensione", th = 'Sei sicuro di voler eliminare "{{fileName}}"?', nh = "Sei sicuro di voler eliminare questi {{count}} elementi?", oh = "{{percent}}% completato", ih = "Annullato", sh = 'Un nome di file non può contenere nessuno dei seguenti caratteri: \\ / : * ? " < > |', ah = 'Questa destinazione contiene già una cartella chiamata "{{renameFile}}".', rh = "Comprimi pannello di navigazione", lh = "Espandi pannello di navigazione", ch = {
  newFolder: pf,
  upload: ff,
  paste: hf,
  changeView: mf,
  refresh: gf,
  cut: vf,
  copy: $f,
  rename: yf,
  download: wf,
  delete: "Elimina",
  itemSelected: xf,
  itemsSelected: bf,
  cancel: Cf,
  clearSelection: Ff,
  completed: Sf,
  fileNameChangeWarning: Nf,
  no: Ef,
  yes: Pf,
  close: kf,
  fileTypeNotAllowed: Tf,
  fileAlreadyExist: Lf,
  maxUploadSize: zf,
  dragFileToUpload: Af,
  chooseFile: Rf,
  uploadFail: Of,
  uploading: Mf,
  uploaded: If,
  remove: Uf,
  abortUpload: Df,
  preview: jf,
  previewUnavailable: Hf,
  home: Vf,
  showMoreFolder: Bf,
  moveTo: Wf,
  folderEmpty: _f,
  selectAll: Kf,
  view: Yf,
  grid: qf,
  list: Gf,
  open: Jf,
  nothingHereYet: Zf,
  name: Xf,
  modified: Qf,
  size: eh,
  deleteItemConfirm: th,
  deleteItemsConfirm: nh,
  percentDone: oh,
  canceled: ih,
  invalidFileName: sh,
  folderExists: ah,
  collapseNavigationPane: rh,
  expandNavigationPane: lh
}, dh = "新しいフォルダー", uh = "アップロード", ph = "貼り付け", fh = "ビューを変更", hh = "更新", mh = "切り取り", gh = "コピー", vh = "名前変更", $h = "ダウンロード", yh = "アイテムが選択されました", wh = "{{count}} アイテムが選択されました", xh = "キャンセル", bh = "選択をクリア", Ch = "完了", Fh = "ファイル拡張子を変更すると、ファイルが使えなくなる場合があります。本当に変更しますか？", Sh = "いいえ", Nh = "はい", Eh = "閉じる", Ph = "ファイルタイプは許可されていません。", kh = "ファイルはすでに存在します。", Th = "最大アップロードサイズは", Lh = "ファイルをドラッグしてアップロード", zh = "ファイルを選択", Ah = "アップロード失敗。", Rh = "アップロード中", Oh = "アップロード済み", Mh = "削除", Ih = "アップロード中止", Uh = "プレビュー", Dh = "申し訳ありません！このファイルのプレビューは利用できません。", jh = "ホーム", Hh = "さらにフォルダーを表示", Vh = "移動先", Bh = "このフォルダーは空です。", Wh = "すべて選択", _h = "ビュー", Kh = "グリッド", Yh = "リスト", qh = "開く", Gh = "まだ何もありません", Jh = "名前", Zh = "修正日", Xh = "サイズ", Qh = '"{{fileName}}" を削除してもよろしいですか？', em = "{{count}} 件のアイテムを削除してもよろしいですか？", tm = "{{percent}}% 完了", nm = "キャンセルしました", om = 'ファイル名には以下の文字を含めることはできません：\\ / : * ? " < > |', im = 'この宛先には "{{renameFile}}" という名前のフォルダーがすでに存在します。', sm = "ナビゲーションペインを折りたたむ", am = "ナビゲーションペインを展開", rm = {
  newFolder: dh,
  upload: uh,
  paste: ph,
  changeView: fh,
  refresh: hh,
  cut: mh,
  copy: gh,
  rename: vh,
  download: $h,
  delete: "削除",
  itemSelected: yh,
  itemsSelected: wh,
  cancel: xh,
  clearSelection: bh,
  completed: Ch,
  fileNameChangeWarning: Fh,
  no: Sh,
  yes: Nh,
  close: Eh,
  fileTypeNotAllowed: Ph,
  fileAlreadyExist: kh,
  maxUploadSize: Th,
  dragFileToUpload: Lh,
  chooseFile: zh,
  uploadFail: Ah,
  uploading: Rh,
  uploaded: Oh,
  remove: Mh,
  abortUpload: Ih,
  preview: Uh,
  previewUnavailable: Dh,
  home: jh,
  showMoreFolder: Hh,
  moveTo: Vh,
  folderEmpty: Bh,
  selectAll: Wh,
  view: _h,
  grid: Kh,
  list: Yh,
  open: qh,
  nothingHereYet: Gh,
  name: Jh,
  modified: Zh,
  size: Xh,
  deleteItemConfirm: Qh,
  deleteItemsConfirm: em,
  percentDone: tm,
  canceled: nm,
  invalidFileName: om,
  folderExists: im,
  collapseNavigationPane: sm,
  expandNavigationPane: am
}, lm = "새 폴더", cm = "업로드", dm = "붙여넣기", um = "보기 변경", pm = "새로 고침", fm = "잘라내기", hm = "복사", mm = "이름 바꾸기", gm = "다운로드", vm = "항목 선택됨", $m = "개 항목 선택됨", ym = "취소", wm = "선택 지우기", xm = "완료됨", bm = "파일 확장자를 변경하면 사용할 수 없게 될 수 있습니다. 정말로 변경하시겠습니까?", Cm = "아니오", Fm = "예", Sm = "닫기", Nm = "허용되지 않는 파일 형식입니다.", Em = "파일이 이미 존재합니다.", Pm = "최대 업로드 크기", km = "업로드하려면 파일을 끌어오세요", Tm = "파일 선택", Lm = "업로드 실패", zm = "업로드 중", Am = "업로드 완료", Rm = "제거", Om = "업로드 중단", Mm = "미리보기", Im = "죄송합니다! 이 파일은 미리보기를 제공하지 않습니다.", Um = "홈", Dm = "더 많은 폴더 보기", jm = "이동", Hm = "이 폴더는 비어 있습니다.", Vm = "전체 선택", Bm = "보기", Wm = "그리드", _m = "목록", Km = "열기", Ym = "아직 아무것도 없습니다", qm = "이름", Gm = "수정됨", Jm = "크기", Zm = '"{{fileName}}" 파일을 삭제하시겠습니까?', Xm = "{{count}}개의 항목을 삭제하시겠습니까?", Qm = "{{percent}}% 완료", e1 = "취소됨", t1 = '파일 이름에는 다음 문자를 사용할 수 없습니다: \\ / : * ? " < > |', n1 = '해당 위치에 "{{renameFile}}" 폴더가 이미 있습니다.', o1 = "탐색 창 축소", i1 = "탐색 창 확장", s1 = {
  newFolder: lm,
  upload: cm,
  paste: dm,
  changeView: um,
  refresh: pm,
  cut: fm,
  copy: hm,
  rename: mm,
  download: gm,
  delete: "삭제",
  itemSelected: vm,
  itemsSelected: $m,
  cancel: ym,
  clearSelection: wm,
  completed: xm,
  fileNameChangeWarning: bm,
  no: Cm,
  yes: Fm,
  close: Sm,
  fileTypeNotAllowed: Nm,
  fileAlreadyExist: Em,
  maxUploadSize: Pm,
  dragFileToUpload: km,
  chooseFile: Tm,
  uploadFail: Lm,
  uploading: zm,
  uploaded: Am,
  remove: Rm,
  abortUpload: Om,
  preview: Mm,
  previewUnavailable: Im,
  home: Um,
  showMoreFolder: Dm,
  moveTo: jm,
  folderEmpty: Hm,
  selectAll: Vm,
  view: Bm,
  grid: Wm,
  list: _m,
  open: Km,
  nothingHereYet: Ym,
  name: qm,
  modified: Gm,
  size: Jm,
  deleteItemConfirm: Zm,
  deleteItemsConfirm: Xm,
  percentDone: Qm,
  canceled: e1,
  invalidFileName: t1,
  folderExists: n1,
  collapseNavigationPane: o1,
  expandNavigationPane: i1
}, a1 = "Ny mappe", r1 = "Last opp", l1 = "Lim inn", c1 = "Bytt visning", d1 = "Oppdater", u1 = "Klipp ut", p1 = "Kopier", f1 = "Gi nytt navn", h1 = "Last ned", m1 = "element valgt", g1 = "elementer valgt", v1 = "Avbryt", $1 = "Fjern utvalg", y1 = "Fullført", w1 = "Hvis du endrer en filendelse, kan filen bli ubrukelig. Er du sikker på at du vil endre den?", x1 = "Nei", b1 = "Ja", C1 = "Lukk", F1 = "Filtypen er ikke tillatt.", S1 = "Filen finnes allerede.", N1 = "Maksimal opplastingsstørrelse er", E1 = "Dra filer for å laste opp", P1 = "Velg fil", k1 = "Opplasting mislyktes.", T1 = "Laster opp", L1 = "Lastet opp", z1 = "Fjern", A1 = "Avbryt opplasting", R1 = "Forhåndsvis", O1 = "Beklager! Forhåndsvisning er ikke tilgjengelig for denne filen.", M1 = "Hjem", I1 = "Vis flere mapper", U1 = "Flytt til", D1 = "Denne mappen er tom.", j1 = "Velg alle", H1 = "Vis", V1 = "Rutenett", B1 = "Liste", W1 = "Åpne", _1 = "Ingenting her ennå", K1 = "Navn", Y1 = "Endret", q1 = "Størrelse", G1 = "Er du sikker på at du vil slette «{{fileName}}»?", J1 = "Er du sikker på at du vil slette disse {{count}} elementene?", Z1 = "{{percent}}% ferdig", X1 = "Avbrutt", Q1 = 'Et filnavn kan ikke inneholde noen av følgende tegn: \\ / : * ? " < > |', eg = "Denne destinasjonen inneholder allerede en mappe med navnet «{{renameFile}}».", tg = "Skjul navigasjonsrute", ng = "Utvid navigasjonsrute", og = {
  newFolder: a1,
  upload: r1,
  paste: l1,
  changeView: c1,
  refresh: d1,
  cut: u1,
  copy: p1,
  rename: f1,
  download: h1,
  delete: "Slett",
  itemSelected: m1,
  itemsSelected: g1,
  cancel: v1,
  clearSelection: $1,
  completed: y1,
  fileNameChangeWarning: w1,
  no: x1,
  yes: b1,
  close: C1,
  fileTypeNotAllowed: F1,
  fileAlreadyExist: S1,
  maxUploadSize: N1,
  dragFileToUpload: E1,
  chooseFile: P1,
  uploadFail: k1,
  uploading: T1,
  uploaded: L1,
  remove: z1,
  abortUpload: A1,
  preview: R1,
  previewUnavailable: O1,
  home: M1,
  showMoreFolder: I1,
  moveTo: U1,
  folderEmpty: D1,
  selectAll: j1,
  view: H1,
  grid: V1,
  list: B1,
  open: W1,
  nothingHereYet: _1,
  name: K1,
  modified: Y1,
  size: q1,
  deleteItemConfirm: G1,
  deleteItemsConfirm: J1,
  percentDone: Z1,
  canceled: X1,
  invalidFileName: Q1,
  folderExists: eg,
  collapseNavigationPane: tg,
  expandNavigationPane: ng
}, ig = "Nova pasta", sg = "Carregar", ag = "Colar", rg = "Alterar visualização", lg = "Atualizar", cg = "Cortar", dg = "Copiar", ug = "Renomear", pg = "Baixar", fg = "item selecionado", hg = "itens selecionados", mg = "Cancelar", gg = "Limpar seleção", vg = "Concluído", $g = "Se você alterar a extensão do arquivo, ele pode se tornar inutilizável. Tem certeza de que deseja fazer isso?", yg = "Não", wg = "Sim", xg = "Fechar", bg = "Tipo de arquivo não permitido.", Cg = "Arquivo já existe.", Fg = "Tamanho máximo de upload é", Sg = "Arraste os arquivos para carregar", Ng = "Escolher arquivo", Eg = "Falha no upload.", Pg = "Carregando", kg = "Carregado", Tg = "Remover", Lg = "Abortar upload", zg = "Visualizar", Ag = "Desculpe! Não há visualização disponível para este arquivo.", Rg = "Início", Og = "Mostrar mais pastas", Mg = "Mover para", Ig = "Esta pasta está vazia.", Ug = "Selecionar tudo", Dg = "Visualização", jg = "Grade", Hg = "Lista", Vg = "Abrir", Bg = "Nada aqui ainda", Wg = "Nome", _g = "Modificado", Kg = "Tamanho", Yg = 'Tem certeza de que deseja excluir "{{fileName}}"?', qg = "Tem certeza de que deseja excluir esses {{count}} itens?", Gg = "{{percent}}% concluído", Jg = "Cancelado", Zg = 'Um nome de arquivo não pode conter nenhum dos seguintes caracteres: \\ / : * ? " < > |', Xg = 'Já existe uma pasta com o nome "{{renameFile}}" neste local.', Qg = "Recolher painel de navegação", e0 = "Expandir painel de navegação", t0 = {
  newFolder: ig,
  upload: sg,
  paste: ag,
  changeView: rg,
  refresh: lg,
  cut: cg,
  copy: dg,
  rename: ug,
  download: pg,
  delete: "Excluir",
  itemSelected: fg,
  itemsSelected: hg,
  cancel: mg,
  clearSelection: gg,
  completed: vg,
  fileNameChangeWarning: $g,
  no: yg,
  yes: wg,
  close: xg,
  fileTypeNotAllowed: bg,
  fileAlreadyExist: Cg,
  maxUploadSize: Fg,
  dragFileToUpload: Sg,
  chooseFile: Ng,
  uploadFail: Eg,
  uploading: Pg,
  uploaded: kg,
  remove: Tg,
  abortUpload: Lg,
  preview: zg,
  previewUnavailable: Ag,
  home: Rg,
  showMoreFolder: Og,
  moveTo: Mg,
  folderEmpty: Ig,
  selectAll: Ug,
  view: Dg,
  grid: jg,
  list: Hg,
  open: Vg,
  nothingHereYet: Bg,
  name: Wg,
  modified: _g,
  size: Kg,
  deleteItemConfirm: Yg,
  deleteItemsConfirm: qg,
  percentDone: Gg,
  canceled: Jg,
  invalidFileName: Zg,
  folderExists: Xg,
  collapseNavigationPane: Qg,
  expandNavigationPane: e0
}, n0 = "Nova pasta", o0 = "Carregar", i0 = "Colar", s0 = "Mudar vista", a0 = "Atualizar", r0 = "Cortar", l0 = "Copiar", c0 = "Renomear", d0 = "Transferir", u0 = "item selecionado", p0 = "itens selecionados", f0 = "Cancelar", h0 = "Limpar seleção", m0 = "Concluído", g0 = "Se alterar a extensão de um ficheiro, este pode deixar de funcionar corretamente. Tem a certeza de que deseja alterá-la?", v0 = "Não", $0 = "Sim", y0 = "Fechar", w0 = "Tipo de ficheiro não permitido.", x0 = "O ficheiro já existe.", b0 = "O tamanho máximo de carregamento é", C0 = "Arraste os ficheiros para carregar", F0 = "Escolher ficheiro", S0 = "Falha no carregamento.", N0 = "A carregar", E0 = "Carregado", P0 = "Remover", k0 = "Cancelar carregamento", T0 = "Pré-visualizar", L0 = "Lamentamos! A pré-visualização não está disponível para este ficheiro.", z0 = "Início", A0 = "Mostrar mais pastas", R0 = "Mover para", O0 = "Esta pasta está vazia.", M0 = "Selecionar tudo", I0 = "Vista", U0 = "Grelha", D0 = "Lista", j0 = "Abrir", H0 = "Ainda não há nada aqui", V0 = "Nome", B0 = "Modificado", W0 = "Tamanho", _0 = 'Tem a certeza de que deseja eliminar "{{fileName}}"?', K0 = "Tem a certeza de que deseja eliminar estes {{count}} itens?", Y0 = "{{percent}}% concluído", q0 = "Cancelado", G0 = 'O nome do ficheiro não pode conter nenhum dos seguintes caracteres: \\ / : * ? " < > |', J0 = 'O destino já contém uma pasta chamada "{{renameFile}}".', Z0 = "Recolher painel de navegação", X0 = "Expandir painel de navegação", Q0 = {
  newFolder: n0,
  upload: o0,
  paste: i0,
  changeView: s0,
  refresh: a0,
  cut: r0,
  copy: l0,
  rename: c0,
  download: d0,
  delete: "Eliminar",
  itemSelected: u0,
  itemsSelected: p0,
  cancel: f0,
  clearSelection: h0,
  completed: m0,
  fileNameChangeWarning: g0,
  no: v0,
  yes: $0,
  close: y0,
  fileTypeNotAllowed: w0,
  fileAlreadyExist: x0,
  maxUploadSize: b0,
  dragFileToUpload: C0,
  chooseFile: F0,
  uploadFail: S0,
  uploading: N0,
  uploaded: E0,
  remove: P0,
  abortUpload: k0,
  preview: T0,
  previewUnavailable: L0,
  home: z0,
  showMoreFolder: A0,
  moveTo: R0,
  folderEmpty: O0,
  selectAll: M0,
  view: I0,
  grid: U0,
  list: D0,
  open: j0,
  nothingHereYet: H0,
  name: V0,
  modified: B0,
  size: W0,
  deleteItemConfirm: _0,
  deleteItemsConfirm: K0,
  percentDone: Y0,
  canceled: q0,
  invalidFileName: G0,
  folderExists: J0,
  collapseNavigationPane: Z0,
  expandNavigationPane: X0
}, e2 = "Новая папка", t2 = "Загрузить", n2 = "Вставить", o2 = "Изменить вид", i2 = "Обновить", s2 = "Вырезать", a2 = "Копировать", r2 = "Переименовать", l2 = "Скачать", c2 = "выбран элемент", d2 = "выбрано {{count}} элементов", u2 = "Отменить", p2 = "Очистить выбор", f2 = "Завершено", h2 = "Если вы измените расширение файла, файл может стать неисправным. Вы уверены, что хотите изменить его?", m2 = "Нет", g2 = "Да", v2 = "Закрыть", $2 = "Тип файла не разрешен.", y2 = "Файл уже существует.", w2 = "Максимальный размер загрузки:", x2 = "Перетащите файлы для загрузки", b2 = "Выбрать файл", C2 = "Загрузка не удалась.", F2 = "Загрузка", S2 = "Загружено", N2 = "Удалить", E2 = "Прервать загрузку", P2 = "Предпросмотр", k2 = "Извините! Предпросмотр для этого файла недоступен.", T2 = "Главная", L2 = "Показать больше папок", z2 = "Переместить в", A2 = "Эта папка пуста.", R2 = "Выбрать все", O2 = "Вид", M2 = "Сетка", I2 = "Список", U2 = "Открыть", D2 = "Здесь еще ничего нет", j2 = "Имя", H2 = "Изменено", V2 = "Размер", B2 = 'Вы уверены, что хотите удалить "{{fileName}}"?', W2 = "Вы уверены, что хотите удалить эти {{count}} элементы?", _2 = "{{percent}}% завершено", K2 = "Отменено", Y2 = 'Имя файла не может содержать следующие символы: \\ / : * ? " < > |', q2 = 'В этом местоположении уже существует папка с именем "{{renameFile}}".', G2 = "Свернуть панель навигации", J2 = "Развернуть панель навигации", Z2 = {
  newFolder: e2,
  upload: t2,
  paste: n2,
  changeView: o2,
  refresh: i2,
  cut: s2,
  copy: a2,
  rename: r2,
  download: l2,
  delete: "Удалить",
  itemSelected: c2,
  itemsSelected: d2,
  cancel: u2,
  clearSelection: p2,
  completed: f2,
  fileNameChangeWarning: h2,
  no: m2,
  yes: g2,
  close: v2,
  fileTypeNotAllowed: $2,
  fileAlreadyExist: y2,
  maxUploadSize: w2,
  dragFileToUpload: x2,
  chooseFile: b2,
  uploadFail: C2,
  uploading: F2,
  uploaded: S2,
  remove: N2,
  abortUpload: E2,
  preview: P2,
  previewUnavailable: k2,
  home: T2,
  showMoreFolder: L2,
  moveTo: z2,
  folderEmpty: A2,
  selectAll: R2,
  view: O2,
  grid: M2,
  list: I2,
  open: U2,
  nothingHereYet: D2,
  name: j2,
  modified: H2,
  size: V2,
  deleteItemConfirm: B2,
  deleteItemsConfirm: W2,
  percentDone: _2,
  canceled: K2,
  invalidFileName: Y2,
  folderExists: q2,
  collapseNavigationPane: G2,
  expandNavigationPane: J2
}, X2 = "Ny mapp", Q2 = "Ladda upp", ev = "Klistra in", tv = "Byt vy", nv = "Uppdatera", ov = "Klipp ut", iv = "Kopiera", sv = "Byt namn", av = "Ladda ner", rv = "post vald", lv = "poster valda", cv = "Avbryt", dv = "Rensa markering", uv = "Färdig", pv = "Om du ändrar filändelsen kan filen bli oanvändbar. Är du säker på att du vill ändra den?", fv = "Nej", hv = "Ja", mv = "Stäng", gv = "Filtypen är inte tillåten.", vv = "Filen finns redan.", $v = "Maximal uppladdningsstorlek är", yv = "Dra filer hit för uppladdning", wv = "Välj fil", xv = "Uppladdning misslyckades.", bv = "Laddar upp", Cv = "Uppladdad", Fv = "Ta bort", Sv = "Avbryt uppladdning", Nv = "Förhandsgranska", Ev = "Förhandsgranskning är inte tillgänglig för denna fil.", Pv = "Hem", kv = "Visa fler mappar", Tv = "Flytta till", Lv = "Den här mappen är tom.", zv = "Markera allt", Av = "Visa", Rv = "Rutnät", Ov = "Lista", Mv = "Öppna", Iv = "Inget här än", Uv = "Namn", Dv = "Ändrad", jv = "Storlek", Hv = 'Vill du verkligen radera "{{fileName}}"?', Vv = "Vill du verkligen radera dessa {{count}} poster?", Bv = "{{percent}}% klar", Wv = "Avbruten", _v = 'Ett filnamn får inte innehålla något av följande tecken: \\ / : * ? " < > |', Kv = 'Den här platsen innehåller redan en mapp med namnet "{{renameFile}}".', Yv = "Dölj navigationsfönster", qv = "Visa navigationsfönster", Gv = {
  newFolder: X2,
  upload: Q2,
  paste: ev,
  changeView: tv,
  refresh: nv,
  cut: ov,
  copy: iv,
  rename: sv,
  download: av,
  delete: "Radera",
  itemSelected: rv,
  itemsSelected: lv,
  cancel: cv,
  clearSelection: dv,
  completed: uv,
  fileNameChangeWarning: pv,
  no: fv,
  yes: hv,
  close: mv,
  fileTypeNotAllowed: gv,
  fileAlreadyExist: vv,
  maxUploadSize: $v,
  dragFileToUpload: yv,
  chooseFile: wv,
  uploadFail: xv,
  uploading: bv,
  uploaded: Cv,
  remove: Fv,
  abortUpload: Sv,
  preview: Nv,
  previewUnavailable: Ev,
  home: Pv,
  showMoreFolder: kv,
  moveTo: Tv,
  folderEmpty: Lv,
  selectAll: zv,
  view: Av,
  grid: Rv,
  list: Ov,
  open: Mv,
  nothingHereYet: Iv,
  name: Uv,
  modified: Dv,
  size: jv,
  deleteItemConfirm: Hv,
  deleteItemsConfirm: Vv,
  percentDone: Bv,
  canceled: Wv,
  invalidFileName: _v,
  folderExists: Kv,
  collapseNavigationPane: Yv,
  expandNavigationPane: qv
}, Jv = "Yeni Klasör", Zv = "Dosya Yükle", Xv = "Yapıştır", Qv = "Görünümü Değiştir", e$ = "Yenile", t$ = "Kes", n$ = "Kopyala", o$ = "Yeniden İsimlendir", i$ = "İndir", s$ = "öğe seçildi", a$ = "seçilen öğeler", r$ = "İptal", l$ = "Seçimi Temizle", c$ = "Tamamlandı", d$ = "Dosya adı aşağıdaki karakterlerden hiçbirini içeremez:", u$ = "Bir dosya adı uzantısını değiştirirseniz, dosya kullanılamaz hale gelebilir. Bunu değiştirmek istediğinizden emin misiniz?", p$ = "Hayır", f$ = "Evet", h$ = "Kapalı", m$ = "Dosya türüne izin verilmiyor.", g$ = "Dosya zaten mevcut.", v$ = "Maksimum yükleme boyutu", $$ = "Yüklemek için dosyaları sürükleyin", y$ = "Dosya Seç", w$ = "Yükleme hatası.", x$ = "Yükleniyor", b$ = "Yüklendi", C$ = "Kaldır", F$ = "Yüklemeyi İptal Et", S$ = "Görünüm", N$ = "Üzgünüz! Bu dosya için önizleme mevcut değil.", E$ = "Ana Sayfa", P$ = "Daha fazla klasör göster", k$ = "Burya Taşı", T$ = "Bu klasör boş.", L$ = "Hepsini Seç", z$ = "Görünüm", A$ = "Izgara", R$ = "Liste", O$ = "Aç", M$ = "Henüz hiçbir şey yok", I$ = "Ad", U$ = "Değiştirilme Tarihi", D$ = "Boyut", j$ = '"{{fileName}}" dosyasını silmek istediğinizden emin misiniz?', H$ = "{{count}} öğeyi silmek istediğinizden emin misiniz?", V$ = "%{{percent}} tamamlandı", B$ = "İptal edildi", W$ = 'Bir dosya adı aşağıdaki karakterlerden hiçbirini içeremez: \\ / : * ? " < > |', _$ = 'Bu konumda "{{renameFile}}" adında bir klasör zaten var.', K$ = "Gezinti Panelini Daralt", Y$ = "Gezinti Panelini Genişlet", q$ = {
  newFolder: Jv,
  upload: Zv,
  paste: Xv,
  changeView: Qv,
  refresh: e$,
  cut: t$,
  copy: n$,
  rename: o$,
  download: i$,
  delete: "Sil",
  itemSelected: s$,
  itemsSelected: a$,
  cancel: r$,
  clearSelection: l$,
  completed: c$,
  folderErrorMessage: d$,
  fileNameChangeWarning: u$,
  no: p$,
  yes: f$,
  close: h$,
  fileTypeNotAllowed: m$,
  fileAlreadyExist: g$,
  maxUploadSize: v$,
  dragFileToUpload: $$,
  chooseFile: y$,
  uploadFail: w$,
  uploading: x$,
  uploaded: b$,
  remove: C$,
  abortUpload: F$,
  preview: S$,
  previewUnavailable: N$,
  home: E$,
  showMoreFolder: P$,
  moveTo: k$,
  folderEmpty: T$,
  selectAll: L$,
  view: z$,
  grid: A$,
  list: R$,
  open: O$,
  nothingHereYet: M$,
  name: I$,
  modified: U$,
  size: D$,
  deleteItemConfirm: j$,
  deleteItemsConfirm: H$,
  percentDone: V$,
  canceled: B$,
  invalidFileName: W$,
  folderExists: _$,
  collapseNavigationPane: K$,
  expandNavigationPane: Y$
}, G$ = "Нова папка", J$ = "Завантажити", Z$ = "Вставити", X$ = "Змінити вигляд", Q$ = "Оновити", e4 = "Вирізати", t4 = "Копіювати", n4 = "Перейменувати", o4 = "Завантажити", i4 = "вибраний елемент", s4 = "вибрані елементи", a4 = "Скасувати", r4 = "Очистити вибір", l4 = "Завершено", c4 = "Якщо ви зміните розширення файлу, він може стати непридатним для використання. Ви впевнені, що хочете змінити його?", d4 = "Ні", u4 = "Так", p4 = "Закрити", f4 = "Тип файлу не дозволено.", h4 = "Файл уже існує.", m4 = "Максимальний розмір завантаження —", g4 = "Перетягніть файли для завантаження", v4 = "Вибрати файл", $4 = "Помилка завантаження.", y4 = "Завантаження", w4 = "Завантажено", x4 = "Видалити", b4 = "Скасувати завантаження", C4 = "Попередній перегляд", F4 = "На жаль! Попередній перегляд для цього файлу недоступний.", S4 = "Головна", N4 = "Показати більше папок", E4 = "Перемістити до", P4 = "Ця папка порожня.", k4 = "Вибрати все", T4 = "Вигляд", L4 = "Сітка", z4 = "Список", A4 = "Відкрити", R4 = "Тут ще нічого немає", O4 = "Назва", M4 = "Змінено", I4 = "Розмір", U4 = 'Ви впевнені, що хочете видалити "{{fileName}}"?', D4 = "Ви впевнені, що хочете видалити ці {{count}} елементи?", j4 = "{{percent}}% завершено", H4 = "Скасовано", V4 = `Ім'я файлу не може містити такі символи: \\ / : * ? " < > |`, B4 = 'У цьому місці вже існує папка з назвою "{{renameFile}}".', W4 = "Згорнути панель навігації", _4 = "Розгорнути панель навігації", K4 = {
  newFolder: G$,
  upload: J$,
  paste: Z$,
  changeView: X$,
  refresh: Q$,
  cut: e4,
  copy: t4,
  rename: n4,
  download: o4,
  delete: "Видалити",
  itemSelected: i4,
  itemsSelected: s4,
  cancel: a4,
  clearSelection: r4,
  completed: l4,
  fileNameChangeWarning: c4,
  no: d4,
  yes: u4,
  close: p4,
  fileTypeNotAllowed: f4,
  fileAlreadyExist: h4,
  maxUploadSize: m4,
  dragFileToUpload: g4,
  chooseFile: v4,
  uploadFail: $4,
  uploading: y4,
  uploaded: w4,
  remove: x4,
  abortUpload: b4,
  preview: C4,
  previewUnavailable: F4,
  home: S4,
  showMoreFolder: N4,
  moveTo: E4,
  folderEmpty: P4,
  selectAll: k4,
  view: T4,
  grid: L4,
  list: z4,
  open: A4,
  nothingHereYet: R4,
  name: O4,
  modified: M4,
  size: I4,
  deleteItemConfirm: U4,
  deleteItemsConfirm: D4,
  percentDone: j4,
  canceled: H4,
  invalidFileName: V4,
  folderExists: B4,
  collapseNavigationPane: W4,
  expandNavigationPane: _4
}, Y4 = "نیا فولڈر", q4 = "اپ لوڈ کریں", G4 = "چسپاں کریں", J4 = "دیکھنے کا طریقہ تبدیل کریں", Z4 = "تازہ کریں", X4 = "کٹ کریں", Q4 = "کاپی کریں", ey = "نام تبدیل کریں", ty = "ڈاؤن لوڈ کریں", ny = "آئٹم منتخب کیا گیا", oy = "{{count}} آئٹمز منتخب کی گئیں", iy = "منسوخ کریں", sy = "انتخاب صاف کریں", ay = "مکمل ہوا", ry = "اگر آپ فائل کا ایکسٹینشن تبدیل کرتے ہیں، تو فائل ناقابل استعمال ہو سکتی ہے۔ کیا آپ واقعی اسے تبدیل کرنا چاہتے ہیں؟", ly = "نہیں", cy = "ہاں", dy = "بند کریں", uy = "فائل کی قسم کی اجازت نہیں ہے۔", py = "فائل پہلے سے موجود ہے۔", fy = "زیادہ سے زیادہ اپ لوڈ سائز ہے", hy = "اپ لوڈ کرنے کے لیے فائلز گھسیٹیں", my = "فائل منتخب کریں", gy = "اپ لوڈ میں ناکامی۔", vy = "اپ لوڈ ہو رہا ہے", $y = "اپ لوڈ ہو گیا", yy = "ہٹائیں", wy = "اپ لوڈ منسوخ کریں", xy = "پریویو", by = "معذرت! اس فائل کا پریویو دستیاب نہیں ہے۔", Cy = "ہوم", Fy = "مزید فولڈرز دکھائیں", Sy = "منتقل کریں", Ny = "یہ فولڈر خالی ہے۔", Ey = "سبھی منتخب کریں", Py = "دیکھیں", ky = "گِریڈ", Ty = "فہرست", Ly = "کھولیں", zy = "ابھی کچھ بھی نہیں ہے", Ay = "نام", Ry = "ترمیم شدہ", Oy = "سائز", My = 'کیا آپ واقعی "{{fileName}}" کو حذف کرنا چاہتے ہیں؟', Iy = "کیا آپ واقعی ان {{count}} آئٹمز کو حذف کرنا چاہتے ہیں؟", Uy = "{{percent}}% مکمل ہوا", Dy = "منسوخ کیا گیا", jy = 'فائل کا نام درج ذیل میں سے کوئی بھی حرف نہیں رکھ سکتا: \\ / : * ? " < > |', Hy = 'اس منزل پر پہلے ہی "{{renameFile}}" کے نام کا فولڈر موجود ہے۔', Vy = "نیویگیشن پین کو بند کریں", By = "نیویگیشن پین کو کھولیں", Wy = {
  newFolder: Y4,
  upload: q4,
  paste: G4,
  changeView: J4,
  refresh: Z4,
  cut: X4,
  copy: Q4,
  rename: ey,
  download: ty,
  delete: "حذف کریں",
  itemSelected: ny,
  itemsSelected: oy,
  cancel: iy,
  clearSelection: sy,
  completed: ay,
  fileNameChangeWarning: ry,
  no: ly,
  yes: cy,
  close: dy,
  fileTypeNotAllowed: uy,
  fileAlreadyExist: py,
  maxUploadSize: fy,
  dragFileToUpload: hy,
  chooseFile: my,
  uploadFail: gy,
  uploading: vy,
  uploaded: $y,
  remove: yy,
  abortUpload: wy,
  preview: xy,
  previewUnavailable: by,
  home: Cy,
  showMoreFolder: Fy,
  moveTo: Sy,
  folderEmpty: Ny,
  selectAll: Ey,
  view: Py,
  grid: ky,
  list: Ty,
  open: Ly,
  nothingHereYet: zy,
  name: Ay,
  modified: Ry,
  size: Oy,
  deleteItemConfirm: My,
  deleteItemsConfirm: Iy,
  percentDone: Uy,
  canceled: Dy,
  invalidFileName: jy,
  folderExists: Hy,
  collapseNavigationPane: Vy,
  expandNavigationPane: By
}, _y = "Thư mục mới", Ky = "Tải lên", Yy = "Dán", qy = "Thay đổi chế độ xem", Gy = "Làm mới", Jy = "Cắt", Zy = "Sao chép", Xy = "Đổi tên", Qy = "Tải xuống", e6 = "mục đã chọn", t6 = "mục được chọn", n6 = "Hủy", o6 = "Xóa lựa chọn", i6 = "Hoàn thành", s6 = "Nếu bạn thay đổi phần mở rộng tên tệp, tệp có thể không sử dụng được. Bạn có chắc chắn muốn thay đổi không?", a6 = "Không", r6 = "Có", l6 = "Đóng", c6 = "Loại tệp không được phép.", d6 = "Tệp đã tồn tại.", u6 = "Kích thước tải lên tối đa là", p6 = "Kéo tệp vào để tải lên", f6 = "Chọn tệp", h6 = "Tải lên thất bại.", m6 = "Đang tải lên", g6 = "Đã tải lên", v6 = "Gỡ bỏ", $6 = "Hủy tải lên", y6 = "Xem trước", w6 = "Rất tiếc! Không thể xem trước tệp này.", x6 = "Trang chủ", b6 = "Hiển thị thêm thư mục", C6 = "Chuyển đến", F6 = "Thư mục này trống.", S6 = "Chọn tất cả", N6 = "Chế độ xem", E6 = "Lưới", P6 = "Danh sách", k6 = "Mở", T6 = "Chưa có gì ở đây", L6 = "Tên", z6 = "Đã chỉnh sửa", A6 = "Kích thước", R6 = 'Bạn có chắc muốn xóa "{{fileName}}"?', O6 = "Bạn có chắc muốn xóa {{count}} mục này không?", M6 = "Hoàn thành {{percent}}%", I6 = "Đã hủy", U6 = 'Tên tệp không được chứa các ký tự sau: \\ / : * ? " < > |', D6 = 'Đã có thư mục tên "{{renameFile}}" tại vị trí này.', j6 = "Thu gọn ngăn điều hướng", H6 = "Mở rộng ngăn điều hướng", V6 = {
  newFolder: _y,
  upload: Ky,
  paste: Yy,
  changeView: qy,
  refresh: Gy,
  cut: Jy,
  copy: Zy,
  rename: Xy,
  download: Qy,
  delete: "Xóa",
  itemSelected: e6,
  itemsSelected: t6,
  cancel: n6,
  clearSelection: o6,
  completed: i6,
  fileNameChangeWarning: s6,
  no: a6,
  yes: r6,
  close: l6,
  fileTypeNotAllowed: c6,
  fileAlreadyExist: d6,
  maxUploadSize: u6,
  dragFileToUpload: p6,
  chooseFile: f6,
  uploadFail: h6,
  uploading: m6,
  uploaded: g6,
  remove: v6,
  abortUpload: $6,
  preview: y6,
  previewUnavailable: w6,
  home: x6,
  showMoreFolder: b6,
  moveTo: C6,
  folderEmpty: F6,
  selectAll: S6,
  view: N6,
  grid: E6,
  list: P6,
  open: k6,
  nothingHereYet: T6,
  name: L6,
  modified: z6,
  size: A6,
  deleteItemConfirm: R6,
  deleteItemsConfirm: O6,
  percentDone: M6,
  canceled: I6,
  invalidFileName: U6,
  folderExists: D6,
  collapseNavigationPane: j6,
  expandNavigationPane: H6
}, B6 = "新建文件夹", W6 = "上传", _6 = "粘贴", K6 = "更改视图", Y6 = "刷新", q6 = "剪切", G6 = "复制", J6 = "重命名", Z6 = "下载", X6 = "已选择项", Q6 = "已选择{{count}}项", e8 = "取消", t8 = "清除选择", n8 = "完成", o8 = "如果更改文件扩展名，文件可能会变得无法使用。您确定要更改吗？", i8 = "否", s8 = "是", a8 = "关闭", r8 = "不允许的文件类型。", l8 = "文件已存在。", c8 = "最大上传大小为", d8 = "拖动文件上传", u8 = "选择文件", p8 = "上传失败。", f8 = "上传中", h8 = "已上传", m8 = "移除", g8 = "取消上传", v8 = "预览", $8 = "抱歉！该文件无法预览。", y8 = "首页", w8 = "显示更多文件夹", x8 = "移动到", b8 = "该文件夹为空。", C8 = "全选", F8 = "视图", S8 = "网格", N8 = "列表", E8 = "打开", P8 = "这里暂时没有内容", k8 = "名称", T8 = "修改时间", L8 = "大小", z8 = '您确定要删除 "{{fileName}}" 吗？', A8 = "您确定要删除这些 {{count}} 项吗？", R8 = "{{percent}}% 完成", O8 = "已取消", M8 = '文件名不能包含以下字符：\\ / : * ? " < > |', I8 = '目标文件夹中已存在名为 "{{renameFile}}" 的文件夹。', U8 = "折叠导航窗格", D8 = "展开导航窗格", j8 = {
  newFolder: B6,
  upload: W6,
  paste: _6,
  changeView: K6,
  refresh: Y6,
  cut: q6,
  copy: G6,
  rename: J6,
  download: Z6,
  delete: "删除",
  itemSelected: X6,
  itemsSelected: Q6,
  cancel: e8,
  clearSelection: t8,
  completed: n8,
  fileNameChangeWarning: o8,
  no: i8,
  yes: s8,
  close: a8,
  fileTypeNotAllowed: r8,
  fileAlreadyExist: l8,
  maxUploadSize: c8,
  dragFileToUpload: d8,
  chooseFile: u8,
  uploadFail: p8,
  uploading: f8,
  uploaded: h8,
  remove: m8,
  abortUpload: g8,
  preview: v8,
  previewUnavailable: $8,
  home: y8,
  showMoreFolder: w8,
  moveTo: x8,
  folderEmpty: b8,
  selectAll: C8,
  view: F8,
  grid: S8,
  list: N8,
  open: E8,
  nothingHereYet: P8,
  name: k8,
  modified: T8,
  size: L8,
  deleteItemConfirm: z8,
  deleteItemsConfirm: A8,
  percentDone: R8,
  canceled: O8,
  invalidFileName: M8,
  folderExists: I8,
  collapseNavigationPane: U8,
  expandNavigationPane: D8
}, H8 = "Nowy folder", V8 = "Prześlij", B8 = "Wklej", W8 = "Zmień widok", _8 = "Odśwież", K8 = "Wytnij", Y8 = "Kopiuj", q8 = "Zmień nazwę", G8 = "Pobierz", J8 = "element zaznaczony", Z8 = "elementy zaznaczone", X8 = "Anuluj", Q8 = "Wyczyść zaznaczenie", e3 = "Zakończono", t3 = "Jeśli zmienisz rozszerzenie pliku, może on stać się nieużyteczny. Czy na pewno chcesz to zrobić?", n3 = "Nie", o3 = "Tak", i3 = "Zamknij", s3 = "Typ pliku nie jest dozwolony.", a3 = "Plik już istnieje.", r3 = "Maksymalny rozmiar przesyłanego pliku to", l3 = "Przeciągnij pliki, aby je przesłać", c3 = "Wybierz plik", d3 = "Przesyłanie nie powiodło się.", u3 = "Przesyłanie", p3 = "Przesłano", f3 = "Usuń", h3 = "Przerwij przesyłanie", m3 = "Podgląd", g3 = "Przepraszamy! Podgląd tego pliku nie jest dostępny.", v3 = "Strona główna", $3 = "Pokaż więcej folderów", y3 = "Przenieś do", w3 = "Ten folder jest pusty.", x3 = "Zaznacz wszystko", b3 = "Widok", C3 = "Siatka", F3 = "Lista", S3 = "Otwórz", N3 = "Nic tu jeszcze nie ma", E3 = "Nazwa", P3 = "Zmodyfikowano", k3 = "Rozmiar", T3 = 'Czy na pewno chcesz usunąć "{{fileName}}"?', L3 = "Czy na pewno chcesz usunąć te {{count}} elementy?", z3 = "{{percent}}% ukończono", A3 = "Anulowano", R3 = 'Nazwa pliku nie może zawierać żadnego z następujących znaków: \\ / : * ? " < > |', O3 = 'To miejsce docelowe zawiera już folder o nazwie "{{renameFile}}".', M3 = "Zwiń panel nawigacyjny", I3 = "Rozwiń panel nawigacyjny", U3 = {
  newFolder: H8,
  upload: V8,
  paste: B8,
  changeView: W8,
  refresh: _8,
  cut: K8,
  copy: Y8,
  rename: q8,
  download: G8,
  delete: "Usuń",
  itemSelected: J8,
  itemsSelected: Z8,
  cancel: X8,
  clearSelection: Q8,
  completed: e3,
  fileNameChangeWarning: t3,
  no: n3,
  yes: o3,
  close: i3,
  fileTypeNotAllowed: s3,
  fileAlreadyExist: a3,
  maxUploadSize: r3,
  dragFileToUpload: l3,
  chooseFile: c3,
  uploadFail: d3,
  uploading: u3,
  uploaded: p3,
  remove: f3,
  abortUpload: h3,
  preview: m3,
  previewUnavailable: g3,
  home: v3,
  showMoreFolder: $3,
  moveTo: y3,
  folderEmpty: w3,
  selectAll: x3,
  view: b3,
  grid: C3,
  list: F3,
  open: S3,
  nothingHereYet: N3,
  name: E3,
  modified: P3,
  size: k3,
  deleteItemConfirm: T3,
  deleteItemsConfirm: L3,
  percentDone: z3,
  canceled: A3,
  invalidFileName: R3,
  folderExists: O3,
  collapseNavigationPane: M3,
  expandNavigationPane: I3
}, D3 = {
  "ar-SA": { translation: Pi },
  "da-DK": { translation: Ns },
  "de-DE": { translation: Fa },
  "en-US": { translation: br },
  "es-ES": { translation: wl },
  "fa-IR": { translation: $c },
  "fi-FI": { translation: gd },
  "fr-FR": { translation: hu },
  "he-IL": { translation: pp },
  "hi-IN": { translation: uf },
  "it-IT": { translation: ch },
  "ja-JP": { translation: rm },
  "ko-KR": { translation: s1 },
  "nb-NO": { translation: og },
  "pt-BR": { translation: t0 },
  "pt-PT": { translation: Q0 },
  "ru-RU": { translation: Z2 },
  "sv-SE": { translation: Gv },
  "tr-TR": { translation: q$ },
  "uk-UA": { translation: K4 },
  "ur-UR": { translation: Wy },
  "vi-VN": { translation: V6 },
  "zh-CN": { translation: j8 },
  "pl-PL": { translation: U3 }
}, j3 = (t = "en-US") => {
  ie.isInitialized ? ie.changeLanguage(t) : ie.init({
    resources: D3,
    lng: t,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: !1
    }
  });
}, Fn = Ne(() => (t) => t), H3 = ({ children: t, language: e }) => {
  const [n, o] = z(() => ie.t.bind(ie));
  return X(() => {
    j3(e), o(() => ie.t.bind(ie));
  }, [e]), /* @__PURE__ */ d(Fn.Provider, { value: n, children: t });
}, ce = () => Ee(Fn), V3 = ({ setShowToggleViewMenu: t, onLayoutChange: e }) => {
  const n = Ae(() => {
    t(!1);
  }), { activeLayout: o, setActiveLayout: i } = ye(), s = ce(), a = [
    {
      key: "grid",
      name: s("grid"),
      icon: /* @__PURE__ */ d(fn, { size: 18 })
    },
    {
      key: "list",
      name: s("list"),
      icon: /* @__PURE__ */ d(De, { size: 18 })
    }
  ], r = (l) => {
    i(l), e(l), t(!1);
  };
  return /* @__PURE__ */ d("div", { ref: n.ref, className: "toggle-view", role: "dropdown", children: /* @__PURE__ */ d("ul", { role: "menu", "aria-orientation": "vertical", children: a.map((l) => /* @__PURE__ */ k(
    "li",
    {
      role: "menuitem",
      onClick: () => r(l.key),
      onKeyDown: () => r(l.key),
      children: [
        /* @__PURE__ */ d("span", { children: l.key === o && /* @__PURE__ */ d(yn, { size: 13 }) }),
        /* @__PURE__ */ d("span", { children: l.icon }),
        /* @__PURE__ */ d("span", { children: l.name })
      ]
    },
    l.key
  )) }) });
}, Sn = Ne(), B3 = ({ children: t, filesData: e, onError: n }) => {
  const [o, i] = z([]);
  X(() => {
    i(e);
  }, [e]);
  const s = (a) => a.isDirectory ? o.filter((r) => r.path === `${a.path}/${r.name}`) : [];
  return /* @__PURE__ */ d(Sn.Provider, { value: { files: o, setFiles: i, getChildren: s, onError: n }, children: t });
}, qe = () => Ee(Sn), W3 = (t, e = "name", n = "asc") => {
  const o = t.filter((l) => l.isDirectory), i = t.filter((l) => !l.isDirectory), s = (l, c) => {
    let u = 0;
    switch (e) {
      case "name":
        u = l.name.localeCompare(c.name);
        break;
      case "size":
        const p = l.size || 0, m = c.size || 0;
        u = p - m;
        break;
      case "modified":
        const f = l.updatedAt ? new Date(l.updatedAt).getTime() : 0, h = c.updatedAt ? new Date(c.updatedAt).getTime() : 0;
        u = f - h;
        break;
      default:
        u = l.name.localeCompare(c.name);
    }
    return n === "asc" ? u : -u;
  }, a = [...o].sort(s), r = [...i].sort(s);
  return [...a, ...r];
}, Nn = Ne(), _3 = ({ children: t, initialPath: e, onFolderChange: n }) => {
  const { files: o } = qe(), i = oe(!1), [s, a] = z(""), [r, l] = z(null), [c, u] = z([]), [p, m] = z({ key: "name", direction: "asc" });
  return X(() => {
    Array.isArray(o) && o.length > 0 ? (u(() => {
      const f = o.filter((h) => h.path === `${s}/${h.name}`);
      return W3(f, p.key, p.direction);
    }), l(() => o.find((f) => f.path === s) ?? null)) : (u([]), l(null));
  }, [o, s, p]), X(() => {
    if (!i.current && Array.isArray(o) && o.length > 0) {
      const f = o.some((h) => h.isDirectory && h.path === e) ? e : "";
      a(f), i.current = !0;
    }
  }, [o]), /* @__PURE__ */ d(
    Nn.Provider,
    {
      value: {
        currentPath: s,
        setCurrentPath: a,
        currentFolder: r,
        setCurrentFolder: l,
        currentPathFiles: c,
        setCurrentPathFiles: u,
        sortConfig: p,
        setSortConfig: m,
        onFolderChange: n
      },
      children: t
    }
  );
}, he = () => Ee(Nn), xe = (t, e, ...n) => {
  try {
    if (typeof t == "function")
      t(...n);
    else
      throw new Error(
        `<FileManager /> Missing prop: Callback function "${e}" is required.`
      );
  } catch (o) {
    console.error(o.message);
  }
}, En = Ne(), K3 = ({ children: t, onDownload: e, onSelect: n, onSelectionChange: o }) => {
  const [i, s] = z([]);
  X(() => {
    n?.(i), o?.(i);
  }, [i]);
  const a = () => {
    xe(e, "onDownload", i);
  };
  return /* @__PURE__ */ d(En.Provider, { value: { selectedFiles: i, setSelectedFiles: s, handleDownload: a }, children: t });
}, ve = () => Ee(En), Pn = Ne(), Y3 = ({ children: t, onPaste: e, onCut: n, onCopy: o }) => {
  const [i, s] = z(null), { selectedFiles: a, setSelectedFiles: r } = ve(), l = (u) => {
    s({
      files: a,
      isMoving: u
    }), u ? n && n(a) : o && o(a);
  }, c = (u) => {
    if (u && !u.isDirectory) return;
    const p = i.files, m = i.isMoving ? "move" : "copy";
    xe(e, "onPaste", p, u, m), i.isMoving && s(null), r([]);
  };
  return /* @__PURE__ */ d(Pn.Provider, { value: { clipBoard: i, setClipBoard: s, handleCutCopy: l, handlePasting: c }, children: t });
}, Ge = () => Ee(Pn), kn = ({ onLayoutChange: t, onRefresh: e, triggerAction: n, permissions: o }) => {
  const [i, s] = z(!1), { currentFolder: a } = he(), { selectedFiles: r, setSelectedFiles: l, handleDownload: c } = ve(), { clipBoard: u, setClipBoard: p, handleCutCopy: m, handlePasting: f } = Ge(), { activeLayout: h } = ye(), w = ce(), T = [
    {
      icon: /* @__PURE__ */ d(pn, { size: 17, strokeWidth: 0.3 }),
      text: w("newFolder"),
      permission: o.create,
      onClick: () => n.show("createFolder")
    },
    {
      icon: /* @__PURE__ */ d(vn, { size: 18 }),
      text: w("upload"),
      permission: o.upload,
      onClick: () => n.show("uploadFile")
    },
    {
      icon: /* @__PURE__ */ d(dt, { size: 18 }),
      text: w("paste"),
      permission: !!u,
      onClick: L
    }
  ], N = [
    {
      icon: h === "grid" ? /* @__PURE__ */ d(fn, { size: 16 }) : /* @__PURE__ */ d(De, { size: 16 }),
      title: w("changeView"),
      onClick: () => s((F) => !F)
    },
    {
      icon: /* @__PURE__ */ d(mn, { size: 16 }),
      title: w("refresh"),
      onClick: () => {
        xe(e, "onRefresh"), p(null);
      }
    }
  ];
  function L() {
    f(a);
  }
  const S = () => {
    c(), l([]);
  };
  return r.length > 0 ? /* @__PURE__ */ d("div", { className: "toolbar file-selected", children: /* @__PURE__ */ k("div", { className: "file-action-container", children: [
    /* @__PURE__ */ k("div", { children: [
      o.move && /* @__PURE__ */ k("button", { className: "item-action file-action", onClick: () => m(!0), children: [
        /* @__PURE__ */ d(hn, { size: 18 }),
        /* @__PURE__ */ d("span", { children: w("cut") })
      ] }),
      o.copy && /* @__PURE__ */ k("button", { className: "item-action file-action", onClick: () => m(!1), children: [
        /* @__PURE__ */ d(un, { strokeWidth: 0.1, size: 17 }),
        /* @__PURE__ */ d("span", { children: w("copy") })
      ] }),
      u?.files?.length > 0 && /* @__PURE__ */ k(
        "button",
        {
          className: "item-action file-action",
          onClick: L,
          children: [
            /* @__PURE__ */ d(dt, { size: 18 }),
            /* @__PURE__ */ d("span", { children: w("paste") })
          ]
        }
      ),
      r.length === 1 && o.rename && /* @__PURE__ */ k(
        "button",
        {
          className: "item-action file-action",
          onClick: () => n.show("rename"),
          children: [
            /* @__PURE__ */ d($n, { size: 19 }),
            /* @__PURE__ */ d("span", { children: w("rename") })
          ]
        }
      ),
      o.download && /* @__PURE__ */ k("button", { className: "item-action file-action", onClick: S, children: [
        /* @__PURE__ */ d(ht, { size: 19 }),
        /* @__PURE__ */ d("span", { children: w("download") })
      ] }),
      o.delete && /* @__PURE__ */ k(
        "button",
        {
          className: "item-action file-action",
          onClick: () => n.show("delete"),
          children: [
            /* @__PURE__ */ d(gn, { size: 19 }),
            /* @__PURE__ */ d("span", { children: w("delete") })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ k(
      "button",
      {
        className: "item-action file-action",
        title: w("clearSelection"),
        onClick: () => l([]),
        children: [
          /* @__PURE__ */ k("span", { children: [
            r.length,
            " ",
            w(r.length > 1 ? "itemsSelected" : "itemSelected")
          ] }),
          /* @__PURE__ */ d(Qn, { size: 18 })
        ]
      }
    )
  ] }) }) : /* @__PURE__ */ d("div", { className: "toolbar", children: /* @__PURE__ */ k("div", { className: "fm-toolbar", children: [
    /* @__PURE__ */ d("div", { children: T.filter((F) => F.permission).map((F, g) => /* @__PURE__ */ k("button", { className: "item-action", onClick: F.onClick, children: [
      F.icon,
      /* @__PURE__ */ d("span", { children: F.text })
    ] }, g)) }),
    /* @__PURE__ */ k("div", { children: [
      N.map((F, g) => /* @__PURE__ */ k("div", { className: "toolbar-left-items", children: [
        /* @__PURE__ */ d("button", { className: "item-action icon-only", title: F.title, onClick: F.onClick, children: F.icon }),
        g !== N.length - 1 && /* @__PURE__ */ d("div", { className: "item-separator" })
      ] }, g)),
      i && /* @__PURE__ */ d(
        V3,
        {
          setShowToggleViewMenu: s,
          onLayoutChange: t
        }
      )
    ] })
  ] }) });
};
kn.displayName = "Toolbar";
var q3 = process.env.NODE_ENV === "production";
function G3(t, e) {
  if (!q3) {
    if (t)
      return;
    var n = "Warning: " + e;
    typeof console < "u" && console.warn(n);
    try {
      throw Error(n);
    } catch {
    }
  }
}
var J3 = class extends Error {
  constructor(t) {
    super(`react-collapsed: ${t}`);
  }
}, We = (...t) => G3(t[0], `[react-collapsed] -- ${t[1]}`);
function Tn(t) {
  const e = oe(t);
  return X(() => {
    e.current = t;
  }), ln((...n) => e.current?.(...n), []);
}
function Z3(t, e, n) {
  const [o, i] = z(e), s = oe(typeof t < "u"), a = s.current ? t : o, r = Tn(n), l = ln(
    (c) => {
      const p = typeof c == "function" ? c(a) : c;
      s.current || i(p), r?.(p);
    },
    [r, a]
  );
  return X(() => {
    We(
      !(s.current && t == null),
      "`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."
    ), We(
      !(!s.current && t != null),
      "`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."
    );
  }, [t]), [a, l];
}
var X3 = "(prefers-reduced-motion: reduce)";
function Q3() {
  const [t, e] = z(!1);
  return X(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const n = window.matchMedia(X3);
    e(n.matches);
    const o = (i) => {
      e(i.matches);
    };
    if (n.addEventListener)
      return n.addEventListener("change", o), () => {
        n.removeEventListener("change", o);
      };
    if (n.addListener)
      return n.addListener(o), () => {
        n.removeListener(o);
      };
  }, []), t;
}
var e5 = Le.useId || (() => {
});
function t5() {
  return e5() ?? "";
}
var n5 = typeof window < "u" ? Le.useLayoutEffect : Le.useEffect, tt = !1, o5 = 0, jt = () => ++o5;
function i5(t) {
  const e = t || (tt ? jt() : null), [n, o] = Le.useState(e);
  return n5(() => {
    n === null && o(jt());
  }, []), Le.useEffect(() => {
    tt === !1 && (tt = !0);
  }, []), n != null ? String(n) : void 0;
}
function s5(t) {
  const e = t5(), n = i5(t);
  return typeof t == "string" ? t : typeof e == "string" ? e : n;
}
function a5(t, e) {
  const n = performance.now(), o = {};
  function i() {
    o.id = requestAnimationFrame((s) => {
      s - n > e ? t() : i();
    });
  }
  return i(), o;
}
function Ht(t) {
  t.id && cancelAnimationFrame(t.id);
}
function Vt(t) {
  return t?.current ? t.current.scrollHeight : (We(
    !0,
    "Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"
  ), 0);
}
function r5(t) {
  if (!t || typeof t == "string")
    return 0;
  const e = t / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function l5(t, e) {
  if (t != null)
    if (typeof t == "function")
      t(e);
    else
      try {
        t.current = e;
      } catch {
        throw new J3(`Cannot assign value "${e}" to ref "${t}"`);
      }
}
function Bt(...t) {
  return t.every((e) => e == null) ? null : (e) => {
    t.forEach((n) => {
      l5(n, e);
    });
  };
}
function c5(t) {
  let e = (n) => {
  };
  e = (n) => {
    if (!n?.current)
      return;
    const { paddingTop: o, paddingBottom: i } = window.getComputedStyle(n.current);
    We(
      !(o && o !== "0px" || i && i !== "0px"),
      `Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`
    );
  }, X(() => {
    e(t);
  }, [t]);
}
var d5 = typeof window > "u" ? X : Bn;
function u5({
  duration: t,
  easing: e = "cubic-bezier(0.4, 0, 0.2, 1)",
  onTransitionStateChange: n = () => {
  },
  isExpanded: o,
  defaultExpanded: i = !1,
  hasDisabledAnimation: s,
  id: a,
  ...r
} = {}) {
  const l = Tn(n), c = s5(a ? `${a}` : void 0), [u, p] = Z3(
    o,
    i
  ), m = oe(u), [f, h] = z(!1), w = Q3(), T = s ?? w, N = oe(), L = oe(), S = oe(null), [F, g] = z(null);
  c5(S);
  const P = `${r.collapsedHeight || 0}px`;
  function x(C) {
    if (!S.current)
      return;
    const v = S.current;
    for (const $ in C) {
      const A = C[$];
      A ? v.style[$] = A : v.style.removeProperty($);
    }
  }
  return d5(() => {
    if (!S.current || u === m.current)
      return;
    m.current = u;
    function v(I) {
      return T ? 0 : t ?? r5(I);
    }
    const $ = (I) => `height ${v(I)}ms ${e}`, A = (I) => {
      function R() {
        u ? (x({
          height: "",
          overflow: "",
          transition: "",
          display: ""
        }), l("expandEnd")) : (x({ transition: "" }), l("collapseEnd")), h(!1);
      }
      L.current && Ht(L.current), L.current = a5(R, I);
    };
    return h(!0), u ? N.current = requestAnimationFrame(() => {
      l("expandStart"), x({
        display: "block",
        overflow: "hidden",
        height: P
      }), N.current = requestAnimationFrame(() => {
        l("expanding");
        const I = Vt(S);
        A(v(I)), S.current && (S.current.style.transition = $(I), S.current.style.height = `${I}px`);
      });
    }) : N.current = requestAnimationFrame(() => {
      l("collapseStart");
      const I = Vt(S);
      A(v(I)), x({
        transition: $(I),
        height: `${I}px`
      }), N.current = requestAnimationFrame(() => {
        l("collapsing"), x({
          height: P,
          overflow: "hidden"
        });
      });
    }), () => {
      N.current && cancelAnimationFrame(N.current), L.current && Ht(L.current);
    };
  }, [
    u,
    P,
    T,
    t,
    e,
    l
  ]), {
    isExpanded: u,
    setExpanded: p,
    getToggleProps(C) {
      const { disabled: v, onClick: $, refKey: A, ...I } = {
        refKey: "ref",
        onClick() {
        },
        disabled: !1,
        ...C
      }, R = F ? F.tagName === "BUTTON" : void 0, _ = C?.[A || "ref"], G = {
        id: `react-collapsed-toggle-${c}`,
        "aria-controls": `react-collapsed-panel-${c}`,
        "aria-expanded": u,
        onClick(se) {
          v || ($?.(se), p((le) => !le));
        },
        [A || "ref"]: Bt(_, g)
      }, Z = {
        type: "button",
        disabled: v ? !0 : void 0
      }, ne = {
        "aria-disabled": v ? !0 : void 0,
        role: "button",
        tabIndex: v ? -1 : 0
      };
      return R === !1 ? { ...G, ...ne, ...I } : R === !0 ? { ...G, ...Z, ...I } : {
        ...G,
        ...Z,
        ...ne,
        ...I
      };
    },
    getCollapseProps(C) {
      const { style: v, refKey: $ } = { refKey: "ref", style: {}, ...C }, A = C?.[$ || "ref"];
      return {
        id: `react-collapsed-panel-${c}`,
        "aria-hidden": !u,
        "aria-labelledby": `react-collapsed-toggle-${c}`,
        role: "region",
        ...C,
        [$ || "ref"]: Bt(S, A),
        style: {
          boxSizing: "border-box",
          ...!f && !u ? {
            // collapsed and not animating
            display: P === "0px" ? "none" : "block",
            height: P,
            overflow: "hidden"
          } : {},
          // additional styles passed, e.g. getCollapseProps({style: {}})
          ...v
        }
      };
    }
  };
}
const p5 = ({ open: t, children: e }) => {
  const [n, o] = z(t), { getCollapseProps: i } = u5({
    isExpanded: n,
    duration: 500
  });
  return X(() => {
    o(t);
  }, [t, o]), /* @__PURE__ */ d(fe, { children: /* @__PURE__ */ d("div", { ...i(), children: e }) });
};
function f5(t) {
  return V({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" }, child: [] }] })(t);
}
function h5(t) {
  return V({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z" }, child: [] }] })(t);
}
function Wt(t) {
  return V({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z" }, child: [] }] })(t);
}
function _t(t) {
  return V({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z" }, child: [] }] })(t);
}
const Ln = ({ folder: t, onFileOpen: e }) => {
  const [n, o] = z(!1), [i, s] = z(!1), { currentPath: a, setCurrentPath: r, onFolderChange: l } = he(), c = () => {
    s(!0), e(t), r(t.path), l?.(t.path);
  }, u = (p) => {
    p.stopPropagation(), o((m) => !m);
  };
  return X(() => {
    s(a === t.path);
    const p = a.split("/");
    p.pop(), p.join("/") === t.path && o(!0);
  }, [a]), t.subDirectories.length > 0 ? /* @__PURE__ */ k(fe, { children: [
    /* @__PURE__ */ k(
      "div",
      {
        className: `sb-folders-list-item ${i ? "active-list-item" : ""}`,
        onClick: c,
        children: [
          /* @__PURE__ */ d("span", { onClick: u, children: /* @__PURE__ */ d(
            eo,
            {
              size: 20,
              className: `folder-icon-default ${n ? "folder-rotate-down" : ""}`
            }
          ) }),
          /* @__PURE__ */ k("div", { className: "sb-folder-details", children: [
            n || i ? /* @__PURE__ */ d(Wt, { size: 20, className: "folder-open-icon" }) : /* @__PURE__ */ d(_t, { size: 17, className: "folder-close-icon" }),
            /* @__PURE__ */ d("span", { className: "sb-folder-name", title: t.name, children: t.name })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ d(p5, { open: n, children: /* @__PURE__ */ d("div", { className: "folder-collapsible", children: t.subDirectories.map((p, m) => /* @__PURE__ */ d(Ln, { folder: p, onFileOpen: e }, m)) }) })
  ] }) : /* @__PURE__ */ k(
    "div",
    {
      className: `sb-folders-list-item ${i ? "active-list-item" : ""}`,
      onClick: c,
      children: [
        /* @__PURE__ */ d("span", { className: "non-expanable" }),
        /* @__PURE__ */ k("div", { className: "sb-folder-details", children: [
          i ? /* @__PURE__ */ d(Wt, { size: 20, className: "folder-open-icon" }) : /* @__PURE__ */ d(_t, { size: 17, className: "folder-close-icon" }),
          /* @__PURE__ */ d("span", { className: "sb-folder-name", title: t.name, children: t.name })
        ] })
      ]
    }
  );
}, m5 = (t) => t?.split("/").slice(0, -1).join("/"), zn = ({ onFileOpen: t }) => {
  const [e, n] = z([]), { files: o } = qe(), i = ce(), s = (a, r) => r[a] ? r[a]?.map((l) => ({
    ...l,
    subDirectories: s(l.path, r)
  })) : [];
  return X(() => {
    if (Array.isArray(o)) {
      const a = o.filter((l) => l.isDirectory), r = Object.groupBy(a, ({ path: l }) => m5(l));
      n(() => s("", r));
    }
  }, [o]), /* @__PURE__ */ d("div", { className: "sb-folders-list", children: e?.length > 0 ? /* @__PURE__ */ d(fe, { children: e?.map((a, r) => /* @__PURE__ */ d(Ln, { folder: a, onFileOpen: t }, r)) }) : /* @__PURE__ */ d("div", { className: "empty-nav-pane", children: i("nothingHereYet") }) });
};
zn.displayName = "NavigationPane";
function g5(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Oe = { exports: {} }, Me = { exports: {} }, Q = {};
var Kt;
function v5() {
  if (Kt) return Q;
  Kt = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, i = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, a = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, r = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, f = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, h = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, w = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, T = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, N = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, L = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var P = g.$$typeof;
      switch (P) {
        case e:
          switch (g = g.type, g) {
            case l:
            case c:
            case o:
            case s:
            case i:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case r:
                case u:
                case h:
                case f:
                case a:
                  return g;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function F(g) {
    return S(g) === c;
  }
  return Q.AsyncMode = l, Q.ConcurrentMode = c, Q.ContextConsumer = r, Q.ContextProvider = a, Q.Element = e, Q.ForwardRef = u, Q.Fragment = o, Q.Lazy = h, Q.Memo = f, Q.Portal = n, Q.Profiler = s, Q.StrictMode = i, Q.Suspense = p, Q.isAsyncMode = function(g) {
    return F(g) || S(g) === l;
  }, Q.isConcurrentMode = F, Q.isContextConsumer = function(g) {
    return S(g) === r;
  }, Q.isContextProvider = function(g) {
    return S(g) === a;
  }, Q.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Q.isForwardRef = function(g) {
    return S(g) === u;
  }, Q.isFragment = function(g) {
    return S(g) === o;
  }, Q.isLazy = function(g) {
    return S(g) === h;
  }, Q.isMemo = function(g) {
    return S(g) === f;
  }, Q.isPortal = function(g) {
    return S(g) === n;
  }, Q.isProfiler = function(g) {
    return S(g) === s;
  }, Q.isStrictMode = function(g) {
    return S(g) === i;
  }, Q.isSuspense = function(g) {
    return S(g) === p;
  }, Q.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === o || g === c || g === s || g === i || g === p || g === m || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === f || g.$$typeof === a || g.$$typeof === r || g.$$typeof === u || g.$$typeof === T || g.$$typeof === N || g.$$typeof === L || g.$$typeof === w);
  }, Q.typeOf = S, Q;
}
var ee = {};
var Yt;
function $5() {
  return Yt || (Yt = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, i = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, a = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, r = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, u = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, f = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, h = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, w = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, T = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, N = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, L = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function S(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === o || E === c || E === s || E === i || E === p || E === m || typeof E == "object" && E !== null && (E.$$typeof === h || E.$$typeof === f || E.$$typeof === a || E.$$typeof === r || E.$$typeof === u || E.$$typeof === T || E.$$typeof === N || E.$$typeof === L || E.$$typeof === w);
    }
    function F(E) {
      if (typeof E == "object" && E !== null) {
        var pe = E.$$typeof;
        switch (pe) {
          case e:
            var q = E.type;
            switch (q) {
              case l:
              case c:
              case o:
              case s:
              case i:
              case p:
                return q;
              default:
                var ae = q && q.$$typeof;
                switch (ae) {
                  case r:
                  case u:
                  case h:
                  case f:
                  case a:
                    return ae;
                  default:
                    return pe;
                }
            }
          case n:
            return pe;
        }
      }
    }
    var g = l, P = c, x = r, C = a, v = e, $ = u, A = o, I = h, R = f, _ = n, G = s, Z = i, ne = p, se = !1;
    function le(E) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(E) || F(E) === l;
    }
    function y(E) {
      return F(E) === c;
    }
    function b(E) {
      return F(E) === r;
    }
    function D(E) {
      return F(E) === a;
    }
    function U(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function j(E) {
      return F(E) === u;
    }
    function K(E) {
      return F(E) === o;
    }
    function B(E) {
      return F(E) === h;
    }
    function W(E) {
      return F(E) === f;
    }
    function Y(E) {
      return F(E) === n;
    }
    function J(E) {
      return F(E) === s;
    }
    function M(E) {
      return F(E) === i;
    }
    function te(E) {
      return F(E) === p;
    }
    ee.AsyncMode = g, ee.ConcurrentMode = P, ee.ContextConsumer = x, ee.ContextProvider = C, ee.Element = v, ee.ForwardRef = $, ee.Fragment = A, ee.Lazy = I, ee.Memo = R, ee.Portal = _, ee.Profiler = G, ee.StrictMode = Z, ee.Suspense = ne, ee.isAsyncMode = le, ee.isConcurrentMode = y, ee.isContextConsumer = b, ee.isContextProvider = D, ee.isElement = U, ee.isForwardRef = j, ee.isFragment = K, ee.isLazy = B, ee.isMemo = W, ee.isPortal = Y, ee.isProfiler = J, ee.isStrictMode = M, ee.isSuspense = te, ee.isValidElementType = S, ee.typeOf = F;
  })()), ee;
}
var qt;
function An() {
  return qt || (qt = 1, process.env.NODE_ENV === "production" ? Me.exports = v5() : Me.exports = $5()), Me.exports;
}
var nt, Gt;
function y5() {
  if (Gt) return nt;
  Gt = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, r = 0; r < 10; r++)
        a["_" + String.fromCharCode(r)] = r;
      var l = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return nt = i() ? Object.assign : function(s, a) {
    for (var r, l = o(s), c, u = 1; u < arguments.length; u++) {
      r = Object(arguments[u]);
      for (var p in r)
        e.call(r, p) && (l[p] = r[p]);
      if (t) {
        c = t(r);
        for (var m = 0; m < c.length; m++)
          n.call(r, c[m]) && (l[c[m]] = r[c[m]]);
      }
    }
    return l;
  }, nt;
}
var ot, Jt;
function mt() {
  if (Jt) return ot;
  Jt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ot = t, ot;
}
var it, Zt;
function Rn() {
  return Zt || (Zt = 1, it = Function.call.bind(Object.prototype.hasOwnProperty)), it;
}
var st, Xt;
function w5() {
  if (Xt) return st;
  Xt = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = /* @__PURE__ */ mt(), n = {}, o = /* @__PURE__ */ Rn();
    t = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, r, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in s)
        if (o(s, u)) {
          var p;
          try {
            if (typeof s[u] != "function") {
              var m = Error(
                (l || "React class") + ": " + r + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = s[u](a, u, l, r, null, e);
          } catch (h) {
            p = h;
          }
          if (p && !(p instanceof Error) && t(
            (l || "React class") + ": type specification of " + r + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var f = c ? c() : "";
            t(
              "Failed " + r + " type: " + p.message + (f ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, st = i, st;
}
var at, Qt;
function x5() {
  if (Qt) return at;
  Qt = 1;
  var t = An(), e = y5(), n = /* @__PURE__ */ mt(), o = /* @__PURE__ */ Rn(), i = /* @__PURE__ */ w5(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(r) {
    var l = "Warning: " + r;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return at = function(r, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function p(y) {
      var b = y && (c && y[c] || y[u]);
      if (typeof b == "function")
        return b;
    }
    var m = "<<anonymous>>", f = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: L(),
      arrayOf: S,
      element: F(),
      elementType: g(),
      instanceOf: P,
      node: $(),
      objectOf: C,
      oneOf: x,
      oneOfType: v,
      shape: I,
      exact: R
    };
    function h(y, b) {
      return y === b ? y !== 0 || 1 / y === 1 / b : y !== y && b !== b;
    }
    function w(y, b) {
      this.message = y, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function T(y) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, D = 0;
      function U(K, B, W, Y, J, M, te) {
        if (Y = Y || m, M = M || W, te !== n) {
          if (l) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = Y + ":" + W;
            !b[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[pe] = !0, D++);
          }
        }
        return B[W] == null ? K ? B[W] === null ? new w("The " + J + " `" + M + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new w("The " + J + " `" + M + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : y(B, W, Y, J, M);
      }
      var j = U.bind(null, !1);
      return j.isRequired = U.bind(null, !0), j;
    }
    function N(y) {
      function b(D, U, j, K, B, W) {
        var Y = D[U], J = Z(Y);
        if (J !== y) {
          var M = ne(Y);
          return new w(
            "Invalid " + K + " `" + B + "` of type " + ("`" + M + "` supplied to `" + j + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return T(b);
    }
    function L() {
      return T(a);
    }
    function S(y) {
      function b(D, U, j, K, B) {
        if (typeof y != "function")
          return new w("Property `" + B + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var W = D[U];
        if (!Array.isArray(W)) {
          var Y = Z(W);
          return new w("Invalid " + K + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an array."));
        }
        for (var J = 0; J < W.length; J++) {
          var M = y(W, J, j, K, B + "[" + J + "]", n);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return T(b);
    }
    function F() {
      function y(b, D, U, j, K) {
        var B = b[D];
        if (!r(B)) {
          var W = Z(B);
          return new w("Invalid " + j + " `" + K + "` of type " + ("`" + W + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(y);
    }
    function g() {
      function y(b, D, U, j, K) {
        var B = b[D];
        if (!t.isValidElementType(B)) {
          var W = Z(B);
          return new w("Invalid " + j + " `" + K + "` of type " + ("`" + W + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(y);
    }
    function P(y) {
      function b(D, U, j, K, B) {
        if (!(D[U] instanceof y)) {
          var W = y.name || m, Y = le(D[U]);
          return new w("Invalid " + K + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return T(b);
    }
    function x(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(D, U, j, K, B) {
        for (var W = D[U], Y = 0; Y < y.length; Y++)
          if (h(W, y[Y]))
            return null;
        var J = JSON.stringify(y, function(te, E) {
          var pe = ne(E);
          return pe === "symbol" ? String(E) : E;
        });
        return new w("Invalid " + K + " `" + B + "` of value `" + String(W) + "` " + ("supplied to `" + j + "`, expected one of " + J + "."));
      }
      return T(b);
    }
    function C(y) {
      function b(D, U, j, K, B) {
        if (typeof y != "function")
          return new w("Property `" + B + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var W = D[U], Y = Z(W);
        if (Y !== "object")
          return new w("Invalid " + K + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an object."));
        for (var J in W)
          if (o(W, J)) {
            var M = y(W, J, j, K, B + "." + J, n);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return T(b);
    }
    function v(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < y.length; b++) {
        var D = y[b];
        if (typeof D != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(D) + " at index " + b + "."
          ), a;
      }
      function U(j, K, B, W, Y) {
        for (var J = [], M = 0; M < y.length; M++) {
          var te = y[M], E = te(j, K, B, W, Y, n);
          if (E == null)
            return null;
          E.data && o(E.data, "expectedType") && J.push(E.data.expectedType);
        }
        var pe = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new w("Invalid " + W + " `" + Y + "` supplied to " + ("`" + B + "`" + pe + "."));
      }
      return T(U);
    }
    function $() {
      function y(b, D, U, j, K) {
        return _(b[D]) ? null : new w("Invalid " + j + " `" + K + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return T(y);
    }
    function A(y, b, D, U, j) {
      return new w(
        (y || "React class") + ": " + b + " type `" + D + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function I(y) {
      function b(D, U, j, K, B) {
        var W = D[U], Y = Z(W);
        if (Y !== "object")
          return new w("Invalid " + K + " `" + B + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var J in y) {
          var M = y[J];
          if (typeof M != "function")
            return A(j, K, B, J, ne(M));
          var te = M(W, J, j, K, B + "." + J, n);
          if (te)
            return te;
        }
        return null;
      }
      return T(b);
    }
    function R(y) {
      function b(D, U, j, K, B) {
        var W = D[U], Y = Z(W);
        if (Y !== "object")
          return new w("Invalid " + K + " `" + B + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        var J = e({}, D[U], y);
        for (var M in J) {
          var te = y[M];
          if (o(y, M) && typeof te != "function")
            return A(j, K, B, M, ne(te));
          if (!te)
            return new w(
              "Invalid " + K + " `" + B + "` key `" + M + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(D[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var E = te(W, M, j, K, B + "." + M, n);
          if (E)
            return E;
        }
        return null;
      }
      return T(b);
    }
    function _(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(_);
          if (y === null || r(y))
            return !0;
          var b = p(y);
          if (b) {
            var D = b.call(y), U;
            if (b !== y.entries) {
              for (; !(U = D.next()).done; )
                if (!_(U.value))
                  return !1;
            } else
              for (; !(U = D.next()).done; ) {
                var j = U.value;
                if (j && !_(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(y, b) {
      return y === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function Z(y) {
      var b = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : G(b, y) ? "symbol" : b;
    }
    function ne(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var b = Z(y);
      if (b === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function se(y) {
      var b = ne(y);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function le(y) {
      return !y.constructor || !y.constructor.name ? m : y.constructor.name;
    }
    return f.checkPropTypes = i, f.resetWarningCache = i.resetWarningCache, f.PropTypes = f, f;
  }, at;
}
var rt, en;
function b5() {
  if (en) return rt;
  en = 1;
  var t = /* @__PURE__ */ mt();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, rt = function() {
    function o(a, r, l, c, u, p) {
      if (p !== t) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    o.isRequired = o;
    function i() {
      return o;
    }
    var s = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: i,
      element: o,
      elementType: o,
      instanceOf: i,
      node: o,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return s.PropTypes = s, s;
  }, rt;
}
var tn;
function C5() {
  if (tn) return Oe.exports;
  if (tn = 1, process.env.NODE_ENV !== "production") {
    var t = An(), e = !0;
    Oe.exports = /* @__PURE__ */ x5()(t.isElement, e);
  } else
    Oe.exports = /* @__PURE__ */ b5()();
  return Oe.exports;
}
var F5 = /* @__PURE__ */ C5();
const O = /* @__PURE__ */ g5(F5);
function S5(t) {
  return V({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-2.293 4.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.414 0z" }, child: [] }] })(t);
}
function N5(t) {
  return V({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }, child: [] }, { tag: "path", attr: { d: "M9 4v16" }, child: [] }, { tag: "path", attr: { d: "M14 10l2 2l-2 2" }, child: [] }] })(t);
}
const gt = ({ collapsibleNav: t, isNavigationPaneOpen: e, setNavigationPaneOpen: n }) => {
  const [o, i] = z([]), [s, a] = z([]), [r, l] = z([]), [c, u] = z(!1), { currentPath: p, setCurrentPath: m, onFolderChange: f } = he(), h = oe(null), w = oe([]), T = oe(null), N = Ae(() => {
    u(!1);
  }), L = ce(), S = oe(null);
  X(() => {
    i(() => {
      let C = "";
      return p?.split("/").map((v) => ({
        name: v || L("home"),
        path: v === "" ? v : C += `/${v}`
      }));
    }), a([]), l([]);
  }, [p, L]);
  const F = (C) => {
    m(C), f?.(C);
  }, g = () => {
    const C = h.current.clientWidth, v = getComputedStyle(h.current), $ = parseFloat(v.paddingLeft), A = t ? 2 : 0, R = t ? S.current?.clientWidth + 1 : 0, _ = s.length > 0 ? 1 : 0, G = parseFloat(v.gap) * (o.length + _ + A);
    return C - ($ + G + R);
  }, P = () => {
    const C = g(), v = w.current.reduce((A, I) => I ? A + I.clientWidth : A, 0), $ = T.current?.clientWidth || 0;
    return C - (v + $);
  }, x = () => h.current.scrollWidth > h.current.clientWidth;
  return X(() => {
    if (x()) {
      const C = o[1], v = w.current[1]?.clientWidth;
      l(($) => [...$, v]), a(($) => [...$, C]), i(($) => $.filter((A, I) => I !== 1));
    } else if (s.length > 0 && P() > r.at(-1)) {
      const C = [o[0], s.at(-1), ...o.slice(1)];
      i(C), a((v) => v.slice(0, -1)), l((v) => v.slice(0, -1));
    }
  }, [x]), /* @__PURE__ */ k("div", { className: "bread-crumb-container", children: [
    /* @__PURE__ */ k("div", { className: "breadcrumb", ref: h, children: [
      t && /* @__PURE__ */ k(fe, { children: [
        /* @__PURE__ */ d(
          "div",
          {
            ref: S,
            className: "nav-toggler",
            title: `${L(e ? "collapseNavigationPane" : "expandNavigationPane")}`,
            children: /* @__PURE__ */ d(
              "span",
              {
                className: "folder-name folder-name-btn",
                onClick: () => n((C) => !C),
                children: e ? /* @__PURE__ */ d(S5, {}) : /* @__PURE__ */ d(N5, {})
              }
            )
          }
        ),
        /* @__PURE__ */ d("div", { className: "divider" })
      ] }),
      o.map((C, v) => /* @__PURE__ */ k("div", { style: { display: "contents" }, children: [
        /* @__PURE__ */ k(
          "span",
          {
            className: "folder-name",
            onClick: () => F(C.path),
            ref: ($) => w.current[v] = $,
            children: [
              v === 0 ? /* @__PURE__ */ d(Xn, {}) : /* @__PURE__ */ d(oo, {}),
              C.name
            ]
          }
        ),
        s?.length > 0 && v === 0 && /* @__PURE__ */ d(
          "button",
          {
            className: "folder-name folder-name-btn",
            onClick: () => u(!0),
            ref: T,
            title: L("showMoreFolder"),
            children: /* @__PURE__ */ d(no, { size: 22, className: "hidden-folders" })
          }
        )
      ] }, v))
    ] }),
    c && /* @__PURE__ */ d("ul", { ref: N.ref, className: "hidden-folders-container", children: s.map((C, v) => /* @__PURE__ */ d(
      "li",
      {
        onClick: () => {
          F(C.path), u(!1);
        },
        children: C.name
      },
      v
    )) })
  ] });
};
gt.displayName = "BreadCrumb";
gt.propTypes = {
  isNavigationPaneOpen: O.bool.isRequired,
  setNavigationPaneOpen: O.func.isRequired
};
const _e = (t) => ({
  pdf: /* @__PURE__ */ d(lo, { size: t }),
  jpg: /* @__PURE__ */ d(Ze, { size: t }),
  jpeg: /* @__PURE__ */ d(Ze, { size: t }),
  png: /* @__PURE__ */ d(Ze, { size: t }),
  txt: /* @__PURE__ */ d(ro, { size: t }),
  doc: /* @__PURE__ */ d(St, { size: t }),
  docx: /* @__PURE__ */ d(St, { size: t }),
  mp4: /* @__PURE__ */ d(Ft, { size: t }),
  webm: /* @__PURE__ */ d(Ft, { size: t }),
  mp3: /* @__PURE__ */ d(xt, { size: t }),
  m4a: /* @__PURE__ */ d(xt, { size: t }),
  zip: /* @__PURE__ */ d(co, { size: t }),
  ppt: /* @__PURE__ */ d(Ct, { size: t }),
  pptx: /* @__PURE__ */ d(Ct, { size: t }),
  xls: /* @__PURE__ */ d(bt, { size: t }),
  xlsx: /* @__PURE__ */ d(bt, { size: t }),
  exe: /* @__PURE__ */ d(ao, { size: t }),
  html: /* @__PURE__ */ d(re, { size: t }),
  css: /* @__PURE__ */ d(re, { size: t }),
  js: /* @__PURE__ */ d(re, { size: t }),
  php: /* @__PURE__ */ d(re, { size: t }),
  py: /* @__PURE__ */ d(re, { size: t }),
  java: /* @__PURE__ */ d(re, { size: t }),
  cpp: /* @__PURE__ */ d(re, { size: t }),
  c: /* @__PURE__ */ d(re, { size: t }),
  ts: /* @__PURE__ */ d(re, { size: t }),
  jsx: /* @__PURE__ */ d(re, { size: t }),
  tsx: /* @__PURE__ */ d(re, { size: t }),
  json: /* @__PURE__ */ d(re, { size: t }),
  xml: /* @__PURE__ */ d(re, { size: t }),
  sql: /* @__PURE__ */ d(re, { size: t }),
  csv: /* @__PURE__ */ d(re, { size: t }),
  md: /* @__PURE__ */ d(re, { size: t }),
  svg: /* @__PURE__ */ d(re, { size: t })
}), On = (t, e, n) => {
  if (n.find((o) => o.name === t)) {
    const i = t;
    let s = 0;
    const a = new RegExp(`${i} \\(\\d+\\)`);
    n.forEach((c) => {
      const u = c.isDirectory ? c.name : c.name.split(".").slice(0, -1).join(".");
      if (a.test(u)) {
        const p = u.split(`${i} (`).pop().slice(0, -1), m = parseInt(p);
        !isNaN(m) && m > s && (s = m);
      }
    });
    const r = ` (${++s})`;
    return i + r + "";
  } else
    return t;
}, Mn = ({ nameInputRef: t, id: e, maxLength: n, value: o, onChange: i, onKeyDown: s, onClick: a, rows: r }) => /* @__PURE__ */ d(
  "textarea",
  {
    ref: t,
    id: e,
    className: "rename-file",
    maxLength: n,
    value: o,
    onChange: i,
    onKeyDown: s,
    onClick: a,
    rows: r
  }
), In = ({ message: t, xPlacement: e, yPlacement: n }) => /* @__PURE__ */ d("p", { className: `error-tooltip ${e} ${n}`, children: t }), E5 = 220, P5 = ({ filesViewRef: t, file: e, onCreateFolder: n, triggerAction: o }) => {
  const [i, s] = z(e.name), [a, r] = z(!1), [l, c] = z(""), [u, p] = z("right"), [m, f] = z("bottom"), h = Ae((x) => {
    x.preventDefault(), x.stopPropagation();
  }), { currentFolder: w, currentPathFiles: T, setCurrentPathFiles: N } = he(), { activeLayout: L } = ye(), S = ce(), F = (x) => {
    s(x.target.value), r(!1);
  }, g = (x) => {
    if (x.stopPropagation(), x.key === "Enter") {
      x.preventDefault(), P();
      return;
    }
    if (x.key === "Escape") {
      x.preventDefault(), o.close(), N((v) => v.filter(($) => $.key !== e.key));
      return;
    }
    /[\\/:*?"<>|]/.test(x.key) ? (x.preventDefault(), c(S("invalidFileName")), r(!0)) : (r(!1), c(""));
  };
  X(() => {
    if (a) {
      const x = setTimeout(() => {
        r(!1), c("");
      }, 7e3);
      return () => clearTimeout(x);
    }
  }, [a]);
  function P() {
    let x = i.trim();
    const C = T.filter(($) => !($.key && $.key === e.key));
    if (C.find(($) => $.name.toLowerCase() === x.toLowerCase())) {
      c(S("folderExists", { renameFile: x })), r(!0), h.ref.current?.focus(), h.ref.current?.select(), h.setIsClicked(!1);
      return;
    }
    x === "" && (x = On("New Folder", !0, C)), xe(n, "onCreateFolder", x, w), N(($) => $.filter((A) => A.key !== e.key)), o.close();
  }
  return X(() => {
    if (h.ref.current?.focus(), h.ref.current?.select(), h.ref?.current) {
      const $ = t.current.getBoundingClientRect(), A = h.ref.current, I = A.getBoundingClientRect();
      $.right - I.left > 313 ? p("right") : p("left"), $.bottom - (I.top + A.clientHeight) > 88 ? f("bottom") : f("top");
    }
  }, []), X(() => {
    h.isClicked && P();
  }, [h.isClicked]), /* @__PURE__ */ k(fe, { children: [
    /* @__PURE__ */ d(
      Mn,
      {
        id: "newFolder",
        nameInputRef: h.ref,
        maxLength: E5,
        value: i,
        onChange: F,
        onKeyDown: g,
        onClick: (x) => x.stopPropagation(),
        ...L === "list" && { rows: 1 }
      }
    ),
    a && /* @__PURE__ */ d(
      In,
      {
        message: l,
        xPlacement: u,
        yPlacement: m
      }
    )
  ] });
}, Se = ({ onClick: t, onKeyDown: e, type: n = "primary", padding: o = "0.4rem 0.8rem", children: i }) => /* @__PURE__ */ d(
  "button",
  {
    onClick: t,
    onKeyDown: e,
    className: `fm-button fm-button-${n}`,
    style: { padding: o },
    children: i
  }
);
function k5(t) {
  return V({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17z" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "m250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95z" }, child: [] }, { tag: "path", attr: { d: "M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20z" }, child: [] }] })(t);
}
const Un = ({
  children: t,
  show: e,
  setShow: n,
  heading: o,
  dialogWidth: i = "25%",
  contentClassName: s = "",
  closeButton: a = !0
}) => {
  const r = oe(null), l = ce(), c = (u) => {
    u.key === "Escape" && n(!1);
  };
  return X(() => {
    e ? r.current.showModal() : r.current.close();
  }, [e]), /* @__PURE__ */ k(
    "dialog",
    {
      ref: r,
      className: "fm-modal dialog",
      style: { width: i },
      onKeyDown: c,
      children: [
        /* @__PURE__ */ k("div", { className: "fm-modal-header", children: [
          /* @__PURE__ */ d("span", { className: "fm-modal-heading", children: o }),
          a && /* @__PURE__ */ d(
            to,
            {
              size: 18,
              onClick: () => n(!1),
              className: "close-icon",
              title: l("close")
            }
          )
        ] }),
        t
      ]
    }
  );
}, Fe = (t) => t.split(".").pop(), T5 = 220, L5 = ({ filesViewRef: t, file: e, onRename: n, triggerAction: o }) => {
  const [i, s] = z(e?.name), [a, r] = z(!1), [l, c] = z(!1), [u, p] = z(""), [m, f] = z("right"), [h, w] = z("bottom"), { currentPathFiles: T, setCurrentPathFiles: N } = he(), { activeLayout: L } = ye(), S = ce(), F = oe(null), g = Ae((v) => {
    F.current?.contains(v.target) || (v.preventDefault(), v.stopPropagation());
  }), P = (v) => {
    if (v.stopPropagation(), v.key === "Enter") {
      v.preventDefault(), g.setIsClicked(!0);
      return;
    }
    if (v.key === "Escape") {
      v.preventDefault(), N(
        (A) => A.map((I) => (I.key === e.key && (I.isEditing = !1), I))
      ), o.close();
      return;
    }
    /[\\/:*?"<>|]/.test(v.key) ? (v.preventDefault(), p(S("invalidFileName")), c(!0)) : c(!1);
  };
  X(() => {
    if (l) {
      const v = setTimeout(() => {
        c(!1), p("");
      }, 7e3);
      return () => clearTimeout(v);
    }
  }, [l]);
  function x(v) {
    if (i === "" || i === e.name) {
      N(
        ($) => $.map((A) => (A.key === e.key && (A.isEditing = !1), A))
      ), o.close();
      return;
    } else if (T.some(($) => $.name === i)) {
      c(!0), p(S("folderExists", { renameFile: i })), g.setIsClicked(!1);
      return;
    } else if (!e.isDirectory && !v) {
      const $ = Fe(e.name), A = Fe(i);
      if ($ !== A) {
        r(!0);
        return;
      }
    }
    c(!1), xe(n, "onRename", e, i), N(($) => $.filter((A) => A.key !== e.key)), o.close();
  }
  const C = () => {
    if (g.ref?.current?.focus(), e.isDirectory)
      g.ref?.current?.select();
    else {
      const v = Fe(e.name), $ = e.name.length - v.length - 1;
      g.ref?.current?.setSelectionRange(0, $);
    }
  };
  return X(() => {
    if (C(), g.ref?.current) {
      const I = t.current.getBoundingClientRect(), R = g.ref.current, _ = R.getBoundingClientRect();
      I.right - _.left > 313 ? f("right") : f("left"), I.bottom - (_.top + R.clientHeight) > 88 ? w("bottom") : w("top");
    }
  }, []), X(() => {
    g.isClicked && x(!1), C();
  }, [g.isClicked]), /* @__PURE__ */ k(fe, { children: [
    /* @__PURE__ */ d(
      Mn,
      {
        id: e.name,
        nameInputRef: g.ref,
        maxLength: T5,
        value: i,
        onChange: (v) => {
          s(v.target.value), c(!1);
        },
        onKeyDown: P,
        onClick: (v) => v.stopPropagation(),
        ...L === "list" && { rows: 1 }
      }
    ),
    l && /* @__PURE__ */ d(
      In,
      {
        message: u,
        xPlacement: m,
        yPlacement: h
      }
    ),
    /* @__PURE__ */ d(
      Un,
      {
        heading: S("rename"),
        show: a,
        setShow: r,
        dialogWidth: "25vw",
        closeButton: !1,
        children: /* @__PURE__ */ k("div", { className: "fm-rename-folder-container", ref: F, children: [
          /* @__PURE__ */ d("div", { className: "fm-rename-folder-input", children: /* @__PURE__ */ k("div", { className: "fm-rename-warning", children: [
            /* @__PURE__ */ d(k5, { size: 70, color: "orange" }),
            /* @__PURE__ */ d("div", { children: S("fileNameChangeWarning") })
          ] }) }),
          /* @__PURE__ */ k("div", { className: "fm-rename-folder-action", children: [
            /* @__PURE__ */ d(
              Se,
              {
                type: "secondary",
                onClick: () => {
                  N(
                    (v) => v.map(($) => ($.key === e.key && ($.isEditing = !1), $))
                  ), r(!1), o.close();
                },
                children: S("no")
              }
            ),
            /* @__PURE__ */ d(
              Se,
              {
                type: "danger",
                onClick: () => {
                  r(!1), x(!0);
                },
                children: S("yes")
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, Je = (t, e = 2) => {
  if (isNaN(t)) return "";
  const n = t / 1024, o = n / 1024, i = o / 1024;
  if (n < 1024)
    return `${n.toFixed(e)} KB`;
  if (o < 1024)
    return `${o.toFixed(e)} MB`;
  if (o >= 1024)
    return `${i.toFixed(e)} GB`;
}, Dn = ({ name: t, id: e, checked: n, onClick: o, onChange: i, className: s = "", title: a, disabled: r = !1 }) => /* @__PURE__ */ d(
  "input",
  {
    className: `fm-checkbox ${s}`,
    type: "checkbox",
    name: t,
    id: e,
    checked: n,
    onClick: o,
    onChange: i,
    title: a,
    disabled: r
  }
), lt = 50, z5 = ({
  index: t,
  file: e,
  onCreateFolder: n,
  onRename: o,
  enableFilePreview: i,
  onFileOpen: s,
  filesViewRef: a,
  selectedFileIndexes: r,
  triggerAction: l,
  handleContextMenu: c,
  setLastSelectedFile: u,
  draggable: p,
  formatDate: m
}) => {
  const [f, h] = z(!1), [w, T] = z(0), [N, L] = z("hidden"), [S, F] = z(""), [g, P] = z(null), { activeLayout: x } = ye(), C = x === "grid" ? 48 : 20, v = _e(C), { setCurrentPath: $, currentPathFiles: A, onFolderChange: I } = he(), { setSelectedFiles: R } = ve(), { clipBoard: _, handleCutCopy: G, setClipBoard: Z, handlePasting: ne } = Ge(), se = oe(null), le = _e(lt), y = _?.isMoving && _.files.find((q) => q.name === e.name && q.path === e.path), b = () => {
    s(e), e.isDirectory ? ($(e.path), I?.(e.path), R([])) : i && l.show("previewFile");
  }, D = (q, ae) => {
    if (r.length > 0 && q) {
      let ge = !1, we = r[0], be = t;
      if (we >= be) {
        const Vn = we;
        we = be, be = Vn, ge = !0;
      }
      const vt = A.slice(we, be + 1);
      R(ge ? vt.reverse() : vt);
    } else r.length > 0 && ae ? R((ge) => {
      const we = ge.filter((be) => be.path !== e.path);
      return ge.length === we.length ? [...ge, e] : we;
    }) : R([e]);
  }, U = (q) => {
    if (q.stopPropagation(), e.isEditing) return;
    D(q.shiftKey, q.ctrlKey);
    const ae = (/* @__PURE__ */ new Date()).getTime();
    if (ae - w < 300) {
      b();
      return;
    }
    T(ae);
  }, j = (q) => {
    q.key === "Enter" && (q.stopPropagation(), R([e]), b());
  }, K = (q) => {
    q.stopPropagation(), q.preventDefault(), !e.isEditing && (f || R([e]), u(e), c(q, !0));
  }, B = () => {
    L("visible");
  }, W = () => {
    !f && L("hidden");
  }, Y = (q) => {
    q.target.checked ? R((ae) => [...ae, e]) : R((ae) => ae.filter((ge) => ge.name !== e.name && ge.path !== e.path)), h(q.target.checked);
  }, J = (q) => {
    q.dataTransfer.setDragImage(se.current, 30, 50), q.dataTransfer.effectAllowed = "copy", G(!0);
  }, M = () => Z(null), te = (q) => {
    q.preventDefault(), f || !e.isDirectory ? q.dataTransfer.dropEffect = "none" : (P({ x: q.clientX, y: q.clientY + 12 }), q.dataTransfer.dropEffect = "copy", F("file-drop-zone"));
  }, E = (q) => {
    q.currentTarget.contains(q.relatedTarget) || (F((ae) => ae && ""), P(null));
  }, pe = (q) => {
    q.preventDefault(), !(f || !e.isDirectory) && (ne(e), F((ae) => ae && ""), P(null));
  };
  return X(() => {
    h(r.includes(t)), L(r.includes(t) ? "visible" : "hidden");
  }, [r]), /* @__PURE__ */ k(
    "div",
    {
      className: `file-item-container ${S} ${f || e.isEditing ? "file-selected" : ""} ${y ? "file-moving" : ""}`,
      tabIndex: 0,
      title: e.name,
      onClick: U,
      onKeyDown: j,
      onContextMenu: K,
      onMouseOver: B,
      onMouseLeave: W,
      draggable: f && p,
      onDragStart: J,
      onDragEnd: M,
      onDragEnter: te,
      onDragOver: te,
      onDragLeave: E,
      onDrop: pe,
      children: [
        /* @__PURE__ */ k("div", { className: "file-item", children: [
          !e.isEditing && /* @__PURE__ */ d(
            Dn,
            {
              name: e.name,
              id: e.name,
              checked: f,
              className: `selection-checkbox ${N}`,
              onChange: Y,
              onClick: (q) => q.stopPropagation()
            }
          ),
          e.isDirectory ? /* @__PURE__ */ d(Nt, { size: C }) : /* @__PURE__ */ d(fe, { children: v[e.name?.split(".").pop()?.toLowerCase()] ?? /* @__PURE__ */ d(je, { size: C }) }),
          e.isEditing ? /* @__PURE__ */ d("div", { className: `rename-file-container ${x}`, children: l.actionType === "createFolder" ? /* @__PURE__ */ d(
            P5,
            {
              filesViewRef: a,
              file: e,
              onCreateFolder: n,
              triggerAction: l
            }
          ) : /* @__PURE__ */ d(
            L5,
            {
              filesViewRef: a,
              file: e,
              onRename: o,
              triggerAction: l
            }
          ) }) : /* @__PURE__ */ d("span", { className: "text-truncate file-name", children: e.name })
        ] }),
        x === "list" && /* @__PURE__ */ k(fe, { children: [
          /* @__PURE__ */ d("div", { className: "modified-date", children: m(e.updatedAt) }),
          /* @__PURE__ */ d("div", { className: "size", children: e?.size > 0 ? Je(e?.size) : "" })
        ] }),
        g && /* @__PURE__ */ k(
          "div",
          {
            style: {
              top: `${g.y}px`,
              left: `${g.x}px`
            },
            className: "drag-move-tooltip",
            children: [
              "Move to ",
              /* @__PURE__ */ d("span", { className: "drop-zone-file-name", children: e.name })
            ]
          }
        ),
        /* @__PURE__ */ d("div", { ref: se, className: "drag-icon", children: e.isDirectory ? /* @__PURE__ */ d(Nt, { size: lt }) : /* @__PURE__ */ d(fe, { children: le[e.name?.split(".").pop()?.toLowerCase()] ?? /* @__PURE__ */ d(je, { size: lt }) }) })
      ]
    }
  );
}, A5 = ({ subMenuRef: t, list: e, position: n = "right" }) => /* @__PURE__ */ d("ul", { ref: t, className: `sub-menu ${n}`, children: e?.map((o) => /* @__PURE__ */ k("li", { onClick: o.onClick, children: [
  /* @__PURE__ */ d("span", { className: "item-selected", children: o.selected && /* @__PURE__ */ d(yn, { size: 13 }) }),
  o.icon,
  /* @__PURE__ */ d("span", { children: o.title })
] }, o.title)) }), R5 = ({ filesViewRef: t, contextMenuRef: e, menuItems: n, visible: o, clickPosition: i }) => {
  const [s, a] = z(0), [r, l] = z(0), [c, u] = z(null), [p, m] = z("right"), f = oe(null), h = () => {
    const { clickX: N, clickY: L } = i, S = t.current, F = S.getBoundingClientRect(), g = S.offsetWidth - S.clientWidth, P = e.current.getBoundingClientRect(), x = P.width, C = P.height, v = N - F.left, $ = F.width - (v + g) > x, A = !$, I = L - F.top, R = F.height - I > C, _ = !R;
    $ ? (a(`${v}px`), m("right")) : A && (a(`${v - x}px`), m("left")), R ? l(`${I + S.scrollTop}px`) : _ && l(`${I + S.scrollTop - C}px`);
  }, w = (N) => {
    N.preventDefault(), N.stopPropagation();
  }, T = (N) => {
    u(N);
  };
  if (X(() => {
    o && e.current ? h() : (l(0), a(0), u(null));
  }, [o]), o)
    return /* @__PURE__ */ d(
      "div",
      {
        ref: e,
        onContextMenu: w,
        onClick: (N) => N.stopPropagation(),
        className: `fm-context-menu ${r ? "visible" : "hidden"}`,
        style: {
          top: r,
          left: s
        },
        children: /* @__PURE__ */ d("div", { className: "file-context-menu-list", children: /* @__PURE__ */ d("ul", { children: n.filter((N) => !N.hidden).map((N, L) => {
          const S = N.hasOwnProperty("children"), F = c === L && S;
          return /* @__PURE__ */ k("div", { children: [
            /* @__PURE__ */ k(
              "li",
              {
                onClick: N.onClick,
                className: `${N.className ?? ""} ${F ? "active" : ""}`,
                onMouseOver: () => T(L),
                children: [
                  N.icon,
                  /* @__PURE__ */ d("span", { children: N.title }),
                  S && /* @__PURE__ */ k(fe, { children: [
                    /* @__PURE__ */ d(so, { size: 14, className: "list-expand-icon" }),
                    F && /* @__PURE__ */ d(
                      A5,
                      {
                        subMenuRef: f,
                        list: N.children,
                        position: p
                      }
                    )
                  ] })
                ]
              }
            ),
            N.divider && L !== n.filter((g) => !g.hidden).length - 1 && /* @__PURE__ */ d("div", { className: "divider" })
          ] }, N.title);
        }) }) })
      }
    );
};
function O5(t) {
  return V({ attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z" }, child: [] }] })(t);
}
const M5 = (t, e, n, o, i) => {
  const [s, a] = z([]), [r, l] = z(!1), [c, u] = z(!1), [p, m] = z({ clickX: 0, clickY: 0 }), [f, h] = z(null), { clipBoard: w, setClipBoard: T, handleCutCopy: N, handlePasting: L } = Ge(), { selectedFiles: S, setSelectedFiles: F, handleDownload: g } = ve(), { currentPath: P, setCurrentPath: x, currentPathFiles: C, setCurrentPathFiles: v, onFolderChange: $ } = he(), { activeLayout: A, setActiveLayout: I } = ye(), R = ce(), _ = () => {
    i(f), f.isDirectory ? (x(f.path), $?.(f.path), a([]), F([])) : e && n.show("previewFile"), l(!1);
  }, G = (M) => {
    N(M), l(!1);
  }, Z = () => {
    L(f), l(!1);
  }, ne = () => {
    l(!1), n.show("rename");
  }, se = () => {
    g(), l(!1);
  }, le = () => {
    l(!1), n.show("delete");
  }, y = () => {
    l(!1), xe(t, "onRefresh"), T(null);
  }, b = () => {
    n.show("createFolder"), l(!1);
  }, D = () => {
    l(!1), n.show("uploadFile");
  }, U = () => {
    F(C), l(!1);
  }, j = [
    {
      title: R("view"),
      icon: A === "grid" ? /* @__PURE__ */ d(wt, { size: 18 }) : /* @__PURE__ */ d(De, { size: 18 }),
      onClick: () => {
      },
      children: [
        {
          title: R("grid"),
          icon: /* @__PURE__ */ d(wt, { size: 18 }),
          selected: A === "grid",
          onClick: () => {
            I("grid"), l(!1);
          }
        },
        {
          title: R("list"),
          icon: /* @__PURE__ */ d(De, { size: 18 }),
          selected: A === "list",
          onClick: () => {
            I("list"), l(!1);
          }
        }
      ]
    },
    {
      title: R("refresh"),
      icon: /* @__PURE__ */ d(mn, { size: 18 }),
      onClick: y,
      divider: !0
    },
    {
      title: R("newFolder"),
      icon: /* @__PURE__ */ d(pn, { size: 18 }),
      onClick: b,
      hidden: !o.create,
      divider: !o.upload
    },
    {
      title: R("upload"),
      icon: /* @__PURE__ */ d(vn, { size: 18 }),
      onClick: D,
      divider: !0,
      hidden: !o.upload
    },
    {
      title: R("selectAll"),
      icon: /* @__PURE__ */ d(io, { size: 18 }),
      onClick: U
    }
  ], K = [
    {
      title: R("open"),
      icon: f?.isDirectory ? /* @__PURE__ */ d(O5, { size: 20 }) : /* @__PURE__ */ d(je, { size: 16 }),
      onClick: _,
      divider: !0
    },
    {
      title: R("cut"),
      icon: /* @__PURE__ */ d(hn, { size: 19 }),
      onClick: () => G(!0),
      divider: !f?.isDirectory && !o.copy,
      hidden: !o.move
    },
    {
      title: R("copy"),
      icon: /* @__PURE__ */ d(un, { strokeWidth: 0.1, size: 17 }),
      onClick: () => G(!1),
      divider: !f?.isDirectory,
      hidden: !o.copy
    },
    {
      title: R("paste"),
      icon: /* @__PURE__ */ d(dt, { size: 18 }),
      onClick: Z,
      className: `${w ? "" : "disable-paste"}`,
      hidden: !f?.isDirectory || !o.move && !o.copy,
      divider: !0
    },
    {
      title: R("rename"),
      icon: /* @__PURE__ */ d($n, { size: 19 }),
      onClick: ne,
      hidden: S.length > 1 || !o.rename
    },
    {
      title: R("download"),
      icon: /* @__PURE__ */ d(ht, { size: 18 }),
      onClick: se,
      hidden: !o.download
    },
    {
      title: R("delete"),
      icon: /* @__PURE__ */ d(gn, { size: 19 }),
      onClick: le,
      hidden: !o.delete
    }
  ], B = () => {
    v((M) => [
      ...M,
      {
        name: On("New Folder", !0, M),
        isDirectory: !0,
        path: P,
        isEditing: !0,
        key: (/* @__PURE__ */ new Date()).valueOf()
      }
    ]);
  }, W = () => {
    v((M) => {
      const te = s.at(-1);
      return M[te] ? M.map((E, pe) => pe === te ? {
        ...E,
        isEditing: !0
      } : E) : (n.close(), M);
    }), a([]), F([]);
  }, Y = () => {
    a([]), F((M) => M.length > 0 ? [] : M);
  }, J = (M, te = !1) => {
    M.preventDefault(), m({ clickX: M.clientX, clickY: M.clientY }), u(te), !te && Y(), l(!0);
  };
  return X(() => {
    if (n.isActive)
      switch (n.actionType) {
        case "createFolder":
          B();
          break;
        case "rename":
          W();
          break;
      }
  }, [n.isActive]), X(() => {
    a([]), F([]);
  }, [P]), X(() => {
    S.length > 0 ? a(() => S.map((M) => C.findIndex((te) => te.path === M.path))) : a([]);
  }, [S, C]), {
    emptySelecCtxItems: j,
    selecCtxItems: K,
    handleContextMenu: J,
    unselectFiles: Y,
    visible: r,
    setVisible: l,
    setLastSelectedFile: h,
    selectedFileIndexes: s,
    clickPosition: p,
    isSelectionCtx: c
  };
}, I5 = ({ unselectFiles: t, onSort: e, sortConfig: n }) => {
  const o = ce(), [i, s] = z(!1), { selectedFiles: a, setSelectedFiles: r } = ve(), { currentPathFiles: l } = he(), c = Ke(() => l.length > 0 && a.length === l.length, [a, l]), u = (m) => {
    m.target.checked ? (r(l), s(!0)) : t();
  }, p = (m) => {
    e && e(m);
  };
  return /* @__PURE__ */ k(
    "div",
    {
      className: "files-header",
      onMouseOver: () => s(!0),
      onMouseLeave: () => s(!1),
      children: [
        /* @__PURE__ */ d("div", { className: "file-select-all", children: (i || c) && /* @__PURE__ */ d(
          Dn,
          {
            id: "selectAll",
            checked: c,
            onChange: u,
            title: "Select all",
            disabled: l.length === 0
          }
        ) }),
        /* @__PURE__ */ k(
          "div",
          {
            className: `file-name ${n?.key === "name" ? "active" : ""}`,
            onClick: () => p("name"),
            children: [
              o("name"),
              n?.key === "name" && /* @__PURE__ */ d("span", { className: "sort-indicator", children: n.direction === "asc" ? " ▲" : " ▼" })
            ]
          }
        ),
        /* @__PURE__ */ k(
          "div",
          {
            className: `file-date ${n?.key === "modified" ? "active" : ""}`,
            onClick: () => p("modified"),
            children: [
              o("modified"),
              n?.key === "modified" && /* @__PURE__ */ d("span", { className: "sort-indicator", children: n.direction === "asc" ? " ▲" : " ▼" })
            ]
          }
        ),
        /* @__PURE__ */ k(
          "div",
          {
            className: `file-size ${n?.key === "size" ? "active" : ""}`,
            onClick: () => p("size"),
            children: [
              o("size"),
              n?.key === "size" && /* @__PURE__ */ d("span", { className: "sort-indicator", children: n.direction === "asc" ? " ▲" : " ▼" })
            ]
          }
        )
      ]
    }
  );
}, jn = ({
  onCreateFolder: t,
  onRename: e,
  onFileOpen: n,
  onRefresh: o,
  enableFilePreview: i,
  triggerAction: s,
  permissions: a,
  formatDate: r
}) => {
  const { currentPathFiles: l, sortConfig: c, setSortConfig: u } = he(), p = oe(null), { activeLayout: m } = ye(), f = ce(), {
    emptySelecCtxItems: h,
    selecCtxItems: w,
    handleContextMenu: T,
    unselectFiles: N,
    visible: L,
    setVisible: S,
    setLastSelectedFile: F,
    selectedFileIndexes: g,
    clickPosition: P,
    isSelectionCtx: x
  } = M5(o, i, s, a, n), C = Ae(() => S(!1)), v = ($) => {
    let A = "asc";
    c.key === $ && c.direction === "asc" && (A = "desc"), u({ key: $, direction: A });
  };
  return /* @__PURE__ */ k(
    "div",
    {
      ref: p,
      className: `files ${m}`,
      onContextMenu: T,
      onClick: N,
      children: [
        m === "list" && /* @__PURE__ */ d(I5, { unselectFiles: N, onSort: v, sortConfig: c }),
        l?.length > 0 ? /* @__PURE__ */ d(fe, { children: l.map(($, A) => /* @__PURE__ */ d(
          z5,
          {
            index: A,
            file: $,
            onCreateFolder: t,
            onRename: e,
            onFileOpen: n,
            enableFilePreview: i,
            triggerAction: s,
            filesViewRef: p,
            selectedFileIndexes: g,
            handleContextMenu: T,
            setVisible: S,
            setLastSelectedFile: F,
            draggable: a.move,
            formatDate: r
          },
          A
        )) }) : /* @__PURE__ */ d("div", { className: "empty-folder", children: f("folderEmpty") }),
        /* @__PURE__ */ d(
          R5,
          {
            filesViewRef: p,
            contextMenuRef: C.ref,
            menuItems: x ? w : h,
            visible: L,
            setVisible: S,
            clickPosition: P
          }
        )
      ]
    }
  );
};
jn.displayName = "FileList";
const U5 = ({ triggerAction: t, onDelete: e }) => {
  const [n, o] = z(""), { selectedFiles: i, setSelectedFiles: s } = ve(), a = ce();
  X(() => {
    o(() => {
      if (i.length === 1)
        return a("deleteItemConfirm", { fileName: i[0].name });
      if (i.length > 1)
        return a("deleteItemsConfirm", { count: i.length });
    });
  }, [a]);
  const r = () => {
    e(i), s([]), t.close();
  };
  return /* @__PURE__ */ k("div", { className: "file-delete-confirm", children: [
    /* @__PURE__ */ d("p", { className: "file-delete-confirm-text", children: n }),
    /* @__PURE__ */ k("div", { className: "file-delete-confirm-actions", children: [
      /* @__PURE__ */ d(Se, { type: "secondary", onClick: () => t.close(), children: a("cancel") }),
      /* @__PURE__ */ d(Se, { type: "danger", onClick: r, children: a("delete") })
    ] })
  ] });
};
function D5(t) {
  return V({ attr: { viewBox: "0 0 1024 1024", fill: "currentColor", fillRule: "evenodd" }, child: [{ tag: "path", attr: { d: "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" }, child: [] }] })(t);
}
function j5(t) {
  return V({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z" }, child: [] }, { tag: "path", attr: { d: "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z" }, child: [] }] })(t);
}
const H5 = ({ percent: t = 0, isCanceled: e = !1, isCompleted: n = !1, error: o }) => {
  const i = ce();
  return /* @__PURE__ */ k("div", { role: "progressbar", className: "fm-progress", children: [
    !o && /* @__PURE__ */ d("div", { className: "fm-progress-bar", children: /* @__PURE__ */ d("div", { className: "fm-progress-bar-fill", style: { width: `${t}%` } }) }),
    e ? /* @__PURE__ */ d("span", { className: "fm-upload-canceled", children: i("canceled") }) : o ? /* @__PURE__ */ d("span", { className: "fm-upload-canceled", children: o }) : /* @__PURE__ */ d("div", { className: "fm-progress-status", children: /* @__PURE__ */ d("span", { children: n ? i("completed") : i("percentDone", { percent: t }) }) })
  ] });
};
function V5(t) {
  return V({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" }, child: [] }] })(t);
}
const B5 = ({
  index: t,
  fileData: e,
  setFiles: n,
  setIsUploading: o,
  fileUploadConfig: i,
  onFileUploaded: s,
  handleFileRemove: a
}) => {
  const [r, l] = z(0), [c, u] = z(!1), [p, m] = z(!1), [f, h] = z(!1), w = _e(33), T = oe(), { onError: N } = qe(), L = ce(), S = (x) => {
    l(0), o((v) => ({
      ...v,
      [t]: !1
    }));
    const C = {
      type: "upload",
      message: L("uploadFail"),
      response: {
        status: x.status,
        statusText: x.statusText,
        data: x.response
      }
    };
    n(
      (v) => v.map(($, A) => t === A ? {
        ...$,
        error: C.message
      } : $)
    ), h(!0), N(C, e.file);
  }, F = (x) => {
    if (!x.error)
      return new Promise((C, v) => {
        const $ = new XMLHttpRequest();
        T.current = $, o((G) => ({
          ...G,
          [t]: !0
        })), $.upload.onprogress = (G) => {
          if (G.lengthComputable) {
            const Z = Math.round(G.loaded / G.total * 100);
            l(Z);
          }
        }, $.onload = () => {
          o((G) => ({
            ...G,
            [t]: !1
          })), $.status === 200 || $.status === 201 ? (u(!0), s($.response), C($.response)) : (v($.statusText), S($));
        }, $.onerror = () => {
          v($.statusText), S($);
        };
        const A = i?.method || "POST";
        $.open(A, i?.url, !0), $.withCredentials = i?.withCredentials || !1;
        const I = i?.headers;
        for (let G in I)
          $.setRequestHeader(G, I[G]);
        const R = new FormData(), _ = x?.appendData;
        for (let G in _)
          _[G] && R.append(G, _[G]);
        R.append("file", x.file), $.send(R);
      });
  };
  X(() => {
    T.current || F(e);
  }, []);
  const g = () => {
    T.current && (T.current.abort(), o((x) => ({
      ...x,
      [t]: !1
    })), m(!0), l(0));
  }, P = () => {
    e?.file && (n(
      (x) => x.map((C, v) => t === v ? {
        ...C,
        error: !1
      } : C)
    ), F({ ...e, error: !1 }), m(!1), h(!1));
  };
  return e.removed ? null : /* @__PURE__ */ k("li", { children: [
    /* @__PURE__ */ d("div", { className: "file-icon", children: w[Fe(e.file?.name)] ?? /* @__PURE__ */ d(je, { size: 33 }) }),
    /* @__PURE__ */ k("div", { className: "file", children: [
      /* @__PURE__ */ k("div", { className: "file-details", children: [
        /* @__PURE__ */ k("div", { className: "file-info", children: [
          /* @__PURE__ */ d("span", { className: "file-name text-truncate", title: e.file?.name, children: e.file?.name }),
          /* @__PURE__ */ d("span", { className: "file-size", children: Je(e.file?.size) })
        ] }),
        c ? /* @__PURE__ */ d(f5, { title: L("uploaded"), className: "upload-success" }) : p || f ? /* @__PURE__ */ d(V5, { className: "retry-upload", title: "Retry", onClick: P }) : /* @__PURE__ */ d(
          "div",
          {
            className: "rm-file",
            title: `${e.error ? L("Remove") : L("abortUpload")}`,
            onClick: e.error ? () => a(t) : g,
            children: /* @__PURE__ */ d(D5, {})
          }
        )
      ] }),
      /* @__PURE__ */ d(
        H5,
        {
          percent: r,
          isCanceled: p,
          isCompleted: c,
          error: e.error
        }
      )
    ] })
  ] });
}, W5 = ({
  fileUploadConfig: t,
  maxFileSize: e,
  acceptedFileTypes: n,
  onFileUploading: o,
  onFileUploaded: i
}) => {
  const [s, a] = z([]), [r, l] = z(!1), [c, u] = z({}), { currentFolder: p, currentPathFiles: m } = he(), { onError: f } = qe(), h = oe(null), w = ce(), T = (P) => {
    P.key === "Enter" && h.current.click();
  }, N = (P) => {
    if (n && !n.includes(Fe(P.name)))
      return w("fileTypeNotAllowed");
    if (m.some(
      (v) => v.name.toLowerCase() === P.name.toLowerCase() && !v.isDirectory
    )) return w("fileAlreadyExist");
    if (e && P.size > e) return `${w("maxUploadSize")} ${Je(e, 0)}.`;
  }, L = (P) => {
    if (P = P.filter(
      (x) => !s.some((C) => C.file.name.toLowerCase() === x.name.toLowerCase())
    ), P.length > 0) {
      const x = P.map((C) => {
        const v = o(C, p), $ = N(C);
        return $ && f({ type: "upload", message: $ }, C), {
          file: C,
          appendData: v,
          ...$ && { error: $ }
        };
      });
      a((C) => [...C, ...x]);
    }
  }, S = (P) => {
    P.preventDefault(), l(!1);
    const x = Array.from(P.dataTransfer.files);
    L(x);
  }, F = (P) => {
    const x = Array.from(P.target.files);
    L(x);
  }, g = (P) => {
    a((x) => {
      const C = x.map((v, $) => P === $ ? {
        ...v,
        removed: !0
      } : v);
      return C.every((v) => !!v.removed) ? [] : C;
    });
  };
  return /* @__PURE__ */ k("div", { className: `fm-upload-file ${s.length > 0 ? "file-selcted" : ""}`, children: [
    /* @__PURE__ */ k("div", { className: "select-files", children: [
      /* @__PURE__ */ d(
        "div",
        {
          className: `draggable-file-input ${r ? "dragging" : ""}`,
          onDrop: S,
          onDragOver: (P) => P.preventDefault(),
          onDragEnter: () => l(!0),
          onDragLeave: () => l(!1),
          children: /* @__PURE__ */ k("div", { className: "input-text", children: [
            /* @__PURE__ */ d(j5, { size: 30 }),
            /* @__PURE__ */ d("span", { children: w("dragFileToUpload") })
          ] })
        }
      ),
      /* @__PURE__ */ d("div", { className: "btn-choose-file", children: /* @__PURE__ */ k(Se, { padding: "0", onKeyDown: T, children: [
        /* @__PURE__ */ d("label", { htmlFor: "chooseFile", children: w("chooseFile") }),
        /* @__PURE__ */ d(
          "input",
          {
            ref: h,
            type: "file",
            id: "chooseFile",
            className: "choose-file-input",
            onChange: F,
            multiple: !0,
            accept: n
          }
        )
      ] }) })
    ] }),
    s.length > 0 && /* @__PURE__ */ k("div", { className: "files-progress", children: [
      /* @__PURE__ */ d("div", { className: "heading", children: Object.values(c).some((P) => P) ? /* @__PURE__ */ k(fe, { children: [
        /* @__PURE__ */ d("h2", { children: w("uploading") }),
        /* @__PURE__ */ d(ft, { loading: !0, className: "upload-loading" })
      ] }) : /* @__PURE__ */ d("h2", { children: w("completed") }) }),
      /* @__PURE__ */ d("ul", { children: s.map((P, x) => /* @__PURE__ */ d(
        B5,
        {
          index: x,
          fileData: P,
          setFiles: a,
          fileUploadConfig: t,
          setIsUploading: u,
          onFileUploaded: i,
          handleFileRemove: g
        },
        x
      )) })
    ] })
  ] });
}, nn = ["jpg", "jpeg", "png"], on = ["mp4", "mov", "avi"], sn = ["mp3", "wav", "m4a"], an = ["txt", "pdf"], _5 = ({ filePreviewPath: t, filePreviewComponent: e }) => {
  const [n, o] = z(!0), [i, s] = z(!1), { selectedFiles: a, handleDownload: r } = ve(), l = _e(73), c = Fe(a[0].name)?.toLowerCase(), u = `${t}${a[0].path}`, p = ce(), m = Ke(
    () => e?.(a[0]),
    [e]
  ), f = () => {
    o(!1), s(!1);
  }, h = () => {
    o(!1), s(!0);
  }, w = () => {
    r();
  };
  return $e.isValidElement(m) ? m : /* @__PURE__ */ k("section", { className: `file-previewer ${c === "pdf" ? "pdf-previewer" : ""}`, children: [
    i || ![
      ...nn,
      ...on,
      ...sn,
      ...an
    ].includes(c) && /* @__PURE__ */ k("div", { className: "preview-error", children: [
      /* @__PURE__ */ d("span", { className: "error-icon", children: l[c] ?? /* @__PURE__ */ d(h5, { size: 73 }) }),
      /* @__PURE__ */ d("span", { className: "error-msg", children: p("previewUnavailable") }),
      /* @__PURE__ */ k("div", { className: "file-info", children: [
        /* @__PURE__ */ d("span", { className: "file-name", children: a[0].name }),
        a[0].size && /* @__PURE__ */ d("span", { children: "-" }),
        /* @__PURE__ */ d("span", { className: "file-size", children: Je(a[0].size) })
      ] }),
      /* @__PURE__ */ d(Se, { onClick: w, padding: "0.45rem .9rem", children: /* @__PURE__ */ k("div", { className: "download-btn", children: [
        /* @__PURE__ */ d(ht, { size: 18 }),
        /* @__PURE__ */ d("span", { children: p("download") })
      ] }) })
    ] }),
    nn.includes(c) && /* @__PURE__ */ k(fe, { children: [
      /* @__PURE__ */ d(ft, { isLoading: n }),
      /* @__PURE__ */ d(
        "img",
        {
          src: u,
          alt: "Preview Unavailable",
          className: `photo-popup-image ${n ? "img-loading" : ""}`,
          onLoad: f,
          onError: h,
          loading: "lazy"
        }
      )
    ] }),
    on.includes(c) && /* @__PURE__ */ d("video", { src: u, className: "video-preview", controls: !0, autoPlay: !0 }),
    sn.includes(c) && /* @__PURE__ */ d("audio", { src: u, controls: !0, autoPlay: !0, className: "audio-preview" }),
    an.includes(c) && /* @__PURE__ */ d(fe, { children: /* @__PURE__ */ d(
      "iframe",
      {
        src: u,
        onLoad: f,
        onError: h,
        frameBorder: "0",
        className: `photo-popup-iframe ${n ? "img-loading" : ""}`
      }
    ) })
  ] });
}, ct = (t) => t.toLowerCase(), de = (t, e, n = !1) => {
  const o = oe(/* @__PURE__ */ new Set([])), i = Ke(() => new Set(t.map((l) => ct(l))), [t]), s = (l) => {
    if (!l.repeat && (o.current.add(ct(l.key)), i.isSubsetOf(o.current) && !n)) {
      l.preventDefault(), e(l);
      return;
    }
  }, a = (l) => {
    o.current.delete(ct(l.key));
  }, r = () => {
    o.current.clear();
  };
  X(() => (window.addEventListener("keydown", s), window.addEventListener("keyup", a), window.addEventListener("blur", r), () => {
    window.removeEventListener("keydown", s), window.removeEventListener("keyup", a), window.removeEventListener("blur", r);
  }), [i, e, n]);
}, ue = {
  createFolder: ["Alt", "Shift", "N"],
  uploadFiles: ["Control", "U"],
  cut: ["Control", "X"],
  copy: ["Control", "C"],
  paste: ["Control", "V"],
  rename: ["F2"],
  download: ["Control", "D"],
  delete: ["Delete"],
  selectAll: ["Control", "A"],
  jumpToFirst: ["Home"],
  jumpToLast: ["End"],
  listLayout: ["Control", "Shift", "!"],
  // Act as Ctrl + Shift + 1 but could cause problems for QWERTZ or DVORAK etc. keyborad layouts.
  gridLayout: ["Control", "Shift", "@"],
  // Act as Ctrl + Shift + 2 but could cause problems for QWERTZ or DVORAK etc. keyborad layouts.
  refresh: ["F5"],
  clearSelection: ["Escape"]
}, K5 = (t, e, n) => {
  const { setClipBoard: o, handleCutCopy: i, handlePasting: s } = Ge(), { currentFolder: a, currentPathFiles: r } = he(), { selectedFiles: l, setSelectedFiles: c, handleDownload: u } = ve(), { setActiveLayout: p } = ye(), m = () => {
    n.create && t.show("createFolder");
  }, f = () => {
    n.upload && t.show("uploadFile");
  }, h = () => {
    n.move && i(!0);
  }, w = () => {
    n.copy && i(!1);
  }, T = () => {
    s(a);
  }, N = () => {
    n.rename && t.show("rename");
  }, L = () => {
    n.download && u();
  }, S = () => {
    n.delete && l.length && t.show("delete");
  }, F = () => {
    r.length > 0 && c([r[0]]);
  }, g = () => {
    r.length > 0 && c([r.at(-1)]);
  }, P = () => {
    c(r);
  }, x = () => {
    c((A) => A.length > 0 ? [] : A);
  }, C = () => {
    xe(e, "onRefresh"), o(null);
  }, v = () => {
    p("grid");
  }, $ = () => {
    p("list");
  };
  de(ue.createFolder, m, t.isActive), de(ue.uploadFiles, f, t.isActive), de(ue.cut, h, t.isActive), de(ue.copy, w, t.isActive), de(ue.paste, T, t.isActive), de(ue.rename, N, t.isActive), de(ue.download, L, t.isActive), de(ue.delete, S, t.isActive), de(ue.jumpToFirst, F, t.isActive), de(ue.jumpToLast, g, t.isActive), de(ue.selectAll, P, t.isActive), de(ue.clearSelection, x, t.isActive), de(ue.refresh, C, t.isActive), de(ue.gridLayout, v, t.isActive), de(ue.listLayout, $, t.isActive);
}, Y5 = ({
  fileUploadConfig: t,
  onFileUploading: e,
  onFileUploaded: n,
  onDelete: o,
  onRefresh: i,
  maxFileSize: s,
  filePreviewPath: a,
  filePreviewComponent: r,
  acceptedFileTypes: l,
  triggerAction: c,
  permissions: u
}) => {
  const [p, m] = z(null), { selectedFiles: f } = ve(), h = ce();
  K5(c, i, u);
  const w = {
    uploadFile: {
      title: h("upload"),
      component: /* @__PURE__ */ d(
        W5,
        {
          fileUploadConfig: t,
          maxFileSize: s,
          acceptedFileTypes: l,
          onFileUploading: e,
          onFileUploaded: n
        }
      ),
      width: "35%"
    },
    delete: {
      title: h("delete"),
      component: /* @__PURE__ */ d(U5, { triggerAction: c, onDelete: o }),
      width: "25%"
    },
    previewFile: {
      title: h("preview"),
      component: /* @__PURE__ */ d(
        _5,
        {
          filePreviewPath: a,
          filePreviewComponent: r
        }
      ),
      width: "50%"
    }
  };
  if (X(() => {
    if (c.isActive) {
      const T = c.actionType;
      T === "previewFile" && (w[T].title = f?.name ?? h("preview")), m(w[T]);
    } else
      m(null);
  }, [c.isActive]), p)
    return /* @__PURE__ */ d(
      Un,
      {
        heading: p.title,
        show: c.isActive,
        setShow: c.close,
        dialogWidth: p.width,
        children: p?.component
      }
    );
}, q5 = () => {
  const [t, e] = z(!1), [n, o] = z(null);
  return {
    isActive: t,
    actionType: n,
    show: (a) => {
      e(!0), o(a);
    },
    close: () => {
      e(!1), o(null);
    }
  };
}, G5 = (t, e) => {
  const [n, o] = z({ col1: t, col2: e }), [i, s] = z(!1), a = oe(null);
  return {
    containerRef: a,
    colSizes: n,
    setColSizes: o,
    isDragging: i,
    handleMouseDown: () => {
      s(!0);
    },
    handleMouseUp: () => {
      s(!1);
    },
    handleMouseMove: (u) => {
      if (!i) return;
      u.preventDefault();
      const m = a.current.getBoundingClientRect(), f = (u.clientX - m.left) / m.width * 100;
      f >= 15 && f <= 60 && o({ col1: f, col2: 100 - f });
    }
  };
}, J5 = (t, e, n) => {
  const o = t[e];
  if (o && isNaN(Date.parse(o)))
    return new Error(
      `Invalid prop \`${e}\` supplied to \`${n}\`. Expected a valid date string (ISO 8601) but received \`${o}\`.`
    );
}, rn = (t, e, n) => {
  const o = t[e];
  try {
    new URL(o);
    return;
  } catch {
    return new Error(
      `Invalid prop \`${e}\` supplied to \`${n}\`. Expected a valid URL but received \`${o}\`.`
    );
  }
}, Z5 = {
  create: !0,
  upload: !0,
  move: !0,
  copy: !0,
  rename: !0,
  download: !0,
  delete: !0
}, X5 = (t) => {
  if (!t || isNaN(Date.parse(t))) return "";
  t = new Date(t);
  let e = t.getHours();
  const n = t.getMinutes(), o = e >= 12 ? "PM" : "AM";
  e = e % 12, e = e || 12;
  const i = t.getMonth() + 1, s = t.getDate(), a = t.getFullYear();
  return `${i}/${s}/${a} ${e}:${n < 10 ? "0" + n : n} ${o}`;
}, Hn = ({
  files: t,
  fileUploadConfig: e,
  isLoading: n,
  onCreateFolder: o,
  onFileUploading: i = () => {
  },
  onFileUploaded: s = () => {
  },
  onCut: a,
  onCopy: r,
  onPaste: l,
  onRename: c,
  onDownload: u,
  onDelete: p = () => null,
  onLayoutChange: m = () => {
  },
  onRefresh: f,
  onFileOpen: h = () => {
  },
  onFolderChange: w = () => {
  },
  onSelect: T,
  onSelectionChange: N,
  onError: L = () => {
  },
  layout: S = "grid",
  enableFilePreview: F = !0,
  maxFileSize: g,
  filePreviewPath: P,
  acceptedFileTypes: x,
  height: C = "600px",
  width: v = "100%",
  initialPath: $ = "",
  filePreviewComponent: A,
  primaryColor: I = "#6155b4",
  fontFamily: R = "Nunito Sans, sans-serif",
  language: _ = "en-US",
  permissions: G = {},
  collapsibleNav: Z = !1,
  defaultNavExpanded: ne = !0,
  className: se = "",
  style: le = {},
  formatDate: y = X5
}) => {
  const [b, D] = z(ne), U = q5(), { containerRef: j, colSizes: K, isDragging: B, handleMouseMove: W, handleMouseUp: Y, handleMouseDown: J } = G5(20, 80), M = {
    "--file-manager-font-family": R,
    "--file-manager-primary-color": I,
    height: C,
    width: v
  }, te = Ke(
    () => ({ ...Z5, ...G }),
    [G]
  );
  return /* @__PURE__ */ k(
    "main",
    {
      className: `file-explorer ${se}`,
      onContextMenu: (E) => E.preventDefault(),
      style: { ...M, ...le },
      children: [
        /* @__PURE__ */ d(ft, { loading: n }),
        /* @__PURE__ */ d(H3, { language: _, children: /* @__PURE__ */ d(B3, { filesData: t, onError: L, children: /* @__PURE__ */ d(_3, { initialPath: $, onFolderChange: w, children: /* @__PURE__ */ d(
          K3,
          {
            onDownload: u,
            onSelect: T,
            onSelectionChange: N,
            children: /* @__PURE__ */ d(Y3, { onPaste: l, onCut: a, onCopy: r, children: /* @__PURE__ */ k(uo, { layout: S, children: [
              /* @__PURE__ */ d(
                kn,
                {
                  onLayoutChange: m,
                  onRefresh: f,
                  triggerAction: U,
                  permissions: te
                }
              ),
              /* @__PURE__ */ k(
                "section",
                {
                  ref: j,
                  onMouseMove: W,
                  onMouseUp: Y,
                  className: "files-container",
                  children: [
                    /* @__PURE__ */ k(
                      "div",
                      {
                        className: `navigation-pane ${b ? "open" : "closed"}`,
                        style: {
                          width: K.col1 + "%"
                        },
                        children: [
                          /* @__PURE__ */ d(zn, { onFileOpen: h }),
                          /* @__PURE__ */ d(
                            "div",
                            {
                              className: `sidebar-resize ${B ? "sidebar-dragging" : ""}`,
                              onMouseDown: J
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ k(
                      "div",
                      {
                        className: "folders-preview",
                        style: { width: (b ? K.col2 : 100) + "%" },
                        children: [
                          /* @__PURE__ */ d(
                            gt,
                            {
                              collapsibleNav: Z,
                              isNavigationPaneOpen: b,
                              setNavigationPaneOpen: D
                            }
                          ),
                          /* @__PURE__ */ d(
                            jn,
                            {
                              onCreateFolder: o,
                              onRename: c,
                              onFileOpen: h,
                              onRefresh: f,
                              enableFilePreview: F,
                              triggerAction: U,
                              permissions: te,
                              formatDate: y
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ d(
                Y5,
                {
                  fileUploadConfig: e,
                  onFileUploading: i,
                  onFileUploaded: s,
                  onDelete: p,
                  onRefresh: f,
                  maxFileSize: g,
                  filePreviewPath: P,
                  filePreviewComponent: A,
                  acceptedFileTypes: x,
                  triggerAction: U,
                  permissions: te
                }
              )
            ] }) })
          }
        ) }) }) })
      ]
    }
  );
};
Hn.displayName = "FileManager";
Hn.propTypes = {
  files: O.arrayOf(
    O.shape({
      name: O.string.isRequired,
      isDirectory: O.bool.isRequired,
      path: O.string.isRequired,
      updatedAt: J5,
      size: O.number
    })
  ).isRequired,
  fileUploadConfig: O.shape({
    url: rn,
    headers: O.objectOf(O.string),
    method: O.oneOf(["POST", "PUT"])
  }),
  isLoading: O.bool,
  onCreateFolder: O.func,
  onFileUploading: O.func,
  onFileUploaded: O.func,
  onRename: O.func,
  onDelete: O.func,
  onCut: O.func,
  onCopy: O.func,
  onPaste: O.func,
  onDownload: O.func,
  onLayoutChange: O.func,
  onRefresh: O.func,
  onFileOpen: O.func,
  onFolderChange: O.func,
  onSelect: O.func,
  onSelectionChange: O.func,
  onError: O.func,
  layout: O.oneOf(["grid", "list"]),
  maxFileSize: O.number,
  enableFilePreview: O.bool,
  filePreviewPath: rn,
  acceptedFileTypes: O.string,
  height: O.oneOfType([O.string, O.number]),
  width: O.oneOfType([O.string, O.number]),
  initialPath: O.string,
  filePreviewComponent: O.func,
  primaryColor: O.string,
  fontFamily: O.string,
  language: O.string,
  permissions: O.shape({
    create: O.bool,
    upload: O.bool,
    move: O.bool,
    copy: O.bool,
    rename: O.bool,
    download: O.bool,
    delete: O.bool
  }),
  collapsibleNav: O.bool,
  defaultNavExpanded: O.bool,
  className: O.string,
  style: O.object,
  formatDate: O.func
};
export {
  Hn as FileManager
};
