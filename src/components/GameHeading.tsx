import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store/gameQueryStore';

export const GameHeading: FC = () => {
  const { genreId, platformId } = useGameQueryStore((s) => s.gameQuery);
  const selectedGenre = useGenre(genreId);
  const selectedPlatform = usePlatform(platformId);

  const heading = `${selectedPlatform?.name || ''} ${
    selectedGenre?.name || ''
  } Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};
