import * as React from "react";
import { Link } from "gatsby";
import { useRecipeCategoryMenuQuery } from "../../hooks/useRecipeCategoryMenuQuery";

const MainNav = () => {
  const { wpMenu } = useRecipeCategoryMenuQuery();
  const { allWp } = useRecipeCategoryMenuQuery();
  const recipeMenu = wpMenu.menuItems.nodes;
  const headerImage =
    allWp.nodes[0].themeGeneralSettings.themeOptions.headerImage.gatsbyImage
      .images.fallback.src;
  const altTag =
    allWp.nodes[0].themeGeneralSettings.themeOptions.headerImage.altText;
  return (
    <>
      <ul className="flex justify-around w-[25%]">
        {recipeMenu.map((menuItem) => (
          <li key={menuItem.id}>
            <Link to={menuItem.url} className="text-black">
              {menuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainNav;
