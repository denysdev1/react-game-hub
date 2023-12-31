import { FC } from 'react';
import useScreenshots from '../hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';

type Props = {
  gameId: number | string;
};

export const GameScreenshots: FC<Props> = ({ gameId }) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};
