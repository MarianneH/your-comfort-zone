import styles from "./newsModal.module.css";
import React from "react";

function NewsModal({ data, setShowModal }) {
  function handleClick() {
    setShowModal(false);
  }
  return (
    <div className={styles.modal_container} onClick={handleClick}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <div className={styles.header_text}>In focus</div>
          <div onClick={handleClick} className={styles.header_x}>
            &#10005;
          </div>
        </div>
        {data && (
          <div className={styles.modal_content}>
            <h1 className={styles.headline}>{data.title}</h1>
            <div className={styles.date}>
              {data.published_date} - {data.authors}
            </div>
            <div className={styles.image}>
              <img src={data.media} alt={data.title} />{" "}
            </div>
            <div className={styles.summary}>{data.summary}</div>
            <a
              href={data.link}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              go to original article &#8594;
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
export default NewsModal;
