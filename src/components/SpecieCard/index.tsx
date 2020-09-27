import React, { useEffect, useState, useCallback } from "react";

import api from "../../services/api";

import { Container, Content, Title, InfoTextLabel, InfoText } from "./styles";
import Loading from "../Loading";

interface Props {
  url: string;
}

interface VehicleData {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
}

const VehicleCard: React.FC<Props> = ({ url }: Props) => {
  const [vehicle, setVehicle] = useState<VehicleData>({} as VehicleData);

  useEffect(() => {
    url && loadVehicleDetails();
  }, [url]);

  const loadVehicleDetails = useCallback(async () => {
    const response = await api.get(url);

    setVehicle(response.data);
  }, []);

  return (
    <Container>
      <Content>
        {Object.keys(vehicle).length == 0 ? (
          <Loading />
        ) : (
          <>
            <Title>{vehicle.name}</Title>
            <InfoTextLabel>
              classification: <InfoText>{vehicle.classification}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Designation: <InfoText>{vehicle.designation}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Average Height: <InfoText>{vehicle.average_height}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Skin Color: <InfoText>{vehicle.skin_colors}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Hair Colors:
              <InfoText>{vehicle.hair_colors}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Eye Colors: <InfoText>{vehicle.eye_colors}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Average Lifespan: <InfoText>{vehicle.average_lifespan}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Homeworld: <InfoText>{vehicle.homeworld}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Language: <InfoText>{vehicle.language}</InfoText>
            </InfoTextLabel>
          </>
        )}
      </Content>
    </Container>
  );
};

export default VehicleCard;
