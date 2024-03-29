import { useState, useEffect } from "react";
import { TUserCredentials, TUserComplete } from "../.expo/types/user";
import { item } from "../.expo/types/items";

type Props = { user: TUserCredentials | TUserComplete; item: item };

const getObjInfo = ({ user, item }: Props) => {
  const [itemInfo, setItemInfo] = useState<null | item>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  const url = `https://develop.ewlab.di.unimi.it/mc/mostri/objects/${item.id}`;
  const urlParams = new URLSearchParams({
    sid: user.sid,
  });

  const fetchData = async () => {
    setIsLoading(true);
    fetch(`${url}?${urlParams}`)
      .then((res) =>
        res.ok ? res.json() : console.error(JSON.stringify(res.status))
      )
      .then((data) => setItemInfo(data))
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

  return { itemInfo, isLoading, error, reFetch };
};

export default getObjInfo;
