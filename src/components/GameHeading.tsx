import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import { FC } from 'react';
import usePlatforms from '../hooks/usePlatforms';
import useGenres from '../hooks/useGenres';

type Props = {
  gameQuery: GameQuery;
};

export const GameHeading: FC<Props> = ({ gameQuery }) => {
  const { data: platformsData } = usePlatforms();
  const { data: genresData } = useGenres();

  const selectedPlatform = platformsData?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const selectedGenre = genresData?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );

  const heading = `${selectedPlatform?.name || ''} ${
    selectedGenre?.name || ''
  } Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};
