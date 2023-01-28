import { useStaticQuery, graphql } from "gatsby";

export const useSocialMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query SocialMediaMenu {
      allWp {
        nodes {
          themeGeneralSettings {
            themeOptions {
              email
              facebook
              instagram
              pinterest
            }
          }
        }
      }
    }
  `);

  return data;
};
