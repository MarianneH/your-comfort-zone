import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import styles from "./manifest.module.css";

function Manifest() {
  const [userPrompt, setUserPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: 1,
      size: "256x256",
    };
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    console.log(urlData);
    setImageUrl(urlData);
  };

  return (
    <div className={styles.manifest_container}>
      <p className={styles.manifest_title}>
        Manifest your positive thoughts into an image
      </p>

      <input
        className={styles.manifest_input}
        placeholder="e.g: Amazonas jungle painted by Dürer"
        onChange={(e) => setUserPrompt(e.target.value)}
      />
      <button onClick={() => generateImage()}>Manifest</button>

      {imageUrl ? (
        <img
          className={styles.manifest_image}
          src={imageUrl}
          alt="AI Generated"
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Manifest;
