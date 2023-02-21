import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  border: solid;
  .sidebar-popular {
    li {
      a {
      }
    }
    & .gatsby-image-wrapper {
      max-width: 240px;
    }
  }
  .web-stories {
    // border: solid blue;
    // overflow-y: hidden;

    li {
      border: solid red;
      &:nth-of-type(3) {
        border: solid blue;
        position: relative;

        &:after {
          content: ">";
          position: absolute;
          height: 40px;
          width: 40px;
          right: -20px;
          border: solid;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 20px;
          cursor: pointer;
          z-index: 999999;
          background-color: white;
          font-size: 50px;
        }
      }
    }
  }
`;
