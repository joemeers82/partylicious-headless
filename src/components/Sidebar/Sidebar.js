import * as React from "react";
import PostsByCategory from "../PostsByCategory/PostsByCategory";
import { useSideBarOptionsQuery } from "../../hooks/useSideBarOptionsQuery";
// const searchIndices = [{ name: `Posts`, title: `Posts` }];
// import Search from "../Search";

// import Social from "../Social/Social";
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
        <img
          alt="Sophia"
          className="w-[140px] rounded-full mx-auto"
          src={aboutMeSection.aboutMeImage.gatsbyImage.images.fallback.src}
        ></img>
        <div dangerouslySetInnerHTML={{ __html: aboutMeBody }}></div>
        <Link to={aboutMeLink.url}>{aboutMeLink.title}</Link>
        <hr></hr>

        <PostsByCategory
          className="grid-cols-1"
          category={sideBarPostCat}
          limit="4"
        ></PostsByCategory>
        {/* <Search indices={searchIndices} /> */}
        {/* <Social></Social> */}
        <h3>Popular Posts</h3>
        <ul>
          {popularPosts.map((post) => (
            <li key={post.id}>
              <Link to={post.uri}>
                <img
                  style={{
                    maxWidth: `100%`,
                  }}
                  src={
                    post.featuredImage.node.gatsbyImage.images.fallback.srcSet
                  }
                  alt={post.featuredImage.node.altText}
                />
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        <h3>Web Stories</h3>
        <ul>
          {webStories.map((story) => (
            <li key={story.node.id}>{story.node.title}</li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
