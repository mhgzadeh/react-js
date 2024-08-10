import { CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatfomIconList from "./PlatfomIconList";
import CriticsCard from "./CriticsCard";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} mb={4}>
          <PlatfomIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsCard score={game.metacritic} />
        </HStack>
        <Heading fontSize="2l">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </GameCardContainer>
  );
};

export default GameCard;
