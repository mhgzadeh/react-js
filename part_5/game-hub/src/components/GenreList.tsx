import { List, ListItem } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenreList;
