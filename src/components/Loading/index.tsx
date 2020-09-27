import React from "react";

import { Container, ActivityIndicator } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
};

export default Loading;
