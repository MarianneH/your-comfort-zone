import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./newsSection.module.css";
import "../../root.css";
import SearchBubbles from "../../components/searchBubbles/search-bubbles";
import NewsCard from "../../components/newsCard/news-card";
import GetSpacePhotos from "../../components/SpacePhotosComponent/space-photos";
import LoadingIndicator from "../../components/loadingIndicator/loading-indicator";
import NewsModal from "../../components/newsModal/news-modal";
import useFetch from "../../hooks/useFetch";
import removeKeysOfObject from "../../hooks/remove-keys-of-object";

function NewsSection() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("dogs");
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalData, setModalData] = useState(data[0]);
  const [newsImage, setNewsImage] = useState("");
  const [apiResults, setApiResults] = useState([]);
  const urls = {
    newscatcher: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20&page=${pageNumber}`,
  };
  let keysToRemove = [
    "_score",
    "author",
    "country",
    "_id",
    "topic",
    "twitter_account",
    "rights",
    "rank",
    "published_date_precision",
    "language",
    "is_opinion",
    "clean_url",
  ];

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

  useEffect(() => {
    setModalData(data[modalIndex]);
  }, [showModal]);

  const { dataX, errorX } = useFetch(
    urls.newscatcher,
    process.env.REACT_APP_NEWS_CATCHER_KEY,
    setLoading
  );

  useEffect(() => {
    if (dataX !== null) {
      setData((prevData) => {
        return removeKeysOfObject(
          [...prevData, ...dataX.articles],
          keysToRemove
        );
      });
      setApiResults(dataX.total_hits);
      setHasMore(apiResults > data.length);
    }
  }, [dataX]);

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
            {data.length !== index + 1 && (
              <div key={index}>
                <NewsCard
                  index={index}
                  url={element.link}
                  media={element.media}
                  title={element.title}
                  excerpt={element.excerpt}
                  setShowModal={setShowModal}
                  setModalIndex={setModalIndex}
                  setNewsImage={setNewsImage}
                  newsImage={newsImage}
                />
              </div>
            )}
            {data.length === index + 1 && (
              <div ref={lastNewsElementRef} key={index}>
                <NewsCard
                  index={index}
                  url={element.link}
                  media={element.media}
                  title={element.title}
                  excerpt={element.excerpt}
                  setShowModal={setShowModal}
                  setModalIndex={setModalIndex}
                  setNewsImage={setNewsImage}
                  newsImage={newsImage}
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
          </div>
        ))}
      </div>
      <div>{loading && <LoadingIndicator />}</div>
      <div>
        {showModal && (
          <NewsModal data={modalData} setShowModal={setShowModal} />
        )}
      </div>
    </div>
  );
}
export default NewsSection;
