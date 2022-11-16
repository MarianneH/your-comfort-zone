import React, { useState } from "react";
import Axios from "axios";

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
    <div className="fox">
      <img src={fox.image} onClick={getFox} title={"Click me for more fox"} />
    </div>
  );
}

export default Fox;
