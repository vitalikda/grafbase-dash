import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from 'theme';
import { AuthProvider } from 'context/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grafbase</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
