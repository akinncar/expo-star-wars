import React, { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";

import api from "../../services/api";

import DetailCard from "../../components/DetailCard";

import { Container, ListTitle } from "./styles";
import Loading from "../../components/Loading";

type RootStackParamList = {
  Details: { url: string };
};

type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

interface DetailData {
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  people: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
}

const Details: React.FC = () => {
  const route = useRoute<DetailsRouteProp>();

  const [detail, setDetail] = useState<DetailData>({} as DetailData);

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = useCallback(async () => {
    const response = await api.get(route.params.url);

    setDetail(response.data);
  }, []);

  return (
    <Container>
      {Object.keys(detail).length == 0 ? (
        <Loading />
      ) : (
        <>
          {/* <Header>
            <Title>{detail.title}</Title>
            <InfoTextLabel>
              Director: <InfoText>{detail.director}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Productor: <InfoText>{detail.producer}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Release Date: <InfoText>{detail.release_date}</InfoText>
            </InfoTextLabel>
          </Header> */}

          {detail.people && (
            <>
              <ListTitle>People</ListTitle>
              <FlatList
                horizontal
                data={detail.people}
                renderItem={({ item }) => <DetailCard url={item} />}
                keyExtractor={(item) => item}
              />
            </>
          )}

          {detail.characters && (
            <>
              <ListTitle>Characters</ListTitle>
              <FlatList
                horizontal
                data={detail.characters}
                renderItem={({ item }) => <DetailCard url={item} />}
                keyExtractor={(item) => item}
              />
            </>
          )}

          {detail.planets && (
            <>
              <ListTitle>Planets</ListTitle>
              <FlatList
                horizontal
                data={detail.planets}
                renderItem={({ item }) => <DetailCard url={item} />}
                keyExtractor={(item) => item}
              />
            </>
          )}

          {detail.starships && (
            <>
              <ListTitle>Starships</ListTitle>
              <FlatList
                horizontal
                data={detail.starships}
                renderItem={({ item }) => <DetailCard url={item} />}
                keyExtractor={(item) => item}
              />
            </>
          )}

          {detail.vehicles && (
            <>
              <ListTitle>Veichles</ListTitle>
              <FlatList
                horizontal
                data={detail.vehicles}
                renderItem={({ item }) => <DetailCard url={item} />}
                keyExtractor={(item) => item}
              />
            </>
          )}

          {detail.species && (
            <>
              <ListTitle>Species</ListTitle>
              <FlatList
                horizontal
                data={detail.species}
                renderItem={({ item }) => <DetailCard url={item} />}
                keyExtractor={(item) => item}
              />
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Details;
