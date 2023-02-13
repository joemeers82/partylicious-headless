const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const categoryTemplate = path.resolve(
    `src/pages/category/categoryTemplate.js`
  );

  const categories = await graphql(`
    query {
      allWpCategory {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `);
  categories.data.allWpCategory.edges.forEach((edge) => {
    createPage({
      path: `category/${edge.node.slug}`,
      component: categoryTemplate,
      context: {
        title: edge.node.title,
        name: edge.node.name,
      },
    });
  });
};
