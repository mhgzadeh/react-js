import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <UnorderedList>
        {games.map((game) => (
          <ListItem key={game.id}>{game.name}</ListItem>
          
        ))}
      </UnorderedList>
    </>
  );
};

export default GameGrid;
