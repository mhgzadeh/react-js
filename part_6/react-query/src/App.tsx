import { Button, Container, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW={"8xl"}>
      <Grid>
        <GridItem mt={10}>
          <Button colorScheme="red">Mohammad</Button>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
