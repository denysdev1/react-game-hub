import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import { PlatformIconList } from './PlatformIconList';
import { CriticScore } from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { FC } from 'react';
import { Emoji } from './Emoji';

type Props = {
  game: Game;
};

export const GameCard: FC<Props> = ({ game }) => {
  const { colorMode } = useColorMode();

  const lightModeBorder = {
    boxShadow: 'none',
    border: '1px',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
  };

  const isLight = colorMode === 'light';

  return (
    <Card {...(isLight ? lightModeBorder : {})}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        borderTopRadius={10}
      ></Image>
      <CardBody borderRadius={10}>
        <HStack justifyContent='space-between' mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
