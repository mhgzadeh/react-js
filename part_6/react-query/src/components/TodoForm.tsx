import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "../hooks/useTodos";

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post("https://jsonplaceholder.typicode.com/todos", todo)
        .then((response) => response.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      if (ref.current) ref.current.value = "";

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });

  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      {addTodo.error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{addTodo.error.message}</AlertTitle>
        </Alert>
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value) {
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
          }
        }}
      >
        <FormControl mb={3}>
          <FormLabel>New Todos</FormLabel>
          <Input ref={ref} type="text" />
          <Button
            disabled={addTodo.isPending}
            isLoading={addTodo.isPending}
            mt={2}
            colorScheme="teal"
            type="submit"
            size="sm"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default TodoForm;
