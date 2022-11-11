import axios from "axios";

async function fetchNewsAPI(url, setData, setLoading, setApiResults) {
  setLoading(true);
  axios
    .get(url, {
      headers: {
        "x-api-key": process.env.REACT_APP_NEWS_CATCHER_KEY,
      },
    })
    .then((response) => {
      let currentData = response.data.articles;
      currentData.forEach((e) => {
        [
          "_score",
          "author",
          "country",
          "_id",
          "topic",
          "twitter_account",
          "rights",
          "rank",
          "published_date_precision",
          "language",
          "is_opinion",
          "clean_url",
        ].forEach((el) => delete e[el]);
      });
      setApiResults(response.data.total_hits);
      setData((prevResp) => {
        return [...prevResp, ...currentData];
      });
      setLoading(false);
    })
    .catch((e) => {
      console.log("ERROR MESSAGE : " + e);
    });
}

export default fetchNewsAPI;
