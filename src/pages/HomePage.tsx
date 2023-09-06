import { Grid, Show, GridItem, HStack, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { GameGrid } from '../components/GameGrid';
import { GameHeading } from '../components/GameHeading';
import { GenreList } from '../components/GenreList';
import { PlatformSelector } from '../components/PlatformSelector';
import { SortSelector } from '../components/SortSelector';

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        sm: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '100%',
        sm: '1fr',
        lg: '200px 1fr',
      }}
    >
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Outlet />
        <Box paddingLeft={2} paddingRight={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
