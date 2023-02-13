import { useStaticQuery, graphql } from "gatsby";

export const useGetAllPosts = () => {
  const data = useStaticQuery(graphql`
    query GetAllPosts {
      allWpPost(sort: { date: DESC }) {
        nodes {
          id
          title
          slug
          uri
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              gatsbyImage(width: 400)
              altText
            }
          }
        }
      }
    }
  `);
  return data;
};
