import { Button, HStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import AuthContext from "./authContext";

const AuthStatus = () => {
  const { user, dispatch } = useContext(AuthContext);

  if (user)
    return (
      <HStack>
        <Button
          onClick={() => dispatch({ type: "LOGOUT" })}
          colorScheme={"blue"}
          mb={2}
        >
          Logout
        </Button>
        <Text>{user}</Text>
      </HStack>
    );

  return (
    <Button
      onClick={() => dispatch({ type: "LOGIN", username: "Mohammad" })}
      colorScheme="red"
      mb={2}
    >
      Login
    </Button>
  );
};

export default AuthStatus;
