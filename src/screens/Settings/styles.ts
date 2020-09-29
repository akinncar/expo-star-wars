import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  margin: 16px 0;
  justify-content: space-between;
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

export const ExpoContainer = styled.View``;

export const ExpoImage = styled.Image`
  width: 36px;
  height: 36px;
  tint-color: ${(props) => props.theme.white};
`;

export const ExpoText = styled.Text`
  font-weight: 600;
  color: ${(props) => props.theme.white};
`;

export const UserContainer = styled.View``;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.white};
`;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.theme.secondaryText};
`;
