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
import useGameQueryStore from '../store/gameQueryStore';

export const GenreList: FC = () => {
  const { genreId } = useGameQueryStore((s) => s.gameQuery);
  const selectGenre = useGameQueryStore((s) => s.selectGenre);
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
                onClick={() => selectGenre(genre.id)}
                fontSize='lg'
                fontWeight={genreId === genre.id ? 'bold' : 'normal'}
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
