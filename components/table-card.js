import {Text, View} from "react-native";
import React from "react";
// local
import styles from "../screens/styles/table.styles";
import {getCorrectName, returnPercentColor} from "../utils/table.utils";
import {red, white} from "../styles/colors";

export const TableCard = ({name, last, percentChange, highestBid, isError}) => {
  return (
    <View style={styles.cardWrapper}>
      <View>
        <Text style={[styles.cardTitle, {color: isError ? red : white}]}>
          {getCorrectName(name)}
        </Text>
        {percentChange && <Text style={[styles.cardPercent, {color: returnPercentColor(percentChange)}]}>{percentChange} %</Text>}
      </View>
      <View style={styles.cardCol}>
        {last && <Text style={styles.cardLast}>Last: {last}</Text>}
        {highestBid && <Text style={styles.cardBid}>Highest Bid: {highestBid}</Text>}
      </View>
    </View>
  )
};
