import { StatusBar } from "expo-status-bar";
import React from "react";

import Routes from "./src/routes";

import AppProvider from "./src/hooks";

export default function App() {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>

      <StatusBar style="light" />
    </>
  );
}
