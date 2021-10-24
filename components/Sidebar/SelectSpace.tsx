import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaChevronDown as ChevronDownIcon } from 'react-icons/fa';

interface SpaceItem {
  id: string;
  label: string;
}

const spaceItems = [
  { id: '1', label: 'Personal Space' },
  { id: '2', label: 'Working Space' },
];

export const SelectSpace = () => {
  const [selectedItem, selectItem] = useState<SpaceItem | undefined>(undefined);

  useEffect(() => {
    if (!selectedItem?.id) selectItem(spaceItems[0]);
  }, [selectedItem]);

  const handleSelect = (id: string) => {
    const spaceItem = spaceItems.find((item) => item.id === id);
    selectItem(spaceItem);
  };

  return (
    <Box
      w="full"
      px={6}
      py={4}
      borderTopColor="gray.100"
      borderTopWidth={1}
      borderBottomColor="gray.100"
      borderBottomWidth={1}
    >
      <Menu isLazy>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          w="full"
          variant="outline"
          size="sm"
        >
          {selectedItem?.label}
        </MenuButton>
        {selectedItem?.id && (
          <MenuList>
            <MenuOptionGroup
              type="radio"
              defaultValue={selectedItem?.id}
              onChange={(value: any) => {
                handleSelect(value);
              }}
            >
              {spaceItems.map((item) => (
                <MenuItemOption key={item.id} value={item.id}>
                  {item.label}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
            <MenuDivider />
            <MenuItem onClick={() => alert('Here will be a Modal')}>
              Create New Space
            </MenuItem>
          </MenuList>
        )}
      </Menu>
    </Box>
  );
};
