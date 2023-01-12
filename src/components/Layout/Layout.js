/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import MainNav from "../MainNav/MainNav"
import Header from "../Header/Header";
import SEO from "../SEO/Seo";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <SEO></SEO>
      <Header siteTitle={data.site.siteMetadata?.title || `Partylicious`} />

      <div>
        <main>{children}</main>
        <Sidebar></Sidebar>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
