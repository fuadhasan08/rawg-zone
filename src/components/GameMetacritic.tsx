import { Text } from "@chakra-ui/react";

const GameMetacritic = ({ metacritic }: { metacritic: number }) => {
  let color = "red";

  metacritic > 60 && (color = "yellow.600");
  metacritic > 80 && (color = "orange");
  metacritic > 90 && (color = "green.400");

  return (
    <Text bg={color} padding={1} borderRadius={5}>
      {metacritic}
    </Text>
  );
};

export default GameMetacritic;
