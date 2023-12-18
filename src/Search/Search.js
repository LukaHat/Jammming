import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const client_id = "025404be47e84780a9da26fb7b901b51";
  const client_secret = "a118e6e86e4b4b648c66b0dbe5607582";
  const redirect_uri = "http://localhost:3000/";

  const scope = "user-read-private user-read-email";

  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

  useEffect(() => {
    const accessTokenExtraction = () => {
      const urlParams = new URLSearchParams(window.location.hash.substring(1));
      const token = urlParams.get("access_token");

      if (token) {
        setAccessToken(token);
      }
    };

    accessTokenExtraction();
  }, [window.location.hash]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("https://api.spotify.com/v1/search", {
        params: {
          q: searchQuery,
          type: "track",
          limit: 4,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setSearchResults(response.data.tracks.items);
      console.log(searchResults);
    } catch (error) {
      console.error("Error searching for tracks:", error);
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter song name..."
          id="searchBar"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <section className="main-section">
        <SearchResults results={searchResults} />
        <Playlist accessToken={accessToken} />
      </section>
    </>
  );
};

export default Search;
