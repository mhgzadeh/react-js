import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiClient = new APIClient<Todo>('/todos') // sending a Todo ob

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000
  });
};

export default useTodos;
