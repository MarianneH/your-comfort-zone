import React from "react";
import { Link } from "react-router-dom";
import NewsSection from "../../components/newsSection/news-section";
import GetSpacePhotos from "../../components/SpacePhotosComponent/space-photos";
import WelcomeSection from "../../components/welcomeSection/welcome-section";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link> */}
      <WelcomeSection />
      <NewsSection />
    </div>
  );
}
