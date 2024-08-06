import { Box, Button, HStack } from "@chakra-ui/react";
import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, reset } = useCounterStore();

  return (
    <HStack>
      <Box>Counter: ({counter})</Box>
      <Box>
        <Button onClick={() => increment()} colorScheme="blue" me={3}>
          Increment
        </Button>
        <Button onClick={() => reset()} colorScheme="orange">
          Reset
        </Button>
      </Box>
    </HStack>
  );
};

export default Counter;
