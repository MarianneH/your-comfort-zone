const axios = require("axios");

exports.handler = function (event, context, callback) {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=")
    .then(function (d) {
      console.log(d); // has data here!!
    })
    .catch((e) => {
      // res.status(400).json({ msg: e });
    });
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({ message: "Hello World!" }),
  };

  callback(null, response);
};
