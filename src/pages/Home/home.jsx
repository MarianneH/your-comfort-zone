import React from "react";
import { Link } from "react-router-dom";
import NewsSection from "../../sections/newsSection/news-section";
import WelcomeSection from "../../sections/welcomeSection/welcome-section";
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
