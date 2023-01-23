import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();

    console.log(searchTerm);
    // setSearchResults(data.allWordpressPost.edges);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search"
        value={searchTerm}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default Search;
