import React from "react";

const Track = ({ name, artist, album }) => {
  return (
    <div className="track">
      <div className="song-info">
        <h3 className="song-title">{name}</h3>
        <div className="more-info">
          <span className="artist">{artist}</span>
          <span className="separator">|</span>
          <span className="album">{album}</span>
        </div>
      </div>
      <button className="track-button">+</button>
    </div>
  );
};

export default Track;
