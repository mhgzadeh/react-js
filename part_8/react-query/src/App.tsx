import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Counter from "./state-management/counter/Counter";
import NavBar from "./state-management/components/NavBar";
import { TasksProvider, TaskList } from "./state-management/tasks";

function App() {
  return (
    <Container maxW={"10xl"}>
      <Grid templateColumns="repeat(4, 1fr)" columnGap={5}>
        <GridItem mt={10}>
          <Text fontWeight={"bolder"}>Reducer</Text>
          <Counter />
        </GridItem>
        <GridItem mt={10}>
          <Text fontWeight={"bolder"} mb={2}>
            NavBar
          </Text>
          <TasksProvider>
            <NavBar />
            <TaskList />
          </TasksProvider>
        </GridItem>
        <GridItem mt={10}></GridItem>
        <GridItem mt={10}></GridItem>
      </Grid>
    </Container>
  );
}

export default App;
