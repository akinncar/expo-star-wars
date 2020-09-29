import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  justify-content: space-around;
`;

export const Content = styled.SafeAreaView`
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
