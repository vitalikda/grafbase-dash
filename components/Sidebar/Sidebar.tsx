import { List, ListItem, VStack } from '@chakra-ui/react';

import { Logo } from 'components/Logo';

import { NavItems } from './NavItems';
import { NavItem } from './NavItem';
import { SelectSpace } from './SelectSpace';
import { Profile } from './Profile';
import { Support } from './Support';

export const Sidebar = () => {
  return (
    <VStack
      justifyContent="space-between"
      width={{ base: 56, xl: 60 }}
      height="100vh"
      borderRightColor="lightgray"
      borderRightWidth={2}
      flexShrink={0}
    >
      <VStack width="full">
        <Logo />

        <SelectSpace />

        <List width="full" overflowY="auto">
          {NavItems.map((item, index) => (
            <ListItem key={item.label}>
              <NavItem item={item} isActive={index === 0} />
            </ListItem>
          ))}
        </List>
      </VStack>

      <VStack width="full">
        <Support />

        <Profile />
      </VStack>
    </VStack>
  );
};
