import { useEffect, useRef } from "react";

function Search({ query, setQuery }) {
  const inputEnter = useRef(null);

  useEffect(() => {
    inputEnter.current.focus();

    function callBack(e) {
      if (document.activeElement === inputEnter.current) return;

      if (e.key === "Enter") {
        inputEnter.current.focus();
        setQuery(""); 
      }
    }

    document.addEventListener("keydown", callBack);

    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [setQuery]);

  return (
    <input
      ref={inputEnter}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
