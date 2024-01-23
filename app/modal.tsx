import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TextInput, Switch, Image } from "react-native";
import { useEffect, useState } from "react";
import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";

import CharacterSheet from "../components/CharacterSheet/CharacterSheet";
import { Tuser } from "../.expo/types/user";

export default function ModalScreen() {
  const userPartial: Tuser = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);

  return (
    <View style={styles.container}>
      {/* <Text style={{}}>{JSON.stringify(userData)}</Text> */}

      {/* //////  PROPIC - NAME  ////// */}
      <CharacterSheet />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

// const Base64Image = ({ base64String }: { base64String?: string }) => {
//   const source = { uri: `data:image/png;base64,${base64String}` };

//   return (
//     <Image
//       source={
//         base64String
//           ? source
//           : require("../assets/images/default_user_portrait.png")
//       }
//       style={{ width: 90, height: 90 }}
//     />
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
