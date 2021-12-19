import { useEffect, useState } from "react";
import getNews from "./getNews";

export function useNews() {
  function extractPublishers(newsData) {
    function generateSlug(name) {
      return name.replace(/[^a-zA-Z0-9]/g, "");
    }
    const publishers = {};
    newsData.forEach(
      ({ HOSTNAME, PUBLISHER, ID, TITLE, URL, CATEGORY, TIMESTAMP }) => {
        const slug = generateSlug(PUBLISHER);
        if (!publishers[slug]) {
          publishers[slug] = {
            hostname: HOSTNAME,
            publisher: PUBLISHER,
            slug,
            news: [],
          };
        }
        publishers[slug].news.push({
          id: ID,
          title: TITLE,
          url: URL,
          category: CATEGORY,
          timestamp: TIMESTAMP,
        });
        publishers[slug].news.sort((a, b) => b.timestamp - a.timestamp);
      }
    );
    return Object.values(publishers);
  }
  const [news, setNews] = useState(null);
  const [publishers, setPublishers] = useState(null);
  useEffect(() => {
    getNews()
      .then((newsData) => {
        setNews(newsData);
        setPublishers(
          extractPublishers(
            newsData.sort((a, b) => a.PUBLISHER.localeCompare(b.PUBLISHER))
          )
        );
      })
      .catch((error) => {
        console.error(`failed to fetch news data`, error);
        setNews([]);
        setPublishers([]);
      });
  }, []);
  return [news, publishers];
}
