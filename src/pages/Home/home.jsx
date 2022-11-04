import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsSection from "../../components/newsSection/news-section";
import WelcomeSection from "../../components/welcomeSection/welcome-section";
import styles from "./home.module.css";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  const [pageProgress, setPageProgress] = useState(0);
  useEffect(() => console.log(pageProgress), [pageProgress]);
  return (
    <Parallax
      onProgressChange={(progress) => {
        setPageProgress(progress);
      }}
    >
      <div className={styles.wrapper}>
        {/* <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link> */}
        <WelcomeSection />
        <NewsSection />
      </div>
    </Parallax>
  );
}
