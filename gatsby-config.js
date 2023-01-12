/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Partylicious`,
    description: `A food blog`,
    author: `Sophia Assunta`,
    siteUrl: `https://partylicious.net`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://partylicious.wp/graphql",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
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
