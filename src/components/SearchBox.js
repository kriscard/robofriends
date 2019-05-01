import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  console.log("Searchbox");
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        aria-label="Search a robot"
        type="search"
        placeholder="Search a robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
