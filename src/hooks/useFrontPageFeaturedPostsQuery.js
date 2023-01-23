import { useStaticQuery, graphql } from "gatsby";

export const useFrontPageFeaturedPosts = () => {
  const data = useStaticQuery(graphql`
    query FrontPageTopPosts {
      allWp {
        nodes {
          themeGeneralSettings {
            themeOptions {
              frontPageTopPosts {
                post {
                  ... on WpPost {
                    title
                    id
                    uri
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(width: 600, layout: FULL_WIDTH)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data;
};
