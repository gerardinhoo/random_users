import React from "react";

const Search = ({ placeholder, handleChange, clearUsers, showClear }) => {
  return (
    <div>
      <div className="search">
        <input
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear Users
        </button>
      )}
    </div>
  );
};

export default Search;
