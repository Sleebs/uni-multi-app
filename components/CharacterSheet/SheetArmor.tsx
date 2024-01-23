import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "../Themed";
import { Image } from "react-native";
import getObjInfo from "../../hooks/getObjInfo.hook";
import { Tuser } from "../../.expo/types/user";

type Props = {};

const SheetArmor = (props: Props) => {
  const userPartial: Tuser = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };

  const userData = useSelector((state: any) => state.user);
  const armor =
    userData.armor === null
      ? null
      : getObjInfo({
          user: userPartial,
          item: { type: "itemId", id: userData.armor },
        });
  return (
    <View
      style={{
        // width: 100,
        flex: 0.2,
        // justifyContent: "center",
        flexDirection: "row",
        gap: 5,
      }}
    >
      {armor?.itemInfo ? (
        <Base64Image
          base64String={
            armor.itemInfo
              ? armor.itemInfo.image !== null
                ? armor?.itemInfo.image
                : undefined
              : undefined
          }
        />
      ) : (
        <Base64Image />
      )}

      {/* /// NAME /// */}
      <View style={{ height: 100, justifyContent: "center", minWidth: 150 }}>
        <Text>Armor</Text>
        <Text style={{ fontSize: 24 }}>
          {armor?.itemInfo !== null ? armor.itemInfo.name : "empty slot"}
        </Text>
      </View>
      {/* /// LVL /// */}
      <View style={{ height: 100, justifyContent: "center" }}>
        <Text>Level</Text>
        <Text style={{ fontSize: 24 }}>
          {armor?.itemInfo !== null ? armor.itemInfo.level : "empty slot"}
        </Text>
      </View>
    </View>
  );
};

const Base64Image = ({ base64String }: { base64String?: string }) => {
  const source = { uri: `data:image/png;base64,${base64String}` };

  return (
    <Image
      source={
        base64String
          ? source
          : require("../../assets/images/default_user_portrait.png")
      }
      style={{ width: 90, height: 90 }}
    />
  );
};

export default SheetArmor;
