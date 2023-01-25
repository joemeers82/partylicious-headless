import * as React from "react";
import "../styles/tailwind.css";
import FrontPageFeaturedPosts from "../components/FrontPageFeaturedPosts/FrontPageFeaturedPosts";
import Posts from "../components/Posts/Posts";
import PostsByCategory from "../components/PostsByCategory/PostsByCategory";
import LatestForm from "../components/LatestForm/LatestForm";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div>
          <FrontPageFeaturedPosts></FrontPageFeaturedPosts>
          <LatestForm></LatestForm>
          <div className="flex content-sidebar-wrap">
            <div className="w-[860px] p-8">
              <Posts></Posts>
              <PostsByCategory
                category="Appetizers"
                limit="6"
              ></PostsByCategory>
              <PostsByCategory category="Frosting" limit="6"></PostsByCategory>
            </div>
            <Sidebar></Sidebar>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
