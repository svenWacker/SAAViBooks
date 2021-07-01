import React, { useState } from "react";
import request from "superagent";
import { BiSearchAlt } from "react-icons/bi";

const Search = (props) => {
  return (
    <div className="area">
      <form onSubmit={props.findBook} action="">
        <input
          onChange={props.handleSearch}
          type="text"
          placeholder="Search ..."
        />
        <button className="search-icon" type="submit">
          <BiSearchAlt />
        </button>
      </form>
    </div>
  );
};
export default Search;
