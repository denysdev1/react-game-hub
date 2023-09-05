import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

type Props = {
  handleSearch: (searchText: string) => void;
};

export const SearchInput: FC<Props> = ({ handleSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      handleSearch(inputRef.current.value);
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
