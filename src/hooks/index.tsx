import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../styles/theme";

import { FilmsProvider } from "./films";

const AppProvider: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <FilmsProvider>{children}</FilmsProvider>
    </ThemeProvider>
  </>
);

export default AppProvider;
