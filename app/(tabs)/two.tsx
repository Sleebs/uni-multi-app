import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import NearbyItemsList from "../../components/NearbyItems/NearbyItemsList";
import { TUserCredentials } from "../../.expo/types/user";

export default function TabTwoScreen() {
  const user: TUserCredentials = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };

  return (
    <View style={styles.container}>
      <NearbyItemsList user={user} />
      {/* <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
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
