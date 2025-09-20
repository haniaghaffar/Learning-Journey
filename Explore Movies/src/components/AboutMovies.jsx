import { useEffect, useRef, useState } from "react";
import RatingStars from "./RatingStars";

function AboutMovies({ getID, handleID, watched, handleAddWatched }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userRating, setUserRating] = useState(null);
  const [ratingCount, setRatingCount] = useState(0);

  const detailsRef = useRef(null);

  const alreadyWatched = watched.find((m) => m.imdbID === getID);
  const isAlreadyRated = !!alreadyWatched;

  useEffect(() => {
    function callBack(e) {
      if (e.key === "Escape") {
        handleID(null);
      }
    }
    document.addEventListener("keydown", callBack);
    return () => document.removeEventListener("keydown", callBack);
  }, [handleID]);

  useEffect(() => {
  setUserRating(alreadyWatched ? alreadyWatched.userRating : null);
  setRatingCount(alreadyWatched ? alreadyWatched.ratingCount || 0 : 0);
}, [alreadyWatched]);


  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=7a03f0ac&i=${getID}`
        );
        const data = await res.json();
        if (data.Response === "False") throw new Error(data.Error);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (getID) fetchMovie();
  }, [getID]);

  useEffect(() => {
    if (!movie?.Title) return;
    document.title = `Movie | ${movie.Title}`;
    return () => (document.title = "usePopcorn");
  }, [movie]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    imdbRating,
    Plot,
    Poster,
    imdbID,
  } = movie;

  function handleAdd() {
    const newMovie = {
      userRating,
      imdbRating: Number(imdbRating),
      Runtime: Runtime !== "N/A" ? Number(Runtime.split(" ")[0]) : 0,
      poster: Poster,
      title: Title,
      imdbID,
      ratingCount,
    };

    handleAddWatched(newMovie);
    handleID(null);
  }

  function handleUserRating(rating) {
    setUserRating(rating);
    setRatingCount((prev) => prev + 1);
  }

  return (
    <div ref={detailsRef} className="details">
      <header>
        <button className="btn-back" onClick={() => handleID(null)}>
          &larr;
        </button>
        <img src={Poster} alt={`Poster of ${Title}`} />
        <div className="details-overview">
          <h2>
            {Title} ({Year})
          </h2>
          <p>
            {Released} • {Runtime}
          </p>
          <p>{Genre}</p>
          <p>
            <span>⭐️</span> {imdbRating} IMDb rating
          </p>
        </div>
      </header>

      <section>
        <div className="rating">
          {!isAlreadyRated ? (
            <>
              <RatingStars onSetRating={handleUserRating} />
              {userRating && (
                <button className="btn-add" onClick={handleAdd}>
                  + Add to Watched
                </button>
              )}
              {ratingCount > 0 && (
                <span className="rating-counter">
                  🔄 You changed rating <strong>{ratingCount}</strong> times
                </span>
              )}
            </>
          ) : (
            <p>
              ✅ Already rated: <strong>{alreadyWatched.userRating}</strong>{" "}
              <span className="already-rated">
                ({alreadyWatched.ratingCount} times)
              </span>
            </p>
          )}
        </div>

        <p>
          <em>{Plot}</em>
        </p>
        <p>
          <strong>Starring:</strong> {Actors}
        </p>
        <p>
          <strong>Directed by:</strong> {Director}
        </p>
        <p>
          <strong>Written by:</strong> {Writer}
        </p>
      </section>
    </div>
  );
}

export default AboutMovies;
