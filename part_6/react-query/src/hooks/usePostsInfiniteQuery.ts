import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Posts } from "./usePosts";

interface PostQuery {
  pageSize: number;
}

const usePostsInfiniteQuery = (query: PostQuery) => {
  return useInfiniteQuery<Posts[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam }: {pageParam: number}) =>
      axios
    .get<Posts[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _start: (pageParam - 1) * query.pageSize,
        _limit: query.pageSize,
      },
    })
    .then((response) => response.data),
    staleTime: 1 * 60 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.length > 0 ? allPage.length + 1 : undefined;
    },
  });
};

export default usePostsInfiniteQuery;
