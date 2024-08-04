import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { useReducer } from "react";
import Counter from "./state-management/components/Counter";
import TaskList from "./state-management/components/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/components/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

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
          <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
            <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
              <NavBar />
              <TaskList />
            </TasksContext.Provider>
          </AuthContext.Provider>
        </GridItem>
        <GridItem mt={10}></GridItem>
        <GridItem mt={10}></GridItem>
      </Grid>
    </Container>
  );
}

export default App;
