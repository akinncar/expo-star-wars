import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.TouchableOpacity`
  width: 50%;
  padding: 12px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.primary}
  border-radius: 12px;
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.white};
  font-weight: 300;
  padding-top: 18px;
`;
