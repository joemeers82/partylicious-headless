import * as React from "react";
import { Link } from "gatsby";
import { usePostsQuery } from "../../hooks/usePostsQuery";

const Posts = () => {
  const posts = usePostsQuery().allWpPost.edges;

  return (
    <>
      <ul className="lg:grid grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <li
            key={post.node.id}
            className={index === 0 ? `col-span-2 border` : `col-span-1 border`}
          >
            <Link to={post.node.uri}>
              <img
                style={{
                  maxWidth: `100%`,
                }}
                src={
                  post.node.featuredImage.node.gatsbyImage.images.fallback
                    .srcSet
                }
                alt={post.node.featuredImage.node.altText}
              />
              {post.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
