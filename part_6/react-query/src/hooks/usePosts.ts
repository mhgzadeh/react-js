import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePosts = (userId: number | undefined) => {
  return useQuery<Posts[], Error>({
    // /users/1/posts
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    // axios use the https://jsonplaceholder.typicode.com/posts?userId=2 
    // for filter the posts based on users
    queryFn: () =>
      axios
        .get<Posts[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userId,
          },
        })
        .then((response) => response.data),
    staleTime: 1 * 60 * 1000, //1m
  });
};

export default usePosts;
