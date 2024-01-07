import React from "react";
import { MoviesCard } from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="p-6 bg-black">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MoviesCard
              className="mr-2"
              key={movie.id}
              movie={movie}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
