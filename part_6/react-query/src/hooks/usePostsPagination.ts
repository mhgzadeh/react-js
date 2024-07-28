import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Posts } from "./usePosts";

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePostsPagination = (query: PostQuery) => {
  return useQuery<Posts[], Error>({
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get<Posts[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((response) => response.data),
    staleTime: 1 * 60 * 1000,
  });
};

export default usePostsPagination;
