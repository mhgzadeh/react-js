import { useContext } from "react";
import AuthStatus from "../auth/AuthStatus";
import TasksContext from "../tasks/tasksContext";
import { Box, Text } from "@chakra-ui/react";
import useCounterStore from "../counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const { counter } = useCounterStore();
  return (
    <Box>
      <AuthStatus />
      <Text mb={2}>Number of Tasks: {tasks.length}</Text>
      <Text mb={2}>Counter: ({counter})</Text>
    </Box>
  );
};

export default NavBar;
