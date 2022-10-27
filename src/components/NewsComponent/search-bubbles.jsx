import music from "../../assets/music.png";
import books from "../../assets/books.png";
import yoga from "../../assets/yoga.png";
import food from "../../assets/food.png";
import sport from "../../assets/sports.png";
import styles from "./newsComponent.module.css";

const bubblesContent = [
  { name: "music", src: music },
  { name: "books", src: books },
  { name: "food", src: food },
  { name: "yoga", src: yoga },
  { name: "sport", src: sport },
];

function SearchBubbles({ setQuery }) {
  return (
    <div className={styles.search_bubbles}>
      {bubblesContent.map((element, index) => (
        <div
          key={index}
          className={styles.bubble}
          name={element.name}
          onClick={() => setQuery(element.name)}
        >
          <img name="music" src={element.src} alt={element.name} />
        </div>
      ))}
    </div>
  );
}
export default SearchBubbles;
