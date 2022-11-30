import React, { useEffect, useState } from "react";
import LoadingIndicator from "../loadingIndicator/loading-indicator";
import styles from "./manifest.module.css";

function Manifest() {
  const [userPrompt, setUserPrompt] = useState("carrots flying in space");
  const [userInput, setUserInput] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `/.netlify/functions/fetch-dalle?userprompt=${userPrompt}`
      );
      const data = await res.json();
      console.log(data.data[0].url);
      setImageUrl(data.data[0].url);
      setLoading(false);
    }
  }, [userPrompt]);

  const handleClick = async () => {
    setUserPrompt(userInput);
  };

  return (
    <div className={styles.manifest_container} id="dalle">
      <div className={styles.spacer}></div>
      <div className={styles.top_container}>
        <p className={styles.manifest_title}>
          Manifest your positive thoughts into an AI Generated Image
        </p>

        <input
          className={styles.manifest_input}
          placeholder="e.g: Amazonas jungle painted by Dürer"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleClick}>Manifest</button>
        <div>{loading && <LoadingIndicator />}</div>
        <div className={styles.manifest_image_container}>
          {imageUrl ? (
            <img
              className={styles.manifest_image}
              src={imageUrl}
              alt="AI Generated"
            />
          ) : (
            <></>
          )}{" "}
        </div>
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
}

export default Manifest;
