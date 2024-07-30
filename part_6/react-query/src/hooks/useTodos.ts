import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import TodoService, { Todo } from "../services/TodoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: TodoService.getAll,
    staleTime: 10 * 1000
  });
};

export default useTodos;
