import * as React from "react";
import { Link } from "gatsby";
import Menu from "../Menu/Menu";
import { useFooterMenuQuery } from "../../hooks/useFooterMenuQuery";
const Footer = () => {
  return (
    <footer className="border text-center">
      <Menu
        className="mx-auto text-center justify-center"
        menu={useFooterMenuQuery().wpMenu}
      ></Menu>
      <p>
        Copyright 2023<Link to="/">Partylicious</Link>
      </p>
      <button>Do not sell or share my information</button>
    </footer>
  );
};

export default Footer;
