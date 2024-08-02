import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text color="red">{error.message}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 3,
          lg: 3,
          xl: 4,
        }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.results.map((game) => (
          <GameCard key={game.id + game.name} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
