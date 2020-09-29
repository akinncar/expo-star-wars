import React, { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";

import api from "../../services/api";

import Loading from "../../components/Loading";
import ListCard from "../../components/ListCard";

import { Container } from "./styles";

type RootStackParamList = {
  List: { title: string };
};

type ListRouteProp = RouteProp<RootStackParamList, "List">;

interface Data {
  title: string;
  name: string;
  url: string;
}

const List: React.FC = () => {
  const route = useRoute<ListRouteProp>();

  const [list, setList] = useState<Data[]>([]);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = useCallback(async () => {
    const response = await api.get(route.params.title.toLowerCase());

    setList(response.data.results);
  }, []);

  return (
    <Container>
      {!list?.length ? (
        <Loading />
      ) : (
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListCard
              title={item.title || item.name}
              url={item.url}
              page={route.params.title}
            />
          )}
          keyExtractor={(item) => item.title || item.name}
        />
      )}
    </Container>
  );
};

export default List;
