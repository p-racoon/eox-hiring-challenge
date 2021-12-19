import moment from "moment";
import React from "react";

function NewsCard({ id, title, link, category, timestamp, publisher }) {
  return (
    <div className="col-12">
      <div className="card mb-3">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <h3 className="card-subtitle text-muted">Category: {category}</h3> */}
        </div>
        <div className="card-body">
          <a href={link} className="card-link" target="_blank">
            Visit Link
          </a>
        </div>
        <div className="card-footer text-muted">
          {moment(timestamp).format("DD/MM/YYYY")}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
