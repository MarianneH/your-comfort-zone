import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchComponent from "../searchComponent/searchComponent";

function GetNewsFeed() {
  const sampleNews = {
    media:
      "https://images.pexels.com/photos/6475297/pexels-photo-6475297.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Some example title",
    excerpt:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
  };
  const [data, setData] = useState(sampleNews);
  const [query, setQuery] = useState("music");
  const [searchInput, setSearchInput] = useState(query);
  const urls = {
    guardian: `https://content.guardianapis.com/search?q=good&api-key=${process.env.REACT_APP_NEWS_KEY}&section=lifeandstyle`,
    newscatcher: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20`,
    newsapi: `https://newsapi.org/v2/everything?q=Apple&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
  };

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setQuery(searchInput);
    console.log(searchInput);
    setSearchInput("");
  }

  // ------THE GUARDIAN---------
  //   async function fetchAPI(url, setResp) {
  //     axios
  //       .get(url)
  //       .then((data) => setResp(data.data.response.results))
  //       .catch((e) => console.log(e));
  //   }

  //   -----NEWSCATCHER-----
  async function fetchAPI(url, setResp) {
    axios
      .get(url, {
        headers: {
          "x-api-key": process.env.REACT_APP_NEWS_CATCHER_KEY,
        },
      })
      .then((data) => {
        setResp(data.data.articles);
        console.log(data.data.articles);
      })
      .catch((e) => {
        console.log("ERROR MESSAGE: " + e);
        setData(sampleNews);
      });
  }

  //-----NEWSAPI----------
  //   async function fetchAPI(url, setResp) {
  //     axios
  //       .get(url)
  //       .then((data) => console.log(data))
  //       .catch((e) => console.log(e));
  //   }

  useEffect(() => {
    fetchAPI(urls.newscatcher, setData);
    console.log(data);
  }, [query]);

  return (
    <>
      <SearchComponent
        handleChange={handleChange}
        handleClick={handleClick}
        searchInput={searchInput}
      />
      {/* {data.map((element, index) => (
        <div key={index}>
          <img src={element.media} alt={element.title} class="news-images" />
          <h3 class="news-title">{element.title}</h3>
          <div class="news-excerpt">{element.excerpt}</div>
        </div>
      ))} */}
    </>
  );
}
export default GetNewsFeed;
