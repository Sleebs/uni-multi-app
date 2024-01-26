import React from "react";
import { View, Text } from "../components/Themed";
import { useGlobalSearchParams } from "expo-router";
import activateItem from "../hooks/activateItem.hook";
import { TUserCredentials } from "../.expo/types/user";
import { TouchableOpacity, Image } from "react-native";
import useDistance from "../hooks/useDistance.hook";

const itemmodal = () => {
  const item = JSON.parse(useGlobalSearchParams().itemModal);
  const user: TUserCredentials = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };
  const { activate } = activateItem({ user, item });
  const handlePress = () => {
    activate();
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 42,
          }}
        >
          {item.name}
        </Text>

        <Text>
          Lv: {item.level} {item.type}
        </Text>
        {item.image ? (
          <Base64Image base64String={item.image} />
        ) : (
          <Image
            source={require("../assets/images/no-image.png")}
            style={{ width: 200, height: 200 }}
          />
        )}

        {item.type === "monster" ? (
          <Text style={{ color: "lightcoral", fontSize: 24 }}>
            - {item.level} ~ {item.level * 2} HP
          </Text>
        ) : null}

        {item.type === "candy" ? (
          <Text style={{ color: "lightgreen", fontSize: 24 }}>
            + {item.level} ~ {item.level * 2} HP
          </Text>
        ) : null}

        {item.type !== "monster" && item.type !== "candy" ? (
          <Text>Equip!</Text>
        ) : null}

        {useDistance({
          from: { latitude: 45.47643527916907, longitude: 9.23182785582613 },
          to: { latitude: item.lat, longitude: item.lon },
        }) < 100 ? (
          <Text> TOO FAR</Text>
        ) : (
          <TouchableOpacity
            style={{ backgroundColor: "azure", borderRadius: 5 }}
            onPress={activate}
          >
            <Text style={{ fontSize: 34, color: "black" }}>ACTIVATE</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const Base64Image = ({ base64String }: { base64String: string }) => {
  const source = { uri: `data:image/png;base64,${base64String}` };

  return <Image source={source} style={{ width: 200, height: 200 }} />;
};

export default itemmodal;
