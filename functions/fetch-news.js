const axios = require("axios");

exports.handler = async function (event, context) {
  console.log(event);
  console.log(context);

  const options = {
    method: "GET",
    url: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sources=theguardian.com&page_size=20&page=${pageNumber}`,
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
