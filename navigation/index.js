import React, {Suspense} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
// local
import {LazyLoader} from "../components/ui/lazy-loader";
import {ABOUT_US, TABLE} from "../consts/navigation.const";
import {AboutUsScreen} from "../screens/about-us.screen";
import {TableScreen} from "../screens/table.screen";

const Stack = createStackNavigator();
const options = { headerShown: false };

export default function Navigation() {
  return (
    <NavigationContainer>
      <Suspense fallback={<LazyLoader />}>
        <Stack.Navigator>
          <Stack.Screen options={options} name={ABOUT_US} component={AboutUsScreen} />
          <Stack.Screen options={options} name={TABLE} component={TableScreen} />
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  )
}
