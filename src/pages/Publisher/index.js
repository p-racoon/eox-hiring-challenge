import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../../components/NewsCard";

function getPublisher(publisherSlug, publishers) {
  return (
    publishers &&
    publishers.find((publisher) => publisher.slug === publisherSlug)
  );
}

function Publisher({ publishers }) {
  let { publisherSlug } = useParams();
  let publisherData = useMemo(
    () => getPublisher(publisherSlug, publishers),
    [publisherSlug, publishers]
  );

  return (
    <div className="container">
      <h1 className="pt-4">
        {publisherData && publisherData.publisher}
      </h1>
      <hr />
      <div className="d-flex flex-row-reverse pb-3">
        <small class="text-muted">
          Sorted in Descending order of timestamp
        </small>
      </div>
      <div className="row">
        {publisherData &&
          publisherData.news.map(({ id, title, url, category, timestamp }) => (
            <NewsCard
              key={id}
              title={title}
              link={url}
              category={category}
              timestamp={timestamp}
            />
          ))}
      </div>
    </div>
  );
}

export default Publisher;
