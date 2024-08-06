import { Box, Container, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Container maxW={"8xl"}>
      <Grid
        templateRows="repeat(3)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        columnGap={{
          base: 0,
          lg: 4,
        }}
        rowGap={{
          base: 0,
          lg: 4,
        }}
      >
        <GridItem rowSpan={1} colSpan={5}>
          <NavBar />
        </GridItem>
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
        <GridItem rowSpan={1} colSpan={5}>
          footer
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
