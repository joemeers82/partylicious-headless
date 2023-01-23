import * as React from "react";
import { Link } from "gatsby";
import { useFrontPageFeaturedPosts } from "../../hooks/useFrontPageFeaturedPostsQuery";

const FrontPageFeatured = () => {
  const { frontPageTopPosts } =
    useFrontPageFeaturedPosts().allWp.nodes[0].themeGeneralSettings
      .themeOptions;

  return (
    <>
      <ul
        style={{
          margin: `0 auto`,
          padding: `var(--space-4) var(--size-gutter)`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        {frontPageTopPosts.map((post) => (
          <li key={post.post.id}>
            {/* <img style ={{
                            maxWidth: `100%`
                        }}
                        src={post.post.featuredImage.node.gatsbyImage.images.sources[1].srcSet} alt={post.post.featuredImage.node.altText}/> */}
            {post.post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FrontPageFeatured;
