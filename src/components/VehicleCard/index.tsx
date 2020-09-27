import React, { useEffect, useState, useCallback } from "react";

import api from "../../services/api";

import { Container, Content, Title, InfoTextLabel, InfoText } from "./styles";
import Loading from "../Loading";

interface Props {
  url: string;
}

interface VehicleData {
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
  vehicle_class: string;
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
              Model: <InfoText>{vehicle.model}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Manufacturer: <InfoText>{vehicle.manufacturer}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Cost In Credits: <InfoText>{vehicle.cost_in_credits}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Length: <InfoText>{vehicle.length}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Max Atmosphering Speed:{" "}
              <InfoText>{vehicle.max_atmosphering_speed}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Crew: <InfoText>{vehicle.crew}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Passengers: <InfoText>{vehicle.passengers}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Cargo Capacity: <InfoText>{vehicle.cargo_capacity}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Consumables: <InfoText>{vehicle.consumables}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Vehicle Class:
              <InfoText>{vehicle.vehicle_class}</InfoText>
            </InfoTextLabel>
          </>
        )}
      </Content>
    </Container>
  );
};

export default VehicleCard;
