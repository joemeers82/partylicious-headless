import * as React from "react"
import { Link } from "gatsby"
import { usePostsQuery } from "../../hooks/usePostsQuery";



const Posts = () => {
    const posts = usePostsQuery().allWpPost.edges;
    console.log(posts)
    return (
        <>
            <ul>
            {posts.map(post=>(
                    
                    <Link  key={post.node.id} to={post.node.uri}>
                        
                        <li >
                            {/* <img style ={{
                                maxWidth: `100%`
                            }}
                            src={post.node.featuredImage.node.gatsbyImage.images.fallback.srcSet} alt={post.node.featuredImage.node.altText}/> */}
                            {post.node.title}
                        </li>
                    </Link>
                ))}
            </ul>
            
        </>
    )
}

export default Posts
