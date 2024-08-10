import { Box, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Show above="lg">
        <GridItem rowSpan={1} colSpan={1}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem rowSpan={1} colSpan={4}>
        <Box mb={2}>
          <GameHeading />
        </Box>
        <HStack spacing={5} mb={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </>
  );
};

export default HomePage;
