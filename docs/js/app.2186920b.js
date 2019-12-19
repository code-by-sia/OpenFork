(function(t) {
  function e(e) {
    for (
      var n, i, s = e[0], c = e[1], l = e[2], d = 0, f = [];
      d < s.length;
      d++
    )
      (i = s[d]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]),
        (o[i] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    u && u(e);
    while (f.length) f.shift()();
    return r.push.apply(r, l || []), a();
  }
  function a() {
    for (var t, e = 0; e < r.length; e++) {
      for (var a = r[e], n = !0, s = 1; s < a.length; s++) {
        var c = a[s];
        0 !== o[c] && (n = !1);
      }
      n && (r.splice(e--, 1), (t = i((i.s = a[0]))));
    }
    return t;
  }
  var n = {},
    o = { app: 0 },
    r = [];
  function i(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = t),
    (i.c = n),
    (i.d = function(t, e, a) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (i.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          i.d(
            a,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (i.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "/OpenFork/");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = s.push.bind(s);
  (s.push = e), (s = s.slice());
  for (var l = 0; l < s.length; l++) e(s[l]);
  var u = c;
  r.push([0, "chunk-vendors"]), a();
})({
  0: function(t, e, a) {
    t.exports = a("cd49");
  },
  "5f85": function(t, e, a) {},
  "6b52": function(t, e, a) {
    "use strict";
    var n = a("7598"),
      o = a.n(n);
    o.a;
  },
  "6ef6": function(t, e, a) {},
  7598: function(t, e, a) {},
  7947: function(t, e, a) {
    "use strict";
    var n = a("5f85"),
      o = a.n(n);
    o.a;
  },
  "8db5": function(t, e, a) {
    "use strict";
    var n = a("d725"),
      o = a.n(n);
    o.a;
  },
  b5f3: function(t, e, a) {},
  c1eb: function(t, e, a) {
    "use strict";
    var n = a("6ef6"),
      o = a.n(n);
    o.a;
  },
  c7c4: function(t, e, a) {},
  cc5c: function(t, e, a) {
    "use strict";
    var n = a("b5f3"),
      o = a.n(n);
    o.a;
  },
  cd49: function(t, e, a) {
    "use strict";
    a.r(e);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var n = a("2b0e"),
      o = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { attrs: { id: "app" } },
          [
            a(
              "ribbon",
              {
                staticStyle: { position: "sticky" },
                attrs: { menu: t.menu },
                model: {
                  value: t.active,
                  callback: function(e) {
                    t.active = e;
                  },
                  expression: "active"
                }
              },
              [
                a(
                  "div",
                  { attrs: { slot: "editor" }, slot: "editor" },
                  [
                    a(
                      "control-box",
                      { staticClass: "last", attrs: { label: "Data" } },
                      [
                        a(
                          "action-button",
                          { attrs: { label: "load from url" } },
                          [
                            a("i", {
                              staticClass: "fa fa-link",
                              attrs: { slot: "prefix" },
                              slot: "prefix"
                            })
                          ]
                        ),
                        a(
                          "action-button",
                          { attrs: { label: "load from file" } },
                          [
                            a("i", {
                              staticClass: "fa fa-file",
                              attrs: { slot: "prefix" },
                              slot: "prefix"
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    a(
                      "control-box",
                      {
                        staticClass: "independent",
                        attrs: { label: "Clipboard" }
                      },
                      [
                        a(
                          "action-group",
                          {
                            staticClass: "clipboard",
                            attrs: { value: t.clipboard },
                            on: { action: t.onClipboard }
                          },
                          [
                            a("i", {
                              staticClass: "fa fa-copy",
                              attrs: { slot: "copy" },
                              slot: "copy"
                            }),
                            a("i", {
                              staticClass: "fa fa-paste",
                              attrs: { slot: "paste" },
                              slot: "paste"
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    a(
                      "control-box",
                      { attrs: { label: "Formatting" } },
                      [
                        a("action-button", {
                          attrs: { label: "Clear whitespace" },
                          on: { click: t.minify }
                        }),
                        a("action-button", {
                          attrs: { label: "Format Text" },
                          on: { click: t.format }
                        })
                      ],
                      1
                    ),
                    a(
                      "control-box",
                      { attrs: { label: "Content" } },
                      [
                        a("action-button", { attrs: { label: "Clear" } }, [
                          a("i", {
                            staticClass: "fa fa-eraser",
                            attrs: { slot: "postfix" },
                            slot: "postfix"
                          })
                        ]),
                        a(
                          "action-group",
                          {
                            staticClass: "history",
                            attrs: { value: t.history }
                          },
                          [
                            a(
                              "span",
                              {
                                staticClass: "action",
                                attrs: { slot: "undo" },
                                slot: "undo"
                              },
                              [
                                a("span", [t._v("Undo")]),
                                a("i", { staticClass: "fa fa-undo" })
                              ]
                            ),
                            a(
                              "span",
                              {
                                staticClass: "action",
                                attrs: { slot: "redo" },
                                slot: "redo"
                              },
                              [
                                a("span", [t._v("Redo")]),
                                a("i", { staticClass: "fa fa-redo" })
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                a("div", { attrs: { slot: "viewer" }, slot: "viewer" }),
                a(
                  "div",
                  {
                    staticStyle: { flex: "1" },
                    attrs: { slot: "about" },
                    slot: "about"
                  },
                  [
                    a("control-box", { attrs: { label: "OSI" } }, [
                      a(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "xx-large",
                            color: "#00454d",
                            "font-weight": "bold"
                          }
                        },
                        [a("i", { staticClass: "fab fa-osi" })]
                      )
                    ]),
                    a(
                      "control-box",
                      {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "About Open Web Sheet Project",
                          grid: !1
                        }
                      },
                      [
                        a("span", { staticStyle: { flex: "1" } }, [
                          t._v(" Designed and developed by "),
                          a("strong", [t._v("Siamand Maroufi")]),
                          a("br"),
                          t._v(" 3rd Parties: "),
                          a("strong", [t._v("FontAwesome Icons")]),
                          t._v(" & "),
                          a("strong", [t._v("Google noto web font")]),
                          a("br"),
                          t._v(" Licence: "),
                          a("strong", [t._v("MIT Licence")])
                        ]),
                        a(
                          "span",
                          { staticStyle: { "align-self": "flex-start" } },
                          [
                            a("a", { attrs: { href: "https://siamand.cc" } }, [
                              a("i", { staticClass: "fa fa-link" }),
                              t._v(" Developer's site")
                            ]),
                            t._v(" | "),
                            a(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://github.com/SiamandMaroufi/OpenFork"
                                }
                              },
                              [
                                a("i", { staticClass: "fab fa-github" }),
                                t._v(" Source Code")
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            "editor" === t.active
              ? a("editor", {
                  model: {
                    value: t.data,
                    callback: function(e) {
                      t.data = e;
                    },
                    expression: "data"
                  }
                })
              : "viewer" === t.active
              ? a("viewer")
              : a("div", [t._v(" nothing here yet ... ")])
          ],
          1
        );
      },
      r = [],
      i = (a("96cf"), a("1da1")),
      s = a("d4ec"),
      c = a("bee2"),
      l = a("99de"),
      u = a("7e84"),
      d = a("262e"),
      f = a("9ab4"),
      b = a("60a3"),
      p = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "ribbon-menu" }, [
          a(
            "ul",
            { staticClass: "menu", attrs: { "data-qa": "menu" } },
            t._l(t.menu, function(e) {
              return a(
                "li",
                {
                  key: e.name,
                  staticClass: "menu-label",
                  class: { active: t.active === e.name },
                  attrs: { "data-qa": e },
                  on: {
                    click: function(a) {
                      t.active = e.name;
                    }
                  }
                },
                [t._v(" " + t._s(e.label) + " ")]
              );
            }),
            0
          ),
          a(
            "div",
            { staticClass: "menu-content" },
            t._l(t.menu, function(e) {
              return a(
                "div",
                {
                  key: e.name,
                  staticClass: "menu-content-item",
                  class: { active: t.active === e.name }
                },
                [
                  t._t(e.name, [
                    a("fieldset", [
                      a("legend", [t._v(t._s(e.label))]),
                      a("span", { staticClass: "default-place-holder" }, [
                        t._v("placeholder for " + t._s(e.name))
                      ])
                    ])
                  ])
                ],
                2
              );
            }),
            0
          )
        ]);
      },
      v = [],
      h = (function(t) {
        function e() {
          return (
            Object(s["a"])(this, e),
            Object(l["a"])(this, Object(u["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(d["a"])(e, t),
          Object(c["a"])(e, [
            {
              key: "active",
              get: function() {
                return this.value;
              },
              set: function(t) {
                this.$emit("input", t);
              }
            }
          ]),
          e
        );
      })(b["c"]);
    f["a"]([Object(b["b"])({ required: !0 })], h.prototype, "value", void 0),
      f["a"]([Object(b["b"])({ required: !0 })], h.prototype, "menu", void 0),
      (h = f["a"]([Object(b["a"])({ name: "Ribbon" })], h));
    var m = h,
      y = m,
      O = (a("8db5"), a("2877")),
      j = Object(O["a"])(y, p, v, !1, null, "7632c134", null),
      g = j.exports,
      _ = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "control-box", attrs: { "data-qa": "control-box" } },
          [
            a(
              "div",
              {
                staticClass: "control-box-controls",
                style: { display: t.grid ? "grid" : "flex" },
                attrs: { "data-qa": "content" }
              },
              [t._t("default")],
              2
            ),
            t.label
              ? a(
                  "div",
                  {
                    staticClass: "control-box-header",
                    attrs: { "data-qa": "header" }
                  },
                  [t._v(" " + t._s(t.label) + " ")]
                )
              : t._e()
          ]
        );
      },
      x = [],
      C = (function(t) {
        function e() {
          return (
            Object(s["a"])(this, e),
            Object(l["a"])(this, Object(u["a"])(e).apply(this, arguments))
          );
        }
        return Object(d["a"])(e, t), e;
      })(n["a"]);
    f["a"]([Object(b["b"])()], C.prototype, "label", void 0),
      f["a"]([Object(b["b"])({ default: !0 })], C.prototype, "grid", void 0),
      (C = f["a"]([Object(b["a"])({ name: "ControlBox" })], C));
    var k = C,
      w = k,
      S = (a("6b52"), Object(O["a"])(w, _, x, !1, null, "2b189682", null)),
      q = S.exports,
      M = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "editor" }, [
          t.editMode
            ? a("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.text,
                    expression: "text"
                  }
                ],
                domProps: { value: t.text },
                on: {
                  blur: function(e) {
                    t.editMode = !1;
                  },
                  input: function(e) {
                    e.target.composing || (t.text = e.target.value);
                  }
                }
              })
            : a(
                "div",
                {
                  staticClass: "rendered",
                  on: {
                    dblclick: function(e) {
                      t.editMode = !0;
                    }
                  }
                },
                [
                  a(
                    "div",
                    { staticClass: "lines" },
                    t._l(t.lines, function(e, n) {
                      return a("div", { key: n, staticClass: "line" }, [
                        t._v(" " + t._s(n + 1) + " ")
                      ]);
                    }),
                    0
                  ),
                  a(
                    "div",
                    { staticClass: "content" },
                    t._l(t.lines, function(e, n) {
                      return a("span", {
                        key: n,
                        staticClass: "line",
                        domProps: { innerHTML: t._s(t.formatLine(e)) }
                      });
                    }),
                    0
                  )
                ]
              )
        ]);
      },
      P = [],
      $ =
        (a("a4d3"),
        a("e01a"),
        a("d28b"),
        a("2a1b"),
        a("d3b7"),
        a("ac1f"),
        a("3ca3"),
        a("466d"),
        a("5319"),
        a("1276"),
        a("ddb0"),
        (function(t) {
          function e() {
            var t;
            return (
              Object(s["a"])(this, e),
              (t = Object(l["a"])(
                this,
                Object(u["a"])(e).apply(this, arguments)
              )),
              (t.regex = /((?<![\\])['"])((?:.(?!(?<![\\])\1))*.?)\1/g),
              (t.editMode = !1),
              t
            );
          }
          return (
            Object(d["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "formatLine",
                value: function(t) {
                  t = t.replace(/ /g, "&nbsp");
                  var e = this.regex[Symbol.match](t);
                  if (null == e) return t;
                  var a = !0,
                    n = !1,
                    o = void 0;
                  try {
                    for (
                      var r, i = e[Symbol.iterator]();
                      !(a = (r = i.next()).done);
                      a = !0
                    ) {
                      var s = r.value;
                      t = t.replace(
                        s,
                        "<span class='str'>".concat(s, "</span>")
                      );
                    }
                  } catch (c) {
                    (n = !0), (o = c);
                  } finally {
                    try {
                      a || null == i.return || i.return();
                    } finally {
                      if (n) throw o;
                    }
                  }
                  return t;
                }
              },
              {
                key: "text",
                get: function() {
                  return this.value;
                },
                set: function(t) {
                  this.$emit("input", t);
                }
              },
              {
                key: "lines",
                get: function() {
                  return this.text.split("\n");
                }
              }
            ]),
            e
          );
        })(n["a"]));
    f["a"]([Object(b["b"])({ required: !0 })], $.prototype, "value", void 0),
      ($ = f["a"]([Object(b["a"])({ name: "Editor" })], $));
    var A,
      E,
      T = $,
      F = T,
      N = (a("cc5c"), Object(O["a"])(F, M, P, !1, null, null, null)),
      B = N.exports,
      J = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "viewer" }, [t._v(" viewer ")]);
      },
      L = [],
      R =
        ((A = Object(b["a"])({ name: "viewer" })),
        A(
          (E = (function(t) {
            function e() {
              return (
                Object(s["a"])(this, e),
                Object(l["a"])(this, Object(u["a"])(e).apply(this, arguments))
              );
            }
            return Object(d["a"])(e, t), e;
          })(n["a"]))
        ) || E),
      D = R,
      G = Object(O["a"])(D, J, L, !1, null, null, null),
      I = G.exports,
      V = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "action-group", attrs: { "data-qa": "action-group" } },
          t._l(t.actions, function(e) {
            return a(
              "action-button",
              {
                key: e.name,
                staticClass: "action-group-item",
                class: { on: e.selected },
                attrs: {
                  disabled: e.disabled,
                  "data-qa": "action-item",
                  "data-qa-name": e.name
                },
                on: {
                  click: function(a) {
                    return t.$emit("action", e.name);
                  }
                }
              },
              [t._t(e.name, [t._v(" " + t._s(e.label) + " ")])],
              2
            );
          }),
          1
        );
      },
      z = [],
      H = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "button",
          {
            staticClass: "action",
            attrs: { disabled: t.disabled, "data-qa": "action" },
            on: {
              click: function(e) {
                return t.$emit("click");
              }
            }
          },
          [
            t._t("default", [
              t._t("prefix"),
              t._v(" " + t._s(t.label) + " "),
              t._t("postfix")
            ])
          ],
          2
        );
      },
      U = [],
      W = (function(t) {
        function e() {
          return (
            Object(s["a"])(this, e),
            Object(l["a"])(this, Object(u["a"])(e).apply(this, arguments))
          );
        }
        return Object(d["a"])(e, t), e;
      })(n["a"]);
    f["a"]([Object(b["b"])()], W.prototype, "label", void 0),
      f["a"](
        [Object(b["b"])({ default: !1 })],
        W.prototype,
        "disabled",
        void 0
      ),
      (W = f["a"]([Object(b["a"])({ name: "ActionButton" })], W));
    var K = W,
      Q = K,
      X = (a("c1eb"), Object(O["a"])(Q, H, U, !1, null, "cb93cbbc", null)),
      Y = X.exports,
      Z = (function(t) {
        function e() {
          return (
            Object(s["a"])(this, e),
            Object(l["a"])(this, Object(u["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(d["a"])(e, t),
          Object(c["a"])(e, [
            {
              key: "actions",
              get: function() {
                return this.value;
              }
            }
          ]),
          e
        );
      })(n["a"]);
    f["a"]([Object(b["b"])({ required: !0 })], Z.prototype, "value", void 0),
      (Z = f["a"](
        [
          Object(b["a"])({
            name: "ActionGroup",
            components: { ActionButton: Y }
          })
        ],
        Z
      ));
    var tt = Z,
      et = tt,
      at = (a("cfc7"), Object(O["a"])(et, V, z, !1, null, "252226b0", null)),
      nt = at.exports,
      ot = (function(t) {
        function e() {
          var t;
          return (
            Object(s["a"])(this, e),
            (t = Object(l["a"])(
              this,
              Object(u["a"])(e).apply(this, arguments)
            )),
            (t.active = "editor"),
            (t.menu = [
              { name: "editor", label: "Text Editor" },
              { name: "viewer", label: "Object Viewer" },
              { name: "about", label: "About" }
            ]),
            (t.clipboard = [
              { name: "copy", label: "Copy" },
              { name: "paste", label: "Paste" }
            ]),
            (t.history = [{ name: "redo" }, { name: "undo" }]),
            (t.data = ""),
            t
          );
        }
        return (
          Object(d["a"])(e, t),
          Object(c["a"])(e, [
            {
              key: "onClipboard",
              value: (function() {
                var t = Object(i["a"])(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ("paste" !== e) {
                                t.next = 6;
                                break;
                              }
                              return (
                                (t.next = 3), navigator.clipboard.readText()
                              );
                            case 3:
                              (this.data = t.sent), (t.next = 7);
                              break;
                            case 6:
                              "copy" === e &&
                                navigator.clipboard.writeText(this.data);
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e(e) {
                  return t.apply(this, arguments);
                }
                return e;
              })()
            },
            {
              key: "format",
              value: function() {
                try {
                  (this.data = JSON.parse(this.data)),
                    (this.data = JSON.stringify(this.data, null, 2));
                } catch (t) {}
              }
            },
            {
              key: "minify",
              value: function() {
                try {
                  (this.data = JSON.parse(this.data)),
                    (this.data = JSON.stringify(this.data));
                } catch (t) {}
              }
            }
          ]),
          e
        );
      })(b["c"]);
    ot = f["a"](
      [
        Object(b["a"])({
          components: {
            ActionButton: Y,
            ActionGroup: nt,
            Viewer: I,
            Editor: B,
            ControlBox: q,
            Ribbon: g
          }
        })
      ],
      ot
    );
    var rt = ot,
      it = rt,
      st = (a("7947"), Object(O["a"])(it, o, r, !1, null, "2224dbd0", null)),
      ct = st.exports,
      lt = a("9483");
    Object(lt["a"])("".concat("/OpenFork/", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(t) {
        console.error("Error during service worker registration:", t);
      }
    }),
      (n["a"].config.productionTip = !1),
      new n["a"]({
        render: function(t) {
          return t(ct);
        }
      }).$mount("#app");
  },
  cfc7: function(t, e, a) {
    "use strict";
    var n = a("c7c4"),
      o = a.n(n);
    o.a;
  },
  d725: function(t, e, a) {}
});
//# sourceMappingURL=app.2186920b.js.map
