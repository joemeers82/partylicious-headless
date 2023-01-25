import * as React from "react";
import PostsByCategory from "../PostsByCategory/PostsByCategory";
import { useSideBarOptionsQuery } from "../../hooks/useSideBarOptionsQuery";

import { Link } from "gatsby";

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
      <aside className="sidebar flex flex-col w-[400px]">
        <h1>Sidebar</h1>
        <img
          alt="Sophia"
          className="w-[140px] rounded-full mx-auto"
          src={aboutMeSection.aboutMeImage.gatsbyImage.images.fallback.src}
        />
        <div dangerouslySetInnerHTML={{ __html: aboutMeBody }}></div>
        <Link to={aboutMeLink.url}>{aboutMeLink.title}</Link>
        <hr></hr>

        <PostsByCategory category={sideBarPostCat} limit="4"></PostsByCategory>
        <h3>Popular Posts</h3>
        <ul>
          {popularPosts.map((post) => (
            <Link key={post.id} to={post.slug}>
              <li>
                {/* <img style ={{
                                  maxWidth: `100%`
                              }}
                              src={post.node.featuredImage.node.gatsbyImage.images.fallback.srcSet} alt={post.node.featuredImage.node.altText}/> */}
                {post.title}
              </li>
            </Link>
          ))}
        </ul>
        <h3>Web Stories</h3>
        <ul>
          {webStories.map((story) => (
            <li>{story.node.title}</li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
