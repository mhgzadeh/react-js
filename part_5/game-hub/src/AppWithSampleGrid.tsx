import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    // <Container
    //   maxW={{
    //     base: "100%",
    //     md: "90%",
    //     lg: "80%",
    //   }}
    // >
    //   <Grid
    //     templateAreas={{
    //       base: `"nav" "main"`,
    //       lg: `"nav nav" "aside main"`,
    //     }}
    //   >
    //     <GridItem area={"nav"}>
    //       <NavBar />
    //     </GridItem>
    //     <Show above="lg">
    //       <GridItem area={"aside"}>Aside</GridItem>
    //     </Show>
    //     <GridItem area={"main"}>
    //       <GameGrid />
    //     </GridItem>
    //   </Grid>
    // </Container>
    <Container maxW={"8xl"}>
      <Grid
        h="800px"
        templateRows="repeat(3, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        columnGap={{
          base: 0,
          md: 4,
        }}
        rowGap={{
          base: 0,
          md: 4,
        }}
      >
        <GridItem rowSpan={1} colSpan={5} bg="red.500" />
        <Show above="md">
          <GridItem rowSpan={1} colSpan={1} bg="blue.500" />
        </Show>
        <GridItem rowSpan={1} colSpan={4} bg="yellow.300" />
        <GridItem rowSpan={1} colSpan={5} bg="tomato" />
      </Grid>
    </Container>
  );
}

export default App;
