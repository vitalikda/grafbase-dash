import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  FaChevronRight as ChevronRightIcon,
  FaChevronUp as ChevronUpIcon,
} from 'react-icons/fa';
import { BsGear } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from 'context/auth';

export const ProfileMenu = () => {
  const { logout } = useAuth();

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={IconButton}
            icon={isOpen ? <ChevronUpIcon /> : <ChevronRightIcon />}
            variant="link"
          />
          <MenuList>
            <MenuItem icon={<BsGear />}>Settings</MenuItem>
            <MenuItem icon={<FiLogOut />} onClick={logout}>
              Log Out
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
