(function () {
  "use strict";
  var e = {
      5605: function (e, t, o) {
        o.d(t, {
          $G: function () {
            return l;
          },
          MZ: function () {
            return a;
          },
          YY: function () {
            return d;
          },
          ZX: function () {
            return c;
          },
          jX: function () {
            return s;
          },
          wz: function () {
            return u;
          },
          yO: function () {
            return i;
          },
        });
        var n = o(4161);
        const r = "http://localhost:8000/api";
        function a(e, t = null) {
          let o;
          return (
            (o = t ? `${r}/${e}?page=${t}` : `${r}/${e}`),
            n.Z.get(o)
              .then((e) => (t ? e.data : e.data.data))
              .catch((e) => {
                console.error(e);
              })
          );
        }
        function i(e, t, o = null) {
          let a;
          return (
            (a = o ? `${r}/${t}/${e}?page=${o}` : `${r}/${t}/${e}`),
            n.Z.get(a)
              .then((e) => (o ? e.data : e.data.data))
              .catch(() =>
                Promise.reject(
                  "Error fetching items list. Please try again later."
                )
              )
          );
        }
        function s(e, t, o) {
          return n.Z.post(`${r}/${e}`, t, {
            headers: {
              "Content-Type": "application/json",
              "User-Google-Id": o,
            },
          })
            .then((e) => e.data)
            .catch((e) => {
              console.error(e);
            });
        }
        function c(e, t) {
          return n.Z.get(`${r}/${e}/${t}`)
            .then((e) => e.data.data)
            .catch((e) => {
              console.error(e);
            });
        }
        function l(e, t, o, a) {
          return n.Z.put(`${r}/${e}/${t}`, o, {
            headers: {
              "Content-Type": "application/json",
              "User-Google-Id": a,
            },
          })
            .then((e) => e.data)
            .catch((e) => {
              console.error(e);
            });
        }
        function u(e, t, o) {
          return n.Z.delete(`${r}/${e}/${t}`, {
            headers: {
              "Content-Type": "application/json",
              "User-Google-Id": o,
            },
          });
        }
        function d(e, t) {
          return n.Z.get(`${r}/users/${e}/advertisements`, {
            headers: {
              "Content-Type": "application/json",
              "User-Google-Id": t,
            },
          })
            .then((e) => e.data.data)
            .catch((e) => {
              console.error(e);
            });
        }
      },
      310: function (e, t, o) {
        var n = o(9242),
          r = o(3396);
        function a(e, t, o, n, a, i) {
          const s = (0, r.up)("Header"),
            c = (0, r.up)("RouterView"),
            l = (0, r.up)("Footer");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", null, [(0, r.Wm)(s), (0, r.Wm)(c), (0, r.Wm)(l)])
          );
        }
        var i = o.p + "img/logo_dormitory_text.272700fd.svg";
        const s = (e) => (
            (0, r.dD)("data-v-33dbf863"), (e = e()), (0, r.Cn)(), e
          ),
          c = { class: "header-content" },
          l = s(() => (0, r._)("img", { src: i, alt: "" }, null, -1)),
          u = s(() => (0, r._)("option", { value: "ua" }, "UA", -1)),
          d = s(() => (0, r._)("option", { value: "en" }, "EN", -1)),
          m = [u, d];
        function g(e, t, o, a, i, s) {
          return (
            (0, r.wg)(),
            (0, r.iD)("header", null, [
              (0, r._)("div", c, [
                l,
                (0, r.wy)(
                  (0, r._)(
                    "select",
                    {
                      class: "language-select",
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (e) => (i.selectedLanguage = e)),
                      onChange:
                        t[1] ||
                        (t[1] = (...e) =>
                          s.changeLanguage && s.changeLanguage(...e)),
                    },
                    m,
                    544
                  ),
                  [[n.bM, i.selectedLanguage]]
                ),
              ]),
            ])
          );
        }
        var p = o(65),
          f = {
            data() {
              return {
                value1: "",
                toggle: "advertisement",
                selectedLanguage: localStorage.getItem("selectedLanguage"),
              };
            },
            mounted() {
              (this.$i18n.locale = localStorage.getItem("selectedLanguage")),
                (this.selectedLanguage =
                  localStorage.getItem("selectedLanguage"));
            },
            computed: { ...(0, p.Se)("user", ["user"]) },
            methods: {
              changeLanguage() {
                (this.$i18n.locale = this.selectedLanguage),
                  localStorage.setItem(
                    "selectedLanguage",
                    this.selectedLanguage
                  );
              },
            },
          },
          h = o(89);
        const v = (0, h.Z)(f, [
          ["render", g],
          ["__scopeId", "data-v-33dbf863"],
        ]);
        var b = v,
          _ = o(7139),
          w = o.p + "./img/home.91f111f1.svg",
          k = o(3651),
          y = o(4729),
          C = o(5943),
          A = o.p + "./img/person.dfd60dba.svg";
        const I = (e) => (
            (0, r.dD)("data-v-2b7c5a38"), (e = e()), (0, r.Cn)(), e
          ),
          E = { class: "footer" },
          S = I(() => (0, r._)("img", { src: w, alt: "" }, null, -1)),
          L = I(() => (0, r._)("img", { src: k, alt: "" }, null, -1)),
          U = I(() => (0, r._)("img", { src: y, alt: "" }, null, -1)),
          $ = I(() => (0, r._)("img", { src: C, alt: "" }, null, -1)),
          P = I(() => (0, r._)("img", { src: A, alt: "" }, null, -1));
        function O(e, t, o, n, a, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", E, [
              (0, r._)(
                "div",
                {
                  class: (0, _.C_)([
                    "footer-element",
                    { selected: "/" === e.$route.path },
                  ]),
                  onClick: t[0] || (t[0] = (e) => i.pushLink("/")),
                },
                [S, (0, r._)("span", null, (0, _.zw)(e.$t("footer.main")), 1)],
                2
              ),
              (0, r._)(
                "div",
                {
                  class: (0, _.C_)([
                    "footer-element",
                    { selected: "/advertisements" === e.$route.path },
                  ]),
                  onClick:
                    t[1] || (t[1] = (e) => i.pushLink("/advertisements")),
                },
                [
                  L,
                  (0, r._)(
                    "span",
                    null,
                    (0, _.zw)(e.$t("global.advertisement")),
                    1
                  ),
                ],
                2
              ),
              (0, r._)(
                "div",
                {
                  class: (0, _.C_)([
                    "footer-element",
                    { selected: "/info" === e.$route.path },
                  ]),
                  onClick: t[2] || (t[2] = (e) => i.pushLink("/info")),
                },
                [
                  U,
                  (0, r._)(
                    "span",
                    null,
                    (0, _.zw)(e.$t("footer.information")),
                    1
                  ),
                ],
                2
              ),
              (0, r._)(
                "div",
                {
                  class: (0, _.C_)([
                    "footer-element",
                    { selected: "/works" === e.$route.path },
                  ]),
                  onClick: t[3] || (t[3] = (e) => i.pushLink("/works")),
                },
                [$, (0, r._)("span", null, (0, _.zw)(e.$t("global.work")), 1)],
                2
              ),
              (0, r._)(
                "div",
                {
                  class: (0, _.C_)([
                    "footer-element",
                    { selected: "/me" === e.$route.path },
                  ]),
                  onClick: t[4] || (t[4] = (e) => i.pushLink("/me")),
                },
                [
                  P,
                  (0, r._)("span", null, (0, _.zw)(e.$t("footer.account")), 1),
                ],
                2
              ),
            ])
          );
        }
        o(560);
        var x = {
          methods: {
            pushLink(e) {
              this.$router.push(e);
            },
          },
        };
        const z = (0, h.Z)(x, [
          ["render", O],
          ["__scopeId", "data-v-2b7c5a38"],
        ]);
        var D = z,
          T = {
            name: "App",
            data() {
              return {};
            },
            components: { Footer: D, Header: b },
            computed: { ...(0, p.Se)("user", ["isLoggedIn"]) },
            mounted() {
              (window.stopScroll = (e) => {
                let t = "";
                (t = e ? "hidden" : "auto"),
                  (document.body.style.overflowY = t);
              }),
                localStorage.getItem("defaultDormitory") ||
                  localStorage.setItem("defaultDormitory", 4),
                localStorage.getItem("selectedLanguage") ||
                  localStorage.setItem("selectedLanguage", "ua");
            },
          };
        const R = (0, h.Z)(T, [["render", a]]);
        var N = R,
          F = o(2483);
        const B = { class: "page" },
          G = { class: "alert" };
        function j(e, t, o, n, a, i) {
          const s = (0, r.up)("Auth_btn");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", B, [
              (0, r._)("div", G, [
                (0, r._)("h3", null, (0, _.zw)(e.$t("auth.oops")) + "...", 1),
                (0, r._)("p", null, (0, _.zw)(e.$t("auth.text.notLogged")), 1),
                (0, r._)("p", null, (0, _.zw)(e.$t("auth.text.functions")), 1),
                (0, r.Wm)(s),
              ]),
            ])
          );
        }
        const M = {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            style: { display: "block" },
          },
          V = (0, r.uE)(
            '<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-faaeb154></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-faaeb154></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-faaeb154></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-faaeb154></path><path fill="none" d="M0 0h48v48H0z" data-v-faaeb154></path>',
            5
          ),
          Z = [V];
        function W(e, t, o, n, a, i) {
          return (
            (0, r.wg)(),
            (0, r.iD)(
              "div",
              {
                class: "auth-btn",
                onClick: t[0] || (t[0] = (e) => i.signInWithGoogle()),
              },
              [
                ((0, r.wg)(), (0, r.iD)("svg", M, Z)),
                (0, r._)("span", null, (0, _.zw)(e.$t("auth.authorize")), 1),
              ]
            )
          );
        }
        var J = o(72),
          Y = o(8443),
          Q = o.n(Y),
          K = o(5605),
          H = {
            name: "Auth_btn",
            methods: {
              signInWithGoogle() {
                Q().init({
                  google:
                    "687895112030-98oht0ilvp1u0defu2vnb475h844352p.apps.googleusercontent.com",
                }),
                  Q()("google")
                    .login({ scope: "email" })
                    .then(
                      (e) => {
                        const t = e.authResponse.access_token;
                        console.log(t),
                          Q()("google")
                            .api("me")
                            .then(
                              (e) => {
                                J.Z.setGoogleIdCookie(e.id),
                                  J.Z.setAccessTokenCookie(e.id);
                                const t = {
                                  google_id: e.id,
                                  name: e.name,
                                  email: e.email,
                                  imgURL: e.picture,
                                };
                                console.log(t),
                                  (0, K.jX)("users", t, e.id).then(() => {
                                    this.$router.push("/me");
                                  });
                              },
                              (e) => {
                                console.error("Помилка отримання профілю: ", e);
                              }
                            );
                      },
                      (e) => {
                        console.error("Авторизація не вдалась: ", e);
                      }
                    );
              },
            },
          };
        const q = (0, h.Z)(H, [
          ["render", W],
          ["__scopeId", "data-v-faaeb154"],
        ]);
        var X = q,
          ee = { components: { Auth_btn: X } };
        const te = (0, h.Z)(ee, [["render", j]]);
        var oe = te;
        const ne = (e) => (
            (0, r.dD)("data-v-278a0a33"), (e = e()), (0, r.Cn)(), e
          ),
          re = { class: "main-page-container" },
          ae = { key: 0, class: "login-notification" },
          ie = { class: "text-part" },
          se = { value: "1" },
          ce = { value: "2" },
          le = { value: "3" },
          ue = { value: "4" },
          de = { value: "5" },
          me = ne(() => (0, r._)("div", { class: "spacer" }, null, -1)),
          ge = { class: "iframe-container" },
          pe = {
            key: 0,
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.3092066038507!2d22.27880627688167!3d48.62306481723768!2m3!1f0!2f0!3f0!3m2!\r\n    1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184de3d6b1fd%3A0x49937b7cbd2981f5!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMQ!5e0!3m2!1suk!2sua!4v1703448480255!5m2!1suk!2sua",
            style: { border: "0" },
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          },
          fe = {
            key: 1,
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.3385398761197!2d22.277629092631823!3d48.62250344328752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b3723d569f%3A0xa2d6e1893b65d28!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMg!5e0!3m2!1suk!2sua!4v1703448758353!5m2!1suk!2sua",
            style: { border: "0" },
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          },
          he = {
            key: 2,
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.31155798193!2d22.280855176881676!3d48.62301981724079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184dbf050b95%3A0xa3415e1465987a48!2z0JPRg9GA0YLQvtC20LjRgtC-0Log0KPQttCd0KMg4oSWMw!5e0!3m2!1suk!2sua!4v1703448526952!5m2!1suk!2sua",
            style: { border: "0" },
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          },
          ve = {
            key: 3,
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10546.788975405578!2d22.28502516225587!3d48.634775\r\n    32607448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739183a652310df%3A0x2fb944ceb4390e52!2z0JPRg9GA0YLQvtC2\r\n    0LjRgtC-0Log4oSWNCDQo9C20J3Qow!5e0!3m2!1suk!2sua!4v1703448226217!5m2!1suk!2sua",
            style: { border: "0" },
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          },
          be = {
            key: 4,
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.5638161608163!2d22.283532976882242!3d48.63732831623741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13\r\n    .1!3m3!1m2!1s0x4739183414f6cb71%3A0xa0171da6518a8d6b!2z0JPRg9GA0YLQvtC20LjRgtC-0Log4oSWNSDQo9C20J3Qow!5e0!3m2!1suk!2sua!4v1703448402075!5m2!1suk!2sua",
            style: { border: "0" },
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          },
          _e = ne(() => (0, r._)("div", { class: "space" }, null, -1));
        function we(e, t, o, a, i, s) {
          const c = (0, r.up)("Auth_btn");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", re, [
              s.isLoggedIn
                ? (0, r.kq)("", !0)
                : ((0, r.wg)(),
                  (0, r.iD)("div", ae, [
                    (0, r._)("div", ie, [
                      (0, r._)(
                        "h4",
                        null,
                        (0, _.zw)(e.$t("main.titles.greeting")),
                        1
                      ),
                      (0, r._)(
                        "p",
                        null,
                        (0, _.zw)(e.$t("main.text.greeting")),
                        1
                      ),
                    ]),
                    (0, r.Wm)(c),
                  ])),
              (0, r._)(
                "div",
                { class: (0, _.C_)(["dormitory-selector", s.selector_bg]) },
                [
                  (0, r._)(
                    "span",
                    null,
                    (0, _.zw)(e.$t("main.titles.search")),
                    1
                  ),
                  (0, r.wy)(
                    (0, r._)(
                      "select",
                      {
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (e) => (i.selected_dormitory = e)),
                      },
                      [
                        (0, r._)(
                          "option",
                          se,
                          (0, _.zw)(e.$t("global.dormitory")) + " №1",
                          1
                        ),
                        (0, r._)(
                          "option",
                          ce,
                          (0, _.zw)(e.$t("global.dormitory")) + " №2",
                          1
                        ),
                        (0, r._)(
                          "option",
                          le,
                          (0, _.zw)(e.$t("global.dormitory")) + " №3",
                          1
                        ),
                        (0, r._)(
                          "option",
                          ue,
                          (0, _.zw)(e.$t("global.dormitory")) + " №4",
                          1
                        ),
                        (0, r._)(
                          "option",
                          de,
                          (0, _.zw)(e.$t("global.dormitory")) + " №5",
                          1
                        ),
                      ],
                      512
                    ),
                    [[n.bM, i.selected_dormitory]]
                  ),
                ],
                2
              ),
              me,
              (0, r._)("div", ge, [
                1 == i.selected_dormitory
                  ? ((0, r.wg)(), (0, r.iD)("iframe", pe))
                  : 2 == i.selected_dormitory
                  ? ((0, r.wg)(), (0, r.iD)("iframe", fe))
                  : 3 == i.selected_dormitory
                  ? ((0, r.wg)(), (0, r.iD)("iframe", he))
                  : 4 == i.selected_dormitory
                  ? ((0, r.wg)(), (0, r.iD)("iframe", ve))
                  : ((0, r.wg)(), (0, r.iD)("iframe", be)),
              ]),
              (0, r._)(
                "div",
                {
                  class: "disclaimer about-us",
                  onClick:
                    t[1] || (t[1] = (e) => this.$router.push("/about-us")),
                },
                [
                  (0, r._)(
                    "p",
                    null,
                    (0, _.zw)(e.$t("main.titles.aboutUs")),
                    1
                  ),
                  (0, r._)(
                    "span",
                    null,
                    (0, _.zw)(e.$t("main.text.aboutUs")),
                    1
                  ),
                ]
              ),
              (0, r._)(
                "div",
                {
                  class: "disclaimer rules",
                  onClick: t[2] || (t[2] = (e) => this.$router.push("/rules")),
                },
                [
                  (0, r._)("p", null, (0, _.zw)(e.$t("main.titles.rules")), 1),
                  (0, r._)("span", null, (0, _.zw)(e.$t("main.text.rules")), 1),
                ]
              ),
              _e,
            ])
          );
        }
        var ke = {
          name: "Main_Page",
          components: { Auth_btn: X },
          data() {
            return {
              selected_dormitory: localStorage.getItem("defaultDormitory"),
            };
          },
          methods: {},
          computed: {
            isLoggedIn() {
              return J.Z.getAccessTokenFromCookie();
            },
            selector_bg() {
              return 1 == this.selected_dormitory
                ? "dorm-1"
                : 2 == this.selected_dormitory
                ? "dorm-2"
                : 3 == this.selected_dormitory
                ? "dorm-3"
                : 4 == this.selected_dormitory
                ? "dorm-4"
                : "dorm-5";
            },
          },
          watch: {
            selected_dormitory(e) {
              localStorage.setItem("defaultDormitory", e);
            },
          },
        };
        const ye = (0, h.Z)(ke, [
          ["render", we],
          ["__scopeId", "data-v-278a0a33"],
        ]);
        var Ce = ye;
        const Ae = [
            {
              path: "/",
              name: "main",
              component: Ce,
              meta: { forLoggedIn: !1 },
            },
            {
              path: "/auth",
              name: "auth",
              component: oe,
              props: !0,
              meta: { forLoggedIn: !1 },
            },
            {
              path: "/info",
              name: "info",
              component: () => o.e(779).then(o.bind(o, 779)),
              meta: { forLoggedIn: !1 },
            },
            {
              path: "/info/create",
              name: "infoCreate",
              component: () => o.e(311).then(o.bind(o, 6311)),
              meta: { forLoggedIn: !0 },
            },
            {
              path: "/info/:id/edit",
              name: "infoEdit",
              component: () => o.e(938).then(o.bind(o, 4725)),
              meta: { forLoggedIn: !0 },
            },
            {
              path: "/advertisements",
              name: "advertisements",
              component: () => o.e(999).then(o.bind(o, 9999)),
              meta: { forLoggedIn: !1 },
            },
            {
              path: "/advertisements/create",
              name: "advertisementCreate",
              component: () => o.e(725).then(o.bind(o, 725)),
              meta: { forLoggedIn: !0 },
            },
            {
              path: "/advertisements/:id",
              name: "advertisement",
              component: () => o.e(874).then(o.bind(o, 8874)),
              meta: { forLoggedIn: !1 },
            },
            {
              path: "/advertisements/:id/edit",
              name: "advertisementEdit",
              component: () => o.e(426).then(o.bind(o, 1426)),
              meta: { forLoggedIn: !0 },
            },
            {
              path: "/works",
              name: "works",
              component: () => o.e(794).then(o.bind(o, 5794)),
              meta: { forLoggedIn: !1 },
            },
            {
              path: "/works/:id",
              name: "work",
              component: () => o.e(538).then(o.bind(o, 4538)),
              meta: { forLoggedIn: !1 },
            },
            {
              path: "/works/:id/edit",
              name: "workEdit",
              component: () => o.e(61).then(o.bind(o, 3061)),
              meta: { forLoggedIn: !0 },
            },
            {
              path: "/works/create",
              name: "workCreate",
              component: () => o.e(546).then(o.bind(o, 7546)),
              meta: { forLoggedIn: !0 },
            },
            {
              path: "/me",
              name: "me",
              component: () => o.e(457).then(o.bind(o, 457)),
              meta: { forLoggedIn: !0 },
            },
            {
              path: "/about-us",
              name: "aboutUs",
              component: () => o.e(455).then(o.bind(o, 0)),
              meta: { forLoggedIn: !1 },
            },
            {
              path: "/rules",
              name: "rules",
              component: () => o.e(890).then(o.bind(o, 7890)),
              meta: { forLoggedIn: !1 },
            },
          ],
          Ie = (0, F.p7)({ history: (0, F.PO)("/"), routes: Ae });
        Ie.beforeEach((e, t, o) => {
          const n = J.Z.getAccessTokenFromCookie(),
            r = e.meta?.forLoggedIn;
          r && !n ? o({ path: "/auth", query: { redirect: e.fullPath } }) : o();
        });
        var Ee = Ie,
          Se = (0, p.MT)({
            state() {
              return {
                user: {},
                accessToken: J.Z.getAccessTokenFromCookie(),
                userGoogleId: J.Z.getGoogleIdFromCookie(),
              };
            },
            getters: {
              user: ({ user: e }) => e,
              userGoogleId: ({ googleId: e }) => e,
              accessToken: ({ accessToken: e }) => e,
            },
            mutations: {
              changeUser(e, t) {
                e.user = t;
              },
              changeAccessToken(e, t) {
                e.accessToken = t;
              },
            },
            actions: {
              loadUser({ commit: e }, t) {
                (0, K.ZX)("users", t).then(
                  (t) => (e("changeUser", t), console.log(t), t)
                );
              },
            },
          }),
          Le = o(7853),
          Ue = JSON.parse(
            '{"global":{"dormitory":"Dormitory","room":"Room","advertisement":"Advertisement","work":"Work","save":"Save","cancel":"Cancel","select":"Select","info":"Information","loading":"Loading"},"footer":{"main":"Main","information":"Information","account":"Account"},"auth":{"authorize":"Log in","oops":"Oops","text":{"notLogged":"It looks like you are not logged in","functions":"To access these functions, you need to log in from your corporate email"}},"main":{"titles":{"greeting":"Greeting","search":"Search","aboutUs":"About Us","rules":"Rules"},"text":{"greeting":"Log in to Uni and use all the opportunities!","aboutUs":"A little bit about us and this project","rules":"Rules for using the platform"}},"profile":{"dateOfJoining":"Date of joining","show":"Show","logout":"Log out","createAdvertisement":"Create advertisement","createWork":"Create work","createInfo":"Create information"},"aboutUs":{"titles":{"aboutUs":"About Us","developers":"Developers","contacts":"Contacts","rules":"Rules"},"developers":{"oleksandr":"Oleksandr (2 course)","andriy":"Andriy (2 course)","viktor":"Viktor (2 course)","yaroslav":"Yaroslav (2 course)","oleksiy":"Oleksiy (3 course)","ihor":"Ihor (3 course)"},"contacts":{"communication":"Communicate with us"}},"rules":{"1":"Prohibited materials: Please do not post offensive, obscene, or illegal content.","2":"Accuracy and reliability: Only publish accurate information in your classifieds.","3":"Advertising and spam: Posting unsolicited commercial messages, advertisements, or spam is prohibited.","4":"Responsibility for your own content: Users are solely responsible for what they publish.","5":"The obligation to provide real data: When creating an account, you must provide true and accurate information about yourself. Accounts with fake information may be blocked. Your privacy is important to us and the data will be used in accordance with the privacy policy.","title":"Failure to comply with the rules of use of the platform will lead to account blocking and removal of ads"},"info":{"about":{"title":"Information","text":"On this page you can view data and events related to the selected dormitory"},"edit":"Edit information","create":"Create information"},"work":{"salary":"Salary","create":"Create new work","edit":"Edit work"},"post":{"create":"Create new advertisement","edit":"Edit advertisement"},"form":{"name":"Title","tag":"Category","salary":"Salary","description":"Description","submit":"Submit","cancel":"Cancel","title":"Title","content":"Description"}}'
          ),
          $e = JSON.parse(
            '{"global":{"dormitory":"Гуртожиток","room":"Кімната","advertisement":"Оголошення","work":"Робота","save":"Зберегти","cancel":"Скасувати","select":"Вибрати","info":"Інформація","loading":"Завантаження"},"footer":{"main":"Головна","information":"Інформація","account":"Акаунт"},"auth":{"authorize":"Авторизуватись","oops":"Ой","text":{"notLogged":"Схоже ви не авторизовані в системі","functions":"Для доступу до цих функцій, необхідно авторизуватись з корпоративної пошти"}},"main":{"titles":{"greeting":"Вітаю","search":"Шукати","aboutUs":"Про нас","rules":"Правила"},"text":{"greeting":"Увійди в Uni та використовуй всі можливості!","aboutUs":"Трохи про нас та цей проект","rules":"Правила користування платформою"}},"profile":{"dateOfJoining":"Дата приєднання","show":"Показати","logout":"Вийти","createAdvertisement":"Створити оголошення","createWork":"Створити роботу","createInfo":"Створити інформацію"},"aboutUs":{"titles":{"aboutUs":"Про нас","developers":"Розробники","contacts":"Контакти","rules":"Правила"},"developers":{"oleksandr":"Олександр (2 курс)","andriy":"Андрій (2 курс)","viktor":"Віктор (2 курс)","yaroslav":"Ярослав (2 курс)","oleksiy":"Олексій (3 курс)","ihor":"Ігор (3 курс)"},"contacts":{"communication":"Зв\'язатись з нами"}},"rules":{"1":"Заборонені матеріали: Будь ласка, не публікуйте образливий, непристойний чи нелегальний вміст.","2":"Точність та достовірність: Публікуйте лише достовірну інформацію в оголошеннях.","3":"Реклама та спам: Заборонено розміщення небажаних комерційних повідомлень, реклами чи спаму.","4":"Відповідальність за власний контент: Користувачі несуть особисту відповідальність за те, що вони публікують.","5":"Обов\'язок вказання реальних даних: При створенні облікового запису необхідно надавати правдиву та достовірну інформацію про себе. Облікові записи з фейковою інформацією можуть бути заблоковані. Ваша приватність важлива для нас, і дані будуть використані відповідно до політики конфіденційності.","title":"Недотримання правил користування платформи призведе до блокування акаунту та видалення оголошень"},"info":{"about":{"title":"Інформація","text":"На данній сторінці ви зможете переглянути дані та події пов\'язані з вибраним гуртожитком"},"edit":"Редагувати інформацію","create":"Створити інформацію"},"work":{"salary":"Заробітня плата","create":"Створити нову роботу","edit":"Редагувати роботу"},"post":{"create":"Створити нове оголошення","edit":"Редагувати оголошення"},"form":{"name":"Назва","tag":"Категорія","salary":"Заробітня плата","description":"Опис","submit":"Зберегти","cancel":"Скасувати","title":"Назва","content":"Опис"}}'
          );
        const Pe = (0, Le.o)({
          locale:
            {
              NODE_ENV: "production",
              VUE_APP_DATABASE_API_URL: "http://localhost:8000/api",
              VUE_APP_FIREBASE_API_KEY:
                "AIzaSyBIzYOOUnnuYbJtUv9ryHOcdUf8NxfpOrM",
              VUE_APP_FIREBASE_APP_ID:
                "1:184955882517:web:c6476a7ec3ea37da84921c",
              VUE_APP_FIREBASE_AUTH_DOMAIN:
                "uzhnu-campus-7c7eb.firebaseapp.com",
              VUE_APP_FIREBASE_MESSAGE_SENDER_ID: "184955882517",
              VUE_APP_FIREBASE_PROJECT_ID: "uzhnu-campus-7c7eb",
              VUE_APP_FIREBASE_STORAGE_BUCKET: "uzhnu-campus-7c7eb.appspot.com",
              VUE_APP_GOOGLE_CLIENT_ID:
                "687895112030-98oht0ilvp1u0defu2vnb475h844352p.apps.googleusercontent.com",
              BASE_URL: "/",
            }.VUE_APP_I18N_LOCALE || "ua",
          fallbackLocale:
            {
              NODE_ENV: "production",
              VUE_APP_DATABASE_API_URL: "http://localhost:8000/api",
              VUE_APP_FIREBASE_API_KEY:
                "AIzaSyBIzYOOUnnuYbJtUv9ryHOcdUf8NxfpOrM",
              VUE_APP_FIREBASE_APP_ID:
                "1:184955882517:web:c6476a7ec3ea37da84921c",
              VUE_APP_FIREBASE_AUTH_DOMAIN:
                "uzhnu-campus-7c7eb.firebaseapp.com",
              VUE_APP_FIREBASE_MESSAGE_SENDER_ID: "184955882517",
              VUE_APP_FIREBASE_PROJECT_ID: "uzhnu-campus-7c7eb",
              VUE_APP_FIREBASE_STORAGE_BUCKET: "uzhnu-campus-7c7eb.appspot.com",
              VUE_APP_GOOGLE_CLIENT_ID:
                "687895112030-98oht0ilvp1u0defu2vnb475h844352p.apps.googleusercontent.com",
              BASE_URL: "/",
            }.VUE_APP_I18N_FALLBACK_LOCALE || "ua",
          messages: { en: Ue, ua: $e },
        });
        var Oe = Pe,
          xe = o(3494),
          ze = o(7749),
          De = o(8539),
          Te = o(8429),
          Re = o(4551);
        xe.vI.add(
          De.BC0,
          De.acZ,
          De.eFW,
          Te.RrC,
          De.r8p,
          De.WV2,
          Te.FU$,
          Re.Zzi,
          De.IwR,
          De.zd8,
          Re.Uv8,
          De.j1w,
          De.P88,
          De.QSU,
          De.$aW
        ),
          (0, n.ri)(N)
            .use(Se)
            .use(Ee)
            .use(Oe)
            .component("font-awesome-icon", ze.GN)
            .mount("#app");
      },
      72: function (e, t) {
        class o {
          static setAccessTokenCookie(e, t) {
            const o = `access_token=${e}; expires=${new Date(
              t
            ).toUTCString()}; path=/;`;
            "https:" === window.location.protocol
              ? (document.cookie = `${o} Secure; SameSite=None;`)
              : (document.cookie = o);
          }
          static getAccessTokenFromCookie() {
            const e = "access_token=",
              t = decodeURIComponent(document.cookie),
              o = t.split(";");
            for (let n = 0; n < o.length; n++) {
              let t = o[n].trim();
              if (0 === t.indexOf(e)) return t.substring(e.length, t.length);
            }
            return null;
          }
          static removeAccessTokenCookie() {
            const e = new Date(1970, 0, 1).toUTCString();
            "https:" === window.location.protocol
              ? (document.cookie = `access_token=; expires=${e}; path=/; Secure; SameSite=None;`)
              : (document.cookie = `access_token=; expires=${e}; path=/;`);
          }
          static setGoogleIdCookie(e, t) {
            const o = `google_id=${e}; expires=${new Date(
              t
            ).toUTCString()}; path=/;`;
            "https:" === window.location.protocol
              ? (document.cookie = `${o} Secure; SameSite=None;`)
              : (document.cookie = o);
          }
          static getGoogleIdFromCookie() {
            const e = "google_id=",
              t = decodeURIComponent(document.cookie),
              o = t.split(";");
            for (let n = 0; n < o.length; n++) {
              let t = o[n].trim();
              if (0 === t.indexOf(e)) return t.substring(e.length, t.length);
            }
            return null;
          }
          static removeGoogleIdCookie() {
            const e = new Date(1970, 0, 1).toUTCString();
            "https:" === window.location.protocol
              ? (document.cookie = `access_token=; expires=${e}; path=/; Secure; SameSite=None;`)
              : (document.cookie = `access_token=; expires=${e}; path=/;`);
          }
          static setUserCookie(e, t) {
            try {
              const o = JSON.stringify(e),
                n = encodeURIComponent(o),
                r = `user=${n}; expires=${new Date(t).toUTCString()}; path=/;`;
              "https:" === window.location.protocol
                ? (document.cookie = `${r} Secure; SameSite=None;`)
                : (document.cookie = r);
            } catch (o) {
              console.error("Error while setting user cookie:", o);
            }
          }
          static getUserFromCookie() {
            const e = "user=",
              t = decodeURIComponent(document.cookie),
              o = t.split(";");
            for (let r = 0; r < o.length; r++) {
              let t = o[r].trim();
              if (0 === t.indexOf(e))
                try {
                  const o = t.substring(e.length, t.length),
                    n = decodeURIComponent(o);
                  return JSON.parse(n);
                } catch (n) {
                  return (
                    console.error("Error while getting user from cookie:", n),
                    null
                  );
                }
            }
            return null;
          }
          static removeUserCookie() {
            const e = new Date(1970, 0, 1).toUTCString();
            "https:" === window.location.protocol
              ? (document.cookie = `user=; expires=${e}; path=/; Secure; SameSite=None;`)
              : (document.cookie = `user=; expires=${e}; path=/;`);
          }
        }
        t.Z = o;
      },
      3651: function (e, t, o) {
        e.exports = o.p + "test-repo/img/browse.94b3f240.svg";
      },
      4729: function (e, t, o) {
        e.exports = o.p + "./img/info.1e400205.svg";
      },
      5943: function (e, t, o) {
        e.exports = o.p + "./img/work.412807d1.svg";
      },
    },
    t = {};
  function o(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var a = (t[n] = { exports: {} });
    return e[n].call(a.exports, a, a.exports, o), a.exports;
  }
  (o.m = e),
    (function () {
      var e = [];
      o.O = function (t, n, r, a) {
        if (!n) {
          var i = 1 / 0;
          for (u = 0; u < e.length; u++) {
            (n = e[u][0]), (r = e[u][1]), (a = e[u][2]);
            for (var s = !0, c = 0; c < n.length; c++)
              (!1 & a || i >= a) &&
              Object.keys(o.O).every(function (e) {
                return o.O[e](n[c]);
              })
                ? n.splice(c--, 1)
                : ((s = !1), a < i && (i = a));
            if (s) {
              e.splice(u--, 1);
              var l = r();
              void 0 !== l && (t = l);
            }
          }
          return t;
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
        e[u] = [n, r, a];
      };
    })(),
    (function () {
      o.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return o.d(t, { a: t }), t;
      };
    })(),
    (function () {
      o.d = function (e, t) {
        for (var n in t)
          o.o(t, n) &&
            !o.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      (o.f = {}),
        (o.e = function (e) {
          return Promise.all(
            Object.keys(o.f).reduce(function (t, n) {
              return o.f[n](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      o.u = function (e) {
        return (
          "js/" +
          e +
          "." +
          {
            61: "8225dca8",
            311: "3db7a6a1",
            426: "cec00a62",
            455: "8443d989",
            457: "66833354",
            538: "67433da1",
            546: "0af5677e",
            725: "8698a970",
            779: "0635b09c",
            794: "4f6fa567",
            874: "d70cb545",
            890: "a4856427",
            938: "d1a0b88f",
            999: "67017b89",
          }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      o.miniCssF = function (e) {
        return (
          "css/" +
          e +
          "." +
          {
            61: "5a4d25d1",
            311: "f9e4094b",
            426: "707fd305",
            455: "b8b90c00",
            457: "fd7488cb",
            538: "82abfde2",
            546: "869e9b41",
            725: "c701cfce",
            779: "899d16f4",
            794: "388b4d32",
            874: "89d9ed86",
            890: "a989ce70",
            938: "f8b33f45",
            999: "8d978301",
          }[e] +
          ".css"
        );
      };
    })(),
    (function () {
      o.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "unitrade:";
      o.l = function (n, r, a, i) {
        if (e[n]) e[n].push(r);
        else {
          var s, c;
          if (void 0 !== a)
            for (
              var l = document.getElementsByTagName("script"), u = 0;
              u < l.length;
              u++
            ) {
              var d = l[u];
              if (
                d.getAttribute("src") == n ||
                d.getAttribute("data-webpack") == t + a
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((c = !0),
            (s = document.createElement("script")),
            (s.charset = "utf-8"),
            (s.timeout = 120),
            o.nc && s.setAttribute("nonce", o.nc),
            s.setAttribute("data-webpack", t + a),
            (s.src = n)),
            (e[n] = [r]);
          var m = function (t, o) {
              (s.onerror = s.onload = null), clearTimeout(g);
              var r = e[n];
              if (
                (delete e[n],
                s.parentNode && s.parentNode.removeChild(s),
                r &&
                  r.forEach(function (e) {
                    return e(o);
                  }),
                t)
              )
                return t(o);
            },
            g = setTimeout(
              m.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = m.bind(null, s.onerror)),
            (s.onload = m.bind(null, s.onload)),
            c && document.head.appendChild(s);
        }
      };
    })(),
    (function () {
      o.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      o.p = "/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var e = function (e, t, o, n, r) {
            var a = document.createElement("link");
            (a.rel = "stylesheet"), (a.type = "text/css");
            var i = function (o) {
              if (((a.onerror = a.onload = null), "load" === o.type)) n();
              else {
                var i = o && ("load" === o.type ? "missing" : o.type),
                  s = (o && o.target && o.target.href) || t,
                  c = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + s + ")"
                  );
                (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.type = i),
                  (c.request = s),
                  a.parentNode && a.parentNode.removeChild(a),
                  r(c);
              }
            };
            return (
              (a.onerror = a.onload = i),
              (a.href = t),
              o
                ? o.parentNode.insertBefore(a, o.nextSibling)
                : document.head.appendChild(a),
              a
            );
          },
          t = function (e, t) {
            for (
              var o = document.getElementsByTagName("link"), n = 0;
              n < o.length;
              n++
            ) {
              var r = o[n],
                a = r.getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (a === e || a === t)) return r;
            }
            var i = document.getElementsByTagName("style");
            for (n = 0; n < i.length; n++) {
              (r = i[n]), (a = r.getAttribute("data-href"));
              if (a === e || a === t) return r;
            }
          },
          n = function (n) {
            return new Promise(function (r, a) {
              var i = o.miniCssF(n),
                s = o.p + i;
              if (t(i, s)) return r();
              e(n, s, null, r, a);
            });
          },
          r = { 143: 0 };
        o.f.miniCss = function (e, t) {
          var o = {
            61: 1,
            311: 1,
            426: 1,
            455: 1,
            457: 1,
            538: 1,
            546: 1,
            725: 1,
            779: 1,
            794: 1,
            874: 1,
            890: 1,
            938: 1,
            999: 1,
          };
          r[e]
            ? t.push(r[e])
            : 0 !== r[e] &&
              o[e] &&
              t.push(
                (r[e] = n(e).then(
                  function () {
                    r[e] = 0;
                  },
                  function (t) {
                    throw (delete r[e], t);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var e = { 143: 0 };
      (o.f.j = function (t, n) {
        var r = o.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var a = new Promise(function (o, n) {
              r = e[t] = [o, n];
            });
            n.push((r[2] = a));
            var i = o.p + o.u(t),
              s = new Error(),
              c = function (n) {
                if (o.o(e, t) && ((r = e[t]), 0 !== r && (e[t] = void 0), r)) {
                  var a = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = a),
                    (s.request = i),
                    r[1](s);
                }
              };
            o.l(i, c, "chunk-" + t, t);
          }
      }),
        (o.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, n) {
          var r,
            a,
            i = n[0],
            s = n[1],
            c = n[2],
            l = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in s) o.o(s, r) && (o.m[r] = s[r]);
            if (c) var u = c(o);
          }
          for (t && t(n); l < i.length; l++)
            (a = i[l]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return o.O(u);
        },
        n = (self["webpackChunkunitrade"] = self["webpackChunkunitrade"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = o.O(void 0, [998], function () {
    return o(310);
  });
  n = o.O(n);
})();
//# sourceMappingURL=app.c8fe6023.js.map
