import axios from "axios";
import { useEffect, useState } from "react";

// url = url to fetch the API incl. API key in url string OR not incl. API key in url string
// key = mostly empty string "" - only relevant if API key has to be passed in headers (like for the news API)
// setLoading = has to be a state in parent component using const [loading, setloading] = useState(true)
function useFetch(url, key, setLoading) {
  const [response, setResponse] = useState(null);
  const [errorX, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        headers: {
          "x-api-key": key,
        },
      })
      .then((response) => {
        setResponse(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log("ERROR MESSAGE : " + e);
        setError(e);
      });
  }, [url]);

  return { response, errorX };
}

export default useFetch;
