const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/timitejumola/WebProjects/Brium-Official/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/timitejumola/WebProjects/Brium-Official/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/timitejumola/WebProjects/Brium-Official/src/pages/index.js"))),
  "component---src-pages-signup-js": hot(preferDefault(require("/Users/timitejumola/WebProjects/Brium-Official/src/pages/signup.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/timitejumola/WebProjects/Brium-Official/src/pages/success.js")))
}

