import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

const Search = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter song name..."
          id="searchBar"
          onChange={handleInput}
          className="search-bar"
        />
        <button className="search-button">Search</button>
        <p>{input}</p>
      </div>
      <section className="main-section">
        <SearchResults />
        <Playlist />
      </section>
    </>
  );
};

export default Search;
