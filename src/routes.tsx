import * as React from "react";

import { useAuth } from "./hooks/auth";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import List from "./screens/List";
import Details from "./screens/Details";

import { theme } from "./styles/theme";
import { ActivityIndicator, View } from "react-native";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.secondaryText,
        inactiveTintColor: theme.white,
        style: {
          backgroundColor: theme.background,
          borderTopColor: theme.primary,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  const { username, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return username ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Menu"}>
        <Stack.Screen
          name="Menu"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={({ route }) => ({
            title: route.params?.title,
            headerStyle: {
              backgroundColor: theme.background,
              shadowColor: theme.primary,
            },
            headerTintColor: theme.white,
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerStyle: {
              backgroundColor: theme.background,
              shadowColor: theme.primary,
            },
            headerTintColor: theme.white,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
