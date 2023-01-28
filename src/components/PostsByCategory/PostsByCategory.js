import * as React from "react";
import { Link } from "gatsby";

import { useGetAllPosts } from "../../hooks/useGetAllPosts";
import { Image } from "gatsby-plugin-image";

const PostsByCategory = ({ category, limit, className }) => {
  const { nodes } = useGetAllPosts().allWpPost;
  const posts = () => {
    let posts = [];
    nodes.map((post) => {
      const categories = post.categories.nodes;
      categories.find((p, index) => {
        if (p.name === category) {
          posts.push(post);
        }
      });
    });
    posts = posts.slice(0, limit);
    return posts;
  };

  return (
    <>
      <h1>{category} Recipes</h1>
      <ul className={`grid grid-cols-3 ${className}`}>
        {posts().map((post) => (
          <Link key={post.id} to={post.slug}>
            <li className="col-span-1">
              <img
                style={{
                  maxWidth: `100%`,
                }}
                src={post.featuredImage.node.gatsbyImage.images.fallback.srcSet}
                alt={post.featuredImage.node.altText}
              />
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default PostsByCategory;
