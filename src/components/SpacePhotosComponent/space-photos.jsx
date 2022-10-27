import React, { useEffect, useState } from "react";
import styles from "./space-photos.module.css";
import sound from "./tranquility.mp3";

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
        `https://api.nasa.gov/planetary/apod?api_key=zQQigcCrtZ7mcVM1M3IHYjNajMcKLum3oGgf0ulz`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <div className={styles.spacePhotoContainer}>
        <img
          src={photoData.url}
          alt={photoData.title}
          className={styles.spacePhotoImage}
        />
        <h1 className={styles.spacePhotoTitle} id="space-section">{photoData.title}</h1>
        <p className={styles.spacePhotoExplanation}>{photoData.explanation}</p>
          <div className={styles.spacePhotoMusicContainer}>
            <a 
            href="#space-section" 
            className={styles.spacePhotoMusic} 
            onClick={()=> togglePlay(setIsPlaying,isPlaying, audio)}>
              {isPlaying ? "Pause" : "Music"}
            </a>
          </div>
      </div>
    </>
  );
}
