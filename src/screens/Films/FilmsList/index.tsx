import React, { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import Loading from "../../../components/Loading";

import api from "../../../services/api";

import ListCard from "../../../components/ListCard";

import { Container } from "./styles";

interface FilmData {
  episode_id: number;
  title: string;
  url: string;
}

const FilmsList: React.FC = () => {
  const [films, setFilms] = useState<FilmData[]>([]);

  useEffect(() => {
    loadFilms();
  }, []);

  const loadFilms = useCallback(async () => {
    const response = await api.get("films");

    setFilms(response.data.results);
  }, []);

  return (
    <Container>
      {!films?.length ? (
        <Loading />
      ) : (
        <FlatList
          data={films}
          renderItem={({ item }) => <ListCard {...item} />}
          keyExtractor={(item) => item.episode_id.toString()}
        />
      )}
    </Container>
  );
};

export default FilmsList;
