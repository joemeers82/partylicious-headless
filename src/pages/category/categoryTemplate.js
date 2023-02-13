import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import PostsByCategory from "../../components/PostsByCategory/PostsByCategory";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const CategoryTemplate = ({ data, pageContext }) => {
  console.log(data);
  console.log(pageContext);
  return (
    <>
      <Header siteTitle={`Partylicious`} />
      <div className="site-inner my-8 mx-auto max-w-screen-xl	">
        <div className="flex content-sidebar-wrap flex-col lg:flex-row">
          <div className="w-[860px] p-8">
            <h1>Category {pageContext.name}</h1>
            <PostsByCategory
              className="front-cat gap-6 mt-20"
              category={pageContext.name}
            ></PostsByCategory>
          </div>
          <Sidebar></Sidebar>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default CategoryTemplate;
export const categoryQuery = graphql`
  query ($name: String!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { name: { eq: $name } } } } }
    ) {
      nodes {
        title
      }
    }
  }
`;
