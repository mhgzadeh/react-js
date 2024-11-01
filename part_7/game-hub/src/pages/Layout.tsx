import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Container maxW={"8xl"}>
      <Grid
        templateRows="repeat(3)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        columnGap={{
          base: 0,
          lg: 4,
        }}
        rowGap={{
          base: 0,
          lg: 4,
        }}
      >
        <GridItem rowSpan={1} colSpan={5}>
          <NavBar />
        </GridItem>

        <Outlet />

        <GridItem rowSpan={1} colSpan={5}>
          footer
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Layout;
