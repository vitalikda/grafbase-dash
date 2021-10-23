import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { Flex, Heading, Button, Box } from '@chakra-ui/react';
import { FaGithub as GitHubIcon } from 'react-icons/fa';

import { useAuth } from 'context/auth';

const Home: NextPage = () => {
  const { user, loading, signInWithGitHub } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/');
    }
  }, [user, loading]);

  return (
    <>
      <Flex align="center" justify="center" minH="100vh" px={8}>
        <Box w="sm" p={8}>
          <Heading textAlign="center" as="h1" fontSize="3xl" mb={4}>
            Login
          </Heading>

          <Button
            leftIcon={<GitHubIcon />}
            w="full"
            size="lg"
            variant="solid"
            colorScheme="blackAlpha"
            bgColor="black"
            color="white"
            onClick={signInWithGitHub}
          >
            Sign in with GitHub
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
