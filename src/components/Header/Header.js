import * as React from "react";
import { Link } from "gatsby";
import MainNav from "../MainNav/MainNav";

const Header = ({ siteTitle }) => (
  <header
    className="mx-auto max-w-screen-xl"
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <MainNav></MainNav>
  </header>
);

export default Header;
