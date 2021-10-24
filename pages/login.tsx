import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { useAuth } from 'context/auth';
import LoginView from 'components/Layouts/Auth';

const Login: NextPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, loading]);

  if (!user) return <LoginView />;
  return null;
};

export default Login;
