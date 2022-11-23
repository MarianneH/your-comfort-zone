import science from "../../assets/science.png";
import music from "../../assets/music.png";
import books from "../../assets/books.png";
import yoga from "../../assets/yoga.png";
import food from "../../assets/food.png";
import sports from "../../assets/sports.png";
import styles from "./searchBubbles.module.css";
import { HashLink } from "react-router-hash-link";

const bubblesContent = [
  { name: "science", src: science },
  { name: "music", src: music },
  { name: "sports", src: sports },
  { name: "food", src: food },
  { name: "books", src: books },
  { name: "yoga", src: yoga },
];

function SearchBubbles({ setQuery, setPageNumber, setData, query }) {
  return (
    <div className={styles.search_bubbles}>
      {bubblesContent.map((element, index) => (
        <HashLink
          to={`/#${element.name}`}
          key={index}
          className={styles.bubble}
          name={element.name}
          onClick={() => {
            setQuery(element.name);
            setPageNumber(1);
            if (query !== element.name) {
              setData([]);
            }
          }}
        >
          <img name={element.name} src={element.src} alt={element.name} />
        </HashLink>
      ))}
      <div className={styles.blur_container}>
        <div className={styles.blur}></div>
      </div>
    </div>
  );
}
export default SearchBubbles;
