import * as React from "react";
import PostsByCategory from "../PostsByCategory/PostsByCategory";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar flex flex-col">
        <h1>Sidebar</h1>
        <PostsByCategory category="Halloween" limit="4"></PostsByCategory>
      </div>
    </>
  );
};

export default Sidebar;
