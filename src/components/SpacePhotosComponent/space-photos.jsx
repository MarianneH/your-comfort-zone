import React, { useEffect, useState } from "react";
import styles from "./space-photos.module.css";
import sound from "./tranquility.mp3";
import play from "../../assets/play.png";
import stop from "../../assets/stop.png";
import axios from "axios";

function togglePlay(setIsPlaying, isPlaying, audio) {
  setIsPlaying(!isPlaying);
  isPlaying ? audio.pause() : audio.play();
}

export default function GetSpacePhotos() {
  const [photoData, setPhotoData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound));

  useEffect(() => {
    axios
      .get(`http://localhost:8000/space`)
      .then((response) => setPhotoData(response.data))
      .catch((err) => console.log(err));
  }, []);

  if (!photoData) return <div />;

  return (
    <div className={styles.space_container} id="space">
      <div className={styles.spacer}></div>
      <div className={styles.spacePhotoContainer}>
        <img
          src={photoData.url}
          alt={photoData.title}
          className={styles.spacePhotoImage}
        />
        <div className={styles.bottom_container}>
          <h1 className={styles.spacePhotoTitle} id="space-section">
            {photoData.title}
          </h1>
          <div
            href="#space-section"
            className={styles.spacePhotoMusic}
            onClick={() => togglePlay(setIsPlaying, isPlaying, audio)}
          >
            {isPlaying ? (
              <img src={stop} alt="stop" />
            ) : (
              <img src={play} alt="play" />
            )}
          </div>
        </div>
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
}
