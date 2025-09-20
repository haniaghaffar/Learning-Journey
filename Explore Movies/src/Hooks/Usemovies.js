import { useEffect, useState } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theError, setTheError] = useState("");

  useEffect(() => {
    if (query.length <= 2) {
      setTheError("Search Now...");
      setMovies([]);
      return;
    }

    const controller = new AbortController();

    const fetchTheMovies = async () => {
      setLoading(true);
      setTheError("");

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=7a03f0ac&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error(`HTTP Error ${response.status}`);

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (error) {
        if (error.name !== "AbortError") {
          setTheError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTheMovies();

    return () => controller.abort();
  }, [query]);

  return { movies, loading, theError };
}
