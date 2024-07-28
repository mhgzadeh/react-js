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

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post("https://jsonplaceholder.typicode.com/todos", todo)
        .then((response) => response.data),
    onSuccess: (savedTodos) => {
      // APPROACH: Invalidating the cache
      //   queryClient.invalidateQueries({
      //     queryKey: ['todos']
      //   })
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodos,
        ...(todos || []),
      ]);

      if (ref.current) ref.current.value = "";
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
