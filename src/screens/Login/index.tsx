import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

const logo = require("../../../assets/logo.png");

import { theme } from "../../styles/theme";

import {
  Container,
  Content,
  LogoContainer,
  Logo,
  UserContainer,
  TextInputContainer,
  TextInput,
  LoginButton,
  LogoutText,
} from "./styles";

const Login: React.FC = () => {
  const navigation = useNavigation();

  const { login } = useAuth();
  const [inputText, setInputText] = useState("");

  function handleLogin() {
    if (inputText !== "") {
      login(inputText);
    }
  }

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo source={logo} />
        </LogoContainer>
        <UserContainer>
          <TextInputContainer>
            <TextInput
              onChangeText={(text) => setInputText(text)}
              value={inputText}
              placeholder="Type your username"
              keyboardAppearance="dark"
            />
          </TextInputContainer>

          <LoginButton onPress={handleLogin}>
            <LogoutText>Login </LogoutText>
            <Ionicons name="ios-key" size={18} color={theme.secondaryText} />
          </LoginButton>
        </UserContainer>
      </Content>
    </Container>
  );
};

export default Login;
