import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  GridItem,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <GridItem rowSpan={1} colSpan={5}>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </GridItem>
  );
};

export default GameDetailPage;
