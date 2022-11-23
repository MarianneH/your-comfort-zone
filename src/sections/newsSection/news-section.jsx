import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./newsSection.module.css";
import "../../root.css";
import SearchBubbles from "../../components/searchBubbles/search-bubbles";
import NewsCard from "../../components/newsCard/news-card";
import GetSpacePhotos from "../../components/spacePhotosComponent/space-photos";
import Manifest from "../../components/manifestComponent/manifest";
import LoadingIndicator from "../../components/loadingIndicator/loading-indicator";
import NewsModal from "../../components/newsModal/news-modal";
import useFetch from "../../hooks/useFetch";
import removeKeysOfObject from "../../hooks/remove-keys-of-object";
import Fox from "../../components/fox/fox";

function NewsSection() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cats");
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalData, setModalData] = useState(data[0]);
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
  //fetching the data from an API
  const { response } = useFetch(
    urls.newscatcher,
    process.env.REACT_APP_NEWS_CATCHER_KEY,
    setLoading
  );
  //using the data
  useEffect(() => {
    if (response !== null) {
      setData((prevData) => {
        return removeKeysOfObject(
          [...prevData, ...response.articles],
          keysToRemove
        );
      });
      setHasMore((prevData) => response.total_hits >= data.length + 20);
    }
    // eslint-disable-next-line
  }, [response]);

  //to display the correct data in the modal
  useEffect(() => {
    setModalData((prevData) => data[modalIndex]);
    // eslint-disable-next-line
  }, [showModal]);

  //implementation of endless scrolling
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

  return (
    <div className={styles.news_section} id="news_section">
      <h1 className={styles.headline}>Comfort Zone</h1>

      <SearchBubbles
        setQuery={setQuery}
        setPageNumber={setPageNumber}
        setData={setData}
        query={query}
      />
      <section className={styles.wrapper}>
        <div className={styles.newsfeed}>
          {data.map((element, index) => (
            <React.Fragment key={index}>
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
                  />
                </div>
              )}
              {index === 5 && <GetSpacePhotos />}
              {index === 9 && <Fox />}
              {index === 13 && <Manifest />}
            </React.Fragment>
          ))}
        </div>
        <div>{loading && <LoadingIndicator />}</div>
        <div>
          {showModal && (
            <NewsModal data={modalData} setShowModal={setShowModal} />
          )}
        </div>
      </section>
    </div>
  );
}
export default NewsSection;
