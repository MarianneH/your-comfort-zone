import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { NavHashLink } from "react-router-hash-link";

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
  const ref = useRef(null);
  function handleClickHome() {
    ref.current.className = "sub_navigation show";
  }
  function handleSubNavClick() {
    ref.current.className = "sub_navigation";
    setShowNav((prevState) => false);
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
            <NavLink onClick={handleClickHome}>Play Around</NavLink>
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
      <nav className={styles.sub_navigation} ref={ref}>
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
            <NavHashLink to="/#space" onClick={handleSubNavClick}>
              Nasa Image of the Day
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#fox" onClick={handleSubNavClick}>
              Play with Foxes
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#dalle" onClick={handleSubNavClick}>
              Creative with DALL-E2
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
