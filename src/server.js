const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/space", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APIKEY}`,
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => res.json(error));
});

app.get("/news/:query/:pageNumber", (req, res) => {
  const query = req.params.query;
  const pageNumber = req.params.pageNumber;
  const options = {
    method: "GET",
    url: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20&page=${pageNumber}`,
    headers: {
      "x-api-key": process.env.REACT_APP_NEWS_CATCHER_KEY,
    },
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((e) => {
      console.log("ERROR MESSAGE : " + e);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
