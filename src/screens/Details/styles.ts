import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.primary};
  padding: 18px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 24px;
`;

export const InfoTextLabel = styled.Text`
  color: ${(props) => props.theme.white};
  padding-top: 8px;
`;

export const InfoText = styled.Text`
  color: ${(props) => props.theme.secondaryText};
`;

export const ListTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.white};
  padding: 18px 12px;
`;
