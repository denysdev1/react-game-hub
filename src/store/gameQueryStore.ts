import { create } from 'zustand';

type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
};

type GameQueryStore = {
  gameQuery: GameQuery;
  selectGenre: (genreId: number) => void;
  selectPlatform: (platformId: number) => void;
  selectSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  selectGenre: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  selectPlatform: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  selectSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;
