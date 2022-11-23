const axios = require("axios");

exports.handler = async function (event, context) {
  console.log(event);
  console.log(context);

  const targetURL = `https://api.nasa.gov/planetary/apod?api_key=fVqS96C8GmZXNB9Oy4mSHgXQJ0TtQvgTxEQD8yld`;

  try {
    const response = await axios.get(targetURL);
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
