import * as React from "react";
import { Link } from "gatsby";
import { useFrontPageFeaturedPosts } from "../../hooks/useFrontPageFeaturedPostsQuery";

const FrontPageFeatured = () => {
  const { frontPageTopPosts } =
    useFrontPageFeaturedPosts().allWp.nodes[0].themeGeneralSettings
      .themeOptions;

  return (
    <>
      <ul className="pr-8 pl-8 mx-auto flex gap-4 items-center justify-between flex-col lg:flex-row">
        {frontPageTopPosts.map((post) => (
          <li key={post.post.id} className="w-full lg:w-1/3">
            <Link
              to={post.post.uri}
              className="hover:text-black transition duration-300 ease-in-out"
            >
              <img
                width="400"
                height="400"
                className="object-cover max-h-[400px]"
                src={
                  post.post.featuredImage.node.gatsbyImage.images.sources[1]
                    .srcSet
                }
                alt={post.post.featuredImage.node.altText}
              />

              <p className="p-3 text-center">{post.post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FrontPageFeatured;
