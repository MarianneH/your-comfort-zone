import React from "react";
import Navigation from "../navigation/navigation";
import styles from "./navigationButton.module.css";

function NavigationButton() {
  return (
    <div>
      <Navigation />
      <div className={styles.navigation_button}>menu</div>
    </div>
  );
}
export default NavigationButton;
