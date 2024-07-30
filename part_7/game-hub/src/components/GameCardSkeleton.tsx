import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Skeleton height={"300px"} borderRadius={10} overflow="hidden">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
