import { List, ListItem, Spinner } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import useTodos from "../hooks/useTodos";

const TodoList = () => {

  const {
    data: todos,
    error,
    isLoading,
  } = useTodos()

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  if (error) return <p>{error.message}</p>;

  return (
    <List>
      {todos?.map((todo) => (
        <ListItem key={todo.id} mb={2}>
          <CheckCircleIcon color={"green.500"} me={3} />
          {todo.title}
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
