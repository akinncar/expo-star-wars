import React, { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";

import api from "../../../services/api";

import PeopleCard from "../../../components/PeopleCard";
import PlanetCard from "../../../components/PlanetCard";
import StarshipCard from "../../../components//StarshipCard";
import VehicleCard from "../../../components/VehicleCard";
import SpecieCard from "../../../components/SpecieCard";

import {
  Container,
  Header,
  Title,
  InfoTextLabel,
  InfoText,
  ListTitle,
} from "./styles";
import Loading from "../../../components/Loading";

type RootStackParamList = {
  FilmDetails: { url: string };
};

type FilmDetailsRouteProp = RouteProp<RootStackParamList, "FilmDetails">;

interface FilmData {
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
}

const FilmDetails: React.FC = () => {
  const route = useRoute<FilmDetailsRouteProp>();

  const [film, setFilm] = useState<FilmData>({} as FilmData);

  useEffect(() => {
    loadFilmDetails();
  }, []);

  const loadFilmDetails = useCallback(async () => {
    const response = await api.get(route.params.url);

    setFilm(response.data);
  }, []);

  return (
    <Container>
      {Object.keys(film).length == 0 ? (
        <Loading />
      ) : (
        <>
          <Header>
            <Title>{film.title}</Title>
            <InfoTextLabel>
              Director: <InfoText>{film.director}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Productor: <InfoText>{film.producer}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Release Date: <InfoText>{film.release_date}</InfoText>
            </InfoTextLabel>
          </Header>

          <ListTitle>Characters</ListTitle>
          <FlatList
            horizontal
            data={film.characters}
            renderItem={({ item }) => <PeopleCard url={item} />}
            keyExtractor={(item) => item}
          />

          <ListTitle>Planets</ListTitle>
          <FlatList
            horizontal
            data={film.planets}
            renderItem={({ item }) => <PlanetCard url={item} />}
            keyExtractor={(item) => item}
          />

          <ListTitle>Starships</ListTitle>
          <FlatList
            horizontal
            data={film.starships}
            renderItem={({ item }) => <StarshipCard url={item} />}
            keyExtractor={(item) => item}
          />

          <ListTitle>Veichles</ListTitle>
          <FlatList
            horizontal
            data={film.vehicles}
            renderItem={({ item }) => <VehicleCard url={item} />}
            keyExtractor={(item) => item}
          />

          <ListTitle>Species</ListTitle>
          <FlatList
            horizontal
            data={film.species}
            renderItem={({ item }) => <SpecieCard url={item} />}
            keyExtractor={(item) => item}
          />
        </>
      )}
    </Container>
  );
};

export default FilmDetails;
