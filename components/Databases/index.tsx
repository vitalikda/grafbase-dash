import type { NextPage } from 'next';
import { HStack, Button, List } from '@chakra-ui/react';

import Header from 'components/TheHeader';
import DatabaseItem from './Item';

const Databases: NextPage = () => {
  return (
    <>
      <Header title="Databases">
        <Button
          size="sm"
          variant="solid"
          colorScheme="blackAlpha"
          bgColor="black"
          color="white"
        >
          Add New Database
        </Button>
      </Header>

      <HStack
        px={4}
        width="full"
        alignItems="center"
        overflow="hidden"
        flex={1}
      >
        <List w="full" mb={4} spacing={4}>
          <DatabaseItem />
          <DatabaseItem />
          <DatabaseItem />
        </List>
      </HStack>
    </>
  );
};

export default Databases;
