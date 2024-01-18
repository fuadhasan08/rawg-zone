import GameList from "./GameList";
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameSkeleton from "./GameSkeleton";
import GridContainer from "./GridContainer";

const GameGrid = () => {
  const { games, loading, error } = useGames();

  if (loading) {
    return (
      <GridContainer>
        {Array.from({ length: 12 }).map(() => {
          return <GameSkeleton />;
        })}
      </GridContainer>
    );
  }

  return (
    <GridContainer>
      {error && <Text color="red">{error}</Text>}
      {games.map((item) => {
        return <GameList game={item} key={item.id} />;
      })}
    </GridContainer>
  );
};

export default GameGrid;
