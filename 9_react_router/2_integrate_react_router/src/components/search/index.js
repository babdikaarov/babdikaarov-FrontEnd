import React, { useRef } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
// Import createSearchParams
// Import useNavigate

const Search = () => {
  // get navigate function
  const navigate = useNavigate();
  const searchInputRef = useRef();

  function onSearchHandler(e) {
    e.preventDefault();

    if (searchInputRef.current.value) {
      const searchQuery = {
        name: searchInputRef.current.value,
      };

      // use createSearchParams
      const query = createSearchParams(searchQuery);
      // imperatively redirect with useNavigate() returned function
      navigate({
        pathname: "/search",
        search: `?${query}`,
      });
    }
  }

  return (
    <form onClick={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
