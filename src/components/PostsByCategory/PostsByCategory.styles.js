import styled from "styled-components";

export const PostsByCategoryUL = styled.ul`
  &.sidebar-cat {
    & .gatsby-image-wrapper {
      max-height: 240px;
      max-width: 240px;
    }
  }
  &.front-cat {
    & .gatsby-image-wrapper {
      max-height: 300px;
    }
  }
`;
