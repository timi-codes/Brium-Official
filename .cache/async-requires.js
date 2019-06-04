// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/codepreneur/WebstormProjects/Brium-Official/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-fare-estimator-js": () => import("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/fare-estimator.js" /* webpackChunkName: "component---src-pages-fare-estimator-js" */),
  "component---src-pages-index-js": () => import("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-ride-js": () => import("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/ride.js" /* webpackChunkName: "component---src-pages-ride-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/codepreneur/WebstormProjects/Brium-Official/.cache/data.json")

