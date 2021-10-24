import type { NextPage } from 'next';
import { HStack, VStack } from '@chakra-ui/react';

import { Sidebar } from 'components/Sidebar';

const DashboardView: NextPage = ({ children }) => {
  return (
    <>
      <HStack width="full" alignItems="flex-start" overflow="hidden">
        <Sidebar />

        <VStack
          pt={8}
          px={8}
          width="full"
          height="full"
          spacing={6}
          overflow="hidden"
        >
          {children}
        </VStack>
      </HStack>
    </>
  );
};

export default DashboardView;
