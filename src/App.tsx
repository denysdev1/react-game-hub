import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { NavBar } from './components/NavBar';
import { GameGrid } from './components/GameGrid';
import { GenreList } from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import { PlatformSelector } from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import { SortSelector } from './components/SortSelector';

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
};

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handleSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList
            handleSelectGenre={handleSelectGenre}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            handleSelectPlatform={handleSelectPlatform}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            handleSelectSortOrder={handleSelectSortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
