import * as React from "react"
import PostsByCategory from "../PostsByCategory/PostsByCategory"

const Sidebar = () =>{
    return (
        <>
            <h1>Sidebar</h1>
            <PostsByCategory category="Halloween" limit="4"></PostsByCategory>
        </>
    )
}

export default Sidebar