import { useState, useEffect } from "react";
import { TUserCredentials, TUserComplete } from "../.expo/types/user";
import React from "react";

type Props = {
  user: TUserCredentials | TUserComplete;
  lat: string;
  lon: string;
};

function getNearbyItems({ user, lat, lon }: Props) {
  const [items, setItems] = useState<Array<any>>(new Array<any>());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  const url = "https://develop.ewlab.di.unimi.it/mc/mostri/objects";
  const urlParams = new URLSearchParams({
    sid: user.sid,
    lat: lat,
    lon: lon,
  });

  const fetchData = async () => {
    setIsLoading(true);
    fetch(`${url}?${urlParams}`)
      .then((res) => (res.ok ? res.json() : console.error(res.status)))
      .then((data) => setItems(data))
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

  return { items, isLoading, error, reFetch };
}

export default getNearbyItems;
