import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

function Navigation({ setShowNav }) {
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: "orange" };
    }
  };
  function handleBackToTop() {
    window.scrollTo(0, 0);
    setShowNav((prevState) => false);
  }

  function handleNavigationClick() {
    setShowNav(false);
  }
  return (
    <div>
      <nav className={`${styles.navigation}`}>
        <ul>
          <li>
            <NavLink
              style={getActiveLinkStyle}
              onClick={handleNavigationClick}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={getActiveLinkStyle}
              onClick={handleNavigationClick}
              to="/about-us"
            >
              About us
            </NavLink>
          </li>
          <hr />
          <li>
            <div className={styles.back_to_top} onClick={handleBackToTop}>
              &#8593; Back to top &#8593;
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
