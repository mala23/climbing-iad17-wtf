module.exports = {
  siteMetadata: {
    title: `How Sport Climbing Works`,
    description: `A super swift visual, data-driven essay explaining how sport climbing at the olympics works.`,
    author: `@iad17`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: 'rag0dww'
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `climbing-iad17-wtf`,
        short_name: `climbing`,
        start_url: `/`,
        background-color: `hsl(216% 66% 20)`;
        theme_color: `hsl(0% 0% 24)`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
