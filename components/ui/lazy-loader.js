import React from "react";
import { ActivityIndicator, View } from "react-native";
import { blue, white } from "../../styles/colors";

export const LazyLoader = React.memo(() => (
  <View
    style={{
      flex: 1,
      backgroundColor: white,
      justifyContent: "center",
    }}
  >
    <ActivityIndicator color={blue} size="large" />
  </View>
));
