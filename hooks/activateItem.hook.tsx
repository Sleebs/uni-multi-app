import { useState, useEffect } from "react";
import { TUserCredentials, TUserComplete } from "../.expo/types/user";
import { item } from "../.expo/types/items";
import { useDispatch, useSelector } from "react-redux";
import { Tuser } from "../.expo/types/user";
import { setUserData } from "../stores/userStore";

type Props = { user: TUserCredentials | TUserComplete; item: item };

function activateItem({ user, item }: Props) {
  let userData = useSelector((state: any) => state.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const dispatch = useDispatch();
  const updateUserData = (user: Tuser | null) => {
    dispatch(setUserData(user));
  };

  const url = `https://develop.ewlab.di.unimi.it/mc/mostri/objects/${item.id}/activate`;
  const urlParams = new URLSearchParams({
    sid: user.sid,
  });
  const options = {
    method: "POST",
    body: JSON.stringify({
      sid: user.sid,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const activate = async () => {
    setIsLoading(true);
    fetch(url, options)
      .then((res) => (res.ok ? res.json() : console.error(res.status)))
      .then((data) => updateUserData(data))
      .then(() =>
        console.log("Response new userData: \n" + JSON.stringify(userData))
      )
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error(err);
        alert(err.message);
        setIsLoading(false);
      });
  };
  //   useEffect(() => {
  //     activate();
  //   }, []);

  const reFetch = () => {
    setIsLoading(true);
    activate();
  };

  return { isLoading, error, reFetch, activate };
}

export default activateItem;
