import React, { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";

import api from "../../services/api";

import DetailCard from "../../components/DetailCard";

import {
  Container,
  Header,
  Title,
  InfoTextLabel,
  InfoText,
  ListTitle,
} from "./styles";

import Loading from "../../components/Loading";

type RootStackParamList = {
  Details: { url: string };
};

type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

interface DetailData {
  title: string;
  name: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  detail_class: string;
  episode_id: string;

  films: Array<string>;
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
          <Header>
            <Title>{detail.title || detail.name}</Title>
            {detail.height && (
              <InfoTextLabel>
                Height: <InfoText>{detail.height}</InfoText>
              </InfoTextLabel>
            )}

            {detail.mass && (
              <InfoTextLabel>
                Mass: <InfoText>{detail.mass}</InfoText>
              </InfoTextLabel>
            )}

            {detail.hair_color && (
              <InfoTextLabel>
                Hair Color: <InfoText>{detail.hair_color}</InfoText>
              </InfoTextLabel>
            )}

            {detail.skin_color && (
              <InfoTextLabel>
                Skin Color: <InfoText>{detail.skin_color}</InfoText>
              </InfoTextLabel>
            )}

            {detail.eye_color && (
              <InfoTextLabel>
                Eye Color: <InfoText>{detail.eye_color}</InfoText>
              </InfoTextLabel>
            )}

            {detail.birth_year && (
              <InfoTextLabel>
                Burth Year: <InfoText>{detail.birth_year}</InfoText>
              </InfoTextLabel>
            )}

            {detail.gender && (
              <InfoTextLabel>
                Gender: <InfoText>{detail.gender}</InfoText>
              </InfoTextLabel>
            )}

            {detail.rotation_period && (
              <InfoTextLabel>
                Rotation Period: <InfoText>{detail.rotation_period}</InfoText>
              </InfoTextLabel>
            )}

            {detail.orbital_period && (
              <InfoTextLabel>
                Orbital Period: <InfoText>{detail.orbital_period}</InfoText>
              </InfoTextLabel>
            )}

            {detail.diameter && (
              <InfoTextLabel>
                Diameter: <InfoText>{detail.diameter}</InfoText>
              </InfoTextLabel>
            )}

            {detail.climate && (
              <InfoTextLabel>
                Climate: <InfoText>{detail.climate}</InfoText>
              </InfoTextLabel>
            )}

            {detail.gravity && (
              <InfoTextLabel>
                Gravity: <InfoText>{detail.gravity}</InfoText>
              </InfoTextLabel>
            )}

            {detail.terrain && (
              <InfoTextLabel>
                Terrain: <InfoText>{detail.terrain}</InfoText>
              </InfoTextLabel>
            )}

            {detail.surface_water && (
              <InfoTextLabel>
                Surface Water: <InfoText>{detail.surface_water}</InfoText>
              </InfoTextLabel>
            )}

            {detail.population && (
              <InfoTextLabel>
                Population: <InfoText>{detail.population}</InfoText>
              </InfoTextLabel>
            )}

            {detail.classification && (
              <InfoTextLabel>
                Classification: <InfoText>{detail.classification}</InfoText>
              </InfoTextLabel>
            )}

            {detail.designation && (
              <InfoTextLabel>
                Designation: <InfoText>{detail.designation}</InfoText>
              </InfoTextLabel>
            )}

            {detail.average_height && (
              <InfoTextLabel>
                Average Height: <InfoText>{detail.average_height}</InfoText>
              </InfoTextLabel>
            )}

            {detail.skin_colors && (
              <InfoTextLabel>
                Skin Color: <InfoText>{detail.skin_colors}</InfoText>
              </InfoTextLabel>
            )}

            {detail.hair_colors && (
              <InfoTextLabel>
                Hair Colors:
                <InfoText>{detail.hair_colors}</InfoText>
              </InfoTextLabel>
            )}

            {detail.eye_colors && (
              <InfoTextLabel>
                Eye Colors: <InfoText>{detail.eye_colors}</InfoText>
              </InfoTextLabel>
            )}

            {detail.average_lifespan && (
              <InfoTextLabel>
                Average Lifespan: <InfoText>{detail.average_lifespan}</InfoText>
              </InfoTextLabel>
            )}

            {detail.homeworld && (
              <InfoTextLabel>
                Homeworld: <InfoText>{detail.homeworld}</InfoText>
              </InfoTextLabel>
            )}

            {detail.language && (
              <InfoTextLabel>
                Language: <InfoText>{detail.language}</InfoText>
              </InfoTextLabel>
            )}

            {detail.manufacturer && (
              <InfoTextLabel>
                Manufacturer: <InfoText>{detail.manufacturer}</InfoText>
              </InfoTextLabel>
            )}

            {detail.cost_in_credits && (
              <InfoTextLabel>
                Cost In Credits: <InfoText>{detail.cost_in_credits}</InfoText>
              </InfoTextLabel>
            )}

            {detail.length && (
              <InfoTextLabel>
                Length: <InfoText>{detail.length}</InfoText>
              </InfoTextLabel>
            )}

            {detail.max_atmosphering_speed && (
              <InfoTextLabel>
                Max Atmosphering Speed:{" "}
                <InfoText>{detail.max_atmosphering_speed}</InfoText>
              </InfoTextLabel>
            )}

            {detail.passengers && (
              <InfoTextLabel>
                Passengers: <InfoText>{detail.passengers}</InfoText>
              </InfoTextLabel>
            )}

            {detail.cargo_capacity && (
              <InfoTextLabel>
                Cargo Capacity: <InfoText>{detail.cargo_capacity}</InfoText>
              </InfoTextLabel>
            )}

            {detail.hyperdrive_rating && (
              <InfoTextLabel>
                Hyperdrive Rating:{" "}
                <InfoText>{detail.hyperdrive_rating}</InfoText>
              </InfoTextLabel>
            )}

            {detail.MGLT && (
              <InfoTextLabel>
                MGLT: <InfoText>{detail.MGLT}</InfoText>
              </InfoTextLabel>
            )}

            {detail.detail_class && (
              <InfoTextLabel>
                Detail Class: : <InfoText>{detail.detail_class}</InfoText>
              </InfoTextLabel>
            )}

            {detail.model && (
              <InfoTextLabel>
                Model: <InfoText>{detail.model}</InfoText>
              </InfoTextLabel>
            )}

            {detail.crew && (
              <InfoTextLabel>
                Crew: <InfoText>{detail.crew}</InfoText>
              </InfoTextLabel>
            )}

            {detail.consumables && (
              <InfoTextLabel>
                Consumables: <InfoText>{detail.consumables}</InfoText>
              </InfoTextLabel>
            )}

            {detail.detail_class && (
              <InfoTextLabel>
                Detail Class:
                <InfoText>{detail.detail_class}</InfoText>
              </InfoTextLabel>
            )}

            {detail.director && (
              <InfoTextLabel>
                Director:
                <InfoText>{detail.director}</InfoText>
              </InfoTextLabel>
            )}

            {detail.producer && (
              <InfoTextLabel>
                Producer:
                <InfoText>{detail.producer}</InfoText>
              </InfoTextLabel>
            )}

            {detail.release_date && (
              <InfoTextLabel>
                Release Date:
                <InfoText>{detail.release_date}</InfoText>
              </InfoTextLabel>
            )}
          </Header>

          {detail.films && (
            <>
              <ListTitle>Films</ListTitle>
              <FlatList
                horizontal
                data={detail.films}
                renderItem={({ item }) => <DetailCard url={item} />}
                keyExtractor={(item) => item}
              />
            </>
          )}

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

          {detail.species && detail.species.length > 0 && (
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
