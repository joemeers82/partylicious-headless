// const pagePath = `content`
const indexName = `Posts`;

const postQuery = `{
    posts: allWpPost {
      edges {
        node {
          id
          title
          slug
          excerpt
        }
      }
    }
  }`;

function postToAlgoliaRecord({ node: { id, title, slug, excerpt } }) {
  return {
    objectID: id,
    title,
    slug,
    excerpt,
  };
}

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(postToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
