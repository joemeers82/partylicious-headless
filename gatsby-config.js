/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    author: process.env.SITE_AUTHOR,
    siteUrl: process.env.SITE_URL,
    LATEST_FORM_ACTION: process.env.LATEST_FORM_ACTION,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_ADMIN_KEY: process.env.ALGOLIA_ADMIN_KEY,
    ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.SITE_GRAPHQL,
      },
    },
    {
      resolve: `gatsby-plugin-pinterest`,
      options: {
        saveButton: {
          round: false,
          tall: false,
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        formats: [`auto`, `webp`],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,

        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: "Montserrat",
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap`,
          },
        ],
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("autoprefixer"),
          require("cssnano"),
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-wpgraphql-seo",
  ],
};
