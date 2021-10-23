import type { AppProps } from 'next/app';
import Head from 'next/head';

import { AuthProvider } from 'context/auth';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grafbase</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ChakraProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
