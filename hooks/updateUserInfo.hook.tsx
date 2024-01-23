import React, { useEffect, useState } from "react";
import { TUserCredentials } from "../.expo/types/user";
import { useDispatch, useSelector } from "react-redux";

type Props = { name?: string; positionshare?: boolean; img?: string };

const updateUserInfo = ({ name, positionshare, img }: Props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);

  const [user, setUser] = useState<TUserCredentials>({ sid: "", uid: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  const url = `https://develop.ewlab.di.unimi.it/mc/mostri/users/${userData.uid}`;
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      sid: userData.sid,
      name: "asdrubale",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    fetch(url, options)
      .then((res) => (res.ok ? res.json() : console.error(res.json())))
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
};

export default updateUserInfo;
