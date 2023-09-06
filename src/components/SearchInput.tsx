import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store/gameQueryStore';

export const SearchInput: FC = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      setSearchText(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder='Search games...'
          variant='filled'
          ref={inputRef}
        />
      </InputGroup>
    </form>
  );
};
