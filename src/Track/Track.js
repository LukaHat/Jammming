import React from "react";

const Track = ({ name, artist, album, uri, onAddToPlaylist, onDelete }) => {
  const handleAddToPlaylist = () => {
    onAddToPlaylist({ name, artist, album, uri });
  };
  const handleDelete = () => {
    console.log(typeof onDelete);
    onDelete({ name, artist, album, uri });
  };
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
      <button className="track-button" onClick={handleAddToPlaylist}>
        +
      </button>
    </div>
  );
};

export default Track;
