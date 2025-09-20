function Movie({ movie, handleID }) {
  return (
    <li key={movie.imdbID} onClick={()=>{handleID(movie.imdbID, movie.Title)}}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
