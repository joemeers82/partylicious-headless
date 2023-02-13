import styled from "styled-components";

export const PostsList = styled.ul`
  & li:first-of-type {
    & .gatsby-image-wrapper {
      max-height: 550px;
    }
  }
  & li:not(:first-child) {
    .gatsby-image-wrapper {
      max-height: 600px;
    }
  }
`;
