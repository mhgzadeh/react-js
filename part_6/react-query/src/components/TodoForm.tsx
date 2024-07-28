import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import useAddTodo from "./useAddTodos";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

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
