import React, { useEffect, useState, useCallback } from "react";

import api from "../../services/api";

import { Container, Content, Title, InfoTextLabel, InfoText } from "./styles";
import Loading from "../Loading";

interface Props {
  url: string;
}

interface StarshipData {
  name: string;
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
  starship_class: string;
}

const StarshipCard: React.FC<Props> = ({ url }: Props) => {
  const [starship, setStarship] = useState<StarshipData>({} as StarshipData);

  useEffect(() => {
    url && loadStarshipDetails();
  }, [url]);

  const loadStarshipDetails = useCallback(async () => {
    const response = await api.get(url);

    setStarship(response.data);
  }, []);

  return (
    <Container>
      <Content>
        {Object.keys(starship).length == 0 ? (
          <Loading />
        ) : (
          <>
            <Title>{starship.name}</Title>
            <InfoTextLabel>
              Model: <InfoText>{starship.model}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Manufacturer: <InfoText>{starship.manufacturer}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Cost In Credits: <InfoText>{starship.cost_in_credits}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Length: <InfoText>{starship.length}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Max Atmosphering Speed:{" "}
              <InfoText>{starship.max_atmosphering_speed}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Crew: <InfoText>{starship.crew}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Passengers: <InfoText>{starship.passengers}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Cargo Capacity: <InfoText>{starship.cargo_capacity}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Consumables: <InfoText>{starship.consumables}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Hyperdrive Rating:{" "}
              <InfoText>{starship.hyperdrive_rating}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              MGLT: <InfoText>{starship.MGLT}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Starship Class: : <InfoText>{starship.starship_class}</InfoText>
            </InfoTextLabel>
          </>
        )}
      </Content>
    </Container>
  );
};

export default StarshipCard;
