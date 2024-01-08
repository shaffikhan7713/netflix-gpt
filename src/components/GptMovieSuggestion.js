import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestion = () => {
  const { gptSearchMovies, gptSearchResults } = useSelector(
    (store) => store.gptSearch
  );

  if (!gptSearchMovies) return null;

  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      {gptSearchMovies.map((movie, index) => (
        <MoviesList
          key={movie}
          title={movie}
          movies={gptSearchResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
