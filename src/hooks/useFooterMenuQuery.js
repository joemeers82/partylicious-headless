import { useStaticQuery, graphql } from "gatsby";

export const useFooterMenuQuery = () => {
  const footerMenu = useStaticQuery(graphql`
    query FooterMenuQuery {
      wpMenu(name: { eq: "Footer Menu" }) {
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

  return footerMenu;
};
