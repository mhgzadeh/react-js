import { Container, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}
          />
        </GridItem>
        <Show above="lg">
          <GridItem rowSpan={1} colSpan={1}>
            <GenreList
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
              }}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem rowSpan={1} colSpan={4}>
          <HStack spacing={5} pl={2} mb={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5}>
          footer
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
