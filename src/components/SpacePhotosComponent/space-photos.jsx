import React, { useEffect, useState } from "react";
import styles from "./space-photos.module.css";
import sound from "./tranquility.mp3";
import play from "../../assets/play.png";
import stop from "../../assets/stop.png";

function togglePlay(setIsPlaying, isPlaying, audio) {
  setIsPlaying(!isPlaying);
  isPlaying ? audio.pause() : audio.play();
}

export default function GetSpacePhotos() {
  const [photoData, setPhotoData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound));

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APIKEY}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <div className={styles.topBox}></div>
      <div className={styles.spacePhotoContainer}>
        <img
          src={photoData.url}
          alt={photoData.title}
          className={styles.spacePhotoImage}
        />
        <h1 className={styles.spacePhotoTitle} id="space-section">
          {photoData.title}
        </h1>
        <div
          href="#space-section"
          className={styles.spacePhotoMusic}
          onClick={() => togglePlay(setIsPlaying, isPlaying, audio)}
        >
          {isPlaying ? <img src={stop} /> : <img src={play} />}
        </div>
      </div>
      <div className={styles.downBox}></div>
    </>
  );
}
