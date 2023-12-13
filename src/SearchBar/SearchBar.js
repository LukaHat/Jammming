import React, { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Enter song name..."
        id="searchBar"
        onChange={handleInput}
        className="searchBar"
      />
      <button className="searchButton">Search</button>
      <p>{input}</p>
    </div>
  );
};

export default SearchBar;
