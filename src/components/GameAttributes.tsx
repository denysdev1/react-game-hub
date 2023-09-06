import { SimpleGrid, Text } from '@chakra-ui/react';
import { CriticScore } from './CriticScore';
import { DefinitionItem } from './DefinitionItem';
import { Game } from '../entities/Game';
import { FC } from 'react';

type Props = {
  game: Game;
};

export const GameAttributes: FC<Props> = ({ game }) => (
  <SimpleGrid as='dl' columns={2}>
    <DefinitionItem term='Platforms'>
      {game.parent_platforms?.map(({ platform }) => (
        <Text key={platform.id}>{platform.name}</Text>
      ))}
    </DefinitionItem>
    <DefinitionItem term='Metascore'>
      <CriticScore score={game.metacritic} />
    </DefinitionItem>
    <DefinitionItem term='Genres'>
      {game.genres?.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </DefinitionItem>
    <DefinitionItem term='Publishers'>
      {game.publishers?.map((publisher) => (
        <Text key={publisher.id}>{publisher.name}</Text>
      ))}
    </DefinitionItem>
  </SimpleGrid>
);
