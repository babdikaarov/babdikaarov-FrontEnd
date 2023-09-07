import React, { useState } from "react";
import "./App.css";
import Tracklist from "./containers/Tracklist";
import SearchBar from "./containers/SearchBar";
import SearchResults from "./containers/SearchResults";
import MenuBar from "./containers/MenuBar";
import useRefreshToken from "./modules/useRefreshToken";
import { AudioPlayerProvider } from "./context/AudioContext";
import Welcome from "./components/Welcome";
function App() {
  const [fetchedList, setFetchedList] = useState([]); // fetched list of track from searchButton action
  const [customList, setCustomList] = useState([]); //create list of track
  const [logIn, setlogIn] = useState(false);
  const [welcome, setWelcome] = useState(true);

  useRefreshToken(logIn);

  return (
    <div className="App">
      {welcome ? (
        <div className="welcome">
          <Welcome setWelcome={setWelcome} />
        </div>
      ) : (
        <>
          <AudioPlayerProvider>
            <MenuBar setlogIn={setlogIn} />
            <SearchBar setFetchedList={setFetchedList} />
            <div className="trackField">
              <SearchResults
                setCustomList={setCustomList}
                fetchedList={fetchedList}
                setFetchedList={setFetchedList}
              />

              <Tracklist
                customList={customList}
                setCustomList={setCustomList}
                setFetchedList={setFetchedList}
                logIn={logIn}
              />
            </div>
          </AudioPlayerProvider>
        </>
      )}
    </div>
  );
}

export default App;
