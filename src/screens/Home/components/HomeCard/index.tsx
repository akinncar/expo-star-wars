import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Container, Content, CardTitle } from "./styles";

interface Props {
  icon: string;
  title: string;
}

const HomeCard: React.FC<Props> = ({ icon, title }: Props) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate(title)}>
      <Content>
        <Ionicons name={icon} size={36} color="#fff" />
        <CardTitle>{title}</CardTitle>
      </Content>
    </Container>
  );
};

export default HomeCard;
