import { HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NavBar: FC = () => {
  return (
    <HStack padding='10px'>
      <Link to='/'>
        <Image src={Logo} boxSize='60px' objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
