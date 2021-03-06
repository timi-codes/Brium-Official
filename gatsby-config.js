const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
      {
        resolve: "gatsby-plugin-chakra-ui",
        options: {
          isResettingCSS: true,
          isUsingColorMode: false,
        },
      },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Brium',
        short_name: 'Brium',
        start_url: '/',
        background_color: config.blue,
        theme_color: config.blue,
        display: 'minimal-ui',
        icon: 'src/images/logo.png'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              quality: 90,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      }
    }
  ]
};
