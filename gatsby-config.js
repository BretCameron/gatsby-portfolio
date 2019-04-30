module.exports = {
  siteMetadata: {
    title: `Bret Cameron`,
    description: `My personal site.`,
    author: `Bret Cameron`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: `src/images/bc-icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
