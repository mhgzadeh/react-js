import { Container, Grid, GridItem } from "@chakra-ui/react";
import Counter from "./state-management/components/Counter";
import TaskList from "./state-management/components/TaskList";
import Loginstatus from "./state-management/components/Loginstatus";

function App() {
  return (
    <Container maxW={"10xl"}>
      <Grid templateColumns="repeat(4, 1fr)" columnGap={5}>
        <GridItem mt={10}>
          <Loginstatus />
          <Counter />
        </GridItem>
        <GridItem mt={10}>
          <TaskList />
        </GridItem>
        <GridItem mt={10}>
        </GridItem>
        <GridItem mt={10}></GridItem>
      </Grid>
    </Container>
  );
}

export default App;
