import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

function Navigation() {
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) return { color: "orange" };
  };
  return (
    <div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink style={getActiveLinkStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={getActiveLinkStyle} to="/about-us">
              About us
            </NavLink>
          </li>
          <li>
            <div className={styles.back_to_top}>Back to top!</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
