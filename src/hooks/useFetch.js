import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url, key, setLoading) {
  const [dataX, setData] = useState(null);
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
        setData(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log("ERROR MESSAGE : " + e);
        setError(e);
      });
  }, [url]);

  return { dataX, errorX };
}

export default useFetch;
