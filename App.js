import {Provider} from "mobx-react";
import {StatusBar, Platform} from "react-native";
import React from 'react';
// local
import store from "./store";
import Navigation from "./navigation";

export default function App() {
  return (
    <Provider store={store}>
      <>
        {Platform.os === "ios" && <StatusBar barStyle="dark-content" />}
        <Navigation />
      </>
    </Provider>
  );
}
