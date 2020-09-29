import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

const logo = require("../../../assets/logo.png");

import {
  Container,
  Content,
  LogoContainer,
  Logo,
  ExpoContainer,
  ExpoImage,
  ExpoText,
  UserContainer,
  Label,
  LogoutButton,
  LogoutText,
} from "./styles";
import { theme } from "../../styles/theme";

function renderExpoLogo() {
  return (
    <ExpoContainer
      style={{ opacity: 0.5, flexDirection: "row", alignItems: "center" }}
    >
      <ExpoImage
        source={{
          uri:
            "https://d30j33t1r58ioz.cloudfront.net/static/brand/logo-b-black-228x228.png",
        }}
      />
      <ExpoText>Expo</ExpoText>
    </ExpoContainer>
  );
}

const Settings: React.FC = () => {
  const username = "akinncar";

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo source={logo} />
        </LogoContainer>
        <UserContainer>
          <Label>You are logged in with: {username}</Label>
          <LogoutButton onPress={() => {}}>
            <LogoutText>Logout </LogoutText>
            <Ionicons name="md-exit" size={18} color={theme.secondaryText} />
          </LogoutButton>
        </UserContainer>
        {renderExpoLogo()}
      </Content>
    </Container>
  );
};

export default Settings;
