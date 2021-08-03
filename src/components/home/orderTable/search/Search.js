import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  const [ordersSearch, setOrdersSearch] = useState("");

  return (
    <div className="search">
      <div className="search--icon">
        <SearchIcon />
      </div>
      <input
        className="search--input"
        placeholder="Search ..."
        value={ordersSearch}
        onChange={(e) => setOrdersSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
