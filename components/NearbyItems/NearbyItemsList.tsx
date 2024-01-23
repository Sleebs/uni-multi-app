import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Text, View } from "../../components/Themed";
import getNearbyItems from "../../hooks/getNearbyItems.hook";
import { TUserCredentials, TUserComplete } from "../../.expo/types/user";
import NearbyItem from "./NearbyItem";
import useDistance from "../../hooks/useDistance.hook";
type Props = { user: TUserCredentials | TUserComplete };

const NearbyItemsList = ({ user }: Props) => {
  const { items, isLoading, error, reFetch } = getNearbyItems({
    user: user,
    lat: "45.47643527916907",
    lon: "9.23182785582613",
  });

  return (
    <ScrollView style={{ flex: 1, gap: 5 }}>
      {items?.map((item, index) => (
        <NearbyItem
          item={item}
          user={user}
          key={index}
          distance={useDistance({
            from: { latitude: 45.47643527916907, longitude: 9.23182785582613 },
            to: { latitude: item.lat, longitude: item.lon },
          })}
        />
      ))}
    </ScrollView>
  );
};

export default NearbyItemsList;
