import React from "react";
import styles from "./circularHeading.module.css";
import welcome from "../../assets/logo.png";
import circle from "../../assets/your-comfort-zone.svg";
import { Parallax } from "react-scroll-parallax";

function Heading() {
  return (
    <div className={styles.container}>
      <Parallax rotate={[0, 360]}>
        <img src={circle} alt="Your Comfort Zone" className={styles.circle} />
      </Parallax>
      <div className={styles.image}>
        <img src={welcome} alt="Welcome" />
      </div>
    </div>
  );
}

export default Heading;
