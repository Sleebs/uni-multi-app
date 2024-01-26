import React, { useEffect, useState } from "react";
import { View, Text } from "../Themed";
import { useSelector } from "react-redux";

type Props = {};

const UserMini = (props: Props) => {
  let userData = useSelector((state: any) => state.user);

  return (
    <View style={{ flex: 0.2, flexDirection: "column", gap: 5 }}>
      {/* /// HP /// */}
      <View
        style={{
          height: 10,
          width: "100%",
          backgroundColor: "crimson",
          borderRadius: 5,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            height: "100%",
            width: `${userData?.life ? userData.life : 100}%`,
            backgroundColor: "lime",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopEndRadius: userData.life
              ? userData?.life === 100
                ? 5
                : 0
              : 0,
          }}
        />
      </View>
      {/* /// EXP /// */}
      <View
        style={{
          height: 10,
          width: "100%",
          backgroundColor: "lightyellow",
          borderRadius: 5,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            height: "100%",
            width: `${userData?.experience ? userData.experience % 100 : 100}%`,
            backgroundColor: "yellow",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopEndRadius: userData.experience
              ? userData?.experience === 100
                ? 5
                : 0
              : 0,
          }}
        />
      </View>
    </View>
  );
};

export default UserMini;
