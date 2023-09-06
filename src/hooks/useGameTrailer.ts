import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Trailer } from '../entities/Trailer';

const useGame = (id: string | number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ['trailer', id],
    queryFn: () => apiClient.getAll(),
  });
};

export default useGame;
