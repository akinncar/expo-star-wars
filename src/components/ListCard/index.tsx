import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import { Container, Content, FilmTitle } from "./styles";
import { theme } from "../../styles/theme";

interface Props {
  title: string;
  url: string;
  page: string;
}

const FilmCard: React.FC<Props> = ({ title, url, page }: Props) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("Details", { url: url })}>
      <Content>
        <FilmTitle>{title}</FilmTitle>
        <Ionicons name="ios-arrow-forward" size={24} color={theme.white} />
      </Content>
    </Container>
  );
};

export default FilmCard;
