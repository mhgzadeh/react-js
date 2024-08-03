import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";
import usePostsPagination from "../hooks/usePostsPagination";

const PostListPagination = () => {
  const pageSize = 10;
  const [page, setPage] = useState<number>(1);
  const {
    data: posts,
    error,
    isLoading,
  } = usePostsPagination({ page, pageSize });

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
        {posts?.map((post) => (
          <ListItem key={post.id} my={2}>
            <CheckCircleIcon color={"orange.500"} me={3} />
            {post.title}
          </ListItem>
        ))}
      </List>
      <Button
        colorScheme="green"
        isDisabled={page === 1}
        onClick={() => setPage(page - 1)}
        me={2}
      >
        Previous
      </Button>
      <Button colorScheme="green" onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </>
  );
};

export default PostListPagination;
