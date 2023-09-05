import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { FC } from 'react';

type Props = {
  handleSelectPlatform: (platformId: number) => void;
  selectedPlatformId: number;
};

export const PlatformSelector: FC<Props> = ({
  handleSelectPlatform,
  selectedPlatformId,
}) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => handleSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
