function WatchedMovie({ movie, handleDel }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>✮</span> {movie.imdbRating}
        </p>
        <p>
          <span>✪</span> {movie.userRating}
        </p>
        <p>
          <span>⏰</span> {movie.Runtime} min
        </p>
        <p>
          <span></span> {movie.ratingCount} times
        </p>
        <button className="btn-delete" onClick={() => handleDel(movie.imdbID)}>
          -
        </button>
      </div>
    </li>
  );
}
export default WatchedMovie;
