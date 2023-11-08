import React from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import { Text, View } from "../../components/Themed";
import getNearbyItems from "../../hooks/getNearbyItems.hook";
import { TUserCredentials, TUserComplete } from "../../.expo/types/user";
import getRanking from "../../hooks/getRanking.hook";
type Props = { user: TUserCredentials | TUserComplete };

const NearbyItemsList = ({ user }: Props) => {
  const { items, isLoading, error, reFetch } = getNearbyItems({
    user: user,
    lat: "45.47643527916907",
    lon: "9.23182785582613",
  });
  const { usersRanking } = getRanking({ user });
  // console.log(JSON.stringify(usersRanking));

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text> Inventory</Text>
      {usersRanking?.map((record, index) => (
        <Text key={index}>{JSON.stringify(record)}</Text>
      ))}
      {/* // {items?.map((item, index) => (
      //   <Text>item</Text>
      // ))} */}
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          onPress={() => console.log("lmao")}
          style={styles.itemContainer}
        >
          <Text>ICON </Text>
          <Text>Re Fetch??</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("lmao")}
          style={styles.itemContainer}
        >
          <Text>ICON </Text>
          <Text>Re Fetch??</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  itemContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 30,
    backgroundColor: "rgba(32,32,32,.5)",
  },
});

export default NearbyItemsList;
