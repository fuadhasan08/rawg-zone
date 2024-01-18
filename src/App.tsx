import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  const gridLayout = {
    base: `"header"
    "main"`,
    lg: `"header header"
    "nav main"`,
  };

  return (
    <Grid templateAreas={gridLayout} color="blackAlpha.700" paddingX={15}>
      <GridItem area={"header"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"nav"}>Nav</GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
