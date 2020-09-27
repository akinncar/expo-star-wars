import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width}px;
  padding: 12px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #1c2e56;
  border-radius: 12px;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilmTitle = styled.Text`
  font-size: 18px;
  color: #fff;
`;
