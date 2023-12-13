import React, { useState } from "react";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState({});

  return (
    <div className="results-container">
      <h2>Results</h2>
      <ul className="results-list"></ul>
    </div>
  );
};

export default SearchResults;
