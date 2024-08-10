import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card
      borderRadius={10}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15 ease-in",
      }}
    >
      {children}
    </Card>
  );
};

export default GameCardContainer;
