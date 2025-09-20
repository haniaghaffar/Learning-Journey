import { useState } from "react";
import Box from "./components/Box";
import Main from "./components/Main";
import Themovie from "./components/Themovie";
import Nav from "./components/Nav";
import SearchResult from "./components/SearchResult";
import Watched from "./components/Watched";
import WatchedSummary from "./components/WatchedSummary";
import Search from "./components/Search";
import AboutMovies from "./components/AboutMovies";
import { useMovies } from "./Hooks/Usemovies";
import { useLocalStorage } from "./Hooks/UseLocalString";

export default function App() {
  const [query, setQuery] = useState("");
  const [watched, setWatched] = useLocalStorage("watched", []);

  const { movies, loading, theError } = useMovies(query);
  const [getID, setGetID] = useState(null);

  function handleID(id) {
    setGetID((previous) => (previous === id ? null : id));
  }


 function handleAddWatched(movie) {
    setWatched((movies) => [...movies, movie]);
  }

  function handleDel(id) {
    setWatched((movies) => movies.filter((movie) => movie.imdbID !== id));
  }
 

  return (
    <>
      <Nav>
        <Search query={query} setQuery={setQuery} />
        <SearchResult movies={movies} handleID={handleID} />
      </Nav>

      <Main>
        <Box>
          {theError && <p className="error">{theError}</p>}
          {loading && <div className="loader">Loading...</div>}
          {!loading && !theError && (
            <Themovie movies={movies} handleID={handleID} />
          )}
        </Box>

        <Box>
          {getID ? (
            <AboutMovies
              getID={getID}
              handleID={handleID}
              watched={watched}
              handleAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <Watched watched={watched} handleDel={handleDel} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
