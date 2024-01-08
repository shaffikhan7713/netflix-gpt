import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

export const MoviesCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 pr-4">
      <img alt="Poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
