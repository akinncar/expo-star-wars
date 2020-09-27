import React, { useState } from "react";
import { Dimensions, FlatList } from "react-native";

import HomeCard from "./components/HomeCard";

const logo = require("../../../assets/logo.png");

import { Container, Content, LogoContainer, Logo } from "./styles";

interface CardData {
  icon: string;
  title: string;
}

const Home: React.FC = () => {
  const [cardItems, setCardItems] = useState<Array<CardData>>([
    { icon: "md-film", title: "Films" },
    { icon: "md-people", title: "People" },
    { icon: "md-planet", title: "Planets" },
    { icon: "md-egg", title: "Species" },
    { icon: "md-jet", title: "Starships" },
    { icon: "md-car", title: "Vehicles" },
  ]);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo source={logo} />
        </LogoContainer>
        <FlatList
          style={{ width: Dimensions.get("window").width }}
          data={cardItems}
          renderItem={({ item }) => <HomeCard {...item} />}
          keyExtractor={() => Math.random().toString()}
          numColumns={2}
        />
      </Content>
    </Container>
  );
};

export default Home;
