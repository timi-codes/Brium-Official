// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/timitejumola/WebProjects/Brium-Official/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/timitejumola/WebProjects/Brium-Official/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/timitejumola/WebProjects/Brium-Official/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-signup-js": () => import("/Users/timitejumola/WebProjects/Brium-Official/src/pages/signup.js" /* webpackChunkName: "component---src-pages-signup-js" */),
  "component---src-pages-success-js": () => import("/Users/timitejumola/WebProjects/Brium-Official/src/pages/success.js" /* webpackChunkName: "component---src-pages-success-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/timitejumola/WebProjects/Brium-Official/.cache/data.json")

