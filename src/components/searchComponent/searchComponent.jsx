import styles from "../NewsComponent/newsComponent.module.css";

function SearchComponent({ handleClick, handleChange, searchInput }) {
  return (
    <>
      <form className={styles.search}>
        <input onChange={handleChange} value={searchInput} />
        <button onClick={handleClick}>Search</button>
      </form>
    </>
  );
}
export default SearchComponent;
