const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");

exports.handler = async function (event, context) {
  const userPrompt = event.queryStringParameters.userprompt;
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const imageParameters = {
    prompt: userPrompt,
    n: 1,
    size: "256x256",
  };

  try {
    const response = await openai.createImage(imageParameters);
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
