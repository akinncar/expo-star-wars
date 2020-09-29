import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../styles/theme";

import { AuthProvider } from "./auth";

const AppProvider: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  </>
);

export default AppProvider;
