import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { NavBar } from './components/NavBar';
import { GameGrid } from './components/GameGrid';
import { GenreList } from './components/GenreList';
import { useState } from 'react';
import { PlatformSelector } from './components/PlatformSelector';
import { SortSelector } from './components/SortSelector';
import { GameHeading } from './components/GameHeading';

export type GameQuery = {
  genreId: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
};

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genreId: number) => {
    setGameQuery({ ...gameQuery, genreId });
  };

  const handleSelectPlatform = (platformId: number) => {
    setGameQuery({ ...gameQuery, platformId });
  };

  const handleSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const handleSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        sm: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '100%',
        sm: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar handleSearch={handleSearch} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList
            handleSelectGenre={handleSelectGenre}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2} paddingRight={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              handleSelectPlatform={handleSelectPlatform}
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              handleSelectSortOrder={handleSelectSortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
