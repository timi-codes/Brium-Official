(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    147: function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t(153),
        a = t.n(r),
        o = t(0),
        i = t.n(o),
        l = t(198),
        p = t(151),
        c = t(267),
        d = t.n(c),
        m = t(152);
      function u() {
        var e = a()(['\n      display: none;\n  ']);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = a()([
          '\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n    &:first-child {\n      display: none;\n    }\n  '
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = a()([
          '\n    margin: 0 auto;\n    margin-top: 90px;\n    position: relative;\n    box-shadow: none;\n  '
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      var x = Object(p.c)(m.d).withConfig({
          displayName: 'fare-estimator__MainContainer',
          componentId: 'ko6qxr-0'
        })(['', ''], ''),
        g = p.c.div.withConfig({
          displayName: 'fare-estimator__CardView',
          componentId: 'ko6qxr-1'
        })(
          [
            'width:350px;background-color:white;border-radius:10px;padding:30px 30px 30px 30px;-webkit-box-shadow:5px 4px 6px rgba(98,95,95,0.14);box-shadow:5px 4px 6px rgba(98,95,95,0.14);position:relative;left:0 !important;grid-column:1/2;grid-row:1 / 2;margin:110px 0px 40px 50px;',
            ';'
          ],
          m.f.phablet(f())
        ),
        w = p.c.div.withConfig({
          displayName: 'fare-estimator__TopContainer',
          componentId: 'ko6qxr-2'
        })(
          [
            'display:grid;grid-template-columns:350px 1fr;grid-template-rows:1fr;width:100%;',
            ';'
          ],
          m.f.phablet(s())
        ),
        h = p.c.div.withConfig({
          displayName: 'fare-estimator__MapContainer',
          componentId: 'ko6qxr-3'
        })(['grid-column:1/-1;grid-row:1 / 2;', ';'], m.f.phablet(u())),
        b = function(e) {
          var n = e.text;
          return i.a.createElement('div', null, n);
        },
        y = { center: { lat: 6.4391401, lng: 3.4291935 }, zoom: 16 },
        v = function(e) {
          var n = e.center,
            t = e.zoom;
          return i.a.createElement(
            h,
            { style: { height: '600px', width: '100%' } },
            i.a.createElement(
              d.a,
              {
                bootstrapURLKeys: {
                  key: 'AIzaSyAdW0SflTY4CQPSVIeEF_J4LupTyPeeag0'
                },
                defaultCenter: n,
                defaultZoom: t
              },
              i.a.createElement(b, {
                lat: 59.955413,
                lng: 30.337844,
                text: 'My Marker'
              })
            )
          );
        };
      n.default = function() {
        return i.a.createElement(
          l.k,
          null,
          i.a.createElement(
            x,
            null,
            i.a.createElement(l.n, { showBg: !0, primaryBtn: !0 }),
            i.a.createElement(
              w,
              null,
              i.a.createElement(v, y),
              i.a.createElement(g, null, i.a.createElement(l.d, null))
            ),
            i.a.createElement(l.c, null)
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-fare-estimator-js-43172ec1b2ef80965a72.js.map
