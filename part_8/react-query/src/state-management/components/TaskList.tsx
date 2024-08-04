import { Box, Button, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { useContext } from "react";
import TasksContext from "../contexts/tasksContext";
import AuthContext from "../contexts/authContext";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  return (
    <Box>
      <Button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: {
              id: Date.now(),
              title: "Task " + Date.now() + " by: " + user,
            },
          })
        }
        colorScheme="green"
        mb={3}
      >
        Add
      </Button>
      <List>
        {tasks.map((task) => {
          return (
            <ListItem key={task.id}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={3}
              >
                <Text>{task.title}</Text>
                <Button
                  onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
                  colorScheme="red"
                  size={"sm"}
                >
                  Delete
                </Button>
              </Flex>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default TaskList;
