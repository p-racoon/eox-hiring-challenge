import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SearchBox() {
  let history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  function handleTextChange(event) {
    setSearchTerm(event.target.value);
  }
  function handleSearchRequest(event) {
    event.preventDefault();
    history.push(`/search?query=${searchTerm}`);
  }
  
  return (
    <form onSubmit={handleSearchRequest} className="d-flex float-right">
      <input
        className="form-control me-sm-2"
        type="text"
        placeholder="Search"
        onChange={handleTextChange}
      />
      <button className="btn btn-secondary  m-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBox;
