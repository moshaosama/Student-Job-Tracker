import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [resData, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return { resData };
};

export default useFetch;
