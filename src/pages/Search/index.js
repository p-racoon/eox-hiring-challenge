import React, { useState, useEffect } from "react";
import NewsCard from "../../components/NewsCard";
import useQuery from "../../util/useQuery";

const searchLimit = 10;

function Search({ news }) {
  const [result, setResult] = useState([]);
  function getSearchResults(news, searchQuery) {
    return news.reduce((acc, news) => {
      const stringifiedObj = JSON.stringify(news).toLowerCase();
      if (
        stringifiedObj.indexOf(searchQuery.toLowerCase()) > -1 &&
        acc.length < searchLimit
      ) {
        acc.push(news);
      }
      return acc;
    }, []);
  }
  const searchQuery = useQuery().get("query");
  useEffect(() => {
    setResult(getSearchResults(news, searchQuery));
  }, [searchQuery, news]);

  return (
    <div className="container">
      <h1 className="pt-4">Search Results ({result.length})</h1>
      <hr className="my-2" />
      <div className="d-flex flex-row-reverse pb-3">
        <small class="text-muted">
          Displays max 10 search results
        </small>
      </div>
      <div className="row">
        {result.map(({ ID, TITLE, URL, CATEGORY, TIMESTAMP }) => (
          <NewsCard
            key={ID}
            title={TITLE}
            link={URL}
            category={CATEGORY}
            timestamp={TIMESTAMP}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
