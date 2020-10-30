import React, {useEffect} from "react";
import {View, Text, StatusBar, ScrollView, TouchableOpacity} from "react-native";
import {inject, observer} from "mobx-react";
import { AntDesign } from '@expo/vector-icons';
// local
import styles from "./styles/table.styles";
import {TableCard} from "../components/table-card";

export const TableScreen = inject("store")(observer(({store, navigation}) => {
  const {table} = store;
  const {tableData, error} = table;

  useEffect(() => {
    table.fetchTableContent();
    const fetchDataByTimer = setInterval(() => table.fetchTableContent(), 5000);
    return () => clearInterval(fetchDataByTimer);
  }, []);

  const onBackPressHandler = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity onPress={onBackPressHandler} style={styles.backButton}>
        <AntDesign name="leftcircleo" size={24} color="white" />
        <Text style={styles.backButtonText}>Back to main screen</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Live Prices</Text>
      <View style={styles.background}>
        <View style={styles.tableContainer}>
          <ScrollView>
            {error && <TableCard isError={true} name="Error" />}
            {tableData && !!Object.keys(tableData)?.length && Object.keys(tableData).map((key) => {
              const item = tableData[key];
              const {id, last, percentChange, highestBid} = item;

              return (
                <TableCard
                  name={key}
                  key={id}
                  last={last}
                  percentChange={percentChange}
                  highestBid={highestBid}
                />
              )
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}));
