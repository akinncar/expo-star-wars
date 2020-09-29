import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Container, Content, CardTitle } from "./styles";
import { theme } from "../../../../styles/theme";

interface Props {
  icon: string;
  title: string;
}

const HomeCard: React.FC<Props> = ({ icon, title }: Props) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("List", { title: title })}>
      <Content>
        <Ionicons name={icon} size={36} color={theme.white} />
        <CardTitle>{title}</CardTitle>
      </Content>
    </Container>
  );
};

export default HomeCard;
