import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import FilmsList from "./screens/Films/FilmsList";
import FilmDetails from "./screens/Films/FilmDetails";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Films"
          component={FilmsList}
          options={{
            headerStyle: {
              backgroundColor: "#070b13",
              shadowColor: "#1c2e56",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="FilmDetails"
          component={FilmDetails}
          options={{
            headerStyle: {
              backgroundColor: "#070b13",
              shadowColor: "#1c2e56",
            },
            headerTitle: "",
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
