import React, { useEffect, useState } from "react";
import { TOtherUser } from "../../../.expo/types/user";
import { Marker, Callout } from "react-native-maps";
import { View, Text } from "../../Themed";
import { TUserCredentials } from "../../../.expo/types/user";
import getObjInfo from "../../../hooks/getObjInfo.hook";
import activateItem from "../../../hooks/activateItem.hook";

type Props = { player: TOtherUser };

const PlayerMarker = ({ player }: Props) => {
  const user: TUserCredentials = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };

  //   const { itemInfo, isLoading, error, reFetch } = getObjInfo({ user, item });
  //   const { activate } = activateItem({ user, item });

  const [icon, setIcon] = useState<null | any>(null);
  const icona = require("../../../assets/images/player.png");
  useEffect(() => {
    setIcon(require("../../../assets/images/player.png"));
  }, []);

  const handlePress = () => {
    // const ok = activate();
    // console.log(
    //   `/ ACTIVATED / name:${itemInfo?.name} - level:${itemInfo?.level} - type:${
    //     itemInfo?.type
    //   } - id:${itemInfo?.id} - img?:${itemInfo?.image ? true : false}`
    // );
  };
  // const icon = () => {if(typeof item === "ItemCandy" )}
  return (
    <Marker
      coordinate={{ latitude: player.lat, longitude: player.lon }}
      flat={true}
      icon={icona}
    >
      <Callout onPress={handlePress}>
        <View>
          <Text>{JSON.stringify(player)}</Text>
        </View>
      </Callout>
    </Marker>
  );
};

export default PlayerMarker;
