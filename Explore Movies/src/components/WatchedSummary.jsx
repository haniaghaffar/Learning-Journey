import { average } from "../helpers/average";

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.Runtime));
  const avgRatingCount = average(
    watched.map((movie) => movie.ratingCount || 1)
  );

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>🎥</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>✮</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>✪</span>
          <span>{avgUserRating.toFixed(0)}</span>
        </p>
        <p>
          <span>⏰</span>
          <span>{avgRuntime.toFixed(0)} min</span>
        </p>
        <p>
          <span>🧾</span>
          <span>Avg Rated {avgRatingCount.toFixed(0)} times</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
