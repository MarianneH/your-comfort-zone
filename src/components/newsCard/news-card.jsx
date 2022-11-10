import styles from "./newsCard.module.css";

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
      <img src={media} alt={title} className={styles.news_images} />
      <div>
        <h3 className={styles.news_title}>{title}</h3>
        <div className={styles.news_excerpt}>{excerpt}</div>
      </div>
    </div>
  );
}
export default NewsCard;
