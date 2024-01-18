import { Box, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display="flex" gap={2} alignItems="center">
      <Text>{colorMode == "light" ? "Dark Mode" : "Light Mode"}</Text>
      <Switch
        size="md"
        colorScheme="teal"
        onChange={toggleColorMode}
        id="toggle"
        isChecked={colorMode === "dark"}
      />
    </Box>
  );
};

export default ColorSwitch;
