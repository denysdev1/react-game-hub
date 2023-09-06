import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const GameCardContainer: FC<Props> = ({ children }) => {
  return (
    <Box
      borderRadius={10}
      overflow='hidden'
      transition='transform 0.2s'
      _hover={{ transform: 'scale(1.03)' }}
    >
      {children}
    </Box>
  );
};
