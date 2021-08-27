require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Guild of Entrepreneurs`,
    description: `Site for the Guild of Entrepreneurs.`,
    author: `@goe`,
    siteUrl: `https://guildofentrepreneurs.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // ! Tracking ID NEEDS TO CHANGE! This is wrong!
        trackingId: "UA-130029095-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,400,500,700`, `Roboto Mono\:300,400,500,700`],
        display: "swap",
      },
    },
    // TODO: Add SEO plugins (sitemap etc)
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "guildofentrepreneurs",
        accessToken: process.env.API_KEY,
        linkResolver:
          ({ node, key, value }) =>
          doc => {
            return ""
          },
        // Make sure to get fetchLinks!
        fetchLinks: [],
        htmlSerializer:
          ({ node, key, value }) =>
          (type, element, content, children) => {
            return ""
          },
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return false
        },
        schemas: {},
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
