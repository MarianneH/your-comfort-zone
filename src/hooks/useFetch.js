import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        seterror(data.error);
        setdata(response);
        setloading(false);
      })
      .catch((e) => {
        console.log("ERROR MESSAGE : " + e);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
