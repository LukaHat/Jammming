import Track from "../Track/Track";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Playlist = ({ playlistTracks }) => {
  const [token, setToken] = useState(null);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistId, setPlaylistId] = useState("");
  const [playlistData, setPlaylistData] = useState({
    name: playlistName,
    public: false,
    collaborative: false,
    description: "playlist made using jammming",
  });

  const user_id = "31bgtjubvjhobtfmugnku3rw6iee";

  const playlistUrl = `https://api.spotify.com/v1/users/${user_id}/playlists`;

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const createPlaylist = async () => {
    try {
      // Create a new playlist
      const response = await axios.post(
        playlistUrl,
        {
          name: playlistName,
          public: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Playlist Created:", response.data);
      setPlaylistId(response.data.id);

      // Add tracks to the created playlist
      await axios.post(
        `https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
        {
          uris: playlistTracks.map((track) => track.uri),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Tracks Added to Playlist");
    } catch (error) {
      console.error("Error creating playlist and adding tracks:", error);
    }
  };

  useEffect(() => {
    const getAccessToken = () => {
      const hash = window.location.hash
        .substring(1)
        .split("&")
        .reduce((acc, item) => {
          const parts = item.split("=");
          acc[parts[0]] = parts[1];
          return acc;
        }, {});

      return hash.access_token;
    };

    const accessToken = getAccessToken();

    if (accessToken) {
      setToken(accessToken);
    } else {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost:3000/callback&response_type=token&scope=user-read-private%20playlist-read-private`;
    }
  }, []);

  return (
    <div className="section-part playlist">
      <input type="text" className="playlist-name" onChange={handleChange} />
      <ul className="playlist-tracks">
        {playlistTracks.map((track, index) => (
          <Track
            key={track.uri}
            className="playlist-track"
            name={track.name}
            album={track.album}
            artist={track.artist}
          />
        ))}
      </ul>
      <button className="playlist-button" onClick={createPlaylist}>
        Save to Spotify
      </button>
    </div>
  );
};

export default Playlist;
