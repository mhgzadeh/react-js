import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../App";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.data);

  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

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
