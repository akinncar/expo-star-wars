import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";

import AsyncStorage from "@react-native-community/async-storage";

interface AuthContextData {
  username: string | null;
  isLoading: boolean;
  login(username: string): void;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadAsyncStorage() {
      const user = await AsyncStorage.getItem("@ExpoStarWars:username");

      if (user) {
        setUsername(user);
      }

      setUsername("");
      setLoading(false);
    }

    loadAsyncStorage();
  }, []);

  const login = useCallback(async (username: string) => {
    await AsyncStorage.setItem("@ExpoStarWars:username", username);
    setUsername(username);
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.setItem("@ExpoStarWars:username", "");
    setUsername("");
  }, []);

  return (
    <AuthContext.Provider value={{ username, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth need a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
