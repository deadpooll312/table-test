import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./styles/about-us.styles";
import Logo from "../assets/img/logo.jpg";
import {TABLE} from "../consts/navigation.const";

export const AboutUsScreen = ({ navigation }) => {
  const onPressHandler = () => navigation.navigate(TABLE);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.text}>CoinMarketCap is the world's most-referenced price-tracking website for cryptoassets in the rapidly growing cryptocurrency space. </Text>
      <TouchableOpacity onPress={onPressHandler} style={styles.button}>
        <Text style={styles.buttonText}>
          Go to Table
        </Text>
      </TouchableOpacity>
    </View>
  )
};
