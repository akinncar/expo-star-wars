import React, { useEffect, useState, useCallback } from "react";

import api from "../../services/api";

import { Container, Content, Title, InfoTextLabel, InfoText } from "./styles";
import Loading from "../Loading";

interface Props {
  url: string;
}

interface PlanetData {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

const PlanetCard: React.FC<Props> = ({ url }: Props) => {
  const [planet, setPlanet] = useState<PlanetData>({} as PlanetData);

  useEffect(() => {
    url && loadPlanetDetails();
  }, [url]);

  const loadPlanetDetails = useCallback(async () => {
    const response = await api.get(url);

    setPlanet(response.data);
  }, []);

  return (
    <Container>
      <Content>
        {Object.keys(planet).length == 0 ? (
          <Loading />
        ) : (
          <>
            <Title>{planet.name}</Title>
            <InfoTextLabel>
              Rotation Period: <InfoText>{planet.rotation_period}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Orbital Period: <InfoText>{planet.orbital_period}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Diameter: <InfoText>{planet.diameter}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Climate: <InfoText>{planet.climate}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Gravity: <InfoText>{planet.gravity}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Terrain: <InfoText>{planet.terrain}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Surface Water: <InfoText>{planet.surface_water}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Population: <InfoText>{planet.population}</InfoText>
            </InfoTextLabel>
          </>
        )}
      </Content>
    </Container>
  );
};

export default PlanetCard;
