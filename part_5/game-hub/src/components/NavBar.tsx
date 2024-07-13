import { Center, Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Flex>
        <Center>
          <Image src={logo} boxSize={20} />
          <Text>NavBar</Text>
        </Center>
      </Flex>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
