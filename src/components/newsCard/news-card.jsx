import styles from "./newsCard.module.css";
import fallback from "../../assets/fallback.jpeg";

function NewsCard({
  index,
  media,
  title,
  excerpt,
  setShowModal,
  setModalIndex,
}) {
  return (
    <div
      key={index}
      onClick={() => {
        setModalIndex(index);
        setShowModal(true);
      }}
      className={styles.news_item}
    >
      <div className={styles.news_hover}>
        <div className={styles.news_hover_text}>Read More</div>
      </div>
      <img
        src={media}
        alt={title}
        onError={(e) => {
          e.target.src = fallback;
        }}
        className={styles.news_images}
      />
      <div>
        <h3 className={styles.news_title}>{title}</h3>
        <div className={styles.news_excerpt}>{excerpt}</div>
      </div>
    </div>
  );
}
export default NewsCard;
