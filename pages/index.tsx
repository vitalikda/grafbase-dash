import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { useAuth } from 'context/auth';
import LoadingView from 'components/Layouts/Loading';
import DashboardView from 'components/Layouts/Dashboard';
import Databases from 'components/Databases';

const Home: NextPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading]);

  if (loading) return <LoadingView />;
  if (user)
    return (
      <DashboardView>
        <Databases />
      </DashboardView>
    );
  return null;
};

export default Home;
