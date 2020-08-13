module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-chakra-ui/gatsby-browser.js'),
      options: {"plugins":[],"isResettingCSS":true,"isUsingColorMode":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Brium","short_name":"Brium","start_url":"/","display":"minimal-ui","icon":"src/images/logo.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"617b975ecfeef2279b46b454d75d9552"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1100,"quality":90,"linkImagesToOriginal":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":""},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
