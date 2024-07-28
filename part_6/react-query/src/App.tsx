import { Container, Grid, GridItem } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import PostList from "./components/PostList";
import PostListPagination from "./components/PostListPagination";
import PostListInfiniteQuery from "./components/PostListInfiniteQuery";

function App() {
  return (
    <Container maxW={"8xl"}>
      <Grid templateColumns="repeat(4, 1fr)" columnGap={5}>
        <GridItem mt={10}>
          <TodoList />
        </GridItem>
        <GridItem mt={10}>
          <PostListPagination />
        </GridItem>
        <GridItem mt={10}>
          <PostListInfiniteQuery />
        </GridItem>
        <GridItem mt={10}>
          <PostList />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
