const axios = require("axios");

exports.handler = async function (event, context) {
  const query = event.queryStringParameters.query;
  const pageNumber = event.queryStringParameters.pagenumber;
  const options = {
    method: "GET",
    url: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20&page=${pageNumber}`,
    headers: {
      "x-api-key": process.env.REACT_APP_NEWS_CATCHER_KEY,
    },
  };

  try {
    const response = await axios(options);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
};
