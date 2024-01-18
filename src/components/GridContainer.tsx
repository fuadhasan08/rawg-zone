import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

const GridContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={30}
    >
      {children}
    </Grid>
  );
};

export default GridContainer;
