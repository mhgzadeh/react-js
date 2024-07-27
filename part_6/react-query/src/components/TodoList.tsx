import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../App";
import { List, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todosa")
      .then((response) => response.data);

  const { data: todos, error } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (error) return <p>{error.message}</p>

  return (
    <List>
      {todos?.map((todo) => (
        <ListItem key={todo.id} mb={2}>
          <CheckCircleIcon color={'green.500'} me={3}/>
          {todo.title}
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
