import React from "react";
import { item } from "../../.expo/types/items";
import getObjInfo from "../../hooks/getObjInfo.hook";
import { Text } from "../Themed";
import { TUserCredentials, TUserComplete } from "../../.expo/types/user";

import { TouchableOpacity, StyleSheet, Image } from "react-native";

type Props = {
  item: item;
  user: TUserCredentials | TUserComplete;
  distance: number;
};

const NearbyItem = ({ item, user, distance }: Props) => {
  const { itemInfo, isLoading, error, reFetch } = getObjInfo({
    user: user,
    item: item,
  });

  return (
    <TouchableOpacity
      onPress={() => console.log(JSON.stringify(itemInfo))}
      style={{
        flex: 0.2,
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        minHeight: 50,
        backgroundColor: distance > 100 ? "red" : "",
      }}
    >
      {itemInfo?.image ? <Base64Image base64String={itemInfo.image} /> : null}
      <Text>{itemInfo?.type} </Text>
      <Text>{itemInfo?.name} </Text>
      <Text>lvl: {itemInfo?.level} </Text>
      <Text>{distance}</Text>
    </TouchableOpacity>
  );
};

const Base64Image = ({ base64String }: { base64String: string }) => {
  const source = { uri: `data:image/png;base64,${base64String}` };

  return <Image source={source} style={{ width: 50, height: 50 }} />;
};

export default NearbyItem;
