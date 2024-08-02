import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <Text color="red">{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner mt={3}/>}
      >
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
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} my={3}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
