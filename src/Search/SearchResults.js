import React from "react";
import Track from "../Track/Track";

const SearchResults = () => {
  return (
    <div className="section-part">
      <h2 className="section-header">Results</h2>
      <ul className="track-list">
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
      </ul>
    </div>
  );
};

export default SearchResults;
