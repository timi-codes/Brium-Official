(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    146(n, t, e) {
      
      e.r(t);
      const o = e(153);
        const a = e.n(o);
        const i = e(0);
        const r = e.n(i);
        const c = e(155);
        const f = e(151);
        const s = e(152);
      function l() {
        const n = a()(['font-size: 15px; max-width: 75%']);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }
      function d() {
        const n = a()(['font-size: 30px; max-width: 50%']);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }
      function u() {
        const n = a()(['font-size: 21px;']);
        return (
          (u = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        const n = a()(['font-size: 50px;']);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function m() {
        const n = a()(['font-size: 100px;']);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      function b() {
        const n = a()(['font-size: 200px;']);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      const g = s.h.colors;
        const h = s.h.fonts;
        const x = Object(f.c)(s.d).withConfig({
          displayName: 'sc-404__MainContainer',
          componentId: 'sc-1fs65wn-0'
        })(
          ['', ';flex-direction:column;height:100vh !important;'],
          s.g.flexCenter
        );
        const y = f.c.h1.withConfig({
          displayName: 'sc-404__Title',
          componentId: 'sc-1fs65wn-1'
        })(
          [
            'color:',
            ';font-family:',
            ';font-size:10vw;font-weight:800;line-height:1;',
            ' ',
            ';'
          ],
          g.blue,
          h.CircularStd,
          s.f.bigDesktop(b()),
          s.f.phablet(m())
        );
        const w = f.c.h2.withConfig({
          displayName: 'sc-404__Subtitle',
          componentId: 'sc-1fs65wn-2'
        })(
          [
            'font-size:1.5vw;font-weight:800;font-family:',
            ';margin-top:30px;',
            ';',
            ';'
          ],
          h.CircularStd,
          s.f.bigDesktop(p()),
          s.f.phablet(u())
        );
        const v = f.c.p.withConfig({
          displayName: 'sc-404__Caption',
          componentId: 'sc-1fs65wn-3'
        })(
          [
            'font-size:1.1vw;font-family:',
            ';color:',
            ';max-width:30%;text-align:center;',
            ';',
            ';'
          ],
          h.Lato,
          g.blueGrey,
          s.f.bigDesktop(d()),
          s.f.phablet(l())
        );
        const C = Object(f.c)(c.a).withConfig({
          displayName: 'sc-404__HomeButton',
          componentId: 'sc-1fs65wn-4'
        })(['', ';margin-top:37px;'], s.g.bigButton);
      t.default = function() {
        return r.a.createElement(
          x,
          { id: 'content' },
          r.a.createElement(s.c, null),
          r.a.createElement(y, null, 'Oops!'),
          r.a.createElement(w, null, '404 - PAGE NOT FOUND'),
          r.a.createElement(
            v,
            null,
            'This page you are looking for might have been removed had its name changed or its temporarily unavailable'
          ),
          r.a.createElement(C, { to: '/' }, 'Go Home')
        );
      };
    },
    152(n, t, e) {
      
      const o = {
          colors: {
            darkBlue: 'rgba(20, 112, 219, 0.95)',
            lightBlue: 'rgba(20, 112, 219, 0.8075)',
            yellow: '#FBB837',
            darkGrey: '#3e3e3e',
            lightGrey: '#A5A5A5',
            blueGrey: '#4F5C66',
            slate: '#FBF2F2',
            black: '#000000',
            lightNavy: '#E5EFFB',
            offWhite: 'rgba(255, 255, 255, 0.7)',
            offsetWhite: 'rgba(255, 255, 255, 0.36)',
            white: '#ffffff',
            blue: '#1470DB',
            neutral: '#F1F4F9'
          },
          fonts: {
            CircularStd:
              'CircularStd, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
            Lato:
              'Lato, Roboto, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace'
          },
          fontSizes: {
            xsmall: '12px',
            smallish: '13px',
            small: '14px',
            medium: '16px',
            large: '18px',
            xlarge: '20px',
            xxlarge: '26px',
            h3: '55px'
          },
          easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
          navHeight: '70px',
          borderRadius: '5px',
          navScrollHeight: '80px',
          hamburgerWidth: 22,
          margin: '20px',
          hamBefore: 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in',
          hamBeforeActive: 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s',
          hamAfter:
            'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          hamAfterActive:
            'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
        };
        const a = e(153);
        const i = e.n(a);
        const r = e(151);
        const c = (e(79),
        e(55),
        e(35),
        e(199),
        {
          giant: 1440,
          bigDesktop: 1200,
          desktop: 1e3,
          tablet: 768,
          thone: 600,
          phablet: 480,
          phone: 376,
          tiny: 330
        });
        const f = Object.keys(c).reduce(function(n, t) {
          const e = c[t] / 16;
          return (
            (n[t] = function() {
              return Object(r.b)(
                ['@media (max-width:', 'em){', ';}'],
                e,
                r.b.apply(void 0, arguments)
              );
            }),
            n
          );
        }, {});
        const s = e(160);
        const l = e.n(s);
        const d = (e(161), e(162));
        const u = e.n(d);
        const p = e(163);
        const m = e.n(p);
        const b = e(164);
        const g = e.n(b);
        const h = (e(165), e(166));
        const x = e.n(h);
        const y = (e(167), e(168));
        const w = e.n(y);
        const v = e(169);
        const C = e.n(v);
        const k = e(170);
        const S = e.n(k);
        const B = (e(171), e(172));
        const z = e.n(B);
        const j = (e(173), e(174));
        const O = e.n(j);
        const F = e(175);
        const N = e.n(F);
        const E = e(176);
        const M = e.n(E);
        const G = (e(177), e(178));
        const I = e.n(G);
        const R = (e(179), e(180));
        const _ = e.n(R);
        const A = e(181);
        const L = e.n(A);
        const q = e(182);
        const D = e.n(q);
        const T = (e(183), e(184));
        const H = e.n(T);
      function P() {
        const n = i()(['font-size: ', ';']);
        return (
          (P = function() {
            return n;
          }),
          n
        );
      }
      function W() {
        const n = i()([
          "\n  @font-face {\n    font-family: 'CircularStd';\n    src: url(",
          ');\n    src: url(',
          "?#iefix) format('embedded-opentype'),\n    url(",
          ") format('woff'),\n    url(",
          ") format('truetype'),\n    url(",
          "#bcc26993292869431e54c666aafa8fcd) format('svg');\n    font-weight: 800;\n    font-style: normal;\n    font-display: auto;\n  }\n\n  @font-face {\n    font-family: 'CircularStd';\n    src: url(",
          ');\n    src: url(',
          "?#iefix) format('embedded-opentype'),\n    url(",
          ") format('woff'),\n    url(",
          ") format('truetype'),\n    url(",
          "#bcc26993292869431e54c666aafa8fcd) format('svg');\n    font-weight: 600;\n    font-style: normal;\n    font-display: auto;\n  }\n\n  @font-face {\n    font-family: 'CircularStd';\n    src: url(",
          ');\n    src: url(',
          "?#iefix) format('embedded-opentype'),\n    url(",
          ") format('woff'),\n    url(",
          ") format('truetype'),\n    url(",
          "#bcc26993292869431e54c666aafa8fcd) format('svg');\n    font-weight: 500;\n    font-style: normal;\n    font-display: auto;\n  }\n\n  @font-face {\n    font-family: 'CircularStd';\n    src: url(",
          ');\n    src: url(',
          "?#iefix) format('embedded-opentype'),\n    url(",
          ") format('woff'),\n    url(",
          ") format('truetype'),\n    url(",
          "#bcc26993292869431e54c666aafa8fcd) format('svg');\n    font-weight: 400;\n    font-style: normal;\n    font-dispaly: auto;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    src: url(",
          ") format('truetype');\n    font-weight: 100;\n    font-style: normal;\n    font-dispaly: auto;\n  }\n\n  html{\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    width: 100%;\n  }\n\n  *,\n  *:before,\n  *:after {\n    margin:0;\n    padding:0;\n    box-sizing: inherit;\n  }\n\n  body{\n    margin:0;\n    padding:0;\n    width: 100%;\n    z-index: 0;\n    min-height:100%;\n    overflow-x: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    background-color: ",
          ';\n    color: ',
          ';\n    line-height: 1.3;\n    font-family: ',
          ';\n    font-size: ',
          ';\n    ',
          '\n\n    &.hidden {\n      overflow: hidden;\n    }\n\n    &.blur {\n      overflow: hidden;\n      #root > .container > * {\n        filter: blur(5px) brightness(0.7);\n        transition: ',
          ';\n        pointer-events: none;\n        user-select: none;\n      }\n    }\n  }\n\n  ::selection {\n    background-color: ',
          ';\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    font-weight: 600;\n    color: ',
          ';\n    margin: 0 0 10px 0;\n  }\n\n  #root {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    grid-template-columns: 100%;\n  }\n\n\n  img {\n    width: 100%;\n    max-width: 100%;\n    vertical-align: middle;\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n    fill: currentColor;\n    vertical-align: middle;\n  }\n\n  a {\n    display: inline-block;\n    text-decoration: none;\n    text-decoration-skip-ink: auto;\n    color: inherit;\n    position: relative;\n    transition: ',
          ';\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n      color: ',
          ';\n      outline: 0;\n    }\n  }\n\n  button {\n    cursor: pointer;\n    border: 0;\n    border-radius: 0;\n\n    &:focus,\n    &:active {\n      outline-color: ',
          ';\n    }\n  }\n\n  input, textarea {\n    border-radius: 0;\n    outline: 0;\n    color: ',
          ';\n    &:focus {\n      outline: 0;\n    }\n    &::placeholder {\n    }\n    &:focus,\n    &:active {\n      &::placeholder {\n        ',
          '\n      }\n    }\n  }\n\n  p {\n    margin: 0 0 15px 0;\n  }\n\n  ul, ol {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n\n  .gatsby-image-outer-wrapper {\n    height: 100%;\n  }\n\n  .fadeup-enter {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms ',
          ', transform 300ms ',
          ';\n  }\n\n  .fadeup-enter-active {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms ',
          ', transform 300ms ',
          ';\n  }\n\n  .fadedown-enter {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms ',
          ', transform 300ms ',
          ';\n  }\n\n  .fadedown-enter-active {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms ',
          ', transform 300ms ',
          ';\n  }\n\n  .fade-enter {\n    opacity: 0.01;\n    transition: opacity 1000ms ',
          ';\n  }\n\n  .fade-enter-active {\n    opacity: 1;\n    transition: opacity 1000ms ',
          ';\n  }\n'
        ]);
        return (
          (W = function() {
            return n;
          }),
          n
        );
      }
      const Y = o.colors;
        const J = o.fontSizes;
        const U = o.fonts;
        const Q = Object(r.a)(
          W(),
          l.a,
          l.a,
          g.a,
          m.a,
          u.a,
          x.a,
          x.a,
          S.a,
          C.a,
          w.a,
          I.a,
          I.a,
          D.a,
          L.a,
          _.a,
          z.a,
          z.a,
          M.a,
          N.a,
          O.a,
          H.a,
          Y.white,
          Y.slate,
          U.CircularStd,
          J.xlarge,
          f.phablet(P(), J.large),
          o.transition,
          Y.yellow,
          Y.black,
          o.transition,
          Y.white,
          Y.blue,
          Y.darkGrey,
          '',
          o.easing,
          o.easing,
          o.easing,
          o.easing,
          o.easing,
          o.easing,
          o.easing,
          o.easing,
          o.easing,
          o.easing
        );
      e(186);
      function K() {
        const n = i()(['padding: 0 25px;']);
        return (
          (K = function() {
            return n;
          }),
          n
        );
      }
      function V() {
        const n = i()(['padding: 0 50px;']);
        return (
          (V = function() {
            return n;
          }),
          n
        );
      }
      function X() {
        const n = i()(['padding: 0 100px;']);
        return (
          (X = function() {
            return n;
          }),
          n
        );
      }
      const Z = o.colors;
        const $ = o.fontSizes;
        const nn = o.fonts;
        const tn = {
          flexCenter: Object(r.b)([
            'display:flex;justify-content:center;align-items:center;'
          ]),
          flexBetween: Object(r.b)([
            'display:flex;justify-content:space-between;align-items:flex-start;'
          ]),
          outline: Object(r.b)(['outline:1px solid red;']),
          link: Object(r.b)(
            [
              'display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:',
              ';cursor:pointer;&:hover,&:active,&:focus{color:',
              ';outline:0;}'
            ],
            o.transition,
            Z.lightGrey
          ),
          footerLink: Object(r.b)(
            [
              'display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:',
              ';cursor:pointer;color:',
              ';&:hover,&:focus,&:active{color:',
              ";outline:0;&:after{width:100%;}}&:after{content:'';display:block;width:0;height:1px;position:relative;bottom:0.5em;background-color:",
              ';transition:',
              ';}'
            ],
            o.transition,
            Z.white,
            Z.white,
            Z.white,
            o.transition
          ),
          smallButton: Object(r.b)(
            [
              'color:',
              ';background-color:',
              ';font-size:',
              ';font-family:',
              ';padding:0 17px;text-shadow:0 1px 1px rgba(255,255,255,0.57);line-height:1;text-decoration:none;cursor:pointer;transition:',
              ';&:hover,&:focus,&:active{color:rgba(0,0,0,0.5);mix-blend-mode:multiply;}&:after{display:none !important;}'
            ],
            Z.darkGrey,
            Z.yellow,
            $.smallish,
            nn.CircularStd,
            o.transition
          ),
          bigButton: Object(r.b)(
            [
              'color:',
              ';background-color:',
              ';border-radius:',
              ';padding:18px 37px;font-size:',
              ';font-weight:600;text-shadow:0 1px 1px rgba(255,255,255,0.57);font-family:',
              ';line-height:1;text-decoration:none;cursor:pointer;text-transform:uppercase;&:hover,&:focus,&:active{color:rgba(0,0,0,0.5);mix-blend-mode:multiply;svg path{fill:rgba(0,0,0,0.5) !important;filter:drop-shadow(0 1px 1px rgba(255,255,255,0.57)) !important;mix-blend-mode:multiply;}}&:after{display:none !important;}}'
            ],
            Z.darkGrey,
            Z.yellow,
            o.borderRadius,
            $.small,
            nn.CircularStd
          ),
          sidePadding: Object(r.b)(
            ['padding:0 150px;', ';', ';', ';'],
            f.desktop(X()),
            f.tablet(V()),
            f.phablet(K())
          )
        };
        const en = o.colors;
        const on = r.c.div.withConfig({
          displayName: 'Divider',
          componentId: 'sc-1ja6ubg-0'
        })(
          ['height:1px;width:100%;background-color:', ';grid-column:1 / -1;'],
          en.offsetWhite
        );
        const an = r.c.main.withConfig({
          displayName: 'Main',
          componentId: 'ysvzwx-0'
        })(['margin:0 auto;width:100%;']);
        const rn = r.c.section.withConfig({
          displayName: 'Section',
          componentId: 'sc-9xqsmn-0'
        })(['margin:45px 0;']);
        const cn = o.fontSizes;
        const fn = o.fonts;
        const sn = r.c.button.withConfig({
          displayName: 'Button',
          componentId: 'sc-5oaty5-0'
        })(
          [
            'font-size:',
            ';font-family:',
            ';line-height:1;text-decoration:none;cursor:pointer;transition:',
            ';&:hover,&:focus,&:active{outline:none;}&:after{display:none !important;}'
          ],
          cn.smallish,
          fn.CircularStd,
          o.transition
        );
      e.d(t, 'h', function() {
        return o;
      }),
        e.d(t, 'c', function() {
          return Q;
        }),
        e.d(t, 'g', function() {
          return tn;
        }),
        e.d(t, 'f', function() {
          return f;
        }),
        e.d(t, 'd', function() {
          return an;
        }),
        e.d(t, 'a', function() {
          return sn;
        }),
        e.d(t, 'e', function() {
          return rn;
        }),
        e.d(t, 'b', function() {
          return on;
        });
    },
    155(n, t, e) {
      
      e.d(t, 'b', function() {
        return l;
      });
      const o = e(0);
        const a = e.n(o);
        const i = e(4);
        const r = e.n(i);
        const c = e(33);
        const f = e.n(c);
      e.d(t, 'a', function() {
        return f.a;
      });
      e(159);
      const s = a.a.createContext({});
        var l = function(n) {
          return a.a.createElement(s.Consumer, null, function(t) {
            return n.data || (t[n.query] && t[n.query].data)
              ? (n.render || n.children)(n.data ? n.data.data : t[n.query].data)
              : a.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      l.propTypes = {
        data: r.a.object,
        query: r.a.string.isRequired,
        render: r.a.func,
        children: r.a.func
      };
    },
    159(n, t, e) {
      let o;
      n.exports = ((o = e(189)) && o.default) || o;
    },
    160(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Black-faf6412f40aa21da14fc685a0a610d6e.eot`;
    },
    161(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Black-80051a196a59e2d0a20f13e18d7b8d4b.otf`;
    },
    162(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Black-263293c65cc2f4b6f673f423898d2f0b.svg`;
    },
    163(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Black-c885948f6112a185e0e6c79963826882.ttf`;
    },
    164(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Black-59880bb792378f77deca117ea6b17567.woff`;
    },
    165(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Black-94a505bb1e062b41273a8ea77777a3e7.woff2`;
    },
    166(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Bold-e66cd4391be238164ba3fd7954ddddc4.eot`;
    },
    167(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Bold-e7d8d6236925285b4445f933aebb68f3.otf`;
    },
    168(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Bold-b4c1f01a6535abf9385215cfa92277e5.svg`;
    },
    169(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Bold-ce2a6c4154de87815e8971d21a987403.ttf`;
    },
    170(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Bold-1ced22ee6d45bdd05a5383fd9dbd1b43.woff`;
    },
    171(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Bold-97ca95083f8be0c5d7ee9907cfe28af1.woff2`;
    },
    172(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Book-d246520db4ce4615016723d4828da9bc.eot`;
    },
    173(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Book-4f84355b5c00ed31cdcf994158c0af39.otf`;
    },
    174(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Book-81002b22dbdd8b4fda534063cf6eaea6.svg`;
    },
    175(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Book-c43e9feb9ca817ae86afb47fd0ee4f94.ttf`;
    },
    176(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Book-ed76eb21560f0dc038cce0adfd65ea3c.woff`;
    },
    177(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Book-c8ae3e93ae16983c73a68cf537557de2.woff2`;
    },
    178(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Medium-3473fea88bf57aa66b797db5e2f03349.eot`;
    },
    179(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Medium-35be8fce7bdccf610b76528990f76136.otf`;
    },
    180(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Medium-e6af6d0cc0526e208f4e85d1a0171f82.svg`;
    },
    181(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Medium-46d551dfd0caa61f1332d7c477f584c2.ttf`;
    },
    182(n, t, e) {
      n.exports =
        `${e.p  }static/CircularStd-Medium-bb9a359afc17edc2c275b4212b8f2fd2.woff`;
    },
    183(n, t, e) {
      n.exports =
        `${e.p 
        }static/CircularStd-Medium-029c2e0e19032f6cdbef9042552e79fa.woff2`;
    },
    184(n, t, e) {
      n.exports =
        `${e.p  }static/Lato-Light-c8aec28487a8897701ec634bbcc566f7.ttf`;
    },
    189(n, t, e) {
      
      e.r(t);
      e(34);
      const o = e(0);
        const a = e.n(o);
        const i = e(4);
        const r = e.n(i);
        const c = e(57);
        const f = e(2);
        const s = function(n) {
          const t = n.location;
            const e = f.default.getResourcesForPathnameSync(t.pathname);
          return e
            ? a.a.createElement(
                c.a,
                Object.assign({ location: t, pageResources: e }, e.json)
              )
            : null;
        };
      (s.propTypes = {
        location: r.a.shape({ pathname: r.a.string.isRequired }).isRequired
      }),
        (t.default = s);
    }
  }
]);
// # sourceMappingURL=component---src-pages-404-js-31050b8e602d3ef6f825.js.map
