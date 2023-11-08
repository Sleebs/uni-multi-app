import { useState, useEffect } from "react";

import React from "react";

type Props = {
  url?: string;
};

function useFetch({ url }: Props) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  const options = {
    method: "GET",
    // Url: `https://develop.ewlab.di.unimi.it/mc/mostri/${url}`,
    Url: "https://pokeapi.co/api/v2/pokemon?limit=1&offset=0",
  };

  const fetchData = async () => {
    setIsLoading(true);
    fetch(options.Url)
      .then((res) =>
        res.ok ? res.json() : setError(new Error("bad response"))
      )
      .then((data) => setData(data))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error(err);
        alert(err.message);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
}

export default useFetch;
