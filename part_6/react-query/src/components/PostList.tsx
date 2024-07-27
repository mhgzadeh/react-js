import { List, ListItem, Spinner } from "@chakra-ui/react";
import usePosts from "../hooks/usePosts";
import { CheckCircleIcon } from "@chakra-ui/icons";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();

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
    <List>
      {posts?.map((post) => (
        <ListItem key={post.id} mb={2}>
          <CheckCircleIcon color={"orange.500"} me={3} />
          {post.body}
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
