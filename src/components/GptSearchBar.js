import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchMovies } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const currentLanguage = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleClickSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some moview for the query " +
      searchInput.current.value +
      ". only give me names of 5 movies comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Koi mil gaya, Golmal.";

    try {
      //exhausted so need to pay to call apis
      //   const gpResults = await openai.chat.completions.create({
      //     messages: [{ role: "assistant", content: gptQuery }],
      //     model: "gpt-3.5-turbo",
      //   });
      //   console.log("gpResults", gpResults.choices);

      const sampleGptResult = [
        {
          message: {
            content:
              "Andaz apna apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan",
          },
        },
      ];

      const gptMoviesArray = sampleGptResult[0].message.content.split(",");
      const promiseArray = gptMoviesArray.map((movie) =>
        searchMovieTMDB(movie)
      );
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptSearchMovies({
          movieNames: gptMoviesArray,
          movieResults: tmdbResults,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInput}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[currentLanguage].searchPlaceholder}
        />
        <button
          className="col-span-3 py-2 mx-2 my-4 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleClickSearch}
        >
          {lang[currentLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
