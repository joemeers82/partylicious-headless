const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const categoryTemplate = path.resolve(
    `src/pages/category/categoryTemplate.js`
  );

  const webStoryTemplate = path.resolve(
    `src/pages/webStory/webStoryTemplate.js`
  );

  const categories = await graphql(`
    query {
      allWpCategory {
        edges {
          node {
            id
            name
            slug
            uri
          }
        }
      }
    }
  `);
  const webStories = await graphql(`
    query {
      allWpWebStory {
        edges {
          node {
            title
            uri
            id
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
  webStories.data.allWpWebStory.edges.forEach((edge) => {
    createPage({
      path: `web-stories/${edge.node.slug}`,
      component: webStoryTemplate,
      context: {
        title: edge.node.title,
        id: edge.node.id,
      },
    });
  });
};
