import { Center, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Center>
        <Image src={logo} boxSize={20} />
        <Text>NavBar</Text>
      </Center>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
