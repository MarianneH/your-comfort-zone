import React, { useState } from "react";
import Axios from "axios";
import styles from "./fox.module.css";

function Fox() {
  const [fox, setFox] = useState({
    image: "https://randomfox.ca/images/9.jpg",
    link: "",
  });

  const getFox = () => {
    Axios.get("https://randomfox.ca/floof/").then((response) =>
      setFox(response.data)
    );
  };

  return (
    <div className={styles.foxContainer}>
      <div className={styles.spacer}></div>
      <div className="fox">
        <img src={fox.image} onClick={getFox} title={"Click me for more fox"} />
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
}

export default Fox;
