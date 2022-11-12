import styles from "./aboutUs.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="about-us">
      {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            </ul> */}
      <h1>Who made this possible</h1>
      <h2>Marianne</h2>
      <p>--Marianne Content--</p>
      <h2>Felipe</h2>
      <p>--Felipe Content--</p>
      <h2>Georg</h2>
      <p>--Georg Content--</p>
      <h2>Hendra</h2>
      <p>--Hendra Content--</p>
    </div>
  );
}
