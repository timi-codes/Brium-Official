const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/codepreneur/WebstormProjects/Brium-Official/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/404.js"))),
  "component---src-pages-driver-js": hot(preferDefault(require("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/driver.js"))),
  "component---src-pages-fare-estimator-js": hot(preferDefault(require("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/fare-estimator.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/index.js"))),
  "component---src-pages-partner-js": hot(preferDefault(require("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/partner.js"))),
  "component---src-pages-ride-js": hot(preferDefault(require("/Users/codepreneur/WebstormProjects/Brium-Official/src/pages/ride.js")))
}

