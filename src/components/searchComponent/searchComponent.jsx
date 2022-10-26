function SearchComponent({ handleClick, handleChange, searchInput }) {
  return (
    <>
      <form>
        <input onChange={handleChange} value={searchInput} />
        <button onClick={handleClick}>Search</button>
      </form>
    </>
  );
}
export default SearchComponent;
