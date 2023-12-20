import React, { useState } from "react";
import Track from "../Track/Track";
import Playlist from "./Playlist";

const SearchResults = ({ results, token }) => {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const accesToken = token;

  const addToPlaylist = (track) => {
    console.log("Adding to playlist:", track);
    setPlaylistTracks([...playlistTracks, track]);
  };

  return (
    <>
      <div className="section-part">
        <h2 className="section-header">Results</h2>
        <ul className="track-list">
          {results.map((track, index) => (
            <Track
              key={index}
              name={track.name}
              artist={track.artists[0].name}
              album={track.album.name}
              uri={track.uri}
              onAddToPlaylist={addToPlaylist}
            />
          ))}
        </ul>
      </div>

      <Playlist playlistTracks={playlistTracks} token={accesToken} />
    </>
  );
};

export default SearchResults;
