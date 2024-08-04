import { useContext } from "react";
import Loginstatus from "./LoginStatus";
import TasksContext from "../tasks/tasksContext";
import { Box, Text } from "@chakra-ui/react";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <Box>
      <Loginstatus />
      <Text mb={2}>Number of Tasks: {tasks.length}</Text>
    </Box>
  );
};

export default NavBar;
