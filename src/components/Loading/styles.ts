import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs(() => ({
  color: theme.white,
}))`
  padding: 18px;
`;
