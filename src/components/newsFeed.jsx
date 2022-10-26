import React, { useState, useEffect } from "react";
import axios from "axios";

function GetNewsFeed() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("music");
  const urls = {
    guardian: `https://content.guardianapis.com/search?q=good&api-key=${process.env.REACT_APP_NEWS_KEY}&section=lifeandstyle`,
    newscatcher: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20`,
    newsapi: `https://newsapi.org/v2/everything?q=Apple&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
  };

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
      .then((data) => setResp(data.data.articles))
      .catch((e) => console.log(e));
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
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
export default GetNewsFeed;
