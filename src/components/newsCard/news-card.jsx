import styles from "./newsCard.module.css";
import fallback from "../../assets/fallback.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";

function NewsCard({
  index,
  media,
  title,
  excerpt,
  setShowModal,
  setModalIndex,
  setImage,
}) {
  useEffect(() => {
    axios
      .get(media)
      .then(() => setImage(media))
      .catch((e) => {
        console.log(e);
        setImage(fallback);
      });
  }, []);

  return (
    <div
      key={index}
      onClick={() => {
        setModalIndex(index);
        setShowModal(true);
      }}
      className={styles.news_item}
    >
      <img src={image} alt={title} className={styles.news_images} />
      <div>
        <h3 className={styles.news_title}>{title}</h3>
        <div className={styles.news_excerpt}>{excerpt}</div>
      </div>
    </div>
  );
}
export default NewsCard;
