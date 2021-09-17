module.exports = {
  siteMetadata: {
    title: `Broadstreet Institute`,
    description: `The official website of the Broadstreet Institute Internship.`,
    author: `Ben Kosa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyQxHIDEz8hhTfXN`, // may instead specify via env, see below
        tables: [
          {
            baseId: `apppvRBO7pkSdMPOH`,
            tableName: `Sections`,
            tableView: `All`,
            mapping: { 'Body': `text/markdown` },
            tableLinks: [`Pages`],
          },
          {
            baseId: `apppvRBO7pkSdMPOH`,
            tableName: `Pages`,
            tableView: `All`,
            mapping: { 'Body': `text/markdown` },
            tableLinks: [`Sections`],
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}
