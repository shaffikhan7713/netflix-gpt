import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    gptSearchMovies: null,
    gptSearchResults: null,
  },
  reducers: {
    toggleGptSeachView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptSearchMovies = movieNames;
      state.gptSearchResults = movieResults;
    },
  },
});

export const { toggleGptSeachView, addGptSearchMovies } =
  gptSearchSlice.actions;
export default gptSearchSlice.reducer;
