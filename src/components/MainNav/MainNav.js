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
      <Link to="/">
        <img src={headerImage} alt={altTag} />
      </Link>
      <ul className="flex">
        {recipeMenu.map((menuItem) => (
          <li key={menuItem.id}>
            <Link to={menuItem.url}>{menuItem.label}</Link>
          </li>
        ))}
        <li className="mobileMenuItem">
          <Link to="/">Home</Link>
        </li>
        <li className="mobileMenuItem">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
};

export default MainNav;
