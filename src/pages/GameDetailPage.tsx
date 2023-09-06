import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { ExpandableText } from '../components/ExpandableText';
import { GameAttributes } from '../components/GameAttributes';
import { GameTrailer } from '../components/GameTrailer';
import { GameScreenshots } from '../components/GameScreenshots';

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer id={game.id} />
        <GameScreenshots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};
