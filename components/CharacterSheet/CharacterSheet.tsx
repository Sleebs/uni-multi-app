import React from "react";
import SheetNamePublicPortrate from "./SheetNamePublicPortrate";
import { View } from "../Themed";
import SheetWeapon from "./SheetWeapon";
import SheetArmor from "./SheetArmor";
import SheetAmulet from "./SheetAmulet";
type Props = {};

const CharacterSheet = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingLeft: 20,
        gap: 5,
      }}
    >
      <SheetNamePublicPortrate />
      <SheetWeapon />
      <SheetArmor />
      <SheetAmulet />
    </View>
  );
};

export default CharacterSheet;
