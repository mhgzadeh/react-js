import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameGrid = () => {
  const { games, error } = useGame();
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
