import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSeletctedGenre] = useState<Genre | null>(null);

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
            <GenreList
              onSelectGenre={(genre) => {
                setSeletctedGenre(genre);
              }}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem rowSpan={1} colSpan={4}>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5}>
          footer
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
