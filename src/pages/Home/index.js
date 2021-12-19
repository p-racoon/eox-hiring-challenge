import React from "react";
import { Link } from "react-router-dom";
import { useNews } from "../../services/news/useNews";

function Home({ publishers }) {
  // useNews
  return (
    <div className="container">
      <ul class="list-group"></ul>
      {publishers &&
        publishers.map((publisher) => (
          <Link to={`/${publisher.slug}`}>
            <li
              key={publisher.slug}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              {publisher.publisher}
              <span class="badge bg-primary rounded-pill text-white">
                {publisher.news.length}
              </span>
            </li>
          </Link>
        ))}
    </div>
  );
}

export default Home;
