import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { FC } from 'react';

type Props = {
  handleSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

export const GenreList: FC<Props> = ({ handleSelectGenre, selectedGenre }) => {
  const { data, error, isLoading } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => handleSelectGenre(genre)}
              fontSize='lg'
              fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
              variant='link'
              overflow='hidden'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
