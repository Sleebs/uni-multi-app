import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import Map from "../../components/Map/Map";
import { TUserCredentials } from "../../.expo/types/user";
import getGeolocation from "../../hooks/getGeolocation.hook";
import Device from "expo-device";

export default function TabOneScreen() {
  const user: TUserCredentials = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };
  const { location, errorMsg } = getGeolocation();

  return (
    <View style={styles.container}>
      {location && (
        <Map
          lat={location?.coords.latitude}
          long={location?.coords.longitude}
        ></Map>
      )}
    </View>
  );
}

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
