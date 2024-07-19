import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatfomIconList from "./PlatfomIconList";
import CriticsCard from "./CriticsCard";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2l" mb={3}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatfomIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsCard score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
