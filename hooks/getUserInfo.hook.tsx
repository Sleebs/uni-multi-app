import { useState, useEffect } from "react";
import { TUserCredentials, TUserComplete } from "../.expo/types/user";

type Props = { user: TUserCredentials };

function getUserInfo({ user }: Props) {
  const [userInfo, setUserInfo] = useState<TUserComplete | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  const url = `https://develop.ewlab.di.unimi.it/mc/mostri/users/${user.uid}`;
  const urlParams = new URLSearchParams({
    sid: user.sid,
  });
  const fetchData = async () => {
    setIsLoading(true);
    fetch(`${url}?${urlParams}`)
      .then((res) =>
        res.ok ? res.json() : setError(new Error("bad response"))
      )
      .then((data) => setUserInfo(data))
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

  return { userInfo, isLoading, error, reFetch };
}

export default getUserInfo;
