import React from "react";

const Playlist = () => {
  return (
    <div className="section-part playlist">
      <input type="text" className="playlist-name" />
      <ul></ul>
      <button className="playlist-button">Save to Spotify</button>
    </div>
  );
};

export default Playlist;
