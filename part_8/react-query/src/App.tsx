import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { useReducer } from "react";
import Counter from "./state-management/components/Counter";
import TaskList from "./state-management/components/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/components/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

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
          <TasksContext.Provider value={{ tasks, dispatch }}>
            <NavBar />
            <TaskList />
          </TasksContext.Provider>
        </GridItem>
        <GridItem mt={10}></GridItem>
        <GridItem mt={10}></GridItem>
      </Grid>
    </Container>
  );
}

export default App;
