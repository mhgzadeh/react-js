import { List, ListItem, Select, Spinner } from "@chakra-ui/react";
import usePosts from "../hooks/usePosts";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

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
      <Select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        placeholder="Select option"
      >
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </Select>
      <List>
        {posts?.map((post) => (
          <ListItem key={post.id} my={2}>
            <CheckCircleIcon color={"orange.500"} me={3} />
            {post.title}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PostList;
