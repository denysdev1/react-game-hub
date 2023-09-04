import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import { PlatformIconList } from './PlatformIconList';
import { CriticScore } from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { FC } from 'react';

type Props = {
  game: Game;
};

export const GameCard: FC<Props> = ({ game }) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
