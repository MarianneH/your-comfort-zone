// import React, { useState, useEffect } from 'react'
import styles from "./navbar.module.css";

export default function Navbar (props) {
  
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_nav}> {props.children} </ul>
    </nav>
  );
}