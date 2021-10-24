import type { NextPage } from 'next';
import { Flex, Spinner } from '@chakra-ui/react';

const LoadingView: NextPage = () => {
  return (
    <>
      <Flex align="center" justify="center" minH="100vh" px={8}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.400"
          size="xl"
        />
      </Flex>
    </>
  );
};

export default LoadingView;
