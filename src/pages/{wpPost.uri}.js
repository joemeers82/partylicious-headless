import React from "react";
import ReactDomServer from 'react-dom/server'
import { graphql } from "gatsby";
import { Image } from "gatsby-plugin-image";
const cheerio = require('cheerio');
import "../styles/global.css";
import HtmlReactParser from "html-react-parser";

import Layout from "../components/Layout/Layout";
export const Head = ({ data }) => {
  console.log(data.post.seo);
  const title = `${data.post.title} - Partylcious`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={data.post.seo.metaDesc} />
      <meta name="image" content={data.post.seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.post.seo.title} />
      <meta name="twitter:url" content={data.post.seo.opengraphUrl} />
      <meta name="twitter:description" content={data.post.seo.metaDesc} />
      <meta name="twitter:image" content={data.post.seo.image} />
      <meta name="twitter:creator" content={data.post.seo.twitterUsername} />
    </>
  );
};

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

const removeInlineStyles = (html) => {
  const $ = cheerio.load(html);
  $('*[style]').removeAttr('style');
  return $.html();
};

const PostTemplate = ({ data }) => {
  

 
  // const con = data.post.content;
  
  const cleanedHtml = HtmlReactParser(removeInlineStyles(data.post.content));
  
  const content = HtmlReactParser(cleanedHtml, {
    transform: processImage,
  });

  return (
    <Layout>
      <h1 className="" dangerouslySetInnerHTML={{ __html: data.post.title }} />

      <div className="flex flex-col p-8 font-lg font-light">{content}</div>
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
        title
        metaDesc
        opengraphTitle
        opengraphUrl
        metaKeywords
        opengraphAuthor
        opengraphDescription
        readingTime
        opengraphPublishedTime
        focuskw
        metaRobotsNofollow
        metaRobotsNoindex
        twitterDescription
        twitterTitle
        twitterImage {
          publicUrl
          srcSet
        }
        opengraphImage {
          altText
          publicUrl
        }
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
