import platforms from '../data/platforms';

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => ({ data: platforms, isLoading: null, error: null });

export default usePlatforms;
