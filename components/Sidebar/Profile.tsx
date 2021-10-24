import {
  Flex,
  HStack,
  Avatar,
  Text,
  Center,
  SkeletonCircle,
  Skeleton,
} from '@chakra-ui/react';

import { useAuth } from 'context/auth';
import { ProfileMenu } from './ProfileMenu';

export const Profile = () => {
  const { user } = useAuth();

  return (
    <Flex
      py={4}
      align="center"
      width="full"
      height={{ base: 14, xl: 16 }}
      borderTopColor="gray.100"
      borderTopWidth={1}
    >
      {user ? (
        <HStack>
          <Avatar
            mr={1}
            ml={6}
            size="sm"
            borderRadius="md"
            name={user?.name}
            src={user?.photoUrl}
          />
          <Text
            fontSize="sm"
            fontWeight="medium"
            flex={1}
            letterSpacing="wider"
            maxW="120px"
            isTruncated
          >
            {user?.name}
          </Text>
        </HStack>
      ) : (
        <HStack w="full" py={3}>
          <SkeletonCircle mr={1} ml={6} size="6" />
          <Skeleton w="100px" h="18px" />
        </HStack>
      )}

      <Center ml="auto" mr={2}>
        <ProfileMenu />
      </Center>
    </Flex>
  );
};
