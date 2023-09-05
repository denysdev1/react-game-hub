import APIClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import ms from 'ms';

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
    staleTime: ms('24h'),
    initialData: genres,
  });
};

export default useGenres;
