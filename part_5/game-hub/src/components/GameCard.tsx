import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatfomIconList from "./PlatfomIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2l' mb={3}>{game.name}</Heading>
        <PlatfomIconList platforms={game.parent_platforms.map(p => p.platform)}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
