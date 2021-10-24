import type { NextPage } from 'next';
import { HStack, Heading, Spacer } from '@chakra-ui/react';

const TheHeader: NextPage<{ title: string }> = ({ children, title }) => {
  return (
    <HStack width="full" alignItems="center" overflow="hidden" flex={1} px={4}>
      <Heading>{title}</Heading>
      <Spacer />

      {children}
    </HStack>
  );
};

export default TheHeader;
