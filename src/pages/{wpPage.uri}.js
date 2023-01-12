import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
const PostTemplate = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </Layout>
  );
};
export default PostTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`;
