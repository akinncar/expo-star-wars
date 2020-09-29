import styled from "styled-components/native";
import { Platform, Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  margin: 16px 0;
  justify-content: center;
  align-items: center;
  padding-top: ${Platform.OS === "android" ? 25 : 0}px;
`;

export const LogoContainer = styled.View`
  padding: 24px;
`;

export const Logo = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  height: 90px;
`;

export const UserContainer = styled.View``;

export const TextInputContainer = styled.KeyboardAvoidingView`
  width: ${Dimensions.get("window").width - 36}px;
  background-color: ${(props) => props.theme.white};
  max-width: 450px;
  padding: 6px 12px;
  border-radius: 12px;
`;

export const TextInput = styled.TextInput`
  height: 40px;
`;

export const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.theme.secondaryText};
`;
