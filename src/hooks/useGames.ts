import { useEffect, useState } from "react";
import apiClient from "../services/http-client";

export type GamesType = {
  id: number;
  name: string;
  background_image: string;
  platforms: Platform[];
  metacritic: number;
};

export type Platform = {
  platform: {
    slug: string;
  };
};

const useGames = () => {
  const [games, setGames] = useState<GamesType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { games, loading, error };
};

export default useGames;
