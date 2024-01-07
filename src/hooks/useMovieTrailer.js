import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      API_OPTIONS
    );

    const jsonData = await data.json();
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length > 0 ? filterData[0] : jsonData.results[0];
    dispatch(addVideoTrailer(trailer));
  };

  useEffect(() => {
    getMovieData();
  }, []);
};

export default useMovieTrailer;
