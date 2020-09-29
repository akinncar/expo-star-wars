import React, { createContext, useContext, useCallback, useState } from "react";

import api from "../services/api";

interface FilmData {
  episode_id: number;
  title: string;
  url: string;
}

interface FilmsContextData {
  films: FilmData[] | null;
  loadFilms(): void;
}

const FilmsContext = createContext<FilmsContextData>({} as FilmsContextData);

const FilmsProvider: React.FC = ({ children }) => {
  const [films, setFilms] = useState<FilmData[]>([]);

  const loadFilms = useCallback(async () => {
    const response = await api.get("films");

    setFilms(response.data.results);
  }, []);

  return (
    <FilmsContext.Provider value={{ films, loadFilms }}>
      {children}
    </FilmsContext.Provider>
  );
};

function useFilms(): FilmsContextData {
  const context = useContext(FilmsContext);

  if (!context) {
    throw new Error("useFilms need a FilmsProvider");
  }
  return context;
}

export { FilmsProvider, useFilms };
