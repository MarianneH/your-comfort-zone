const axios = require("axios");

exports.handler = async function (event, context) {
  console.log(event);
  console.log(context);

  const options = {
    method: "GET",
    url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APIKEY}`,
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
