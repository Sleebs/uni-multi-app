import React, { useEffect, useState } from "react";
import { TOtherUser } from "../../../.expo/types/user";
import { Marker, Callout } from "react-native-maps";
import { View, Text } from "../../Themed";
import getObjInfo from "../../../hooks/getObjInfo.hook";
import { TUserCredentials } from "../../../.expo/types/user";
import activateItem from "../../../hooks/activateItem.hook";

type Props = { player: TOtherUser };

const PlayerMarker = ({ player }: Props) => {
  const user: TUserCredentials = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };

  //   const { itemInfo, isLoading, error, reFetch } = getObjInfo({ user, item });
  //   const { activate } = activateItem({ user, item });

  const [icon, setIcon] = useState<null | any>(null);
  useEffect(() => {
    if (itemInfo?.type === "candy")
      setIcon(require("../../../assets/images/candy.png"));
    if (itemInfo?.type === "monster")
      setIcon(require("../../../assets/images/monster.png"));
    if (itemInfo?.type === "artifact")
      setIcon(require("../../../assets/images/artifact.png"));
    if (itemInfo?.type === "armor")
      setIcon(require("../../../assets/images/armor.png"));
    if (itemInfo?.type === "weapon")
      setIcon(require("../../../assets/images/weapon.png"));
  }, [itemInfo]);

  const handlePress = () => {
    const ok = activate();
    console.log(
      `/ ACTIVATED / name:${itemInfo?.name} - level:${itemInfo?.level} - type:${
        itemInfo?.type
      } - id:${itemInfo?.id} - img?:${itemInfo?.image ? true : false}`
    );
  };
  // const icon = () => {if(typeof item === "ItemCandy" )}
  return (
    <Marker
      coordinate={{ latitude: item.lat, longitude: item.lon }}
      flat={true}
      icon={icon}
    >
      <Callout onPress={handlePress}>
        <View>
          <Text>{JSON.stringify(itemInfo)}</Text>
        </View>
      </Callout>
    </Marker>
  );
};

export default PlayerMarker;
