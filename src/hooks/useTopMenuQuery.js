import { useStaticQuery, graphql } from "gatsby";

export const useTopMenuQuery = () => {
  const topMenu = useStaticQuery(graphql`
    query TopMenuQuery {
      wpMenu(name: { eq: "Navigation Menu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                id
                label
                title
                url
              }
            }
            title
          }
        }
      }
    }
  `);

  return topMenu;
};
