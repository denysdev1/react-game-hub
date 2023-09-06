import { Box, Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
  term: string;
  children: ReactNode | ReactNode[];
};

export const DefinitionItem: FC<Props> = ({ term, children }) => {
  return (
    <Box my={5}>
      <Heading as='dt' fontSize='md' color='gray.600'>
        {term}
      </Heading>
      <dd>
        {children}
      </dd>
    </Box>
  );
};
