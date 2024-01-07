import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log(movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-96 pl-12 relative z-20">
          <MoviesList title="Now Playing" movies={movies} />
          <MoviesList title="Trending" movies={movies} />
          <MoviesList title="Popular Movies" movies={movies} />
          <MoviesList title="Upcoming Movies" movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
