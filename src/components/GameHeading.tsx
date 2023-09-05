import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import { FC } from 'react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

type Props = {
  gameQuery: GameQuery;
};

export const GameHeading: FC<Props> = ({ gameQuery }) => {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);

  const heading = `${selectedPlatform?.name || ''} ${
    selectedGenre?.name || ''
  } Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};
