import styles from "./newsCard.module.css";

function NewsCard({ url, media, title, excerpt }) {
  return (
    <a href={url} className={styles.news_item}>
      <img src={media} alt={title} className={styles.news_images} />
      <div>
        <h3 className={styles.news_title}>{title}</h3>
        <div className={styles.news_excerpt}>{excerpt}</div>
      </div>
    </a>
  );
}
export default NewsCard;
