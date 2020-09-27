import React, { useEffect, useState, useCallback } from "react";

import api from "../../services/api";

import { Container, Content, Title, InfoTextLabel, InfoText } from "./styles";
import Loading from "../Loading";

interface Props {
  url: string;
}

interface PeopleData {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const PeopleCard: React.FC<Props> = ({ url }: Props) => {
  const [people, setPeople] = useState<PeopleData>({} as PeopleData);

  useEffect(() => {
    url && loadPeopleDetails();
  }, [url]);

  const loadPeopleDetails = useCallback(async () => {
    const response = await api.get(url);

    setPeople(response.data);
  }, []);

  return (
    <Container>
      <Content>
        {Object.keys(people).length == 0 ? (
          <Loading />
        ) : (
          <>
            <Title>{people.name}</Title>
            <InfoTextLabel>
              Height: <InfoText>{people.height}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Mass: <InfoText>{people.mass}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Hair Color: <InfoText>{people.hair_color}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Skin Color: <InfoText>{people.skin_color}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Eye Color: <InfoText>{people.eye_color}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Burth Year: <InfoText>{people.birth_year}</InfoText>
            </InfoTextLabel>
            <InfoTextLabel>
              Gender: <InfoText>{people.gender}</InfoText>
            </InfoTextLabel>
          </>
        )}
      </Content>
    </Container>
  );
};

export default PeopleCard;
