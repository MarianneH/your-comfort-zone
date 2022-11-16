import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../../components/dropdownMenu/dropdown-menu";
import Navbar from "../../components/navbar/navbar";
import NavItem from "../../components/navItems/nav-items";
import NewsSection from "../../components/newsSection/news-section";
import WelcomeSection from "../../components/welcomeSection/welcome-section";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link> */}
      <WelcomeSection />
      <NewsSection />
      <Navbar>
        <NavItem icon="🦁" > 
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}
