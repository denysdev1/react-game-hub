import { HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';
import { FC } from 'react';

type Props = {
  handleSearch: (searchText: string) => void;
};

export const NavBar: FC<Props> = ({ handleSearch }) => {
  return (
    <HStack padding='10px'>
      <Image src={Logo} boxSize='60px' />
      <SearchInput handleSearch={handleSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
