import WatchedMovie from "./WatchedMovie";

function Watched({ watched, handleDel }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID} 
          movie={movie}
          handleDel={handleDel}
        />
      ))}
    </ul>
  );
}
export default Watched;
