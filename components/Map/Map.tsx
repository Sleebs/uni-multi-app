import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import MapView, {
  Marker,
  Camera,
  LatLng,
  UserLocationChangeEvent,
} from "react-native-maps";

type Props = { lat: number; long: number };

const Map = ({ lat, long }: Props) => {
  const latlong: LatLng = { latitude: lat, longitude: long } as LatLng;
  const mapRef = useRef<null | MapView>(null);
  const mark = {
    latitude: 45.47626598053197,
    longitude: 9.231924412700817,
  };
  const handleUserLocationChange = () => {
    mapRef.current?.animateCamera(
      { center: { latitude: lat, longitude: long }, heading: 0, pitch: 10 },
      { duration: 1000 }
    );
  };

  useEffect(() => {
    // console.log(getCamera);
  }, []);
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
        minZoomLevel={15}
        camera={{
          center: { latitude: lat, longitude: long },
          heading: 0,
          pitch: 10,
          zoom: 15,
        }}
        onUserLocationChange={handleUserLocationChange}
        ref={(current) => (mapRef.current = current)}
      >
        {/* <Marker coordinate={mark} flat={true} /> */}
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
