/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../Header/Header";
import Search from "../Search";

import Footer from "../Footer/Footer";

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
      <Header siteTitle={data.site.siteMetadata?.title || `Partylicious`} />

      <div className="site-inner my-8 mx-auto max-w-screen-xl	">{children}</div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
