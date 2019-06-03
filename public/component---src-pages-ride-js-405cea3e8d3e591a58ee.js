(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    149(n, e, t) {
      
      t.r(e);
      t(158);
      const i = t(153);
        const r = t.n(i);
        const a = t(0);
        const o = t.n(a);
        const l = t(198);
        const c = t(157);
        const u = t(185);
        const f = t(151);
        const p = t(155);
        const d = t(152);
      function m() {
        const n = r()(['\n        margin-right: 0px;\n    ']);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      function s() {
        const n = r()(['\n      width: 60px;\n      padding: 17px 15px;\n    ']);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      function h() {
        const n = r()(['\n      font-size: 32px;\n  ']);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      function g() {
        const n = r()(['\n    padding: 0 20px;\n  ']);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function x() {
        const n = r()([
          '\n    flex-direction: row;\n    justify-content: space-between;\n  '
        ]);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      function w() {
        const n = r()(['\n   display: flex;\n   flex-direction: column;\n  ']);
        return (
          (w = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        const n = r()(['\n     width: 140px\n  ']);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function b() {
        const n = r()(['\n    margin-top: 20px\n  ']);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        const n = r()(['\n    max-width: 100%;\n    margin: 30px auto;\n  ']);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        const n = r()(['\n    margin-top: 10px;\n    max-width: 100%;\n  ']);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        const n = r()(['\n    font-size: 28px;\n  ']);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function C() {
        const n = r()(['\n    font-size: 31px;\n  ']);
        return (
          (C = function() {
            return n;
          }),
          n
        );
      }
      function I() {
        const n = r()([
          '\n    margin: 0;\n    grid-column: 1/-1;\n    text-align: center;\n    padding: 0px 40px;\n  '
        ]);
        return (
          (I = function() {
            return n;
          }),
          n
        );
      }
      const N = d.h.colors;
        const k = d.h.fonts;
        const j = Object(f.c)(d.d).withConfig({
          displayName: 'ride__MainContainer',
          componentId: 'sc-89i4v9-0'
        })(['', ''], '');
        const z = f.c.div.withConfig({
          displayName: 'ride__MainContent',
          componentId: 'sc-89i4v9-1'
        })(
          [
            'grid-column:1/-1;grid-row:2/-1;text-align:center;',
            ';margin:20px 0;'
          ],
          d.f.tablet(I())
        );
        const L = f.c.h1.withConfig({
          displayName: 'ride__Title',
          componentId: 'sc-89i4v9-2'
        })(
          [
            'font-family:',
            ';font-weight:600;line-height:103%;margin-bottom:10px;font-size:40px;color:',
            ';',
            ';',
            ';'
          ],
          k.CircularStd,
          N.white,
          d.f.phablet(C()),
          d.f.phone(_())
        );
        const S = f.c.p.withConfig({
          displayName: 'ride__Caption',
          componentId: 'sc-89i4v9-3'
        })(
          [
            'font-size:17px;font-family:',
            ';color:',
            ';max-width:39%;text-align:center;margin:50px auto;line-height:130%;',
            ';',
            ';'
          ],
          k.CircularStd,
          N.offWhite,
          d.f.phablet(y()),
          d.f.tablet(E())
        );
        const W = f.c.a.withConfig({
          displayName: 'ride__DownloadLink',
          componentId: 'sc-89i4v9-4'
        })(
          ['width:160px;margin-right:22px;', ';', ';'],
          d.f.tablet(b()),
          d.f.phablet(v())
        );
        const O = f.c.ul.withConfig({
          displayName: 'ride__DownloadItemList',
          componentId: 'sc-89i4v9-5'
        })(
          [
            'display:grid;grid-template-columns:repeat(2,auto);justify-content:center;',
            ';',
            ';'
          ],
          d.f.tablet(w()),
          d.f.phablet(x())
        );
        const D = Object(f.c)(l.b).withConfig({
          displayName: 'ride__EstimatorSection',
          componentId: 'sc-89i4v9-6'
        })(
          [
            'height:210px;display:flex;align-items:center;justify-content:center;',
            ';'
          ],
          d.f.phablet(g())
        );
        const G = f.c.div.withConfig({
          displayName: 'ride__TextContainer',
          componentId: 'sc-89i4v9-7'
        })(
          ['color:', ';h1{color:', ';font-size:40px;', ';}'],
          N.white,
          N.white,
          d.f.phablet(h())
        );
        const J = f.c.div.withConfig({
          displayName: 'ride__EstimatorInner',
          componentId: 'sc-89i4v9-8'
        })(
          [
            'display:flex;align-items:center;justify-content:center;p{margin-bottom:-2px;}svg{width:75px;border:6px solid white;padding:22px 20px;border-radius:50%;margin-left:90px;fill:white !important;transition:all 0.2s ease-in-out;',
            ';&:hover{margin-right:22px;border:6px solid ',
            ';',
            ';}}svg path{fill:',
            ' !important;}'
          ],
          d.f.phablet(s()),
          N.offWhite,
          d.f.phablet(m()),
          N.white
        );
        const M = f.c.div.withConfig({
          displayName: 'ride__HowtoSection',
          componentId: 'sc-89i4v9-9'
        })(['height:400px;background-color:', ';'], N.lightNavy);
      e.default = function() {
        return o.a.createElement(
          l.k,
          null,
          o.a.createElement(
            j,
            { id: 'content' },
            o.a.createElement(
              l.t,
              null,
              o.a.createElement(l.n, null),
              o.a.createElement(
                z,
                null,
                o.a.createElement(L, null, 'We will get you there'),
                o.a.createElement(
                  S,
                  null,
                  'Brium offers the best and affordable ride hailing service in the country. Our core aim is to spread happiness throughout your ride with us.'
                ),
                o.a.createElement(
                  O,
                  null,
                  u.downloadLink &&
                    u.downloadLink.map(function(n) {
                      const e = n.name;
                        const t = n.url;
                      return o.a.createElement(
                        'li',
                        { key: e },
                        o.a.createElement(
                          W,
                          {
                            href: t,
                            target: '_blank',
                            rel: 'nofollow noopener noreferrer',
                            'arial-label': e
                          },
                          e === 'Google'
                            ? o.a.createElement(c.f, null)
                            : o.a.createElement(c.b, null)
                        )
                      );
                    })
                )
              )
            ),
            o.a.createElement(l.q, null),
            o.a.createElement(
              D,
              { filename: 'estimator-banner-bg.png' },
              o.a.createElement(
                J,
                null,
                o.a.createElement(
                  G,
                  null,
                  o.a.createElement('p', null, 'Where to?'),
                  o.a.createElement('h1', null, 'Get a price Estimate')
                ),
                o.a.createElement(
                  p.a,
                  {
                    to: '/fare-estimator',
                    rel: 'nofollow noopener noreferrer'
                  },
                  o.a.createElement(c.c, null)
                )
              )
            ),
            o.a.createElement(l.r, null),
            o.a.createElement(M, null),
            o.a.createElement(l.f, null)
          )
        );
      };
    }
  }
]);
// # sourceMappingURL=component---src-pages-ride-js-405cea3e8d3e591a58ee.js.map
