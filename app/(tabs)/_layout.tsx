import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import UserMini from "../../components/User/UserMini";
import Colors from "../../constants/Colors";
import { View } from "../../components/Themed";
import { Tuser } from "../../.expo/types/user";
import { setUserData } from "../../stores/userStore";
import { useDispatch } from "react-redux";
import getUserInfo from "../../hooks/getUserInfo.hook";
import { useEffect } from "react";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const userPartial: Tuser = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };
  const updateUserData = (user: Tuser | null) => {
    dispatch(setUserData(user));
  };
  const { userInfo } = getUserInfo({ uid: 140 });
  useEffect(() => {
    if (userInfo != null) {
      updateUserData(userInfo);
    }
  }, [userInfo]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: `${userInfo?.name} lv ${
            Math.floor(userInfo?.experience / 100) + 1
          }`,
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerRight: () => (
            <Link href='/userProfile' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='user'
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <View style={{ width: 190, paddingLeft: 5 }}>
              <UserMini />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: "Items List",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='th-list' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='ranking'
        options={{
          title: "Ranking",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='mortar-board' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
function dispatch(arg0: { payload: any; type: "user/setUserData" }) {
  throw new Error("Function not implemented.");
}
