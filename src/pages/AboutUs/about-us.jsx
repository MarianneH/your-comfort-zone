import styles from "./aboutUs.module.css";
import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/welcome-image.jpeg";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <img src={background} alt="Mountains and Sky" className={styles.image} />
      <div className={styles.about_us}>
        {/* <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              </ul> */}
        <h1>Who Made This Possible</h1>
        <br/>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h2>Marianne Helbig</h2>
        <br/>
        <p>--Marianne Content--</p>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h2>Luis Felipe Urdapilleta</h2>
        <br/>
        <p>--Felipe Content--</p>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h2>Georg Weber</h2>
        <br/>
        <p>--Georg Content--</p>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h2>Hendra Widjaya</h2>
        <br/>
        <p>--Hendra Content--</p>
        <br/>
        <br/>
        <hr/>
        <br/>
      </div>
    </div>
  );
}
