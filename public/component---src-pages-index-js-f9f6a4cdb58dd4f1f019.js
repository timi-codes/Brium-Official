(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    148: function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t(153),
        i = t.n(r),
        a = t(0),
        o = t.n(a),
        l = t(198),
        p = t(157),
        c = t(151),
        u = t(152);
      function f() {
        var e = i()([
          '\n    padding: 18px 40px;\n    margin-top: 0px;\n    font-size: ',
          ';\n  '
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = i()([
          '\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 3rem 0;\n    grid-gap: 1.5rem;\n  '
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = i()(['\n    margin-top:4rem;\n    margin-bottom:3rem;\n  ']);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = i()(['\n  font-size: 13px;\n  display:none;\n  ']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = i()(['font-size: 13px;']);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = i()(['\n  font-size: 15px;\n  margin-top: 10px;\n  ']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = i()(['font-size: 13px;']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = i()(['\n    display: none;\n    ']);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = i()(['\n    font-size: 28px;\n  ']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = i()(['\n    font-size: 31px;\n  ']);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = i()(['display: none;']);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = i()([
          '\n    margin: 0;\n    grid-column: 1/-1;\n    text-align: center;\n    padding: 0px 40px;\n  '
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      var C = u.h.colors,
        _ = u.h.fontSizes,
        z = u.h.fonts,
        S = Object(c.c)(u.d).withConfig({
          displayName: 'pages__MainContainer',
          componentId: 'sc-14q0le5-0'
        })(['', ''], ''),
        q = c.c.div.withConfig({
          displayName: 'pages__LeftContent',
          componentId: 'sc-14q0le5-1'
        })(
          ['grid-area:main;margin-right:40px;padding-left:90px;', ';'],
          u.f.tablet(y())
        ),
        k = c.c.div.withConfig({
          displayName: 'pages__CardView',
          componentId: 'sc-14q0le5-2'
        })(
          [
            'height:430px;grid-area:card;background-color:white;border-radius:10px;margin-right:70px;padding:45px 30px 0 30px;-webkit-box-shadow:5px 4px 6px rgba(98,95,95,0.14);box-shadow:5px 4px 6px rgba(98,95,95,0.14);margin-bottom:-50px;',
            ';position:relative;'
          ],
          u.f.tablet(E())
        ),
        I = c.c.h1.withConfig({
          displayName: 'pages__Title',
          componentId: 'sc-14q0le5-3'
        })(
          [
            'font-family:',
            ';font-weight:600;line-height:103%;margin-bottom:10px;font-size:40px;color:',
            ';',
            ';',
            ';'
          ],
          z.CircularStd,
          C.white,
          u.f.phablet(b()),
          u.f.phone(v())
        ),
        N = c.c.h2.withConfig({
          displayName: 'pages__SubTitle',
          componentId: 'sc-14q0le5-4'
        })(
          ['font-family:', ';font-weight:600;color:', ';font-size:20px;', ';'],
          z.CircularStd,
          C.white,
          u.f.phablet(w())
        ),
        B = c.c.p.withConfig({
          displayName: 'pages__Caption',
          componentId: 'sc-14q0le5-5'
        })(
          [
            'font-size:1.3vw;font-family:',
            ';color:',
            ';',
            ';',
            ';margin-top:12px;line-height:130%;'
          ],
          z.CircularStd,
          C.offWhite,
          u.f.bigDesktop(x()),
          u.f.phablet(h())
        ),
        D = c.c.p.withConfig({
          displayName: 'pages__CaptionSignup',
          componentId: 'sc-14q0le5-6'
        })(
          [
            'font-size:1.2vw;font-family:',
            ';color:',
            ';',
            ';',
            ';margin-top:10px;line-height:130%;'
          ],
          z.CircularStd,
          C.offWhite,
          u.f.bigDesktop(g()),
          u.f.phablet(d())
        ),
        T = c.c.div.withConfig({
          displayName: 'pages__SignupContainer',
          componentId: 'sc-14q0le5-7'
        })(
          [
            'display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;grid-gap:3rem;justify-items:center;margin-top:7rem;',
            ' ',
            ';',
            ';'
          ],
          '',
          u.f.tablet(m()),
          u.f.phablet(s())
        ),
        W = c.c.div.withConfig({
          displayName: 'pages__SignupBox',
          componentId: 'sc-14q0le5-8'
        })(['']),
        j = c.c.a.withConfig({
          displayName: 'pages__SignupLink',
          componentId: 'sc-14q0le5-9'
        })(
          [
            'font-size:',
            ';padding:15px 24px;background:transparent;border:2px solid white;color:',
            ';font-weight:600;border-radius:',
            ';margin-top:20px;',
            ';svg{width:30px;height:15px;fill:white !important;margin-left:7px;transition:all 0.2s ease-in-out;}svg path{fill:white !important;}&:hover{svg{margin-left:12px;}}'
          ],
          _.smallish,
          C.white,
          u.h.borderRadius,
          u.f.phablet(f(), _.medium)
        );
      n.default = function() {
        return o.a.createElement(
          l.k,
          null,
          o.a.createElement(
            S,
            { id: 'content' },
            o.a.createElement(
              l.t,
              null,
              o.a.createElement(l.n, null),
              o.a.createElement(
                q,
                null,
                o.a.createElement(I, null, 'We will get you there'),
                o.a.createElement(
                  B,
                  null,
                  'Brium is a Transport Company with the aim to providing superior value to customers with meaningful, measurable value, efficient and comprehensive services.'
                ),
                o.a.createElement(
                  T,
                  null,
                  o.a.createElement(
                    W,
                    null,
                    o.a.createElement(N, null, 'Drive'),
                    o.a.createElement(
                      D,
                      null,
                      'At Brium, a flat rate applies to all rides and drivers get incentives on the platform'
                    ),
                    o.a.createElement(
                      j,
                      {
                        href: '/',
                        target: '_blank',
                        rel: 'nofollow noopener noreferrer'
                      },
                      'Signup to drive',
                      o.a.createElement(p.c, null)
                    )
                  ),
                  o.a.createElement(
                    W,
                    null,
                    o.a.createElement(N, null, 'Ride'),
                    o.a.createElement(
                      D,
                      null,
                      'Brium offers safe and affordable and rides to all destinations across the country'
                    ),
                    o.a.createElement(
                      j,
                      { href: '/ride', rel: 'nofollow noopener noreferrer' },
                      'Signup to ride',
                      o.a.createElement(p.c, null)
                    )
                  )
                )
              ),
              o.a.createElement(k, null, o.a.createElement(l.l, null))
            ),
            o.a.createElement(l.q, null),
            o.a.createElement(l.u, null),
            o.a.createElement(l.r, null),
            o.a.createElement(l.p, null),
            o.a.createElement(l.s, null)
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-f9f6a4cdb58dd4f1f019.js.map
