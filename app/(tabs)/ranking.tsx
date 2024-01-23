import React from "react";

import getRanking from "../../hooks/getRanking.hook";
import { useSelector } from "react-redux";
import { View, Text } from "../../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import UserRankingLiItem from "../../components/UserRankingLiItem";
type Props = {};

const ranking = (props: Props) => {
  const userData = useSelector((state: any) => state.user);

  const { usersRanking } = getRanking();
  return (
    <ScrollView style={{ flex: 1, gap: 5 }}>
      {usersRanking?.map((user, index) => (
        <UserRankingLiItem uid={user.uid} key={index} />
        // <Text>{JSON.stringify(user)}</Text>
      ))}
    </ScrollView>
  );
};

export default ranking;
