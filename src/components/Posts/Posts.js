import * as React from "react";
import { Link } from "gatsby";
import { usePostsQuery } from "../../hooks/usePostsQuery";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PostsList } from "./Posts.styles";
const Posts = () => {
  const posts = usePostsQuery().allWpPost.edges;

  return (
    <>
      <PostsList className="front-page-posts lg:grid grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <li
            key={post.node.id}
            className={index === 0 ? `col-span-2 ` : `col-span-1`}
          >
            <Link to={post.node.uri}>
              <GatsbyImage
                className="w-full"
                image={post.node.featuredImage.node.gatsbyImage}
                alt={post.node.featuredImage.node.altText}
              />

              {post.node.title}
            </Link>
          </li>
        ))}
      </PostsList>
    </>
  );
};

export default Posts;
