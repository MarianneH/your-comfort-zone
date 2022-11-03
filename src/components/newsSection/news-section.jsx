import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./newsSection.module.css";
import "../../root.css";
import SearchBubbles from "../searchBubbles/search-bubbles";
import NewsCard from "../newsCard/news-card";
import GetSpacePhotos from "../SpacePhotosComponent/space-photos";

function NewsSection() {
  const sampleNews = [
    {
      media:
        "https://images.pexels.com/photos/6475297/pexels-photo-6475297.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some example title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some more title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news3",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/92870/pexels-photo-92870.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news4",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/6475297/pexels-photo-6475297.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some example title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some more title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news3",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/92870/pexels-photo-92870.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news4",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/6475297/pexels-photo-6475297.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some example title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some more title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news3",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/92870/pexels-photo-92870.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news4",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/6475297/pexels-photo-6475297.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some example title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Some more title",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news3",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
    {
      media:
        "https://images.pexels.com/photos/92870/pexels-photo-92870.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "news4",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus adipisci repellendus libero neque dicta corporis officiis, eligendi at similique iure perferendis autem voluptas suscipit dignissimos labore ad ipsam illo!",
      url: "https://theuselessweb.com/",
    },
  ];
  const [data, setData] = useState(sampleNews);
  const [query, setQuery] = useState("music");
  const urls = {
    guardian: `https://content.guardianapis.com/search?q=good&api-key=${process.env.REACT_APP_NEWS_KEY}&section=lifeandstyle`,
    newscatcher: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20`,
    newsapi: `https://newsapi.org/v2/everything?q=${query}&domains=theguardian.com&pageSize=20&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
  };

  //   -----NEWSCATCHER-----
  async function fetchAPI(url, setResp) {
    axios
      .get(url, {
        headers: {
          "x-api-key": process.env.REACT_APP_NEWS_CATCHER_KEY,
        },
      })
      .then((response) => {
        setResp(response.data.articles);
      })
      .catch((e) => {
        console.log("ERROR MESSAGE: " + e);
        setData(sampleNews);
      });
  }

  useEffect(() => {
    fetchAPI(urls.newscatcher, setData);
  }, [query]);

  if (data.length === 0) {
    return <div>no use today</div>;
  }

  return (
    <div className={styles.news_section}>
      <SearchBubbles setQuery={setQuery} />
      <div className={styles.newsfeed}>
        {data.map((element, index) => (
          <>
            {index === 4 && <GetSpacePhotos />}
            {index === 9 && (
              <div className={styles.api_space}> Space for API 2</div>
            )}
            {index === 14 && (
              <div className={styles.api_space}> Space for API 2</div>
            )}
            <NewsCard
              key={index}
              url={element.url}
              media={element.media}
              title={element.title}
              excerpt={element.excerpt}
            />
          </>
        ))}
      </div>
    </div>
  );
}
export default NewsSection;

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

// // -----NEWSAPI----------
// async function fetchAPI(url, setResp) {
//   axios
//     .get(url)
//     .then((response) => setData(response.data.articles))
//     .catch((e) => {
//       console.log("ERROR MESSAGE: " + e);
//       setData(sampleNews);
//     });
// }

// function handleChange(event) {
//   setSearchInput(event.target.value);
// }

// function handleClick(event) {
//   event.preventDefault();
//   setQuery(searchInput);
//   console.log(searchInput);
//   setSearchInput("");
// }
