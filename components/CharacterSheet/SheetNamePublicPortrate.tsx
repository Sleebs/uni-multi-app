import React, { useState } from "react";
import { View, Text } from "../Themed";
import { Image, TextInput, Switch } from "react-native";
import { useSelector } from "react-redux";

type Props = {};

const SheetNamePublicPortrate = (props: Props) => {
  const userData = useSelector((state: any) => state.user);
  const [name, setName] = useState("");
  const [isPubblic, setIsPubblic] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 5,
      }}
    >
      <Base64Image />
      <View style={{ justifyContent: "center" }}>
        <Text>name</Text>
        <TextInput
          placeholderTextColor={"white"}
          placeholder={userData.name}
          value={name}
          onChangeText={setName}
          autoCorrect={false}
          autoCapitalize='none'
          style={{ color: "white", fontSize: 32 }}
        />
      </View>
      <View
        style={{
          //   height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>public position</Text>
        <Switch value={isPubblic} onValueChange={setIsPubblic} />
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
export default SheetNamePublicPortrate;
