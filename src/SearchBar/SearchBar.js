import React, { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
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
  );
};

export default SearchBar;
