import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.background};
  padding: 0 18px;
`;

export const Content = styled.View`
  background-color: ${(props) => props.theme.primary};
  padding: 18px;
  border-radius: 12px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.white};
  font-weight: 600;
  font-size: 20px;
`;

export const InfoTextLabel = styled.Text`
  color: ${(props) => props.theme.white};
  padding-top: 8px;
`;

export const InfoText = styled.Text`
  color: ${(props) => props.theme.secondaryText};
`;
