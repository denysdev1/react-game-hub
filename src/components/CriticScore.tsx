import { Badge } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  score: number;
};

export const CriticScore: FC<Props> = ({ score }) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge fontSize='14px' paddingX={2} borderRadius='4px' colorScheme={color}>
      {score}
    </Badge>
  );
};
