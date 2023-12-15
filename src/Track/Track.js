import React from "react";

const Track = () => {
  return (
    <div className="track">
      <div className="song-info">
        <h3 className="song-title">Without Me</h3>
        <div className="more-info">
          <span className="artist">Eminem</span>
          <span className="separator">|</span>
          <span className="album">The Eminem Show</span>
        </div>
      </div>
      <button className="track-button">+</button>
    </div>
  );
};

export default Track;
