import React, { useState } from "react";
import {
  Button,
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Draggable from "react-native-draggable";

const WEBKEY = "@web_keys";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(WEBKEY, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(WEBKEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export default function EditScreen() {
  const [webs, setWebs] = useState(getData);

  return (
    <View>
      <Draggable
        x={75}
        y={100}
        renderSize={56}
        renderColor="black"
        renderText="A"
        isCircle
        shouldReverse
        onShortPressRelease={() => alert("touched!!")}
      />
    </View>
  );
}
