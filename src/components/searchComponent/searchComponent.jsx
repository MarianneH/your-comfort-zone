function SearchComponent({ handleClick, handleChange, searchInput }) {
  return (
    <>
      <form class="search">
        <input onChange={handleChange} value={searchInput} />
        <button onClick={handleClick}>Search</button>
      </form>
    </>
  );
}
export default SearchComponent;
