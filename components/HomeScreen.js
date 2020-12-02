import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

import Constants from "expo-constants";

const testID = "ca-app-pub-3940256099942544/6300978111";
const productionID = "my-id";
// Is a real device and running in production.
const adUnitID = Constants.isDevice && !__DEV__ ? productionId : testID;

// Set global test device ID
async function stdia() {
  await setTestDeviceIDAsync("EMULATOR");
}

function bannerError() {
  console.log("An error");
  return;
}

export default function HomeScreen() {
  stdia();
  return (
    <View style={styles.list}>
      <View style={styles.logo}>
        <Image source={require("../pictures/logo.png")} />
      </View>

      <AdMobBanner // Display a banner
        style={styles.banner}
        bannerSize="mediumRectangle"
        adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={bannerError}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
  logo: {
    flex: 0.6,
    paddingTop: 100,
  },
  banner: {
    flex: 0.4,
  },
});
