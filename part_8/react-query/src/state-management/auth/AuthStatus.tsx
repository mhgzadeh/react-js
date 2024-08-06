import { Button, HStack, Text } from "@chakra-ui/react";
import useAuthStore from "./store";

const AuthStatus = () => {
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <HStack>
        <Button onClick={() => logout()} colorScheme={"blue"} mb={2}>
          Logout
        </Button>
        <Text>{user}</Text>
      </HStack>
    );

  return (
    <Button onClick={() => login('Mohammad')} colorScheme="red" mb={2}>
      Login
    </Button>
  );
};

export default AuthStatus;
