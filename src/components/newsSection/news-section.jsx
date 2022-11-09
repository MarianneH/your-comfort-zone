import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import styles from "./newsSection.module.css";
import "../../root.css";
import SearchBubbles from "../searchBubbles/search-bubbles";
import NewsCard from "../newsCard/news-card";
import GetSpacePhotos from "../SpacePhotosComponent/space-photos";
import LoadingIndicator from "../loadingIndicator/loading-indicator";

function NewsSection() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("dogs");
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const urls = {
    newscatcher: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20&page=${pageNumber}`,
  };

  const observer = useRef();
  const lastNewsElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  async function fetchAPI(url, setResp) {
    setLoading(true);
    axios
      .get(url, {
        headers: {
          "x-api-key": process.env.REACT_APP_NEWS_CATCHER_KEY,
        },
      })
      .then((response) => {
        let currentData = response.data.articles;
        currentData.forEach((e) => {
          delete e._score;
          delete e.author;
          delete e.authors;
          delete e.country;
          delete e._id;
          delete e.topic;
          delete e.twitter_account;
          delete e.rights;
          delete e.rank;
          delete e.published_date_precision;
          delete e.published_date;
          delete e.language;
          delete e.is_opinion;
          delete e.clean_url;
          delete e.summary;
        });
        setResp((prevResp) => {
          return [...new Set([...prevResp, ...currentData])];
        });
        setHasMore(response.data.total_hits > data.length);
        setLoading(false);
      })
      .catch((e) => {
        console.log("ERROR MESSAGE : " + e);
      });
  }

  useEffect(() => {
    fetchAPI(urls.newscatcher, setData);
  }, [query, pageNumber]);

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
            {data.length === index + 1 && (
              <div ref={lastNewsElementRef} key={index}>
                <NewsCard
                  url={element.link}
                  media={element.media}
                  title={element.title}
                  excerpt={element.excerpt}
                />
              </div>
            )}
            {index === 4 && <GetSpacePhotos />}
            {index === 9 && (
              <div className={styles.api_space}> Space for API 2</div>
            )}
            {index === 14 && (
              <div className={styles.api_space}> Space for API 2</div>
            )}
            {data.length !== index + 1 && (
              <div key={index}>
                <NewsCard
                  url={element.link}
                  media={element.media}
                  title={element.title}
                  excerpt={element.excerpt}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div>{loading && <LoadingIndicator />}</div>
    </div>
  );
}
export default NewsSection;
