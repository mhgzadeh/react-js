import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="md"
      />
      <Show above="lg">
        <Text whiteSpace={"nowrap"}>Dark Mode</Text>
      </Show>
    </HStack>
  );
};

export default ColorModeSwitch;
