import { useState, useEffect } from "react";
import { Platform } from "react-native";
import Device from "expo-device";
import * as Location from "expo-location";

const getGeolocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      // if (Platform.OS === "android" && !Device.isDevice) {
      //   //
      //   setErrorMsg(
      //     "Oops, this will not work on Snack in an Android Emulator. Try it on your device!"
      //   );
      //   return;
      // }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, [location]);
  return { location, errorMsg };
};

export default getGeolocation;
