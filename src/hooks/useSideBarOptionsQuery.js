import { useStaticQuery, graphql } from "gatsby";

export const useSideBarOptionsQuery = () => {
  const sideBarQuery = useStaticQuery(graphql`
    query SideBarQuery {
      allWp {
        nodes {
          themeGeneralSettings {
            themeOptions {
              aboutMeSection {
                aboutMe
                aboutMePageLink {
                  title
                  target
                  url
                }
                aboutMeImage {
                  altText
                  gatsbyImage(layout: FULL_WIDTH, width: 600, formats: WEBP)
                }
              }
              instagram
              pinterest
              facebook
              sidebarPopularPosts {
                ... on WpPost {
                  id
                  title
                  uri
                  featuredImage {
                    node {
                      altText
                      gatsbyImage(
                        layout: FULL_WIDTH
                        formats: WEBP
                        height: 400
                        width: 400
                      )
                    }
                  }
                }
              }
              sidebarRecipesCategory {
                name
              }
            }
          }
        }
      }
      allWpWebStory(limit: 5, sort: { date: DESC }) {
        edges {
          node {
            id
            title
            uri
            content
            featuredImage {
              node {
                gatsbyImage(width: 10, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `);

  return sideBarQuery;
};
