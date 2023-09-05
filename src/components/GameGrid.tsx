import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContainer } from './GameCardContainer';
import { FC, Fragment } from 'react';
import { GameQuery } from '../App';
import InfiniteScroll from 'react-infinite-scroll-component';

type Props = {
  gameQuery: GameQuery;
};

export const GameGrid: FC<Props> = ({ gameQuery }) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const fetchedGamesCount =
    data?.pages.reduce((acc, curr) => acc + curr.results.length, 0) || 0;

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<p>Loading...</p>}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding='10px'
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.results.map((game) => (
              <GameCardContainer key={game.name}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
