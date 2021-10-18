// Dependências de React
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";

import { NativeBaseProvider } from "native-base";
import MainStack from "./src/navigators/MainStack";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const _cacheResourcesAsync = async () => {
    const images = [require("../assets/splash/splashScreen.png")];
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };
  
  return isReady === false ? (
    <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  ) : (
    <NativeBaseProvider>
      <MainStack />
    </NativeBaseProvider>
  );
}
