import * as React from "react";
import { Link } from "gatsby";

import { useGetAllPosts } from "../../hooks/useGetAllPosts";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PostsByCategoryUL } from "./PostsByCategory.styles";

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
      <PostsByCategoryUL className={`grid grid-cols-3 ${className}`}>
        {posts().map((post) => (
          <li className="col-span-1 flex">
            <Link key={post.id} to={post.slug}>
              <GatsbyImage
                image={post.featuredImage.node.gatsbyImage}
                alt={post.featuredImage.node.altText}
              />

              <p>{post.title}</p>
            </Link>
          </li>
        ))}
      </PostsByCategoryUL>
    </>
  );
};

export default PostsByCategory;
