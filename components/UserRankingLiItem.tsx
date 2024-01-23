import React from "react";
import { Image, View } from "react-native";
import { Text } from "./Themed";
import getUserInfo from "../hooks/getUserInfo.hook";
import { TUserCredentials } from "../.expo/types/user";

type Props = { uid: number };

const UserRankingLiItem = ({ uid }: Props) => {
  const { userInfo, isLoading } = getUserInfo({ uid: uid });

  return (
    <>
      {!isLoading ? (
        <View
          style={{
            flex: 0.2,
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Base64Image />

          <Text>{userInfo?.name}</Text>
          <Text>
            Lv {Math.floor(userInfo?.experience / 100)} Xp:{" "}
            {userInfo?.experience % 100}
          </Text>
        </View>
      ) : (
        <Text> Loading</Text>
      )}
    </>
  );
};

const Base64Image = ({ base64String }: { base64String?: string }) => {
  const source = { uri: `data:image/png;base64,${base64String}` };

  return (
    <Image
      source={
        base64String
          ? source
          : require("../assets/images/default_user_portrait.png")
      }
      style={{ width: 90, height: 90 }}
    />
  );
};

export default UserRankingLiItem;
