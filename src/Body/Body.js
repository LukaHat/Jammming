import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

export const Body = () => {
  return (
    <main className="body">
      <SearchBar />
      <section className="main-section">
        <SearchResults />
        <Playlist />
      </section>
    </main>
  );
};
