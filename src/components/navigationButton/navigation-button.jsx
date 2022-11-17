import React, { useState } from "react";
import Navigation from "../navigation/navigation";
import styles from "./navigationButton.module.css";

function NavigationButton() {
  const [showNav, setShowNav] = useState(false);
  function handleClick() {
    setShowNav((prevState) => true);
  }
  return (
    <div className={styles.nav_container}>
      {showNav && <Navigation setShowNav={setShowNav} />}
      <div className={styles.navigation_button} onClick={handleClick}>
        menu
      </div>
    </div>
  );
}
export default NavigationButton;
