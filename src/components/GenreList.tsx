import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { FC } from 'react';

type Props = {
  handleSelectGenre: (genreId: number) => void;
  selectedGenreId: number;
};

export const GenreList: FC<Props> = ({
  handleSelectGenre,
  selectedGenreId,
}) => {
  const { data, error, isLoading } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading fontSize='2xl' mb={3}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => handleSelectGenre(genre.id)}
                fontSize='lg'
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                variant='link'
                whiteSpace='normal'
                textAlign='left'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
