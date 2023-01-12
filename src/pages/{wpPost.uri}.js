import React from "react";
import { graphql } from "gatsby";
import { Image } from "gatsby-plugin-image";

import HtmlReactParser from "html-react-parser";

import Layout from "../components/Layout/Layout";

const processImage = (node) => {
  // console.log(node);
  if (node.name === "img") {
    console.log(node.attribs);
    const src = node.attribs.src;
    return (
      <Image
        fixed={{
          src,
          width: 300,
          height: 300,
          srcSet: src,
          base64: src,
          tracedSVG: src,
          srcWebp: src,
          srcSetWebp: src,
        }}
        alt="description"
      />
    );
  }
};

const PostTemplate = ({ data }) => {
  console.log(data.post);
  const content = HtmlReactParser(data.post.content, {
    transform: processImage,
  });
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
      <div>{content}</div>
    </Layout>
  );
};
export default PostTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      id
      content
      author {
        node {
          name
        }
      }
      seo {
        metaDesc
        title
      }
      date(formatString: "DD MM YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`;
