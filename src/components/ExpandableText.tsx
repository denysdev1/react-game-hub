import { Button, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';

interface Props {
  children: string;
}

export const ExpandableText: FC<Props> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.slice(0, limit) + '...';

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <Text>
      {summary}
      <Button
        size='xs'
        colorScheme='yellow'
        fontWeight='bold'
        onClick={toggleExpanded}
        ml={1}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </Button>
    </Text>
  );
};
