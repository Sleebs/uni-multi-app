import { useState, useEffect } from "react";
import { TUserCredentials } from "../.expo/types/user";

type Props = {};

function getUserCredentials() {
  const [user, setUser] = useState<TUserCredentials>({ sid: "", uid: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  const url = `https://develop.ewlab.di.unimi.it/mc/mostri/users`;
  const options = {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "Fix my bugs",
      completed: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    fetch(url, options)
      .then((res) =>
        res.ok ? res.json() : setError(new Error("bad response"))
      )
      .then((data) => setUser(data))
      .then(() => setIsLoading(false))
      .catch((err) => {
        // console.error(err);
        // alert(err);
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

  return { user, isLoading, error, reFetch };
}

export default getUserCredentials;
