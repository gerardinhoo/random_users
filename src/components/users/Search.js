import React from "react";

const Search = ({ placeholder, handleChange }) => {
  return (
    <div className="search">
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default Search;
