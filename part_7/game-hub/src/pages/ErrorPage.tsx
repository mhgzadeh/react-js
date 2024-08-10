import { Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, Outlet, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

// Todos: duplicate codes from the layout
const ErrorPage = () => {
  const error = useRouteError();
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

        <GridItem rowSpan={1} colSpan={5}>
          <Heading> Oops</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? error.statusText
              : "An unexpected error ocurred."}
          </Text>
        </GridItem>

        <Outlet />

        <GridItem rowSpan={1} colSpan={5}>
          footer
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
