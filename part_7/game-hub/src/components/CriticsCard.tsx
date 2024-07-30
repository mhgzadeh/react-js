import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticsCard = ({ score }: Props) => {
  let color = score > 89 ? "green" : score > 79 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize={14} px={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticsCard;
