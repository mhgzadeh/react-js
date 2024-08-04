import { useReducer } from "react";
import authReducer from "../reducer/authReducer";
import { Button, HStack, Text } from "@chakra-ui/react";

const Loginstatus = () => {
  const [user, dispatch] = useReducer(authReducer, "");
  if (user)
    return (
      <HStack>
        <Button onClick={() => dispatch({ type: "LOGOUT" })} colorScheme={'blue'}>Logout</Button>
        <Text>{user}</Text>
      </HStack>
    );
  return (
    <Button onClick={() => dispatch({ type: "LOGIN", username: "Mohammad" })} colorScheme="red">
      Login
    </Button>
  );
};

export default Loginstatus;
