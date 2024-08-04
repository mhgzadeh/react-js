import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { useReducer } from "react";
import AuthProvider from "./state-management/components/AuthProvider";
import Counter from "./state-management/components/Counter";
import NavBar from "./state-management/components/NavBar";
import TaskList from "./state-management/components/TaskList";
import TasksContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

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
          <AuthProvider>
            <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
              <NavBar />
              <TaskList />
            </TasksContext.Provider>
          </AuthProvider>
        </GridItem>
        <GridItem mt={10}></GridItem>
        <GridItem mt={10}></GridItem>
      </Grid>
    </Container>
  );
}

export default App;
