import { Container, Grid, GridItem } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import PostList from "./components/PostList";

function App() {
  return (
    <Container maxW={"6xl"}>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem mt={10}>
          <TodoList />
        </GridItem>
        <GridItem mt={10}>
          <PostList />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
