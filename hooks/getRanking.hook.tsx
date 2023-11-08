import { useState, useEffect } from "react";
import { TUserCredentials, TUserComplete } from "../.expo/types/user";
import React from "react";

type Props = { user: TUserCredentials | TUserComplete };

function getRanking({ user }: Props) {
  const [usersRanking, setUsersRanking] = useState<Array<any>>(
    new Array<any>()
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  const url = "https://develop.ewlab.di.unimi.it/mc/mostri/ranking";
  const urlParams = new URLSearchParams({
    sid: user.sid,
  });

  const fetchData = async () => {
    setIsLoading(true);
    fetch(`${url}?${urlParams}`)
      .then((res) => (res.ok ? res.json() : console.error(res.status)))
      .then((data) => setUsersRanking(data))
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

  return { usersRanking, isLoading, error, reFetch };
}

export default getRanking;
