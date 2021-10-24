import NextLink from 'next/link';
import { Icon, Text, HStack, Box, Link } from '@chakra-ui/react';

import type { NavItem as Item } from './types';

interface Props {
  item: Item;
  isActive: boolean;
}

export const NavItem = ({ isActive, item }: Props) => {
  const { label, icon, href } = item;

  return (
    <NextLink href={href ? href : '#'} passHref>
      <Link variant="unstyled" _hover={{ textDecoration: 'none' }}>
        <HStack
          align="center"
          justify="flex-start"
          height={{ base: 12, xl: 14 }}
          bg={isActive ? 'gray.100' : ''}
          _hover={{
            background: 'gray.200',
          }}
        >
          {isActive && <Box width={1} height="full" mr={3} bg="gray.dark" />}

          <Icon
            width={4}
            height={4}
            mr={1}
            ml={6}
            color={isActive ? 'gray.dark' : 'gray.light'}
            as={icon}
          />
          <Text
            fontSize="sm"
            fontWeight="medium"
            flex={1}
            letterSpacing="wider"
            color={isActive ? 'gray.dark' : 'gray.light'}
          >
            {label}
          </Text>
        </HStack>
      </Link>
    </NextLink>
  );
};
