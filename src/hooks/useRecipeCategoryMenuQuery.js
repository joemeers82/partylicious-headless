import { useStaticQuery, graphql } from 'gatsby';

export const useRecipeCategoryMenuQuery = () =>{
    
  const recipeMenu = useStaticQuery(graphql`
    query RecipeCategoryMenuQuery {
        wpMenu(name: {eq: "Recipe Category Menu"}) {
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
  },
    allWp {
        nodes {
        themeGeneralSettings {
            themeOptions {
                headerImage {
                    altText
                    gatsbyImage(formats: WEBP, height: 10, layout: FULL_WIDTH)
                  }
            }
        }
        }
    }
}
  `)
  
    console.log(recipeMenu)
    return recipeMenu;
}


