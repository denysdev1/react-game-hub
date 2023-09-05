import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import { FC } from 'react';

type Props = {
  gameQuery: GameQuery;
};

export const GameHeading: FC<Props> = ({ gameQuery }) => {
  const heading = `${gameQuery?.platform?.name || ''} ${
    gameQuery?.genre?.name || ''
  } Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};
