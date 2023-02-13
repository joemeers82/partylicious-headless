import * as React from "react";
import "../styles/tailwind.css";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/Header/Header";
import FrontPageFeaturedPosts from "../components/FrontPageFeaturedPosts/FrontPageFeaturedPosts";
import LatestForm from "../components/LatestForm/LatestForm";
import Posts from "../components/Posts/Posts";
import PostsByCategory from "../components/PostsByCategory/PostsByCategory";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
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
      <FrontPageFeaturedPosts></FrontPageFeaturedPosts>
      <LatestForm></LatestForm>
      <div className="site-inner my-8 mx-auto max-w-screen-xl	">
        <div className="flex content-sidebar-wrap flex-col lg:flex-row">
          <div className="w-[860px] p-8">
            <Posts></Posts>
            <PostsByCategory
              className="front-cat gap-6 mt-20"
              category="Appetizers"
              limit="6"
            ></PostsByCategory>
            <PostsByCategory
              className="front-cat gap-6 mt-20"
              category="Frosting"
              limit="6"
            ></PostsByCategory>
          </div>
          <Sidebar></Sidebar>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
