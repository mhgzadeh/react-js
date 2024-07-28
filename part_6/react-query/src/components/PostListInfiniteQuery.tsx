import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import usePostsInfiniteQuery from "../hooks/usePostsInfiniteQuery";
import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const PostListInfiniteQuery = () => {
  const pageSize = 10;
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = usePostsInfiniteQuery({ pageSize });

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <List>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <ListItem my={2}>
                <CheckCircleIcon color={"yellow"} me={3} />
                {post.title}
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
      <Button
        colorScheme="green"
        isLoading={isFetchingNextPage}
        disabled={!hasNextPage}
        onClick={() => fetchNextPage()}
      >
        Load More
      </Button>
    </>
  );
};

export default PostListInfiniteQuery;
