import { Container, Grid, GridItem } from "@chakra-ui/react";
import TodoList from "./components/TodoList";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  return (
    <Container maxW={"6xl"}>
      <Grid>
        <GridItem mt={10}>
          <TodoList />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
