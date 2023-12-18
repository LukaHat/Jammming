import React, { useState } from "react";
import Track from "../Track/Track";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div className="section-part">
      <h2 className="section-header">Results</h2>
      <ul className="track-list">
        {results.map((track, index) => (
          <Track
            key={index}
            name={track.name}
            artist={track.artists[0].name}
            album={track.album.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
