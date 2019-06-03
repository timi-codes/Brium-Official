(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    147(e, n, t) {
      
      t.r(n);
      const r = t(153);
        const a = t.n(r);
        const o = t(0);
        const i = t.n(o);
        const l = t(198);
        const p = t(151);
        const c = t(267);
        const d = t.n(c);
        const m = t(152);
      function u() {
        const e = a()(['\n      display: none;\n  ']);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        const e = a()([
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
        const e = a()([
          '\n    margin: 0 auto;\n    margin-top: 90px;\n    position: relative;\n    box-shadow: none;\n  '
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      const x = Object(p.c)(m.d).withConfig({
          displayName: 'fare-estimator__MainContainer',
          componentId: 'ko6qxr-0'
        })(['', ''], '');
        const g = p.c.div.withConfig({
          displayName: 'fare-estimator__CardView',
          componentId: 'ko6qxr-1'
        })(
          [
            'width:350px;background-color:white;border-radius:10px;padding:30px 30px 30px 30px;-webkit-box-shadow:5px 4px 6px rgba(98,95,95,0.14);box-shadow:5px 4px 6px rgba(98,95,95,0.14);position:relative;left:0 !important;grid-column:1/2;grid-row:1 / 2;margin:110px 0px 40px 50px;',
            ';'
          ],
          m.f.phablet(f())
        );
        const w = p.c.div.withConfig({
          displayName: 'fare-estimator__TopContainer',
          componentId: 'ko6qxr-2'
        })(
          [
            'display:grid;grid-template-columns:350px 1fr;grid-template-rows:1fr;width:100%;',
            ';'
          ],
          m.f.phablet(s())
        );
        const h = p.c.div.withConfig({
          displayName: 'fare-estimator__MapContainer',
          componentId: 'ko6qxr-3'
        })(['grid-column:1/-1;grid-row:1 / 2;', ';'], m.f.phablet(u()));
        const b = function(e) {
          const n = e.text;
          return i.a.createElement('div', null, n);
        };
        const y = { center: { lat: 6.4391401, lng: 3.4291935 }, zoom: 16 };
        const v = function(e) {
          const n = e.center;
            const t = e.zoom;
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
// # sourceMappingURL=component---src-pages-fare-estimator-js-43172ec1b2ef80965a72.js.map
