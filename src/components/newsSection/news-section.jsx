import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./newsSection.module.css";
import "../../root.css";
import SearchBubbles from "../searchBubbles/search-bubbles";
import NewsCard from "../newsCard/news-card";
import GetSpacePhotos from "../SpacePhotosComponent/space-photos";

function NewsSection() {
  const [data, setData] = useState([]); //books
  const [query, setQuery] = useState("music");
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const urls = {
    newscatcher: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20&page=${pageNumber}`,
  };

  async function fetchAPI(url, setResp) {
    setLoading(true);
    axios
      .get(url, {
        headers: {
          "x-api-key": process.env.REACT_APP_NEWS_CATCHER_KEY,
        },
      })
      .then((response) => {
        console.log(response.data.total_hits); //check how many results there are
        setResp((prevResp) => {
          console.log(...new Set(prevResp));
          return [...new Set([...prevResp, ...response.data.articles])];
        });

        setHasMore(response.data.articles.length > 0);
      })
      .catch((e) => {
        console.log("ERROR MESSAGE: " + e);
      });
  }

  useEffect(() => {
    fetchAPI(urls.newscatcher, setData);
    console.log(pageNumber);
  }, [query, pageNumber]);

  if (data.length === 0) {
    return <div>no use today</div>;
  }

  return (
    <div className={styles.news_section}>
      <SearchBubbles
        setQuery={setQuery}
        setPageNumber={setPageNumber}
        setData={setData}
      />
      <div className={styles.newsfeed}>
        {data.map((element, index) => (
          <div key={index}>
            {index === 4 && <GetSpacePhotos />}
            {index === 9 && (
              <div className={styles.api_space}> Space for API 2</div>
            )}
            {index === 14 && (
              <div className={styles.api_space}> Space for API 2</div>
            )}
            <NewsCard
              key={index}
              url={element.url}
              media={element.media}
              title={element.title}
              excerpt={element.excerpt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default NewsSection;

// function handleChange(event) {
//   setSearchInput(event.target.value);
// }

// function handleClick(event) {
//   event.preventDefault();
//   setQuery(searchInput);
//   console.log(searchInput);
//   setSearchInput("");
// }
