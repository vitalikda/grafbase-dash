import { Flex, Link, Text } from '@chakra-ui/react';

export const Support = () => {
  return (
    <Link
      width="full"
      variant="unstyled"
      color="gray"
      _hover={{ textDecoration: 'none', color: 'gray.dark' }}
    >
      <Flex width="full" px={6} py={2}>
        <Text size="sm">Help &amp; Support</Text>
      </Flex>
    </Link>
  );
};
