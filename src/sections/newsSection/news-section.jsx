import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./newsSection.module.css";
import "../../root.css";
import SearchBubbles from "../../components/searchBubbles/search-bubbles";
import NewsCard from "../../components/newsCard/news-card";
import GetSpacePhotos from "../../components/SpacePhotosComponent/space-photos";
import Manifest from "../../components/manifestComponent/manifest";
import LoadingIndicator from "../../components/loadingIndicator/loading-indicator";
import NewsModal from "../../components/newsModal/news-modal";
import removeKeysOfObject from "../../hooks/remove-keys-of-object";
import Fox from "../../components/fox/fox";
import axios from "axios";

function NewsSection() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cats");
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalData, setModalData] = useState(data[0]);
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
  useEffect(() => {
    setLoading((prevData) => true);
    axios
      .get(
        `/.netlify/functions/fetch-news?query=${query}&pagenumber=${pageNumber}`
      )
      .then((response) => {
        setData((prevData) => {
          return removeKeysOfObject(
            [...prevData, ...response.data.articles],
            keysToRemove
          );
        });
        setLoading((prevData) => false);
        setHasMore((prevData) => response.data.total_hits >= data.length + 20);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [query, pageNumber]);

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
