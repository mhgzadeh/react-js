import { useReducer } from "react";
import counterReducer from "../reducer/counterReducer";
import { Box, Button, HStack } from "@chakra-ui/react";

const Counter = () => {
  // const [value, setValue] = useState(0);
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <HStack justifyContent={"space-between"}>
      <Box>Counter: ({value})</Box>
      <Box>
        <Button
          onClick={() => dispatch({ type: "INCREMENT" })}
          colorScheme="blue"
          me={3}
        >
          Increment
        </Button>
        <Button
          onClick={() => dispatch({ type: "RESET" })}
          colorScheme="orange"
        >
          Reset
        </Button>
      </Box>
    </HStack>
  );
};

export default Counter;
