/*
Copyright (C) 2021  Thiago Waib C. Branco

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
*/
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { StatusBar } from "expo-status-bar";

import { NativeBaseProvider } from "native-base";
import MainStack from "./src/navigators/MainStack";
import Theme from './assets/Theme'

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const _cacheResourcesAsync = async () => {
    const images = [require("./assets/splash.png")];
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  const config = {
    dependencies: {
      'linear-gradient': require('expo-linear-gradient').LinearGradient
    }
  }
  
  return isReady === false ? (
    <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  ) : (
    <NativeBaseProvider theme={Theme} config={config}>
      <MainStack />
      <StatusBar backgroundColor="#1D191C" style="light"/>
    </NativeBaseProvider>
  );
}