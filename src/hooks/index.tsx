import React from "react";

import { FilmsProvider } from "./films";

const AppProvider: React.FC = ({ children }) => (
  <>
    <FilmsProvider>{children}</FilmsProvider>
  </>
);

export default AppProvider;
