import React from "react";
import { graphql } from "gatsby";
import { WebStory } from "./webStoryTemplate.styles";

const WebStoryTemplate = ({ data, pageContext }) => {
  console.log(data);
  console.log(pageContext);
  const content = data.wpWebStory.content;

  //   let cleanContent = content.replace(/<p>/gs, "");
  //   cleanContent = cleanContent.replace(/<p>/gs, "");

  //   cleanContent = cleanContent.replace(/<\/p>/gs, "");

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: data.wpWebStory.excerpt }} /> */}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};
export default WebStoryTemplate;
export const webStoryQuery = graphql`
  query ($id: String!) {
    wpWebStory(id: { eq: $id }) {
      id
      slug
      title
      content
    }
  }
`;
