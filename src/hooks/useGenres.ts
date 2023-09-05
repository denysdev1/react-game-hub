import APIClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';

const apiClient = new APIClient<Genre>('/genres');

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
