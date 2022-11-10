import styles from "./newsModal.module.css";
import React from "react";
import { useEffect } from "react";

function NewsModal({ data, setShowModal }) {
  useEffect(() => {
    console.log(data);
  }, [data]);

  function handleClick() {
    setShowModal(false);
  }
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <div>In focus</div>
          <div onClick={handleClick}>&#10005;</div>
        </div>
        {data && (
          <div className={styles.modal_content}>
            <div className={styles.image}>
              <img src={data.media} alt={data.title} />{" "}
            </div>
            <div className={styles.headline}>{data.title}</div>
            <div className={styles.date}>{data.published_date}</div>
            <div className={styles.link}>{data.link}</div>
            <div className={styles.summary}>{data.summary}</div>
            <div className={styles.author}>{data.authors}</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default NewsModal;
