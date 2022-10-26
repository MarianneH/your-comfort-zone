import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchComponent from "../searchComponent/searchComponent";
import "./newsComponent.modules.css";
import "../../root.css";
import SearchBubbles from "./search-bubbles";

function GetNewsFeed() {
  const sampleNews = [
    {
      media:
        "https://images.pexels.com/photos/6475297/pexels-photo-6475297.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some example title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
    },
    {
      media:
        "https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some more title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
    },
    {
      media:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news3",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
    },
    {
      media:
        "https://images.pexels.com/photos/92870/pexels-photo-92870.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news4",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
    },
  ];
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

  //   -----NEWSCATCHER-----
  async function fetchAPI(url, setResp) {
    axios
      .get(url, {
        headers: {
          "x-api-key": process.env.REACT_APP_NEWS_CATCHER_KEY,
        },
      })
      .then((response) => {
        console.log(response);
        setResp(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((e) => {
        console.log("ERROR MESSAGE: " + e);
        setData(sampleNews);
      });
  }

  useEffect(() => {
    fetchAPI(urls.newscatcher, setData);
    console.log(data);
  }, [query]);

  if (data.length === 0) {
    return <div>no use today</div>;
  }

  return (
    <>
      <SearchBubbles setQuery={setQuery} />
      <SearchComponent
        handleChange={handleChange}
        handleClick={handleClick}
        searchInput={searchInput}
      />
      <div class="newsfeed">
        {data.map((element, index) => (
          <div key={index} class="news-item">
            <img src={element.media} alt={element.title} class="news-images" />
            <h3 class="news-title">{element.title}</h3>
            <div class="news-excerpt">{element.excerpt}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default GetNewsFeed;

//-----NEWSAPI----------
//   async function fetchAPI(url, setResp) {
//     axios
//       .get(url)
//       .then((data) => console.log(data))
//       .catch((e) => console.log(e));
//   }

// ------THE GUARDIAN---------
//   async function fetchAPI(url, setResp) {
//     axios
//       .get(url)
//       .then((data) => setResp(data.data.response.results))
//       .catch((e) => console.log(e));
//   }
