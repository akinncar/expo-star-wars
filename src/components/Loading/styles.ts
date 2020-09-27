import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #070b13;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs(() => ({
  color: "#fff",
}))`
  padding: 18px;
`;
