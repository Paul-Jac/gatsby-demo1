module.exports = {
  siteMetadata: {
    title: `My Awesome Post`,
    description: `An awesome post does have some cool description.`,
    author: `Paul Jacxsens`,
    siteUrl: `https://medium.com/swlh/supercharge-your-jamstack-website-with-gatsby-contentful-and-netlify-75c0f1c7b92f`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `excgxdcurr7e`,
        accessToken: `Qo4mQZE35MWChP8j57f73Grb71I_e7HYDyXNqyp5VfA`
      }
    }
  ],
}
