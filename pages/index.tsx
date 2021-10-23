import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { Flex, Heading, Button, Box } from '@chakra-ui/react';

import { useAuth } from 'context/auth';

import LoginPage from 'components/LoginPage';

const Home: NextPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user, loading]);

  return (
    <>
      <Flex>
        <Box>
          <Heading as="h1">Hello</Heading>
          <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
