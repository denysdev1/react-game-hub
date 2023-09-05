import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms');

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll(),
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms,
  });
};

export default usePlatforms;
