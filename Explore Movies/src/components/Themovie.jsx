import Movie from "./Movie";

function Themovie({ movies, handleID}) {
  return (
    <ul className="list">
      {movies?.map((movie, index) => (
        <Movie
          movie={movie}
          key={index}
          handleID={handleID}
        />
      ))}
    </ul>
  );
}

export default Themovie;
