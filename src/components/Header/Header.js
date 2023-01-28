import * as React from "react";
import { Link } from "gatsby";

import Menu from "../Menu/Menu";
import { useTopMenuQuery } from "../../hooks/useTopMenuQuery";
import { useRecipeCategoryMenuQuery } from "../../hooks/useRecipeCategoryMenuQuery";
import Search from "../../components/Search";
import Social from "../Social/Social";
const searchIndices = [{ name: `Posts`, title: `Posts` }];

const Header = ({ siteTitle }) => (
  <>
    <div className="border flex items-center justify-between">
      <div className="mx-auto w-full flex items-center justify-between max-w-screen-xl pr-8 pl-8">
        <Menu menu={useTopMenuQuery().wpMenu}></Menu>
        <div className="flex items-center gap-8">
          <Search indices={searchIndices} />
          <Social></Social>
        </div>
      </div>
    </div>
    <header className="mx-auto flex items-center justify-between max-w-screen-xl pr-8 pl-8">
      <Link className="w-[30%]" to="/">
        <img
          src={
            useRecipeCategoryMenuQuery().allWp.nodes[0].themeGeneralSettings
              .themeOptions.headerImage.gatsbyImage.images.fallback.src
          }
          alt={
            useRecipeCategoryMenuQuery().allWp.nodes[0].themeGeneralSettings
              .themeOptions.headerImage.altText
          }
        />
      </Link>
      <Menu menu={useRecipeCategoryMenuQuery().wpMenu}></Menu>
    </header>
  </>
);

export default Header;
