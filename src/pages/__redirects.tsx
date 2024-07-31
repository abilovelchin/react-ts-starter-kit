import type { Path } from '@/router';

import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '@/store';
import AsanLogin from './(auth)/asan-login';

const AUTH: Path[] = ['/login'];

type Props = {
  hasAsanLogin: boolean;
};

export const Redirects: React.FC<React.PropsWithChildren & Props> = ({
  children,
  hasAsanLogin,
}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const auth = useAppSelector((state) => state.auth);

  // Check is asan login
  if (hasAsanLogin && searchParams.get('code') && searchParams.get('state')) {
    return <AsanLogin />;
  }

  const isLoggedIn = !!auth?.data?.user?.id;

  const authenticatedOnPublicPath =
    isLoggedIn && AUTH.includes(location.pathname as Path);
  const unAuthenticatedOnPrivatePath =
    !isLoggedIn && !AUTH.includes(location.pathname as Path);

  if (authenticatedOnPublicPath) return <Navigate to="/" replace />;
  if (unAuthenticatedOnPrivatePath) return <Navigate to="/login" replace />;

  return children;
};
