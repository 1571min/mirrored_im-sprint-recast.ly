import React from "react";
import { YOUTUBE_API_KEY } from "../../config/youtube";
const Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button
      onClick={() => props.searchVideo("qweqwe", 5, YOUTUBE_API_KEY)}
      className="btn hidden-sm-down"
    >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
