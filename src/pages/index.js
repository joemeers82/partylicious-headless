import * as React from "react";
import "../styles/tailwind.css";
import FrontPageFeaturedPosts from "../components/FrontPageFeaturedPosts/FrontPageFeaturedPosts";
import Posts from "../components/Posts/Posts";
import PostsByCategory from "../components/PostsByCategory/PostsByCategory";
import Layout from "../components/Layout/Layout";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div>
          <h1>Partylicious</h1>
          <FrontPageFeaturedPosts></FrontPageFeaturedPosts>
          <Posts></Posts>
          <PostsByCategory category="Appetizers" limit="6"></PostsByCategory>
          <PostsByCategory category="Frosting" limit="6"></PostsByCategory>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
