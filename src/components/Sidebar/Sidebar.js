import * as React from "react";
import PostsByCategory from "../PostsByCategory/PostsByCategory";
import { useSideBarOptionsQuery } from "../../hooks/useSideBarOptionsQuery";
// const searchIndices = [{ name: `Posts`, title: `Posts` }];
// import Search from "../Search";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Social from "../Social/Social";
import { Link } from "gatsby";
import { SidebarWrapper } from "./Sidebar.styles";
const Sidebar = () => {
  const themeOptions =
    useSideBarOptionsQuery().allWp.nodes[0].themeGeneralSettings.themeOptions;
  const webStories = useSideBarOptionsQuery().allWpWebStory.edges;

  const aboutMeSection = themeOptions.aboutMeSection;
  const aboutMeBody = aboutMeSection.aboutMe;
  const aboutMeLink = aboutMeSection.aboutMePageLink;
  const sideBarPostCat = themeOptions.sidebarRecipesCategory.name;
  const popularPosts = themeOptions.sidebarPopularPosts;

  return (
    <>
      <SidebarWrapper className="sidebar flex px-6 mx-auto flex-col w-[400px]">
        <img
          alt="Sophia"
          className="w-[140px] rounded-full mx-auto"
          src={aboutMeSection.aboutMeImage.gatsbyImage.images.fallback.src}
        ></img>
        <div dangerouslySetInnerHTML={{ __html: aboutMeBody }}></div>
        <Link to={aboutMeLink.url}>{aboutMeLink.title}</Link>
        <hr></hr>

        <PostsByCategory
          className="grid-cols-1 sidebar-cat flex gap-6"
          category={sideBarPostCat}
          limit="4"
        ></PostsByCategory>
        {/* <Search indices={searchIndices} /> */}
        {/* <Social></Social> */}
        <h3>Popular Posts</h3>
        <ul className="sidebar-popular mt-20 flex flex-col gap-6">
          {popularPosts.map((post) => (
            <li key={post.id}>
              <Link to={post.uri}>
                <GatsbyImage
                  image={post.featuredImage.node.gatsbyImage}
                  alt={post.featuredImage.node.altText}
                />
                <p>{post.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="web-stories">
          <h3>Web Stories</h3>
          <ul className="flex">
            {webStories.map((story, index) => (
              <li
                className={`flex-1 ${index >= 3 ? "hidden" : ""}`}
                key={story.node.id}
              >
                <Link to={story.node.uri}>{story.node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
