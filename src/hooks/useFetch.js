import axios from "axios";
import { useEffect, useState } from "react";

// url = url to fetch the API incl. API key in url string OR not incl. API key in url string
// key = mostly empty string "" - only relevant if API key has to be passed in headers (like for the news API)
// setLoading = has to be a state in parent component using const [loading, setloading] = useState(true)
function useFetch(url, key, setLoading) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setLoading((prevData) => true);
    axios
      .get(url, {
        headers: {
          "x-api-key": key,
        },
      })
      .then((response) => {
        setResponse((prevData) => response.data);
        setLoading((prevData) => false);
      })
      .catch((e) => {
        console.log("ERROR MESSAGE : " + e);
      });
    // eslint-disable-next-line
  }, [url]);

  return { response };
}

export default useFetch;
