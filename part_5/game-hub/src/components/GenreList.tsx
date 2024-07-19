import { List, ListItem } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenreList;
