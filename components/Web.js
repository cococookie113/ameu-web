import React, { Component } from "react";
import { WebView } from "react-native-webview";
const uri = "https://m.naver.com/";
export default function Base({}) {
  return <WebView source={{ uri: uri }} style={{ marginTop: 30 }} />;
}
