import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchComponent from "../searchComponent/searchComponent";
import styles from "./newsComponent.module.css";
import "../../root.css";
import SearchBubbles from "./search-bubbles";

function GetNewsFeed() {
  const sampleNews = [
    {
      urlToImage:
        "https://images.pexels.com/photos/6475297/pexels-photo-6475297.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some example title",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      urlToImage:
        "https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some more title",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      urlToImage:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      urlToImage:
        "https://images.pexels.com/photos/92870/pexels-photo-92870.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news4",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
  ];
  const [data, setData] = useState(sampleNews);
  const [query, setQuery] = useState("music");
  const [searchInput, setSearchInput] = useState(query);
  const urls = {
    guardian: `https://content.guardianapis.com/search?q=good&api-key=${process.env.REACT_APP_NEWS_KEY}&section=lifeandstyle`,
    newscatcher: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20`,
    newsapi: `https://newsapi.org/v2/everything?q=${query}&domains=theguardian.com&pageSize=20&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
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
  // -----NEWSAPI----------
  async function fetchAPI(url, setResp) {
    axios
      .get(url)
      .then((response) => setData(response.data.articles))
      .catch((e) => {
        console.log("ERROR MESSAGE: " + e);
        setData(sampleNews);
      });
  }

  // //   -----NEWSCATCHER-----
  // async function fetchAPI(url, setResp) {
  //   axios
  //     .get(url, {
  //       headers: {
  //         "x-api-key": process.env.REACT_APP_NEWS_CATCHER_KEY,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       setResp(response.data.articles);
  //       console.log(response.data.articles);
  //     })
  //     .catch((e) => {
  //       console.log("ERROR MESSAGE: " + e);
  //       setData(sampleNews);
  //     });
  // }

  useEffect(() => {
    fetchAPI(urls.newsapi, setData);
    console.log(data);
  }, [query]);

  if (data.length === 0) {
    return <div>no use today</div>;
  }

  return (
    <>
      <SearchBubbles setQuery={setQuery} />
      {/* <SearchComponent
        handleChange={handleChange}
        handleClick={handleClick}
        searchInput={searchInput}
      /> */}
      <div className={styles.newsfeed}>
        {data.map((element, index) => (
          <a href={element.url} key={index} className={styles.news_item}>
            <img
              src={element.urlToImage}
              alt={element.title}
              className={styles.news_images}
            />
            <h3 className={styles.news_title}>{element.title}</h3>
            <div className={styles.news_excerpt}>{element.description}</div>
          </a>
        ))}
      </div>
    </>
  );
}
export default GetNewsFeed;

// ------THE GUARDIAN---------
//   async function fetchAPI(url, setResp) {
//     axios
//       .get(url)
//       .then((data) => setResp(data.data.response.results))
//       .catch((e) => {
//         console.log("ERROR MESSAGE: " + e);
//         setData(sampleNews);
//       });
//   }
