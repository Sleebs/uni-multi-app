import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import NearbyItemsList from "../../components/NearbyItems/NearbyItemsList";
import { TUserCredentials } from "../../.expo/types/user";
import getNearbyItems from "../../hooks/getNearbyItems.hook";

export default function TabTwoScreen() {
  const user: TUserCredentials = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };

  return <NearbyItemsList user={user} />;
}
