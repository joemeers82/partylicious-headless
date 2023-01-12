import { useStaticQuery, graphql } from 'gatsby';

export const usePostsQuery = () =>{
  const data = useStaticQuery(graphql`
    query ListPosts {
        allWpPost(limit: 6) {
        edges {
            node {
            id
            title
            featuredImage {
                node {
                altText
                gatsbyImage(layout: FULL_WIDTH, width: 600, formats: WEBP)
                }
            }
            uri
            }
        }
        }
    }
  `)
  

    return data;
}
