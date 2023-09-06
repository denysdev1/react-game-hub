import { FC } from 'react';
import useGameTrailer from '../hooks/useGameTrailer';

type Props = {
  id: number | string;
};

export const GameTrailer: FC<Props> = ({ id }) => {
  const { data, isLoading, error } = useGameTrailer(id!);

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error;
  }

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};
