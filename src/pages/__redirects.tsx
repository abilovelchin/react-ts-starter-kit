import type { Path } from '@/router';

import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/store';

const AUTH: Path[] = ['/login'];

export const Redirects: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  const auth = useAppSelector((state) => state.auth);
  const isLoggedIn = !!auth?.user?.id;

  const authenticatedOnPublicPath =
    isLoggedIn && AUTH.includes(location.pathname as Path);
  const unAuthenticatedOnPrivatePath =
    !isLoggedIn && !AUTH.includes(location.pathname as Path);

  if (authenticatedOnPublicPath) return <Navigate to="/" replace />;
  if (unAuthenticatedOnPrivatePath) return <Navigate to="/login" replace />;

  return children;
};
