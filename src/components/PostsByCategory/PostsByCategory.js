import * as React from "react";
import { Link } from "gatsby";
import Posts from "../Posts/Posts";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";

const PostsByCategory = ({ category, limit }) => {
  const { nodes } = useGetAllPosts().allWpPost;
  let posts = [];
  nodes.map((post) => {
    const categories = post.categories.nodes;
    categories.find((p, index) => {
      if (p.name == category) {
        posts.push(post);
      }
    });
  });
  posts = posts.slice(0, limit);
  return (
    <>
      <h1>{category} Recipes</h1>
      <ul>
        {posts.map((post) => (
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
    </>
  );
};

export default PostsByCategory;
