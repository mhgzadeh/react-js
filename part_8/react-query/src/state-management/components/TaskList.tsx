import { Box, Button, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { useReducer } from "react";
import tasksReducer from "../reducer/tasksReducer";

const TaskList = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <Box>
      <Button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
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
