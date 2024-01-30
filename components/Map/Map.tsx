import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import ObjectMarker from "./ObjectMarker/ObjectMarker";
import MapView, { LatLng, UserLocationChangeEvent } from "react-native-maps";
import getNearbyItems from "../../hooks/getNearbyItems.hook";
import getNearbyUsers from "../../hooks/getNearbyUsers.hook";
import { TOtherUser, TUserCredentials, Tuser } from "../../.expo/types/user";
import PlayerMarker from "./PlayerMarker/PlayerMarker";

type Props = { lat: number; long: number };

const Map = ({ lat, long }: Props) => {
  const latlong: LatLng = { latitude: lat, longitude: long } as LatLng;
  const mapRef = useRef<null | MapView>(null);
  const user: TUserCredentials = { sid: "YwXOZqwj20xeT5ye23Kf", uid: 140 };
  const { nearbyUsers } = getNearbyUsers({
    user: user,
    lat: lat + "",
    lon: long + "",
  });

  const { items } = getNearbyItems({
    user: user,
    lat: lat + "",
    lon: long + "",
  });

  const handleUserLocationChange = () => {
    mapRef.current?.animateCamera(
      { center: { latitude: lat, longitude: long }, heading: 0, pitch: 10 },
      { duration: 1000 }
    );
  };

  useEffect(() => {
    // console.log(getCamera);
  }, [items, nearbyUsers]);
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapContainer}
        showsCompass={false}
        showsIndoors={false}
        showsPointsOfInterest={false}
        showsUserLocation={true} // <--- user location
        followsUserLocation={true}
        userLocationPriority={"high"}
        scrollEnabled={false}
        // minZoomLevel={16}
        camera={{
          center: { latitude: lat, longitude: long },
          heading: 0,
          pitch: 10,
          zoom: 16,
        }}
        onUserLocationChange={handleUserLocationChange}
        ref={(current) => (mapRef.current = current)}
      >
        {items?.map((item, index) => (
          <ObjectMarker key={index} item={item} />
        ))}
        {nearbyUsers?.map((user, index) => {
          <PlayerMarker key={index} player={user} />;
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  map: {},
});

export default Map;
