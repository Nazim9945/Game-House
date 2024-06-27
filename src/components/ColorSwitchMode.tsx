import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorSwitchMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace={'nowrap'}>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
}

export default ColorSwitchMode
